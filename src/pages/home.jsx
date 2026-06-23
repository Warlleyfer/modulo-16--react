import { useEffect, useState } from "react";
import ProdutoCard from "../components/produtoCard";
import { useProdutos } from "../hooks/useProdutos";




//lista inicial
function Home() {
    const {
        filtro,
        setFiltro,
        adicionaProduto,
        removerProduto,
        alterarConcluido,
        produtosFiltrados,
    } = useProdutos();

    const [nome, setNome] = useState("");
    const [preco, setPreco] = useState("");
    const [descricao, setDescricao] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        adicionaProduto(nome,descricao ,preco);
        setNome("");
        setDescricao("");
        setPreco("");
    }

    // aqui fica a tela de carregar

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {

            setLoading(false);


        }, 3000);
        return () => clearTimeout(timer);
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


    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <div className="flex justify-center mt-10">
                <form
                    onSubmit={handleSubmit}
                    className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 w-full max-w-md flex flex-col gap-4"
                >
                    <div className="flex justify-center gap-3 mb-6">
                        <button
                            type="button"
                            onClick={() => setFiltro("todas")}
                            className={`px-4 py-2 rounded-lg font-medium transition ${filtro === "todas"
                                ? "bg-blue-500 text-white shadow-md"
                                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                }`}
                        >
                            Todas
                        </button>

                        <button
                            type="button"
                            onClick={() => setFiltro("pendentes")}
                            className={`px-4 py-2 rounded-lg font-medium transition ${filtro === "pendentes"
                                ? "bg-yellow-500 text-white shadow-md"
                                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                }`}
                        >
                            Pendentes
                        </button>

                        <button
                            type="button"
                            onClick={() => setFiltro("concluidas")}
                            className={`px-4 py-2 rounded-lg font-medium transition ${filtro === "concluidas"
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
                        marcarConcluido={alterarConcluido}
                        concluido={produto.concluido}

                    />
                ))}


            </div>

        </div>

    );
}

export default Home;
