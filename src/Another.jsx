import { useState } from 'react';
import './css/Another.css'
import Navbar from './navbar.jsx';

function Another() {
    let [tally, setTally] = useState(100);

    function updateTally() {
        if (tally > 0) {
            setTally((tally) => tally - 1);
        }
    }

    return (
        <>
            <Navbar />
            <div>
                <h1>Hello this is another page</h1>
                <h2>{tally}</h2>
                <button onClick={updateTally}>Click to update tally</button>
            </div>
        </>
    )
}

export default Another