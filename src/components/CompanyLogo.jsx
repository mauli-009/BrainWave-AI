import React from 'react'
import { companyLogos } from '../constants'

const CompanyLogo = ({className}) => {
  return (
    <div className={className}>
            <h5 className='tagline mb-6 text-center text-n-1 /50 '>Creating most Attractive Designs</h5>
            <ul className='flex '>
                {companyLogos.map((item,index)=>(
                    <li key={index} className='flex items-center justify-center flex-1 ' >
                        <img src={item} width={134} height={28} alt={item}/>
                    </li>

                ))}

            </ul>
      
    </div>
  )
}

export default CompanyLogo
