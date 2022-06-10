import React, { useEffect } from 'react'


const Countdown = ({ count, setCount }) => {

    useEffect(() => {
        const id = setInterval(() => setCount((oldCount) => {
            if (oldCount <= 0) {
                return 0;
            }
            return oldCount - 1
        }), 1000);
        return () => {
            clearInterval(id);
        };
    }, []);


    return (
        <div>Will refresh in {count} seconds</div>
    )
}

export default Countdown