import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginImage from '../../assets/images/login/login.svg'
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Login = () => {
    const { LoginUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const password = form.password.value;
        const email = form.email.value;
        // console.log(email, password)

        LoginUser(email, password)
            .then(result => {
                const user = result.user;

                const currentUser = {
                    email: user.email
                }

                fetch('https://genious-car-server-ten.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application.json',
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        localStorage.setItem('Genius-token', data.token);
                        navigate(from, { replace: true });
                    })



                // const currentUser = {
                //     email: user.email
                // };


                // fetch('https://genious-car-server-ten.vercel.app/jwt', {
                //     method: 'POST',
                //     headers: {
                //         'content-type': 'application/json',
                //     },
                //     body: JSON.stringify(currentUser)
                // })
                //     .then(res => res.json())
                //     .then(data => {
                //         console.log(data);
                //         localStorage.setItem('Genius-token', data.token)
                //         navigate(from, { replace: true });
                //     })

                // console.log(currentUser);
                // alert('yesss');


            })
            .catch(error => console.error(error))

    }
    return (
        <div className="hero ">
            <div className="hero-content flex-col my-15 lg:flex-row">
                <div className="text-center lg:text-left">

                    <img src={loginImage} className='w-3/4' alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <h1 className="text-5xl font-bold text-center">Login now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <Link className="label-text-alt link link-hover" to=''>Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" value="Login" className="btn btn-primary" />
                            {/* <button className="btn btn-primary">Login</button> */}
                        </div>
                        <p>New in Genious Car? <Link to='/signup' className='text-orange-600 font-bold'>SignUp</Link></p>
                    </form >
                </div>
            </div>
        </div>
    );
};

export default Login;