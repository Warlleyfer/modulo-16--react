import { ProdutosProvider } from "./context/contextProdutos";
import Home from "./pages/home";

function App() {
  return <ProdutosProvider><Home/></ProdutosProvider>;
}

 export default App;