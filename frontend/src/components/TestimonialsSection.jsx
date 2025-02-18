// import React from "react";
// import { motion } from "framer-motion";
// import { Quote } from "lucide-react";

// const testimonials = [
//   {
//     id: 1,
//     name: "Alex Rivera",
//     role: "Software Engineer at Google",
//     image: "https://static.vecteezy.com/system/resources/thumbnails/033/129/417/small/a-business-man-stands-against-white-background-with-his-arms-crossed-ai-generative-photo.jpg",
//     quote: "Found my dream tech job in just 2 weeks!",
//     logo: "data:image/png;base64,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"
//   },
//   {
//     id: 2,
//     name: "Sarah Chen",
//     role: "Product Manager at Meta",
//     image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQA4AMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAIFBgABB//EADgQAAIBAwIEBAMHAwQDAQAAAAECAwAEERIhBTFBURMiYXEGgbEUIzJCkaHBUtHwM2Jy4RUkNAf/xAAaAQADAQEBAQAAAAAAAAAAAAACAwQBAAUG/8QAJREAAgICAgICAwEBAQAAAAAAAAECEQMhEjEEQSIyE1FxYTMF/9oADAMBAAIRAxEAPwD5xwi00WzTZz3oN5dwwowXGqutY5JLVlifSM8qQfhrs7Zk3FSRSbbkcIS3MkhO+AelRGcZrpYWjcqTnFSQE9Nqp1WjGewtofUK0C8VaW0ELDYDnVLDAZn0jb1piNPCYxsdWaVNRkapNdDEEcDxsFOGqrkhKzlQ2aPNCwkHhZBoaJNHIJHQ7US0CepakyfeA01DaNBIJMZWji+jkQeTzAdqsLKJryEjTSpzkuzuyqupIp925gVVs3mwN8HarG9sNErZPyodvaam2FMi0kd/SVq5YeGBuas4jJAmC2aFb20aSZbY111MofCmhlszsd4e+ucVo7eRI4Sznb2rP8GhLtmrC4Z5XEMIJGcKBzY1Pxt7LMeo6CXfENQARVA7v/AoC3TnBRww9AK0tv8ABV9d8O1giGXOrS3P2rP8U4LdcLkK3UMkfaReRp8eCVGOMyMd0iN/7Cbdx0q5jlieEMjLjpisZd3RQeHI+VOwbtReE3kkJKMSYyf0oZ4k9o5SNgHRSCSDnpUhMCDp9xVZn8Mg5c81NLkMeZPtSONDLLRnJiVupoDSsM43zUre6W4zAQI/DGcyDAPtUHkhLaPGJ/4ITXBJDEdwTEo+ZocsoC7k86BI0SQlIY5mkPJ2IUD5DnQ0L6QGt42buzt9Kyjm6DeINtxvQ2uEWRgzqBjqcUCeza4fW+lAOkeQKEnD9JIDYP8At2+lGkqA5MyVjctqYkNhulNSvCkbMGOqus5rfw1wu+Kr+JIVYnbBPSmr5SJKYjIxeRiepqIfRXKDimLa28eXSTtin2kgV2CW5KkFSQanFcYmDtk1O6sGhcaTkUN7ZowpxzrLizX2WcN7AXDNjlzNOobe8ibcAYqqh4dJKuSN6i0ZtQVGx5bUqUU9JmBJYlhcrGVJFM2l9NbeWNSx6gUjC6LGxY5c9TReFXIikfUuc1vHRwW6mNy+WUqalbssBGetLXF3qmONhmjeIkwU9RW06MJ3r53Bxmk0j1HJJp6WNJVB1cqhaBFuNDA4rulYUVui44V91ZSS55Db3re//m/CVaOTiFxEDI2yHmAPSsVNFo4bEqHBkOf3r6ZbXEHAOA2MVxdtBI0QCqqBsnmTvU8pM9HFBGwijUDlVdx21hvLZ4Zo1ZWB6UHgHGl4nauyyxy6DjUgI/UdDSvFePW8Xl0vK3aNc4oeXpDuN7Pj/wAW8CawuX0DVCx27is3C7xnTk4HTvX1b4leK9sJG8GRSfw6xjevlswIk1afwNh6pxytUyTJGno13AXN1aaJNyhwfbpVxBZpG/4QKyvwtdaLhlJxkY/StWsuplb0qbKny0FGg/gIrgLgZFLmNVlIx8698XVJnOMdKg0uX9qBWERk0AsWBwO1ewBHA8p3J59KhITnWg6VCFxqyxIAzgDvijQLDMo0aQRjuxpcP4YfJXnv1zRIrt1Xw9IKnnntQZ5QAdKgAntXGGNtLZ3K4XAxT1xZK8J1DLcsVC2lEZCswzjpTiKJQz6iNqKUpciOzP3MXg4jIG9Nx2TCMSRjDCmZLJJty2SDTAfwI1jzzNG5utHIqjHK8oDA7eleX7BdC7Zq6kNuoGsjUaD/AOLjuJw7MCKxTp2wSjHE54mxg4HLahSztdOAw9av7jhqPMVjXYCqyWyaKfwztk4pkckH0dZXNC43VWPsKh503wQa2ljwjwYFeQBsjkareKxWzyBYwBWLPFyo0z0ETynenooSvlqwj4edK+GMZo6W8VodcxyfWmOVgydCItpcbAge1Ghh+z5d+Z60Vr1WYqgzQXV58jfHT1oLvs5S2aIoZrSzwDliuPctt/FfZn4fb3MQWYIQo21LmvkULpDHbtgGO3kj1emGyf4r6lxK+WGULJKIbYqGMg65OMfuKllLiz2cStUG4bwiz4c8skQChgS2nkayqfDh4kZnDuA5Jwr4Iz1rR8R4ibG0kCgZK6RqGMe+apeC8SNjIZJ3iPiAKyxtkD1rUwnAoZvh+ThcMwurqSRCvkR8ZzXzG+YpdSBdwGbVjruK+ufGHEYyj53IUnPavl3Doo7hPHJydRyO4Of707C7tk/kR40ifBlMd6oBwCetbRLeUxRvGykEbgNWLI0yqjNoBA8/YitVwa4WewOVBZWwxzyzWZI2J2Ft1MzMsY1Mv4h61JrO6yWEEmO4GakdEMcoC7kiq+S6mT/TlkXJ/K5paQxNexuSG70Z8CXA66DSQlKE5JyOYr2PjPErZvuL6dT/AMs/WpPxm9lbVNJG5xzeFDn9qLjJehblvQNZdWpttsAHNCmnJz6Uew4mXd0fh9hIQc7xkfzU7ziNnNEUfg8Eci83gcjV8q2mvRjZjuFOPtKtL5sjfJq8dUaYhdlPTNZrh9tLOxZWK1ZtP4brGWy3XejyRt0iWn2T4gjWba0bIqsmu2uZAFJyNzvR+LXIkVUVgSTSNrbyFyUx60cI0tnMbSR5nRWBOOdW0UJYDRJpPqaUtYmVS+R60rNflJiqsR7UuS5dGUXmh4F3fJI55qluJSL1WkbYHNXXD1+0QjVuTyqV5wNI8O/5qRGahKpHUDn4lKIYzGSUpSAxTzAueufnS15I0P3K8hyoMcmiInByadGCStAtWaCaZV2jxjHeqO9E0xOSSKHDLJIwBJxmrDxEUBSM0aTWzlGmIRQNEmoA07Zv41xDCvVx9aNKrtFhE2qXCbNlnMh2bbT/AJ7ZrpVVj4wUpIYjuy3GJoG3hfyuv9u3evqfwreRcX4W3D7wiSe1XwnBO7xkbN/Hyr5LfxG24kZVyPEOsH1p614tPa8Ts76zkMcmV36EE7qe4pGRXTR6ONuNn2C7lvLey+zSQw3cYUqrSJ58YxzzWOWyjm4s99cxLDDHuVXARBnkB1NaW14rJxK0aQRojjYjO2e9ZP4ha7lIgaUFc7Ki4Hv60PO9DnFLaRmvjzjiyaoINpJmxt0HaqzgcUa2iH8y5Rv4ruP8J8No5GyTq3pOzuhZXOp8mKQkOPoRVMElDRFNt5G2EvZjFqGnUCoO/X+24NOfDN2NbqWMeWxGx3BPPBpS5ljJaGcYOTpbtTnBljg4e0eVLBw6e+dv5rG/iY1s1KtrjZJlAkIz/wAh3qqeLzt70/BMG8y8k2Ht2r0Ro75A5k7VLzoPhZSPC3iHtmomF9JbtV5PbrsSMb4pe8t1WJgDvypkc16B4C/CYVR3cjny96kbYMrlhnbOaLw6PEZbOd8074badAXOoUakA0fO7aWS2kaPBx6UrdTh5yVP71ZWyFpmEhHmHOqq+tzDMwBzk1RHb2S3qiBy3mHSpwXUsLNgZzXkYOgZpuZI44c/mIo9dHBLTxZ42OvSG6UvLojLIRk1Gzl0eVmwpNaO2t7F4M5GoD3pUpcWYJcOvJ4Y1jXHoa0iXOiyL3eDt5ayFwSlz91yBpi54i9wkdufKo5ml5MSnTNaYWQpqLyb53oXixzS6AAFryIRhiD5gRXG3xkjbJ2olEHhvYeWKKNgENWFrBHKF1Cq6zt2eYBzmtAlv4K5AomxsUl2MLDGUCgftQpJreKcWwXGkB5HA/0+x/zvREkjSJpHyVGwxS7vC+oxBxJOcDC51GunB8bfRTixTpT9CvxI4ZI2UqSuCCvL1/v86qrJji2B3IlP7kVC58R5pLXSV3BAJ5U/wuNJ7uKGPcJgE+tJUajQ3lykfTvhkl7IjfIODRZLANI7soJxtRvh6ExwyAKQDjG3OjfEZjTg92qOiSeE2CWxUtPkV+j5r8WcStdLW1vh3Bwz9vbvWe4lZnwEZVJOjPzNaK24Xw3h1kl3ezpJcSprCFScfKq2/lS4sZJohsnQjG3L6VZD4ojnFvYitu17bKWz46jTKvU9mFHsALO4WO4jSTHJsHP6VC4uI3lSWM6fKDkbY5Z/mjzyyQmOWKQ6mXG3Si70dFcmamzjtngCxTI0gHmA5/pUGikiJYbntWRhmMMglTysDkEfzW0sbxb6zSUac8mHY12bDLEr7QeTC4bTEJL4qcTxMqnfOM15NcQ3aDwiGA3ODVi1rHgnGc86Qu+GREaowobnjkR7EUhQxva0Jbkj2wZVTSRvnapm7xIuGwBtnNV5SWDoZB1ycH9f+q98UzSffKYydsvsPTet/G7sFzXsxqzSDSADq5UG7V9eXzvV83D4/FDLio39hrQBdzTlljZNxKdIgsSsTz6UK7BLKtPXFs0Mag58po1qkEhPiYzjHKj5rsxqiqggEhwxp20JUeEn4s7GnfsKNINI0jvirCHh6WwEuASDk0uWePRydFNJZTW2HfcNvyrorU3B5b1c8SvY3RdhjlSnDZIxcZJOK6OSTV0C5WHi4YI4g2N8VKO0ZvNjaraRBJDlD0oXD5d2iIrYvkjnsVgiKMCBvVnIW8AD8zYFBLokoBosk6yTRKvQ5PyrYb0FiXOai/YlfSacxqcIBsP5onDJLeYGGQSBlPlCEBl9VNJ3Zy2eq5OO4o/CYI2LHUCy+Ye3f5H9qr8mvxn0nkRSjS9Ct1IJ74KwJl0sqSsMEnBxmqmGFoUZiCGYBcHv1q6ukEvESjnBbDaf6F6/2qukl8eXO+NR+tS4E2Q4YcphUklC4WWRR/tcivHycFyWxv5jn61IDFc+AN69HikqPVaSDXd8Z4Y4QM6RgDqP7ikNc1u8ofeLw8OD1B5H9abt9OSCvmcYz6ZxgVYXymKzjY6GIxgnqDzHtUGWoypI8ryV8qRnbaMyKjpsyEqR/UOh/irC4y8DYXToIXyjA9ahY6Y5xoACMTvz27VLiUkIIt7c5041EdPSsSuSAxR2hfJx7VcfCtzonlgOyyLrUeo2P1qnJ2ovCpvB4pbybY1aT7Haq8seWNoryr40b0MSNPQjNc6eTIA3HOvEYb9DpzjtXrNpCrywnOvIrR5zYnKuQcrnHekJ4AcYBGOVOn8xbvSzyA5wW2o4toBpMp4FMitoA8RcZHagT3EiuFI3U4JrxLjTKRnzEadtt6mjq7S28u5X8JHWp2ndsyv0SZIbhYYnH+o3mftUIuE+FM2CCinJPelZxJbyxJLqUgZwe1OxXUoDtHhowMZPeifOK0Da9jVsUilJChg4wuRSt2bvSY4l1J0oUJeSMoFbVnykdasLRvswBmD4Hfeh5ODsLjFozE4mQgTKwGetWfD4PKHxVxxtY7qwMsSqpP5cVS2s7alj6Cq8OX8sSXJCnourWT8hqDxvDIZYyTmmLWMEa+tN6Y/DIIFM2kY1op3fO786LEV+1R47H6UldvpuMjdQaLbSCS9hI9fpWY/sg/G/7R/qOmCMcPqUD8w3xUxqggaSELJoTC6CeR7/AK0O4/EfalLgvBcQtFJhnUHPqcbe2Kq8jaSPovNlxGpUaGB7hmzI8ePcnl+1IW6b701K73cxbVmFTgAjme9eFRnptTPHxtRt+zvHxUuX7PMY3oZyz53wOlEIJrtNVUUtgZcsmlTyHOi3stwbCOZznIKSYGPN3x9ai0ZKtoPnAJHyqd5dpcWIZciQ4LL0JGxqDyI/Po83yYvmILcL4ciEgb5BB61G3nEgIkRMjmwGCffvQnj7YxUYBomPXNNWNI6KakrGzQmYowdc5U5HvRTyoUg2xTa0UTR9C4ZxS1uIYl4qhiZlGm8jXIwf616+9NcTsbm2h+0eSW1cjRPEdSEY79KzvB9M/B4NYzhdOPanLTiN7wiUtaS/csfvIX8yOOxU7V5UoJyo8eTcWzi+fnQ1kK407Z5rVxGeD8b8tq0fDL1jgQysfBkP+1j+E+hqm4laXXDZmivYGhcctXIj0PIis48ewbsyFofEvJI3kHUhiM1YcKnEUxkmg1HOxP1pSayu7KWQs6qyqMjnzokIIQSMx1HkO9BNprQMW4hvJd35muCTHnFAu7ZrZGU58Njkb0e3kUsPEUKhOMAfvQOJPLI32dSXP5c9KXFvlRjPLTikltpibSUTJXHPNKLe3Tzs2slC24NHteFXBkTUuFPM9qZisoomkLMWA5HpTJSxpsHkyd405tlAfY9ulCtYGDZyMim7azmmjKKCQd6kljOB5FYnkaZiaSFTcntBoZyibmnoHjnjJaTBqtNpc6PNGw+Vew2c2gnDAUxugLZ11AmT5siicOjjEuvqqk0hNJoyrc6a4RJiZyQCPDJwfcV0EnNFPhJvPG/2eXbrJjOx/DnpSF3LGZ40VwzLiNcd+9WN5csylY444x10jeqG5Xw5UdfxahVs4Nu30e95MW3yfSL4IscSoBjTsKEag0407negmf2pylosco+ugxrzOByoBn9qj43rW8gLQ1GW8RShw2dqWv1jjXwkxktk/wCdq4SOR93gsN/lSjuWZmc5Ync1PNOc/wCEeW5zr0jjgDagMwEib753qTvQGbOabJi8kl6LHNDepg5GRyIqD1tlEnas0PwtLqtZomO6vkfOrG4TI9KyfDL2WymZodJLjcMMjarNuMXDD7yOPGfy5FQZccudo8nO4qbC3SBUyvlwf1p+z+JLuO1FpfabyyHOGcE6f+Lc1PttVLNxHWAvh4LHnnlXHLJnv2oa1Uia/wBCjzu6qmNZzgt3p3h5j1kLGRJGpIDVXPOVeC7jVEVmxp7GnAyzMzrM/wBsdsCMDClaknj0GiWQUkyBk15HGTodyR5u1MTSOInmmjVdACqjbH3oCTt92ZcIsm6kcqXxfoKkMeJcC4aGPBD8g3OjcZ0wtFFENtHm96rZbvxp9U2zA7MO1FfEqh3djp5ULhTVgV+iUU01uRJGd8YAqw4LxICZzdsNWdlxQeD2Mt9NqOPBQ70TjHDTDNi1DNnmcVTGLSsD/DXxiGVBsMEUZLBXH4Rj0FUfwrcSzFopI8KgxnFaiM4OkU3T2Y36Km74Jauhygz7VVcU4bBw2yE0Yw0h0Z/f+K1uQWxnesx8b3KLHBbgZfdzjoKbhVzRV4O88f8ADKSsOe1IxxfauIW8H9cgFSkkXplTT/wnB9o+I7XIGIlaQ56+XH1Iq/K/iz1fJyXjYHjlutld+FGckKCfnVUZGzucVcfEUsNxxm7ktlzGXwGG4YgAEj9KrViXqv7UuEHxQONS/HEDrY/mFeFz/WKa0rjYVB49+VHwYbjJexYSnPlJzXjuevM0Ro27ge1Q8Irv17ig4sTLkCbP5tq80NpO1FwAdlYt3NRlDsNzj6V1CZLQeB8xL7YqTGl7RwYzgnY4ourJxRp6HRncEStlZ7lVXGTnGeVFimE908CIxkBPShW8giuonf8ACrZNT4Qui8lmkZUB3XPXJqfLptnn+SvmhgwyefWpBAHMdc/9U2i5XHQCpPMjxswxn0oKPg1MpWJqimlQMxHIINgKnbOzygk7x/hPava6hf1MiWt1ey+OrPpkJQbuM1SEmaYamIAY4AOwrq6gxKkbP7Ddv/8AJM3MhsA1Y2ygEDoQK6urpdhro2HBo0jtVKKAW5+tMyRqbyLnyO1e11M9E/sJw2FIJ5xHkBmyd6sEPmNdXVhjJEYyRzxWC+JJXl4lPrY+Q6R7Curqs8T7Ho/+f93/AAzs3IntT/wncPDxZyuD/wCtKN+mBn+K6uqjP0ynyehdRrVSe2a8K45E/rXtdT60XLoBKSvX9aGJCdjjFdXUDESfyJD/AA1CXYZyT715XUJk+gYZn/MR7bVFkBYAkkeprq6lkwWJFWDIHPnXjKNINdXUTWhjVRRDA1oO7U6FClWH6GvK6p59nn+T9h4xqLCFwMEqScdSSaBGSDXV1Rx7Yt+j/9k=",
//     quote: "The job matching algorithm is incredibly accurate",
//     logo: "data:image/png;base64,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"
//   },
//   {
//     id: 3,
//     name: "Mike Johnson",
//     role: "Data Scientist at Amazon",
//     image: "https://images.pexels.com/photos/2955375/pexels-photo-2955375.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//     quote: "Best platform for tech professionals",
//     logo: "data:image/png;base64,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"
//   }
// ];
// function TestimonialsSection() {
//     return (
//       <div className="bg-gradient-to-br from-slate-900 to-slate-800 py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             className="grid grid-cols-1 md:grid-cols-3 gap-8"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             {testimonials.map((testimonial, index) => (
//               <motion.div
//                 key={testimonial.id}
//                 className="relative"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.2 }}
//               >
//                 <div className="relative bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 h-full border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 shadow-xl">
//                   {/* Quote Icon */}
//                   <div className="absolute -top-4 -right-4">
//                     <div className="bg-blue-500/10 p-3 rounded-xl backdrop-blur-sm border border-blue-500/20">
//                       <Quote className="w-6 h-6 text-blue-400" />
//                     </div>
//                   </div>

//                   {/* Profile Section */}
//                   <div className="flex items-start gap-5 mb-6">
//                     <div className="relative w-16 h-16 flex-shrink-0">
//                       <motion.img
//                         src={testimonial.image}
//                         alt={testimonial.name}
//                         className="w-full h-full object-cover rounded-xl border-2 border-blue-500/30"
//                         whileHover={{ scale: 1.05 }}
//                         style={{ objectPosition: 'center' }}
//                       />
//                     </div>
//                     <div className="flex-1 min-w-0">
//                       <h3 className="text-lg font-semibold text-white truncate">{testimonial.name}</h3>
//                       <div className="flex items-center gap-2 mt-1">
//                         <p className="text-slate-400 text-sm truncate">{testimonial.role}</p>
//                         <span className="text-slate-600">•</span>
//                         <p className="text-blue-400 text-sm font-medium truncate">{testimonial.company}</p>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Quote */}
//                   <blockquote className="text-slate-300 text-lg mb-6 italic leading-relaxed">
//                     "{testimonial.quote}"
//                   </blockquote>

//                   {/* Company Section */}
//                   <div className="flex items-center gap-3 mt-6 pt-6 border-t border-slate-700/50">
//                     <div className="w-10 h-10 rounded-lg bg-white/10 p-2 flex items-center justify-center">
//                       <img
//                         src={testimonial.logo}
//                         alt={`${testimonial.company} logo`}
//                         className="w-full h-full object-contain rounded-lg"
//                       />
//                     </div>
//                     <div className="flex-1">
//                       <div className="h-1.5 w-full bg-gradient-to-r from-blue-500/50 via-blue-400/20 to-transparent rounded-full" />
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     );
//   }

//   export default TestimonialsSection;
// function TestimonialsSection() {
//   return (
//     <div className="bg-gradient-to-br from-slate-900 to-slate-800 py-20 mb-10">
//       <div className="container mx-auto px-4">
//         <motion.div
//           className="grid grid-cols-1 md:grid-cols-3 gap-6"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           {testimonials.map((testimonial, index) => (
//             <motion.div
//               key={testimonial.id}
//               className="relative"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.2 }}
//             >
//               <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 h-full border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
//                 <div className="absolute -top-3 -right-3">
//                   <div className="bg-blue-500/10 p-2 rounded-lg backdrop-blur-sm">
//                     <Quote className="w-5 h-5 text-blue-400" />
//                   </div>
//                 </div>

//                 <div className="flex items-center gap-4 mb-4">
//                   <motion.img
//                     src={testimonial.image}
//                     alt={testimonial.name}
//                     className="w-16 h-16 rounded-full border-2 border-blue-500/30"
//                     whileHover={{ scale: 1.05 }}
//                   />
//                   <div>
//                     <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
//                     <p className="text-slate-400 text-sm">{testimonial.role}</p>
//                   </div>
//                 </div>

//                 <blockquote className="text-slate-300 mb-4 italic">
//                   "{testimonial.quote}"
//                 </blockquote>

//                 <div className="flex items-center gap-2 mt-4">
//                   <img
//                     src={testimonial.logo}
//                     alt="Company logo"
//                     className="w-8 h-8 rounded-full bg-white/10 p-1"
//                   />
//                   <div className="h-1 w-full bg-gradient-to-r from-blue-500/50 to-transparent rounded-full" />
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </div>
//   );
// }

// export default TestimonialsSection;


import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Alex Rivera",
    role: "Software Engineer at Google",
    image: "https://static.vecteezy.com/system/resources/thumbnails/033/129/417/small/a-business-man-stands-against-white-background-with-his-arms-crossed-ai-generative-photo.jpg",
    quote: "Found my dream tech job in just 2 weeks!",
    logo: "data:image/png;base64,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"
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Product Manager at Meta",
    image: "data:image/jpeg;base64,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",
    quote: "The job matching algorithm is incredibly accurate",
    logo: "data:image/png;base64,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"
  },
  {
    id: 3,
    name: "Mike Johnson",
    role: "Data Scientist at Amazon",
    image: "https://images.pexels.com/photos/2955375/pexels-photo-2955375.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    quote: "Best platform for tech professionals",
    logo: "data:image/png;base64,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"
  }
];

function TestimonialsSection() {
  return (
    <div className="bg-gradient-to-br from-slate-900 to-slate-800 py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="relative bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 sm:p-8 h-full border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 shadow-xl">
                {/* Quote Icon */}
                <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4">
                  <div className="bg-blue-500/10 p-2 sm:p-3 rounded-xl backdrop-blur-sm border border-blue-500/20">
                    <Quote className="w-4 h-4 sm:w-6 sm:h-6 text-blue-400" />
                  </div>
                </div>

                {/* Profile Section */}
                <div className="flex items-start gap-4 sm:gap-5 mb-4 sm:mb-6">
                  <div className="relative w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0">
                    <motion.img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover rounded-xl border-2 border-blue-500/30"
                      whileHover={{ scale: 1.05 }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-semibold text-white truncate">
                      {testimonial.name}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <p className="text-slate-400 text-xs sm:text-sm truncate">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="text-slate-300 text-base sm:text-lg mb-4 sm:mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                {/* Company Section */}
                <div className="flex items-center gap-3 mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-slate-700/50">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-white/10 p-2 flex items-center justify-center">
                    <img
                      src={testimonial.logo}
                      alt="Company logo"
                      className="w-full h-full object-contain rounded-lg"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="h-1.5 w-full bg-gradient-to-r from-blue-500/50 via-blue-400/20 to-transparent rounded-full" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default TestimonialsSection;