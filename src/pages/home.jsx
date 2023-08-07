import React from 'react';
import { Link} from "react-router-dom"

const Home = () => {
    return (
        <main className="bg-slate-900">
            <section className="container">
                <div className="py-8">
                    {/* <p className="p-2 text-white font-bold flex items-center">Aguarde</p> */}
                </div>
                <div className="min-h-screen flex flex-col py-9" data-theme="dark">
                    <div className="pages-profile grid grid-cols-3 gap-4">
                        <Link to={{pathname:"/viumavaga"}}><div className="p-10 border-white border-2 rounded-md text-white font-bold flex justify-center items-center">ViUmaVaga</div></Link>
                        <Link to={{pathname:"/vagasprajr"}}><div className="p-10 border-white border-2 rounded-md text-white font-bold flex justify-center items-center">Vagas para JR</div></Link>
                        <Link to={{pathname:"/techclaudia"}}><div className="p-10 border-white border-2 rounded-md text-white font-bold flex justify-center items-center">Tech Claudia</div></Link>
                        <Link to={{pathname:"/vmnitrecruiter"}}><div className="p-10 border-white border-2 rounded-md text-white font-bold flex justify-center items-center">Tuiteiro de Vagas Tech</div></Link>
                    </div>
                    <div className="flex flex-col">
                    </div>
                </div>
            </section>
        </main>
    );

};

export default Home;
