import React, { useState } from "react";
import SectionAnidada from "./SectionAnidada";
import MedPgo from "./MedPgo";

function FormSection() {
  //States
  const [nombreApellido, setNombreApellido] = useState("");
  const [delivery, setDelivery] = useState(true);
  const [domicilio, SetDomicilio] = useState("");
  const [categories, setCategories] = useState("");
  const [products, setProducts] = useState("");
  const [cantidad, setCantidad] = useState(0);
  const [price, setPrice] = useState("");
  const [medPgo, setMedPgo] = useState("");
  const [observaciones, setObservaciones] = useState("");
  const [pagaCon, setPagaCon] = useState("");
  const [vuelto, setVuelto] = useState("");
  const [cantCtas, setCantCtas] = useState(0);
  const [valorCta, setValorCta] = useState(0);

  const [error, setError] = useState(false);
  const precioDelivery = 100;

  const generarID = () => {
    const Id1 = Math.random().toString(36).substring(2);
    const Id2 = Date.now().toString(36);
    return Id1 + Id2;
  };

  const handleDelivery = (e) => {
    setDelivery(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      [
        nombreApellido,
        domicilio,
        categories,
        products,
        cantidad,
        medPgo,
      ].includes("")
    ) {
      setError(true);

      setTimeout(() => {
        setError(false);
      }, 2500);

      return;
    }

    //Se vuelven todos los States a Cero
    setNombreApellido("");
    setDelivery(true);
    SetDomicilio("");
    setCategories("");
    setProducts("");
    setCantidad(0);
    setPrice("");
    setMedPgo("");
    setObservaciones("");
    setPagaCon("");
    setVuelto("");
    setCantCtas(0);
    setValorCta(0);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="col-span-4 xl:col-span-1 bg-zinc-900 xl:h-screen xl:overflow-auto"
    >
      {/*Logo*/}
      <div>
        <img
          className="h-36 md:h-52 mx-auto mt-5 pb-3 border-b-2"
          src="https://res.cloudinary.com/dthpuldpm/image/upload/v1675114445/Administrador%20de%20Pedidos%20%7C%20Rapi-Food/logo_i7vtqi.png"
          alt=""
        />
      </div>

      {/*Nombre y Apellido*/}
      <div className="my-6">
        <label
          htmlFor="nombreApellido"
          className="block font-medium text-base text-neutral-100 ml-5"
        >
          Nombre y Apellido *
        </label>
        <input
          id="nombreApellido"
          type="text"
          placeholder="Nombre y Apellido del cliente"
          className="block p-2 ml-4 mt-1 w-11/12 text-gray-100 text-base bg-transparent border-0 border-b-2 border-gray-100/40 dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
          value={nombreApellido}
          onChange={(e) => setNombreApellido(e.target.value)}
        />
      </div>

      {/*Delivery*/}
      <div className="w-11/12 ml-5">
        <label className="relative inline-flex items-center mr-5 cursor-pointer">
          <input
            type="checkbox"
            defaultChecked
            className="sr-only peer"
            onChange={(e) => {
              handleDelivery(e.target.checked);
            }}
          />
          <div className="w-10 h-5 bg-gray-500 rounded-full peer peer-focus:ring-dark-400 dark:peer-focus:ring-teal-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-400 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-100 peer-checked:bg-teal-600"></div>
          <span className="font-normal text-base text-gray-100 ml-3">
            Envio con Delivery
          </span>
        </label>
        <p
          id="helper-checkbox-text"
          className="pl-12 text-xs font-normal text-gray-500 dark:text-gray-300"
        >
          El servicio de Delivery tiene un costo de ${precioDelivery} y el
          tiempo de entrega depende del mismo.
        </p>
      </div>

      {/*Domicilio*/}
      <div className="my-6">
        <label
          htmlFor="domicilio"
          className="block font-medium text-base text-neutral-100 ml-5"
        >
          Domicilio *
        </label>
        <input
          id="domicilio"
          type="text"
          placeholder="Domicilio del cliente"
          className="block p-2 ml-4 mt-1 w-11/12 text-gray-100 text-base bg-transparent border-0 border-b-2 border-gray-100/40 dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
          value={domicilio}
          onChange={(e) => SetDomicilio(e.target.value)}
        />
      </div>

      {/*Section Anidada*/}
      <SectionAnidada
        delivery={delivery}
        precioDelivery={precioDelivery}
        categories={categories}
        setCategories={setCategories}
        products={products}
        setProducts={setProducts}
        cantidad={cantidad}
        setCantidad={setCantidad}
        price={price}
        setPrice={setPrice}
        generarID={generarID}
      />

      {/*Medio de Pago*/}
      <MedPgo
        medPgo={medPgo}
        setMedPgo={setMedPgo}
        pagaCon={pagaCon}
        setPagaCon={setPagaCon}
        vuelto={vuelto}
        setVuelto={setVuelto}
        cantCtas={cantCtas}
        setCantCtas={setCantCtas}
        valorCta={valorCta}
        setValorCta={setValorCta}
        generarID={generarID}
        price={price}
      />

      {/*Observaciones */}
      <div className="my-6">
        <label
          htmlFor="observaciones"
          className="block font-medium text-base text-neutral-100 ml-5"
        >
          Observaciones del Pedido
        </label>
        <input
          id="observaciones"
          type="text"
          placeholder="Observaciones del Pedido"
          className="block p-2 ml-4 mt-1 w-11/12 text-gray-100 text-base bg-transparent border-0 border-b-2 border-gray-100/40 dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
          value={observaciones}
          onChange={(e) => setObservaciones(e.target.value)}
        />
      </div>

      {error === true ? (
        <p className="font-normal text-sm text-red-700 text-center tracking-widest mb-2">
          Completar todos los campos marcados con asteriscos *
        </p>
      ) : (
        <p></p>
      )}

      {/*Boton*/}
      <button
        type="submit"
        className="font-normal text-base text-neutral-100 text-center
            w-11/12 ml-4 py-2.5 mb-5
            rounded-lg border border-gray-400 hover:bg-teal-600 hover:font-medium  active:bg-teal-900 active:font-normal transition-colors"
      >
        Registrar Pedido
      </button>
    </form>
  );
}

export default FormSection;
