import { 
    FaLaptop, 
    FaMobileAlt, 
    FaTv, 
    FaPrint, 
    FaPlug, 
    FaDesktop, 
    FaHeadphones, 
    FaGamepad, 
    FaKeyboard, 
    FaMouse, 
    FaCamera, 
    FaClock, 
    FaTabletAlt, 
    FaBatteryFull, 
    FaExternalLinkAlt, 
    FaMicrophone, 
    FaCloudUploadAlt, 
    FaChargingStation // Ícone adicionado
  } from "react-icons/fa";
  
  export default function AcceptedProducts() {
    return (
      <div className="bg-gradient-to-r pb-5 from-[#2d6a4f] to-[#447e3f] w-screen h-auto flex flex-col items-center justify-center">
        <div className="max-w-screen-xl mx-auto mt-10 px-6 h-full flex flex-col items-center justify-center">
          {/* Texto sobre os produtos aceitos */}
          <div className="text-center mb-12">
            <h2 className="text-5xl font-extrabold text-white mb-6">Produtos Aceitos na Coleta</h2>
            <p className="text-white text-lg leading-relaxed max-w-3xl mx-auto">
              Nossa empresa aceita diversos tipos de equipamentos eletrônicos para descarte responsável. Confira abaixo os principais produtos aceitos:
            </p>
          </div>
  
          {/* Lista de Produtos */}
          <div className="flex flex-wrap justify-center items-star gap-8 w-full">
            {/* Primeira lista de produtos */}
            <ul className="space-y-6 w-full sm:w-80 md:w-96  flex-shrink-0">
              <li className="flex items-center justify-start space-x-4 hover:bg-[#3b8e5e] p-4 rounded-lg transition duration-300">
                <FaLaptop className="text-3xl" />
                <span className="text-white">Computadores e Laptops</span>
              </li>
              <li className="flex items-center justify-start space-x-4 hover:bg-[#3b8e5e] p-4 rounded-lg transition duration-300">
                <FaMobileAlt className="text-3xl" />
                <span className="text-white">Smartphones e Tablets</span>
              </li>
              <li className="flex items-center justify-start space-x-4 hover:bg-[#3b8e5e] p-4 rounded-lg transition duration-300">
                <FaTv className="text-3xl" />
                <span className="text-white">Televisores e Monitores</span>
              </li>
              <li className="flex items-center justify-start space-x-4 hover:bg-[#3b8e5e] p-4 rounded-lg transition duration-300">
                <FaPrint className="text-3xl" />
                <span className="text-white">Impressoras e Periféricos</span>
              </li>
              <li className="flex items-center justify-start space-x-4 hover:bg-[#3b8e5e] p-4 rounded-lg transition duration-300">
                <FaPlug className="text-3xl" />
                <span className="text-white">Outros Equipamentos Eletrônicos</span>
              </li>
              <li className="flex items-center justify-start space-x-4 hover:bg-[#3b8e5e] p-4 rounded-lg transition duration-300">
                <FaDesktop className="text-3xl" />
                <span className="text-white">Desktops e Torres de PC</span>
              </li>
              <li className="flex items-center justify-start space-x-4 hover:bg-[#3b8e5e] p-4 rounded-lg transition duration-300">
                <FaHeadphones className="text-3xl" />
                <span className="text-white">Fones de Ouvido</span>
              </li>
              <li className="flex items-center justify-start space-x-4 hover:bg-[#3b8e5e] p-4 rounded-lg transition duration-300">
                <FaGamepad className="text-3xl" />
                <span className="text-white">Controle de Videogame</span>
              </li>
              <li className="flex items-center justify-start space-x-4 hover:bg-[#3b8e5e] p-4 rounded-lg transition duration-300">
                <FaKeyboard className="text-3xl" />
                <span className="text-white">Teclados e Mouses</span>
              </li>
              <li className="flex items-center justify-start space-x-4 hover:bg-[#3b8e5e] p-4 rounded-lg transition duration-300">
                <FaMouse className="text-3xl" />
                <span className="text-white">Ratos e Periféricos</span>
              </li>
            </ul>
  
            {/* Segunda lista de produtos */}
            <ul className="space-y-6 w-full sm:w-80 md:w-96 flex-shrink-0">
              <li className="flex  w-auto items-center justify-start space-x-4 hover:bg-[#3b8e5e] p-4 rounded-lg transition duration-300">
                <FaCamera className="text-3xl" />
                <span className="text-white w-full">Câmeras e Equipamentos Fotográficos</span>
              </li>
              <li className="flex items-center justify-start space-x-4 hover:bg-[#3b8e5e] p-4 rounded-lg transition duration-300">
                <FaTabletAlt className="text-3xl" />
                <span className="text-white">Tablets e Leitores de E-books</span>
              </li>
              <li className="flex items-center justify-start space-x-4 hover:bg-[#3b8e5e] p-4 rounded-lg transition duration-300">
                <FaBatteryFull className="text-3xl" />
                <span className="text-white">Baterias e Fontes de Alimentação</span>
              </li>
              <li className="flex items-center justify-start space-x-4 hover:bg-[#3b8e5e] p-4 rounded-lg transition duration-300">
                <FaExternalLinkAlt className="text-3xl" />
                <span className="text-white">Outros Acessórios Eletrônicos</span>
              </li>
              <li className="flex items-center justify-start space-x-4 hover:bg-[#3b8e5e] p-4 rounded-lg transition duration-300">
                <FaMicrophone className="text-3xl" />
                <span className="text-white">Microfones</span>
              </li>
              <li className="flex items-center justify-start space-x-4 hover:bg-[#3b8e5e] p-4 rounded-lg transition duration-300">
                <FaCloudUploadAlt className="text-3xl" />
                <span className="text-white">Dispositivos de Armazenamento em Nuvem</span>
              </li>
              <li className="flex items-center justify-start space-x-4 hover:bg-[#3b8e5e] p-4 rounded-lg transition duration-300">
                <FaCamera className="text-3xl" />
                <span className="text-white">Câmeras de Segurança</span>
              </li>
              <li className="flex items-center justify-start space-x-4 hover:bg-[#3b8e5e] p-4 rounded-lg transition duration-300">
                <FaHeadphones className="text-3xl" />
                <span className="text-white">Aparelhos de Som e Áudio</span>
              </li>
              <li className="flex items-center justify-start space-x-4 hover:bg-[#3b8e5e] p-4 rounded-lg transition duration-300">
                <FaClock className="text-3xl" />
                <span className="text-white">Relógios Inteligentes</span>
              </li>
              {/* Novo Produto */}
              <li className="flex items-center justify-start space-x-4 hover:bg-[#3b8e5e] p-4 rounded-lg transition duration-300">
                <FaChargingStation className="text-3xl" />
                <span className="text-white">Carregadores e Estações de Carregamento</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  