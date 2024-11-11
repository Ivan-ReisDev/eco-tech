'use client'
import { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null); // Para armazenar mensagens de erro

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null); // Limpa qualquer erro anterior

    // Validação de CPF
    const isValidCpf = validateCPF(cpf);
    if (!isValidCpf) {
      setError('CPF inválido!');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, address, date, time, email, cpf }),
      });

      if (response.ok) {
        alert('Coleta agendada com sucesso!');
      } else {
        setError('Erro ao agendar a coleta.');
      }
    } catch (err: unknown) {
      // Tratamento do erro capturado
      if (err instanceof Error) {
        setError(`Erro ao agendar a coleta: ${err.message}`);
      } else {
        setError('Erro desconhecido ao agendar a coleta.');
      }
    } finally {
      setLoading(false);
    }
  };

  const validateCPF = (cpf: string): boolean => {
    const regex = /^\d{11}$/;
    return regex.test(cpf);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-[calc(100vh-76px)] px-4 py-10 bg-gradient-to-r from-[#2d6a4f] to-[#447e3f]">
      {/* Formulário de Contato */}
      <div className="max-w-screen-lg w-full md:w-1/2 bg-transparent rounded-lg p-8 md:p-12">
        <h2 className="text-3xl font-bold text-white text-center mb-6">Agendamento de Coleta de Lixo Eletrônico</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white">Nome Completo</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#259d1c] focus:border-[#259d1c]"
              required
            />
          </div>

          <div>
            <label htmlFor="address" className="block text-sm font-medium text-white">Endereço da Coleta</label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#259d1c] focus:border-[#259d1c]"
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-white">Data da Coleta</label>
              <input
                type="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#259d1c] focus:border-[#259d1c]"
                required
              />
            </div>

            <div>
              <label htmlFor="time" className="block text-sm font-medium text-white">Horário</label>
              <input
                type="time"
                id="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#259d1c] focus:border-[#259d1c]"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#259d1c] focus:border-[#259d1c]"
              required
            />
          </div>

          <div>
            <label htmlFor="cpf" className="block text-sm font-medium text-white">CPF</label>
            <input
              type="text"
              id="cpf"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#259d1c] focus:border-[#259d1c]"
              required
              maxLength={11}
            />
          </div>

          {/* Exibição de erro, caso haja algum */}
          {error && <div className="text-red-500 text-sm mt-2">{error}</div>}

          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-3 bg-[#259d1c] text-white font-semibold rounded-md shadow-sm hover:bg-[#1a7014] focus:outline-none focus:ring-2 focus:ring-indigo-500"
              disabled={loading}
            >
              {loading ? 'Enviando...' : 'Agendar Coleta'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
