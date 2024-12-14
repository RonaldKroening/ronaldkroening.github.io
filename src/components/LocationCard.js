import Link from 'next/link';
import "../styles/LocationCard.css";

function currentTime(){
    const now = new Date();

    // Get hours, minutes, seconds
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    // Determine AM or PM
    const ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert hours to 12-hour format
    hours = hours % 12 || 12;

    // Get the time zone name
    const tz = Intl.DateTimeFormat('en-US', { timeZoneName: 'short' })
    .formatToParts(now)
    .find(part => part.type === 'timeZoneName').value;


    // Combine into a readable format
    const currentTime = `${hours}:${minutes}${ampm} ${tz}`;
    return currentTime;

}
const LocationCard = () => {
    return (
        <div className='LCMain'>
            <img width="40px" height="40px" src="/globe.svg" ></img>
            <h3>New York, NY</h3>
            <h3>{currentTime()}</h3>
        </div>
    );
};
    
export default LocationCard;

