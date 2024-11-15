import Image from "next/image";
import Logo from "./../assets/logo.png";

export default function About() {
    return (
      <div
        id="About"
        className="flex flex-col md:flex-row items-start h-auto justify-center min-h-[calc(100vh-76px)] px-4 "
      >
        {/* Imagem */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0 flex justify-center">
          <Image
            src={Logo}
            alt="Logo da Empresa de Coleta de Lixo Eletrônico"
            width={500}
            height={400}
            className="max-w-full h-auto"
          />
        </div>
        {/* Texto sobre a empresa */}
        <div className="w-full md:w-1/2 text-center h-auto md:text-left md:pl-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0a4a4a] mb-6">Quem Somos?</h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
            Somos uma empresa especializada na coleta e destinação de lixo eletrônico, com atuação na cidade do Rio de Janeiro. Nosso compromisso é promover a sustentabilidade local e global, oferecendo soluções eficientes e responsáveis para o descarte de equipamentos eletrônicos antigos ou danificados.
          </p>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Acreditamos que a reciclagem e o reaproveitamento de recursos podem transformar o futuro. Com nossos serviços, garantimos que os materiais eletrônicos sejam descartados de forma segura, ecológica e de acordo com as regulamentações ambientais, evitando danos ao meio ambiente e promovendo um futuro mais verde para a cidade do Rio de Janeiro.
          </p>
        </div>
      </div>
    );
  }
  