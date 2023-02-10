import React, { useState, useEffect } from "react";

const MedPgo = ({ medPgo, setMedPgo, generarID }) => {
    const mediosPagos = ['Efectivo', 'Transferencia', 'Tarjeta de Debito', 'Tarjeta de Credito']
  return (
    <div className="mt-4 mb-6">
      <label
        htmlFor="pago"
        className="block font-medium text-base text-neutral-100 ml-5"
        defaultValue={"DEFAULT"}
      >
        Medio de Pago
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
    </div>
  );
};

export default MedPgo;
