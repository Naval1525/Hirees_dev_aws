// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { Label } from "../ui/label";
// import { Input } from "../ui/input";
// import { Button } from "../ui/button";
// import axios from "axios";
// import { toast } from "sonner";
// import { useDispatch, useSelector } from "react-redux";
// import { setLoading } from "@/redux/authSlice";
// import { ArrowRight, Loader2, Rocket, Shield, Star } from "lucide-react";
// import { USER_API_END_POINT } from "@/utils/constant";

// import Navbar from "../shared/Navbar";
// import IconCloudDemo from "../IconCloudDemo";

// const CandidateSignup = () => {
//   const [input, setInput] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phoneNumber: "",
//     password: "",
//     file: "",
//     country: "USA",
//     role: "student",
//     // New student-specific fields
//     currentLocation: "",
//     willingToRelocate: false,
//     visaStatus: "citizen",
//     jobTitle: "",
//     jobDomain: "",
//   });
//   const [errors, setErrors] = useState({});
//   const { loading, user } = useSelector((store) => store.auth);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const changeEventHandler = (e) => {
//     const { name, value, type, checked } = e.target;
//     setInput((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const changeFileHandler = (e) => {
//     setInput((prev) => ({ ...prev, file: e.target.files?.[0] }));
//   };
//   const isValidEmail = (email) => {
//     // RFC 5322 compliant email regex
//     const emailRegex = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;
//     return emailRegex.test(email);
//   };
//   const validateForm = () => {
//     const {
//       firstName,
//       lastName,
//       email,
//       phoneNumber,
//       password,
//       country,
//       currentLocation,
//       jobTitle,
//       jobDomain,
//     } = input;
//     const newErrors = {};

//     if (!firstName) newErrors.firstName = "First Name is required";
//     if (!lastName) newErrors.lastName = "Last Name is required";
//     if (!email) newErrors.email = "Email is required";
//     if (!phoneNumber) newErrors.phoneNumber = "Phone Number is required";
//     // if (!password) newErrors.password = "Password is required";
//     if (!country) newErrors.country = "Country is required";

//     // New validation for student-specific fields
//     if (!currentLocation)
//       newErrors.currentLocation = "Current Location is required";
//     if (!jobTitle) newErrors.jobTitle = "Job Title is required";
//     // if (!visaStatus) newErrors.visaStatus = "Visa Status is required";

//     if (!password) {
//       newErrors.password = "Password is required";
//     } else if (password.length < 8) {
//       newErrors.password = "Password must be at least 8 characters long";
//     } else if (!/[A-Z]/.test(password)) {
//       newErrors.password =
//         "Password must contain at least one uppercase letter";
//     } else if (!/[a-z]/.test(password)) {
//       newErrors.password =
//         "Password must contain at least one lowercase letter";
//     } else if (!/[0-9]/.test(password)) {
//       newErrors.password = "Password must contain at least one numeric digit";
//     } else if (!/[!@#$%^&*(),.?\":{}|<>]/.test(password)) {
//       newErrors.password =
//         "Password must contain at least one special character";
//     }

//     if (email && !isValidEmail(email)) {
//       newErrors.email = "Invalid email format";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const submitHandler = async (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;

//     const formData = new FormData();
//     const fullname = `${input.firstName} ${input.lastName}`;
//     formData.append("fullname", fullname);
//     formData.append("email", input.email);
//     formData.append("phoneNumber", input.phoneNumber);
//     formData.append("password", input.password);
//     formData.append("role", "student");
//     formData.append("country", input.country);

//     // Append new student-specific fields
//     formData.append("currentLocation", input.currentLocation);
//     // formData.append("willingToRelocate", input.willingToRelocate);
//     // formData.append("visaStatus", input.visaStatus);
//     formData.append("jobTitle", input.jobTitle);
//     formData.append("jobDomain", input.jobDomain);

//     if (input.file) {
//       formData.append("file", input.file);
//     }

//     try {
//       dispatch(setLoading(true));
//       const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//         withCredentials: true,
//       });
//       if (res.data.status) {
//         // navigate("/login");
//         toast.success(res.data.message);
//       }
//     } catch (error) {
//       toast.error(error.response?.data?.message || "Something went wrong");
//     } finally {
//       dispatch(setLoading(false));
//     }
//   };

//   return (
//     <div>
//       <Navbar></Navbar>
//       <div className="h-screen flex overflow-hidden ">
//         <div className="w-1/2 flex items-center justify-center bg-gray-100 p-8 overflow-y-auto">
//           <form
//             onSubmit={submitHandler}
//             className="w-full max-w-md bg-white shadow-xl rounded-xl p-6"
//           >
//             <h2 className="text-3xl font-bold text-indigo-800 text-center mb-6">
//               Candidate Signup
//             </h2>
//             <div className="grid grid-cols-2 gap-4">
//               {[
//                 {
//                   label: "First Name",
//                   name: "firstName",
//                   type: "text",
//                   placeholder: "First Name",
//                 },
//                 {
//                   label: "Last Name",
//                   name: "lastName",
//                   type: "text",
//                   placeholder: "Last Name",
//                 },
//                 {
//                   label: "Email",
//                   name: "email",
//                   type: "email",
//                   placeholder: "email@example.com",
//                 },
//                 {
//                   label: "Phone Number",
//                   name: "phoneNumber",
//                   type: "text",
//                   placeholder: "8080808080",
//                 },
//                 {
//                   label: "Password",
//                   name: "password",
//                   type: "password",
//                   placeholder: "Password",
//                 },
//                 {
//                   label: "Current Location",
//                   name: "currentLocation",
//                   type: "text",
//                   placeholder: "City, State",
//                 },
//                 // {
//                 //   label: "Job Title",
//                 //   name: "jobTitle",
//                 //   type: "text",
//                 //   placeholder: "Your current or desired job title",
//                 // },
//               ].map((field, idx) => (
//                 <div className="col-span-2 sm:col-span-1 mb-3" key={idx}>
//                   <Label className="text-indigo-800 flex items-center">
//                     {field.label}
//                     <span className="text-red-600 ml-1">*</span>
//                   </Label>
//                   <Input
//                     type={field.type}
//                     value={input[field.name]}
//                     name={field.name}
//                     onChange={changeEventHandler}
//                     placeholder={field.placeholder}
//                     className={`mt-1 border ${
//                       errors[field.name] ? "border-red-600" : "border-gray-300"
//                     } rounded-md p-2 w-full`}
//                   />
//                   {errors[field.name] && (
//                     <p className="text-red-600 text-sm mt-1">
//                       {errors[field.name]}
//                     </p>
//                   )}
//                 </div>
//               ))}
//             </div>
//             <div className="col-span-2 mb-3">
//               <Label className="text-indigo-800 flex items-center">
//                 Job Title
//                 <span className="text-red-600 ml-1">*</span>
//               </Label>
//               <Input
//                 type="text"
//                 value={input.jobTitle}
//                 name="jobTitle"
//                 onChange={changeEventHandler}
//                 placeholder="Your current or desired job title"
//                 className={`mt-1 border ${
//                   errors.jobTitle ? "border-red-600" : "border-gray-300"
//                 } rounded-md p-2 w-full`}
//               />
//               {errors.jobTitle && (
//                 <p className="text-red-600 text-sm mt-1">{errors.jobTitle}</p>
//               )}
//             </div>

//             <div className="mb-3">
//               <Label className="text-indigo-800 flex items-center">
//                 Job Domain
//               </Label>
//               <select
//                 name="jobDomain"
//                 value={input.jobDomain}
//                 onChange={changeEventHandler}
//                 className="mt-1 border border-gray-300 rounded-md p-2 w-full"
//               >
//                 <option value="Technology">Technology</option>
//                 <option value="Healthcare">Healthcare</option>
//                 <option value="Engineering">Engineering</option>
//                 <option value="Finance & Accounting">
//                   Finance & Accounting
//                 </option>
//                 <option value="Education">Education</option>
//                 <option value="Marketing & Sales">Marketing & Sales</option>
//                 <option value="Legal">Legal</option>
//                 <option value="Creative & Media">Creative & Media</option>
//                 <option value="Supply Chain & Operations">
//                   Supply Chain & Operations
//                 </option>
//                 <option value="Human Resources">Human Resources</option>
//                 <option value="Hospitality & Tourism">
//                   Hospitality & Tourism
//                 </option>
//                 <option value="Energy">Energy</option>
//                 <option value="Retail">Retail</option>
//                 <option value="Customer Service">Customer Service</option>
//                 <option value="Agriculture">Agriculture</option>
//               </select>
//             </div>

//             <div className="mb-3">
//               <Label className="text-indigo-800 flex items-center">
//                 Country <span className="text-red-600 ml-1">*</span>
//               </Label>
//               <select
//                 name="country"
//                 value={input.country}
//                 onChange={changeEventHandler}
//                 className="mt-1 border border-gray-300 rounded-md p-2 w-full"
//               >
//                 <option value="USA">USA</option>
//                 <option value="India">India</option>
//                 <option value="Canada">Canada</option>
//                 <option value="Uk">Uk</option>
//               </select>
//             </div>

//             <div className="mb-3">
//               <Label className="text-indigo-800 flex items-center">
//                 Profile Picture
//               </Label>
//               <Input
//                 accept="image/*"
//                 type="file"
//                 onChange={changeFileHandler}
//                 className="mt-1 cursor-pointer"
//               />
//             </div>

//             <Button
//               type="submit"
//               className="w-full mt-3 bg-indigo-700 hover:bg-indigo-800 text-white flex items-center justify-center"
//             >
//               {loading ? (
//                 <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//               ) : (
//                 "Create Professional Account"
//               )}
//             </Button>

//             <div className="text-center mt-3">
//               <span className="text-sm text-gray-600">
//                 Already have an account?{" "}
//                 <Link to="/login" className="text-indigo-700 hover:underline">
//                   Login
//                 </Link>
//               </span>
//             </div>
//           </form>
//         </div>

//         {/* Right Side - Compelling Description */}
//         <div className="w-full md:w-1/2 bg-gradient-to-br from-blue-600 to-blue-700 text-white flex flex-col justify-start p-6 relative rounded-t-lg">
//           {/* Text and content */}
//           <div className="space-y-6">
//             {/* Title section with icon */}
//             <h1 className="text-3xl font-extrabold flex items-center space-x-2">
//               <ArrowRight></ArrowRight>
//               <span>Elevate Your Career Journey</span>
//             </h1>

//             {/* Description */}
//             <p className="text-lg leading-relaxed">
//               🌟 Unlock a world of possibilities with our innovative job
//               platform! We're not just connecting professionals – we're
//               transforming careers through intelligent matching and personalized
//               opportunities.
//             </p>

//             {/* Features Section */}
//             <div className="space-y-6">
//               {/* Secure & Trusted Feature */}
//               <div className="flex items-center space-x-4 bg-blue-800 p-3 rounded-xl shadow-md hover:shadow-xl transition duration-300 ease-in-out">
//                 <Shield className="h-10 w-10 text-green-300" />
//                 <div>
//                   <h3 className="font-semibold text-md">Secure & Trusted</h3>
//                   <p className="text-sm text-gray-200">
//                     Your career information is protected with state-of-the-art
//                     security.
//                   </p>
//                 </div>
//               </div>

//               {/* Fast-Track Your Career Feature */}
//               <div className="flex items-center space-x-4 bg-blue-800 p-3 rounded-xl shadow-md hover:shadow-xl transition duration-300 ease-in-out">
//                 <Rocket className="h-10 w-10 text-yellow-300" />
//                 <div>
//                   <h3 className="font-semibold text-md">
//                     Fast-Track Your Career
//                   </h3>
//                   <p className="text-sm text-gray-200">
//                     Advanced algorithms match you with your dream opportunities.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Curved blue background with bottom border */}
//           <div className="h-2/4 w-full mt-10">
//             <IconCloudDemo className="4"></IconCloudDemo>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CandidateSignup;
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import axios from "axios";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "@/redux/authSlice";
import { ArrowRight, Loader2, Rocket, Shield } from "lucide-react";
import { USER_API_END_POINT } from "@/utils/constant";
import Navbar from "../shared/Navbar";
import IconCloudDemo from "../IconCloudDemo";

const CandidateSignup = () => {
  const [input, setInput] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        password: "",
        file: "",
        country: "USA",
        role: "student",
        // New student-specific fields
        currentLocation: "",
        willingToRelocate: false,
        visaStatus: "citizen",
        jobTitle: "",
        jobDomain: "",
      });
      const [errors, setErrors] = useState({});
      const { loading, user } = useSelector((store) => store.auth);
      const dispatch = useDispatch();
      const navigate = useNavigate();

      const changeEventHandler = (e) => {
        const { name, value, type, checked } = e.target;
        setInput((prev) => ({
          ...prev,
          [name]: type === "checkbox" ? checked : value,
        }));
      };

      const changeFileHandler = (e) => {
        setInput((prev) => ({ ...prev, file: e.target.files?.[0] }));
      };
      const isValidEmail = (email) => {
        // RFC 5322 compliant email regex
        const emailRegex = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;
        return emailRegex.test(email);
      };
      const validateForm = () => {
        const {
          firstName,
          lastName,
          email,
          phoneNumber,
          password,
          country,
          currentLocation,
          jobTitle,
          jobDomain,
        } = input;
        const newErrors = {};

        if (!firstName) newErrors.firstName = "First Name is required";
        if (!lastName) newErrors.lastName = "Last Name is required";
        if (!email) newErrors.email = "Email is required";
        if (!phoneNumber) newErrors.phoneNumber = "Phone Number is required";
        // if (!password) newErrors.password = "Password is required";
        if (!country) newErrors.country = "Country is required";

        // New validation for student-specific fields
        if (!currentLocation)
          newErrors.currentLocation = "Current Location is required";
        if (!jobTitle) newErrors.jobTitle = "Job Title is required";
        // if (!visaStatus) newErrors.visaStatus = "Visa Status is required";

        if (!password) {
          newErrors.password = "Password is required";
        } else if (password.length < 8) {
          newErrors.password = "Password must be at least 8 characters long";
        } else if (!/[A-Z]/.test(password)) {
          newErrors.password =
            "Password must contain at least one uppercase letter";
        } else if (!/[a-z]/.test(password)) {
          newErrors.password =
            "Password must contain at least one lowercase letter";
        } else if (!/[0-9]/.test(password)) {
          newErrors.password = "Password must contain at least one numeric digit";
        } else if (!/[!@#$%^&*(),.?\":{}|<>]/.test(password)) {
          newErrors.password =
            "Password must contain at least one special character";
        }

        if (email && !isValidEmail(email)) {
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
        formData.append("role", "student");
        formData.append("country", input.country);

        // Append new student-specific fields
        formData.append("currentLocation", input.currentLocation);
        // formData.append("willingToRelocate", input.willingToRelocate);
        // formData.append("visaStatus", input.visaStatus);
        formData.append("jobTitle", input.jobTitle);
        formData.append("jobDomain", input.jobDomain);

        if (input.file) {
          formData.append("file", input.file);
        }

        try {
          dispatch(setLoading(true));
          const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
            headers: { "Content-Type": "multipart/form-data" },
            withCredentials: true,
          });
          if (res.data.status) {
            // navigate("/login");
            toast.success(res.data.message);
          }
        } catch (error) {
          toast.error(error.response?.data?.message || "Something went wrong");
        } finally {
          dispatch(setLoading(false));
        }
      };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Form Section - Full width on mobile, half on desktop */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-8">
          <form onSubmit={submitHandler} className="w-full max-w-md bg-white shadow-xl rounded-xl p-4 md:p-6 space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-indigo-800 text-center mb-6">
              Candidate Signup
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  placeholder: "email@example.com",
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
                {
                  label: "Current Location",
                  name: "currentLocation",
                  type: "text",
                  placeholder: "City, State",
                },
              ].map((field, idx) => (
                <div className="col-span-1 space-y-1" key={idx}>
                  <Label className="text-indigo-800 flex items-center">
                    {field.label}
                    <span className="text-red-600 ml-1">*</span>
                  </Label>
                  <Input
                    type={field.type}
                    value={input[field.name]}
                    name={field.name}
                    onChange={changeEventHandler}
                    placeholder={field.placeholder}
                    className={`w-full ${
                      errors[field.name] ? "border-red-600" : "border-gray-300"
                    }`}
                  />
                  {errors[field.name] && (
                    <p className="text-red-600 text-sm">{errors[field.name]}</p>
                  )}
                </div>
              ))}
            </div>

            <div className="space-y-1">
              <Label className="text-indigo-800 flex items-center">
                Job Title
                <span className="text-red-600 ml-1">*</span>
              </Label>
              <Input
                type="text"
                value={input.jobTitle}
                name="jobTitle"
                onChange={changeEventHandler}
                placeholder="Your current or desired job title"
                className={`w-full ${
                  errors.jobTitle ? "border-red-600" : "border-gray-300"
                }`}
              />
              {errors.jobTitle && (
                <p className="text-red-600 text-sm">{errors.jobTitle}</p>
              )}
            </div>

            <div className="space-y-1">
              <Label className="text-indigo-800">Job Domain</Label>
              <select
                name="jobDomain"
                value={input.jobDomain}
                onChange={changeEventHandler}
                className="w-full border border-gray-300 rounded-md p-2"
              >
                <option value="Technology">Technology</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Engineering">Engineering</option>
                <option value="Finance & Accounting">Finance & Accounting</option>
                <option value="Education">Education</option>
                <option value="Marketing & Sales">Marketing & Sales</option>
                <option value="Legal">Legal</option>
                <option value="Creative & Media">Creative & Media</option>
                <option value="Supply Chain & Operations">Supply Chain & Operations</option>
                <option value="Human Resources">Human Resources</option>
                <option value="Hospitality & Tourism">Hospitality & Tourism</option>
                <option value="Energy">Energy</option>
                <option value="Retail">Retail</option>
                <option value="Customer Service">Customer Service</option>
                <option value="Agriculture">Agriculture</option>
              </select>
            </div>

            <div className="space-y-1">
              <Label className="text-indigo-800 flex items-center">
                Country <span className="text-red-600 ml-1">*</span>
              </Label>
              <select
                name="country"
                value={input.country}
                onChange={changeEventHandler}
                className="w-full border border-gray-300 rounded-md p-2"
              >
                <option value="USA">USA</option>
                <option value="India">India</option>
                <option value="Canada">Canada</option>
                <option value="Uk">UK</option>
              </select>
            </div>

            <div className="space-y-1">
              <Label className="text-indigo-800">Profile Picture</Label>
              <Input
                accept="image/*"
                type="file"
                onChange={changeFileHandler}
                className="cursor-pointer"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-indigo-700 hover:bg-indigo-800 text-white"
            >
              {loading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                "Create Professional Account"
              )}
            </Button>

            <div className="text-center">
              <span className="text-sm text-gray-600">
                Already have an account?{" "}
                <Link to="/login" className="text-indigo-700 hover:underline">
                  Login
                </Link>
              </span>
            </div>
          </form>
        </div>

        {/* Right Side - Hidden on mobile, visible on desktop */}
        <div className="hidden md:flex w-1/2 bg-gradient-to-br from-blue-600 to-blue-700 text-white flex-col justify-start p-6 relative">
          <div className="space-y-6">
            <h1 className="text-3xl font-extrabold flex items-center space-x-2">
              <ArrowRight />
              <span>Elevate Your Career Journey</span>
            </h1>

            <p className="text-lg leading-relaxed">
              🌟 Unlock a world of possibilities with our innovative job platform!
              We're not just connecting professionals – we're transforming careers
              through intelligent matching and personalized opportunities.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 bg-blue-800 p-3 rounded-xl shadow-md hover:shadow-xl transition duration-300">
                <Shield className="h-10 w-10 text-green-300" />
                <div>
                  <h3 className="font-semibold text-md">Secure & Trusted</h3>
                  <p className="text-sm text-gray-200">
                    Your career information is protected with state-of-the-art security.
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4 bg-blue-800 p-3 rounded-xl shadow-md hover:shadow-xl transition duration-300">
                <Rocket className="h-10 w-10 text-yellow-300" />
                <div>
                  <h3 className="font-semibold text-md">Fast-Track Your Career</h3>
                  <p className="text-sm text-gray-200">
                    Advanced algorithms match you with your dream opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-2/4 w-full mt-10">
            <IconCloudDemo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateSignup;
