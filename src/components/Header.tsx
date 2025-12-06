// Importa componentes de navegação do React Router
import { Link, NavLink } from 'react-router-dom'
// Importa useState para controlar o menu mobile
import { useState } from 'react'
// Importa o hook do carrinho
import { useCart } from '../contexts/CartContext'

// Função do cabeçalho do site
export function Header() {
  // Pega os itens do carrinho
  const { items } = useCart()
  // Estado para saber se o menu mobile está aberto
  const [open, setOpen] = useState(false)
  // Conta o total de itens no carrinho
  let count = 0
  for (let i = 0; i < items.length; i++) {
    count = count + items[i].qty
  }
  // Renderiza o cabeçalho
  return (
    <header className="bg-violet-700 text-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo/título do site */}
        <Link to="/" className="font-bold text-xl tracking-tight">Fantasia</Link>
        {/* Botão de menu para telas pequenas */}
        <button
          className="md:hidden border border-white/40 rounded px-3 py-2"
          onClick={function () { setOpen(!open) }}
          aria-label="Abrir menu"
        >
          {/* Ícone hambúrguer com transição para X */}
          <span
            className={
              open
                ? 'block w-6 h-0.5 bg-white mb-1 transform rotate-45 translate-y-1 transition'
                : 'block w-6 h-0.5 bg-white mb-1 transform rotate-0 transition'
            }
          ></span>
          <span
            className={
              open
                ? 'block w-6 h-0.5 bg-white mb-1 opacity-0 transition'
                : 'block w-6 h-0.5 bg-white mb-1 opacity-100 transition'
            }
          ></span>
          <span
            className={
              open
                ? 'block w-6 h-0.5 bg-white transform -rotate-45 -translate-y-1 transition'
                : 'block w-6 h-0.5 bg-white transform rotate-0 transition'
            }
          ></span>
        </button>
        {/* Navegação principal (visível em desktop) */}
        <nav className="hidden md:flex gap-5 items-center text-sm md:text-base">
          {/* Link para Home */}
          <NavLink to="/" className={function ({ isActive }) { return isActive ? 'underline' : '' }}>Home</NavLink>
          {/* Link para Catálogo */}
          <NavLink to="/catalog" className={function ({ isActive }) { return isActive ? 'underline' : '' }}>Catálogo</NavLink>
          {/* Link para Carrinho com contador */}
          <NavLink to="/cart" className={function ({ isActive }) { return isActive ? 'underline' : '' }}>
            Carrinho
            {/* Mostra o número de itens se for maior que zero */}
            {count > 0 ? (
              <span className="ml-2 bg-white text-violet-700 rounded px-2 py-0.5 text-sm">{count}</span>
            ) : null}
          </NavLink>
          {/* Link para Sobre */}
          <NavLink to="/about" className={function ({ isActive }) { return isActive ? 'underline' : '' }}>Sobre</NavLink>
          {/* Link para Contato */}
          <NavLink to="/contact" className={function ({ isActive }) { return isActive ? 'underline' : '' }}>Contato</NavLink>
        </nav>
      </div>
      {/* Menu mobile dropdown simples */}
      {open ? (
        <div className="md:hidden border-t border-white/20">
          <nav className="container mx-auto px-4 py-3 flex flex-col gap-2 text-sm">
            {/* Cada link fecha o menu ao clicar */}
            <NavLink to="/" className={function () { return '' }} onClick={function () { setOpen(false) }}>Home</NavLink>
            <NavLink to="/catalog" className={function () { return '' }} onClick={function () { setOpen(false) }}>Catálogo</NavLink>
            <NavLink to="/cart" className={function () { return '' }} onClick={function () { setOpen(false) }}>
              Carrinho
              {count > 0 ? (
                <span className="ml-2 bg-white text-violet-700 rounded px-2 py-0.5 text-sm">{count}</span>
              ) : null}
            </NavLink>
            <NavLink to="/about" className={function () { return '' }} onClick={function () { setOpen(false) }}>Sobre</NavLink>
            <NavLink to="/contact" className={function () { return '' }} onClick={function () { setOpen(false) }}>Contato</NavLink>
          </nav>
        </div>
      ) : null}
    </header>
  )
}