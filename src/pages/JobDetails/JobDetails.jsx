import { title } from 'motion/react-client';
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const job = useLoaderData();
    console.log({job});
    const {title, company, deadline} = job;
    return (
        <div>
            <h2>Job Details: {title} </h2>
            <p>Apply for: {company}</p>
            <p>Deadline: {deadline}</p>
            <button className='btn btn-primary'>Apply Now</button>
        </div>
    );
};

export default JobDetails;