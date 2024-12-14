import Link from 'next/link';
import "../styles/StatusCard.css";


const StatusCard = () => {
    const openResume = () => {
        window.open('/data/Ronald_Kroening_Resume.pdf', '_blank');
      };
    return (
        <div className='SMain'>
            <h3><strong>View my Resume</strong></h3>
            <img onClick="show_res"id="status-res"width="40px" height="40px" src="/file.svg" ></img>
            <h3><strong>Current Status</strong></h3>
            <h3>Open for Work</h3>
        </div>
    );
};
    
export default StatusCard;
