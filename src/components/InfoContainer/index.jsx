import classNames from "classnames";
const InfoContainer = ({
  isOpenInfoContainer,
  setIsOpenInfoContainer,
  rest,
}) => {
  return (
    <div
      className={classNames(
        "relative max-w-60 h-48 ml-52 p-3 my-2 rounded-xl container-small",
        {
          hidden: !isOpenInfoContainer,
        },
      )}
    >
      <button
        onClick={() => setIsOpenInfoContainer(false)}
        className="absolute right-4 top-4"
      >
        <i class="fa-solid fa-xmark"></i>
      </button>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col items-start">
          <p className="font-semibold">Телефон</p>
          <p>{rest.phone}</p>
        </div>
        <div className="flex flex-col items-start">
          <p>Email</p>
          <p>{rest.email}</p>
        </div>
        <div className="flex flex-col items-start">
          <p className="font-semibold">Адрес</p>
          <p>{rest.address}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoContainer;
