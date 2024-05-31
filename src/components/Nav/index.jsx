import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div className="flex justify-between border-b-2 py-4">
      <div className="text-red-500 text-2xl">
        <i class="fa-solid fa-pepper-hot"></i>
      </div>
      <Link to="/" className="hover:text-orange-500">Restaurants</Link>
      <div className="hidden md:flex gap-3">
        <input className="border-2 rounded-md outline-0 px-2"></input>
        <label>
          <i class="fa-solid fa-magnifying-glass"></i>
        </label>
      </div>
      <Link to="/cart">
        <button className="text-2xl text-neutral-800 hover:text-orange-500">
          <i class="fa-solid fa-cart-shopping"></i>
        </button>
      </Link>
    </div>
  );
};

export default Nav;
