// Função que representa a página "Sobre" do site
export default function About() {
  // Retorna o conteúdo da página sobre
  return (
    // Seção centralizada com informações sobre a loja
    <section className="max-w-2xl mx-auto py-10 px-4">
      {/* Título da página */}
      <h1 className="text-2xl font-bold mb-4">Sobre a Fantasia</h1>
      {/* Parágrafo de apresentação */}
      <p className="mb-4">Nossa loja nasceu da paixão por festas, criatividade e diversão. Aqui você encontra fantasias e acessórios para todas as idades, com qualidade e conforto.</p>
      {/* Lista de vantagens da loja */}
      <ul className="list-disc pl-6 mb-4 text-gray-700">
        <li>Variedade de temas e tamanhos</li>
        <li>Entrega rápida para todo o Brasil</li>
        <li>Atendimento personalizado</li>
      </ul>
      {/* Mensagem final */}
      <p>Conte com a Fantasia para tornar sua festa ainda mais especial!</p>
    </section>
  )
// ...
}