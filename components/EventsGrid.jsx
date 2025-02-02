"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useState } from "react";

export default function EventsGrid() {
  const [onMouse, setOnmouse] = useState(false);
  const [card, setCard] = useState();
  const mouseHover = (e) => {
    setOnmouse(true);
    if (e) {
      setCard(e);
    } else {
      setCard();
    }
  };

  const mouseLeave = () => {
    setOnmouse(false);
  };
  return (
    <div className="container mx-auto p-4 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {/* Hero Card */}
      <Card
        onMouseEnter={() => mouseHover(1)}
        onMouseLeave={mouseLeave}
        className="col-span-full cursor-pointer md:col-span-2 relative overflow-hidden bg-gradient-to-r from-blue-500 to-blue-600"
      >
        <motion.div
          className="text-white"
          initial={{ scale: 1 }}
          animate={{ scale: onMouse && card == 1 ? 1.05 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col justify-between md:flex-row items-center p-6 md:p-8">
            {/* Text Section */}

            <div className="text-white">
              <h2 className="text-5xl font-bold">Хүүхдийн</h2>
              <h3 className="text-3xl font-bold">Төрсөн өдрийн</h3>
              <p className="mt-2">ЦОГЦ ҮЙЛЧИЛГЭЭ</p>
            </div>
            <Button
              variant="secondary"
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              Эвент үүсгэх
            </Button>

            {/* Image Section */}

            <Image
              src="/flower.png"
              alt="Wedding bouquet"
              width={500}
              height={400}
              className="rounded-lg object-cover"
            />
          </div>
        </motion.div>
      </Card>

      {/* Regular Cards */}
      <Card
        onMouseEnter={() => mouseHover(2)}
        onMouseLeave={mouseLeave}
        className="overflow-hidden cursor-pointer bg-gradient-to-r from-orange-400 to-orange-500"
      >
        <motion.div
          className="text-white"
          initial={{ scale: 1 }}
          animate={{ scale: onMouse && card == 2 ? 1.05 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="p-6 flex flex-col justify-between gap-10 items-start">
            <div className="flex text-white items-end gap-10">
              <div className="text-white">
                <h2 className="text-2xl font-bold">Хүүхдийн</h2>
                <h3 className="text-xl font-bold">Төрсөн өдрийн</h3>
              </div>
              <p className="mt-2">ЦОГЦ ҮЙЛЧИЛГЭЭ</p>
            </div>

            <Image
              src="/flower.png"
              alt="Birthday celebration"
              width={350}
              height={350}
              className="rounded-lg"
            />
          </div>
        </motion.div>
      </Card>

      <Card
        onMouseEnter={() => mouseHover(3)}
        onMouseLeave={mouseLeave}
        className="overflow-hidden cursor-pointer bg-gradient-to-r from-blue-400 to-cyan-400"
      >
        <motion.div
          className="text-white"
          initial={{ scale: 1 }}
          animate={{ scale: onMouse && card == 3 ? 1.05 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="p-6 flex justify-between items-center">
            <div className="text-white">
              <h2 className="text-2xl font-bold">Хүүхдийн</h2>
              <h3 className="text-xl font-bold">Төрсөн өдрийн</h3>
              <p className="mt-2">ЦОГЦ ҮЙЛЧИЛГЭЭ</p>
            </div>
            <Image
              src="/flower.png"
              alt="Birthday celebration"
              width={150}
              height={150}
              className="rounded-lg"
            />
          </div>
        </motion.div>
      </Card>

      <Card
        onMouseEnter={() => mouseHover(4)}
        onMouseLeave={mouseLeave}
        className="overflow-hidden cursor-pointer bg-gradient-to-r from-pink-400 to-pink-500"
      >
        <motion.div
          className="text-white"
          initial={{ scale: 1 }}
          animate={{ scale: onMouse && card == 4 ? 1.05 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="p-6 flex justify-between items-center">
            <div className="text-white">
              <h2 className="text-2xl font-bold">Хуримын</h2>
              <p className="mt-2">ЦОГЦ ҮЙЛЧИЛГЭЭ</p>
            </div>
            <Image
              src="/flower.png"
              alt="Wedding bouquet"
              width={150}
              height={150}
              className="rounded-lg"
            />
          </div>
        </motion.div>
      </Card>

      <Card
        onMouseEnter={() => mouseHover(5)}
        onMouseLeave={mouseLeave}
        className="overflow-hidden cursor-pointer bg-gradient-to-r from-emerald-400 to-emerald-500"
      >
        <motion.div
          className="text-white"
          initial={{ scale: 1 }}
          animate={{ scale: onMouse && card == 5 ? 1.05 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="p-6 flex justify-between items-center">
            <div className="text-white">
              <h2 className="text-2xl font-bold">Хүүхдийн</h2>
              <h3 className="text-xl font-bold">Сэвлэг үргээх</h3>
              <p className="mt-2">ЦОГЦ ҮЙЛЧИЛГЭЭ</p>
            </div>
            <Image
              src="/flower.png"
              alt="Traditional ceremony"
              width={150}
              height={150}
              className="rounded-lg"
            />
          </div>
        </motion.div>
      </Card>

      <Card
        onMouseEnter={() => mouseHover(6)}
        onMouseLeave={mouseLeave}
        className="overflow-hidden cursor-pointer bg-gradient-to-r from-red-500 to-red-600"
      >
        <motion.div
          className="text-white"
          initial={{ scale: 1 }}
          animate={{ scale: onMouse && card == 6 ? 1.05 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="p-6 flex justify-between items-center">
            <div className="text-white">
              <h2 className="text-2xl font-bold">Хүүхдийн</h2>
              <h3 className="text-xl font-bold">Төрсөн өдрийн</h3>
              <p className="mt-2">ЦОГЦ ҮЙЛЧИЛГЭЭ</p>
            </div>
            <Image
              src="/flower.png"
              alt="Birthday celebration"
              width={150}
              height={150}
              className="rounded-lg"
            />
          </div>
        </motion.div>
      </Card>

      <Card
        onMouseEnter={() => mouseHover(7)}
        onMouseLeave={mouseLeave}
        className="overflow-hidden cursor-pointer bg-gradient-to-r from-violet-500 to-purple-600"
      >
        <motion.div
          className="text-white"
          initial={{ scale: 1 }}
          animate={{ scale: onMouse && card == 7 ? 1.05 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="p-6 flex justify-between items-center">
            <div className="text-white">
              <h2 className="text-2xl font-bold">Хүүхдийн</h2>
              <h3 className="text-xl font-bold">Сэвлэг үргээх</h3>
              <p className="mt-2">ЦОГЦ ҮЙЛЧИЛГЭЭ</p>
            </div>
            <Image
              src="/flower.png"
              alt="Traditional ceremony"
              width={150}
              height={150}
              className="rounded-lg"
            />
          </div>
        </motion.div>
      </Card>

      <Card
        onMouseEnter={() => mouseHover(8)}
        onMouseLeave={mouseLeave}
        className="overflow-hidden cursor-pointer bg-gradient-to-r from-blue-500 to-blue-600"
      >
        <motion.div
          className="text-white"
          initial={{ scale: 1 }}
          animate={{ scale: onMouse && card == 8 ? 1.05 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="p-6 flex justify-between items-center">
            <div className="text-white">
              <h2 className="text-2xl font-bold">Байгууллагын</h2>
              <h3 className="text-xl font-bold">Нээлтийн үйл</h3>
              <p className="mt-2">ажиллагаа</p>
            </div>
            <Image
              src="/flower.png"
              alt="Corporate event"
              width={150}
              height={150}
              className="rounded-lg"
            />
          </div>
        </motion.div>
      </Card>
    </div>
  );
}
