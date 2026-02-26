import Header from "@/components/header/header";
import Sidebar from "@/components/sidebar/sidebar";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="site-wrapper">
        <Sidebar />
        {children}
      </div>
    </>
  );
}
