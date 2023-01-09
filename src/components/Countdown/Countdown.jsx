import {useState, useEffect} from 'react';
import './Countdown.css';
import {getRemainingTimeUntilMsTimestamp} from './Utils/CountdownTimerUtils';

const defaultRemainingTime = {
    seconds: '00',
    minutes: '00',
    hours: '00',
    days: '00'
}

const CountdownTimer = ({countdownTimestampMs}) => {
    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

    useEffect(() => {
        const intervalId = setInterval(() => {
            updateRemainingTime(countdownTimestampMs);
        }, 1000);
        return () => clearInterval(intervalId);
    },[countdownTimestampMs]);

    function updateRemainingTime(countdown) {
        setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
    }

    return(
        <div className="countdown-timer">
            <div className='two-numbers'>
                <h2>
                {remainingTime.days} days
                </h2>
               </div>
            {/* <span>days</span> */}
            <div className="two-numbers">
                <h2>
                {remainingTime.hours} hours
                    </h2></div>
            {/* <span>hours</span> */}
            <div className="two-numbers">
                <h2>
                {remainingTime.minutes} minutes 
                    </h2></div>
            {/* <span>minutes</span> */}
            <div className="two-numbers-last">
                <h2>
                {remainingTime.seconds} seconds
                    </h2></div>
            {/* <span>seconds</span> */}
        </div>
    );
}

export default CountdownTimer;