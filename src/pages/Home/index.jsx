import { useState } from "react";
import Carousel from "../../components/Carousel";
import store from "../../store/Context";

export default function Home() {
  // const { data } = store();
  const { home } = store().data;

  const [number, setNumber] = useState(16);
  const increase = () => setNumber((state) => state + 1);
  const decrease = () => setNumber((state) => state - 1);

  return (
    <div className="page">
      <h1>{home.title}</h1>
      <p>{home.information}</p>
      
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <Carousel />
      <p style={{ fontSize: `${number}px` }}>{home.information}</p>
    </div>
  );
}
