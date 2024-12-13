import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AuthContext from '../../context/AuthContext/AuthContext';
import JobIcon from '../../assets/jobs-logo.png'

const Navbar = () => {

  const {user, signOutUser} = useContext(AuthContext);

  const handgleSignOut= ()=>{
    signOutUser()
    .then(()=>{
      console.log(
        "successfull sign out"
      );
    })
    .catch(error=>{
      console.log('failed to sign out');
    })
  }

    const links= <>
       <li><NavLink to={'/'}>Home</NavLink></li>
       <li><NavLink to={'/'}>Home</NavLink></li>
       <li><NavLink to={'/'}>Home</NavLink></li>
        
    </>
    return (
        <div>
                <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {links}
        <li><a>Item 3</a></li>
      </ul>
    </div>
    {/* <img src={JobIcon} alt="" /> */}
    <a className="btn btn-ghost text-xl">
    <img className='w-12' src={JobIcon} alt="" />
      <h3 className='text-3xl'>Jobportal</h3></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
    {
     user ? 
     <>
     <Link to="/signIn"><button onClick={handgleSignOut} className="btn">Logout</button></Link>
     </> :
     <>
     <Link to="/register">Register</Link>
     <Link to="/signIn"><button className="btn">Sign In</button></Link>
     </>
     
    }
    
    {/* <Link to="/signIn"><button className="btn">Sign In</button></Link> */}
    
  </div>
</div>
        </div>
    );
};

export default Navbar;