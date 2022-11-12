import React from 'react';
import SearchData from "./components/SearchData/SearchData";


const App = () => {

    return (
        <>
            <div className={"wrapper"}>
                <div className="video">
                    <video className="video-media" src="/video.mp4/weather.mp4" autoPlay muted
                           loop></video>
                    <div className={"main"}>
                       <SearchData/>
                    </div>

                </div>

            </div>
        </>
    );
};

export default App;