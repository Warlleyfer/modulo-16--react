import { useContext } from "react";
import { contextProdutos } from "../context/contextProdutos";

export function useProdutos() {
  return useContext(contextProdutos);
}