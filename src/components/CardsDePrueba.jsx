import React from "react";
import Swal from "sweetalert2";

const CardsDePrueba = () => {
  const cardsonTime = [
    {
      nombreApellido: "Lucas Castillo",
      delivery: false,
      domicilio: "",
      categories: "",
      products: "",
      cantidad: 0,
      price: "",
      medPgo: "",
      pagaCon: "",
      vuelto: "",
      cantCtas: 0,
      valorCta: 0,
      observaciones: "",
    },
  ];

  console.log(cardsonTime)

  setTimeout(function () {
    Swal.fire({
      text: "¿Deseas importar Cards de prueba?",
      icon: "success",
      iconColor: "#A5DC86",
      confirmButtonText: "Importar Cards",
      confirmButtonColor: "#B4650B",
      showDenyButton: true,
      denyButtonText: "No Gracias",
    }).then((response) => {
      if (response.isDenied) {
        ordenCancelada(pedido);
      }
    });
  }, 8000);

  return <div></div>;
};

export default CardsDePrueba;
