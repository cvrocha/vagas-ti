import React from 'react'
import { BiSearch } from "react-icons/bi";
import { BiUser } from "react-icons/bi";
import { BiShareAlt } from "react-icons/bi";
function Menu (){
    return (
        <main className="bg-black py-5 w-screen z-50">
            <div className="container flex justify-between items-center">
                <div>
                    <h1 className="font-extrabold text-3xl text-white">Vagas de TI</h1>
                </div>
                <div className="flex gap-7">
                    <button className="text-white text-xl"><BiSearch /></button>
                    <button className="text-white text-xl"><BiUser /></button>
                    <button className="text-white text-xl" ><BiShareAlt /></button>
                </div>
            </div>
        </main>
    );
}

export default Menu