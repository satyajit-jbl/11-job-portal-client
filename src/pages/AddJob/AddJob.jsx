import { form } from 'motion/react-client';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';

const AddJob = () => {
    const navigate = useNavigate();
    const {user}= useAuth();
    const handleAddJob = e =>{
        e.preventDefault();
        
        const formData = new FormData(e.target);
        // console.log(formData.entries());
        const initialData = Object.fromEntries(formData.entries());
        // formData.entries()... an iterator that allows you to loop through all the key-value pairs , ......Object.fromEntries=>  converts a list of key-value pairs  into an object.
        // const initialData = Object.fromEntries((new FormData(e.target)).entries());
        console.log(initialData);
        const{min, max, currency, ...newJob }= initialData;
        console.log(newJob);
        // sperate min, max, currency .... set in salaryRange properties
        newJob.salaryRange = {min, max, currency}
        newJob.requirement = newJob.requirement.split('\n');
        newJob.responsibilities = newJob.responsibilities.split('\n');
        console.log(newJob);

        fetch('http://localhost:5000/jobs',{
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(newJob)
        })
        .then(res =>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your Job Application has been saved",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate('/myPostedJobs'); 
            }
        })

    }
    return (
        <div>
            <h2 className='text-3xl'>Post a new Job</h2>
            <form onSubmit={handleAddJob} className="card-body">
                {/* Job Title */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Title</span>
                    </label>
                    <input type="text" name='title' placeholder="Job Title" className="input input-bordered" required />
                </div>
                {/* Job Location */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Location</span>
                    </label>
                    <input type="text" name='location' placeholder="Job Location" className="input input-bordered" required />

                </div>
                {/* Job Type */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Tyoe</span>
                    </label>
                    <select name='job_type' defaultValue="Pick a Job Type" className="select select-ghost w-full max-w-xs">
                        <option disabled>Pick a Job Type</option>
                        <option>Full-Time</option>
                        <option>Intern</option>
                        <option>Part-time</option>
                    </select>

                </div>
                {/* Job Category */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Field</span>
                    </label>
                    <select name='job_field' defaultValue="Pick a Job Type" className="select select-ghost w-full max-w-xs">
                        <option disabled>Pick a Job Type</option>
                        <option>Engineering</option>
                        <option>Marketing</option>
                        <option>Finance</option>
                        <option>Teaching</option>
                    </select>

                </div>
                {/* Salary Range */}
                
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 items-end'>
                    <div className="form-control">
                        <label className="label">
                        <p>Salary Range</p>
                        </label>
                        <input type="text" name='Min' placeholder="Min" className="input input-bordered" required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                           
                        </label>
                        <input type="text" name='max' placeholder="Max" className="input input-bordered" required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                          
                        </label> 
                        <select name='currency' defaultValue="Currency" className="select select-ghost w-full max-w-xs">
                            <option disabled>Currency</option>
                            <option>Bdt</option>
                            <option>USD</option>
                            <option>INR</option>
                        </select>

                    </div>
                </div>
                {/* Job Description */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Description</span>
                    </label>
                    <textarea className="textarea textarea-bordered" name='description' placeholder="Job Descrioption" required></textarea>
                </div>
                {/* Company Name */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Company Name</span>
                    </label>
                    <input type="text" name='company' placeholder="Company Name" className="input input-bordered" required />

                </div>
                 {/* Job Requirements */}
                 <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Requirements</span>
                    </label>
                    <textarea className="textarea textarea-bordered" name='requirement' placeholder="Put each requirement in a new line" required></textarea>
                </div>
                 {/* Job responsibilities */}
                 <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Responsibilities</span>
                    </label>
                    <textarea className="textarea textarea-bordered" name='responsibilities' placeholder="Put each responsibilities in a new line" required></textarea>
                </div>
                {/* HR name */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">HR Name</span>
                    </label>
                    <input type="text" name='hr_name' placeholder="HR Name" className="input input-bordered" required />

                </div>
                {/* HR email */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">HR Email</span>
                    </label>
                    <input type="text" defaultValue={user?.email} name='hr_email' placeholder="HR Email" className="input input-bordered" required />

                </div>
                {/* deadline */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Application Deadline</span>
                    </label>
                    <input type="date" defaultValue={user?.email} name='applicationDeadline' placeholder="Application Deadline" className="input input-bordered" required />

                </div>
                {/* Company Logo */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Company Logo URL</span>
                    </label>
                    <input type="text" name='company_logo' placeholder="Company Logo URL" className="input input-bordered" required />

                </div>
                {/* Submit Button */}
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default AddJob;