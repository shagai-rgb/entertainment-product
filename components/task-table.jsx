import Image from "next/image";
import {
  Select,
  SelectGroup,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
} from "@/components/ui/select";

export function TaskTable() {
  return (
    <div className="bg-white rounded-lg p-6 mb-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-[#151d48]">Tasks</h2>
        <button className="bg-[#fb752b] text-white px-4 py-2 rounded-lg">
          Add Task
        </button>
      </div>
      <table className="w-full">
        <thead>
          <tr className="text-[#737791] text-sm">
            <th className="text-left pb-4">Name</th>
            <th className="text-left pb-4">Status</th>
            <th className="text-left pb-4">Priority</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, i) => (
            <tr key={i} className="border-t border-gray-100">
              <td className="py-4">
                <div className="flex items-center space-x-3">
                  <Image
                    src={`/placeholder.svg?height=32&width=32`}
                    alt={task.name}
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                  <span className="font-medium text-[#151d48]">
                    {task.name}
                  </span>
                </div>
              </td>
              <td className="py-4">
                <Select>
                  <option value="in-progress">In Progress</option>
                  <option value="completed">Completed</option>
                  <option value="pending">Pending</option>
                </Select>
              </td>
              <td className="py-4">
                <Select>
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </Select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const tasks = [
  { name: "A.Нямсайнноров" },
  { name: "Б.Бархи" },
  { name: "Н.Чимгээ" },
  { name: "Г.Болороо" },
  { name: "Г.Болорчулуун" },
];
