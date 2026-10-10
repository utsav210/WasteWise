'use client';
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Truck, Gift, Users, MessageSquare, BarChart } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: <Users className="h-10 w-10 text-green-600" />, 
      title: "Sign Up & Join",
      description: "Create an account as a donor, charity, or recipient to start using WasteWise."
    },
    {
      icon: <Gift className="h-10 w-10 text-blue-600" />, 
      title: "List Surplus Food",
      description: "Donors can list excess food items they want to share, specifying details like quantity and expiration date."
    },
    {
      icon: <Truck className="h-10 w-10 text-yellow-600" />, 
      title: "Match & Deliver",
      description: "Charities and recipients can browse available food, request items, and arrange for pickup or delivery."
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-purple-600" />, 
      title: "Reduce Waste & Help",
      description: "By redistributing surplus food, we minimize waste and support those in need."
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-red-600" />, 
      title: "Connect & Communicate",
      description: "Users can communicate through the platform to coordinate donations and logistics efficiently."
    },
    {
      icon: <BarChart className="h-10 w-10 text-indigo-600" />, 
      title: "Track Impact",
      description: "Monitor the amount of food saved and the number of people helped through real-time analytics."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12 pt-24 text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">How WasteWise Works</h1>
      <p className="text-lg text-gray-600 mb-10">
        WasteWise connects food donors with charities and individuals to reduce food waste and fight hunger.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {steps.map((step, index) => (
          <Card key={index} className="p-6 shadow-lg rounded-lg bg-white">
            <CardContent className="flex flex-col items-center space-y-4">
              {step.icon}
              <h2 className="text-xl font-semibold text-gray-800">{step.title}</h2>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
