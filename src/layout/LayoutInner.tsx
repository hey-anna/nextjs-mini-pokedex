import Header from "./Header";
import Footer from "./Footer";

interface Props {
  children: React.ReactNode;
}

const LayoutInner = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-14 px-4  max-w-5xl mx-auto w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default LayoutInner;
