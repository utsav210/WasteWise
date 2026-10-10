"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { Menu, Search, User } from "lucide-react";
import Image from "next/image";
import logo from "@/public/WasteWise.png";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [userRole, setUserRole] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setUserRole(localStorage.getItem("userRole"));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userRole");
    router.push("/login");
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Find", href: "/findFood" },
    { name: "Donate", href: "/donate" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src={logo} alt="WasteWise Logo" width={160} height={160} priority />
          {/* <span className="text-xl font-semibold">WasteWise</span> */}
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={cn("text-gray-600 hover:text-gray-900", pathname === link.href && "font-bold")}>
              {link.name}
            </Link>
          ))}
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center space-x-2 ml-4">
          <Input type="text" placeholder="Search..." className="w-60" />
          <Button variant="ghost" className="-ml-12">
            <Search className="w-5 h-5 " />
          </Button>
        </div>

        {/* User Profile Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="rounded-full w-10 h-10 p-2">
              <User className="w-5 h-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {userRole ? (
              <>
                <DropdownMenuItem onClick={() => router.push("/dashboard")}>Dashboard</DropdownMenuItem>
                {userRole === "Donor" && (
                  <>
                    <DropdownMenuItem onClick={() => router.push("/my-donations")}>My Donations</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => router.push("/messages")}>Messages</DropdownMenuItem>
                  </>
                )}
                {userRole === "Recipient" && (
                  <>
                    <DropdownMenuItem onClick={() => router.push("/my-requests")}>My Requests</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => router.push("/messages")}>Messages</DropdownMenuItem>
                  </>
                )}
                {userRole === "Admin" && (
                  <>
                    <DropdownMenuItem onClick={() => router.push("/admin/dashboard")}>Admin Dashboard</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => router.push("/manage-users")}>Manage Users</DropdownMenuItem>
                  </>
                )}
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
              </>
            ) : (
              <>
                <DropdownMenuItem onClick={() => router.push("/login")}>Sign In</DropdownMenuItem>
                <DropdownMenuItem onClick={() => router.push("/register")}>Sign Up</DropdownMenuItem>
              </>
            )}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Mobile Menu Button */}
        <Button variant="ghost" className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <Menu className="w-6 h-6" />
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg absolute w-full left-0 top-full">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="block px-6 py-3 text-gray-700 hover:bg-gray-100">
              {link.name}
            </Link>
          ))}
          <div className="p-4 border-t">
            <Input type="text" placeholder="Search..." className="w-full mb-2" />
            <Button variant="outline" className="w-full">
              <Search className="w-5 h-5 mr-2" /> Search
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
