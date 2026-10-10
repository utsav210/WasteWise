"use client";
import Image from "next/image";
import Earth from "@/public/Earth.jpg";
import Link from "next/link";
import compostImage from "@/public/compost.png";
import ngoImage from "@/public/ngo.png";
import FeaturesSection from "@/components/ui/FeaturesSection";
import Faq from "@/components/Faq";
import Testimonials from "@/components/Testimonials";
import Impact from "@/components/Impact";
import { useSession } from "next-auth/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  const { data: session } = useSession();

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-white to-blue-500 min-h-[80vh] flex items-center justify-center text-center rounded-b-[40%] px-6 md:px-18 sm:px-12 lg:px-24">
  <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between max-w-6xl gap-8">
    {/* Left Content */}
    <div className="lg:w-1/2 text-center lg:text-left">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
        Connecting Food to Those in Need
      </h1>
      <p className="mt-4 sm:mt-6 text-lg sm:text-xl text-gray-700 max-w-md mx-auto lg:mx-0">
        WasteWise bridges the gap between food donors and those in need, ensuring surplus food reaches the right hands. 
        Together, we can <span className="text-indigo-600 font-semibold">reduce waste</span> and <span className="text-green-600 font-semibold">fight hunger</span>.
      </p>
      <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
        <Link
          href="/auth/sign-in"
          className="rounded-lg bg-indigo-600 px-6 py-3 text-base sm:text-lg font-semibold text-white shadow-md hover:bg-indigo-500 hover:scale-105 transition duration-300"
        >
          Get Involved
        </Link>
        <a href="#" className="text-base sm:text-lg font-semibold text-gray-900 hover:text-indigo-700 transition">
          Learn More <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>

    {/* Right Side Image */}
    <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
      <Image
        src={Earth}
        alt="Earth Image"
        width={400}
        height={400}
        className="rounded-lg shadow-lg w-full max-w-[350px] sm:max-w-[400px] object-cover drop-shadow-lg"
      />
    </div>
  </div>
</section>


      {/* Show Logged-in User */}
      <section className="container mx-auto text-center my-6 px-4 sm:px-6">
        {session?.user ? (
          <p className="text-lg font-semibold text-gray-900">
            Welcome, {session.user.name}!
          </p>
        ) : (
          <p className="text-lg font-semibold text-gray-500">
            Welcome, Guest! Please{" "}
            <a href="/auth/sign-in" className="text-indigo-600 underline">
              sign in
            </a>
            .
          </p>
        )}
      </section>

      {/* Section 2: Composting */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section 1: Composting & Renewable Energy */}
      <section className="my-12 sm:my-16">
        <Card className="shadow-lg bg-gradient-to-r from-indigo-100 via-red-50 to-indigo-100">
          <CardHeader className="text-center">
            <CardTitle className="text-xl sm:text-2xl font-semibold text-green-900">
              Do you use rotten food for composting and renewable energy?
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col md:flex-row items-center gap-6 p-6">
            {/* Left Content (Text) */}
            <div className="md:w-2/3 text-left">
              <ul className="list-disc list-inside space-y-2 text-gray-800 text-lg mx-12">
                <li>♻️ <strong>Waste Reduction</strong> - Less landfill waste</li>
                <li>🌱 <strong>Nutrient Recycling</strong> - Sustainable soil health</li>
                <li>🌾 <strong>Soil Enrichment</strong> - Boosts crop growth</li>
                <li>⚡ <strong>Biogas Production</strong> - Renewable energy source</li>
              </ul>
            </div>
            {/* Right Content (Image) */}
            <div className="md:w-1/3 flex justify-center">
              <Image
                src={compostImage}
                alt="Composting Process"
                width={350}
                height={250}
                className="rounded-lg shadow-md object-cover"
              />
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Section 2: NGOs */}
<section className="my-12 sm:my-16">
  <Card className="shadow-lg bg-gradient-to-r from-indigo-100 via-red-50 to-indigo-100">
    <CardHeader className="text-center">
      <CardTitle className="text-xl sm:text-2xl font-semibold text-indigo-900">
        Do you give leftover food to NGOs?
      </CardTitle>
    </CardHeader>
    <CardContent className="flex flex-col md:flex-row items-center gap-8 p-6">
      {/* Left Content (Image) */}
      <div className="md:w-1/3 flex justify-center">
        <Image
          src={ngoImage}
          alt="NGOs"
          width={350}
          height={250}
          className="rounded-lg shadow-md object-cover"
        />
      </div>
      {/* Right Content (Text) */}
      <div className="md:w-2/3 text-left space-y-4">
        <ul className="list-disc list-inside space-y-3 text-gray-800 text-lg ml-6 sm:ml-12">
          <li>🍽️ <strong>Hunger Relief</strong> - Feeding those in need</li>
          <li>📦 <strong>Food Distribution</strong> - Better resource management</li>
          <li>💙 <strong>Social Impact</strong> - Stronger community bonds</li>
          <li>🏡 <strong>Community Development</strong> - Helping society grow</li>
        </ul>
      </div>
    </CardContent>
  </Card>
</section>

    </div>

      {/* Features Section */}
      <FeaturesSection />

      {/* How It Works Section */}
      <section className="container mx-auto my-12 sm:my-16 px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">How It Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <div className="bg-blue-100 p-4 sm:p-6 rounded-lg shadow-md">
            <h4 className="text-lg sm:text-xl font-semibold">Step 1: List Excess Food</h4>
            <p className="text-gray-700 mt-2">
              Donors upload details of leftover food for redistribution.
            </p>
          </div>
          <div className="bg-blue-100 p-4 sm:p-6 rounded-lg shadow-md">
            <h4 className="text-lg sm:text-xl font-semibold">Step 2: Match with NGOs</h4>
            <p className="text-gray-700 mt-2">
              Our system connects donors with nearby NGOs and food banks.
            </p>
          </div>
          <div className="bg-blue-100 p-4 sm:p-6 rounded-lg shadow-md">
            <h4 className="text-lg sm:text-xl font-semibold">
              Step 3: Food Redistribution
            </h4>
            <p className="text-gray-700 mt-2">
              NGOs collect and distribute food to those in need.
            </p>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="mx-4 sm:mx-12">
        <Impact />
      </section>

      {/* Testimonials */}
      <section className="mx-4 sm:mx-12">
        <Testimonials />
      </section>

      {/* FAQ */}
      <section className="mx-4 sm:mx-12">
        <Faq />
      </section>
    </>
  );
}