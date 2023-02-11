import React, { useRef, useState } from "react";
import Cards from "./Cards";

function CardsSection({ pedido, setShowModal }) {
  return (
    <div className="col-span-4 xl:col-span-3 grid-rows-4 bg-zinc-700 xl:h-screen xl:overflow-auto">

        {pedido.length >= 1 ? (
                <div className="grid grid-rows-5 grid-flow-col gap-10 pt-3 mx-10">
                    {/*Fila 1*/}
          
                    <div className="grid grid-cols-1">
                      {pedido.map((pedidos) => (
                        <Cards
                          key={pedidos.id}
                          pedido={pedidos}
                          setShowModal={setShowModal}
                        />
                      ))}
                    </div>

                </div>
        ) : ( 
            <div className="flex h-screen mx-auto my-auto">
                <img
                    className="h-36 md:h-60 mx-auto my-auto"
                    src="https://res.cloudinary.com/dthpuldpm/image/upload/v1676148383/Administrador%20de%20Pedidos%20%7C%20Rapi-Food/background_t64iim.png"
                    alt=""
                />
            </div>
          )}

    </div>
  );
}

export default CardsSection;
