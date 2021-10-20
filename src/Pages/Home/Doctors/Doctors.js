import React from 'react';

import doctor1 from '../../../images/doctors/doctor1.jpg';
import doctor2 from '../../../images/doctors/doctor2.jpg';
import doctor3 from '../../../images/doctors/doctor3.jpg';
import doctor4 from '../../../images/doctors/doctor4.jpg';
import doctor5 from '../../../images/doctors/doctor5.jpg';
import doctor6 from '../../../images/doctors/doctor6.jpg';
import doctor7 from '../../../images/doctors/doctor7.jpg';
import doctor8 from '../../../images/doctors/doctor8.jpg';
import doctor9 from '../../../images/doctors/doctor9.jpg';
import Doctor from '../Doctor/Doctor';


const doctors = [
    {
        img: doctor1,
        name: 'Dr. Arifuzzaman',
        expertize: 'Sr. Consultant – Ophthalmology'
    },
    {
        img: doctor2,
        name: 'Dr. Naznin Parvin',
        expertize: 'Sr. Dental Surgeon'
    },
    {
        img: doctor3,
        name: 'Dr. Mursheda Akter',
        expertize: 'Senior Consultant – Microbiology'
    },
    {
        img: doctor4,
        name: 'Dr. Ruhul Amin',
        expertize: 'Sr. Consultant - Paediatric, Neonatal'
    },
    {
        img: doctor5,
        name: 'Dr. Jilhuj Uddin',
        expertize: 'Specialist - Vascular Surgery'
    },
    {
        img: doctor6,
        name: 'Dr. Ferdousi Chowdhury',
        expertize: 'Senior Consultant – Obstetric, Gynae and Laparoscopic Surgery'
    },
    {
        img: doctor7,
        name: 'Dr. Md Alamgir Hossain',
        expertize: 'Consultant – Radiology & Imaging'
    },
    {
        img: doctor8,
        name: 'Dr. Masrufa Hossain',
        expertize: 'Jr. Consultant - Pain Clinic'
    },
    {
        img: doctor9,
        name: 'Dr. Nabiul Hassan',
        expertize: 'Senior Consultant – Nephrology'
    },
]


const Doctors = () => {

    return (
        <div id="doctors" className="container">
            <h2 className="text-primary my-5">Our Doctors</h2>
            <div className="row">
                {
                    doctors.map(doctor => <Doctor
                        key={doctor.name}
                        doctor={doctor}
                    >

                    </Doctor>)
                }
            </div>
        </div>
    );
};

export default Doctors;