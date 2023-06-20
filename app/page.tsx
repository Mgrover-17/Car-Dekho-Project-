"use Client";

import { Hero, CustomFilter} from '@/components';

export default function Home() {
  return (
    <main className="overflow-hidden">
    <Hero />    
    <div className='mt-12 padding-x padding-y max-width' id="discover">
      <div className="home__text-container">
        <h1 className="text-4xl font-extrabold">Most Searched Cars</h1> 
        <p>Explore the Cars </p>       
      </div>   
        </div>
        
       
    </main>
  )
}
