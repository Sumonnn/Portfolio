import React from 'react'
import "./portfolio.css"
import { data } from '../../data/ProjectLinks';

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My most recent work</h5>
            <h2>Projects</h2>
            <div className="container portfolio__container">
                {data.map(({ id, img, title, github, demo }) => {
                    return (
                        <article key={id} className="portfolio__item">
                            <div className="portfolio__item-image">
                                <img src={img} alt={title} />
                            </div>
                            <h3>{title}</h3>
                            <div className="portfolio__item-cta">
                                <a target="_blank" href={github} className="btn">
                                    Github
                                </a>
                                <a target="_blank" href={demo} className="btn btn-primary">
                                    Live Demo
                                </a>
                            </div>

                        </article>
                    );
                })}
            </div>
        </section>
    )
}

export default Portfolio