// Importa o componente Link do React Router para navegação entre páginas
import { Link } from 'react-router-dom'

// Função que representa a página inicial do site
export default function Home() {
  // Retorna o conteúdo da página inicial
  return (
    // Seção principal da página
    <section>
      {/* Banner de boas-vindas com gradiente e texto centralizado */}
      <div className="text-center bg-gradient-to-r from-violet-700 to-fuchsia-600 text-white rounded-lg p-8">
        {/* Título principal do site */}
        <h1 className="text-3xl md:text-5xl font-extrabold">Fantasia & Magia</h1>
        {/* Descrição do site */}
        <p className="mt-3 opacity-90">Fantasias e acessórios para todas as festas.</p>
        {/* Botão para ver o catálogo */}
        <div className="mt-6">
          <Link to="/catalog" className="bg-white text-violet-700 px-5 py-3 rounded shadow hover:bg-violet-50">Ver Catálogo</Link>
        </div>
      </div>

      {/* Seção com três colunas de informações rápidas */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Primeira coluna: Temas Populares */}
        <div className="bg-white rounded-lg shadow p-5">
          <h3 className="text-lg font-semibold">Temas Populares</h3>
          <p className="mt-2 text-gray-700">Bruxa, Mago, Fada, Heróis e muito mais.</p>
        </div>
        {/* Segunda coluna: Acessórios */}
        <div className="bg-white rounded-lg shadow p-5">
          <h3 className="text-lg font-semibold">Acessórios</h3>
          <p className="mt-2 text-gray-700">Máscaras, capas, chapéus e itens mágicos.</p>
        </div>
        {/* Terceira coluna: Para Todas Idades */}
        <div className="bg-white rounded-lg shadow p-5">
          <h3 className="text-lg font-semibold">Para Todas Idades</h3>
          <p className="mt-2 text-gray-700">Opções infantis e adultas com conforto.</p>
        </div>
      </div>

      {/* Seção com duas colunas de destaques e dicas */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Primeira coluna: Destaques da Semana */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold">Destaques da Semana</h3>
          <p className="mt-2 text-gray-700">Confira as fantasias mais procuradas e em promoção.</p>
          {/* Link para ver os destaques no catálogo */}
          <Link to="/catalog" className="mt-4 inline-block text-violet-700 hover:underline">Ver Destaques</Link>
        </div>
        {/* Segunda coluna: Dicas de como escolher fantasia */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold">Como Escolher sua Fantasia</h3>
          <p className="mt-2 text-gray-700">Dicas rápidas: tema da festa, tamanho, conforto e acessórios.</p>
          {/* Link para página sobre dicas */}
          <Link to="/about" className="mt-4 inline-block text-violet-700 hover:underline">Saiba mais</Link>
        </div>
      </div>
    </section>
  )
}