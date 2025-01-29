import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function Calendar() {
  return (
    <div className="bg-white rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-4">
          <h2 className="text-xl font-semibold text-[#151d48]">Calendar</h2>
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <Image
                key={i}
                src={`/placeholder.svg?height=32&width=32`}
                alt={`User ${i}`}
                width={32}
                height={32}
                className="rounded-full border-2 border-white"
              />
            ))}
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <ChevronLeft className="w-5 h-5 text-[#737791]" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <ChevronRight className="w-5 h-5 text-[#737791]" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-4">
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
          <div key={day} className="text-center text-sm font-medium text-[#737791]">
            {day}
          </div>
        ))}
        {Array.from({ length: 35 }).map((_, i) => (
          <div
            key={i}
            className="aspect-square rounded-lg border border-gray-100 p-2 hover:border-[#fb752b] cursor-pointer"
          >
            <span className="text-sm text-[#151d48]">{i + 1}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

