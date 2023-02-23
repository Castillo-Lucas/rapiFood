import React from "react";
import CardsCanceladas from "./CardsCanceladas";


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

function SwiperCuatro({ pedidoCancelado, setPedidoCancelado, eliminarRegistro }) {

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
        {pedidoCancelado.map((pedidos) => (
          <SwiperSlide key={pedidos.id}>
            <CardsCanceladas
              key={pedidos.id}
              pedidoCancelado={pedidos}
              setPedidoCancelado = {setPedidoCancelado}
              eliminarRegistro={eliminarRegistro}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SwiperCuatro;
