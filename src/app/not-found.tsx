import Link from 'next/link';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-100 text-center p-4">
      <ExclamationTriangleIcon className="h-20 w-20 text-yellow-500 mb-4" />
      <h2 className="text-4xl font-bold text-gray-800 mb-2">Página Não Encontrada</h2>
      <p className="text-gray-600 mb-6">
        Não conseguimos encontrar o recurso que você estava procurando.
      </p>
      <Link
        href="/"
        className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md font-medium shadow-md transition duration-200 ease-in-out"
      >
        Voltar para a Página Inicial
      </Link>
    </div>
  );
}
