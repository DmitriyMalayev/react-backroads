import React from 'react';
import {toursData} from "../data";

const Tour = () => {
    return (
        <div className="section-center featured-center">
            {toursData.map((tour) => {
                return (
                    <article className="tour-card" key={tour.id}>
                        <div className="tour-img-container">
                            <img
                                src={tour.imageSrc}
                                className="tour-img" alt=""/>
                            <p className="tour-date">{tour.date}</p>
                        </div>
                        <div className="tour-info">
                            <div className="tour-title">
                                <h4>{tour.title}</h4>
                            </div>
                            <p>
                                {tour.paragraphText}
                            </p>
                            <div className="tour-footer">
                                <p>
                                    <span><i className="fas fa-map"></i></span> {tour.location}
                                </p>
                                <p>{tour.duration}</p>
                                <p>{tour.cost}</p>
                            </div>
                        </div>
                    </article>
                )
            })}
        </div>

    );
};

export default Tour;