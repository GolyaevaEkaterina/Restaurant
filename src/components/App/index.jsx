import Header from 'components/Header';
import './App.css';
import { useEffect, useState } from 'react';
import Rest from 'components/Rest';

function App() {
  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    fetch(`https://www.bit-by-bit.ru/api/student-projects/restaurants`)
    .then(data => data.json())
    .then(res => setRestaurants(res))
  }, [])
  
  return (
    <div className="App bg-slate-100 min-h-screen px-20 py-5 mx-auto">
      <div>
        <Header />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-10 '>
        {restaurants.map((r) => {
           return(
            <Rest name={r.name} cuisine={r.cuisine} image={r.image} key={r.name}/>
          )
        })}
      </div>
    
    </div>

  );
}

export default App;
