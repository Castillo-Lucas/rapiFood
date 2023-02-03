import React, { useRef, useState } from "react";
import CancelledCards from "./components/CancelledCards";
import DeliveredCards from "./components/DeliveredCards";
import GreenCards from "./components/GreenCards";
import RedCards from "./components/RedCards";
import YellowCards from "./components/YellowCards";


function App() {

  return (
    <div className="App">
      <div className="grid grid-cols-4">
        <form className="col-span-4 xl:col-span-1 bg-zinc-900">

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
              Nombre y Apellido
            </label>
            <input
              id="nombreApellido"
              type="text"
              placeholder="Nombre y Apellido del cliente"
              className="block p-2 ml-4 mt-1 w-11/12 text-gray-100 text-base bg-transparent border-0 border-b-2 border-gray-100/40 dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            />
          </div>

          {/*Delivery*/}
          <div className="w-11/12 ml-5">
            <label className="relative inline-flex items-center mr-5 cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="w-10 h-5 bg-gray-500 rounded-full peer peer-focus:ring-dark-400 dark:peer-focus:ring-teal-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-400 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-100 peer-checked:bg-teal-600"></div>
              <span className="font-normal text-base text-gray-100 ml-3">
                Envio con Delivery
              </span>
            </label>
            <p
              id="helper-checkbox-text"
              className="pl-12 text-xs font-normal text-gray-500 dark:text-gray-300"
            >
              El servicio de Delivery tiene un costo de $100 y el tiempo de
              entrega depende del mismo.
            </p>
          </div>

          {/*Domicilio*/}
          <div className="my-6">
            <label
              htmlFor="domicilio"
              className="block font-medium text-base text-neutral-100 ml-5"
            >
              Domicilio
            </label>
            <input
              id="domicilio"
              type="text"
              placeholder="Domicilio del cliente"
              className="block p-2 ml-4 mt-1 w-11/12 text-gray-100 text-base bg-transparent border-0 border-b-2 border-gray-100/40 dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            />
          </div>

          {/*Categoría*/}
          <div className="my-6">
            <label
              htmlFor="categorias"
              className="block font-medium text-base text-neutral-100 ml-5"
            >
              Categoría
            </label>
            <select
              id="categorias"
              className="block p-2 ml-4 mt-1 w-11/12 text-gray-100/60 text-base bg-transparent border-0 border-b-2 border-gray-100/40 dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            >
              <option
                className="font-normal text-base text-gray-600 my-1 bg-gray-200"
                disabled
                selected
              >
                Selecciona la Categoría
              </option>
              <option
                className="font-normal text-base text-gray-600 my-1 bg-gray-200"
                disabled
              >
                ----------------
              </option>
              <option
                className="font-normal text-base text-gray-600 my-1 bg-gray-200"
                value="Pizza"
                id="Pizza"
              >
                Pizzas
              </option>
              <option
                className="font-normal text-base text-gray-600 my-1 bg-gray-200"
                value="Empanadas"
                id="Empanadas"
              >
                Empanadas
              </option>
              <option
                className="font-normal text-base text-gray-600 my-1 bg-gray-200"
                value="Hamburgesas"
                id="Hamburgesas"
              >
                Hamburgesas
              </option>
              <option
                className="font-normal text-base text-gray-600 my-1 bg-gray-200"
                value="Milanesas"
                id="Milanesas"
              >
                Milanesas
              </option>
              <option
                className="font-normal text-base text-gray-600 my-1 bg-gray-200"
                value="Lomitos"
                id="Lomitos"
              >
                Lomitos
              </option>
              <option
                className="font-normal text-base text-gray-600 my-1 bg-gray-200"
                value="Papas"
                id="Papas"
              >
                Papas Fritas
              </option>
              <option
                className="font-normal text-base text-gray-600 my-1 bg-gray-200"
                value="Bebidas"
                id="Bebidas"
              >
                Bebidas
              </option>
            </select>
          </div>

          {/*Producto*/}
          <div className="my-6">
            <label
              htmlFor="producto"
              className="block font-medium text-base text-neutral-100 ml-5"
            >
              Producto
            </label>
            <select
              id="producto"
              className="block p-2 ml-4 mt-1 w-11/12 text-gray-100/60 text-base bg-transparent border-0 border-b-2 border-gray-100/40 dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            >
              <option
                className="font-normal text-base text-gray-600 my-1 bg-gray-200"
                disabled
                selected
              >
                Selecciona el Producto
              </option>
              <option
                className="font-normal text-base text-gray-600 my-1 bg-gray-200"
                disabled
              >
                ----------------
              </option>
              <option
                className="font-normal text-base text-gray-600 my-1 bg-gray-200"
                value="Pizza"
                id="Pizza"
              >
                Pizza
              </option>
              <option
                className="font-normal text-base text-gray-600 my-1 bg-gray-200"
                value="Empanadas"
                id="Empanadas"
              >
                Empanadas
              </option>
              <option
                className="font-normal text-base text-gray-600 my-1 bg-gray-200"
                value="Hamburgesas"
                id="Hamburgesas"
              >
                Hamburgesas
              </option>
              <option
                className="font-normal text-base text-gray-600 my-1 bg-gray-200"
                value="Milanesas"
                id="Milanesas"
              >
                Milanesas
              </option>
              <option
                className="font-normal text-base text-gray-600 my-1 bg-gray-200"
                value="Lomitos"
                id="Lomitos"
              >
                Lomitos
              </option>
              <option
                className="font-normal text-base text-gray-600 my-1 bg-gray-200"
                value="Papas"
                id="Papas"
              >
                Papas Fritas
              </option>
              <option
                className="font-normal text-base text-gray-600 my-1 bg-gray-200"
                value="Bebidas"
                id="Bebidas"
              >
                Bebidas
              </option>
            </select>
          </div>

          {/*Cantidad y Precio */}
          <div className="my-6 flex justify-between">
            <div className="flex justify-between">
              <label
                htmlFor="cantidad"
                className="block font-medium text-base text-neutral-100 ml-5"
              >
                Cantidad:
              </label>

              <input
                type="text"
                id="cantidad"
                className="pb-1 ml-2  w-8 text-gray-100/60 text-base text-center bg-transparent border-0 border-b-2 border-gray-100/40 dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
              ></input>
            </div>
            <p className="block font-medium text-base text-neutral-100 mr-7">
              Precio{" "}
              <span className="font-normal text-base text-gray-100 my-1">
                $1500
              </span>
            </p>
          </div>

          {/*Medio de Pago*/}
          <div className="mt-4 mb-6">
            <label
              htmlFor="pago"
              className="block font-medium text-base text-neutral-100 ml-5"
            >
              Medio de Pago
            </label>
            <select
              id="pago"
              className="block p-2 ml-4 mt-1 w-11/12 text-gray-100/60 text-base bg-transparent border-0 border-b-2 border-gray-100/40 dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            >
              <option
                className="font-normal text-base text-gray-600 my-1 bg-gray-200"
                disabled
                selected
              >
                Selecciona el Medio de Pago
              </option>
              <option
                className="font-normal text-base text-gray-600 my-1 bg-gray-200"
                disabled
              >
                ----------------
              </option>
              <option
                className="font-normal text-base text-gray-600 my-1 bg-gray-200"
                value="Pizza"
                id="Pizza"
              >
                Efectivo
              </option>
              <option
                className="font-normal text-base text-gray-600 my-1 bg-gray-200"
                value="Empanadas"
                id="Empanadas"
              >
                Transferencia
              </option>
              <option
                className="font-normal text-base text-gray-600 my-1 bg-gray-200"
                value="Hamburgesas"
                id="Hamburgesas"
              >
                Tarjeta de Débito
              </option>
              <option
                className="font-normal text-base text-gray-600 my-1 bg-gray-200"
                value="Milanesas"
                id="Milanesas"
              >
                Tarjeta de Crédito
              </option>
            </select>
          </div>

          

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
            />
          </div>

          {/*Boton*/}
          <button
            type="button"
            className="font-normal text-base text-neutral-100 text-center
            w-11/12 ml-4 py-2.5 mb-5
            rounded-lg border border-gray-400 hover:bg-teal-600 hover:font-medium  active:bg-teal-900 active:font-normal transition-colors"
          >
            Registrar Pedido
          </button>
          
        </form>

        <div className="col-span-4 xl:col-span-3 grid-rows-4 bg-zinc-600">
          <div className="grid grid-rows-5 grid-flow-col gap-12 pt-10 px-10">

            {/*Fila 1*/}
            <div className="grid grid-cols-1">                     
              <GreenCards />                                        
            </div>

            {/*Fila 2*/}
            <div className="grid grid-cols-1">                     
              <YellowCards />                                        
            </div>

            {/*Fila 3*/}
            <div className="grid grid-cols-1">                     
              <RedCards />                                        
            </div>

            {/*Fila 4*/}
            <div className="grid grid-cols-1">                     
              <CancelledCards />                                        
            </div>

            {/*Fila 5*/}
            <div className="grid grid-cols-1">                     
              <DeliveredCards />                                        
            </div>

          </div>
          
        </div>
      </div>
    </div>
  );
} 

export default App;
