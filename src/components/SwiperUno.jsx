import React from "react";
import CardsAtiempo from "./CardsAtiempo";
import CountDown from "./CountDown";


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

function SwiperUno({
  pedido,
  setPedido,
  setShowModal,
  setMensajeModal,
  setEditCard,
  ordenAgotada,
  editTime,
  setEditTime
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
        {pedido.map((pedidos) => (
          <SwiperSlide key={pedidos.id}>
            <CardsAtiempo
              key={pedidos.id}
              pedido={pedidos}
              setPedido = {setPedido}
              setShowModal={setShowModal}
              setMensajeModal={setMensajeModal}
              setEditCard={setEditCard}
              ordenAgotada = {ordenAgotada}
              editTime = {editTime}
              setEditTime = {setEditTime}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SwiperUno;
