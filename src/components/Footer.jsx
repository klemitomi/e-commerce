import React from 'react'
import { assets } from '../assets/frontend_assets/assets'


const Footer = () => {
  const copyright = '©';
  const year = new Date().getFullYear();
  const companyName = 'by Thomas Klement';
  const rightsReserved = 'All rights reserved.';

  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
            <p className='w-full md:w-2/3 text-gray-600'>
              {copyright} {year} {companyName}. {rightsReserved}
            </p>
        </div>
        <div className="col-md-4 text-center text-md-end">
            <div>
              <a 
                href="https://www.linkedin.com/in/tam%C3%A1s-k-9096a6346?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BEZBv2sjPS7%2BeqvRb6IxYEQ%3D%3D" 
                className="text-white me-3" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                
              </a>
              <a 
                href="https://github.com/klemitomi" 
                className="text-white" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
               
              </a>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Footer
