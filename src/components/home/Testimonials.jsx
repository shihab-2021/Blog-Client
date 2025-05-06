// import React from "react";

// function Testimonials() {
//   return (
//     <div className="bg-gray-100 p-2" >
//       <div className="flex flex-col md:flex-row gap-10 p-4 md:p-10 max-w-7xl mx-auto mt-10">
//         <div className="border-r border-gray-300  ">
//           <p className="text-xs tracking-widest uppercase mb-4">Testimonials</p>
//           <p className="text-2xl font-bold mb-4">What people say about our blog</p>
//           <p className="text-gray-600 leading-relaxed">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//             eiusmod tempor.
//           </p>
//         </div>

//         <div className="">
//           <p className="text-2xl font-bold mb-20">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua.
//           </p>
//           <div className="flex ">
//             <div className="flex gap-4">
//               <img
//                 src="/auther.png"
//                 alt="icon"
//                 className="w-12 h-12 rounded-full"
//               />
//               <div>
//                 <p className="font-bold text-lg">John Doe</p>
//                 <p className="text-gray-600 text-sm">New york, USA</p>
//               </div>
//             </div>
//             <div className="flex gap-4 ml-30">
//               <img src="/button1.png" alt="icon" className="w-12 h-12" />
//               <img src="/button.png" alt="icon" className="w-10 h-10" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Testimonials;

import React from "react";

function Testimonials() {
  return (
    <div className="bg-yellow-100 py-30 px-30 md:px-10 ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10">
        {/* Left Section */}
        <div className="md:w-1/2 pr-4 md:pr-10 border-r border-gray-300">
          <p className="text-xs tracking-widest uppercase text-gray-500 mb-10">
            Testimonials
          </p>
          <p className="text-2xl md:text-3xl font-bold mb-10">
            What people say about our blog
          </p>
          <p className="text-gray-600 leading-relaxed ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 space-y-8">
          <p className="text-xl md:text-2xl font-semibold text-gray-800 mb-15">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
            {/* Author Info */}
            <div className="flex items-center gap-4">
              <img
                src="/auther.png"
                alt="Author"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="font-bold text-lg">John Doe</p>
                <p className="text-gray-600 text-sm">New York, USA</p>
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <div className="flex gap-4">
              <img src="/button1.png" alt="Previous" className="w-12 h-12" />
              <img src="/button.png" alt="Next" className="w-10 h-10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Testimonials;
