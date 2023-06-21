"use Client";

import { Hero, CustomFilter, SearchBar } from '@/components';
import CarCard from '@/components/CarCard';
import { fetchCars } from '@/utils';

export default async function Home() {

  const carData = await fetchCars();
  // console.log(carData);
  const isDataEmpty = !Array.isArray(carData) || carData.length < 1 || !carData;
  return (
    <main className="overflow-hidden">
    <Hero />    
    <div className='mt-12 padding-x padding-y max-width' id="discover">
      <div className="home__text-container">
        <h1 className="text-4xl font-extrabold">Most Searched Cars</h1> 
        <p>Explore the Cars </p>       
      </div>
      <div className="home__filters">
        <SearchBar />
        <div className="home__filter-container">
        <CustomFilter title="fuel" />
        <CustomFilter title="year" />
        </div>
      </div>

      {!isDataEmpty ? (
          <section>
            <div className='home__cars-wrapper'>
              {carData?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
          </section>
        ) : (
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>Oops,No Car Data Found</h2>
            <p>{carData?.message}</p>
          </div>
        )}

      </div>   
    </main>
  )
}
