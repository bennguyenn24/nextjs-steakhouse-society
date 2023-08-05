'use client'

import navIcon1 from '../../public/navIcon1.svg';
import navIcon2 from '../../public/navIcon2.svg';
import navIcon3 from '../../public/navIcon3.svg';

const Footer = () => {
    return (
      <footer id="footer" className="footer bg-gray-800 text-white py-8n ">
        <div className="footer-container mx-auto px-4 sm:px-6 lg:px-6">
          <section className="mb-8">
            <h4 className="text-xl font-semibold mb-4">SEE MORE OF MY PROJECTS</h4>
            <div className="social-icon flex space-x-4">
              <a href="#" className="block">
                <img src={navIcon1} alt="" />
              </a>
              <a href="#" className="block">
                <img src={navIcon2} alt="" />
              </a>
              <a href="#" className="block">
                <img src={navIcon3} alt="" />
              </a>
            </div>
          </section>
          {/* Location */}
          <section className="mb-8">
            <h4 className="text-xl font-semibold mb-4">FIND OUR RESTAURANTS</h4>
            <p>
              123 Addy Way, Notacity, 98765 <br /> (123) 456-7890
            </p>
          </section>
          <section>
            <h4 className="text-xl font-semibold mb-4">WORKING HOURS</h4>
            <p>
              MONDAY THROUGH FRIDAY 9:00 - 24:00 <br /> SATURDAY & SUNDAY 12:00 - 21:00
            </p>
          </section>
        </div>
        <p className="text-center mt-8">Copyright 2023. All Right Reserved</p>
      </footer>
    );
  };
  
  export default Footer;
  