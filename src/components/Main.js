import Link from 'next/link';
import "../styles/main.css";
import LocationCard from "../components/LocationCard.js"
import StatusCard from "../components/StatusCard.js"
import AnimatedBackground from '@/components/AnimatedBackground';
import Stack from "../components/Stack.js"

const Main = () => {
    return (
        <div>
            <div className='all'>
                
                <LocationCard></LocationCard>
                <div className="main-container">
                    <h1>Ronald Kroening</h1>
                    <p>I’m a Software Engineer based in New York City looking for my next opportunity.</p>
                </div>
                <StatusCard></StatusCard>
                

            </div>
            
        </div>
    );
};
    
export default Main;

