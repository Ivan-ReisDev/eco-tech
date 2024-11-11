export default function Loading() {
    return (
      <div className="flex h-screen flex-col items-center justify-center bg-gray-100 text-center">
        <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-blue-500 border-opacity-75 mb-6"></div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Carregando...</h2>
        <p className="text-gray-600">Por favor, aguarde enquanto carregamos o conteúdo.</p>
      </div>
    );
  }
  