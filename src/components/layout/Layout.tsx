
import { ReactNode } from "react";
import PreHeader from "./PreHeader";
import Header from "./Header";
import Footer from "./Footer";
import AnnouncementBanner from "./AnnouncementBanner";

interface LayoutProps {
  children: ReactNode;
  showAnnouncement?: boolean;
}

const Layout = ({ children, showAnnouncement = true }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <PreHeader />
      {showAnnouncement && <AnnouncementBanner />}
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
