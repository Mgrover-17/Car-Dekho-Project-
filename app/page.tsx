"use Client";

import { Hero, CustomFilter, SearchBar, CarCard } from '@/components';

import ShowMore from '@/components/ShowMore';
import { fuels, yearsOfProduction } from '@/constants';
import { HomeProps } from '@/types';
import { fetchCars } from '@/utils';

export default async function Home({ searchParams }: HomeProps) {
  const carData = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  });
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
        <CustomFilter title="fuel" options={fuels} />
        <CustomFilter title="year" options={yearsOfProduction} />
        </div>
      </div>

      {!isDataEmpty ? (
          <section>
            <div className='home__cars-wrapper'>
              {carData?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
            
            <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > carData.length}
            />

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
