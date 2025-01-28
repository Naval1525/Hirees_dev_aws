// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent } from '@/components/ui/card';
// import { CheckCircle2, ArrowRight, Building2, Edit, ClipboardList } from 'lucide-react';

// const EmptyCompaniesView = () => {
//   const navigate = useNavigate();

//   const steps = [
//     {
//       icon: <Building2 className="w-6 h-6" />,
//       title: "Create Your Company",
//       description: "Start by clicking the 'Create New Company' button and enter your company name"
//     },
//     {
//       icon: <ArrowRight className="w-6 h-6" />,
//       title: "Confirm Details",
//       description: "Review and confirm your company name to proceed to the next step"
//     },
//     {
//       icon: <Edit className="w-6 h-6" />,
//       title: "Complete Profile",
//       description: "Click 'Edit' in the actions column to add all required company information"
//     },
//     {
//       icon: <CheckCircle2 className="w-6 h-6" />,
//       title: "Ready to Go",
//       description: "Your company profile is now set up and ready for business"
//     }
//   ];

//   return (
//     <div className="max-w-4xl mx-auto px-4 py-8">
//       <div className="text-center mb-8">
//         <ClipboardList className="w-16 h-16 mx-auto text-blue-500 mb-4" />
//         <h1 className="text-2xl font-bold mb-2">Welcome to Company Management</h1>
//         <p className="text-gray-600 mb-8">
//           Get started by creating your first company. Follow these simple steps:
//         </p>
//       </div>

//       <div className="grid gap-6 mb-8">
//         {steps.map((step, index) => (
//           <Card key={index} className="bg-white">
//             <CardContent className="flex items-start p-6">
//               <div className="flex-shrink-0 mr-4 text-blue-500">
//                 {step.icon}
//               </div>
//               <div>
//                 <h3 className="font-semibold text-lg mb-1">
//                   Step {index + 1}: {step.title}
//                 </h3>
//                 <p className="text-gray-600">{step.description}</p>
//               </div>
//             </CardContent>
//           </Card>
//         ))}
//       </div>

//       <div className="text-center">
//         <Button
//           className="bg-blue-500 text-white px-8 py-2 rounded-xl hover:bg-blue-600"
//           onClick={() => navigate("/admin/companies/create")}
//         >
//           Create New Company
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default EmptyCompaniesView;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2, ArrowRight, Building2, Edit, ClipboardList } from 'lucide-react';
import { motion } from 'framer-motion';

const EmptyCompaniesView = () => {
  const navigate = useNavigate();

  const steps = [
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Create Your Company",
      description: "Start by clicking the 'Create New Company' button and enter your company name",
      color: "bg-blue-50"
    },
    {
      icon: <ArrowRight className="w-6 h-6" />,
      title: "Confirm Details",
      description: "Review and confirm your company name to proceed to the next step",
      color: "bg-purple-50"
    },
    {
      icon: <Edit className="w-6 h-6" />,
      title: "Complete Profile",
      description: "Click 'Edit' in the actions column to add all required company information",
      color: "bg-green-50"
    },
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: "Ready to Go",
      description: "Your company profile is now set up and ready for business",
      color: "bg-orange-50"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 bg-gradient-to-b from-gray-50 to-white rounded-xl shadow-sm">
      <div className="text-center mb-12">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-block p-4 bg-blue-50 rounded-full mb-6"
        >
          <ClipboardList className="w-16 h-16 text-blue-500" />
        </motion.div>
        <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          Welcome to Company Management
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Get started by creating your first company. We'll guide you through the process step by step.
        </p>
      </div>

      <div className="grid gap-6 mb-12">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
              <CardContent className={`flex items-start p-8 ${step.color} rounded-xl`}>
                <div className="flex-shrink-0 mr-6">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-sm">
                    {React.cloneElement(step.icon, { className: "w-6 h-6 text-blue-500" })}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2 flex items-center">
                    <span className="text-blue-600 mr-2">Step {index + 1}:</span>
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{step.description}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <Button
          className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-6 text-lg rounded-xl
          hover:from-blue-600 hover:to-blue-700 shadow-lg hover:shadow-xl transform transition-all duration-300
          hover:-translate-y-1"
          onClick={() => navigate("/admin/companies/create")}
        >
          Create New Company
        </Button>
      </motion.div>
    </div>
  );
};

export default EmptyCompaniesView;