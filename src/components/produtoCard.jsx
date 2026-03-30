//CARD

function ProdutoCard ({nome ,preco ,descricao}){
   
   return(

     <div className="   bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-200 max-w-sm">
      
     
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        {nome}
      </h2>

      
      <p className="text-lg text-green-600 font-semibold mb-3">
        R$ {preco}
      </p>

     
      <p className="text-gray-600 text-sm">
        {descricao}
      </p>

    </div>
   );
}

export default ProdutoCard;