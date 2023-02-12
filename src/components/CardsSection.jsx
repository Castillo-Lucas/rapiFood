import React, { useRef, useState } from "react";
import Cards from "./Cards";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../styles.css";

// import required modules
import { Pagination } from "swiper";
import { Navigation } from "swiper";

function CardsSection({ pedido, setShowModal, setMensajeModal }) {
  console.log(pedido);

  return (
    <div className="col-span-4 xl:col-span-3 grid-rows-4 bg-zinc-700 xl:h-screen xl:overflow-auto">
      {pedido.length >= 1 ? (
        <div className="grid grid-rows-5 grid-flow-col gap-10 pt-3 mx-10">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              1775: {
                slidesPerView: 5,
                spaceBetween: 0,
              },
            }}
            modules={[Navigation, Pagination]}
            className="mySwiper"
          >
            {/*Fila 1*/}

            <div className="grid grid-cols-1">
              {pedido.map((pedidos) => (
                <SwiperSlide key={pedidos.id}>
                  <Cards
                    key={pedidos.id}
                    pedido={pedidos}
                    setShowModal={setShowModal}
                    setMensajeModal={setMensajeModal}
                  />
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
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
