import React from 'react';
import Search from "./components/Search/Search";
//import Search from "./components/Search/Search";
//import { Player } from 'video-react';



const App = () => {

    return (
        <>
            <div className={"wrapper"}>
            <div className="video">
                <video className="video-media" src="/video.mp4/weather.mp4" autoPlay muted
                       loop></video>
                <div className={"main"}>
                    <Search/>
                </div>

            </div>

            </div>
        </>
    );
};

export default App;