import React, { useRef, useState, useEffect } from "react";

function FormSection() {
  
  //States
  const [categories, setCategories] = useState('')
  const [products, setProducts] = useState('')
  const [cantidad, setCantidad] = useState(0)
  const [price, setPrice] = useState('')

  useEffect(()=>{
    setPrice(precio * cantidad)
  },[cantidad]) 

  useEffect(()=>{
    setCantidad(0)
  },[categories, products]) 
  
  //Productos ordenados por categoria
  const prodPorCategoria = {};

  //Arreglo de Productos
  const productos = [
    { 
      categoria: "Pizzas", 
      producto: "Pizza Especial", 
      key: 0, 
      precio: 1500 
    },
    {
      categoria: "Pizzas",
      producto: "Pizza con Morrones",
      key: 1,
      precio: 1680,
    },
    {
      categoria: "Pizzas",
      producto: "Pizza Cuatro Quesos",
      key: 2,
      precio: 2000,
    },
    {
      categoria: "Empanadas",
      producto: "Empanadas Criollas",
      key: 3,
      precio: 1500,
    },
    {
      categoria: "Empanadas",
      producto: "Empanadas Arabes",
      key: 4,
      precio: 1680,
    },
    {
      categoria: "Empanadas",
      producto: "Empanadas de Jamon y Queso",
      key: 5,
      precio: 2000,
    },
    {
      categoria: "Hamburguesas",
      producto: "Hamburguesa Simple",
      key: 6,
      precio: 1500,
    },
    {
      categoria: "Hamburguesas",
      producto: "Hamburguesa Completa",
      key: 7,
      precio: 1680,
    },
    {
      categoria: "Hamburguesas",
      producto: "Hamburguesa Americana",
      key: 8,
      precio: 2000,
    },
    {
      categoria: "Milanesas",
      producto: "Sandwich de Milanesa Simple",
      key: 9,
      precio: 1500,
    },
    {
      categoria: "Milanesas",
      producto: "Sandwich de Milanesa Completa",
      key: 10,
      precio: 1680,
    },
    {
      categoria: "Milanesas",
      producto: "Milanesa al Plato",
      key: 11,
      precio: 2000,
    },
    { categoria: "Lomitos", producto: "Lomitos Simple", key: 12, precio: 1500 },
    {
      categoria: "Lomitos",
      producto: "Lomitos Completo",
      key: 13,
      precio: 1680,
    },
    {
      categoria: "Lomitos",
      producto: "Lomitos Americano",
      key: 14,
      precio: 2000,
    },
    {
      categoria: "Papas Fritas",
      producto: "Papas Fritas Simple",
      key: 15,
      precio: 1500,
    },
    {
      categoria: "Papas Fritas",
      producto: "Papas Fritas al Gramajo",
      key: 16,
      precio: 1680,
    },
    {
      categoria: "Papas Fritas",
      producto: "Papas Fritas con Huevo Revuelto",
      key: 17,
      precio: 2000,
    },
    { categoria: "Bebidas", producto: "Coca Cola 500ml", key: 18, precio: 500 },
    { categoria: "Bebidas", producto: "Coca Cola 750ml", key: 19, precio: 680 },
    { categoria: "Bebidas", producto: "Coca Cola 1L", key: 20, precio: 1000 },
  ];
 
  //Se ordenan los productos por categoria
  productos.forEach((catg) => {
    const categories = catg.categoria;

    if (!prodPorCategoria[categories]) prodPorCategoria[categories] = [];
    prodPorCategoria[categories].push(catg);
  });

  //Se obtienen las categorias
  const categorias = Object.keys(prodPorCategoria);


  //Se ordenan los productos segun la categoria seleccionada
  const selecProd = productos.filter((pr)=> pr.categoria.includes(categories));

  //Se busca el precio
  const buscadorDePrecio = productos.filter((pr)=> pr.producto.includes(products))
  const precio = buscadorDePrecio[0].precio; 
  
  const generarID = () => {
    const Id1 = Math.random().toString(36).substring(2);
    const Id2 = Date.now().toString(36);
    return Id1 + Id2;
  };

  return (
    <form className="col-span-4 xl:col-span-1 bg-zinc-900 md:h-screen md:overflow-auto">
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
          El servicio de Delivery tiene un costo de $100 y el tiempo de entrega
          depende del mismo.
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
          defaultValue={"DEFAULT"}
        >
          Selecciona la Categoría
        </label>

        <select
          id="categorias"
          className="block p-2 ml-4 mt-1 w-11/12 text-gray-100/60 text-base bg-transparent border-0 border-b-2 border-gray-100/40 dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
          onChange = {(e)=> setCategories(e.target.value)}
          value={categories}
        >
          <option
            className="font-normal text-base text-gray-600 my-1 bg-gray-200"
            value="SelectCategoría"
            id="SelectCategoría"
            defaultValue={"SelectCategoría"}
            disabled            
          >
            Selecciona la Categoría
          </option>

          <option
            className="font-normal text-base text-gray-600 my-1 bg-gray-200"                     
          >
          </option>
          

          {categorias.map((categ) => (
            <option
              className="font-normal text-base text-gray-600 my-1 bg-gray-200"
              value={categ}
              key={generarID()} 
                           
            >
              {categ}
            </option>
          ))}
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
          onChange = {(e)=> setProducts(e.target.value)}
          value={products}
        >
          <option
            className="font-normal text-base text-gray-600 my-1 bg-gray-200"
            value="SelectCategoría"
            id="SelectCategoría"
            defaultValue={"SelectCategoría"}
            disabled            
          >
            Selecciona la Categoría
          </option>

          <option
            className="font-normal text-base text-gray-600 my-1 bg-gray-200"                     
          >
          </option>

          {selecProd.map((prod) => (
            <option
              className="font-normal text-base text-gray-600 my-1 bg-gray-200"
              value={prod.producto}
              key={generarID()}
            >
              {prod.producto}
            </option>
          ))}
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
            value={cantidad}
            onChange = {(e)=> setCantidad(e.target.value)}
          ></input>
        </div>
        <p className="block font-medium text-base text-neutral-100 mr-7">
          Precio{" "}
          <span className="font-normal text-base text-gray-100 my-1">
            ${price}
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
            value="SelectMdoPgo"
            id="SelectMdoPgo"
            defaultValue={"SelectMdoPgo"}
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
  );
}

export default FormSection;
