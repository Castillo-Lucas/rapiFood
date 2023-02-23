import React from "react";
import SwiperUno from "./SwiperUno";
import SwiperDos from "./SwiperDos";
import SwiperTres from "./SwiperTres";
import SwiperCuatro from "./SwiperCuatro";

function CardsSection({
  pedido,
  setPedido,
  pedidoRetrasado,
  setpedidoRetrasado,
  pedidoEntregado,
  setPedidoEntregado,
  pedidoCancelado,
  setPedidoCancelado,
  setEditCard,
  ordenAgotada,
  ordenEntregada,
  ordenCancelada,
  eliminarRegistro,
}) {
  return (
    <div className="col-span-4 xl:col-span-3 bg-zinc-700 xl:h-screen xl:overflow-auto">
      {pedido.length >= 1 ||
      pedidoRetrasado.length >= 1 ||
      pedidoEntregado.length >= 1 ||
      pedidoCancelado.length >= 1 ? (
        <div>
          <div className="grid grid-rows-4 grid-flow-col gap-8 pt-5 mx-10">
            {/*Fila 1*/}
            {pedido.length >= 1 ? (
              <div className="grid grid-cols-1">
                <SwiperUno
                  pedido={pedido}
                  setPedido={setPedido}
                  setPedidoEntregado={setPedidoEntregado}
                  setEditCard={setEditCard}
                  ordenAgotada={ordenAgotada}
                  ordenEntregada={ordenEntregada}
                  ordenCancelada={ordenCancelada}
                />
              </div>
            ) : null}

            {/*Fila 2*/}
            {pedidoRetrasado.length >= 1 ? (
              <div className="grid grid-cols-1">
                <SwiperDos
                  pedidoRetrasado={pedidoRetrasado}
                  setpedidoRetrasado={setpedidoRetrasado}
                  setEditCard={setEditCard}
                  ordenEntregada={ordenEntregada}
                  ordenCancelada={ordenCancelada}
                />
              </div>
            ) : null}

            {/*Fila 3*/}
            {pedidoEntregado.length >= 1 ? (
              <div className="grid grid-cols-1">
                <SwiperTres
                  pedidoEntregado={pedidoEntregado}
                  setPedidoEntregado={setPedidoEntregado}
                  eliminarRegistro={eliminarRegistro}
                />
              </div>
            ) : null}

            {/*Fila 4*/}
            {pedidoCancelado.length >= 1 ? (
              <div className="grid grid-cols-1">
                <SwiperCuatro
                  pedidoCancelado={pedidoCancelado}
                  setPedidoCancelado={setPedidoCancelado}
                  eliminarRegistro={eliminarRegistro}
                />
              </div>
            ) : null}
          </div>

          {/*Firma*/}
          <div>
            <p className="text-base font-sans font-semibold tracking-wider text-zinc-900 text-center pb-1">
              Desarrollado por
              <a
                className="text-base font-sans font-bold tracking-wider text-zinc-900 hover:text-zinc-500 pb-1"
                href="https://www.linkedin.com/in/lucas-castillo-20a331193/"
                target={"_blank"}
              >
                {" "}
                Lucas Castillo
              </a>
            </p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col h-screen mx-auto my-auto">
          <img
            className="h-36 md:h-60 mx-auto my-auto"
            src="https://res.cloudinary.com/dthpuldpm/image/upload/v1676148383/Administrador%20de%20Pedidos%20%7C%20Rapi-Food/background_t64iim.png"
            alt=""
          />
          <p className="text-base font-sans font-semibold tracking-wider text-zinc-900 text-center pb-1">
            Desarrollado por
            <a
              className="text-base font-sans font-bold tracking-wider text-zinc-900 hover:text-zinc-500 pb-1"
              href="https://www.linkedin.com/in/lucas-castillo-20a331193/"
              target={"_blank"}
            >
              {" "}
              Lucas Castillo
            </a>
          </p>
        </div>
      )}
    </div>
  );
}

export default CardsSection;
