import React from "react";
import CardsEntregadas from "./CardsEntregadas";


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

function SwiperTres({pedidoEntregado, setPedidoEntregado, eliminarRegistro}) {
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
        {pedidoEntregado.map((pedidos) => (
          <SwiperSlide key={pedidos.id}>
            <CardsEntregadas
              key={pedidos.id}
              pedidoEntregado={pedidos}
              setPedidoEntregado = {setPedidoEntregado}
              eliminarRegistro={eliminarRegistro}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SwiperTres;
