import { Card, CardContent } from "@/components/ui/card";

const impactData = [
  { id: 1, value: "10,000+", label: "Meals Delivered" },
  { id: 2, value: "500+", label: "Food Donors" },
  { id: 3, value: "100+", label: "Charities Supported" },
  { id: 4, value: "50,000+ kg", label: "Food Waste Reduced" },
];

export default function Impact() {
  return (
    <section className="py-16 bg-transparent-100 dark:bg-gray-900">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Our Impact
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
          WasteWise is making a real difference by connecting food donors with those in need, reducing waste, and feeding communities.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {impactData.map((item) => (
            <Card key={item.id} className="p-6 bg-white dark:bg-gray-800 shadow-md">
              <CardContent className="text-center">
                <p className="text-4xl font-bold text-indigo-600 dark:text-indigo-400">{item.value}</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">{item.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
