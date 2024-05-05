const Rest = ({name, image, cuisine}) => {    
    return(
        <div>
            <img alt='' src={image} className='h-52 w-full object-cover object-center rounded-3xl shadow-md'/>
            <div className='flex justify-between items-end px-2 py-3 border-b-2'>
              <h2 className='text-2xl text-left'>{name}</h2>
              <p className='bg-orange-200 rounded-full px-3 text-base text-neutral-600 h-6'>{cuisine}</p>
            </div>
        </div>
    )
}

export default Rest