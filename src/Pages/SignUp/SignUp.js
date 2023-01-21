import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import loginImage from '../../assets/images/login/login.svg'
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const SignUp = () => {

    const { CreateUser } = useContext(AuthContext);

    const handleSubmit = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const password = form.password.value;
        // console.log(name, email, password)
        CreateUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                alert('yse')
            })
            .catch(error => {
                console.error(error)
            })

    }
    return (
        <div className="hero ">
            <div className="hero-content flex-col my-15 lg:flex-row">
                <div className="text-center lg:text-left">

                    <img src={loginImage} className='w-3/4' alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <h1 className="text-5xl font-bold text-center">SignUp Now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" value="SignUp" className="btn btn-primary" />
                            {/* <button className="btn btn-primary">Login</button> */}
                        </div>
                        <p>Already Have An Account? <Link to='/login' className='text-orange-600 font-bold'>Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;