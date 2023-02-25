import React, { useState, useEffect } from "react";
import CardsSection from "./components/CardsSection";
import FormSection from "./components/FormSection";
import "./App.css";

function App() {
  const [pedido, setPedido] = useState(JSON.parse(localStorage.getItem('pedido')) ?? []);
  const [pedidoRetrasado, setpedidoRetrasado] = useState(JSON.parse(localStorage.getItem('pedidoRetrasado')) ?? []);
  const [pedidoEntregado, setPedidoEntregado] = useState(JSON.parse(localStorage.getItem('pedidoEntregado')) ?? []);
  const [pedidoCancelado, setPedidoCancelado] = useState(JSON.parse(localStorage.getItem('pedidoCancelado')) ?? []);
  const [editCard, setEditCard] = useState({});

  console.log(pedido)

  useEffect(()=>{
    localStorage.setItem('pedido', JSON.stringify(pedido))
  },[pedido])

  useEffect(()=>{
    localStorage.setItem('pedidoRetrasado', JSON.stringify(pedidoRetrasado))
  },[pedidoRetrasado])

  useEffect(()=>{
    localStorage.setItem('pedidoEntregado', JSON.stringify(pedidoEntregado))
  },[pedidoEntregado])

  useEffect(()=>{
    localStorage.setItem('pedidoCancelado', JSON.stringify(pedidoCancelado))
  },[pedidoCancelado])

  const ordenAgotada = (ped) => {
    let pedidoRetr = pedido.filter((orden) => orden.id === ped.id);
    let objPedidoRetr = { ...pedidoRetr[0] };
    setpedidoRetrasado([...pedidoRetrasado, objPedidoRetr]);

    let pedidoAgotado = pedido.filter((orden) => orden.id !== ped.id);
    setPedido(pedidoAgotado);
  };

  const ordenEntregada = (pedEntr) => {
    //Ordenes a Tiempo
    if (pedido.some((orden) => orden.id === pedEntr.id)) {
      let pedidoEntr = pedido.filter((orden) => orden.id === pedEntr.id);
      let objPedidoEntr = { ...pedidoEntr[0] };
      setPedidoEntregado([...pedidoEntregado, objPedidoEntr]);

      let borrarPedEntr = pedido.filter((orden) => orden.id !== pedEntr.id);
      setPedido(borrarPedEntr);
    } else if (pedidoRetrasado.some((orden) => orden.id === pedEntr.id)) {
      //Ordenes Retrasadas
      let pedidoOrdenRetrEntr = pedidoRetrasado.filter(
        (orden) => orden.id === pedEntr.id
      );
      let objordenRetrEntr = { ...pedidoOrdenRetrEntr[0] };
      setPedidoEntregado([...pedidoEntregado, objordenRetrEntr]);

      let borrarOrdenRetrEntr = pedidoRetrasado.filter(
        (orden) => orden.id !== pedEntr.id
      );
      setpedidoRetrasado(borrarOrdenRetrEntr);
    }
  };

  const ordenCancelada = (pedCanc) => {
    //Ordenes a Tiempo
    if (pedido.some((orden) => orden.id === pedCanc.id)) {
      let pedidoCanc = pedido.filter((orden) => orden.id === pedCanc.id);
      let objPedidoCanc = { ...pedidoCanc[0] };
      setPedidoCancelado([...pedidoCancelado, objPedidoCanc]);

      let borrarCanc = pedido.filter((orden) => orden.id !== pedCanc.id);
      setPedido(borrarCanc);
    } else if (pedidoRetrasado.some((orden) => orden.id === pedCanc.id)) {
      //Ordenes Retrasadas
      let pedRetrCanc = pedidoRetrasado.filter(
        (orden) => orden.id === pedCanc.id
      );
      let objPedRetrCanc = { ...pedRetrCanc[0] };
      setPedidoCancelado([...pedidoCancelado, objPedRetrCanc]);

      let borrarOrdenRetrCanc = pedidoRetrasado.filter(
        (orden) => orden.id !== pedCanc.id
      );
      setpedidoRetrasado(borrarOrdenRetrCanc);
    }
  };

  const eliminarRegistro = (elimOrden) => {
    //Pedidos Entregados
    if (pedidoEntregado.some((orden) => orden.id === elimOrden.id)) {
      let deletePedEntr = pedidoEntregado.filter(
        (orden) => orden.id !== elimOrden.id
      );
      setPedidoEntregado(deletePedEntr);
    } else if (pedidoCancelado.some((orden) => orden.id === elimOrden.id)) {
      let deletePedCanc = pedidoCancelado.filter(
        (orden) => orden.id !== elimOrden.id
      );
      setPedidoCancelado(deletePedCanc);
    }
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
          pedidoCancelado={pedidoCancelado}
          setPedidoCancelado={setPedidoCancelado}
          setEditCard={setEditCard}
          ordenAgotada={ordenAgotada}
          ordenEntregada={ordenEntregada}
          ordenCancelada={ordenCancelada}
          eliminarRegistro={eliminarRegistro}
        />
      </div>
    </div>
  );
}

export default App;
