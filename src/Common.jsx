import React from "react";
import web from "../src/images/img2.svg.jpg"
import { NavLink } from "react-router-dom";

const Common = (props) => {
    return (
        <>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid  ">
                    <div className='row'>
                        <div className="col-12 max-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column ">
                                    <h1>
                                        {props.name}
                                        <strong className="brand-name">  EMSR</strong>
                                    </h1>
                                    <h4 className="my-3">
                                        We are the team of talented web developer
                                    </h4>
                                    <div className="mt-3">
                                        <NavLink to={props.visit} className="btn-get-started">
                                            {props.btname}
                                        </NavLink>


                                    </div>
                                </div>

                                <div className="col-lg-6 order-1 order-lg-2 header-img">
                                    <img
                                        src={props.imgsrc}
                                        className="img-fluid  animated"
                                        alt="Common img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
};

export default Common;