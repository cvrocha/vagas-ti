import React from 'react'
import { Timeline } from 'react-twitter-widgets'
import { Link } from "react-router-dom"
import { BiLeftArrowAlt } from "react-icons/bi";
import Loading from '../components/loading';


const TechClaudia = () => {
    return (
        <main className="bg-slate-900">
            <section className="container">
                <div className="py-8">
                    <Link to="/" ><button className="p-2 border-white border-2 rounded-md text-white font-bold flex justify-center items-center"><BiLeftArrowAlt /></button></Link>
                </div>
                {/* <Loading /> */}
                <div className="min-h-screen flex flex-col justify-center items-center py-9" data-theme="dark">
                    <div className="flex flex-col">
                        <Timeline
                            dataSource={{
                                sourceType: 'profile',
                                screenName: 'tech_claudia'
                            }}
                            options={{
                                height: '800',
                                width: '800',
                                lang: 'pt-br',
                                theme: 'dark',
                                chrome: 'noheader, nofooter, noscrollbar, noborders, transparent'
                            }}
                        />
                    </div>
                </div>
            </section>
        </main>
    );

};

export default TechClaudia;
