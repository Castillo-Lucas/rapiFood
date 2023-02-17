import React, { useState } from "react";
import Contador from "./Contador";

function Cards({ pedido, setShowModal, setMensajeModal, setEditCard }) {
  const [time, setTime] = useState(120);

  const {
    nombreApellido,
    delivery,
    domicilio,
    products,
    cantidad,
    price,
    medPgo,
    pagaCon,
    vuelto,
    observaciones,
    id,
  } = pedido;

  const handleModal = () => {
    setShowModal(true);
    setMensajeModal(pedido);
  };

  return (
    <div>
      <div className="w-60 px-5 py-3 border-2 border-emerald-700 rounded-lg bg-zinc-900">
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
            >
              Cancelar
            </button>
          </div>
        </div>

        {/*Estado*/}
        <div className="flex justify-between">
          {time >= 81 ? (
            <p className="mt-3 font-bold text-lg text-center text-emerald-500 dark:text-gray-400">
              A Tiempo
            </p>
          ) : time >= 41 ? (
            <p className="mt-3 font-bold text-lg text-center text-orange-300 dark:text-gray-400">
              A Tiempo
            </p>
          ) : (
            <p className="mt-3.5 font-bold text-base text-center text-yellow-300 dark:text-gray-400  animate-pulse">
              Tiempo agotandose
            </p>
          )}

          <Contador time={time} setTime={setTime} />
        </div>
      </div>
    </div>
  );
}

export default Cards;
