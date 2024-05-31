import './OrderContainer.css';
import classNames from "classnames"

import { useState } from "react"
const OrderContainer = ({isOpenOrderContainer, setIsOpenOrderContainer, cartItems, setCartItems, setTextCart, setIsOpenOrderButton}) => {
    const [customerName, setCustomerName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [isOpenAnswerContainer, setIsOpenAnswerContainer] = useState(false)
    const [answerText, setAnswerText] = useState('')

    const inputPhone = (event, phone) => {
        const value = event.target.value
        setPhone(value)
        const coincidence = /^\d*$/.test(value)
        if(!coincidence){
            setPhone(phone)
        }
    }

    async function sendOrder(){
        setIsOpenOrderContainer(false)
        const url='https://www.bit-by-bit.ru/api/student-projects/restaurants/order'
        const newOrder = {
            customerName,
            phone,
            email,
            restaurantId: cartItems[0].restaurantId,
            cartItems,
        }

        let response = await fetch (url, {
            method: 'POST',
            body: JSON.stringify(newOrder) 
        })
        let jsonData = await response.json()
        console.log(jsonData)
        console.log(newOrder)
        
        setIsOpenOrderContainer(false)
        setIsOpenAnswerContainer(true)
        setCartItems([])
        setTextCart('Корзина пуста')
        setIsOpenOrderButton(false)


        if(jsonData.error === null){            
            setAnswerText('Заказ успешно оформлен')
        }
        if(jsonData.error !== null){            
            setAnswerText('Что-то пошло не так, попробуйте еще раз.')
        }
    }

    
    return(
     <div>

        <div className={classNames('flex items-center fixed inset-0 w-screen h-screen bg-white container-order',{
            'hidden': !isOpenOrderContainer
            })}>
                
            <form className='m-auto p-8 w-96 rounded-2 bg-white rounded-3xl shadow-md text-start'>
            <div onClick={()=>setIsOpenOrderContainer(false)} className='flex gap-2 self-start items-center mb-10 cursor-pointer'>
                <i class="fa-solid fa-arrow-left"></i>
                <p>Вернуться к заказу</p>
            </div>
            
            <div className="flex flex-col">
                <label className="label font-semibold">Имя пользователя</label>
                <input 
                    onChange={(event)=>setCustomerName(event.target.value)}
                    value={customerName}
                    name="customer-name" 
                    type="text"  
                    className='input'                   
                />
            </div>
            <div className="flex flex-col">
                <label className="label font-semibold">Номер телефона</label>
                <input
                    onChange={(event)=>inputPhone(event, phone)}

                    value={phone}
                    type="text" 
                    name="phone" 
                    className='input'
                />    
            </div>
            <div className="flex flex-col">
                <label className="label">email</label>
                <input
                    onChange={(event)=>setEmail(event.target.value)}
                    value={email}
                    type="text" 
                    name="email" 
                    className='input'
                />
            </div>
            <div onClick={()=>sendOrder()} className="cursor-pointer text-center px-2 md:px-10 bg-orange-400 rounded-md mt-6 h-10 text-slate-800 text-xl md:text-2xl font-semibold shadow-md">
                    <h2>Оформить заказ</h2>  
            </div>

            </form>

        </div>
        <div className={classNames('flex items-center fixed inset-0 w-screen h-screen bg-white container-order',{
            'hidden': !isOpenAnswerContainer
            })}>
                <div className='relative m-auto p-10 w-96 rounded-2 bg-white text-xl rounded-3xl shadow-md text-start'>
                <button onClick={()=>setIsOpenAnswerContainer(false)} className='absolute right-4 top-4'><i class="fa-solid fa-xmark"></i></button>
                <p>{answerText}</p>
                </div>
                
            </div>

     </div>
    )
}

export default OrderContainer