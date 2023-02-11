import React, { useRef, useState } from "react";
import Cards from "./Cards";

function CardsSection({setShowModal}){

    return(
        <div className="col-span-4 xl:col-span-3 grid-rows-4 bg-zinc-700 xl:h-screen xl:overflow-auto">
            <div className="grid grid-rows-5 grid-flow-col gap-10 pt-3 mx-10">

            {/*Fila 1*/}
            <div className="grid grid-cols-1">
                <Cards setShowModal = {setShowModal}/>
            </div>

            {/*Fila 2*/}
            <div className="grid grid-cols-1">
                <Cards setShowModal = {setShowModal}/>
            </div>

            {/*Fila 3*/}
            <div className="grid grid-cols-1">
                <Cards setShowModal = {setShowModal}/>
            </div>

            {/*Fila 4*/}
            <div className="grid grid-cols-1">
                <Cards setShowModal = {setShowModal}/>
            </div>

            {/*Fila 5*/}
            <div className="grid grid-cols-1">
                <Cards setShowModal = {setShowModal}/>
            </div>
            </div>        
        </div>
    )

}

export default CardsSection;