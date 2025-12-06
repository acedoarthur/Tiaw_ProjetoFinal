import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section>
      <div className="text-center bg-gradient-to-r from-violet-700 to-fuchsia-600 text-white rounded-lg p-8">
        <h1 className="text-3xl md:text-5xl font-extrabold">Fantasia & Magia</h1>
        <p className="mt-3 opacity-90">Fantasias e acessórios para todas as festas.</p>
        <div className="mt-6">
          <Link to="/catalog" className="bg-white text-violet-700 px-5 py-3 rounded shadow hover:bg-violet-50">Ver Catálogo</Link>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow p-5">
          <h3 className="text-lg font-semibold">Temas Populares</h3>
          <p className="mt-2 text-gray-700">Bruxa, Mago, Fada, Heróis e muito mais.</p>
        </div>
        <div className="bg-white rounded-lg shadow p-5">
          <h3 className="text-lg font-semibold">Acessórios</h3>
          <p className="mt-2 text-gray-700">Máscaras, capas, chapéus e itens mágicos.</p>
        </div>
        <div className="bg-white rounded-lg shadow p-5">
          <h3 className="text-lg font-semibold">Para Todas Idades</h3>
          <p className="mt-2 text-gray-700">Opções infantis e adultas com conforto.</p>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold">Destaques da Semana</h3>
          <p className="mt-2 text-gray-700">Confira as fantasias mais procuradas e em promoção.</p>
          <Link to="/catalog" className="mt-4 inline-block text-violet-700 hover:underline">Ver Destaques</Link>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold">Como Escolher sua Fantasia</h3>
          <p className="mt-2 text-gray-700">Dicas rápidas: tema da festa, tamanho, conforto e acessórios.</p>
          <Link to="/about" className="mt-4 inline-block text-violet-700 hover:underline">Saiba mais</Link>
        </div>
      </div>
    </section>
  )
}