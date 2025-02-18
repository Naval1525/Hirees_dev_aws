// import React from "react";
// import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";
// import logo from "../assets/logo.png";

// function Footer() {
//   return (
//     <div>
//     <footer className=" bg-gray-900 text-white py-12">
//       <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">
//         <div>
//           <div className="flex items-center mb-10">
//             <img
//               src={logo}
//               alt="Hirees Logo"
//               className="h-14 w-28 mr-2 object-cover rounded-full border-2  shadow-md"
//             />
//           </div>
//           <p className="text-gray-400 text-sm">
//             Bridging talent with opportunities across industries.
//           </p>
//         </div>

//         <div>
//           <h4 className="font-semibold mb-4">Quick Links</h4>
//           <ul className="space-y-2 text-sm">
//             <li>
//               <a href="#" className="hover:text-blue-400">
//                 Home
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-blue-400">
//                 Jobs
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-blue-400">
//                 Companies
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-blue-400">
//                 About Us
//               </a>
//             </li>
//           </ul>
//         </div>

//         <div>
//           <h4 className="font-semibold mb-4">Legal</h4>
//           <ul className="space-y-2 text-sm">
//             <li>
//               <a href="#" className="hover:text-blue-400">
//                 Privacy Policy
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-blue-400">
//                 Terms of Service
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-blue-400">
//                 Cookie Policy
//               </a>
//             </li>
//           </ul>
//         </div>

//         <div>
//           <h4 className="font-semibold mb-4">Contact</h4>
//           <div className="space-y-4 text-sm">
//             <div className="flex items-center space-x-2">
//               <Mail size={16} />
//               <span>Support@hirees.com</span>
//             </div>
//             <div className="flex items-center space-x-2">
//               <Phone size={16} />
//               <span> + 1 732 746 0010</span>
//             </div>
//             <div className="flex items-center space-x-2">
//               <MapPin size={32} />
//               <span>
//                 FSTONE Technologies, LLC. 2003 S Easton Rd, Suite 308,
//                 Doylestown, PA | 18901
//               </span>
//             </div>
//           </div>
//         </div>

//         <div className="col-span-full border-t border-gray-700 pt-6 mt-6 flex justify-between items-center">
//           <p className="text-sm text-gray-400">
//             ©FstoneTech 2024. All Rights Reserved.
//           </p>
//           {/* <div className="flex space-x-4">
//             <a href="#" className="text-gray-400 hover:text-white">
//               <Github size={20} />
//             </a>
//             <a href="#" className="text-gray-400 hover:text-white">
//               <Linkedin size={20} />
//             </a>
//             <a href="#" className="text-gray-400 hover:text-white">
//               <Twitter size={20} />
//             </a>
//           </div> */}
//         </div>
//       </div>
//     </footer>
//     </div>
//   );
// }

// export default Footer;
import React from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

function Footer() {
  const nav = useNavigate();
  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div>
            <div className="flex items-center mb-6 sm:mb-10">
              <img
                src={logo}
                alt="Hirees Logo"
                className="h-12 w-24 sm:h-14 sm:w-28 mr-2 object-cover rounded-full border-2 shadow-md"
              />
            </div>
            <p className="text-gray-400 text-sm">
              Bridging talent with opportunities across industries.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-base sm:text-lg cursor-default">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Jobs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Companies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a onClick={()=>nav('/contactUs')} className="hover:text-blue-400 transition-colors cursor-pointer">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4 text-base sm:text-lg">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-base sm:text-lg">Contact</h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Support@hirees.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>+ 1 732 746 0010</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mt-1 flex-shrink-0" />
                <span className="text-sm">
                  FSTONE Technologies, LLC. 2003 S Easton Rd, Suite 308,
                  Doylestown, PA | 18901
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs sm:text-sm text-gray-400 text-center sm:text-left">
            ©FstoneTech 2024. All Rights Reserved.
          </p>
          {/* Social Links - Uncomment if needed
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
          */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
