import React, { useEffect } from 'react'
import axios from 'axios';
// import { FaCode } from "react-icons/fa";

// function LandingPage() {
//     return (
//         <>
//             <div className="app">
//                 <FaCode style={{ fontSize: '4rem' }} /><br />
//                 <span style={{ fontSize: '2rem' }}>Let's Start Coding!</span>
//             </div>
//             <div style={{ float: 'right' }}>Thanks For Using This Boiler Plate by John Ahn</div>
//         </>
//     )
// }

function LandingPage() {
    useEffect(() => {
        axios.get('/api/hello')
            .then(response => console.log(response.data))
    }, [])
    return (
        <div>
            <h2>LandingPage</h2>
        </div>
    );
}
export default LandingPage
