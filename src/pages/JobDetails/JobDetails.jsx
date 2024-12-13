import { title } from 'motion/react-client';
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const job = useLoaderData();
    console.log({job});
    const {_id, title, company, deadline} = job;
    return (
        <div>
            <h2>Job Details: {title} </h2>
            <p>Apply for: {company}</p>
            <p>Deadline: {deadline}</p>
            <Link to={`/JobApply/${_id}`}><button className='btn btn-primary'>Apply Now</button></Link>
        </div>
    );
};

export default JobDetails;