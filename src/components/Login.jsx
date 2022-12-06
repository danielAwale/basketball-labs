import React, { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import loginImg from '../assets/login.jpeg';
import Nav from './Nav';
import Footer from './Footer';
import "./styles/nav.css";

const Login = ({ setAuth }) => {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  })

  const { email, password } = inputs;

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value })
  }

  const onSubmitForm = async (e) => {
    e.preventDefault()

    try {

      const body = { email, password }

      const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      })

      const parseRes = await response.json();

      if (parseRes.token) {
        localStorage.setItem("token", parseRes.token);
        setAuth(true);
        toast.success("Login Successful!")
        navigate("/watchlist");
      } else {
        setAuth(false)
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
          <img className='w-full h-full object-cover pl-5 pb-4' src={loginImg} alt="" />
        </div>

        <div className='bg-gray-100 flex flex-col justify-center'>
          <form onSubmit={onSubmitForm} className='max-w-[400px] w-full mx-auto bg-white p-4'>
            <h2 className='text-4xl font-bold text-center py-6'>Basketball Labs</h2>
            <div className='flex flex-col py-2'>
              <label>Email</label>
              <input className='border p-2' name="email" type="email" placeholder="Email" value={email} onChange={e => onChange(e)} />
            </div>
            <div className='flex flex-col py-2'>
              <label>Password</label>
              <input className='border p-2' name="password" type="password" placeholder="Password" value={password} onChange={e => onChange(e)} />
            </div>
            <button className='border w-full my-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white'>Sign In</button>
            <div className='flex justify-between'>
              <p className='flex items-center'><input className='mr-2' type="checkbox" /> Remember Me</p>
              <a href="/register" class="text-blue-500 underline">Create an account!</a>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </Fragment>
  )
};

export default Login;

// return (
//   <Fragment>
//     <h1 className="" text-center my-5>Login</h1>
//     <form onSubmit={onSubmitForm}>
//       <input type="email" name="email" placeholder="email" className="form-control my-3" value={email} onChange={e => onChange(e)} />
//       <input type="password" name="password" placeholder="password" className="form-control my-3" value={password} onChange={e => onChange(e)} />
//       <button className btn btn-success btn-block>Submit</button>
//     </form>
//     <Link to="/register">Register</Link>
//   </Fragment>
// );