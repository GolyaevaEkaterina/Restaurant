const Nav = () => {
    return(
        <div className="flex justify-between border-b-2 py-4">
            <div className="text-red-500 text-2xl">
                <i class="fa-solid fa-pepper-hot"></i>
            </div>
            <h3>Restaurants</h3>
            <div className="flex gap-3">
                <input className="border-2 rounded-md outline-0 px-2"></input>
                <label><i class="fa-solid fa-magnifying-glass"></i></label>
            </div>
            <button className="text-2xl text-neutral-800">
                <i class="fa-solid fa-cart-shopping"></i>
            </button>
        </div>
    )
}

export default Nav