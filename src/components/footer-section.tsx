import React from 'react';


export default function Footer() {
    return (
    <footer className="bg-emerald-700 text-white py-10 px-4">
      <div className=" mx-20 px-20 py-10 bg-emerald-600 rounded-3xl shadow-2xl shadow-emerald-800">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-3xl font-serif mb-4 py-4 pr-16">Helping everyone declutter their mental queries</h3>
          </div>
          <div>
            <h4 className="font-semibold py-4">For MSME</h4>
            <ul className="space-y-2 py-4">
              <li><a href="#" className="hover:text-emerald-300">Our Solutions</a></li>
              <li><a href="#" className="hover:text-emerald-300">How it Works</a></li>
              <li><a href="#" className="hover:text-emerald-300">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold  py-4">For Students</h4>
            <ul className="space-y-2 py-4">
              <li><a href="#" className="hover:text-emerald-300">Student Program</a></li>
              <li><a href="#" className="hover:text-emerald-300">Career Insights</a></li>
              <li><a href="#" className="hover:text-emerald-300">Resources</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold py-4">About Sachetana</h4>
            <ul className="space-y-2 py-4 ">
              <li><a href="#" className="hover:text-emerald-300">About Us</a></li>
              <li><a href="#" className="hover:text-emerald-300">Careers</a></li>
              <li><a href="#" className="hover:text-emerald-300">Insights</a></li>
            </ul>
          </div>
        </div>
        <div className="px- pt-12 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 ">
            <a href="#" className="hover:text-emerald-300">Privacy Policy</a>
            <a href="#" className="hover:text-emerald-300">Terms & Conditions</a>
          </div>
        </div>
      </div>
      <div className=' Footer-note pt-20 '>Made with ❤️ in Manipal</div>
      <div className='Sachetana-footer max-w-full text-emerald-800 '>
        Sachetana
      </div>

    </footer>
  );
}

