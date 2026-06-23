import { memo } from "react";

function ProdutoCard({
  nome,
  preco,
  descricao,
  id,
 removerProduto,
  marcarConcluido,
  concluido
}) {
  return (
    <div
      className={`p-5 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-200 max-w-sm ${
        concluido
          ? "bg-gray-300"
          : "bg-white"
      }`}
    >
      <h2
        className={`text-2xl font-bold mb-2 ${
          concluido ? "line-through text-gray-500" : "text-gray-800"
        }`}
      >
        {nome}
      </h2>

      <p
        className={`text-lg font-semibold mb-3 ${
          concluido ? "line-through text-gray-500" : "text-green-600"
        }`}
      >
        R$ {preco}
      </p>

      <p
        className={`text-sm ${
          concluido ? "line-through text-gray-500" : "text-gray-600"
        }`}
      >
        {descricao}
      </p>

      <button
        onClick={() => marcarConcluido(id)}
        className={`py-2 rounded-md w-full mt-4 transition ${
          concluido
            ? "bg-gray-500 text-white hover:bg-gray-600"
            : "bg-green-500 text-white hover:bg-green-600"
        }`}
      >
        {concluido ? "Desmarcar" : "Concluir"}
      </button>

      <button
        onClick={() => removerProduto(id)}
        className="bg-red-500 text-white py-2 rounded-md w-full mt-2 hover:bg-red-600 transition"
      >
        Deletar
      </button>
    </div>
  );
}

export default memo(ProdutoCard);