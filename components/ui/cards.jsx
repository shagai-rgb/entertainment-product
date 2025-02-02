import Image from "next/image";
import { Card } from "@/components/ui/card";

const cards = [
  {
    title: "Байгууллагын эвент",
    image: "/Rectangle.png",
  },
  {
    title: "Хувь хүний эвент",
    image: "/img1.png",
  },
  {
    title: "Хүүхдийн эвент",
    image: "/img2.png",
  },
  {
    title: "Анги, хамт олны эвент",
    image: "/img3.png",
  },
];

export default function BuildingCard() {
  return (
    <div className=" flex gap-6 p-6">
      {cards.map((el, index) => {
        return (
          <Card
            key={index}
            className="group cursor-pointer relative w-[300px] h-[300px] overflow-hidden rounded-xl border-0"
          >
            <Image
              src={el.image}
              alt={el.image}
              width={300}
              height={300}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-white text-xl font-bold">{el.title}</h3>
            </div>
            <div className="absolute inset-0 ring-1 ring-white/10 rounded-xl" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ring-2 ring-white/20 rounded-xl" />
          </Card>
        );
      })}
    </div>
  );
}
