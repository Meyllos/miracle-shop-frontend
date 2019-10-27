import React, { Component }  from 'react';
import cake from "../../images/cake3.jpg";
import item2 from "../../images/cake.jpg";
import item3 from "../../images/cake2.jpg";
import item6 from "../../images/bread2.jpg";

export default class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <>
            <div className="items-container">
                <div className="item">
                    <a href="/" className="item-redirect">
                    <a href="/" className="item-redirect">
                    <div className="item-image">
                        <img src={item3} alt="item image"/>
                    </div>
                    <div className="details">
                        <div className="item-name">
                            <p>Humberger</p>
                        </div>
                        <div className="item-price">
                            <p><b>Price:</b> <b className="price">30$</b></p>
                        </div>
                        <div className="item-catgory">
                            <p><b>Category:</b> Cake</p>
                        </div>
                    </div>
                    </a>
                    </a>
                </div>
                <div className="item">
                <a href="/" className="item-redirect">
                    <div className="item-image">
                        <img src={item2} alt="item image"/>
                    </div>
                    <div className="details">
                        <div className="item-name">
                            <p>Humberger</p>
                        </div>
                        <div className="item-price">
                            <p><b>Price:</b> <b className="price">30$</b></p>
                        </div>
                        <div className="item-catgory">
                            <p><b>Category:</b> Cake</p>
                        </div>
                    </div>
                    </a>
                </div>
                <div className="item">
                    <a href="/" className="item-redirect">
                    <div className="item-image">
                        <img src={item3} alt="item image"/>
                    </div>
                    <div className="details">
                        <div className="item-name">
                            <p>Humberger</p>
                        </div>
                        <div className="item-price">
                            <p><b>Price:</b> <b className="price">30$</b></p>
                        </div>
                        <div className="item-catgory">
                            <p><b>Category:</b> Cake</p>
                        </div>
                    </div>
                    </a>
                </div>
                <div className="item">
                <a href="/" className="item-redirect">
                    <a href="/" className="item-redirect">
                    <div className="item-image">
                        <img src={cake} alt="item image"/>
                    </div>
                    <div className="details">
                        <div className="item-name">
                            <p>Humberger</p>
                        </div>
                        <div className="item-price">
                            <p><b>Price:</b> <b className="price">30$</b></p>
                        </div>
                        <div className="item-catgory">
                            <p><b>Category:</b> Cake</p>
                        </div>
                    </div>
                    </a>
                    </a>
                </div>
                <div className="item">
                    <a href="/" className="item-redirect">
                    <div className="item-image">
                        <img src={cake} alt="item image"/>
                    </div>
                    <div className="details">
                        <div className="item-name">
                            <p>Humberger</p>
                        </div>
                        <div className="item-price">
                            <p><b>Price:</b> <b className="price">30$</b></p>
                        </div>
                        <div className="item-catgory">
                            <p><b>Category:</b> Cake</p>
                        </div>
                    </div>
                    </a>
                </div>
                <div className="item">
                <a href="/" className="item-redirect">
                    <div className="item-image">
                        <img src={item6} alt="item image"/>
                    </div>
                    <div className="details">
                        <div className="item-name">
                            <p>Humberger</p>
                        </div>
                        <div className="item-price">
                            <p><b>Price:</b> <b className="price">30$</b></p>
                        </div>
                        <div className="item-catgory">
                            <p><b>Category:</b> Cake</p>
                        </div>
                    </div>
                    </a>
                </div>
                <div className="item">
                    <a href="/" className="item-redirect">
                    <div className="item-image">
                        <img src={cake} alt="item image"/>
                    </div>
                    <div className="details">
                        <div className="item-name">
                            <p>Humberger</p>
                        </div>
                        <div className="item-price">
                            <p><b>Price:</b> <b className="price">30$</b></p>
                        </div>
                        <div className="item-catgory">
                            <p><b>Category:</b> Cake</p>
                        </div>
                    </div>
                    </a>
                </div>
                <div className="item">
                    <a href="/" className="item-redirect">
                    <div className="item-image">
                        <img src={item3} alt="item image"/>
                    </div>
                    <div className="details">
                        <div className="item-name">
                            <p>Humberger</p>
                        </div>
                        <div className="item-price">
                            <p><b>Price:</b> <b className="price">30$</b></p>
                        </div>
                        <div className="item-catgory">
                            <p><b>Category:</b> Cake</p>
                        </div>
                    </div>
                    </a>
                </div>
                <div className="item">
                    <a href="/" className="item-redirect">
                    <div className="item-image">
                        <img src={cake} alt="item image"/>
                    </div>
                    <div className="details">
                        <div className="item-name">
                            <p>Humberger</p>
                        </div>
                        <div className="item-price">
                            <p><b>Price:</b> <b className="price">30$</b></p>
                        </div>
                        <div className="item-catgory">
                            <p><b>Category:</b> Cake</p>
                        </div>
                    </div>
                    </a>
                </div>
                <div className="item">
                    <div className="item-image">
                        <img src={cake} alt="item image2"/>
                    </div>
                    <div className="details">
                        <div className="item-name">
                            <p>Humberger</p>
                        </div>
                        <div className="item-price">
                            <p><b>Price:</b> <b className="price">30$</b></p>
                        </div>
                        <div className="item-catgory">
                            <p><b>Category:</b> Cake</p>
                        </div>
                    </div>
                </div>
            </div>
            </>
        );
    }
};
