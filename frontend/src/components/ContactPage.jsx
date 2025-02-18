// // // // // // import React, { memo, useState, useEffect } from "react";
// // // // // // import { Mail, MessageSquare, User, Send, Phone, MapPin, Clock } from "lucide-react";
// // // // // // import { Button } from "@/components/ui/button";
// // // // // // import { Alert, AlertDescription } from "@/components/ui/alert";
// // // // // // import Navbar from "./shared/Navbar";

// // // // // // // Animated background pattern component
// // // // // // const AnimatedBackground = memo(() => (
// // // // // //   <div className="absolute inset-0 overflow-hidden">
// // // // // //     <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-blue-50/50" />
// // // // // //     <div className="absolute inset-0 opacity-20">
// // // // // //       {[...Array(20)].map((_, i) => (
// // // // // //         <div
// // // // // //           key={i}
// // // // // //           className="absolute rounded-full mix-blend-multiply animate-float"
// // // // // //           style={{
// // // // // //             left: `${Math.random() * 100}%`,
// // // // // //             top: `${Math.random() * 100}%`,
// // // // // //             width: `${Math.random() * 400 + 100}px`,
// // // // // //             height: `${Math.random() * 400 + 100}px`,
// // // // // //             background: `radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, rgba(59, 130, 246, 0) 70%)`,
// // // // // //             animation: `float ${Math.random() * 10 + 20}s linear infinite`,
// // // // // //             animationDelay: `${Math.random() * -20}s`
// // // // // //           }}
// // // // // //         />
// // // // // //       ))}
// // // // // //     </div>
// // // // // //   </div>
// // // // // // ));

// // // // // // // Contact information card component
// // // // // // const ContactCard = memo(({ icon: Icon, title, content, delay }) => (
// // // // // //   <div
// // // // // //     className="group flex items-center gap-4 p-4 rounded-2xl bg-white/50 backdrop-blur-sm border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-lg"
// // // // // //     style={{ animationDelay: `${delay}ms` }}
// // // // // //   >
// // // // // //     <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
// // // // // //       <Icon className="w-6 h-6 text-blue-600" />
// // // // // //     </div>
// // // // // //     <div className="flex-1">
// // // // // //       <p className="text-sm text-gray-500">{title}</p>
// // // // // //       <p className="text-base font-medium text-gray-900">{content}</p>
// // // // // //     </div>
// // // // // //   </div>
// // // // // // ));

// // // // // // const FormInput = memo(({ icon: Icon, ...props }) => (
// // // // // //   <div className="relative group">
// // // // // //     <div className="absolute left-4 top-1/2 -translate-y-1/2 transition-transform duration-300 group-focus-within:scale-110">
// // // // // //       <Icon className="w-5 h-5 text-gray-400 group-focus-within:text-blue-500" />
// // // // // //     </div>
// // // // // //     <input
// // // // // //       {...props}
// // // // // //       className="w-full pl-12 pr-4 py-4 text-lg outline-none border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-200 transition-all duration-300 bg-white/70 backdrop-blur-sm hover:border-blue-200"
// // // // // //     />
// // // // // //   </div>
// // // // // // ));

// // // // // // function ContactPage() {
// // // // // //   const [formData, setFormData] = useState({ name: "", email: "", message: "" });
// // // // // //   const [isSubmitting, setIsSubmitting] = useState(false);
// // // // // //   const [submitStatus, setSubmitStatus] = useState(null);
// // // // // //   const [animateIn, setAnimateIn] = useState(false);

// // // // // //   useEffect(() => {
// // // // // //     setAnimateIn(true);
// // // // // //   }, []);

// // // // // //   const handleSubmit = async (e) => {
// // // // // //     e.preventDefault();
// // // // // //     setIsSubmitting(true);

// // // // // //     // Simulate API call
// // // // // //     await new Promise(resolve => setTimeout(resolve, 1500));

// // // // // //     setSubmitStatus("success");
// // // // // //     setIsSubmitting(false);

// // // // // //     // Reset form after success
// // // // // //     setTimeout(() => {
// // // // // //       setFormData({ name: "", email: "", message: "" });
// // // // // //       setSubmitStatus(null);
// // // // // //     }, 3000);
// // // // // //   };

// // // // // //   const handleChange = (e) => {
// // // // // //     const { name, value } = e.target;
// // // // // //     setFormData(prev => ({ ...prev, [name]: value }));
// // // // // //   };

// // // // // //   return (
// // // // // //     <div>
// // // // // //         <Navbar></Navbar>
// // // // // //     <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden">
// // // // // //       <AnimatedBackground />

// // // // // //       <div className="container mx-auto px-4 py-16 relative z-10">
// // // // // //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
// // // // // //           {/* Left Column - Form */}
// // // // // //           <div className="space-y-8">
// // // // // //             <div className={`space-y-4 transition-all duration-1000 transform ${animateIn ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
// // // // // //               <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-800 text-base font-semibold shadow-sm">
// // // // // //                 <MessageSquare className="w-5 h-5 mr-2 text-blue-600" />
// // // // // //                 Get in Touch
// // // // // //               </div>

// // // // // //               <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
// // // // // //                 Let's Start a <span className="text-blue-700 relative">
// // // // // //                   Conversation
// // // // // //                   <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-200 transform -skew-x-12" />
// // // // // //                 </span>
// // // // // //               </h1>

// // // // // //               <p className="text-xl text-gray-600 max-w-2xl">
// // // // // //                 Have questions about our services or need support? We're here to help.
// // // // // //                 Fill out the form below and we'll get back to you shortly.
// // // // // //               </p>
// // // // // //             </div>

// // // // // //             <form onSubmit={handleSubmit} className="space-y-6">
// // // // // //               <FormInput
// // // // // //                 icon={User}
// // // // // //                 type="text"
// // // // // //                 name="name"
// // // // // //                 value={formData.name}
// // // // // //                 onChange={handleChange}
// // // // // //                 placeholder="Your Name"
// // // // // //                 required
// // // // // //               />

// // // // // //               <FormInput
// // // // // //                 icon={Mail}
// // // // // //                 type="email"
// // // // // //                 name="email"
// // // // // //                 value={formData.email}
// // // // // //                 onChange={handleChange}
// // // // // //                 placeholder="Your Email"
// // // // // //                 required
// // // // // //               />

// // // // // //               <div className="relative group">
// // // // // //                 <div className="absolute left-4 top-6 transition-transform duration-300 group-focus-within:scale-110">
// // // // // //                   <MessageSquare className="w-5 h-5 text-gray-400 group-focus-within:text-blue-500" />
// // // // // //                 </div>
// // // // // //                 <textarea
// // // // // //                   name="message"
// // // // // //                   value={formData.message}
// // // // // //                   onChange={handleChange}
// // // // // //                   placeholder="Your Message"
// // // // // //                   rows={4}
// // // // // //                   className="w-full pl-12 pr-4 py-4 text-lg outline-none border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-200 transition-all duration-300 bg-white/70 backdrop-blur-sm hover:border-blue-200"
// // // // // //                   required
// // // // // //                 />
// // // // // //               </div>

// // // // // //               <Button
// // // // // //                 type="submit"
// // // // // //                 disabled={isSubmitting}
// // // // // //                 className="w-full sm:w-auto bg-blue-700 hover:bg-blue-800 text-white rounded-xl px-8 py-4 h-auto transition transform hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
// // // // // //               >
// // // // // //                 {isSubmitting ? (
// // // // // //                   <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
// // // // // //                 ) : (
// // // // // //                   <>
// // // // // //                     <Send className="w-5 h-5" />
// // // // // //                     <span>Send Message</span>
// // // // // //                   </>
// // // // // //                 )}
// // // // // //               </Button>

// // // // // //               {submitStatus === "success" && (
// // // // // //                 <Alert className="bg-green-50 border-green-200">
// // // // // //                   <AlertDescription className="text-green-800">
// // // // // //                     Thank you for your message! We'll get back to you soon.
// // // // // //                   </AlertDescription>
// // // // // //                 </Alert>
// // // // // //               )}
// // // // // //             </form>
// // // // // //           </div>

// // // // // //           {/* Right Column - Contact Info */}
// // // // // //           <div className="lg:sticky lg:top-8 space-y-8">
// // // // // //             <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 space-y-8">
// // // // // //               <div>
// // // // // //                 <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h3>
// // // // // //                 <p className="text-gray-600">
// // // // // //                   We're here to help and answer any questions you might have.
// // // // // //                   We look forward to hearing from you.
// // // // // //                 </p>
// // // // // //               </div>

// // // // // //               <div className="space-y-4">
// // // // // //                 <ContactCard
// // // // // //                   icon={Mail}
// // // // // //                   title="Email"
// // // // // //                   content="contact@company.com"
// // // // // //                   delay={100}
// // // // // //                 />
// // // // // //                 <ContactCard
// // // // // //                   icon={Phone}
// // // // // //                   title="Phone"
// // // // // //                   content="+1 (555) 123-4567"
// // // // // //                   delay={200}
// // // // // //                 />
// // // // // //                 <ContactCard
// // // // // //                   icon={MapPin}
// // // // // //                   title="Location"
// // // // // //                   content="123 Business Ave, Suite 100"
// // // // // //                   delay={300}
// // // // // //                 />
// // // // // //                 <ContactCard
// // // // // //                   icon={Clock}
// // // // // //                   title="Business Hours"
// // // // // //                   content="Mon-Fri: 9AM - 6PM EST"
// // // // // //                   delay={400}
// // // // // //                 />
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // }

// // // // // // export default ContactPage;
// // // // // import React, { memo, useState, useEffect } from "react";
// // // // // import { Mail, MessageSquare, User, Send, Phone, MapPin, Clock, Globe, Users, Award, Heart } from "lucide-react";
// // // // // import { Button } from "@/components/ui/button";
// // // // // import { Alert, AlertDescription } from "@/components/ui/alert";
// // // // // import { ScrollArea } from "@/components/ui/scroll-area";
// // // // // import Navbar from "./shared/Navbar";

// // // // // // Animated number counter
// // // // // const AnimatedCounter = ({ value, duration = 2000 }) => {
// // // // //   const [count, setCount] = useState(0);

// // // // //   useEffect(() => {
// // // // //     let startTime;
// // // // //     const startValue = 0;

// // // // //     const animate = (currentTime) => {
// // // // //       if (!startTime) startTime = currentTime;
// // // // //       const progress = (currentTime - startTime) / duration;

// // // // //       if (progress < 1) {
// // // // //         setCount(Math.floor(startValue + (value - startValue) * progress));
// // // // //         requestAnimationFrame(animate);
// // // // //       } else {
// // // // //         setCount(value);
// // // // //       }
// // // // //     };

// // // // //     requestAnimationFrame(animate);
// // // // //   }, [value, duration]);

// // // // //   return <span>{count.toLocaleString()}+</span>;
// // // // // };

// // // // // // Testimonial component
// // // // // const Testimonial = memo(({ name, role, content, delay }) => (
// // // // //   <div
// // // // //     className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
// // // // //     style={{ animationDelay: `${delay}ms` }}
// // // // //   >
// // // // //     <div className="flex items-start gap-4">
// // // // //       <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold text-lg">
// // // // //         {name.charAt(0)}
// // // // //       </div>
// // // // //       <div>
// // // // //         <h4 className="text-lg font-semibold text-gray-900">{name}</h4>
// // // // //         <p className="text-sm text-gray-500">{role}</p>
// // // // //         <p className="mt-2 text-gray-600">{content}</p>
// // // // //       </div>
// // // // //     </div>
// // // // //   </div>
// // // // // ));

// // // // // // Stats component
// // // // // const StatsSection = memo(() => (
// // // // //   <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
// // // // //     {[
// // // // //       { icon: Globe, label: "Global Clients", value: 5000 },
// // // // //       { icon: Users, label: "Team Members", value: 150 },
// // // // //       { icon: Award, label: "Awards Won", value: 75 }
// // // // //     ].map(({ icon: Icon, label, value }, index) => (
// // // // //       <div
// // // // //         key={label}
// // // // //         className="bg-white/60 backdrop-blur-sm p-6 rounded-xl text-center group hover:bg-blue-50 transition-all duration-300"
// // // // //       >
// // // // //         <div className="w-16 h-16 mx-auto rounded-xl bg-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
// // // // //           <Icon className="w-8 h-8 text-blue-600" />
// // // // //         </div>
// // // // //         <h3 className="mt-4 text-3xl font-bold text-gray-900">
// // // // //           <AnimatedCounter value={value} />
// // // // //         </h3>
// // // // //         <p className="text-gray-600">{label}</p>
// // // // //       </div>
// // // // //     ))}
// // // // //   </div>
// // // // // ));

// // // // // // Contact form component with enhanced interactivity
// // // // // function ContactPage() {
// // // // //   const [formData, setFormData] = useState({ name: "", email: "", message: "" });
// // // // //   const [isSubmitting, setIsSubmitting] = useState(false);
// // // // //   const [submitStatus, setSubmitStatus] = useState(null);
// // // // //   const [activeFAQ, setActiveFAQ] = useState(null);

// // // // //   const faqs = [
// // // // //     {
// // // // //       question: "What are your response times?",
// // // // //       answer: "We typically respond within 24 hours on business days. For urgent matters, we offer priority support channels."
// // // // //     },
// // // // //     {
// // // // //       question: "Do you offer international support?",
// // // // //       answer: "Yes, we provide support across all time zones with our global team of experts."
// // // // //     },
// // // // //     {
// // // // //       question: "How can I schedule a consultation?",
// // // // //       answer: "You can schedule a consultation through our form or by directly emailing us. We'll match you with the best expert for your needs."
// // // // //     }
// // // // //   ];

// // // // //   const testimonials = [
// // // // //     {
// // // // //       name: "Sarah Johnson",
// // // // //       role: "CEO at TechStart",
// // // // //       content: "The team's response time and attention to detail is exceptional. They've helped us scale our operations significantly."
// // // // //     },
// // // // //     {
// // // // //       name: "Michael Chen",
// // // // //       role: "Product Manager",
// // // // //       content: "Their innovative solutions and professional approach have made a real difference in our project outcomes."
// // // // //     },
// // // // //     {
// // // // //       name: "Emma Williams",
// // // // //       role: "Marketing Director",
// // // // //       content: "The support we've received has been outstanding. They're truly committed to client success."
// // // // //     }
// // // // //   ];

// // // // //   const handleSubmit = async (e) => {
// // // // //     e.preventDefault();
// // // // //     setIsSubmitting(true);
// // // // //     await new Promise(resolve => setTimeout(resolve, 1500));
// // // // //     setSubmitStatus("success");
// // // // //     setIsSubmitting(false);
// // // // //     setTimeout(() => {
// // // // //       setFormData({ name: "", email: "", message: "" });
// // // // //       setSubmitStatus(null);
// // // // //     }, 3000);
// // // // //   };

// // // // //   return (
// // // // //     <div>
// // // // //         <Navbar></Navbar>
// // // // //     <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
// // // // //       {/* Animated background elements */}
// // // // //       <div className="absolute inset-0 overflow-hidden">
// // // // //         {[...Array(20)].map((_, i) => (
// // // // //           <div
// // // // //             key={i}
// // // // //             className="absolute rounded-full mix-blend-multiply animate-float"
// // // // //             style={{
// // // // //               left: `${Math.random() * 100}%`,
// // // // //               top: `${Math.random() * 100}%`,
// // // // //               width: `${Math.random() * 300 + 100}px`,
// // // // //               height: `${Math.random() * 300 + 100}px`,
// // // // //               background: `radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, rgba(59, 130, 246, 0) 70%)`,
// // // // //               animation: `float ${Math.random() * 10 + 20}s linear infinite`,
// // // // //               animationDelay: `${Math.random() * -20}s`
// // // // //             }}
// // // // //           />
// // // // //         ))}
// // // // //       </div>

// // // // //       <div className="container mx-auto px-4 py-16 relative z-10">
// // // // //         <div className="max-w-7xl mx-auto">
// // // // //           {/* Stats Section */}
// // // // //           <StatsSection />

// // // // //           {/* Main Content Grid */}
// // // // //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
// // // // //             {/* Left Column - Form */}
// // // // //             <div className="space-y-8">
// // // // //               <div className="space-y-4">
// // // // //                 <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-800 text-base font-semibold shadow-sm hover:shadow-md transition-shadow duration-300">
// // // // //                   <MessageSquare className="w-5 h-5 mr-2 text-blue-600" />
// // // // //                   Get in Touch
// // // // //                 </div>

// // // // //                 <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
// // // // //                   Let's Start a{" "}
// // // // //                   <span className="relative inline-block">
// // // // //                     <span className="relative z-10 text-blue-700">Conversation</span>
// // // // //                     <span className="absolute bottom-2 left-0 w-full h-3 bg-blue-200/50 transform -skew-x-12" />
// // // // //                   </span>
// // // // //                 </h1>
// // // // //               </div>

// // // // //               {/* Scrollable Testimonials */}
// // // // //               <ScrollArea className="h-48 rounded-xl p-4 bg-gradient-to-r from-blue-50/50 to-white/50">
// // // // //                 <div className="space-y-4">
// // // // //                   {testimonials.map((testimonial, index) => (
// // // // //                     <Testimonial key={index} {...testimonial} delay={index * 200} />
// // // // //                   ))}
// // // // //                 </div>
// // // // //               </ScrollArea>

// // // // //               {/* Contact Form */}
// // // // //               <form onSubmit={handleSubmit} className="space-y-6">
// // // // //                 <div className="relative group">
// // // // //                   <input
// // // // //                     type="text"
// // // // //                     name="name"
// // // // //                     value={formData.name}
// // // // //                     onChange={(e) => setFormData({ ...formData, name: e.target.value })}
// // // // //                     placeholder="Your Name"
// // // // //                     className="w-full pl-12 pr-4 py-4 text-lg border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-200 transition-all duration-300 bg-white/70 backdrop-blur-sm hover:border-blue-200"
// // // // //                     required
// // // // //                   />
// // // // //                   <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors duration-300" />
// // // // //                 </div>

// // // // //                 <div className="relative group">
// // // // //                   <input
// // // // //                     type="email"
// // // // //                     name="email"
// // // // //                     value={formData.email}
// // // // //                     onChange={(e) => setFormData({ ...formData, email: e.target.value })}
// // // // //                     placeholder="Your Email"
// // // // //                     className="w-full pl-12 pr-4 py-4 text-lg border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-200 transition-all duration-300 bg-white/70 backdrop-blur-sm hover:border-blue-200"
// // // // //                     required
// // // // //                   />
// // // // //                   <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors duration-300" />
// // // // //                 </div>

// // // // //                 <div className="relative group">
// // // // //                   <textarea
// // // // //                     name="message"
// // // // //                     value={formData.message}
// // // // //                     onChange={(e) => setFormData({ ...formData, message: e.target.value })}
// // // // //                     placeholder="Your Message"
// // // // //                     rows={4}
// // // // //                     className="w-full pl-12 pr-4 py-4 text-lg border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-200 transition-all duration-300 bg-white/70 backdrop-blur-sm hover:border-blue-200"
// // // // //                     required
// // // // //                   />
// // // // //                   <MessageSquare className="absolute left-4 top-6 w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors duration-300" />
// // // // //                 </div>

// // // // //                 <Button
// // // // //                   type="submit"
// // // // //                   disabled={isSubmitting}
// // // // //                   className="w-full sm:w-auto bg-blue-700 hover:bg-blue-800 text-white rounded-xl px-8 py-4 h-auto transition transform hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
// // // // //                 >
// // // // //                   {isSubmitting ? (
// // // // //                     <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
// // // // //                   ) : (
// // // // //                     <>
// // // // //                       <Send className="w-5 h-5" />
// // // // //                       <span>Send Message</span>
// // // // //                     </>
// // // // //                   )}
// // // // //                 </Button>

// // // // //                 {submitStatus === "success" && (
// // // // //                   <Alert className="bg-green-50 border-green-200">
// // // // //                     <AlertDescription className="text-green-800">
// // // // //                       Thank you for your message! We'll get back to you soon.
// // // // //                     </AlertDescription>
// // // // //                   </Alert>
// // // // //                 )}
// // // // //               </form>
// // // // //             </div>

// // // // //             {/* Right Column - Scrollable Info */}
// // // // //             <div className="lg:sticky lg:top-8 space-y-8">
// // // // //               <ScrollArea className="h-[600px] rounded-2xl bg-white/80 backdrop-blur-sm shadow-xl p-8">
// // // // //                 <div className="space-y-8">
// // // // //                   {/* Contact Information */}
// // // // //                   <div>
// // // // //                     <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h3>
// // // // //                     <div className="space-y-4">
// // // // //                       {[
// // // // //                         { icon: Mail, title: "Email", content: "contact@company.com" },
// // // // //                         { icon: Phone, title: "Phone", content: "+1 (555) 123-4567" },
// // // // //                         { icon: MapPin, title: "Location", content: "123 Business Ave, Suite 100" },
// // // // //                         { icon: Clock, title: "Business Hours", content: "Mon-Fri: 9AM - 6PM EST" }
// // // // //                       ].map((item, index) => (
// // // // //                         <div
// // // // //                           key={item.title}
// // // // //                           className="group flex items-center gap-4 p-4 rounded-xl bg-white/50 hover:bg-blue-50/50 transition-colors duration-300"
// // // // //                         >
// // // // //                           <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
// // // // //                             <item.icon className="w-6 h-6 text-blue-600" />
// // // // //                           </div>
// // // // //                           <div>
// // // // //                             <p className="text-sm text-gray-500">{item.title}</p>
// // // // //                             <p className="text-base font-medium text-gray-900">{item.content}</p>
// // // // //                           </div>
// // // // //                         </div>
// // // // //                       ))}
// // // // //                     </div>
// // // // //                   </div>

// // // // //                   {/* FAQ Section */}
// // // // //                   <div>
// // // // //                     <h3 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h3>
// // // // //                     <div className="space-y-4">
// // // // //                       {faqs.map((faq, index) => (
// // // // //                         <div
// // // // //                           key={index}
// // // // //                           className="border border-gray-200 rounded-xl overflow-hidden"
// // // // //                         >
// // // // //                           <button
// // // // //                             onClick={() => setActiveFAQ(activeFAQ === index ? null : index)}
// // // // //                             className="w-full px-6 py-4 text-left bg-white hover:bg-blue-50 transition-colors duration-300 flex justify-between items-center"
// // // // //                           >
// // // // //                             <span className="font-medium text-gray-900">{faq.question}</span>
// // // // //                             <span className={`transform transition-transform duration-300 ${activeFAQ === index ? 'rotate-180' : ''}`}>
// // // // //                               ▼
// // // // //                             </span>
// // // // //                           </button>
// // // // //                           <div
// // // // //                             className={`px-6 py-4 bg-gray-50 transition-all duration-300 ${
// // // // //                               activeFAQ === index ? 'block' : 'hidden'}`}>
// // // // //                             <p className="text-gray-600">{faq.answer}</p>
// // // // //                           </div>
// // // // //                         </div>
// // // // //                       ))}
// // // // //                     </div>
// // // // //                   </div>

// // // // //                   {/* Client Reviews */}
// // // // //                   <div>
// // // // //                     <h3 className="text-2xl font-bold text-gray-900 mb-4">Client Reviews</h3>
// // // // //                     <div className="space-y-6">
// // // // //                       <div className="flex items-center gap-2 mb-2">
// // // // //                         {[1, 2, 3, 4, 5].map((star) => (
// // // // //                           <Heart
// // // // //                             key={star}
// // // // //                             className="w-6 h-6 text-blue-500 fill-current"
// // // // //                           />
// // // // //                         ))}
// // // // //                         <span className="text-lg font-semibold text-gray-900 ml-2">4.9/5</span>
// // // // //                       </div>
// // // // //                       <div className="grid gap-4">
// // // // //                         {[
// // // // //                           { name: "David L.", text: "Exceptional service and support!" },
// // // // //                           { name: "Maria R.", text: "Quick responses and professional team." },
// // // // //                           { name: "James W.", text: "Best customer service experience ever." }
// // // // //                         ].map((review, index) => (
// // // // //                           <div
// // // // //                             key={index}
// // // // //                             className="bg-white/50 p-4 rounded-xl hover:bg-blue-50/50 transition-all duration-300"
// // // // //                           >
// // // // //                             <p className="text-gray-600 italic">"{review.text}"</p>
// // // // //                             <p className="text-sm font-medium text-gray-900 mt-2">- {review.name}</p>
// // // // //                           </div>
// // // // //                         ))}
// // // // //                       </div>
// // // // //                     </div>
// // // // //                   </div>
// // // // //                 </div>
// // // // //               </ScrollArea>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* Footer Stats */}
// // // // //       <div className="bg-white/80 backdrop-blur-sm mt-16 py-12">
// // // // //         <div className="container mx-auto px-4">
// // // // //           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
// // // // //             {[
// // // // //               { label: "Client Satisfaction", value: "98%" },
// // // // //               { label: "Response Rate", value: "< 24h" },
// // // // //               { label: "Support Channels", value: "24/7" },
// // // // //               { label: "Team Members", value: "150+" }
// // // // //             ].map((stat, index) => (
// // // // //               <div key={index} className="text-center">
// // // // //                 <div className="text-3xl font-bold text-blue-700 mb-2">{stat.value}</div>
// // // // //                 <div className="text-gray-600">{stat.label}</div>
// // // // //               </div>
// // // // //             ))}
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // export default ContactPage;
// // // // import React, { memo, useState, useEffect } from "react";
// // // // import { Mail, MessageSquare, User, Send, Phone, MapPin, Clock, Globe, Users, Award, Heart } from "lucide-react";
// // // // import { Button } from "@/components/ui/button";
// // // // import { Alert, AlertDescription } from "@/components/ui/alert";
// // // // import { ScrollArea } from "@/components/ui/scroll-area";
// // // // import Navbar from "./shared/Navbar";
// // // // import Footer from "./Footer";

// // // // // Animated Counter Component
// // // // const AnimatedCounter = memo(({ value, duration = 2000 }) => {
// // // //   const [count, setCount] = useState(0);

// // // //   useEffect(() => {
// // // //     let startTime;
// // // //     const animate = (currentTime) => {
// // // //       if (!startTime) startTime = currentTime;
// // // //       const progress = (currentTime - startTime) / duration;
// // // //       if (progress < 1) {
// // // //         setCount(Math.floor(value * progress));
// // // //         requestAnimationFrame(animate);
// // // //       } else {
// // // //         setCount(value);
// // // //       }
// // // //     };
// // // //     requestAnimationFrame(animate);
// // // //   }, [value, duration]);

// // // //   return <span>{count.toLocaleString()}+</span>;
// // // // });

// // // // // Testimonial Component with Animation
// // // // const Testimonial = memo(({ name, role, content, index }) => (
// // // //   <div
// // // //     className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
// // // //     style={{ animationDelay: `${index * 200}ms` }}
// // // //   >
// // // //     <div className="flex items-start gap-4">
// // // //       <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold">
// // // //         {name.charAt(0)}
// // // //       </div>
// // // //       <div>
// // // //         <h4 className="text-lg font-semibold text-gray-900">{name}</h4>
// // // //         <p className="text-sm text-gray-500">{role}</p>
// // // //         <p className="mt-2 text-gray-600">{content}</p>
// // // //       </div>
// // // //     </div>
// // // //   </div>
// // // // ));

// // // // // Stats Section with Animation
// // // // const StatsSection = memo(() => (
// // // //   <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
// // // //     {[
// // // //       { icon: Globe, label: "Global Clients", value: 5000 },
// // // //       { icon: Users, label: "Team Members", value: 150 },
// // // //       { icon: Award, label: "Awards Won", value: 75 }
// // // //     ].map(({ icon: Icon, label, value }) => (
// // // //       <div key={label} className="bg-white/60 backdrop-blur-sm p-6 rounded-xl text-center group hover:bg-blue-50 transition-all duration-300">
// // // //         <div className="w-16 h-16 mx-auto rounded-xl bg-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
// // // //           <Icon className="w-8 h-8 text-blue-600" />
// // // //         </div>
// // // //         <h3 className="mt-4 text-3xl font-bold text-gray-900">
// // // //           <AnimatedCounter value={value} />
// // // //         </h3>
// // // //         <p className="text-gray-600">{label}</p>
// // // //       </div>
// // // //     ))}
// // // //   </div>
// // // // ));

// // // // // Enhanced Contact Page Component
// // // // function ContactPage() {
// // // //   const [formData, setFormData] = useState({ name: "", email: "", message: "" });
// // // //   const [isSubmitting, setIsSubmitting] = useState(false);
// // // //   const [submitStatus, setSubmitStatus] = useState(null);
// // // //   const [activeFAQ, setActiveFAQ] = useState(null);

// // // //   const testimonials = [
// // // //     {
// // // //       name: "Sarah Johnson",
// // // //       role: "CEO at TechStart",
// // // //       content: "The team's response time and attention to detail is exceptional. They've helped us scale our operations significantly."
// // // //     },
// // // //     {
// // // //       name: "Michael Chen",
// // // //       role: "Product Manager",
// // // //       content: "Their innovative solutions and professional approach have made a real difference in our project outcomes."
// // // //     },
// // // //     {
// // // //       name: "Emma Williams",
// // // //       role: "Marketing Director",
// // // //       content: "The support we've received has been outstanding. They're truly committed to client success."
// // // //     }
// // // //   ];

// // // //   const handleSubmit = async (e) => {
// // // //     e.preventDefault();
// // // //     setIsSubmitting(true);
// // // //     await new Promise(resolve => setTimeout(resolve, 1500));
// // // //     setSubmitStatus("success");
// // // //     setIsSubmitting(false);
// // // //     setTimeout(() => {
// // // //       setFormData({ name: "", email: "", message: "" });
// // // //       setSubmitStatus(null);
// // // //     }, 3000);
// // // //   };

// // // //   return (
// // // //     <div>
// // // //         <Navbar></Navbar>
// // // //     <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 ">
// // // //       {/* Animated Background Elements */}
// // // //       <div className="absolute inset-0 overflow-hidden pointer-events-none">
// // // //         {[...Array(20)].map((_, i) => (
// // // //           <div
// // // //             key={i}
// // // //             className="absolute rounded-full mix-blend-multiply animate-float"
// // // //             style={{
// // // //               left: `${Math.random() * 100}%`,
// // // //               top: `${Math.random() * 100}%`,
// // // //               width: `${Math.random() * 300 + 100}px`,
// // // //               height: `${Math.random() * 300 + 100}px`,
// // // //               background: `radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, rgba(59, 130, 246, 0) 70%)`,
// // // //               animation: `float ${Math.random() * 10 + 20}s linear infinite`,
// // // //               animationDelay: `${Math.random() * -20}s`
// // // //             }}
// // // //           />
// // // //         ))}
// // // //       </div>

// // // //       <div className="container mx-auto px-4 py-16 relative z-10">
// // // //         <div className="max-w-7xl mx-auto">
// // // //           {/* Header & Stats */}
// // // //           <div className="text-center mb-12">
// // // //             <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-800 text-lg font-semibold mb-6">
// // // //               <MessageSquare className="w-5 h-5 mr-2" />
// // // //               Get in Touch
// // // //             </div>
// // // //             <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-8">
// // // //               Let's Start a{" "}
// // // //               <span className="relative inline-block">
// // // //                 <span className="relative z-10 text-blue-700">Conversation</span>
// // // //                 <span className="absolute bottom-2 left-0 w-full h-3 bg-blue-200/50 transform -skew-x-12" />
// // // //               </span>
// // // //             </h1>
// // // //             <StatsSection />
// // // //           </div>

// // // //           {/* Main Content Grid */}
// // // //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
// // // //             {/* Left Column - Form and Testimonials */}
// // // //             <div className="space-y-8">
// // // //               {/* Scrollable Testimonials */}
// // // //               <ScrollArea className="h-48 rounded-xl p-4 bg-gradient-to-r from-blue-50/50 to-white/50">
// // // //                 <div className="space-y-4">
// // // //                   {testimonials.map((testimonial, index) => (
// // // //                     <Testimonial key={index} {...testimonial} index={index} />
// // // //                   ))}
// // // //                 </div>
// // // //               </ScrollArea>

// // // //               {/* Contact Form */}
// // // //               <form onSubmit={handleSubmit} className="space-y-6 bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg">
// // // //                 <div className="relative group">
// // // //                   <input
// // // //                     type="text"
// // // //                     value={formData.name}
// // // //                     onChange={(e) => setFormData({ ...formData, name: e.target.value })}
// // // //                     placeholder="Your Name"
// // // //                     className="w-full pl-12 pr-4 py-4 text-lg border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-200 transition-all duration-300 bg-white/70 backdrop-blur-sm hover:border-blue-200"
// // // //                     required
// // // //                   />
// // // //                   <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors duration-300" />
// // // //                 </div>

// // // //                 <div className="relative group">
// // // //                   <input
// // // //                     type="email"
// // // //                     value={formData.email}
// // // //                     onChange={(e) => setFormData({ ...formData, email: e.target.value })}
// // // //                     placeholder="Your Email"
// // // //                     className="w-full pl-12 pr-4 py-4 text-lg border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-200 transition-all duration-300 bg-white/70 backdrop-blur-sm hover:border-blue-200"
// // // //                     required
// // // //                   />
// // // //                   <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors duration-300" />
// // // //                 </div>

// // // //                 <div className="relative group">
// // // //                   <textarea
// // // //                     value={formData.message}
// // // //                     onChange={(e) => setFormData({ ...formData, message: e.target.value })}
// // // //                     placeholder="Your Message"
// // // //                     rows={4}
// // // //                     className="w-full pl-12 pr-4 py-4 text-lg border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-200 transition-all duration-300 bg-white/70 backdrop-blur-sm hover:border-blue-200"
// // // //                     required
// // // //                   />
// // // //                   <MessageSquare className="absolute left-4 top-6 w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors duration-300" />
// // // //                 </div>

// // // //                 <Button
// // // //                   type="submit"
// // // //                   disabled={isSubmitting}
// // // //                   className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-8 py-4 transition transform hover:scale-105 hover:shadow-lg disabled:opacity-50 flex items-center justify-center gap-2"
// // // //                 >
// // // //                   {isSubmitting ? (
// // // //                     <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
// // // //                   ) : (
// // // //                     <>
// // // //                       <Send className="w-5 h-5" />
// // // //                       <span>Send Message</span>
// // // //                     </>
// // // //                   )}
// // // //                 </Button>

// // // //                 {submitStatus === "success" && (
// // // //                   <Alert className="bg-green-50 border-green-200">
// // // //                     <AlertDescription className="text-green-800">
// // // //                       Thank you for your message! We'll get back to you soon.
// // // //                     </AlertDescription>
// // // //                   </Alert>
// // // //                 )}
// // // //               </form>
// // // //             </div>

// // // //             {/* Right Column - Contact Info & FAQs */}
// // // //             <div className="lg:sticky lg:top-8">
// // // //               <ScrollArea className="h-[600px] rounded-2xl bg-white/80 backdrop-blur-sm shadow-xl p-8">
// // // //                 {/* Contact Information */}
// // // //                 <div className="space-y-6">
// // // //                   <h3 className="text-2xl font-bold text-gray-900">Contact Information</h3>
// // // //                   <div className="grid gap-4">
// // // //                     {[
// // // //                       { icon: Mail, title: "Email", content: "Support@hirees.com" },
// // // //                       { icon: Phone, title: "Phone", content: "+ 1 732 746 0010" },
// // // //                       { icon: MapPin, title: "Location", content: "123 Business Ave, Suite 100" },
// // // //                       { icon: Clock, title: "Business Hours", content: "Mon-Fri: 9AM - 6PM EST" }
// // // //                     ].map((item) => (
// // // //                       <div
// // // //                         key={item.title}
// // // //                         className="group flex items-center gap-4 p-4 rounded-xl bg-white/50 hover:bg-blue-50/50 transition-colors duration-300"
// // // //                       >
// // // //                         <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
// // // //                           <item.icon className="w-6 h-6 text-blue-600" />
// // // //                         </div>
// // // //                         <div>
// // // //                           <p className="text-sm text-gray-500">{item.title}</p>
// // // //                           <p className="font-medium text-gray-900">{item.content}</p>
// // // //                         </div>
// // // //                       </div>
// // // //                     ))}
// // // //                   </div>

// // // //                   {/* FAQ Section */}
// // // //                   <div className="mt-8">
// // // //                     <h3 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h3>
// // // //                     <div className="space-y-4">
// // // //                       {[
// // // //                         {
// // // //                           question: "What are your response times?",
// // // //                           answer: "We typically respond within 24 hours on business days. For urgent matters, we offer priority support channels."
// // // //                         },
// // // //                         {
// // // //                           question: "Do you offer international support?",
// // // //                           answer: "Yes, we provide support across all time zones with our global team of experts."
// // // //                         },
// // // //                         {
// // // //                           question: "How can I schedule a consultation?",
// // // //                           answer: "You can schedule a consultation through our form or by directly emailing us. We'll match you with the best expert for your needs."
// // // //                         }
// // // //                       ].map((faq, index) => (
// // // //                         <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
// // // //                           <button
// // // //                             onClick={() => setActiveFAQ(activeFAQ === index ? null : index)}
// // // //                             className="w-full px-6 py-4 text-left bg-white hover:bg-blue-50 transition-colors duration-300 flex justify-between items-center"
// // // //                           >
// // // //                             <span className="font-medium text-gray-900">{faq.question}</span>
// // // //                             <span className={`transform transition-transform duration-300 ${activeFAQ === index ? 'rotate-180' : ''}`}>
// // // //                               ▼
// // // //                             </span>
// // // //                           </button>
// // // //                           {activeFAQ === index && (
// // // //                             <div className="px-6 py-4 bg-gray-50">
// // // //                               <p className="text-gray-600">{faq.answer}</p>
// // // //                             </div>
// // // //                           )}
// // // //                         </div>
// // // //                       ))}
// // // //                     </div>
// // // //                   </div>
// // // //                 </div>
// // // //               </ScrollArea>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //       {/* Footer Stats */}
// // // //       <div className="bg-white/80 backdrop-blur-sm mt-16 py-12">
// // // //         <div className="container mx-auto px-4">
// // // //           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
// // // //             {[
// // // //               { label: "Client Satisfaction", value: "98%" },
// // // //               { label: "Response Rate", value: "< 24h" },
// // // //               { label: "Support Channels", value: "24/7" },
// // // //               { label: "Team Members", value: "150+" }
// // // //             ].map((stat, index) => (
// // // //               <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
// // // //                 <div className="text-3xl font-bold text-blue-700 mb-2 group-hover:text-blue-800">{stat.value}</div>
// // // //                 <div className="text-gray-600">{stat.label}</div>
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //       </div>
// // // //       <Footer></Footer>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default ContactPage;
// // // import React, { memo, useState } from "react";
// // // import { Mail, MessageSquare, User, Send, Phone, MapPin, Clock } from "lucide-react";
// // // import { Button } from "@/components/ui/button";
// // // import { Alert, AlertDescription } from "@/components/ui/alert";
// // // import { ScrollArea } from "@/components/ui/scroll-area";
// // // import Navbar from "./shared/Navbar";
// // // import Footer from "./Footer";

// // // // Contact Information Component
// // // const ContactInfo = memo(() => (
// // //   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
// // //     {[
// // //       { icon: Phone, title: "Call Us", content: "+ 1 732 746 0010" },
// // //       { icon: Mail, title: "Email Us", content: "support@hirees.com" },
// // //       { icon: MapPin, title: "Visit Us", content: "FSTONE Technologies, LLC. 2003 S Easton Rd, Suite 308, Doylestown, PA | 18901" },
// // //       { icon: Clock, title: "Business Hours", content: "Mon-Fri: 9AM - 6PM EST" }
// // //     ].map((item) => (
// // //       <div key={item.title} className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
// // //         <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
// // //           <item.icon className="w-5 h-5 text-blue-600" />
// // //         </div>
// // //         <div>
// // //           <p className="text-sm text-gray-500">{item.title}</p>
// // //           <p className="font-medium text-gray-900">{item.content}</p>
// // //         </div>
// // //       </div>
// // //     ))}
// // //   </div>
// // // ));

// // // // Contact Form Component
// // // const ContactForm = memo(({ formData, setFormData, handleSubmit, isSubmitting, submitStatus }) => (
// // //   <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-sm">
// // //     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // //       <div className="relative">
// // //         <input
// // //           type="text"
// // //           value={formData.name}
// // //           onChange={(e) => setFormData({ ...formData, name: e.target.value })}
// // //           placeholder="Your Name"
// // //           className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-100"
// // //           required
// // //         />
// // //         <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
// // //       </div>
// // //       <div className="relative">
// // //         <input
// // //           type="email"
// // //           value={formData.email}
// // //           onChange={(e) => setFormData({ ...formData, email: e.target.value })}
// // //           placeholder="Your Email"
// // //           className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-100"
// // //           required
// // //         />
// // //         <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
// // //       </div>
// // //     </div>
// // //     <div className="relative">
// // //       <textarea
// // //         value={formData.message}
// // //         onChange={(e) => setFormData({ ...formData, message: e.target.value })}
// // //         placeholder="Your Message"
// // //         rows={4}
// // //         className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-100"
// // //         required
// // //       />
// // //       <MessageSquare className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
// // //     </div>
// // //     <Button
// // //       type="submit"
// // //       disabled={isSubmitting}
// // //       className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-6 py-3"
// // //     >
// // //       {isSubmitting ? (
// // //         <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
// // //       ) : (
// // //         <div className="flex items-center gap-2">
// // //           <Send className="w-4 h-4" />
// // //           <span>Send Message</span>
// // //         </div>
// // //       )}
// // //     </Button>
// // //     {submitStatus === "success" && (
// // //       <Alert className="bg-green-50 border-green-200">
// // //         <AlertDescription className="text-green-800">
// // //           Thank you for your message! We'll get back to you soon.
// // //         </AlertDescription>
// // //       </Alert>
// // //     )}
// // //   </form>
// // // ));

// // // // FAQ Component
// // // const FAQ = memo(({ activeFAQ, setActiveFAQ }) => (
// // //   <div className="space-y-4">
// // //     {[
// // //       {
// // //         question: "What are your response times?",
// // //         answer: "We typically respond within 24 hours on business days."
// // //       },
// // //       {
// // //         question: "Do you offer international support?",
// // //         answer: "Yes, we provide support across all time zones with our global team."
// // //       },
// // //       {
// // //         question: "How can I schedule a consultation?",
// // //         answer: "You can schedule through our form or by emailing us directly."
// // //       }
// // //     ].map((faq, index) => (
// // //       <div key={index} className="border border-gray-200 rounded-lg">
// // //         <button
// // //           onClick={() => setActiveFAQ(activeFAQ === index ? null : index)}
// // //           className="w-full px-4 py-3 text-left bg-white hover:bg-gray-50 flex justify-between items-center"
// // //         >
// // //           <span className="font-medium">{faq.question}</span>
// // //           <span className={`transform transition-transform ${activeFAQ === index ? 'rotate-180' : ''}`}>
// // //             ▼
// // //           </span>
// // //         </button>
// // //         {activeFAQ === index && (
// // //           <div className="px-4 py-3 bg-gray-50">
// // //             <p className="text-gray-600">{faq.answer}</p>
// // //           </div>
// // //         )}
// // //       </div>
// // //     ))}
// // //   </div>
// // // ));

// // // function ContactPage() {
// // //   const [formData, setFormData] = useState({ name: "", email: "", message: "" });
// // //   const [isSubmitting, setIsSubmitting] = useState(false);
// // //   const [submitStatus, setSubmitStatus] = useState(null);
// // //   const [activeFAQ, setActiveFAQ] = useState(null);

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     setIsSubmitting(true);
// // //     await new Promise(resolve => setTimeout(resolve, 1500));
// // //     setSubmitStatus("success");
// // //     setIsSubmitting(false);
// // //     setTimeout(() => {
// // //       setFormData({ name: "", email: "", message: "" });
// // //       setSubmitStatus(null);
// // //     }, 3000);
// // //   };

// // //   return (
// // //     <div className="min-h-screen bg-gray-50">
// // //       <Navbar />
// // //       <div className="container mx-auto px-4 py-12">
// // //         <div className="max-w-5xl mx-auto">
// // //           {/* Header */}
// // //           <div className="text-center mb-12">
// // //             <h1 className="text-4xl font-bold text-gray-900 mb-4">
// // //               Contact Us
// // //             </h1>
// // //             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
// // //               Get in touch with our team. We're here to help and answer any questions you might have.
// // //             </p>
// // //           </div>

// // //           {/* Contact Information */}
// // //           <ContactInfo />

// // //           {/* Main Content */}
// // //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
// // //             {/* Contact Form */}
// // //             <div>
// // //               <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
// // //               <ContactForm
// // //                 formData={formData}
// // //                 setFormData={setFormData}
// // //                 handleSubmit={handleSubmit}
// // //                 isSubmitting={isSubmitting}
// // //                 submitStatus={submitStatus}
// // //               />
// // //             </div>

// // //             {/* FAQ Section */}
// // //             <div>
// // //               <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
// // //               <ScrollArea className="h-[400px]">
// // //                 <FAQ activeFAQ={activeFAQ} setActiveFAQ={setActiveFAQ} />
// // //               </ScrollArea>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //       <Footer />
// // //     </div>
// // //   );
// // // }

// // // export default ContactPage;
// // import React, { useState } from "react";
// // import { Mail, Phone, MapPin, Send, Twitter, Instagram, Linkedin } from "lucide-react";
// // import { Button } from "@/components/ui/button";
// // import { Alert, AlertDescription } from "@/components/ui/alert";
// // import Navbar from "./shared/Navbar";
// // import Footer from "./Footer";

// // function ContactPage() {
// //   const [formData, setFormData] = useState({
// //     firstName: "",
// //     lastName: "",
// //     email: "",
// //     phone: "",
// //     subject: "general",
// //     message: ""
// //   });
// //   const [isSubmitting, setIsSubmitting] = useState(false);
// //   const [submitStatus, setSubmitStatus] = useState(null);

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setIsSubmitting(true);
// //     await new Promise(resolve => setTimeout(resolve, 1500));
// //     setSubmitStatus("success");
// //     setIsSubmitting(false);
// //     setTimeout(() => {
// //       setFormData({
// //         firstName: "",
// //         lastName: "",
// //         email: "",
// //         phone: "",
// //         subject: "general",
// //         message: ""
// //       });
// //       setSubmitStatus(null);
// //     }, 3000);
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-50">
// //       <Navbar />
// //       <div className="container mx-auto px-4 py-12">
// //         <div className="max-w-6xl mx-auto">
// //           <div className="grid grid-cols-1 lg:grid-cols-2 rounded-2xl overflow-hidden shadow-xl">
// //             {/* Contact Information Panel */}
// //             <div className="bg-gray-900 p-12 text-white">
// //               <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
// //               <p className="text-gray-400 mb-12">Say something to start a live chat!</p>

// //               <div className="space-y-8">
// //                 <div className="flex items-center gap-4">
// //                   <Phone className="w-6 h-6 text-blue-400" />
// //                   <span>+1 012 3456 789</span>
// //                 </div>
// //                 <div className="flex items-center gap-4">
// //                   <Mail className="w-6 h-6 text-blue-400" />
// //                   <span>support@hirees.com</span>
// //                 </div>
// //                 <div className="flex items-start gap-4">
// //                   <MapPin className="w-6 h-6 text-blue-400 mt-1" />
// //                   <span>132 Dartmouth Street Boston,<br />Massachusetts 02156 United States</span>
// //                 </div>
// //               </div>

// //               <div className="absolute bottom-12">
// //                 <div className="flex gap-6 mt-12">
// //                   <a href="#" className="text-white hover:text-blue-400 transition-colors">
// //                     <Twitter className="w-6 h-6" />
// //                   </a>
// //                   <a href="#" className="text-white hover:text-blue-400 transition-colors">
// //                     <Instagram className="w-6 h-6" />
// //                   </a>
// //                   <a href="#" className="text-white hover:text-blue-400 transition-colors">
// //                     <Linkedin className="w-6 h-6" />
// //                   </a>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Contact Form Panel */}
// //             <div className="bg-white p-12">
// //               <form onSubmit={handleSubmit} className="space-y-6">
// //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //                   <div>
// //                     <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
// //                     <input
// //                       type="text"
// //                       value={formData.firstName}
// //                       onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
// //                       className="w-full px-4 py-3 border-b border-gray-300 focus:border-blue-500 outline-none transition-colors"
// //                       required
// //                     />
// //                   </div>
// //                   <div>
// //                     <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
// //                     <input
// //                       type="text"
// //                       value={formData.lastName}
// //                       onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
// //                       className="w-full px-4 py-3 border-b border-gray-300 focus:border-blue-500 outline-none transition-colors"
// //                       required
// //                     />
// //                   </div>
// //                 </div>

// //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //                   <div>
// //                     <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
// //                     <input
// //                       type="email"
// //                       value={formData.email}
// //                       onChange={(e) => setFormData({ ...formData, email: e.target.value })}
// //                       className="w-full px-4 py-3 border-b border-gray-300 focus:border-blue-500 outline-none transition-colors"
// //                       required
// //                     />
// //                   </div>
// //                   <div>
// //                     <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
// //                     <input
// //                       type="tel"
// //                       value={formData.phone}
// //                       onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
// //                       className="w-full px-4 py-3 border-b border-gray-300 focus:border-blue-500 outline-none transition-colors"
// //                       required
// //                     />
// //                   </div>
// //                 </div>

// //                 <div>
// //                   <label className="block text-sm font-medium text-gray-700 mb-4">Select Subject?</label>
// //                   <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
// //                     {['General Inquiry', 'Technical Support', 'Billing Question', 'Partnership'].map((subject) => (
// //                       <label key={subject} className="flex items-center gap-2 cursor-pointer">
// //                         <input
// //                           type="radio"
// //                           name="subject"
// //                           value={subject.toLowerCase()}
// //                           checked={formData.subject === subject.toLowerCase()}
// //                           onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
// //                           className="w-4 h-4 text-blue-600"
// //                         />
// //                         <span className="text-sm text-gray-600">{subject}</span>
// //                       </label>
// //                     ))}
// //                   </div>
// //                 </div>

// //                 <div>
// //                   <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
// //                   <textarea
// //                     value={formData.message}
// //                     onChange={(e) => setFormData({ ...formData, message: e.target.value })}
// //                     rows={4}
// //                     className="w-full px-4 py-3 border-b border-gray-300 focus:border-blue-500 outline-none transition-colors resize-none"
// //                     required
// //                   />
// //                 </div>

// //                 <div className="pt-4">
// //                   <Button
// //                     type="submit"
// //                     disabled={isSubmitting}
// //                     className="w-full bg-gray-900 hover:bg-gray-800 text-white rounded-lg px-8 py-4"
// //                   >
// //                     {isSubmitting ? (
// //                       <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
// //                     ) : (
// //                       <div className="flex items-center justify-center gap-2">
// //                         <Send className="w-5 h-5" />
// //                         <span>Send Message</span>
// //                       </div>
// //                     )}
// //                   </Button>
// //                 </div>

// //                 {submitStatus === "success" && (
// //                   <Alert className="mt-6 bg-green-50 border-green-200">
// //                     <AlertDescription className="text-green-800">
// //                       Thank you for your message! We'll get back to you soon.
// //                     </AlertDescription>
// //                   </Alert>
// //                 )}
// //               </form>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //       <Footer />
// //     </div>
// //   );
// // }

// // export default ContactPage;
// import React, { useState, useEffect } from "react";
// import { Mail, Phone, MapPin, Send, Twitter, Instagram, Linkedin } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Alert, AlertDescription } from "@/components/ui/alert";
// import Navbar from "./shared/Navbar";
// import Footer from "./Footer";

// const Slideshow = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const slides = [
//     {
//       title: "Welcome to Hirees",
//       subtitle: "Your Success Partner",
//       description: "Let's build something amazing together",
//       bgColor: "from-blue-900 to-blue-800"
//     },
//     {
//       title: "Global Reach",
//       subtitle: "Local Excellence",
//       description: "Supporting businesses worldwide",
//       bgColor: "from-indigo-900 to-indigo-800"
//     },
//     {
//       title: "24/7 Support",
//       subtitle: "Always Here",
//       description: "Ready to help whenever you need",
//       bgColor: "from-purple-900 to-purple-800"
//     }
//   ];

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="relative h-full overflow-hidden">
//       {slides.map((slide, index) => (
//         <div
//           key={index}
//           className={`absolute inset-0 flex flex-col justify-center px-12 transition-opacity duration-1000
//             bg-gradient-to-br ${slide.bgColor}
//             ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
//         >
//           <p className="text-blue-400 text-lg font-medium mb-2">{slide.subtitle}</p>
//           <h2 className="text-4xl font-bold text-white mb-4">{slide.title}</h2>
//           <p className="text-gray-300 text-lg">{slide.description}</p>
//         </div>
//       ))}

//       <div className="absolute bottom-12">
//         <div className="flex gap-6">
//           <a href="#" className="text-white hover:text-blue-400 transition-colors">
//             <Twitter className="w-6 h-6" />
//           </a>
//           <a href="#" className="text-white hover:text-blue-400 transition-colors">
//             <Instagram className="w-6 h-6" />
//           </a>
//           <a href="#" className="text-white hover:text-blue-400 transition-colors">
//             <Linkedin className="w-6 h-6" />
//           </a>
//         </div>
//       </div>

//       <div className="absolute bottom-12 right-12 flex gap-2">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentSlide(index)}
//             className={`w-2 h-2 rounded-full transition-all duration-300
//               ${index === currentSlide ? 'bg-white w-6' : 'bg-gray-400'}`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// function ContactPage() {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     subject: "general",
//     message: ""
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     await new Promise(resolve => setTimeout(resolve, 1500));
//     setSubmitStatus("success");
//     setIsSubmitting(false);
//     setTimeout(() => {
//       setFormData({
//         firstName: "",
//         lastName: "",
//         email: "",
//         phone: "",
//         subject: "general",
//         message: ""
//       });
//       setSubmitStatus(null);
//     }, 3000);
//   };

//   return (
//     <div className="min-h-screen flex flex-col">
//       <Navbar />
//       <div className="flex-1 grid grid-cols-1 lg:grid-cols-2">
//         {/* Slideshow Panel */}
//         <div className="hidden lg:block">
//           <Slideshow />
//         </div>

//         {/* Contact Form Panel */}
//         <div className="bg-white p-8 lg:p-12 overflow-y-auto">
//           <div className="max-w-xl mx-auto">
//             <div className="mb-8">
//               <h2 className="text-3xl font-bold text-gray-900">Contact Us</h2>
//               <p className="text-gray-600 mt-2">Fill out the form below to get in touch</p>
//             </div>

//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
//                   <input
//                     type="text"
//                     value={formData.firstName}
//                     onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
//                     className="w-full px-4 py-3 border-b border-gray-300 focus:border-blue-500 outline-none transition-colors"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
//                   <input
//                     type="text"
//                     value={formData.lastName}
//                     onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
//                     className="w-full px-4 py-3 border-b border-gray-300 focus:border-blue-500 outline-none transition-colors"
//                     required
//                   />
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
//                   <input
//                     type="email"
//                     value={formData.email}
//                     onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                     className="w-full px-4 py-3 border-b border-gray-300 focus:border-blue-500 outline-none transition-colors"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
//                   <input
//                     type="tel"
//                     value={formData.phone}
//                     onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
//                     className="w-full px-4 py-3 border-b border-gray-300 focus:border-blue-500 outline-none transition-colors"
//                     required
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-4">Select Subject?</label>
//                 <div className="grid grid-cols-2 gap-4">
//                   {['General Inquiry', 'Technical Support', 'Billing Question', 'Partnership'].map((subject) => (
//                     <label key={subject} className="flex items-center gap-2 cursor-pointer">
//                       <input
//                         type="radio"
//                         name="subject"
//                         value={subject.toLowerCase()}
//                         checked={formData.subject === subject.toLowerCase()}
//                         onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
//                         className="w-4 h-4 text-blue-600"
//                       />
//                       <span className="text-sm text-gray-600">{subject}</span>
//                     </label>
//                   ))}
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
//                 <textarea
//                   value={formData.message}
//                   onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//                   rows={4}
//                   className="w-full px-4 py-3 border-b border-gray-300 focus:border-blue-500 outline-none transition-colors resize-none"
//                   required
//                 />
//               </div>

//               <div className="pt-4">
//                 <Button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-8 py-4"
//                 >
//                   {isSubmitting ? (
//                     <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
//                   ) : (
//                     <div className="flex items-center justify-center gap-2">
//                       <Send className="w-5 h-5" />
//                       <span>Send Message</span>
//                     </div>
//                   )}
//                 </Button>
//               </div>

//               {submitStatus === "success" && (
//                 <Alert className="mt-6 bg-green-50 border-green-200">
//                   <AlertDescription className="text-green-800">
//                     Thank you for your message! We'll get back to you soon.
//                   </AlertDescription>
//                 </Alert>
//               )}
//             </form>

//             <div className="mt-12 space-y-4">
//               <div className="flex items-center gap-4 text-gray-600">
//                 <Phone className="w-5 h-5 text-blue-600" />
//                 <span>+1 012 3456 789</span>
//               </div>
//               <div className="flex items-center gap-4 text-gray-600">
//                 <Mail className="w-5 h-5 text-blue-600" />
//                 <span>support@hirees.com</span>
//               </div>
//               <div className="flex items-start gap-4 text-gray-600">
//                 <MapPin className="w-5 h-5 text-blue-600 mt-1" />
//                 <span>132 Dartmouth Street Boston,<br />Massachusetts 02156 United States</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default ContactPage;
import React, { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Send, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Navbar from "./shared/Navbar";
import Footer from "./Footer";

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "bg-[url('/images/office1.jpg')]",
      title: "Professional Excellence",
      description: "Leading the industry with innovative solutions"
    },
    {
      image: "bg-[url('/images/office2.jpg')]",
      title: "Global Network",
      description: "Connected worldwide, delivered locally"
    },
    {
      image: "bg-[url('/images/office3.jpg')]",
      title: "24/7 Support",
      description: "Always here when you need us"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-40 mb-8 rounded-lg overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000
            bg-gradient-to-r from-gray-900 to-gray-800
            ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="text-center">
            <h3 className="text-xl font-bold text-white mb-2">{slide.title}</h3>
            <p className="text-gray-300">{slide.description}</p>
          </div>
        </div>
      ))}

      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300
              ${index === currentSlide ? 'bg-blue-400 w-6' : 'bg-gray-400'}`}
          />
        ))}
      </div>
    </div>
  );
};

function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "general",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setSubmitStatus("success");
    setIsSubmitting(false);
    setTimeout(() => {
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "general",
        message: ""
      });
      setSubmitStatus(null);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 rounded-2xl overflow-hidden shadow-xl">
            {/* Contact Information Panel */}
            <div className="bg-gray-900 p-12 text-white">
              <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
              <p className="text-gray-400 mb-8">Let's discuss how we can help you succeed</p>

              <Slideshow />

              <div className="space-y-8 mt-12">
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-blue-400" />
                  <span>+1 012 3456 789</span>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-blue-400" />
                  <span>support@hirees.com</span>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-blue-400 mt-1" />
                  <span>132 Dartmouth Street Boston,<br />Massachusetts 02156 United States</span>
                </div>
              </div>

              <div className="mt-12">
                <div className="flex gap-6">
                  <a href="#" className="text-white hover:text-blue-400 transition-colors">
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-white hover:text-blue-400 transition-colors">
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-white hover:text-blue-400 transition-colors">
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form Panel */}
            <div className="bg-white p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full px-4 py-3 border-b border-gray-300 focus:border-blue-500 outline-none transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full px-4 py-3 border-b border-gray-300 focus:border-blue-500 outline-none transition-colors"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border-b border-gray-300 focus:border-blue-500 outline-none transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border-b border-gray-300 focus:border-blue-500 outline-none transition-colors"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-4">Select Subject?</label>
                  <div className="grid grid-cols-2 gap-4">
                    {['General Inquiry', 'Technical Support', 'Billing Question', 'Partnership'].map((subject) => (
                      <label key={subject} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="subject"
                          value={subject.toLowerCase()}
                          checked={formData.subject === subject.toLowerCase()}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-4 h-4 text-blue-600"
                        />
                        <span className="text-sm text-gray-600">{subject}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 border-b border-gray-300 focus:border-blue-500 outline-none transition-colors resize-none"
                    required
                  />
                </div>

                <div className="pt-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gray-900 hover:bg-gray-800 text-white rounded-lg px-8 py-4"
                  >
                    {isSubmitting ? (
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <div className="flex items-center justify-center gap-2">
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </div>
                    )}
                  </Button>
                </div>

                {submitStatus === "success" && (
                  <Alert className="mt-6 bg-green-50 border-green-200">
                    <AlertDescription className="text-green-800">
                      Thank you for your message! We'll get back to you soon.
                    </AlertDescription>
                  </Alert>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactPage;