import React, { useState } from "react";
import CardsSection from "./components/CardsSection";
import FormSection from "./components/FormSection";
import "./App.css";

function App() {
  const [pedido, setPedido] = useState([]);
  const [pedidoRetrasado, setpedidoRetrasado] = useState([]);
  const [editCard, setEditCard] = useState({});

  const ordenAgotada = (ped) => {    
    let pedidoRetr = pedido.filter((orden) => orden.id === ped.id);
    let objPedidoRetr = {...pedidoRetr[0]}
    setpedidoRetrasado([...pedidoRetrasado, objPedidoRetr])
    
    let pedidoAgotado = pedido.filter((orden) => orden.id !== ped.id);
    setPedido(pedidoAgotado);
  };

  return (
    <div className="App">
      <div className="grid grid-cols-4 h-screen">
        {/*Form Section*/}
        <FormSection
          pedido={pedido}
          setPedido={setPedido}
          pedidoRetrasado = {pedidoRetrasado}
          setpedidoRetrasado = {setpedidoRetrasado}
          editCard={editCard}
          setEditCard={setEditCard}
        />

        {/*Cards Section*/}
        <CardsSection
          pedido={pedido}          
          setPedido={setPedido}
          setEditCard={setEditCard}
          ordenAgotada={ordenAgotada}
          pedidoRetrasado = {pedidoRetrasado}
          setpedidoRetrasado = {setpedidoRetrasado}
        />
      </div>
    </div>
  );
}

export default App;
