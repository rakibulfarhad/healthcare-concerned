import React from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const {serviceId} = useParams();
    return (
        <div style={{height: '75vh'}}>
            <h2>Service Number: {serviceId}</h2>
        </div>
    );
};

export default Booking;