import Footer from "../ReusableComponent/Footer";
import MainContent from "../ReusableComponent/MainContent";
import Nav from "../ReusableComponent/Nav";
import Sidebar from "../ReusableComponent/Sidebar";

export default function Home() {
  return (
    <>
      <Nav />
      <Sidebar />
      <MainContent />
      <Footer />
    </>
  );
}
