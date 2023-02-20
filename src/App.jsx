import React, { useState } from "react";
import CardsSection from "./components/CardsSection";
import FormSection from "./components/FormSection";
import "./App.css";

function App() {
  const [pedido, setPedido] = useState([]);
  const [pedidoRetrasado, setpedidoRetrasado] = useState([]);
  const [pedidoEntregado, setPedidoEntregado] = useState([]);
  const [editCard, setEditCard] = useState({});

  const ordenAgotada = (ped) => {
    let pedidoRetr = pedido.filter((orden) => orden.id === ped.id);
    let objPedidoRetr = { ...pedidoRetr[0] };
    setpedidoRetrasado([...pedidoRetrasado, objPedidoRetr]);

    let pedidoAgotado = pedido.filter((orden) => orden.id !== ped.id);
    setPedido(pedidoAgotado);
  };

  console.log(pedidoEntregado)

  const ordenEntregada = (pedEntr) => {

    


    let pedidoEntr = pedido.filter((orden) => orden.id === pedEntr.id);
    let objPedidoEntr = { ...pedidoEntr[0] };
    setPedidoEntregado([...pedidoEntregado, objPedidoEntr]);

    let borrarPedEntr = pedido.filter((orden) => orden.id !== pedEntr.id);

    setPedido(borrarPedEntr);
  };

  const ordenRetrasadaEntregada = (ordenRetrEntr) => {
    
    let pedidoOrdenRetrEntr = pedidoRetrasado.filter((orden) => orden.id === ordenRetrEntr.id);
    let objordenRetrEntr = { ...pedidoOrdenRetrEntr[0] };
    setPedidoEntregado([...pedidoEntregado, objordenRetrEntr]);

    let borrarOrdenRetrEntr = pedidoRetrasado.filter((orden) => orden.id !== ordenRetrEntr.id);
    setpedidoRetrasado(borrarOrdenRetrEntr);
  };

  const eliminarEntregada = (elimEntr) => {
    let deletePedEntr = pedido.filter((orden) => orden.id !== elimEntr.id);
    setPedidoEntregado(deletePedEntr);
  };

  return (
    <div className="App">
      <div className="grid grid-cols-4 h-screen">
        {/*Form Section*/}
        <FormSection
          pedido={pedido}
          setPedido={setPedido}
          pedidoRetrasado={pedidoRetrasado}
          setpedidoRetrasado={setpedidoRetrasado}
          editCard={editCard}
          setEditCard={setEditCard}
        />

        {/*Cards Section*/}
        <CardsSection
          pedido={pedido}
          setPedido={setPedido}
          pedidoRetrasado={pedidoRetrasado}
          setpedidoRetrasado={setpedidoRetrasado}
          pedidoEntregado={pedidoEntregado}
          setPedidoEntregado={setPedidoEntregado}
          setEditCard={setEditCard}
          ordenAgotada={ordenAgotada}
          ordenEntregada={ordenEntregada}
          ordenRetrasadaEntregada={ordenRetrasadaEntregada}
          eliminarEntregada={eliminarEntregada}
        />
      </div>
    </div>
  );
}

export default App;
