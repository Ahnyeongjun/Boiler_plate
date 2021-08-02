import React, { useEffect } from 'react'
import axios from 'axios';
import qs from 'qs';

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
const onEmailHandler = (event) => {

}

function LandingPage() {
    useEffect(() => {
        axios.get('http://13.125.199.215:8080/category/tag', {
            params: { numOfPage: 0, categoryName: ["CHILD", "NONE", "NONE"] },
            paramsSerializer: params => {
                return qs.stringify(params, { arrayFormat: 'repeat' })
            }
        })
            .then(response => console.log(response.data))
    }, [])
    return (
        <div style={
            { display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh' }
        }>
            <h2>LandingPage</h2>
        </div>
    );
}
export default LandingPage
