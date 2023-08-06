import React from 'react';
import { Timeline } from 'react-twitter-widgets'


const Home = () => {
    return (
        <main className="bg-slate-900">
            <div className="container min-h-screen flex justify-center items-center py-9" data-theme="dark">
                <div className="flex flex-col">
                    <Timeline
                        dataSource={{
                            sourceType: 'profile',
                            screenName: 'ViUmaVaga'
                        }}
                        options={{
                            height: 'null',
                            maxwidth: '800',
                            lang: 'pt-br',
                            theme: 'dark',
                            chrome: 'noheader, nofooter, noscrollbar, noborders, transparent'
                        }}
                    />
                    <Timeline
                        dataSource={{
                            sourceType: 'profile',
                            screenName: 'vagasprajr'
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
        </main>
    );

};

export default Home;
