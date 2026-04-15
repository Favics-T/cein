import Button from './ui/Button'
import { GoArrowUpRight } from "react-icons/go";

const Hero=()=> {

  return (
   <div className='w-full flex gap-10'>
      {/* left div */}
      <div className='bg-[#f2f2f2] flex flex-col gap-6 py-8 rounded-2xl px-10 w-1/2 h-[100vh]'>
      <h1 className='text-4xl    '>Elevate your lifestyle with premium essentials</h1>
      <p className='text-sm'>Elevate your routine through our premium goods and curated essentials, combining quality and style to enhance comfort, convienence an d sophiscation in every momnet of your day</p>

        {/* browse button */}
        <div className='flex'>
         <Button btn='Browse All Product' />
          <Button btn={<GoArrowUpRight />} />
        </div>
      </div>

      {/* right div */}
      <div className='bg-[#f2f2f2] px-20 w-1/2 h-[100vh]'>

      </div>
      
   </div>
  )
}

export default Hero
