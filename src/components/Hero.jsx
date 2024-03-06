import React from 'react'
import { discount, robot } from '../assets'
import GetStarted from './GetStarted'

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col padding-y
  `}>
    <div className="flex-1 flex-start flex-col xl:px-0 
    sm:px-16 px-6 ">
      <div className='flex flex-row items-center py-[6px] 
      px-4 bg-discount-gradient rounded-[10px] mb-2'>
        <img src={discount} alt="discount" width={32}
        height={32}/>
          <p className='paragraph ml-2'> 
            <span className='text-white'>20% </span>
            Discount For {" "}
            <span className='text-white'>1 Month </span>
            Account
          </p>
      </div>

      <div className='flex flex-row justify-between items-center
      w-full'>
        <h1 className='flex-1 font-poppins font-semibold ss:text-[72px]
        text-[52px] text-white ss:leading-[100px]
        leading-[75px]'>The Next <br className='max-sm:hidden'/><span className='text-gradient'>Generation </span> 
        </h1>

        <div className='ss:flex hidden md:mr-4 mr-0'>
          <GetStarted/>
        </div>
      </div>

      <h1 className='flex-1 font-poppins font-semibold ss:text-[68px]
        text-[52px] text-white ss:leading-[100px]
        leading-[100px] w-full whitespace-nowrap'>Payment Method.</h1>

        <p className='paragraph max-w-[470px] '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias itaque magni odit voluptate minima sit consequuntur perferendis eligendi aliquam natus quas officia perspiciatis, maiores delectus incidunt ratione sed at iusto.</p>
    </div>
    <div>
      <img src={robot} alt='billing' className='w-[92%] h-[92%]
      relative mr-0'/>
    </div>

    <div className='ss:hidden flex-center'>
      <GetStarted/>
    </div>
  </section>
)


export default Hero