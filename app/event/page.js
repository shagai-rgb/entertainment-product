import WeddingForm from "@/components/event";

const Page = () => {
  return (
    <div className="flex bg-[#F3F0F0] flex-col pb-10 items-center">
      <div className=" py-8 w-screen flex flex-col items-center">
        <h1 className="font-bold text-2xl">Эвентийн мэдээллээ оруулна уу</h1>
        <h2 className="font-semibold text-xl text-gray-500">Заавар видео</h2>
      </div>
      <WeddingForm />
    </div>
  );
};

export default Page;
