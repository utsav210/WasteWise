"use client";
import Image from "next/image";
import Earth from "@/public/Earth.jpg";
import wasteImage from "@/public/WasteImage.webp";
import compostImage from "@/public/compost.png";
import ngoImage from "@/public/ngo.png";
import FeaturesSection from "@/components/ui/FeaturesSection";
import Faq from "@/components/faq";
import Testimonials from "@/components/testinomials";
import Impact from "@/components/ourimpact";

export default function Home() {
  return (
    <>
      <section className="relative bg-gradient-to-b from-white to-blue-500 min-h-[80vh] flex items-center justify-center text-center rounded-b-[40%] px-6 lg:px-8">
        {/* Container with max width */}
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between max-w-5xl">
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900">
              Connecting Food to Those in Need
            </h1>
            <p className="mt-6 text-lg text-gray-600 sm:text-xl">
              WasteWise helps bridge the gap between food donors and those in
              need by ensuring surplus food reaches the right hands. Together,
              we can reduce waste and fight hunger.
            </p>
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500"
              >
                Get Involved
              </a>
              <a href="#" className="text-sm font-semibold text-gray-900">
                Learn More <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
            <Image
              src={Earth}
              alt="Earth Image"
              className="rounded-lg shadow-lg w-[350px] h-auto"
            />
          </div>
        </div>
      </section>

      {/* Section 2: Composting */}
      <section className="container mx-auto my-16 px-[6rem] text-center">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 bg-blue-100 p-6 rounded-lg shadow-md py-[5rem] px-[4rem]">
            <h4 className="text-xl font-semibold">
              You use rotten food for composting and renewable energy?
            </h4>
            <ul className="mt-4 text-left list-disc list-inside">
              <li>Waste reduction</li>
              <li>Nutrient recycling</li>
              <li>Soil enrichment</li>
              <li>Biogas production</li>
            </ul>
          </div>
          <div className="md:w-1/3 p-4">
            <Image
              src={compostImage}
              alt="Composting"
              className="rounded-lg shadow-md h-[300px] w-[450px]"
            />
          </div>
        </div>
      </section>

      {/* Section 3: NGOs */}
      <section className="container mx-auto my-16 px-[6rem] text-center">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 p-4">
            <Image
              src={ngoImage}
              alt="NGOs"
              className="rounded-lg shadow-md h-[300px] w-[450px]"
            />
          </div>
          <div className="md:w-2/3 bg-blue-100 p-[3rem] rounded-lg shadow-md py-[5rem] px-[4rem]">
            <h4 className="text-xl font-semibold">
              You give leftover food to NGOs?
            </h4>
            <ul className="mt-4 text-left list-disc list-inside">
              <li>Hunger Relief</li>
              <li>Food Distribution</li>
              <li>Social Impact</li>
              <li>Community Development</li>
            </ul>
          </div>
        </div>
      </section>
      <FeaturesSection/>
      {/* How It Works Section */}
      <section className="container mx-auto my-16 px-12 text-center">
        <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="bg-blue-100 p-14 rounded-lg shadow-md flex flex-col justify-between min-h-[200px]">
            <h4 className="text-xl font-semibold">Step 1: List Excess Food</h4>
            <p className="text-gray-700 mt-2">
              Donors upload details of leftover food for redistribution.
            </p>
          </div>
          <div className="bg-blue-100 p-14 rounded-lg shadow-md flex flex-col justify-between min-h-[200px]">
            <h4 className="text-xl font-semibold">Step 2: Match with NGOs</h4>
            <p className="text-gray-700 mt-2">
              Our system connects donors with nearby NGOs and food banks.
            </p>
          </div>
          <div className="bg-blue-100 p-14 rounded-lg shadow-md flex flex-col justify-between min-h-[200px]">
            <h4 className="text-xl font-semibold">
              Step 3: Food Redistribution
            </h4>
            <p className="text-gray-700 mt-2">
              NGOs collect and distribute food to those in need.
            </p>
          </div>
        </div>
      </section>
      {/* Success Stories */}
      <section className="mx-12">
        <Impact/>
      </section>
      <section className="mx-12">
        <Testimonials/>
      </section>
      <section>
      <Faq/>
      </section>
    </>
  );
}
