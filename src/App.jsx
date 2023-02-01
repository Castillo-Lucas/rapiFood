import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="grid grid-cols-4 h-screen">
        <div className="col-span-4 xl:col-span-1 xl:h-screen bg-zinc-900">
          <div>
            <img
              className="h-36 xl:h-56 mx-auto mt-5 pb-3 border-b-2"
              src="https://res.cloudinary.com/dthpuldpm/image/upload/v1675114445/Administrador%20de%20Pedidos%20%7C%20Rapi-Food/logo_i7vtqi.png"
              alt=""
            />
          </div>

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

          <div className="my-6">
            <label
              htmlFor="categorias"
              className="block font-medium text-base text-neutral-100 ml-5"
            >
              Categoría
            </label>
            <select
              id="categorias"
              class="block p-2 ml-4 mt-1 w-11/12 text-gray-100/60 text-base bg-transparent border-0 border-b-2 border-gray-100/40 dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            >
              <option className="font-normal text-base text-gray-600 my-1 bg-gray-200" disabled selected>Selecciona la Categoría</option>
              <option className="font-normal text-base text-gray-600 my-1 bg-gray-200" disabled>----------------</option>
              <option className="font-normal text-base text-gray-600 my-1 bg-gray-200" value="Pizza" id="Pizza">Pizzas</option>
              <option className="font-normal text-base text-gray-600 my-1 bg-gray-200" value="Empanadas" id="Empanadas">Empanadas</option>
              <option className="font-normal text-base text-gray-600 my-1 bg-gray-200" value="Hamburgesas" id="Hamburgesas">Hamburgesas</option>
              <option className="font-normal text-base text-gray-600 my-1 bg-gray-200" value="Milanesas" id="Milanesas">Milanesas</option>
              <option className="font-normal text-base text-gray-600 my-1 bg-gray-200" value="Lomitos" id="Lomitos">Lomitos</option>
              <option className="font-normal text-base text-gray-600 my-1 bg-gray-200" value="Papas" id="Papas">Papas Fritas</option>
              <option className="font-normal text-base text-gray-600 my-1 bg-gray-200" value="Bebidas" id="Bebidas">Bebidas</option>
            </select>
          </div>

          <div className="my-6">
            <label
              htmlFor="producto"
              className="block font-medium text-base text-neutral-100 ml-5"
            >
              Producto
            </label>
            <select
              id="producto"
              class="block p-2 ml-4 mt-1 w-11/12 text-gray-100/60 text-base bg-transparent border-0 border-b-2 border-gray-100/40 dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            >
              <option className="font-normal text-base text-gray-600 my-1 bg-gray-200" disabled selected>Selecciona el Producto</option>
              <option className="font-normal text-base text-gray-600 my-1 bg-gray-200" disabled>----------------</option>
              <option className="font-normal text-base text-gray-600 my-1 bg-gray-200" value="Pizza" id="Pizza">Pizza</option>
              <option className="font-normal text-base text-gray-600 my-1 bg-gray-200" value="Empanadas" id="Empanadas">Empanadas</option>
              <option className="font-normal text-base text-gray-600 my-1 bg-gray-200" value="Hamburgesas" id="Hamburgesas">Hamburgesas</option>
              <option className="font-normal text-base text-gray-600 my-1 bg-gray-200" value="Milanesas" id="Milanesas">Milanesas</option>
              <option className="font-normal text-base text-gray-600 my-1 bg-gray-200" value="Lomitos" id="Lomitos">Lomitos</option>
              <option className="font-normal text-base text-gray-600 my-1 bg-gray-200" value="Papas" id="Papas">Papas Fritas</option>
              <option className="font-normal text-base text-gray-600 my-1 bg-gray-200" value="Bebidas" id="Bebidas">Bebidas</option>
            </select>
          </div>

          <div className="my-6">
            <label
              htmlFor="pago"
              className="block font-medium text-base text-neutral-100 ml-5"
            >
              Medio de Pago
            </label>
            <select
              id="pago"
              class="block p-2 ml-4 mt-1 w-11/12 text-gray-100/60 text-base bg-transparent border-0 border-b-2 border-gray-100/40 dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            >
              <option className="font-normal text-base text-gray-600 my-1 bg-gray-200" disabled selected>Selecciona el Medio de Pago</option>
              <option className="font-normal text-base text-gray-600 my-1 bg-gray-200" disabled>----------------</option>
              <option className="font-normal text-base text-gray-600 my-1 bg-gray-200" value="Pizza" id="Pizza">Efectivo</option>
              <option className="font-normal text-base text-gray-600 my-1 bg-gray-200" value="Empanadas" id="Empanadas">Transferencia</option>
              <option className="font-normal text-base text-gray-600 my-1 bg-gray-200" value="Hamburgesas" id="Hamburgesas">Tarjeta de Débito</option>
              <option className="font-normal text-base text-gray-600 my-1 bg-gray-200" value="Milanesas" id="Milanesas">Tarjeta de Crrédito</option>
            </select>
          </div>


        </div>

        <div className="col-span-4 xl:col-span-3 xl:h-screen bg-zinc-600"></div>
      </div>
    </div>
  );
}

export default App;
