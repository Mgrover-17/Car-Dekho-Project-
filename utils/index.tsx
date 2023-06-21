export async function fetchCars() {
   
  
    // Set the required headers for the API request
    const headers: HeadersInit = {
        'X-RapidAPI-Key':process.env.RAPID_API_KEY||"",
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    };
  
    // Set the required headers for the API request
    const response = await fetch(
      `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla`,
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