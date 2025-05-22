import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const SignUp : React.FC = () => {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/menu"); // redirect after signup
    } catch (err: any) {
      setError(err.message);
    }
  };
    return(
        <div className="bg-Rose min-h-screen flex py-5 px-4 md:px-8 lg:px-16 justify-center items-center font-montserrat">
        <div className="bg-white shadow-md rounded-lg px-8 py-10 w-full max-w-md ">
        <h2 className="text-2xl font-bold text-center text-amber-800 mb-2">
            Create an account
          </h2>
          <p className="text-center text-gray-600 mb-6">
            Enter your information to create an account
          </p>
          {error && (
          <div className="mb-4 p-2 bg-red-100 text-red-700 rounded-md text-sm">
            {error}
          </div>
        )}
          <form onSubmit={handleSignup} className="space-y-4">
          <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none "
                placeholder="m@example.com"
                value={email}
            onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none"
              value={password}
            onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
            <input
              type="password"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none "
              value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-amber-800 hover:bg-amber-700 text-white font-semibold py-2 rounded-md transition-colors mt-7"
          >
            Create account
          </button>
          <div className="flex flex-row text-center text-gray-700 justify-center">
            <p className="mr-1">Already have an account ?</p>
            <Link to="/signin" className="underline font-semibold">
            Sign In
            </Link>
          </div>
          </form>
         </div>
      </div>
    )
    }
    export default SignUp