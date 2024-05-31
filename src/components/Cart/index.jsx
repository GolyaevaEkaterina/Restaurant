import OrderContainer from 'components/OrderContainer';
import { useEffect, useState } from 'react';
import classNames from "classnames"
const Cart = ({cartItems, setCartItems }) => {
   const [cartSum, setCartSum] = useState()
   const [isOpenOrderContainer, setIsOpenOrderContainer] = useState(false)
   const [isOpenOrderButton, setIsOpenOrderButton] = useState(false)
   const [textCart, setTextCart] = useState('')
   useEffect(() => {
    if(cartItems.length>0){
        setTextCart('Корзина')
        setIsOpenOrderButton(true)
       }
       if(cartItems.length === 0){
        setTextCart('Корзина пуста')
        setIsOpenOrderButton(false)
       }
   }, []) 
   
   
   console.log(cartItems)
   console.log(cartSum)

   useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
    calculateCartSum()
   }, [cartItems])

    const addItem = (item) => {
        console.log(item)
        const itemIs = cartItems.find((c) => c.name === item.name)        
    
        if(itemIs){
          const index = cartItems.indexOf(itemIs)
          const newQuantity = cartItems[index].quantity + 1
          const sumA = Number(cartItems[index].price)
          const sumB = Number(item.priceForOne)
          const newSum = sumA + sumB
          const updatedNewItems = cartItems
          updatedNewItems[index].quantity = newQuantity
          updatedNewItems[index].price = newSum
          setCartItems(updatedNewItems)        
        }  
        
        console.log(cartItems)
      }

      const deleteItem = (item) => {
        const itemIs = cartItems.find((c) => c.name === item.name)
        const index = cartItems.indexOf(itemIs)
        if(itemIs.quantity > 1){
          
          const newQuantity = cartItems[index].quantity - 1
          const sumA = Number(cartItems[index].price)
          const sumB = Number( item.price)
          const newSum = sumA - sumB
          const updatedNewItems = cartItems
          updatedNewItems[index].quantity = newQuantity
          updatedNewItems[index].price = newSum
          setCartItems(updatedNewItems)
        }
        if(itemIs.quantity === 1){
          const updatedNewItems = cartItems
          updatedNewItems.splice(index,1)
          setCartItems(updatedNewItems)
        }
      }

      const calculateCartSum = () => {
        let sum = 0
        cartItems.map((c) => {
          sum = sum + Number(c.price)
        })
        setCartSum(sum)
      }

    return(
        <div>
            <div className='max-w-2xl w-full mx-auto mt-10 rounded-3xl bg-white p-4 md:p-10'>
              <h1 className='text-3xl font-bold text-start'>{textCart}</h1>
                {cartItems.map((c) => {
                    return(
                        <div className="flex justify-between gap-3 items-center max-w-2xl w-full mx-auto border-b-2 my-4">
                            <img alt='' src={c.image} className='h-20 w-20 object-cover object-center rounded-3xl mb-2'/>
                            <p className='text-lg md:text-xl md:h-10 md:w-60 text-start'>{c.name}</p>
                            <div className='flex-col items-end'>
                              <p className='text-lg'>{c.price} р.</p>
                              <div className="flex justify-between items-center gap-6 h-10 px-4 py-1 bg-zinc-100 rounded-md text-md">
                                  <button className="pt-1" onClick={()=>deleteItem(c)}><i class="fa-solid fa-minus"></i></button>
                                  <p>{c.quantity}</p>  
                                  <button onClick={()=>addItem(c)}><i class="fa-solid fa-plus"></i></button>
                              </div>
                              
                            </div>
                        </div>
                    )
                })}

                <div onClick={()=>setIsOpenOrderContainer(true)} className={classNames("cursor-pointer flex justify-between items-center px-2 md:px-10 bg-orange-400 rounded-md mt-6 h-10 text-slate-800 text-xl md:text-2xl font-semibold shadow-md",{
                'hidden': !isOpenOrderButton
                })}>
                {/* <div onClick={()=>setIsOpenOrderContainer(true)} className="cursor-pointer flex justify-between items-center px-2 md:px-10 bg-orange-400 rounded-md mt-6 h-10 text-slate-800 text-xl md:text-2xl font-semibold shadow-md"> */}
                    <h2>Оформить заказ</h2>  
                    <p>{cartSum} p.</p>
                </div>

                <div>
                  <OrderContainer setIsOpenOrderButton={setIsOpenOrderButton} setTextCart={setTextCart} cartItems={cartItems} setCartItems={setCartItems} setIsOpenOrderContainer={setIsOpenOrderContainer} isOpenOrderContainer={isOpenOrderContainer}/>
                </div>
            </div>

        </div>
    )
}

export default Cart