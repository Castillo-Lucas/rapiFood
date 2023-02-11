import React, { useRef, useState, useEffect } from "react";
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

function Cards({ pedido, setShowModal}) {


  const {nombreApellido, delivery, domicilio, products, cantidad, price, medPgo, pagaCon, vuelto, observaciones, id} = pedido;

  
  return (
    <div>
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
        {/*Cards*/}
        <SwiperSlide>
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
            <p className="font-light text-base text-start text-gray-500 dark:text-gray-400">
              {domicilio}
            </p>

            {/*Obsevaciones*/}
            <button
              className="font-normal text-base text-neutral-100 text-center
                      w-full py-2 my-2
                      rounded-lg border border-gray-400 hover:bg-sky-700/40 hover:font-medium  active:bg-sky-900 active:font-normal transition-colors"
              type="button"
              onClick={() => setShowModal(true)}
            >
              Observaciones
            </button>

            {/*Total*/}
            <p className="font-light text-base text-start text-gray-500 dark:text-gray-400">
              Total: {""} <span>${price}</span>
            </p>

            {/*Vuelto*/}
            <p className="font-light text-base text-start text-gray-500 dark:text-gray-400">
              Vuelto: {""} <span>${vuelto}</span>
            </p>

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
            <p className="mt-3 font-bold text-lg text-center text-emerald-500 dark:text-gray-400">
              A Tiempo
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Cards;
