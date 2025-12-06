import { createContext, useContext, useEffect, useState } from 'react'
import type { Product } from '../components/ProductCard'

export type CartItem = {
  id: string
  name: string
  price: number
  qty: number
}

export type CartContextType = {
  items: CartItem[]
  add: (product: Product) => void
  remove: (id: string) => void
  updateQty: (id: string, qty: number) => void
  total: number
  clear: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(function () {
    const saved = localStorage.getItem('cart-items')
    if (saved) {
      const parsed = JSON.parse(saved) as CartItem[]
      if (Array.isArray(parsed)) {
        return parsed
      } else {
        return new Array<CartItem>()
      }
    } else {
      return new Array<CartItem>()
    }
  })

  const add = function (product: Product) {
    setItems(function (prev) {
      const next = new Array<CartItem>()
      let found = false
      for (let i = 0; i < prev.length; i++) {
        const item = prev[i]
        if (item.id === product.id) {
          const updated: CartItem = { id: item.id, name: item.name, price: item.price, qty: item.qty + 1 }
          next.push(updated)
          found = true
        } else {
          next.push(item)
        }
      }
      if (!found) {
        next.push({ id: product.id, name: product.name, price: product.price, qty: 1 })
      }
      return next
    })
  }

  const remove = function (id: string) {
    setItems(function (prev) {
      const next = new Array<CartItem>()
      for (let i = 0; i < prev.length; i++) {
        const item = prev[i]
        if (item.id !== id) {
          next.push(item)
        }
      }
      return next
    })
  }

  const updateQty = function (id: string, qty: number) {
    setItems(function (prev) {
      const next = new Array<CartItem>()
      for (let i = 0; i < prev.length; i++) {
        const item = prev[i]
        if (item.id === id) {
          const updated: CartItem = { id: item.id, name: item.name, price: item.price, qty: qty }
          next.push(updated)
        } else {
          next.push(item)
        }
      }
      return next
    })
  }

  const clear = function () {
    setItems(function () {
      const empty = new Array<CartItem>()
      return empty
    })
  }

  let total = 0
  for (let i = 0; i < items.length; i++) {
    total = total + (items[i].price * items[i].qty)
  }

  const value: CartContextType = { items: items, add: add, remove: remove, updateQty: updateQty, total: total, clear: clear }
  
  useEffect(function () {
    localStorage.setItem('cart-items', JSON.stringify(items))
  }, [items])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (ctx) {
    return ctx
  } else {
    const emptyItems = new Array<CartItem>()
    function noAdd(product: Product) { void product }
    function noRemove(id: string) { void id }
    function noUpdateQty(id: string, qty: number) { void id; void qty }
    function noClear() { }
    const total = 0
    const fallback: CartContextType = { items: emptyItems, add: noAdd, remove: noRemove, updateQty: noUpdateQty, total: total, clear: noClear }
    return fallback
  }
}
