import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import CountDown from "./CountDown";
import "../styles.css";

function CardsAtiempo({
  pedido,
  setPedido,
  setEditCard,
  ordenAgotada,
  setpedidoRetrasado,
}) {
  const {
    nombreApellido,
    delivery,
    domicilio,
    products,
    price,
    medPgo,
    vuelto,
    observaciones,
    id,
  } = pedido;

  const [editTime, setEditTime] = useState();

  useEffect(() => {
    if (editTime === 0) {
      ordenAgotada(pedido);
    }
  }, [editTime]);

  const handleModal = () => {
    Swal.fire({
      title: "Observaciones",
      text: `${pedido.observaciones}`,
      icon: "info",
      iconColor: "#0D9488",
      confirmButtonText: "Editar",
      confirmButtonColor: "#B4650B",
      showDenyButton: true,
      denyButtonText: "Volver",
    }).then((response) => {
      if (response.isConfirmed) {
        setEditCard(pedido);
      }
    });
  };

  const handleEntregar = () => {
    Swal.fire({
      text: "Confirmar entrega del pedido!",
      icon: "info",
      iconColor: "#0D9488",
      confirmButtonText: "Entregar Pedido",
      confirmButtonColor: "#B4650B",
      showDenyButton: true,
      denyButtonText: "No entregar aun",
    }).then((response) => {
      if (response.isConfirmed) {
        console.log("pedido entregado");
      }
    });
  };

  const handleCancelar = () => {
    Swal.fire({
      text: "¿Deseas cancelar el pedido?",
      icon: "error",
      iconColor: "#C53C3C",
      confirmButtonText: "Mantener Pedido",
      confirmButtonColor: "#B4650B",
      showDenyButton: true,
      denyButtonText: "Cancelar Pedido",
    }).then((response) => {
      if (response.isDenied) {
        console.log("pedido canelado");
      }
    });
  };

  return (
    <div className="w-60 px-5 py-3 border border-zinc-700 rounded-lg bg-zinc-900">
      {/*Nombre del Cliente*/}
      <h5 className="text-2xl text-gray-50 font-bold text-start tracking-wide mb-2 border-b-2 pb-2">
        {nombreApellido}
      </h5>

      {/*Producto*/}
      <p className="font-medium text-1xl text-start text-gray-50 pt-2">
        {products}
      </p>

      {/*Direccion*/}
      {delivery ? (
        <p className="font-light text-base text-start text-gray-500 dark:text-gray-400">
          {domicilio}
        </p>
      ) : (
        <p className="font-light text-base text-start text-gray-500 dark:text-gray-400">
          Retira en local
        </p>
      )}

      {/*Obsevaciones*/}
      {observaciones ? (
        <button
          className="font-normal text-base text-neutral-100 text-center
                      w-full py-2 my-2
                      rounded-lg border border-lime-700  hover:bg-sky-700/40 hover:font-medium  active:bg-sky-900 active:font-normal transition-colors"
          type="button"
          onClick={handleModal}
        >
          Observaciones
        </button>
      ) : (
        <button
          className="font-normal text-base text-neutral-100 text-center
              w-full py-2 my-2
              rounded-lg border border-gray-400  cursor-default active:font-normal transition-colors"
          type="button"
        >
          Sin Observaciones
        </button>
      )}

      {/*Total*/}
      <p className="font-light text-base text-start text-gray-500 dark:text-gray-400">
        Total: {""} <span>${price}</span>
      </p>

      {/*Vuelto*/}
      {vuelto ? (
        <p className="font-light text-base text-start text-gray-500 dark:text-gray-400">
          Vuelto: {""} <span>${vuelto}</span>
        </p>
      ) : (
        <p className="font-light text-base text-start text-gray-500 dark:text-gray-400">
          <span>{medPgo}</span>
        </p>
      )}

      {/*Botones*/}
      <div className="mt-4">
        <button
          type="button"
          className="font-normal text-base text-neutral-100 text-center
            w-full py-2 mb-1
            rounded-lg border border-gray-400 hover:bg-teal-600 hover:font-medium  active:bg-teal-900 active:font-normal transition-colors"
          onClick={handleEntregar}
        >
          Entregado
        </button>

        <div className="flex content-evenly">
          <button
            type="button"
            className="font-normal text-base text-neutral-100 text-center
              w-full py-2 mt-2
              rounded-l-lg border border-gray-400 hover:bg-amber-600/80 hover:font-medium  active:bg-amber-900 active:font-normal transition-colors"
            onClick={() => setEditCard(pedido)}
          >
            Editar
          </button>
          <button
            type="button"
            className="font-normal text-base text-neutral-100 text-center
              w-full py-2 mt-2
              rounded-r-lg border border-gray-400 hover:bg-red-500/80 hover:font-medium  active:bg-red-900 active:font-normal transition-colors"
            onClick={handleCancelar}
          >
            Cancelar
          </button>
        </div>
      </div>

      {/*Estado*/}
      <div className="flex justify-between">
        {editTime >= 81 ? (
          <p className="mt-3 font-bold text-lg text-center text-emerald-500 dark:text-gray-400">
            A Tiempo
          </p>
        ) : editTime >= 41 ? (
          <p className="mt-3 font-bold text-lg text-center text-orange-300 dark:text-gray-400">
            A Tiempo
          </p>
        ) : (
          <p className="mt-3.5 font-bold text-base text-center text-yellow-300 dark:text-gray-400  animate-pulse">
            Tiempo agotandose
          </p>
        )}

        <CountDown editTime={editTime} setEditTime={setEditTime} />
      </div>
    </div>
  );
}

export default CardsAtiempo;
