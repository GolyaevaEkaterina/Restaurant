import classNames from "classnames"
const ContainerDeleteCart = ({isOpenContainerDeleteCart, nameRestСurrent, nameRestPrevious, deleteCart, itemCurrent, setIsOpenContainerDeleteCart}) => {
    return(
        <div className={classNames('flex items-center fixed inset-0 w-screen h-screen bg-white container-delete-cart',{
            'hidden': !isOpenContainerDeleteCart
            })}>
              <div className="m-auto p-8 w-96 rounded-2 bg-white rounded-3xl shadow-md text-start">
                <h1 className="text-xl font-bold mb-4">Оформить заказ из ресторана {nameRestСurrent}</h1>
                <p>Все ранее добавленные блюда из ресторана {nameRestPrevious} будут удалены из корзины.</p>
                <div className="grid grid-cols-2 gap-2 mt-4">
                  <button onClick={()=>setIsOpenContainerDeleteCart(false)} className="px-6 py-3 text-lg font-bold text-slate-800 rounded-xl bg-slate-200">Отмена</button>
                  <button onClick={()=>deleteCart(itemCurrent)} className="px-6 py-3 text-lg font-bold text-slate-800 rounded-xl bg-orange-300">Продолжить</button>
                </div>
              </div>
        </div>
    )
}

export default ContainerDeleteCart