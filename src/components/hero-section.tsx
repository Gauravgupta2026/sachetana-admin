// import { Button } from "@heroui/react";
// import React from 'react';
// import { Vortex } from "./ui/vortex";

// export default function Hero() {
//   return (
//     <section className="py-2 mx-14 bg-white">
//       {/* <div className='bg-emerald-50 py-36 rounded-xl'> */}
//       <div className=' py-36 rounded-xl border-1 border-gray-800'>
//         <h1 className="text-2xl text-center md:text-5xl py-2 font-serif text-emerald-800 mb-4">
//           A mental wellness partner<br />
//           to help you declutter
//         </h1>
//         <div>
//           <p className="text-center text-gray-600 text-sm  mb-8 max-w-2xl mx-auto">
//             We help students to have control over their mind and get better results
//           </p>
//         </div>
//         <div className='text-center mb-20'>

//           <Button radius="none" variant="flat" className="px-8 py-3 hover:bg-emerald-700 hover:text-white">
//             Learn More
//           </Button>

//         </div>

//         {/* Conversation Module */}
//         {/* <div className="bg-white mx-36 py-48 rounded-2xl">
//           <div className=''>
//             <h2 className='text-center'>Conversational Ai</h2>
//             <div className='bg-green-50'>

//             </div>
//           </div>
//         </div> */}
//       </div>
//     </section>
//   );
// }

import React from "react";
import Image from "next/image";
import { BackgroundLinesDemo } from "./newHero-section";

export default function Hero() {

  return (
    <section className="py-2 mx-14">
      <div className="py-2 rounded-xl ">
        
        <BackgroundLinesDemo />
        
        <div className="mt-14">
                    <Image src="https://raw.githubusercontent.com/sidiDev/remote-assets/main/Safari%20(Big%20Sur)%20-%20Light.png" className="w-full shadow-lg rounded-lg border" alt="" />
                </div>

        {/* Conversation Module (commented out) */}
        {/* 
        <div className="bg-white mx-36 py-48 rounded-2xl">
          <div className=''>
            <h2 className='text-center'>Conversational Ai</h2>
            <div className='bg-green-50'>
          
            </div>
          </div>
        </div> 
        */}
      </div>
    </section>
  );
}
