
function ProdutoCard({ nome, preco, descricao, id, removerProduto, marcarConcluido, concluido }) {
  return (

    <div className={concluido ? "  line-through bg-gray-300 p-5 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-200 max-w-sm" : "   bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-200 max-w-sm"}>

  
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        {nome}
      </h2>


      <p className="text-lg text-green-600 font-semibold mb-3">
        R$ {preco}
      </p>


      <p className="text-gray-600 text-sm">
        {descricao}
      </p>



      <button onClick={() => marcarConcluido(id)}
        className=" bg-green-500 border-black py-2 rounded-md w-full mt-2 ">concluido</button>

      <button onClick={() => removerProduto(id)}
        className=" bg-red-500 border-black py-2 rounded-md w-full mt-2 ">Deletar</button>


    </div>
  );
}

export default ProdutoCard;