import React, { useState, useEffect } from "react";
import CardsRetrasadas from "./CardsRetrasadas";

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

function SwiperDos({
  pedidoRetrasado,
  setpedidoRetrasado,
  setEditCard,
  ordenEntregada,
  ordenRetrasadaEntregada
}) {
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
        {pedidoRetrasado.map((pedidosRetr) => (
          <SwiperSlide key={pedidosRetr.id}>
            <CardsRetrasadas
              key={pedidosRetr.id}
              pedidoRetrasado={pedidosRetr}
              setpedidoRetrasado={setpedidoRetrasado}
              setEditCard={setEditCard}
              ordenEntregada={ordenEntregada}
              ordenRetrasadaEntregada={ordenRetrasadaEntregada}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SwiperDos;
