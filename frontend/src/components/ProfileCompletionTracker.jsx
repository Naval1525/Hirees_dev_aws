// import React from 'react';
// import { Progress } from "@/components/ui/progress";
// import { InfoIcon } from 'lucide-react';

// const ProfileCompletionTracker = ({ user }) => {
//   const calculateProfileCompletion = () => {
//     const fields = [
//       { name: 'Profile Photo', value: user?.profile?.profilePhoto },
//       { name: 'Full Name', value: user?.fullname },
//       { name: 'Bio', value: user?.profile?.bio },
//       { name: 'Email', value: user?.email },
//       { name: 'Phone', value: user?.phoneNumber },
//       { name: 'Current Location', value: user?.profile?.currentLocation },
//       { name: 'Job Title', value: user?.profile?.jobTitle },
//       { name: 'Visa Status', value: user?.profile?.visaStatus },
//       { name: 'Skills', value: user?.profile?.skills?.length > 0 },
//       { name: 'Resume', value: user?.profile?.resume }
//     ];

//     const completedFields = fields.filter(field => Boolean(field.value));
//     const completionPercentage = Math.round((completedFields.length / fields.length) * 100);

//     return {
//       percentage: completionPercentage,
//       completed: completedFields,
//       remaining: fields.filter(field => !field.value)
//     };
//   };

//   const { percentage, completed, remaining } = calculateProfileCompletion();

//   return (
//     <div className="bg-white rounded-lg p-6 border border-gray-200 mt-4">
//       <div className="flex items-center justify-between mb-4">
//         <h3 className="text-lg font-semibold text-gray-900">Profile Completion</h3>
//         <span className="text-xl font-bold text-blue-600">{percentage}%</span>
//       </div>

//       <Progress value={percentage} className="h-2 mb-4" />

//       <div className="flex items-start gap-2 mt-2">
//         <InfoIcon className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
//         <div className="text-sm text-gray-600">
//           {percentage === 100 ? (
//             <p>Great job! Your profile is complete.</p>
//           ) : (
//             <div>
//               <p className="mb-2">Complete these items to improve your profile:</p>
//               <ul className="list-disc ml-4 space-y-1">
//                 {remaining.map((field, index) => (
//                   <li key={index}>{field.name}</li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfileCompletionTracker;
import React, { useState } from 'react';
import { Progress } from "@/components/ui/progress";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  XCircle,
  User,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  FileText,
  Image,
  Layout,
  Award,
  Book,
  Globe
} from 'lucide-react';

const ProfileCompletionTracker = ({ user }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const fieldIcons = {
    'Profile Photo': Image,
    'Full Name': User,
    'Bio': Layout,
    'Email': Mail,
    'Phone': Phone,
    'Current Location': MapPin,
    'Job Title': Briefcase,
    'Job Domain': Globe,
    'Visa Status': Book,
    'Skills': Award,
    'Resume': FileText
  };

  const calculateProfileCompletion = () => {
    const fields = [
      { name: 'Profile Photo', value: user?.profile?.profilePhoto },
      { name: 'Full Name', value: user?.fullname },
      { name: 'Bio', value: user?.profile?.bio },
      { name: 'Email', value: user?.email },
      { name: 'Phone', value: user?.phoneNumber },
      { name: 'Current Location', value: user?.profile?.currentLocation },
      { name: 'Job Title', value: user?.profile?.jobTitle },
      { name: 'Job Domain', value: user?.profile?.jobDomain },
      { name: 'Visa Status', value: user?.profile?.visaStatus },
      { name: 'Skills', value: user?.profile?.skills?.length > 0 },
      { name: 'Resume', value: user?.profile?.resume }
    ];
    const completedFields = fields.filter(field => Boolean(field.value));
    const completionPercentage = Math.round((completedFields.length / fields.length) * 100);
    return {
      percentage: completionPercentage,
      completed: completedFields,
      remaining: fields.filter(field => !field.value)
    };
  };

  const { percentage, completed, remaining } = calculateProfileCompletion();

  return (
    <Card className="w-full transition-all duration-300 hover:shadow-lg">
      <CardHeader className="pb-2">
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="space-y-1">
            <h3 className="text-2xl font-semibold text-gray-900">Profile Completion</h3>
            <p className="text-sm text-gray-500">
              {percentage === 100
                ? "Your profile is complete! 🎉"
                : `${remaining.length} items left to complete`}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <span className="text-3xl font-bold text-blue-600">{percentage}%</span>
              <Badge
                variant={percentage === 100 ? "success" : "secondary"}
                className="ml-2"
              >
                {percentage === 100 ? "Complete" : "In Progress"}
              </Badge>
            </div>
            {isExpanded ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <Progress
          value={percentage}
          className="h-2 mb-4"
          color={percentage === 100 ? "bg-green-600" : "bg-blue-600"}
        />

        <div className={`transition-all duration-300 overflow-hidden ${isExpanded ? 'max-h-[800px]' : 'max-h-0'}`}>
          <div className="grid gap-4 mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-4">
                <h4 className="font-semibold text-green-600 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  Completed Items ({completed.length})
                </h4>
                {completed.map((field, index) => {
                  const Icon = fieldIcons[field.name];
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-gray-600 bg-green-50 p-3 rounded-lg"
                    >
                      <Icon className="w-4 h-4" />
                      <span>{field.name}</span>
                    </div>
                  );
                })}
              </div>

              {remaining.length > 0 && (
                <div className="space-y-4">
                  <h4 className="font-semibold text-red-600 flex items-center gap-2">
                    <XCircle className="w-5 h-5" />
                    Missing Items ({remaining.length})
                  </h4>
                  {remaining.map((field, index) => {
                    const Icon = fieldIcons[field.name];
                    return (
                      <div
                        key={index}
                        className="flex items-center gap-2 text-gray-600 bg-red-50 p-3 rounded-lg"
                      >
                        <Icon className="w-4 h-4" />
                        <span>{field.name}</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="ml-auto text-blue-600 hover:text-blue-800"
                        >
                          Complete
                        </Button>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileCompletionTracker;