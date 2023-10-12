// // import React, { useState } from 'react'; 
// // import RacingBarChart from '../components/Dashboard/RacingBarChart';
// // import useInterval from '../components/Dashboard/useInterval';
// // import '../App.css';

// // const getRandomIndex = array => {
// //     return Math.floor(array.length * Math.random());
// // };

// // function RacingBar() {
// //     // Set default state to true to start race on component mount
// //     const [start] = useState(true);
// //     const [chartData, setChartData] = useState([  {
// //       name: "Brazil",
// //       value: 69422446,
// //       color: "#f4efd3"
// //     },
// //     {
// //       name: "Colombia",
// //       value: 52085168,
// //       color: "#cccccc"
// //     },
// //     {
// //       name: "Argentina",
// //       value: 45773884,
// //       color: "#c2b0c9"
// //     },
// //     {
// //       name: "Peru",
// //       value: 34352719,
// //       color: "#9656a1"
// //     },
// //     {
// //       name: "Venezuela",
// //       value: 28838499,
// //       color: "#fa697c"
// //     },
// //     {
// //       name: "Chile",
// //       value: 19629590,
// //       color: "#fcc169"
// //     },
// //     {
// //       name: "Ecuador",
// //       value: 18190484,
// //       color: "#fcc109"
// //     },
// //     {
// //       name: "Bolivia",
// //       value: 19629590,
// //       color: "#fcc789"
// //     },
// //     {
// //       name: "Paraguay",
// //       value: 12388571,
// //       color: "#fcc268"
// //     }]);
    
// //     useInterval(() => {
// //         if (start) {
// //             const randomIndex = getRandomIndex(chartData);
// //             setChartData(chartData.map((entry, index) =>
// //                 index === randomIndex
// //                 ? {
// //                     ...entry,
// //                     value: entry.value + 55559999
// //                 }
// //                 : entry
// //             ));
// //         }
// //     }, 500);

// //     return (
// //         <React.Fragment>
// //             <div>
// //                 <h1>Racing Bar Chart</h1>
// //                 <RacingBarChart data={chartData}/>
// //             </div>
// //         </React.Fragment>
// //     );
// // }

// // export default RacingBar;


// import React, { useState } from 'react'; 
// import RacingBarChart from '../components/Dashboard/RacingBarChart';
// import useInterval from '../components/Dashboard/useInterval';
// import RacingData from './RacingData.json';
// import '../App.css';


// const getRandomIndex = array => {
//   return Math.floor(array.length * Math.random());
// };

// function RacingBar() {
//   const [start, setStart] = useState(true);
//   const [year, setYear] = useState(2000);
//   const [chartData, setChartData] = useState(RacingData);
      
//     useInterval(() => {
//       // Check if "start" is true and the year is less than 2022 before proceeding
//       if (start && year < 2023) {
//           const randomIndex = getRandomIndex(chartData);
          
//           setChartData(chartData.map((entry, index) =>
//               index === randomIndex
//               ? {
//                   ...entry,
//                   value: entry.value + 55559999
//               }
//               : entry
//           ));
          
//           // Increment the year by 1
//           setYear(prevYear => prevYear + 1);
//       }
//   }, 500);



// const handleRestart = () => {
//   setChartData(RacingData);
//   setYear(2000);
//   setStart(true);
// };

// return (
//   <React.Fragment>
//       <div>
//           <h1>The GDP of South America countries in {year}     { <button onClick={handleRestart}> Restart</button>} </h1> 
//           <RacingBarChart data={chartData}/>
//       </div>
//   </React.Fragment>
// );
// }


// export default RacingBar;


import React, { useState, useEffect } from 'react'; 
import RacingBarChart from '../components/Dashboard/RacingBarChart';
import useInterval from '../components/Dashboard/useInterval';
import axios from 'axios';
import '../App.css';

const getRandomIndex = array => {
    return Math.floor(array.length * Math.random());
};

function RacingBar() {
    const [start, setStart] = useState(true);
    const [year, setYear] = useState(2000);
    const [chartData, setChartData] = useState([]);

    // Fetch data from the server when the component mounts
    useEffect(() => {
        axios.get('http://localhost:5000/api/data')
             .then(response => {
                 setChartData(response.data);
             })
             .catch(error => {
                 console.error('There was an error fetching data:', error);
             });
    }, []);

    useInterval(() => {
        if (start && year < 2023) {
            const randomIndex = getRandomIndex(chartData);
            setChartData(chartData.map((entry, index) =>
                index === randomIndex
                ? {
                    ...entry,
                    value: entry.value + 55559999
                }
                : entry
            ));

            setYear(prevYear => prevYear + 1);
        }
    }, 500);

    const handleRestart = () => {
        setYear(2000);
        setStart(true);
    };

    return (
        <React.Fragment>
            <div>
                <h1> GDP of Countries in {year} <button onClick={handleRestart}>Restart</button></h1>
                <RacingBarChart data={chartData}/>
            </div>
        </React.Fragment>
    );
}

export default RacingBar;
