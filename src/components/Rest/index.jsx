import { Link } from "react-router-dom"
import './Rest.css';
const Rest = ({name, image, cuisine, slug}) => {    
    return(
        <div className="flex flex-col justify-between  h-full border-b-2">
            <img alt='' src={image} className='h-44 md:h-52 w-full object-cover object-center rounded-3xl shadow-md'/>
            <div className='flex justify-between items-end px-2 py-3 '>
              <h2 className='text-xl md:text-2xl text-left'>{name}</h2>
              <p className='bg-orange-200 rounded-full px-3 text-base text-neutral-600 h-6'>{cuisine}</p>
            </div>
            <Link to={`/restaurant/${slug}`}> 
            <p className="px-4 bg-orange-400 rounded-md mb-4 h-12 md:h-8 text-white text-base md:text-lg rest_button shadow-md">Go to Restaurant page </p>
            </Link>
        </div>
    )
}

export default Rest