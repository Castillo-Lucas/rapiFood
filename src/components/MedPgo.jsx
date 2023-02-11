import React, { useState, useEffect } from "react";

const MedPgo = ({
  medPgo,
  setMedPgo,
  generarID,
  pagaCon,
  setPagaCon,
  vuelto,
  setVuelto,
  cantCtas,
  setCantCtas,
  valorCta,
  setValorCta,
  price,
}) => {
  const mediosPagos = [
    "Efectivo",
    "Transferencia",
    "Tarjeta de Debito",
    "Tarjeta de Credito",
  ];

  useEffect(() => {
    setVuelto(pagaCon - price);
  }, [pagaCon]);

  useEffect(() => {
    setValorCta(price / cantCtas);
  }, [cantCtas]);

  return (
    <div className="mt-4 mb-6">
      <label
        htmlFor="pago"
        className="block font-medium text-base text-neutral-100 ml-5"
        defaultValue={"DEFAULT"}
      >
        Medio de Pago *
      </label>

      <select
        id="pago"
        className="block p-2 ml-4 mt-1 w-11/12 text-gray-100/60 text-base bg-transparent border-0 border-b-2 border-gray-100/40 dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
        onChange={(e) => setMedPgo(e.target.value)}
        value={medPgo}
      >
        <option
          className="font-normal text-base text-gray-600 my-1 bg-gray-200"
          value="SelectMdoPgo"
          id="SelectMdoPgo"
          defaultValue={"SelectMdoPgo"}
          disabled
        >
          Selecciona el Medio de Pago
        </option>
        <option className="font-normal text-base text-gray-600 my-1 bg-gray-200"></option>

        {mediosPagos.map((categ) => (
          <option
            className="font-normal text-base text-gray-600 my-1 bg-gray-200"
            value={categ}
            key={generarID()}
          >
            {categ}
          </option>
        ))}
      </select>

      {/*Si se elige la opcion de Efectivo */}
      {medPgo === "Efectivo" ? (
        <div className="my-6 flex justify-between">
          <div className="flex justify-between">
            <label
              htmlFor="cantidad"
              className="block font-medium text-base text-neutral-100 ml-5"
            >
              Paga con: $
            </label>

            <input
              type="text"
              id="cantidad"
              className="pb-1 ml-1 w-9 text-gray-100/60 text-base text-start bg-transparent border-0 border-b-2 border-gray-100/40 dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
              value={pagaCon}
              onChange={(e) => setPagaCon(e.target.value)}
            ></input>
          </div>
          <p className="block font-medium text-base text-neutral-100 mr-4 sm:mr-10 md:mr-16 lg:mr-20 xl:mr-6">
            Vuelto:{" "}
            <span className="font-normal text-base text-gray-100 my-1">
              ${vuelto}
            </span>
          </p>
        </div>
      ) : (
        <p></p>
      )}

      {/*Si se elige la opcion de Trajeta de Credito */}
      {medPgo === "Tarjeta de Credito" ? (
        <div className="my-6 flex justify-between">
          <div className="flex justify-between">
            <label
              htmlFor="cantidad"
              className="block font-medium text-base text-neutral-100 ml-5"
            >
              Cantidad de Cuotas:
            </label>

            <input
              type="text"
              id="cantidad"
              className="pb-1 ml-2  w-8 text-gray-100/60 text-base text-center bg-transparent border-0 border-b-2 border-gray-100/40 dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
              value={cantCtas}
              onChange={(e) => setCantCtas(e.target.value)}
            ></input>
          </div>
          <p className="block font-medium text-base text-neutral-100 mr-4 sm:mr-10 md:mr-16 lg:mr-20 xl:mr-6">
            Valor Cuota:{" "}
            <span className="font-normal text-base text-gray-100 my-1">
              ${cantCtas >= 1 ? valorCta : 0}
            </span>
          </p>
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default MedPgo;
