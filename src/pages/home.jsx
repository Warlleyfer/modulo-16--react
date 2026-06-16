import { useEffect, useState } from "react";
import ProdutoCard from "../components/produtoCard";





//lista inicial
function Home() {

    const [produtos, setProdutos] = useState([])
 const [filtro, setFiltro] = useState("todas");

    const [nome, setNome] = useState("");
    const [preco, setPreco] = useState("");
    const [descricao, setDescricao] = useState("");



    const handleSubmit = (e) => {
        e.preventDefault();
        const novoProduto = {
            id: Date.now(),
            nome,
            preco,
            descricao,
            concluido:"false"
        };
        setProdutos([...produtos, novoProduto]);
        setNome("");
        setPreco("");
        setDescricao("");
    };

    // aqui fica a tela de carregar

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setProdutos([
                { id: 1, nome: "Mouse", preco: 50, descricao: "Mouse gamer"  ,concluido: "false"},
                { id: 2, nome: "Teclado", preco: 100, descricao: "Teclado mecânico",concluido:"false" }]);

            setLoading(false);


        }, 3000, []);
    }, []);

    //aqui mostra a tela de carregando
    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 text-center">

                    <h1 className="text-lg font-semibold text-gray-700 mb-4">
                        Carregando produtos, por favor aguarde...
                    </h1>

                    {/* Spinner simples */}
                    <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>

                </div>
            </div>

        );
    }


    {/* aqui estou pegando o produto e filtrando aquele que o ID for compativel com o selecionado */ }

    function removerProduto(id) {
        setProdutos(
            produtos.filter(produto => produto.id !== id)
        );
    }
    console.log(produtos)



    function concluido(id) {
        setProdutos(
            produtos.map(produto => produto.id === id ? { ...produto, concluido: !produto.concluido } : produto)
        )
    }

   
    const produtosFiltrados = produtos.filter(produto => {
        if (filtro === "pendentes") {
            return !produto.concluido;
        }

        if (filtro === "concluidas") {
            return produto.concluido;
        }

        return true;
    });





    return (
        <div className="min-h-screen bg-gray-100 p-4">


   



            {/* FORMULÁRIO */}
            <div className="flex justify-center mt-10">


                
                <form
                    onSubmit={handleSubmit}
                    className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 w-full max-w-md flex flex-col gap-4"
                >
<div className="flex justify-center gap-3 mb-6">
  <button
    onClick={() => setFiltro("todas")}
    className={`px-4 py-2 rounded-lg font-medium transition ${
      filtro === "todas"
        ? "bg-blue-500 text-white shadow-md"
        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
    }`}
  >
    Todas
  </button>

  <button
    onClick={() => setFiltro("pendentes")}
    className={`px-4 py-2 rounded-lg font-medium transition ${
      filtro === "pendentes"
        ? "bg-yellow-500 text-white shadow-md"
        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
    }`}
  >
    Pendentes
  </button>

  <button
    onClick={() => setFiltro("concluidas")}
    className={`px-4 py-2 rounded-lg font-medium transition ${
      filtro === "concluidas"
        ? "bg-green-500 text-white shadow-md"
        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
    }`}
  >
    Concluídas
  </button>
</div>

                    <h2 className="text-xl font-bold text-gray-800 text-center">
                        Adicionar Produto
                    </h2>

                    <input
                        value={nome}
                        placeholder="Digite o nome do produto"
                        onChange={(e) => setNome(e.target.value)}
                        required
                        className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
                    />

                    <input
                        value={descricao}
                        placeholder="Digite a descrição"
                        onChange={(e) => setDescricao(e.target.value)}
                        required
                        className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
                    />

                    <input
                        value={preco}
                        type="number"
                        placeholder="Valor"
                        onChange={(e) => setPreco(e.target.value)}
                        required
                        className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
                    />

                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
                    >
                        Adicionar Produto
                    </button>
                </form>
            </div>

            {/* CARDS (AGORA EMBAIXO) */}
            <div className="grid gap-6 
                    grid-cols-1 
                    sm:grid-cols-2 
                    md:grid-cols-3 
                    lg:grid-cols-4 mt-10">

                {produtosFiltrados.map(produto => (
                    <ProdutoCard
                        key={produto.id}
                        id={produto.id}
                        nome={produto.nome}
                        descricao={produto.descricao}
                        preco={produto.preco}
                        removerProduto={removerProduto}
                        marcarConcluido={concluido}
                        concluido={produto.concluido}

                    />
                ))}


            </div>

        </div>

    );
}

export default Home;
