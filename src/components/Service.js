import React from 'react';
import {servicesData} from "../data";

const Service = () => {
    return (
        <div className="section-center services-center">
            {servicesData.map((service) => {
                return (
                    <article className={"service"} key={service.id}>
                        <span className={"service-icon"}>
                            <i className={"fas fa-wallet fa-fw"}>
                            </i>
                        </span>
                        <div className={"service-info"}>
                            <h4 className={"service-title"}>{service.serviceTitle}</h4>
                            <p className={"service-text"}>{service.paragraphText}</p>
                        </div>
                    </article>
                )
            })}
        </div>
    );
};

export default Service;