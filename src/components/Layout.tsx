import Header from "./Header";
import Footer from "./Footer";
import NavMobile from "./NavMobile";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <header className="fixed z-40 w-full">
        <Header />
        <NavMobile />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
