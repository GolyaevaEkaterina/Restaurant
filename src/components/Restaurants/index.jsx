import Rest from "components/Rest";
const Restaurants = ({ restaurants }) => {
  return (
    <div>
      <div className="my-8">
        <h1 className="text-4xl md:text-5xl font-semibold">G o o d F o o d</h1>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-10 ">
        {restaurants.map((r) => {
          return (
            <Rest
              name={r.name}
              cuisine={r.cuisine}
              image={r.image}
              key={r.name}
              slug={r.slug}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Restaurants;
