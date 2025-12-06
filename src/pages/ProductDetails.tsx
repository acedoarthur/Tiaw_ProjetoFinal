import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import type { Product } from '../components/ProductCard'
import { useCart } from '../contexts/CartContext'

export default function ProductDetails() {
  const { id } = useParams()
  const [product, setProduct] = useState<Product | null>(null)
  const { add } = useCart()
  const [addedMsg, setAddedMsg] = useState('')

  useEffect(function () {
    fetch('/data/products.json')
      .then(function (r) { return r.json() })
      .then(function (list: Product[]) {
        let found: Product | null = null
        for (let i = 0; i < list.length; i++) {
          const p = list[i]
          if (p.id === id) {
            found = p
            break
          }
        }
        setProduct(found)
      })
  }, [id])

  if (!product) return <p>Carregando...</p>

  return (
    <section className="grid md:grid-cols-2 gap-6">
      <img src={product.image} alt={product.name} className="w-full h-80 object-cover rounded" />
      <div>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{product.name}</h2>
        <p className="mt-2 text-gray-700 leading-relaxed">{product.description}</p>
        <p className="mt-4 text-xl md:text-2xl font-semibold text-violet-700">R$ {product.price.toFixed(2)}</p>
        <button
          onClick={function () {
            add(product)
            setAddedMsg('Item adicionado!')
            setTimeout(function () { setAddedMsg('') }, 1500)
          }}
          className="mt-6 bg-violet-700 text-white px-5 py-3 rounded shadow hover:bg-violet-800"
        >
          Adicionar ao Carrinho
        </button>
        {(() => {
          if (addedMsg !== '') {
            return (
              <div className="mt-3 inline-block bg-green-100 text-green-700 px-3 py-2 rounded">
                {addedMsg}
              </div>
            )
          } else {
            return null
          }
        })()}
      </div>
    </section>
  )
}