import { useCart } from '../contexts/CartContext'
import { useState } from 'react'

export default function Cart() {
  const { items, remove, updateQty, total, clear } = useCart()

  const [finished, setFinished] = useState(false)

  let content
  if (items.length === 0) {
    content = <p>Seu carrinho está vazio.</p>
  } else {
    const elements = new Array<JSX.Element>()
    for (let i = 0; i < items.length; i++) {
      const item = items[i]
      elements.push(
        <div key={item.id} className="flex items-center justify-between border rounded p-3">
          <div>
            <p className="font-semibold">{item.name}</p>
            <p className="text-sm text-gray-600">R$ {item.price.toFixed(2)}</p>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="number"
              min={1}
              value={item.qty}
              onChange={function (e) { updateQty(item.id, Number(e.target.value)) }}
              className="w-16 border rounded px-2 py-1"
            />
            <button onClick={function () { remove(item.id) }} className="text-red-600">Remover</button>
          </div>
        </div>
      )
    }
    if (finished) {
      content = (
        <div className="space-y-4">
          <p className="text-green-700 font-semibold">Compra finalizada com sucesso! Obrigado por comprar conosco.</p>
        </div>
      )
    } else {
      content = (
        <div className="space-y-4">
          {elements}
          <div className="text-right font-bold">Total: R$ {total.toFixed(2)}</div>
          <button
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
            onClick={function () {
              setFinished(true)
              clear()
            }}
          >
            Finalizar Compra
          </button>
        </div>
      )
    }
  }

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Carrinho</h2>
      {content}
    </section>
  )
}