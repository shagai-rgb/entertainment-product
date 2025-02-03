"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function WeddingForm() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <Card className="w-[1200px] h-[680px] overflow-hidden shadow-none border-none grid grid-cols-[400px_1fr] bg-white">
      {/* Left Panel */}
      <div className="relative bg-gradient-to-b from-violet-500 to-violet-600 p-8 text-white">
        <div className="space-y-4">
          <h1 className="text-2xl font-medium">Сонгосон эвентийн төрөл</h1>
          <h2 className="text-3xl font-bold">
            Хуримын
            <br />
            цогц үйлчилгээ
          </h2>
        </div>

        <div className="relative mt-8 aspect-square w-full rounded-lg overflow-hidden">
          <Image
            src="/flower.png"
            alt="Wedding bouquet with white roses"
            fill
            className="object-cover"
          />
        </div>

        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2">
          {[0, 1, 2].map((dot) => (
            <button
              key={dot}
              className={`w-2 h-2 rounded-full transition-colors ${
                currentSlide === dot ? "bg-white" : "bg-white/50"
              }`}
              onClick={() => setCurrentSlide(dot)}
            />
          ))}
        </div>
      </div>

      {/* Right Panel */}
      <div className="p-8">
        <div className="max-w-xl">
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-medium mb-4">
                Та өөрийн эвентийнхээ мэдээллийг оруулна уу
              </h2>
              <p className="text-gray-600 text-sm">
                Та мэдээллээ оруулснаар таны эвентийн сонгосон хугацаа болон
                төрлийг тохирох бүтээгдэхүүн, үйлчилгээг цогц хэлбэрээр
                харуулна.
              </p>
            </div>

            <form className="space-y-6">
              <div className="flex gap-5">
                <div className="flex-col">
                  <h1 className="text-[#828282]">
                    Эвент болох огноо* (YYYY/MM/DD)
                  </h1>
                  <Input className="w-72" type="огноо" placeholder="огноо" />
                  <h1 className="text-[#828282]">
                    Эвент эхлэх цаг, дуусах цаг*
                  </h1>
                  <Input className="w-72" type="огноо" placeholder="огноо" />
                  <h1 className="text-[#828282]">Хүсэлт</h1>
                  <Input className="w-72" type="хүсэлт" placeholder="хүсэлт" />
                </div>
                <div className="flex-col">
                  <h1 className="text-[#828282]">Зочдын тоо*</h1>
                  <Input className="w-72" type="тоо" placeholder="тоо" />
                  <h1 className="text-[#828282]">Төсөвлөсөн мөнгөн дүн</h1>
                  <Input
                    className="w-72"
                    type="мөнгөн дүн"
                    placeholder="мөнгөн дүн"
                  />
                  <h1 className="text-[#828282]">Нууц үг*</h1>
                  <Input
                    className="w-72"
                    type="нууц үг"
                    placeholder="нууц үг"
                  />
                </div>
              </div>

              <div className="flex gap-4 justify-end">
                <Button
                  type="button"
                  variant="secondary"
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8"
                >
                  Буцах
                </Button>
                <Button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8"
                >
                  Үргэлжлүүлэх
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Card>
  );
}
