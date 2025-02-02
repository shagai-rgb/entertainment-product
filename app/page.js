import EventsGrid from "@/components/EventsGrid";
import BuildingCard from "@/components/ui/cards";

export default function Page() {
  return (
    <div className="flex flex-col w-screen items-center">
      <div className="bg-[#F3F0F0] py-8 w-screen flex flex-col items-center">
        <h1 className="font-bold text-2xl">Эвентийн төрлөө сонгоно уу</h1>
        <h2 className="font-semibold text-xl text-gray-500">Заавар видео</h2>
      </div>
      <EventsGrid />
      <div className="bg-[#F3F0F0] py-8 w-screen flex flex-col items-center">
        <h1 className="font-bold text-2xl">
          Эвентийн ерөнхий төрлөөс хайж эвент үүсгэх
        </h1>
        <h2 className="font-semibold text-xl text-gray-500">Заавар видео</h2>
      </div>
      <BuildingCard />
    </div>
  );
}
