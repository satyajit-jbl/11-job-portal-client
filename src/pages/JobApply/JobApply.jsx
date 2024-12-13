import React from 'react';
import { data, useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';

const JobApply = () => {
    const {user} = useAuth();
    const {id} = useParams(); // need to clear
    console.log(id, user);

    const submitJobApplication = e =>{
        e.preventDefault();
        const linkedIn = e.target.linkedIn.value;
        const github = e.target.github.value;
        const resume = e.target.resume.value;

        console.log(linkedIn, github, resume);

        const jobApplication ={
            job_id: id, 
            applicant_email: user.email,
            linkedIn, 
            github, 
            resume
        }
        fetch('http://localhost:5000/job-applications',{
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(jobApplication)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId>0){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your Job Application has been saved",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }   
        })
    }
    return (
        
  
   
    <div className="card bg-base-100 w-full shadow-2xl">
    <h1 className="text-5xl text-center font-bold">Apply for Job now!</h1>
      <form onSubmit={submitJobApplication} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">LinkedIn URL</span>
          </label>
          <input type="url" name='linkedIn' placeholder="LinkedIn URL" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Github URL</span>
          </label>
          <input type="url" name='github' placeholder="Github URL" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Resume URL</span>
          </label>
          <input type="url" name='resume' placeholder="Resume URL" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Apply Now</button>
        </div>
      </form>
    </div>
 

    );
};

export default JobApply;