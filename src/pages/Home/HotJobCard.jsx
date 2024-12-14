import React from 'react';
import joblogo from '../../assets/jobs-logo.png'
import { IoLocationOutline } from 'react-icons/io5';
import { p } from 'motion/react-client';
import { FaDollarSign } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const HotJobCard = ({job}) => {

    const{_id, title, location, jobType, category,applicationDeadline, salaryRange, description, company, requirements, responsibilities, status,hr_name,company_logo} = job;

    return (
        <div className="card card-compact bg-base-100 shadow-xl">
           <div className='flex items-center gap-2 m-2'>
           <figure>
                <img className='w-16'
                    src={company_logo}
                    alt="Shoes" />
            </figure>
            <div>
            <h2 className="card-title">{jobType}</h2>
            <div className='inline-flex items-center gap-2'>
            <IoLocationOutline /><p>{location}</p>
            </div>
            
            </div>
           </div>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{jobType} <span className='ml-4'>{category}</span> </p>
                <p>{description}</p>
                <div className='flex flex-wrap gap-2'>
                    {
                        requirements?.map((skill, index)=> <p key={index} className='border rounded-md px-2 text-center hover:bg-gray-300 hover:text-red-500 hover:font-semibold'>{skill}</p>)
                    }
                </div>
                <div className="card-actions justify-end items-center mt-4">
                    <p className='flex'>Salary: <FaDollarSign /> {salaryRange.min}-{salaryRange.max} {salaryRange.currency}</p>
                    <Link to={`/jobs/${_id}`}><button className="btn btn-primary">Apply Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default HotJobCard;