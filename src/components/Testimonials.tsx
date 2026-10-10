import { Avatar, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    id: 1,
    text: "WasteWise has made food donation seamless. We’ve reduced food waste while helping the community.",
    name: "Leslie Alexander",
    handle: "@lesliealexander",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    text: "A fantastic platform that connects donors with charities effectively. Highly recommended!",
    name: "Michael Foster",
    handle: "@michaelfoster",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    text: "Redistributing surplus food has never been easier. WasteWise is a game-changer!",
    name: "Leonard Krasner",
    handle: "@leonardkrasner",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    id: 4,
    text: "I love how WasteWise makes it simple to donate excess food. A true blessing for food banks!",
    name: "Brenna Goyette",
    handle: "@brennagoyette",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
  },
  {
    id: 5,
    text: "I love how WasteWise makes it simple to donate excess food. A true blessing for food banks!",
    name: "Brenna Goyette",
    handle: "@brennagoyette",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
  },
  {
    id: 6,
    text: "I love how WasteWise makes it simple to donate excess food. A true blessing for food banks!",
    name: "Brenna Goyette",
    handle: "@brennagoyette",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-lg text-blue-600 font-semibold uppercase">Testimonials</h2>
        <h3 className="text-3xl font-bold text-gray-900 dark:text-white mt-2">
          How WasteWise is making a difference
        </h3>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6"
            >
              <p className="text-gray-600 dark:text-gray-300 italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center mt-4">
                <Avatar>
                  <AvatarImage src={testimonial.image} alt={testimonial.name} />
                </Avatar>
                <div className="ml-3">
                  <p className="text-gray-900 dark:text-white font-semibold">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    {testimonial.handle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
