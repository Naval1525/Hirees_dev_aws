import React, { useEffect, useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "@/redux/authSlice";
import { Loader2 } from "lucide-react";

const Signup = () => {
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    file: "",
    country: "USA", // Default country
  });
  const [errors, setErrors] = useState({});
  const { loading, user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };

  const validateForm = () => {
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      password,
      role,
      country,
    } = input;
    const newErrors = {};

    if (!firstName) newErrors.firstName = "First Name is required";
    if (!lastName) newErrors.lastName = "Last Name is required";
    if (!email) newErrors.email = "Email is required";
    if (!phoneNumber) newErrors.phoneNumber = "Phone Number is required";
    if (!password) newErrors.password = "Password is required";
    if (!role) newErrors.role = "Role is required";
    if (!country) newErrors.country = "Country is required";

    if (password && password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
    }

    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Invalid email format";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const formData = new FormData();
    const fullname = `${input.firstName} ${input.lastName}`;
    formData.append("fullname", fullname);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("password", input.password);
    formData.append("role", input.role);
    formData.append("country", input.country);
    if (input.file) {
      formData.append("file", input.file);
    }

    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true,
      });
      if (res.data.success) {
        navigate("/login");
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/"); // Redirect if the user is already logged in
    }
  }, [user, navigate]);

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 min-h-screen">
        <form
          onSubmit={submitHandler}
          className="w-full sm:w-1/2 border border-gray-200 rounded-md p-6 my-10 shadow-md bg-white"
        >
          <h1 className="font-bold text-2xl mb-5 text-center">Sign Up</h1>
          {[
            {
              label: "First Name",
              name: "firstName",
              type: "text",
              placeholder: "First Name",
            },
            {
              label: "Last Name",
              name: "lastName",
              type: "text",
              placeholder: "Last Name",
            },
            {
              label: "Email",
              name: "email",
              type: "email",
              placeholder: "email@gmail.com",
            },
            {
              label: "Phone Number",
              name: "phoneNumber",
              type: "text",
              placeholder: "8080808080",
            },
            {
              label: "Password",
              name: "password",
              type: "password",
              placeholder: "Password",
            },
          ].map((field, idx) => (
            <div className="my-3" key={idx}>
              <Label>
                {field.label} <span className="text-red-600">*</span>
              </Label>
              <Input
                type={field.type}
                value={input[field.name]}
                name={field.name}
                onChange={changeEventHandler}
                placeholder={field.placeholder}
                className={`border ${
                  errors[field.name] ? "border-red-600" : "border-gray-300"
                } rounded-md p-2 w-full`}
              />
              {errors[field.name] && (
                <p className="text-red-600 text-sm mt-1">
                  {errors[field.name]}
                </p>
              )}
            </div>
          ))}
          <div className="my-3">
            <Label>
              Country <span className="text-red-600">*</span>
            </Label>
            <select
              name="country"
              value={input.country}
              onChange={changeEventHandler}
              className="border border-gray-300 rounded-md p-2 w-full"
            >
              <option value="USA">USA</option>
              {}
            </select>
          </div>
          <div className="my-3">
            <RadioGroup className="flex items-center gap-4">
              {[
                { label: "Professional", value: "student" },
                { label: "Employer", value: "recruiter" },
              ].map((role, idx) => (
                <div className="flex items-center space-x-2" key={idx}>
                  <Input
                    type="radio"
                    name="role"
                    value={role.value}
                    checked={input.role === role.value}
                    onChange={changeEventHandler}
                  />
                  <Label>{role.label}</Label>
                </div>
              ))}
            </RadioGroup>
            {errors.role && (
              <p className="text-red-600 text-sm mt-1">{errors.role}</p>
            )}
          </div>
          <div className="my-3">
            <Label>Profile</Label>
            <Input
              accept="image/*"
              type="file"
              onChange={changeFileHandler}
              className="cursor-pointer"
            />
          </div>
          <Button
            type="submit"
            className="w-full my-4 bg-blue-600 hover:bg-blue-700 text-white"
          >
            {loading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              "Signup"
            )}
          </Button>
          <span className="text-sm block text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600">
              Login
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Signup;
