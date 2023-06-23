import { CarProperties, FilterProps } from "@/types";

export async function fetchCars(filters:FilterProps) {
  
  const {manufacturer, year ,model, limit, fuel } = filters;
    // Set the required headers for the API request
    const headers: HeadersInit = {
        'X-RapidAPI-Key':process.env.RAPID_API_KEY||"",
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    };
  
    // Set the required headers for the API request
    const response = await fetch(
     `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
     // `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=q3`,
      {
        headers: headers,
      }
    );
  
    // Parse the response as JSON
    const result = await response.json();
  
    return result;
  }

export const calculateCarPrice = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; 
    const mileageFactor = 0.1;
    const ageFactor = 0.05;
  
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
    const CarPrice = basePricePerDay + mileageRate + ageRate;
  
    return CarPrice.toFixed(0);
  };

  
  export const generateCarImage = (car: CarProperties, angle?: string) => {
    const url = new URL("https://cdn.imagin.studio/getimage");
    const { make, model, year } = car;
  
    url.searchParams.append('customer',process.env.NEXT_PUBLIC_IMAGIN_API_KEY || '');
    url.searchParams.append('make', make);
    url.searchParams.append('modelFamily', model.split(" ")[0]);
    url.searchParams.append('zoomType', 'fullscreen');
    url.searchParams.append('modelYear', `${year}`);
    // url.searchParams.append('zoomLevel', zoomLevel);
    url.searchParams.append('angle', `${angle}`);
  
    return `${url}`;
  }

  export const updateSearchParams = (type: string, value: string) => {
    // Get the current URL search params
    const searchParams = new URLSearchParams(window.location.search);
  
    // Set the specified search parameter to the given value
    searchParams.set(type, value);
  
    // Set the specified search parameter to the given value
    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
  
    return newPathname;
  };