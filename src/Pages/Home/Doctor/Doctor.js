import React from 'react';

const Doctor = ({doctor}) => {
    const { name, img, expertize } = doctor;
    return (
        <div className="col-lg-4 col-sm-6 col-12">
            <img className="img-fluid" src={img} alt="" />
            <h3 className="my-3">{name}</h3>
            <h5 className="text-danger mb-5">{expertize}</h5>
        </div>
    );
};

export default Doctor;