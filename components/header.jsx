"use client";
import { Bell } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const Header = () => {
  return (
    <div className="w-screen flex flex-col">
      <div className="bg-gradient-to-r from-[#FF7324] via-[#FF4E93] to-[#B84EFF] py-4">
        <div className="container mx-auto px-4">
          <p className="text-white text-center">
            Хуримын урьдчилсан захиалга 20% off. Дэлгэрэнгүй.
          </p>
        </div>
      </div>
      <header className="flex items-center justify-between px-6 py-3 bg-white border-b border-gray-200">
        <div className="flex items-center gap-2">
          <div className="bg-[#fb752b] rounded p-1"></div>
          <span className="text-lg font-semibold">Entertainment.mn</span>
        </div>

        <div className="flex-1 max-w-xl mx-12">
          <div className="relative">
            <Input
              type="search"
              placeholder="Search here..."
              className="w-full pl-10 bg-[#fafbfc]"
            />
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <Select defaultValue="en">
            <SelectTrigger className="w-[120px] border-none">
              <div className="flex items-center gap-2">
                <img src="/eng.png" alt="" />
                <SelectValue placeholder="Select language" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">Eng (US)</SelectItem>
              <SelectItem value="mn">Монгол</SelectItem>
            </SelectContent>
          </Select>

          <button className="relative">
            <Bell className="w-6 h-6 text-gray-600" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
          </button>

          <div className="flex items-center gap-3">
            <img src="/bold.png" alt="" className="w-10 h-10 rounded-2xl" />
            <div>
              <p className="font-semibold text-sm">Bold</p>
              <p className="text-xs text-gray-500">Admin</p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
