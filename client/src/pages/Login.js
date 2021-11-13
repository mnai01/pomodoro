import React from 'react'; 
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="bg-white w-2/6 px-16 py-8 rounded-xl flex flex-col items-center justify-center">
                <div className="mb-16">
                    <h1 className="text-4xl font-bold">Pomodoro</h1>
                </div>
                <div className="mb-10 w-full">
                    <div className="mb-10">
                        <input placeholder="Email" className="w-full outline-none border-b-2"/>
                    </div>
                    <div>
                        <input type="password" placeholder="Password" className="w-full outline-none border-b-2"/>
                    </div>
                </div>
                <div className="text-sm mb-12">
                    <Link to="/register">Not a member yet? Sign up</Link>
                </div>
                <div className="mb-6 w-full">
                    <button className="bg-red-500 py-1 px-3 text-white text-xl rounded-lg w-full">Login</button>
                </div>
            </div>
        </div>
    )
}; 

export default Login; 