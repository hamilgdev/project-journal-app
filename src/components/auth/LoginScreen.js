import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { getPathSVG } from "../../helpers/getPathSVG";
import { useForm } from "../../hooks/useForm";
import {
  startGoogleLogin,
  startWithEmailAndPassLogin,
} from "../../store/actions/authAction";

import Loader from "../ui/Loader";

const LoginScreen = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.ui);

  const [formValues, handleInputChange] = useForm({
    email: "email@email.com",
    password: "1234567",
  });

  const { email, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(startWithEmailAndPassLogin(email, password));
  };

  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin());
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold text-gray-600">Login</h2>

      <form className="my-4" autoComplete="off" onSubmit={handleLogin}>
        <div className="mb-4">
          <label htmlFor="email" className="font-bold text-sm text-gray-500">
            Email
          </label>
          <input
            id="email"
            className="px-4 py-2 w-full | rounded-sm text-sm bg-gray-100"
            type="email"
            name="email"
            placeholder="youremail@email.com"
            value={email}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="pass" className="font-bold text-sm text-gray-500">
            Password
          </label>
          <input
            id="pass"
            className="px-4 py-2 w-full | rounded-sm text-sm bg-gray-100"
            type="password"
            name="password"
            placeholder="***********"
            value={password}
            onChange={handleInputChange}
          />
        </div>

        <div className="my-6">
          <button
            type="submit"
            className="flex items-center justify-center px-4 py-2 w-full min-h-[40px] | bg-purple-600 rounded-sm text-white text-sm font-semibold transition transition-300 | hover:bg-purple-800"
            disabled={loading}
          >
            {loading ? (
              <div className="scale-50 relative top-[-19px] left-0 max-h-0 ">
                <Loader />
              </div>
            ) : (
              "Login"
            )}
          </button>
        </div>
      </form>

      <div className="mb-4">
        <h3 className="font-semibold text-center text-sm mb-1">
          Login with social networks
        </h3>
        <button
          className="flex items-center p-1 w-full | bg-blue-600 rounded-sm text-center transition duration-300 | hover:bg-blue-800"
          onClick={handleGoogleLogin}
        >
          <div className="w-8 h-8 p-1 | bg-white rounded-sm">
            <img src={getPathSVG(`./google-icon.svg`)} alt="icon google" />
          </div>
          <span className="flex-1 | text-white font-semibold text-sm">
            Sign in with google
          </span>
        </button>
      </div>

      <div className="pt-4 text-center">
        <Link
          className="inline-block text-gray-800 underline transform transition transition-300 | hover:scale-105"
          to="/auth/register"
        >
          Create a new account
        </Link>
      </div>
    </div>
  );
};

export default LoginScreen;
