import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Items from "components/Items"
import './RestPage.css';

import InfoContainer from "components/InfoContainer";
// import {format} from "date-fns";
const RestPage = ({setCartItems, cartItems, restaurants}) => {
    const [rest, setRest] = useState({})
    const [items, setItems] = useState([])
    const [isOpenInfoContainer, setIsOpenInfoContainer] = useState(false)

    // const timeOpen = format(new Date(rest.openAt), "hh:mm")
    // const timeClose = format(new Date(rest.closeAt), "hh:mm")
    // console.log(timeOpen)

    const {slug} = useParams()

    useEffect(() => {
        fetch(`https://www.bit-by-bit.ru/api/student-projects/restaurants/${slug}`)
        .then(res => res.json())
        .then(data => setRest(data))

        fetch(`https://www.bit-by-bit.ru/api/student-projects/restaurants/${slug}/items`)
        .then(res => res.json())
        .then(data => setItems(data))

    }, [slug])

    return(
        <div className="max-w-4xl mx-auto">

            <div className="mb-10">
                <div className="relative h-52 w-full rounded-3xl shadow-md mb-2 mt-8">
                  <img alt='' src={rest.image} className='h-52 w-full object-cover object-center rounded-3xl'/>
                  <div className="absolute flex inset-0 rounded-3xl container-absolute">
                    <div className="max-w-96 m-8">
                        <h1 className="text-5xl text-white font-semibold mb-6">{rest.name}</h1>
                        <div className="flex gap-6">
                            <div className="p-1 rounded-xl text-base h-14  container-small">
                                <p>Время работы:</p>
                                <p>12:00-20:00</p>
                            </div>
                            <div onClick={()=>setIsOpenInfoContainer(true)} className="cursor-pointer p-2 rounded-xl container-small text-4xl text-zinc-800 h-14 w-14">
                            <i class="fa-solid fa-circle-info"></i>
                            </div>
                        </div>
                        
                    </div>

                    <InfoContainer rest={rest} isOpenInfoContainer={isOpenInfoContainer} setIsOpenInfoContainer={setIsOpenInfoContainer} />
                     
                  </div>
                </div>                
                <p>{rest.description}</p>
            </div>
                        
        <Items items={items} setItems={setItems} setCartItems={setCartItems} cartItems={cartItems} restaurants={restaurants}/>
        </div>
    )
}

export default RestPage