export default function ProcessExplanation() {
    return (
      <div className="flex flex-col items-center justify-center h-[calc(100vh-76px)] px-4 py-10">
        {/* Texto explicativo sobre o processo de coleta */}
        <div className="text-center md:text-left md:w-2/3">
          <h2 className="text-4xl font-bold text-[#0a4a4a] mb-6">
            Como Funciona a Coleta?
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            O processo de coleta de lixo eletrônico é simples e eficiente. Após agendar a coleta, nossa equipe irá até o seu endereço para realizar o recolhimento de equipamentos eletrônicos que não são mais utilizados.
          </p>
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-[#0a4a4a]">Passo 1: Agendamento</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                O primeiro passo é realizar o agendamento da coleta por meio de nosso formulário online, onde você informa seu endereço, horário e tipo de material que deseja descartar.
              </p>
            </div>
  
            <div>
              <h3 className="text-2xl font-semibold text-[#0a4a4a]">Passo 2: Coleta</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Nossa equipe se dirige até o local combinado para realizar o recolhimento dos materiais. Garantimos que todos os itens serão manipulados de maneira segura e ecológica.
              </p>
            </div>
  
            <div>
              <h3 className="text-2xl font-semibold text-[#0a4a4a]">Passo 3: Destinação</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Após a coleta, os materiais são levados para o nosso centro de triagem, onde são devidamente classificados e preparados para reciclagem ou reaproveitamento, contribuindo para a preservação ambiental.
              </p>
            </div>
          </div>
  
          <p className="text-gray-600 text-lg leading-relaxed mt-6">
            Com nosso processo, garantimos que o descarte de eletrônicos seja feito de forma sustentável e em conformidade com as regulamentações ambientais.
          </p>
        </div>
      </div>
    );
  }
  