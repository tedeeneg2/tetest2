// import { motion } from "framer-motion";
// import GlassCard from "../ui/GlassCard";
// import GlassButton from "../ui/GlassButton";

// const JobCard = ({ job }) => {
//   return (
//     <motion.div whileHover={{ scale: 1.02 }} className="transition-transform">
//       <GlassCard className="p-6 space-y-3">
//         <h3 className="text-xl font-semibold">{job.title}</h3>
//         <p className="text-sm text-gray-200">{job.company}</p>
//         <p className="text-sm text-gray-300">{job.location}</p>
//         <div className="flex justify-between items-center pt-3">
//           <GlassButton>Apply</GlassButton>
//           <button className="text-sm text-white hover:text-blue-300">
//             Save
//           </button>
//         </div>
//       </GlassCard>
//     </motion.div>
//   );
// };

// export default JobCard;
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card";
import { Button } from "../ui/Button";
import {
  MapPin,
  Clock,
  DollarSign,
  Building,
  Briefcase,
  Calendar,
  Eye,
  Heart,
} from "lucide-react";

const JobCard = ({ job, index = 0 }) => {
  const navigate = useNavigate();

  // Format date
  const formatDate = (dateString) => {
    if (!dateString) return "Just posted";
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 1) return "1 day ago";
    if (diffDays <= 7) return `${diffDays} days ago`;
    return date.toLocaleDateString();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
      whileHover={{ y: -4 }}
      className="group"
    >
      <Card
        className="h-full cursor-pointer relative overflow-hidden"
        onClick={() => navigate(`/jobs/${job.id}`)}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <CardHeader className="pb-4">
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                <Building className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {job.title}
                </CardTitle>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-medium mt-1">
                  {job.company}
                </p>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                // Handle bookmark
              }}
            >
              <Heart className="w-5 h-5 text-gray-400 hover:text-red-500 transition-colors" />
            </motion.button>
          </div>
        </CardHeader>

        <CardContent className="pt-0">
          <div className="space-y-4">
            {/* Job Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                <MapPin className="w-4 h-4 text-gray-500" />
                <span>{job.location}</span>
                {job.remote && (
                  <span className="px-2 py-1 bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-full text-xs font-medium">
                    Remote
                  </span>
                )}
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                <DollarSign className="w-4 h-4 text-gray-500" />
                <span>{job.salary}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                <Briefcase className="w-4 h-4 text-gray-500" />
                <span>{job.employment_type}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                <Calendar className="w-4 h-4 text-gray-500" />
                <span>{formatDate(job.created_at)}</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-3">
              {job.description}
            </p>

            {/* Skills */}
            {job.skills_required && job.skills_required.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {job.skills_required.slice(0, 3).map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 rounded-full text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
                {job.skills_required.length > 3 && (
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full text-xs font-medium">
                    +{job.skills_required.length - 3} more
                  </span>
                )}
              </div>
            )}

            {/* Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
              <Button
                variant="outline"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/jobs/${job.id}`);
                }}
                className="flex items-center space-x-2"
              >
                <Eye className="w-4 h-4" />
                <span>View Details</span>
              </Button>
              <Button
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  // Handle apply
                }}
                className="flex items-center space-x-2"
              >
                <span>Apply Now</span>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default JobCard;
