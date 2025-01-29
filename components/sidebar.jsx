"use client";
import Link from "next/link";
import {
  Home,
  Users,
  ShoppingCart,
  Package,
  BarChart2,
  Settings,
  HelpCircle,
} from "lucide-react";

export function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 p-4">
      <div className="mb-8"></div>
      <nav className="space-y-1">
        <NavItem href="/" icon={<Home className="w-5 h-5" />} label="Home" />
        <NavItem
          href="/table"
          icon={<img src="icons/table.png" className="w-5 h-5" />}
          label="Хянах самбар"
        />
        <NavItem
          href="/orders"
          icon={<img src="icons/order.png" className="w-5 h-5" />}
          label="Захиалга"
        />
        <NavItem
          href="/producs"
          icon={<img src="icons/product.png" className="w-5 h-5" />}
          label="Бүтээгдэхүүн"
          active
        />
        <NavItem
          href="/service"
          icon={<img src="icons/service.png" className="w-5 h-5" />}
          label="Үйлчилгээ"
        />
        <NavItem
          href="/employee"
          icon={<img src="icons/employee.png" className="w-5 h-5" />}
          label="Ажилтан"
        />
        <NavItem
          href="/interlocutor"
          icon={<img src="icons/introduction.png" className="w-5 h-5" />}
          label="Харилцагч"
        />
        <NavItem
          href="/map"
          icon={<img src="icons/map.png" className="w-5 h-5" />}
          label="Байгуулалтын зураг"
        />
        <NavItem
          href="/marketing"
          icon={<img src="icons/marketing.png" className="w-5 h-5" />}
          label="Маркетингийн үйлчилгээ"
        />
        <NavItem
          href="/help"
          icon={<HelpCircle className="w-5 h-5" />}
          label="Help"
        />
      </nav>
    </aside>
  );
}

function NavItem({ href, icon, label, active }) {
  return (
    <Link
      href={href}
      className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
        active ? "bg-[#fb752b] text-white" : "text-[#737791] hover:bg-gray-100"
      }`}
    >
      {icon}
      <span className="font-medium">{label}</span>
    </Link>
  );
}
