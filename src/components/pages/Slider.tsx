import React from 'react';
const slider3 = require('../images/trat103.png');
const Slider = () => {
    return (
        <div className='container shadow-lg p-2 mt-3 mb-2 rounded'>
            <div className="shadow-sm p-2 mb-1 rounded">

                <div className="row">
                    <div className="col-md-12">
                        <h3>
                            <span className="text-danger">“ข่าวประชาสัมพันธ์ </span>
                            <span className="text-success">วท.ตราด”</span>
                        </h3>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={require('../images/trat101.jpg')} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={require('../images/trat102.jpg')} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={slider3} className="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="row mt-2">
                    <div className="col-md-12">
                        <h3>
                            <span className="text-succes fs-4">“เทคนิคตราดโฉมใหม่ ใส่ใจบุตรหลาน จัดการศึกษา เพื่อการมีงานทำ” </span>
                        </h3>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Slider;