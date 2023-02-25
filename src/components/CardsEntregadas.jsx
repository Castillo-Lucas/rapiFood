import React from "react";
import Swal from "sweetalert2";
import "../styles.css";

function CardsEntregadas({
  pedidoEntregado,
  eliminarRegistro,
}) {
  const {
    nombreApellido,
    delivery,
    domicilio,
    products,
    price,
    medPgo,
    vuelto,
    observaciones
  } = pedidoEntregado;

  const handleEliminar = () => {
    Swal.fire({
      text: "¿Deseas eliminar el registro?",
      icon: "info",
      iconColor: "#0D9488",
      confirmButtonText: "Eliminar Registro",
      confirmButtonColor: "#B4650B",
      showDenyButton: true,
      denyButtonText: "No eliminar aun",
    }).then((response) => {
      if (response.isConfirmed) {
        eliminarRegistro(pedidoEntregado);
      }
    });
  };

  const handleModal = () => {
    Swal.fire({
      title: "Observaciones",
      text: `${pedidoEntregado.observaciones}`,
      icon: "info",
      iconColor: "#0D9488",
      confirmButtonText: "Voler",
      confirmButtonColor: "#B4650B"
    })
  };

  return (
    <div className="w-60 px-5 py-3 border border-zinc-700 rounded-lg bg-zinc-900">
      {/*Nombre del Cliente*/}
      <h5 className="text-2xl text-gray-50/50 font-bold text-start tracking-wide mb-2 border-b-2 border-b-gray-500 pb-2">
        {nombreApellido}
      </h5>

      {/*Producto*/}
      <p className="font-medium text-1xl text-start text-gray-50/50 pt-2">
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
          className="font-normal text-base text-neutral-100/50 text-center
                    w-full py-2 my-2
                    rounded-lg border border-gray-400  hover:bg-sky-700/40 hover:font-medium  active:bg-sky-900 active:font-normal 
                    transition-colors"
          type="button"
          onClick={handleModal}
        >
          Observaciones
        </button>
      ) : (
        <button
          className="font-normal text-base text-neutral-100/50 text-center
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
            w-full py-2 mt-2
            rounded-lg border border-gray-400 hover:bg-red-500/80 hover:font-medium  active:bg-red-900 active:font-normal 
            transition-colors"
          onClick={handleEliminar}
        >
          Eliminar
        </button>
      </div>

      {/*Estado*/}
      <div className="py-5">
        <p className="mt-3 font-bold text-lg text-center text-emerald-500/50 dark:text-gray-400">
          Entregado
        </p>
      </div>
    </div>
  );
}

export default CardsEntregadas;
