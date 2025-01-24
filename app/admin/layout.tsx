import { auth } from "@/auth";
import { redirect } from "next/navigation";
import "@/styles/admin.css";
import Sidebar from "@/components/admin/sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = async ({ children }: LayoutProps) => {
  const session = await auth();

  if (!session?.user?.id) {
    return redirect("/sign-in");
  }

  return (
    <main className="flex min-h-screen w-full flex-row">
      <Sidebar />
      <div className="admin-container">
        <p>Header</p>
        {children}
      </div>
    </main>
  );
};

export default Layout;
