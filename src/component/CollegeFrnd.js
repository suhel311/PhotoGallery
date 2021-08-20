import React from "react";
import C1 from '../images/CollageFrinds/2.jpg';
import C2 from '../images/CollageFrinds/3.jpg';
import C3 from '../images/CollageFrinds/4.jpg';
import C4 from '../images/CollageFrinds/5.jpg';
import C5 from '../images/CollageFrinds/6.jpg';
import C6 from '../images/CollageFrinds/1.jpg';

const CollegeFrnd = () => {
    return (
        <>
            <div className="my-5">
                <h1 className="text-center"> College friends </h1>
            </div>
            <div className="container-fluid mb-5">
                <div className='row'>
                    <div className="col-12 max-auto">
                        <div className="row gy-4">
                            <div className="col-md-4 col-10 mx-auto">
                                <div class="card" >
                                    <img src={C1} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Friends</h5>
                                        <p class="card-text">Some quick example text to build on the Iamge-0 and make up the bulk of the card's content.</p>
                                        <a href="/feedback" class="btn btn-primary">feedbacks</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 col-10 mx-auto">
                                <div class="card" >
                                    <img src={C2} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Iamge-02</h5>
                                        <p class="card-text">Some quick example text to build on the Iamge-0 and make up the bulk of the card's content.</p>
                                        <a href="/feedback" class="btn btn-primary">feedbacks</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 col-10 mx-auto">
                                <div class="card" >
                                    <img src={C3} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Iamge-03</h5>
                                        <p class="card-text">Some quick example text to build on the Iamge-0 and make up the bulk of the card's content.</p>
                                        <a href="/feedback" class="btn btn-primary">feedbacks</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 col-10 mx-auto">
                                <div class="card" >
                                    <img src={C4} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Iamge-04</h5>
                                        <p class="card-text">Some quick example text to build on the Iamge-0 and make up the bulk of the card's content.</p>
                                        <a href="/feedback" class="btn btn-primary">feedbacks</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 col-10 mx-auto">
                                <div class="card" >
                                    <img src={C5} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Iamge-05</h5>
                                        <p class="card-text">Some quick example text to build on the Iamge-0 and make up the bulk of the card's content.</p>
                                        <a href="/feedback" class="btn btn-primary">feedbacks</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 col-10 mx-auto">
                                <div class="card" >
                                    <img src={C6} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Iamge-06</h5>
                                        <p class="card-text">Some quick example text to build on the Iamge-0 and make up the bulk of the card's content.</p>
                                        <a href="/feedback" class="btn btn-primary">feedbacks</a>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </>
    );
};

export default CollegeFrnd;