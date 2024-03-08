import { useState } from 'react';
import './css/Another.css'

function Another() {
    let [tally, setTally] = useState(0);

    function updateTally() {
        setTally((tally) => tally + 1);
    }

    return (
        <>
            <h1>Hello this is another page</h1>
            <h2>{tally}</h2>
            <button onClick={updateTally}>Click to update tally</button>
        </>
    )
}

export default Another