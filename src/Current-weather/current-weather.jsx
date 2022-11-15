import React from 'react';
import "./current-weatherStyle.css";

const CurrentWeather = ({data}) => {
    return (
        <>
            <div className={"current-weather"}>
                <div className={"top"}>
                    <div>
                        <p className={"city"}>{data.city}</p>
                        <p className={"wed-desc"}>{data.weather[0].description}</p>
                    </div>

                    <img src="img/01d.png" alt="icon" className={"wed-icon"}/>
                </div>
                <div className={"bottom"}>
                    <p className={"temp"}>3°C</p>
                    <div className={"details"}>
                        <div className={"param"}>
                            <span className={"param-label top "}>Details</span>
                        </div>
                        <div className={"param"}>
                            <span className={"param-label"}>Feels like</span>
                            <span className={"param-value"}>22 °C</span>
                        </div>
                        <div className={"param"}>
                            <span className={"param-label"}>Wind</span>
                            <span className={"param-value"}>2 m/s</span>
                        </div>
                        <div className={"param"}>
                            <span className={"param-label"}>Humidity</span>
                            <span className={"param-value"}>10%</span>
                        </div>
                        <div className={"param"}>
                            <span className={"param-label"}>Pressure</span>
                            <span className={"param-value"}>10 hPa</span>
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
};

export default CurrentWeather;