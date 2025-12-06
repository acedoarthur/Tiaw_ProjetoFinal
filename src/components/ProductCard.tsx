// Importa o componente Link do React Router para navegação entre páginas
import { Link } from 'react-router-dom'

// Define o tipo Product, que representa um produto
export type Product = {
  id: string // Identificador único do produto
  name: string // Nome do produto
  price: number // Preço do produto
  description: string // Descrição do produto
  image: string // Caminho da imagem do produto
  category: string // Categoria do produto
}

// Função que representa o cartão de um produto individual
export default function ProductCard({ product }: { product: Product }) {
  // Retorna o layout do cartão do produto
  return (
    // Div principal do cartão, com fundo branco, bordas arredondadas e sombra
    <div className="bg-white rounded-lg shadow hover:shadow-md transition p-4">
      {/* Imagem do produto */}
      <img 
        src={product.image} // Caminho da imagem do produto
        alt={product.name} // Texto alternativo para acessibilidade
        className="w-full h-44 object-cover rounded" // Estilização da imagem
      />
      {/* Div para informações do produto */}
      <div className="mt-3">
        {/* Nome do produto */}
        <h3 className="font-semibold text-lg leading-snug">{product.name}</h3>
        {/* Descrição do produto */}
        <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">{product.description}</p>
        {/* Div para preço e link de detalhes */}
        <div className="mt-2 flex items-center justify-between">
          {/* Preço do produto */}
          <span className="font-bold text-violet-700">R$ {product.price.toFixed(2)}</span>
          {/* Link para a página de detalhes do produto */}
          <Link to={`/product/${product.id}`} className="text-violet-700 hover:underline">Detalhes</Link>
        </div>
      </div>
    </div>
  )
}