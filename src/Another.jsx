import { useState } from 'react';
import './css/Another.css'
import Navbar from './navbar.jsx';

function Another() {
    let [tally, setTally] = useState(100);

    let elements = ['one', 'two', 'three', 'four', 'five', 'six']

    function updateTally() {
        if (tally > 0) {
            setTally((tally) => tally - 1);
        }
    }

    return (
        <>
            <Navbar />
            {/* <PropExample name="UniqueClassName" idName="UniqueId" /> */}
            <div>
                <h1>Hello this is another page</h1>
                {elements.map(function(value, index) {
                    return <li key={index}>{value}</li>
                })}
                <h2>{tally}</h2>
                <button onClick={updateTally}>Click to update tally</button>
            </div>
        </>
    )
}

// function PropExample({ name, idName }) {
//     return (
//         <>
//             <ol>
//                 <li>{name}</li>
//                 <li>{idName}</li>
//             </ol>
//         </>
//     )
// }
export default Another