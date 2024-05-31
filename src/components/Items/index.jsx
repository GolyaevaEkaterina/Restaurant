import { useState } from "react";
import { useEffect } from "react";

import "./Items.css";
import ContainerDeleteCart from "components/ContainerDeleteCart";

const Items = ({ items, setCartItems, cartItems, restaurants }) => {
  const [newItems, setNewItems] = useState(cartItems);
  const [isOpenContainerDeleteCart, setIsOpenContainerDeleteCart] =
    useState(false);
  const [nameRestСurrent, setNameRestСurrent] = useState();
  const [nameRestPrevious, setNameRestPrevious] = useState();
  const [itemCurrent, setItemCurrent] = useState();

  useEffect(() => {
    setCartItems(newItems);
  }, [newItems]);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addItem = (item) => {
    setItemCurrent(item);
    const updatedItems = cartItems;

    if (cartItems.length > 0) {
      const itemIs = cartItems.find((c) => c.name === item.name);

      const idRest = cartItems[0].restaurantId;
      console.log(idRest);

      if (idRest !== item.restaurantId) {
        setIsOpenContainerDeleteCart(true);
        const currentRest = restaurants.find((r) => item.restaurantId === r.id);
        const previosRest = restaurants.find((r) => idRest === r.id);
        setNameRestСurrent(currentRest.name);
        setNameRestPrevious(previosRest.name);
      }
      if (itemIs === undefined) {
        const newItem = {
          itemId: item.id,
          image: item.image,
          name: item.name,
          priceForOne: Math.round(item.price),
          price: Math.round(item.price),
          quantity: 1,
          restaurantId: item.restaurantId,
        };
        updatedItems.unshift(newItem);
      }
      if (itemIs) {
        const index = cartItems.indexOf(itemIs);
        const newQuantity = cartItems[index].quantity + 1;
        const sumA = Number(cartItems[index].price);
        const sumB = Number(Math.round(item.price));
        const newSum = sumA + sumB;
        updatedItems[index].quantity = newQuantity;
        updatedItems[index].price = newSum;
      }
    }
    if (cartItems.length === 0) {
      const newItem = {
        itemId: item.id,
        image: item.image,
        name: item.name,
        priceForOne: Math.round(item.price),
        price: Math.round(item.price),
        quantity: 1,
        restaurantId: item.restaurantId,
      };
      updatedItems.unshift(newItem);
    }
    setCartItems(updatedItems);
  };

  const deleteItem = (item) => {
    const itemIs = cartItems.find((c) => c.name === item.name);
    const index = cartItems.indexOf(itemIs);
    if (itemIs.quantity > 1) {
      const newQuantity = cartItems[index].quantity - 1;
      const sumA = Number(cartItems[index].price);
      const sumB = Number(item.price);
      const newSum = sumA - sumB;
      const updatedNewItems = newItems;
      updatedNewItems[index].quantity = newQuantity;
      updatedNewItems[index].price = newSum;
      setNewItems(updatedNewItems);
    }
    if (itemIs.quantity === 1) {
      const updatedNewItems = newItems;
      updatedNewItems.splice(index, 1);
      setNewItems(updatedNewItems);
    }
  };

  const deleteCart = () => {
    console.log(cartItems);
    const newItem = {
      itemId: itemCurrent.id,
      image: itemCurrent.image,
      name: itemCurrent.name,
      price: Math.round(itemCurrent.price),
      priceForOne: Math.round(itemCurrent.price),
      quantity: 1,
      restaurantId: itemCurrent.restaurantId,
    };
    setNewItems([newItem]);

    setIsOpenContainerDeleteCart(false);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-6">
      {items.map((i) => {
        const itemCoincidence = cartItems.find((c) => c.name === i.name);

        if (itemCoincidence === undefined) {
          return (
            <div className="p-5 bg-white rounded-3xl shadow-md flex flex-col justify-between">
              <img
                alt=""
                src={i.image}
                className="h-44 w-full object-cover object-center rounded-3xl"
              />
              <p className="text-left text-lg mb-4">{i.name}</p>
              <div>
                <p className="text-left text-2xl mb-1 ml-1">
                  {Math.round(i.price)} р.
                </p>
                <button
                  onClick={() => addItem(i)}
                  className="px-6 py-2 bg-zinc-100 rounded-md w-full text-lg hover:bg-zinc-200"
                >
                  Добавить
                </button>
              </div>
            </div>
          );
        }
        if (itemCoincidence) {
          return (
            <div className="p-5 bg-white rounded-3xl shadow-md flex flex-col justify-between">
              <img
                alt=""
                src={i.image}
                className="h-44 w-full object-cover object-center rounded-3xl"
              />
              <p className="text-left text-lg mb-4">{i.name}</p>
              <div>
                <p className="text-left text-2xl mb-1 ml-1">
                  {Math.round(i.price)} р.
                </p>
                <div className="flex justify-between align-center gap-6 px-6 py-2 bg-zinc-100 rounded-md w-full text-lg">
                  <button className="pt-1" onClick={() => deleteItem(i)}>
                    <i class="fa-solid fa-minus"></i>
                  </button>
                  <p>{itemCoincidence.quantity}</p>
                  <button onClick={() => addItem(i)}>
                    <i class="fa-solid fa-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          );
        }
      })}

      <ContainerDeleteCart
        isOpenContainerDeleteCart={isOpenContainerDeleteCart}
        setIsOpenContainerDeleteCart={setIsOpenContainerDeleteCart}
        deleteCart={deleteCart}
        nameRestСurrent={nameRestСurrent}
        nameRestPrevious={nameRestPrevious}
      />
    </div>
  );
};

export default Items;
