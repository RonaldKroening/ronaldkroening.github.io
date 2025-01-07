import Link from 'next/link';
import "../styles/main.css";
import LocationCard from "../components/LocationCard.js"
import StatusCard from "../components/StatusCard.js"
import AnimatedBackground from '@/components/AnimatedBackground';
import Stack from "../components/Stack.js"

const Main = () => {
    return (
        <div className="main-container">
                    <h1 className='title'>Ronald Kroening</h1>
                    <p>I’m a Software Engineer based in New York City looking for my next opportunity.</p>
        </div>
    );
};
    
export default Main;

