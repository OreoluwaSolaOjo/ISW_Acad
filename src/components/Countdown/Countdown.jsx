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
            <span className='two-numbers'>{remainingTime.days} days</span>
            {/* <span>days</span> */}
            <span className="two-numbers">{remainingTime.hours} hours</span>
            {/* <span>hours</span> */}
            <span className="two-numbers">{remainingTime.minutes} minutes</span>
            {/* <span>minutes</span> */}
            <span className="two-numbers">{remainingTime.seconds} seconds</span>
            {/* <span>seconds</span> */}
        </div>
    );
}

export default CountdownTimer;