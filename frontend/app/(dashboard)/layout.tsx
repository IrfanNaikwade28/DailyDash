import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Sidebar />
      <div className="ml-64">
        <Header />
        <main className="pt-24 mt-5 pb-12">
          <div className="max-w-7xl mx-auto px-6">{children}</div>
        </main>
      </div>
    </>
  );
}
