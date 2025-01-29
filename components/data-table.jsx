"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus } from "lucide-react"
import Image from "next/image"

const tableData = [
  {
    id: "01",
    name: "А.Намсрайноров",
    avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/table-MzE4D1JRrlNqApqfW7HuGDvKd9xgJC.png",
    column1: "Эмэгтэй үсчин",
    column2: "Гүйцэтгэч",
  },
  {
    id: "02",
    name: "Б.Гэрэл",
    avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/table-MzE4D1JRrlNqApqfW7HuGDvKd9xgJC.png",
    column1: "Эрэгтэй үсчин",
    column2: "Гүйцэтгэч",
  },
  {
    id: "03",
    name: "Н.Чимэгээ",
    avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/table-MzE4D1JRrlNqApqfW7HuGDvKd9xgJC.png",
    column1: "Нагтлан бодох",
    column2: "Санхүү",
  },
  {
    id: "04",
    name: "Г.Болороо",
    avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/table-MzE4D1JRrlNqApqfW7HuGDvKd9xgJC.png",
    column1: "Өдрийн касс",
    column2: "Олон нийтийн хар...",
  },
  {
    id: "05",
    name: "Г.Болортунгалаг",
    avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/table-MzE4D1JRrlNqApqfW7HuGDvKd9xgJC.png",
    column1: "Оройн касс",
    column2: "Олон нийтийн хар...",
  },
]

export default function DataTable() {
  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <div className="border-b mb-6">
        <nav className="flex gap-8 -mb-px">
          <a href="#" className="text-orange-500 border-b-2 border-orange-500 pb-4 px-1">
            Ажилтан
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-700 pb-4 px-1">
            Эрхүүд
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-700 pb-4 px-1">
            Цалин
          </a>
        </nav>
      </div>

      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-2">
          <span className="text-gray-600">Танд нийт</span>
          <span className="text-violet-600 font-medium">5</span>
          <span className="text-gray-600">ажилтан байна</span>
        </div>
        <Button className="bg-orange-500 hover:bg-orange-600">
          <Plus className="w-4 h-4 mr-2" />
          Ажилтан нэмэх
        </Button>
      </div>

      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[60px]">#</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Албан тушаал</TableHead>
              <TableHead>Эрх</TableHead>
              <TableHead className="text-right">Тэмдэглэл</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tableData.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="text-gray-500">{row.id}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-100">
                      <Image
                        src="/placeholder.svg"
                        alt=""
                        width={32}
                        height={32}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="font-medium">{row.name}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder={row.column1} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="option1">{row.column1}</SelectItem>
                      <SelectItem value="option2">Option 2</SelectItem>
                      <SelectItem value="option3">Option 3</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder={row.column2} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="option1">{row.column2}</SelectItem>
                      <SelectItem value="option2">Option 2</SelectItem>
                      <SelectItem value="option3">Option 3</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell className="text-right text-gray-500">-</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

