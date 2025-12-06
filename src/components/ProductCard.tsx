
import { Link } from 'react-router-dom'


export type Product = {
  id: string
  name: string 
  price: number 
  description: string 
  image: string 
  category: string 
}


export default function ProductCard({ product }: { product: Product }) {
  
  return (
    
    <div className="bg-white rounded-lg shadow hover:shadow-md transition p-4">
      {/* Imagem do produto */}
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-44 object-cover rounded"
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