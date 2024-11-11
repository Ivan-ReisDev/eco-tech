import Abount from "@/components/abount";
import AcceptedProducts from "@/components/acceptedProducts";
import Contact from "@/components/contact";
import Footer from "@/components/Footer";
import ProcessExplanation from "@/components/processExplanation";

export default function Home() {
  return (
    <div className="bg-white w-full items-start font-[family-name:var(--font-geist-sans)]">
      <Abount />
      <AcceptedProducts />
      <ProcessExplanation />
      <Contact />
      <Footer />
    </div>
  );
}
