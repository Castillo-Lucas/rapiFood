import React, { useEffect } from "react";

const SectionAnidada = ({
  delivery,
  precioDelivery,
  categories,
  setCategories,
  products,
  setProducts,
  cantidad,
  setCantidad,
  price,
  setPrice,
  generarID,
}) => {
  useEffect(() => {
    if (delivery === true) {
      setPrice(cantidad * precio + precioDelivery);
    } else if (delivery === false) {
      setPrice(cantidad * precio);
    }
  }, [cantidad]);

  useEffect(() => {
    if (delivery === true) {
      setPrice(cantidad * precio + precioDelivery);
    } else if (delivery === false) {
      setPrice(cantidad * precio);
    }
  }, [products]);

  useEffect(() => {
    if (delivery === true) {
      setPrice(cantidad * precio + precioDelivery);
    } else if (delivery === false) {
      setPrice(cantidad * precio);
    }
  }, [delivery]);

  //Productos ordenados por categoria
  const prodPorCategoria = {};

  //Arreglo de Productos
  const productos = [
    {
      categoria: "Pizzas",
      producto: "Pizza Especial",
      key: 0,
      precio: 1500,
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
  const selecProd = productos.filter((pr) => pr.categoria.includes(categories));

  //Se busca el precio
  const buscadorDePrecio = productos.filter((pr) =>
    pr.producto.includes(products)
  );
  const precio = buscadorDePrecio[0].precio;

  return (
    <div>
      {/*Categoría*/}
      <div className="my-6">
        <label
          htmlFor="categorias"
          className="block font-medium text-base text-neutral-100 ml-5"
          defaultValue={"DEFAULT"}
        >
          Selecciona la Categoría *
        </label>

        <select
          id="categorias"
          className="block p-2 ml-4 mt-1 w-11/12 text-gray-100/60 text-base bg-transparent border-0 border-b-2 border-gray-100/40 dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
          onChange={(e) => setCategories(e.target.value)}
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

          <option className="font-normal text-base text-gray-600 my-1 bg-gray-200"></option>

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
          Producto * 
        </label>
        <select
          id="producto"
          className="block p-2 ml-4 mt-1 w-11/12 text-gray-100/60 text-base bg-transparent border-0 border-b-2 border-gray-100/40 dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
          onChange={(e) => setProducts(e.target.value)}
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

          <option className="font-normal text-base text-gray-600 my-1 bg-gray-200"></option>

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
            Cantidad *
          </label>

          <input
            type="text"
            id="cantidad"
            className="pb-1 ml-2  w-8 text-gray-100/60 text-base text-center bg-transparent border-0 border-b-2 border-gray-100/40 dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            value={cantidad}
            onChange={(e) => setCantidad(e.target.value)}
          ></input>
        </div>
        <p className="block font-medium text-base text-neutral-100 mr-4 sm:mr-10 md:mr-16 lg:mr-20 xl:mr-6">
          Precio{" "}
          <span className="font-normal text-base text-gray-100 my-1">
            ${price}
          </span>
        </p>
      </div>
      {delivery === true ? (
        <div className="flex justify-end">
          <p className="block text-xs font-normal text-gray-500 dark:text-gray-300 p-0 -mt-8  mr-4 sm:mr-10 md:mr-16 lg:mr-20 xl:mr-6">
            El precio incluye delivery
          </p>
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default SectionAnidada;
