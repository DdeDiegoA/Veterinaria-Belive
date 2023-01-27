import React from "react";
import "../sass/_globals.scss";

const SectionFooter = () => {
    return (
        <div className="sec-footer-cta">
            <div className="about">
                <div className="info">
                    <h4>About</h4>

                    <span>history</span>
                    <span>our Team</span>
                    <span>brand Guidelines</span>
                    <span>Terms&Conditions</span>
                    <span>Privacy Policy</span>
                </div>
            </div>

            <div className="serv">
                <div className="info">
                    <h4>Services</h4>

                    <span>How To Order</span>
                    <span>Our Product</span>
                    <span>Order Status</span>
                    <span>Promo</span>
                    <span>Payment method</span>
                </div>
            </div>
            <div className="contact">
                <div className="contact-info">
                    <h4>Title Here</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <div className="search">
                        <input
                            type="text"
                            class="search__input"
                            placeholder="Search"
                        />
                        <button className="search__button">
                            <i className="bi bi-send-fill search__icon"></i>
                        </button>
                    </div>
                    <div className="social">
                        <i class="bi bi-instagram"></i>
                        <i class="bi bi-facebook"></i>
                        <i class="bi bi-twitter"></i>
                        <i class="bi bi-whatsapp"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionFooter;
