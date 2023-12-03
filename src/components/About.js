import React from 'react';
import aboutImage from "../images/about.jpeg"
import Title from "./Title";
const About = () => {
    return (
            <section className="section" id="about">
                <Title title={"About"} subtitle={"Us"}/>

                <div className="section-center about-center">
                    <div className="about-img">
                        <img
                            src={aboutImage}
                            className="about-photo"
                            alt="awesome beach"
                        />
                    </div>
                    <article className="about-info">
                        <h3>explore the difference</h3>
                        <p>
                            Example Paragraph
                        </p>
                        <p>
                            Example Paragraph
                        </p>
                        <a href={"#about"} className={"btn"}>Read More</a>
                    </article>
                </div>
            </section>
    );
};

export default About;