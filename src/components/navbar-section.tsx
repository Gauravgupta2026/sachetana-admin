// import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@heroui/react";


// export default function NavbarSection() {
//   return (
//     <Navbar className="bg-white py-5  items-center justify-between">
//       <div className="flex items-center">
//         <span className="text-emerald-700 text-xl font-serif font-semibold">Sachetana</span>
//       </div>
//       <NavbarContent className="hidden md:flex space-x-6 text-sm" justify="center">
//         <NavbarItem>
//           <Link className="text-gray-600 hover:text-emerald-700" href="/features">
//             Features
//           </Link>
//         </NavbarItem>
//         <NavbarItem isActive>
//           <Link className="text-gray-600 hover:text-emerald-700" href="/customers">
//             Customers
//           </Link>
//         </NavbarItem>
//         <NavbarItem>
//           <Link className="text-gray-600 hover:text-emerald-700" href="/integrations">
//             Integrations
//           </Link>
//         </NavbarItem>
//       </NavbarContent>
//       <NavbarContent className="flex items-center space-x-4 justify-end">
//         <Link href="/login" >
//         <Button variant="flat" className="text-gray-600 hover:text-emerald-700">Login</Button>
//         </Link>
//       <Link href="/sign-up" >
//       <Button className="bg-emerald-700 px-8 py-6 rounded-md text-white">
//           Sign Up
//         </Button>
//       </Link>
       
//       </NavbarContent>
//     </Navbar>
//   );
// }


import {  Navbar,   NavbarBrand,   NavbarContent,   NavbarItem, } from "@heroui/navbar";
import Link from "next/link";


export default function Navigation() {
  return (

    <Navbar shouldHideOnScroll className="mt-8">
      <NavbarBrand>
        <p className="font-serif flex justify-start items-start">Sachetana</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem className="text-xs">
          <Link color="foreground" href="#">
            Dasboard
          </Link>
        </NavbarItem>
        <NavbarItem className="text-xs">
          <Link aria-current="page" href="#">
            Contact
          </Link>
        </NavbarItem>
        <NavbarItem className="text-xs">
          <Link color="foreground" href="#">
            About
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end" className="space-x-5">
        <NavbarItem className="text-xs hidden lg:flex ">
          <Link href="login">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/sign-up" passHref>
          <button className="bg-emerald-700 text-white text-xs px-6 py-4">
            Sign Up
          </button>
          </Link>
          
        </NavbarItem>
      </NavbarContent>
    </Navbar>

  );
}
