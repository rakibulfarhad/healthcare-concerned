import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    // const {service} = props;
    const { id, name, description, img } = service;
    return (
        <div className="service pb-3">
            <img src={img} alt="" />
            <h3 className="my-3">{name}</h3>
            <p className="px-3">{description}</p>
            <Link to={`/booking/${id}`}>
            <button className="btn btn-warning">Read More</button>
            </Link>
        </div>
    );
};

export default Service;