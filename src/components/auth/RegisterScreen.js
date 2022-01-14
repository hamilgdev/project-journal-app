import React from "react";
import validator from "validator";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { useForm } from "../../hooks/useForm";
import {
  setError,
  removeError,
  setSuccess,
  removeSuccess,
} from "../../store/actions/uiAction";
import { startWithUserRegister } from "../../store/actions/authAction";

const RegisterScreen = () => {
  const dispatch = useDispatch();
  const { msgError, msgSuccess } = useSelector((state) => state.ui);

  const [formValues, handleInputChange] = useForm({
    name: "miltoncodeyt",
    email: "email@email.com",
    password: "1234567",
    password2: "1234567",
  });

  const { name, email, password, password2 } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();
    if (isFormValue()) {
      dispatch(startWithUserRegister(email, password, name));
      dispatch(setSuccess("Form is correct!"));
      setTimeout(() => {
        dispatch(removeSuccess());
      }, 6000);
    }
  };

  const isFormValue = () => {
    if (name.trim().length === 0) {
      dispatch(setError("Name is required"));
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError("Email is not valid"));
      return false;
    } else if (password !== password2 || password.length < 5) {
      dispatch(setError("Verify password"));
      return false;
    }

    dispatch(removeError());

    return true;
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold text-gray-600">Register</h2>

      {(msgError || msgSuccess) && (
        <div
          className={`my-4 p-2 text-center | ${
            msgError ? "bg-red-400 text-red-800" : "bg-green-400 text-green-800"
          }`}
        >
          {msgError || msgSuccess}
        </div>
      )}

      <form className="my-4" autoComplete="off" onSubmit={handleRegister}>
        <div className="mb-4">
          <label htmlFor="name" className="font-bold text-sm text-gray-500">
            Name
          </label>
          <input
            id="name"
            className="px-4 py-2 w-full | rounded-sm text-sm bg-gray-100"
            type="text"
            name="name"
            placeholder="youremail@email.com"
            value={name}
            onChange={handleInputChange}
          />
        </div>
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
        <div className="mb-4">
          <label htmlFor="pass2" className="font-bold text-sm text-gray-500">
            Repeat password
          </label>
          <input
            id="pass2"
            className="px-4 py-2 w-full | rounded-sm text-sm bg-gray-100"
            type="password"
            name="password2"
            placeholder="***********"
            value={password2}
            onChange={handleInputChange}
          />
        </div>

        <div className="my-6">
          <button
            type="submit"
            className="px-4 py-2 w-full | bg-purple-600 rounded-sm text-white text-sm font-semibold transition transition-300 | hover:bg-purple-800"
          >
            Register
          </button>
        </div>
      </form>

      <div className="pt-4 text-center">
        <Link
          className="inline-block text-gray-800 underline transform transition transition-300 | hover:scale-105"
          to="/auth/login"
        >
          Already registered?
        </Link>
      </div>
    </div>
  );
};

export default RegisterScreen;
