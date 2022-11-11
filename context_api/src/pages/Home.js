// import { useContext } from "react";
// import { CounterContext } from "../context/CounterContext";
import ChangeCounter from "../context/ChangeCounter";
import { useCounterContext } from "../hooks/useCounterContext";

import { useTitleColorCOntext } from "../hooks/useTitleColorContext";

const Home = () => {
  // const { counter } = useContext(CounterContext);
  const { counter } = useCounterContext();

  const { color } = useTitleColorCOntext();

  return (
    <div>
      <h1 style={{ color: color }}>Home</h1>
      <p>Valor do Contador: {counter}</p>
      <ChangeCounter />
    </div>
  );
};

export default Home;
