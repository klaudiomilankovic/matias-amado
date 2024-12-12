import Header from "../components/Header";
import Footer from "../components/Footer";
import NavMobile from "../components/NavMobile";

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
      <main>
        {children}

        <div className="fixed z-20 bottom-10 left-6 lg:left-8">
          <a
            href="https://my.crisalix.com/signup/matiasamadocirujanoplastico"
            target="_blank"
            rel="noreferrer"
            className="bg-primary px-8 py-3 font-bold hover:bg-black transition-colors text-white"
          >
            Accede a tu simulacion 3D
          </a>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
