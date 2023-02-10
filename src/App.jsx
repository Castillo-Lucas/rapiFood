import React, { useRef, useState } from "react";
import CardsSection from "./components/CardsSection";
import FormSection from "./components/FormSection";
import "./App.css";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="App">
      <div className="grid grid-cols-4 h-screen">

        {/*Form Section*/}
        <FormSection />

        {/*Cards Section*/}
         <CardsSection setShowModal = {setShowModal}/>
      </div>

      {/*Modal*/}
      <div>
        {showModal ? (
          <>
            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div
                className="fixed inset-0 w-full h-full bg-white opacity-50"
                onClick={() => setShowModal(false)}
              ></div>
              <div className="flex items-center min-h-screen px-4 py-8">
                <div className="relative w-full max-w-lg p-4 mx-auto bg-zinc-900 rounded-md shadow-lg">
                  <div className="mt-3 sm:flex">
                    <div className="flex items-center justify-center flex-none w-12 h-12 mx-auto bg-teal-500 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="mt-2 text-center sm:ml-4 sm:text-left">
                      <h4 className="text-lg font-medium text-gray-100">
                        Observaciones
                      </h4>
                      <p className="mt-2 text-[15px] leading-relaxed text-gray-400">
                        No quiere mayones, lechuga y tampoco quiere sal en las
                        papas.
                      </p>
                      <div className="items-center gap-2 mt-3 sm:flex">
                        <button
                          className="w-full mt-2 p-2.5 flex-1 font-normal text-base text-neutral-100 text-center rounded-lg border border-gray-400 hover:bg-amber-600/80  hover:font-medium  active:bg-amber-900 active:font-normal transition-colors"
                          onClick={() => setShowModal(false)}
                        >
                          Editar
                        </button>
                        <button
                          className="w-full mt-2 p-2.5 flex-1 font-normal text-base text-neutral-100 text-center rounded-lg border border-gray-400 hover:bg-red-500/80 hover:font-medium  active:bg-red-900 active:font-normal transition-colors"
                          onClick={() => setShowModal(false)}
                        >
                          Cancelar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}

export default App;
