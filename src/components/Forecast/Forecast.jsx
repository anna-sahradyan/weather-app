import React from 'react';
import "./forecastStyle.css";
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel
} from "react-accessible-accordion";
import {WEEK_DAYS} from "../data/day";

const Forecast = ({data}) => {
    const dayInAWeek = new Date().getDay();
    const days = WEEK_DAYS.splice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));

    return (
        <>
            <div className={"contentDiv"}>
                <label className={"title"}>Daily</label>
                <Accordion allowZeroExpanded>
                    {data?.list.splice(0, 7).map((item, index) => (
                        <AccordionItem key={`${item}_${index}`}> <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className={"dailyItem"}>
                                    <img src={`img/${item.weather[0].icon}.png`} alt={"iconMin"} className={"iconMin"}/>
                                    <label className={"days"}>{days[index]}</label>
                                    <label className={"desc"}>{item.weather[0].description}</label>
                                    <label
                                        className={"tempMinAndMax"}>{Math.round(item.main.temp_min)}°C/ {Math.round(item.main.temp_max)}°C</label>

                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div className={"detailsForecast"}>
                                    <div className={"details-item"}>
                                        <label>Pressure:</label>
                                        <label>{item.main.pressure} hPa</label>
                                    </div>
                                    <div className={"details-item"}>
                                        <label>Humidity:</label>
                                        <label>{item.main.humidity}%</label>
                                    </div>
                                    <div className={"details-item"}>
                                        <label>Clouds:</label>
                                        <label>{item.clouds.all}%</label>
                                    </div>
                                    <div className={"details-item"}>
                                        <label>Wind Speed:</label>
                                        <label>{item.wind.speed}m/s</label>
                                    </div>
                                    <div className={"details-item"}>
                                        <label>Sea Level:</label>
                                        <label>{item.main.sea_level}m</label>
                                    </div>
                                    <div className={"details-item"}>
                                        <label>Feels Like:</label>
                                        <label>{Math.round(item.main.feels_like)}°C</label>
                                    </div>
                                </div>
                            </AccordionItemPanel>
                        </AccordionItem>
                    ))}

                </Accordion>
            </div>
        </>
    );
};

export default Forecast;