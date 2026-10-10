"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    id: "1",
    title: "What is WasteWise?",
    content:
      "WasteWise is a food redistribution platform that connects food donors with charities, food banks, and individuals in need to reduce food waste and fight hunger.",
  },
  {
    id: "2",
    title: "Who can donate food on WasteWise?",
    content:
      "Restaurants, grocery stores, farmers, and individuals can donate surplus food through our platform. We ensure that the food reaches people who need it most.",
  },
  {
    id: "3",
    title: "How can I request food as a charity or individual?",
    content:
      "Charities and individuals in need can register on our platform and request available food donations. We match requests with the nearest available food sources.",
  },
  {
    id: "4",
    title: "Is the donated food safe to eat?",
    content:
      "Yes! We follow strict food safety guidelines, ensuring that only edible, high-quality food is donated and delivered.",
  },
  {
    id: "5",
    title: "How do I become a volunteer?",
    content:
      "You can sign up as a volunteer through our website. Volunteers help with food collection, distribution, and raising awareness about food waste.",
  },
];

export default function Faq() {
  return (
    <section className="max-w-3xl mx-auto py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq) => (
          <AccordionItem key={faq.id} value={faq.id} className="border-b">
            <AccordionTrigger className="py-4 text-lg font-medium hover:no-underline">
              {faq.title}
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 pb-4">{faq.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
