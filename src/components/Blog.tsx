import Image from "next/image";

const blogs = [
  {
    img: "/assets/service1.png",
    title: "Category",
    description: "Pitch termsheet backing validation focus release.",
    date: "November 22, 2021",
    name: "Chandler Bing",
  },
  {
    img: "/assets/woman-talking.png",
    title: "Category",
    description:
      "Seed round direct mailing non-disclosure agreement graphical user interface rockstar.",
    date: "November 22, 2021",
    name: "Rachel Green",
  },
  {
    img: "/assets/service3.png",
    title: "Category",
    description:
      "Beta prototype sales iPad gen-z marketing network effects value proposition",
    date: "November 22, 2021",
    name: "Monica Geller",
  },
];

export default function Blog() {
  return (
    <div className="px-4 py-14 lg:px-24 md:px-8 flex flex-col gap-8">
      <div>
        <p className="text-[#777777] text-[20px] text-center">Our Blog</p>
        <h1 className="text-2xl md:text-4xl lg:text-[48px] leading-tight lg:leading-[72px] text-center">
          Value proposition accelerator product management venture{" "}
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="flex flex-col gap-3 justify-between max-w-xs"
          >
            <Image
              src={blog.img}
              alt={blog.title}
              className="w-full h-48 lg:h-[209px] rounded-3xl object-cover"
              width={300}
              height={209}
            />
            <div>
              <div className="flex flex-col lg:flex-row gap-2 lg:gap-4">
                <h2 className="text-[15px] text-[#0A2640] font-bold">
                  {blog.title}
                </h2>
                <p className="text-[#777777] text-[16px]">{blog.date}</p>
              </div>

              <p className="font-normal leading-6 lg:leading-8 mt-2">
                {blog.description}
              </p>
            </div>
            <div className="flex flex-row gap-4 items-center mt-2">
              <Image
                src={blog.img}
                alt={blog.title}
                width={20}
                height={20}
                className="rounded-full h-8 w-8 object-cover"
              />
              <p>{blog.name}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center py-10">
        <button className="border-[#0A2640] border-2 rounded-full px-8 py-2 text-[#0A2640] font-medium hover:bg-[#0A2640] hover:text-white transition">
          Load More
        </button>
      </div>
    </div>
  );
}
