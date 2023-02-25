import React, { useEffect } from "react";
import Swal from "sweetalert2";

const CardsDePrueba = ({
  pedido,
  pedidoRetrasado,
  pedidoEntregado,
  pedidoCancelado,
  setPedido,
  setpedidoRetrasado,
  setPedidoEntregado,
  setPedidoCancelado,
}) => {
  const generarID = () => {
    const Id1 = Math.random().toString(36).substring(2);
    const Id2 = Date.now().toString(36);
    return Id1 + Id2;
  };

  const cardPrueba = [
    {
      nombreApellido: "Martin Alvarez",
      delivery: false,
      domicilio: "",
      categories: "Pizzas",
      products: "Pizza con Morrones",
      cantidad: 1,
      price: "1680",
      medPgo: "Efectivo",
      pagaCon: "2000",
      vuelto: "320",
      cantCtas: "",
      valorCta: "",
      observaciones: "No quiere aceitunas",
      id: generarID(),
    },
    {
      nombreApellido: "Marta Martinez",
      delivery: true,
      domicilio: "Colon 1600",
      categories: "Hamburguesas",
      products: "Hamburguesa Americana",
      cantidad: 2,
      price: "4000",
      medPgo: "Transferencia",
      pagaCon: "",
      vuelto: "",
      cantCtas: "",
      valorCta: "",
      observaciones: "No quiere mayonesa",
      id: generarID(),
    },
    {
      nombreApellido: "Juan Castro",
      delivery: true,
      domicilio: "Avellaneda 864",
      categories: "Milanesas",
      products: "Sandwich de Milanesa Completa",
      cantidad: 1,
      price: "1680",
      medPgo: "Transferencia",
      pagaCon: "",
      vuelto: "",
      cantCtas: "",
      valorCta: "",
      observaciones: "No quiere sal en las papas",
      id: generarID(),
    },
    {
      nombreApellido: "Soledad Fontina",
      delivery: false,
      domicilio: "",
      categories: "Lomitos",
      products: "Lomitos Simple",
      cantidad: 2,
      price: "3000",
      medPgo: "Efectivo",
      pagaCon: "5000",
      vuelto: "2000",
      cantCtas: "",
      valorCta: "",
      observaciones: "",
      id: generarID(),
    },
    {
      nombreApellido: "Marcelo Gonzales",
      delivery: false,
      domicilio: "",
      categories: "Papas Fritas",
      products: "Papas Fritas al Gramajo",
      cantidad: 1,
      price: "1680",
      medPgo: "Efectivo",
      pagaCon: "2000",
      vuelto: "320",
      cantCtas: "",
      valorCta: "",
      observaciones: "",
      id: generarID(),
    },
    {
      nombreApellido: "Belen Gaspacho",
      delivery: true,
      domicilio: "Caseros 1100",
      categories: "Bebidas",
      products: "Coca Cola 500ml",
      cantidad: 2,
      price: "500",
      medPgo: "Transferencia",
      pagaCon: "",
      vuelto: "",
      cantCtas: "",
      valorCta: "",
      observaciones: "Las quiere bien fria",
      id: generarID(),
    },
    {
      nombreApellido: "Julian Martinez",
      delivery: true,
      domicilio: "San Martin 724",
      categories: "Milanesas",
      products: "Sandwich de Milanesa Completa",
      cantidad: 1,
      price: "1680",
      medPgo: "Transferencia",
      pagaCon: "",
      vuelto: "",
      cantCtas: "",
      valorCta: "",
      observaciones: "No quiere mayonesa",
      id: generarID(),
    },
    {
      nombreApellido: "Gabriela Juaneda",
      delivery: false,
      domicilio: "",
      categories: "Lomitos",
      products: "Lomitos Simple",
      cantidad: 2,
      price: "3000",
      medPgo: "Efectivo",
      pagaCon: "5000",
      vuelto: "2000",
      cantCtas: "",
      valorCta: "",
      observaciones: "",
      id: generarID(),
    },
  ];

  const handleCardsDePrueba = () => {
    let indice = 0;

    function imprCardsAtiempo() {
      setPedido((pedido) => [...pedido, cardPrueba[indice]]);
      indice++;
      if (indice === cardPrueba.length) {
        clearInterval(intervalo);
      }
    }

    const intervalo = setInterval(imprCardsAtiempo, 2356);

    setPedidoEntregado(cardPrueba);
    setPedidoCancelado(cardPrueba);
  };

  useEffect(() => {
    if (pedido.length === 0 && pedidoRetrasado.length === 0) {
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
          if (response.isConfirmed) {
            handleCardsDePrueba();
          }
        });
      }, 1000);
    }
  }, []);

  return <div></div>;
};

export default CardsDePrueba;
