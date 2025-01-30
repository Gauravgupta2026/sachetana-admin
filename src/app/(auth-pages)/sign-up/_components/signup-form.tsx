// "use client"

// import { useState } from "react"
// import Link from "next/link"
// import { Input } from "@/components/ui/input"
// import { Button } from "@/components/ui/button"
// import { Label } from "@/components/ui/label"
// import { Divider } from "@nextui-org/react"


// interface SignUpFormData {
//   email: string
//   password: string
// }

// export default function SignUpForm() {
//   const [formData, setFormData] = useState<SignUpFormData>({
//     email: "",
//     password: "",
//   })

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     console.log("Form submitted:", formData)
//   }

//   return (
//     <div className="w-full max-w-md space-y-8">
//       <div className="space-y-6">
//         <div className="flex items-center space-x-4">
//           <div className="w-12 h-12 bg-black rounded-sm flex items-center justify-center">
//             <span className="text-white font-serif text-2xl">R</span>
//           </div>
//         </div>
//         <div>
//           <h1 className="text-2xl font-medium">Get Started</h1>
//           <p className="mt-2 text-gray-600">Welcome to Research Spotlight - Let's create your account</p>
//         </div>
//       </div>
//       <Divider/>

//       <form onSubmit={handleSubmit} className="space-y-6">
//         <div className="space-y-2">
//           <Label htmlFor="email">Email</Label>
//           <Input
//             id="email"
//             name="email"
//             type="email"
//             value={formData.email}
//             onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//             placeholder="gaurav.mitmpl2022@learner.manipal.edu"
//             className="w-full px-3 py-2 border rounded-md"
//             required
//           />
//         </div>

//         <div className="space-y-2">
//           <div className="flex items-center justify-between">
//             <Label htmlFor="password">Password</Label>
//             <Link href="/forgot-password" className="text-sm text-gray-600 hover:text-gray-900">
//               Forgot?
//             </Link>
//           </div>
//           <Input
//             id="password"
//             name="password"
//             type="password"
//             value={formData.password}
//             onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//             className="w-full px-3 py-2 border rounded-md"
//             required
//           />
//         </div>

//         <Button type="submit" className="w-full bg-black text-white hover:bg-black/90">
//           Sign Up
//         </Button>

//         <div className="text-center text-gray-500">
//           Already have an account?{" "}
//           <Link href="/login" className="text-black hover:underline">
//             Log In
//           </Link>
//         </div>
//       </form>
//     </div>
//   )
// }


// AFTER FIXING THE CODE FOR CONSISTENT RENDERING
// TO REDUCE THE HYDRATION ERROR CAUSED BY 
// RENDERING DIFFERENCES IN SERVER AND CLIENT SIDE

"use client";

import { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Divider from "@/components/ui/divider";


interface SignUpFormData {
  email: string;
  password: string;
}

export default function SignUpForm() {
  const initialFormData: SignUpFormData = {
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState<SignUpFormData>(initialFormData);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically handle form submission to your API
  };

  return (
    <div className="w-full max-w-md space-y-8">
      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          <div className="w-14 h-14 bg-black rounded-sm flex items-center justify-center">
            <span className="text-white font-serif text-2xl">S</span>
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-medium">Get Started</h1>
          <p className="mt-2 text-gray-600">Welcome to Sachetana - Let&apos;s create your account</p>
        </div>
      </div>

      <Divider />

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
            placeholder="gaurav.mitmpl2022@learner.manipal.edu"
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Password</Label>
            <Link href="/forgot-password" className="text-sm text-gray-600 hover:text-gray-900">
              Forgot?
            </Link>
          </div>
          <Input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={(e) => setFormData((prev) => ({ ...prev, password: e.target.value }))}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>

        <Button type="submit" className="w-full bg-black text-white hover:bg-black/90">
          Sign Up
        </Button>

        <div className="text-center text-gray-500">
          Already have an account?{" "}
          <Link href="/login" className="text-black hover:underline">
            Log In
          </Link>
        </div>
      </form>
    </div>
  );
}
