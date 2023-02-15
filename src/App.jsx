import React, { useState } from "react";
import CardsSection from "./components/CardsSection";
import FormSection from "./components/FormSection";
import Modal from "./components/Modal";
import "./App.css";

function App() {
  const [pedido, setPedido] = useState([]);
  const [editCard, setEditCard] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [mensajeModal, setMensajeModal] = useState("");

  console.log(editCard)


  return (
    <div className="App">
      <div className="grid grid-cols-4 h-screen">
        {/*Form Section*/}
        <FormSection 
          pedido={pedido} 
          setPedido={setPedido} 
          editCard = {editCard}
          setEditCard = {setEditCard}
          
        />

        {/*Cards Section*/}
        <CardsSection
          setShowModal={setShowModal}
          pedido={pedido}
          setMensajeModal={setMensajeModal}
          setEditCard = {setEditCard}
        />

        {/*Modal*/}
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          mensajeModal={mensajeModal}
          pedido = {pedido}
          setEditCard = {setEditCard}
        />
      </div>
    </div>
  );
}

export default App;
