'use client'

import Link from 'next/link';
import navIcon1 from '../../public/navIcon1.svg';
import navIcon2 from '../../public/navIcon2.svg';
import navIcon3 from '../../public/navIcon3.svg';

const Footer = () => {
    return (
      <footer id="footer">
        <div className="p-10 bg-gray-900 text-gray-200">
          {/* <section className="max-w-7xl mx-auto">
            <h4 className="text-xl font-semibold mb-4">SEE MORE OF MY PROJECTS</h4>
            <div className="">
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
          </section> */}
          {/* Location */}
          <div className='grid grid-cols-1 md: grid-cols-2 lg:grid cols-4 gap-2'>
          <section className="mb-5">
            <h4 className="text-xl font-semibold mb-4">FIND OUR RESTAURANTS</h4>
            <p>
              <strong>123 Addy Way, Notacity, 98765 </strong><br /> <strong>(123) 456-7890</strong>
            </p>
          </section>
          <section>
            <h4 className="text-xl font-semibold mb-4">WORKING HOURS</h4>
            <p>
              MONDAY THROUGH FRIDAY 9:00 - 24:00 <br /> SATURDAY & SUNDAY 12:00 - 21:00
            </p>
          </section>
          <section className='mb-5'>
            <h4><strong>Useful Links</strong></h4>
            <ul>
            <li><Link href="/" target="_blank">Home</Link></li>
    <li><Link href="/about" target="_blank">About us</Link></li>
    <li><Link href="/services" target="_blank">Services</Link></li>
    <li><Link href="/terms" target="_blank">Terms of services</Link></li>
    <li><Link href="/privacy" target="_blank">Privacy Policy</Link></li>
            </ul>
          </section>
          <section className='mb-8'>
          <h4>Join Our Newsletter</h4>
          <p>Join 35,000+ others to never miss our exclusive drops again!</p>
          </section>
        </div>
        </div>
        <p className="text-center mt-8">Copyright 2023. All Right Reserved</p>
      </footer>
    );
  };
  
  export default Footer;
  