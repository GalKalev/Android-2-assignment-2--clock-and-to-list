import { useState, useEffect } from "react";
import './Clock.css'

const Clock = () => {
    // const [time, setTime] = useState('');

    const [hour, setHour] = useState('');
    const [minutes, setMinutes]= useState('');
    const [seconds, setSeconds]= useState('');

    useEffect(() => {

        setInterval(() => {
            const dateObj = new Date();

            const currHour = dateObj.getHours();
            const currMinutes = dateObj.getMinutes();
            const currSeconds = dateObj.getSeconds();

            // const currTime = `${hour}:${minute}:${seconds}`;

            // setTime(currTime);
            setHour(currHour);
            setMinutes(currMinutes);
            setSeconds(currSeconds);
        }, 1000);

    },[]);

    return(
    <div className="clockTime">
        {/* {time} */}
        <span className="hourTime">{hour}</span>:<span className="minutesTime">{minutes}</span>:<span className="hourseconds">{seconds}</span>
    </div>)
}

export default Clock;