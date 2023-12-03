import React from 'react';

const FooterComponent = (props) => {
    return (
        <>
            <ul className="footer-links">
                {props.pageLinks.map((link) => {
                    return (
                        <li key={link.id}>
                            <a href={link.href} className={"footer-link"}>{link.text}</a>
                        </li>
                    )
                })}
            </ul>
            <ul className="footer-icons">
                {props.socialLinks.map((socialLink) => {
                    return (
                        <li key={socialLink.id}>
                            <a href={socialLink.href} target={"_blank"} className={"footer-icon"} rel="noreferrer">
                                <i className={socialLink.iconClassName}></i>
                            </a>
                        </li>
                    )
                })}
            </ul>
            <p className="copyright">
                copyright &copy; BackRoads Travel Tours Company
                <span id="date">{new Date().getFullYear()}</span> All Rights Reserved
            </p>
        </>
    );
};

export default FooterComponent;