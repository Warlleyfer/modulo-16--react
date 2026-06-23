import { createContext, useMemo, useState } from "react";

export const contextProdutos = createContext();

export function ProdutosProvider({ children }) {
    const [produtos, setProdutos] = useState([
        {
            id: 1,
            nome: "Mouse",
            preco: 50,
            descricao: "Mouse gamer",
            concluido: false,
        },
        {
            id: 2,
            nome: "Teclado",
            preco: 100,
            descricao: "Teclado mecânico",
            concluido: false,
        },
    ]);

    const [filtro, setFiltro] = useState("todas");

    function adicionaProduto(nome, descricao, preco) {
        const novoProduto={
        id: Date.now(),
            nome,
            preco,
            descricao,
            concluido: false,
    };

    setProdutos((prev) => [...prev , novoProduto]);
}

//remove o produto atraves do seu ID
function removerProduto(id){
    setProdutos((prev) => prev.filter((produto) => produto.id !== id));
}

//altera o concluido de TRUE pra FALSE de acordo com seu Estado ATUAL.
function alterarConcluido(id){
    setProdutos((prev) => prev.map((produto) => produto.id === id ?
   {...produto ,concluido : !produto.concluido} : produto)
);
}

//Adicionei o use memo para que a lista so seja renderizada novamente caso o produtos ou o filtro seja alterado.

const produtosFiltrados =useMemo(() =>{
    if(filtro === "pendentes"){
        return produtos.filter((produto) => !produto.concluido);
    }
     
    if(filtro === "concluidas"){
        return produtos.filter((produtos) =>produtos.concluido);
    }
    return produtos;
},[produtos,filtro]);


return (
    <contextProdutos.Provider value={{
        produtos,
        filtro,
        setFiltro,
        adicionaProduto,
        removerProduto,
        alterarConcluido,
        produtosFiltrados
    }}
    >{children}</contextProdutos.Provider>
);
}