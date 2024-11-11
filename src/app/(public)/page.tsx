import Abount from "@/components/abount";
import AcceptedProducts from "@/components/acceptedProducts";
import Contact from "@/components/contact";
import Footer from "@/components/Footer";
import ProcessExplanation from "@/components/processExplanation";

export default function Home() {
  return (
    <div className="bg-white w-full h-auto items-start font-[family-name:var(--font-geist-sans)]">
      {/* Componente 'Abount' */}
      <div className="w-full px-4 py-10 md:px-10 md:py-16">
        <Abount />
      </div>

      {/* Componente 'AcceptedProducts' com altura 100% da tela */}
      <div className="w-full min-h-screen flex flex-col items-center justify-center  md:px-10 md:py-16 mb-10">
        <AcceptedProducts />
      </div>

      {/* Componente 'ProcessExplanation' */}
      <div className="w-full px-4 py-10 md:px-10 md:py-16 mb-10">
        <ProcessExplanation />
      </div>

      {/* Componente 'Contact' */}
      <div className="w-full">
        <Contact />
      </div>

      {/* Componente 'Footer' */}
      
        <Footer />

    </div>
  );
}
