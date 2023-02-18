import React, { useState } from "react";
import CardsSection from "./components/CardsSection";
import FormSection from "./components/FormSection";
import Modal from "./components/Modal";
import "./App.css";

function App() {
  const [pedido, setPedido] = useState([]);
  const [pedidoRetrasado, setpedidoRetrasado] = useState([]);
  const [editCard, setEditCard] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [mensajeModal, setMensajeModal] = useState("");

  console.log(pedido)
  console.log(pedidoRetrasado)

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
          editCard={editCard}
          setEditCard={setEditCard}
        />

        {/*Cards Section*/}
        <CardsSection
          setShowModal={setShowModal}
          pedido={pedido}          
          setPedido={setPedido}
          setMensajeModal={setMensajeModal}
          setEditCard={setEditCard}
          ordenAgotada={ordenAgotada}
          pedidoRetrasado = {pedidoRetrasado}
          setpedidoRetrasado = {setpedidoRetrasado}
        />

        {/*Modal*/}
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          mensajeModal={mensajeModal}
          pedido={pedido}
          setEditCard={setEditCard}
        />
      </div>
    </div>
  );
}

export default App;
