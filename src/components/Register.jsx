import React, { Fragment, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import registerImg from '../assets/register.jpeg';
import Nav from './Nav';
import Footer from './Footer';
import "./styles/nav.css";

const Register = ({ setAuth }) => {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    name: ""
  })

  const { email, password, name } = inputs;

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value })
  }

  const onSubmitForm = async (e) => {
    e.preventDefault()

    try {

      const body = { email, password, name }

      const response = await fetch("http://localhost:5000/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      })

      const parseRes = await response.json();

      if (parseRes.token) {
        localStorage.setItem("token", parseRes.token);
        setAuth(true);
        toast.success("Registered Successfully!")
        navigate("/");
      } else {
        setAuth(false);
        toast.error(parseRes);
      }

    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <Fragment>
      <Nav />
      <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
        <div className='hidden sm:block'>
          <img className='w-full h-full object-cover pl-5 pb-4' src={registerImg} alt="" />
        </div>

        <div className='bg-gray-100 flex flex-col justify-center'>
          <form onSubmit={onSubmitForm} className='max-w-[400px] w-full mx-auto bg-white p-4'>
            <h2 className='text-4xl font-bold text-center py-6'>Basketball Labs</h2>
            <div className='flex flex-col py-2'>
              <label>Username</label>
              <input className='border p-2' type="text" name="name" placeholder="Name" value={name} onChange={e => onChange(e)} />
            </div>
            <div className='flex flex-col py-2'>
              <label>Email</label>
              <input className='border p-2' name="email" type="email" placeholder="Email" value={email} onChange={e => onChange(e)} />
            </div>
            <div className='flex flex-col py-2'>
              <label>Password</label>
              <input className='border p-2' name="password" type="password" placeholder="Password" value={password} onChange={e => onChange(e)} />
            </div>
            <button className='border w-full my-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white'>Sign Up</button>
            <div className='flex justify-between'>
              <p className='flex items-center'><input className='mr-2' type="checkbox" />Remember Me</p>
              <NavLink to="/login" class="text-blue-500 underline">Already signed up?</NavLink>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </Fragment>
  )
};

export default Register;