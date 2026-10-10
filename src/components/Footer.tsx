import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaFacebook, FaInstagram, FaXTwitter, FaGithub } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 px-5">
      <div className="max-w-6xl mx-auto">
        {/* Newsletter Section */}
        <div className="border-b border-gray-700 pb-6 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-white font-bold">Subscribe to our newsletter</h3>
            <p>Get updates on food donation programs and waste reduction tips.</p>
          </div>
          <div className="flex items-center space-x-2">
            <Input type="email" placeholder="Enter your email" className="w-60 bg-gray-800 text-white" />
            <Button className="bg-indigo-600 hover:bg-green-500">Subscribe</Button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
          <div>
            <h4 className="text-white font-semibold">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">FAQs</a></li>
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold">WastwWise</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="flex justify-between items-center border-t border-gray-700 pt-6 text-sm">
          <p>&copy; 2025 WasteWise. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white"><FaFacebook size={20} /></a>
            <a href="#" className="hover:text-white"><FaInstagram size={20} /></a>
            <a href="#" className="hover:text-white"><FaXTwitter size={20} /></a>
            <a href="#" className="hover:text-white"><FaGithub size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
