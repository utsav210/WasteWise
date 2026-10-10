import { FaHandHoldingHeart, FaWarehouse, FaUsers, FaShieldAlt } from "react-icons/fa";

const features = [
  {
    icon: <FaHandHoldingHeart className="text-blue-600 text-3xl" />,
    title: "Easy Food Donations",
    description: "Effortlessly donate surplus food to those in need with just a few clicks.",
  },
  {
    icon: <FaWarehouse className="text-blue-600 text-3xl" />,
    title: "Smart Distribution",
    description: "Our system ensures food reaches the right charities and food banks efficiently.",
  },
  {
    icon: <FaUsers className="text-blue-600 text-3xl" />,
    title: "Community Driven",
    description: "Connect with volunteers and organizations to maximize impact in your community.",
  },
  {
    icon: <FaShieldAlt className="text-blue-600 text-3xl" />,
    title: "Secure & Transparent",
    description: "We prioritize privacy and transparency, ensuring safe food redistribution.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-16 bg-transparent-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-sm text-blue-600 font-semibold tracking-wide uppercase">Making a Difference</h2>
        <h1 className="text-4xl font-bold text-gray-900 mt-2">Features of WasteWise</h1>
        <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
          WasteWise bridges the gap between food donors and those in need with an efficient and secure platform.
        </p>
      </div>

      <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-start space-x-4 p-6 bg-white shadow-md border border-blue-200 rounded-xl transition hover:shadow-lg"
          >
            <div className="p-3 bg-blue-100 rounded-lg">{feature.icon}</div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
              <p className="text-gray-700 mt-1">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
