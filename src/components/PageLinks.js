import React from 'react';
import {pageLinks, socialLinks} from "../data";

const PageLinks = (props) => {
    return (
        <>
            <ul className="nav-links" id="nav-links">
                {pageLinks.map((item) => {
                    return (
                        <li key={item.id}>
                            <a href={item.href} className={props.pageLinkClassName}>{item.text}</a>
                        </li>
                    )
                })}
            </ul>
            <ul className="nav-icons">
                {socialLinks.map((item) => {
                    return (
                        <li key={item.id}>
                            <a href={item.href} target={"_blank"} className={props.socialLinkClassName}
                               rel="noreferrer">
                                <i className={item.iconClassName}></i>
                            </a>
                        </li>
                    )
                })}
            </ul>
        </>

    );
};

export default PageLinks;