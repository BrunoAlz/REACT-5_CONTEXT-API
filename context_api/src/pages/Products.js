import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";
import ChangeCounter from "../context/ChangeCounter";

const Products = () => {
  const { counter } = useContext(CounterContext);
  return (
    <div>
      <h1>Produtos</h1>
      <p>Valor do Contador: {counter}</p>
      <ChangeCounter />
    </div>
  );
};

export default Products;
