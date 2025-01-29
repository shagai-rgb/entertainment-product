import { Sidebar } from "./sidebar";

export function Layout({ children }) {
  return (
    <div className="flex min-h-screen bg-[#fafbfc]">
      <Sidebar />
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
