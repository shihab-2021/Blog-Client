import Image from "next/image";

function Catagory() {
  const categories = [
    {
      icon: "/Icon.png",
      title: "Business",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    },
    {
      icon: "/Icon1.png",
      title: "Startup",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    },
    {
      icon: "/icon2.png",
      title: "Economy",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    },
    {
      icon: "/cyborg.png",
      title: "Technology",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    },
  ];

  return (
    <section className="px-4 py-10 md:px-20 max-w-7xl mx-auto ">
      <h1 className="font-bold text-xl md:text-2xl mb-6 text-center">Choose a Category</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="inline-flex items-center justify-center bg-amber-100 rounded-lg p-3 mb-4">
              <Image
                src={cat.icon}
                alt={cat.title}
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <p className="font-bold text-lg mb-1">{cat.title}</p>
            <p className="text-sm text-gray-500">{cat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Catagory;





