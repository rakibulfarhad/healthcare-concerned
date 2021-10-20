import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner1.jpg';
import banner2 from '../../../images/banner/banner2.jpg';
import banner3 from '../../../images/banner/banner3.jpg';
import banner4 from '../../../images/banner/banner4.jpg';

const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1 className="text-info">Service First</h1>
                        <p className="text-info">The ‘Center of Excellences’ are Gastro Liver Center, Mother & Child Care Center.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h1 className="text-info">Your Healthcare Solution</h1>
                        <p className="text-info">Doctor Solution Hospitals Ltd. has been established by Brothers group.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1 className="text-info">All Diagnostic fees 20% discount.</h1>
                        <p className="text-info">Doctor Solution Hospitals Ltd. is a 308 bedded five star boutique hotel like hospital.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner4}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1 className="text-info">Actual diagnosis report.</h1>
                        <p className="text-info">The new hospital is equipped with the latest & most modern medical technology.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;