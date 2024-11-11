export default function Footer() {
    return (
      <footer className="bg-white text-[#0a4a4a] py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Informações de contato */}
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h3 className="text-xl font-semibold mb-2 text-[#0a4a4a]">Entre em Contato</h3>
              <p className="text-lg mb-2 text-[#606060]">Email: contato@empresa.com</p>
              <p className="text-lg text-[#606060]">Telefone: (21) 1234-5678</p>
            </div>
  
            {/* Links */}
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2 text-[#0a4a4a]">Links Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/sobre" className="text-lg hover:underline text-[#259d1c]">
                    Sobre Nós
                  </a>
                </li>
                <li>
                  <a href="/coleta" className="text-lg hover:underline text-[#259d1c]">
                    Agendar Coleta
                  </a>
                </li>
                <li>
                  <a href="/privacidade" className="text-lg hover:underline text-[#259d1c]">
                    Política de Privacidade
                  </a>
                </li>
              </ul>
            </div>
  
            {/* Redes sociais */}
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2 text-[#0a4a4a]">Siga-nos</h3>
              <div className="flex justify-center space-x-6">
                <a href="https://facebook.com" target="_blank" className="text-lg hover:text-[#259d1c]">
                  Facebook
                </a>
                <a href="https://twitter.com" target="_blank" className="text-lg hover:text-[#259d1c]">
                  Twitter
                </a>
                <a href="https://instagram.com" target="_blank" className="text-lg hover:text-[#259d1c]">
                  Instagram
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-[#e5e5e5] mt-6 pt-4 text-center text-[#606060]">
            <p>&copy; 2024 Sua Empresa de Coleta de Lixo Eletrônico. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    );
  }
  