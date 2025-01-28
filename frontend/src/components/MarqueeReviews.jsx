// // // import { Marquee } from '@/components/ui/marquee'

// // // const MarqueeReviews = () => {
// // //   const reviews = [
// // //     {
// // //       id: 1,
// // //       name: "Alex Thompson",
// // //       role: "Software Engineer",
// // //       review: "Found my dream job through this platform. The career guidance was invaluable!",
// // //       company: "TechCorp"
// // //     },
// // //     {
// // //       id: 2,
// // //       name: "Sarah Miller",
// // //       role: "Data Scientist",
// // //       review: "The mentorship program helped me transition into tech seamlessly.",
// // //       company: "DataFlow"
// // //     },
// // //     {
// // //       id: 3,
// // //       name: "James Wilson",
// // //       role: "Product Manager",
// // //       review: "Outstanding resource for career development. Highly recommended!",
// // //       company: "ProductLabs"
// // //     },
// // //     {
// // //       id: 4,
// // //       name: "Emily Chen",
// // //       role: "UX Designer",
// // //       review: "The community support here is amazing. Great learning experience!",
// // //       company: "DesignHub"
// // //     }
// // //   ];

// // //   const ReviewCard = ({ review }) => (
// // //     <div className="mx-4 p-6 bg-white rounded-lg shadow-md w-80">
// // //       <div className="mb-4">
// // //         <p className="text-gray-600 italic">"{review.review}"</p>
// // //       </div>
// // //       <div className="flex items-center">
// // //         <div className="ml-3">
// // //           <p className="text-sm font-semibold text-gray-900">{review.name}</p>
// // //           <p className="text-sm text-gray-500">{review.role} at {review.company}</p>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );

// // //   return (
// // //     <div className="py-12 bg-gray-50">
// // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // //         <div className="text-center mb-8">
// // //           <h2 className="text-3xl font-bold text-gray-900">What Our Users Say</h2>
// // //           <p className="mt-4 text-lg text-gray-500">
// // //             Join thousands of satisfied professionals who have advanced their careers with us
// // //           </p>
// // //         </div>

// // //         <Marquee className="py-4" pauseOnHover speed={40}>
// // //           {reviews.map((review) => (
// // //             <ReviewCard key={review.id} review={review} />
// // //           ))}
// // //         </Marquee>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default MarqueeReviews;
// // import { cn } from "@/lib/utils";
// // import { Marquee } from "./ui/marquee";


// // const reviews = [
// //   {
// //     name: "Jack",
// //     username: "@jack",
// //     body: "I've never seen anything like this before. It's amazing. I love it.",
// //     img: "https://avatar.vercel.sh/jack",
// //   },
// //   {
// //     name: "Jill",
// //     username: "@jill",
// //     body: "I don't know what to say. I'm speechless. This is amazing.",
// //     img: "https://avatar.vercel.sh/jill",
// //   },
// //   {
// //     name: "John",
// //     username: "@john",
// //     body: "I'm at a loss for words. This is amazing. I love it.",
// //     img: "https://avatar.vercel.sh/john",
// //   },
// //   {
// //     name: "Jane",
// //     username: "@jane",
// //     body: "I'm at a loss for words. This is amazing. I love it.",
// //     img: "https://avatar.vercel.sh/jane",
// //   },
// //   {
// //     name: "Jenny",
// //     username: "@jenny",
// //     body: "I'm at a loss for words. This is amazing. I love it.",
// //     img: "https://avatar.vercel.sh/jenny",
// //   },
// //   {
// //     name: "James",
// //     username: "@james",
// //     body: "I'm at a loss for words. This is amazing. I love it.",
// //     img: "https://avatar.vercel.sh/james",
// //   },
// // ];

// // const firstRow = reviews.slice(0, reviews.length / 2);
// // const secondRow = reviews.slice(reviews.length / 2);

// // const ReviewCard = ({ img, name, username, body }) => {
// //   return (
// //     <figure className={cn(
// //       "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
// //       "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
// //       "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
// //     )}>
// //       <div className="flex flex-row items-center gap-2">
// //         <img className="rounded-full" width="32" height="32" alt="" src={img} />
// //         <div className="flex flex-col">
// //           <figcaption className="text-sm font-medium dark:text-white">
// //             {name}
// //           </figcaption>
// //           <p className="text-xs font-medium dark:text-white/40">{username}</p>
// //         </div>
// //       </div>
// //       <blockquote className="mt-2 text-sm">{body}</blockquote>
// //     </figure>
// //   );
// // };

// // const MarqueeReviews = () => {
// //   return (
// //     <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
// //       <Marquee pauseOnHover className="[--duration:20s]">
// //         {firstRow.map((review) => (
// //           <ReviewCard key={review.username} {...review} />
// //         ))}
// //       </Marquee>
// //       <Marquee reverse pauseOnHover className="[--duration:20s]">
// //         {secondRow.map((review) => (
// //           <ReviewCard key={review.username} {...review} />
// //         ))}
// //       </Marquee>
// //       <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
// //       <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
// //     </div>
// //   );
// // };

// // export default MarqueeReviews;
// import { cn } from "@/lib/utils";
// import { Marquee } from "./ui/marquee";


// const reviews = [
//   {
//     name: "Jack",
//     username: "@jack",
//     body: "I've never seen anything like this before. It's amazing. I love it.",
//     img: "https://avatar.vercel.sh/jack",
//   },
//   {
//     name: "Jill",
//     username: "@jill",
//     body: "I don't know what to say. I'm speechless. This is amazing.",
//     img: "https://avatar.vercel.sh/jill",
//   },
//   {
//     name: "John",
//     username: "@john",
//     body: "I'm at a loss for words. This is amazing. I love it.",
//     img: "https://avatar.vercel.sh/john",
//   },
//   {
//     name: "Jane",
//     username: "@jane",
//     body: "I'm at a loss for words. This is amazing. I love it.",
//     img: "https://avatar.vercel.sh/jane",
//   },
//   {
//     name: "Jenny",
//     username: "@jenny",
//     body: "I'm at a loss for words. This is amazing. I love it.",
//     img: "https://avatar.vercel.sh/jenny",
//   },
//   {
//     name: "James",
//     username: "@james",
//     body: "I'm at a loss for words. This is amazing. I love it.",
//     img: "https://avatar.vercel.sh/james",
//   },
// ];

// const firstRow = reviews.slice(0, reviews.length / 2);
// const secondRow = reviews.slice(reviews.length / 2);

// const ReviewCard = ({ img, name, username, body }) => {
//   return (
//     <figure className={cn(
//       "relative w-80 cursor-pointer overflow-hidden rounded-xl border p-6 mx-4",
//       "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
//       "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
//     )}>
//       <div className="flex flex-row items-center gap-3">
//         <img className="rounded-full" width="40" height="40" alt="" src={img} />
//         <div className="flex flex-col">
//           <figcaption className="text-base font-medium dark:text-white">
//             {name}
//           </figcaption>
//           <p className="text-sm font-medium dark:text-white/40">{username}</p>
//         </div>
//       </div>
//       <blockquote className="mt-3 text-base leading-relaxed">{body}</blockquote>
//     </figure>
//   );
// };

// const MarqueeReviews = () => {
//   return (
//     <section className="py-16 bg-background">
//       <div className=" mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
//             What Our Community Says
//           </h2>
//           <p className="text-xl text-gray-600 dark:text-gray-300">
//             Join thousands of satisfied professionals advancing their careers
//           </p>
//         </div>

//         <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
//           <Marquee pauseOnHover className="[--duration:20s]">
//             {firstRow.map((review) => (
//               <ReviewCard key={review.username} {...review} />
//             ))}
//           </Marquee>
//           <Marquee reverse pauseOnHover className="[--duration:20s]">
//             {secondRow.map((review) => (
//               <ReviewCard key={review.username} {...review} />
//             ))}
//           </Marquee>
//           <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
//           <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MarqueeReviews;
import { cn } from "@/lib/utils";
import { Marquee } from "./ui/marquee";


const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure className={cn(
      "relative w-80 cursor-pointer overflow-hidden rounded-xl border p-6 mx-4",
      "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
      "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
    )}>
      <div className="flex flex-row items-center gap-3">
        <img className="rounded-full" width="40" height="40" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-base font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-sm font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-3 text-base leading-relaxed">{body}</blockquote>
    </figure>
  );
};

const MarqueeReviews = () => {
  return (
    <section className="py-12 bg-background">
      <div className="text-center mb-2">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
          What Our Community Says
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Join thousands of satisfied professionals advancing their careers
        </p>
      </div>

      <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden bg-background">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
    </section>
  );
};

export default MarqueeReviews;