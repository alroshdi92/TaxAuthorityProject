



import React, { useRef, useEffect, useState } from "react";
import { select, geoPath, geoMercator } from "d3";
import useResizeObserver from "./useResizeObserver";

const propertyColor = {
    "pop_est": "red",
    "gdp_md_est": "Indigo",
    "imp": "blue",
    "exp": "brown",
    "cult": "green",
    "tour": "Orange"
};

const propertyUnit = {
    "pop_est": "M",
    "gdp_md_est": "USD",
    "imp": "USD",
    "exp": "USD",
    "cult": " USD",
    "tour": "Million"
};

const propertyName = {
    "pop_est": "Population",
    "gdp_md_est": "GDP",
    "imp": "Import",
    "exp": "Export ",
    "cult": "Agriculture",
    "tour": "Tourism"
};

const GCC_COUNTRIES = ["United Arab Emirates", "Bahrain", "Saudi Arabia", "Oman", "Qatar", "Kuwait"];

function GeoChart({ data, property }) {
    const svgRef = useRef();
    const wrapperRef = useRef();
    const dimensions = useResizeObserver(wrapperRef);
    const [selectedCountry, setSelectedCountry] = useState(null);

    useEffect(() => {
        const svg = select(svgRef.current);
        const { width, height } = dimensions || wrapperRef.current.getBoundingClientRect();
        
        const projection = geoMercator().fitSize([width, height], selectedCountry || data).precision(100);
        const pathGenerator = geoPath().projection(projection);

        svg
            .selectAll(".country")
            .data(data.features)
            .join("path")
            .on("click", (event, feature) => {
                if (feature.properties["subregion"] === "South America" || GCC_COUNTRIES.includes(feature.properties.name)) {
                    setSelectedCountry(selectedCountry === feature ? null : feature);
                } else {
                    setSelectedCountry(null);
                }
            })
            .attr("class", "country")
            .transition()
            .attr("fill", feature => 
                feature === selectedCountry ? propertyColor[property] : 
                feature.properties["subregion"] === "South America" || GCC_COUNTRIES.includes(feature.properties.name) ? "lightgreen" : "#ccc"
            )
            .attr("d", feature => pathGenerator(feature));

    }, 
    
    [data, dimensions, property, selectedCountry]);

  

    return (
        <div ref={wrapperRef} className="fullPageContainer">

          {selectedCountry && (
    <div className="resultNumber" style={{ fontWeight: "bold", color: "brown", border: "2px solid brown", padding: "10px", borderRadius: "5px" }}>
        {`${selectedCountry.properties.name} ${propertyName[property]} ${selectedCountry.properties[property].toLocaleString()} ${propertyUnit[property]}`}
    </div>
)}


            <svg ref={svgRef} className="fullPageSvg"></svg>
            
        </div>
    );
}


export default GeoChart;



// import React, { useRef, useEffect, useState } from "react";
// import { select, geoPath, geoMercator, min, max, scaleLinear } from "d3";
// import useResizeObserver from "./useResizeObserver";

// /**
//  * Component that renders a map of Germany.
//  */

// function GeoChart({ data, property }) {
//   const svgRef = useRef();
//   const wrapperRef = useRef();
//   const dimensions = useResizeObserver(wrapperRef);
//   const [selectedCountry, setSelectedCountry] = useState(null);

//   // will be called initially and on every data change
//   useEffect(() => {
//     const svg = select(svgRef.current);

//     const minProp = min(data.features, feature => feature.properties[property]);
//     const maxProp = max(data.features, feature => feature.properties[property]);
//     const colorScale = scaleLinear()
//       .domain([minProp, maxProp])
//       .range(["#ccc", "red"]);

//     // use resized dimensions
//     // but fall back to getBoundingClientRect, if no dimensions yet.
//     const { width, height } =
//       dimensions || wrapperRef.current.getBoundingClientRect();

//     // projects geo-coordinates on a 2D plane
//     const projection = geoMercator()
//       .fitSize([width, height], selectedCountry || data)
//       .precision(100);

//     // takes geojson data,
//     // transforms that into the d attribute of a path element
//     const pathGenerator = geoPath().projection(projection);

//     // render each country
//     svg
//       .selectAll(".country")
//       .data(data.features)
//       .join("path")
//       .on("click", (event, feature) => {
//         setSelectedCountry(selectedCountry === feature ? null : feature);
//       })
//       .attr("class", "country")
//       .transition()
//       .attr("fill", feature => colorScale(feature.properties[property]))
//       .attr("d", feature => pathGenerator(feature));

//     // render text
//     svg
//       .selectAll(".label")
//       .data([selectedCountry])
//       .join("text")
//       .attr("class", "label")
//       .text(
//         feature =>
//           feature &&
//           feature.properties.name +
//             ": " +
//             feature.properties[property].toLocaleString()
//       )
//       .attr("x", 10)
//       .attr("y", 25);
//   }, [data, dimensions, property, selectedCountry]);

//   return (
//     <div ref={wrapperRef} style={{ marginBottom: "2rem" }}>
//       <svg ref={svgRef}></svg>
//     </div>
//   );
// }

// export default GeoChart;



// import React, { useRef, useEffect, useState } from "react";
// import { select, geoPath, geoMercator } from "d3";
// import useResizeObserver from "./useResizeObserver";


// const propertyColor = {
//     "pop_est": "red",
//     "gdp_md_est": "Indigo",
//     "imp": "blue",
//     "exp": "brown",
//     "cult": "green",
//     "tour": "Orange"
// };

// const propertyUnit = {
//     "pop_est": "M",
//     "gdp_md_est": "USD",
//     "imp": "USD",
//     "exp": "USD",
//     "cult": " USD",
//     "tour": "Million"
// };

// const propertyName = {
//     "pop_est": "Population",
//     "gdp_md_est": "GDP",
//     "imp": "Import",
//     "exp": "Export ",
//     "cult": "Agriculture",
//     "tour": "Tourism"
// };

// const GCC_COUNTRIES = ["United Arab Emirates", "Bahrain", "Saudi Arabia", "Oman", "Qatar", "Kuwait"];

// function GeoChart({ data, property }) {
//     const svgRef = useRef();
//     const wrapperRef = useRef();
//     const dimensions = useResizeObserver(wrapperRef);
//     const [selectedCountry, setSelectedCountry] = useState(null);


//     useEffect(() => {
//         const svg = select(svgRef.current);
//         const { width, height } = dimensions || wrapperRef.current.getBoundingClientRect();
        
//         const projection = geoMercator().precision(100);
//         const pathGenerator = geoPath().projection(projection);
        
//         if (selectedCountry) {
//             const [[x0, y0], [x1, y1]] = pathGenerator.bounds(selectedCountry);
            
//             // Expand the bounding box by a certain percentage, say 10%.
//             const dx = x1 - x0;
//             const dy = y1 - y0;
//             const paddingX = 0.1 * dx;
//             const paddingY = 0.1 * dy;
    
//             const expandedBounds = [
//                 [x0 - paddingX, y0 - paddingY],
//                 [x1 + paddingX, y1 + paddingY]
//             ];
    
//             projection.fitSize([width, height], {
//                 type: "Feature",
//                 geometry: {
//                     type: "Polygon",
//                     coordinates: [
//                         [
//                             projection.invert(expandedBounds[0]),
//                             projection.invert([expandedBounds[1][0], expandedBounds[0][1]]),
//                             projection.invert(expandedBounds[1]),
//                             projection.invert([expandedBounds[0][0], expandedBounds[1][1]]),
//                             projection.invert(expandedBounds[0])
//                         ]
//                     ]
//                 }
//             });
//         } else {
//             projection.fitSize([width, height], data);
//         }
        


        
//         svg
//             .selectAll(".country")
//             .data(data.features)
//             .join("path")
//             .on("click", (event, feature) => {
//                 if (feature.properties["subregion"] === "South America" || GCC_COUNTRIES.includes(feature.properties.name)) {
//                     setSelectedCountry(selectedCountry === feature ? null : feature);
//                 } else {
//                     setSelectedCountry(null);
//                 }
//             })
//             .attr("class", "country")
//             .transition()
//             .attr("fill", feature => 
//                 feature === selectedCountry ? propertyColor[property] : 
//                 feature.properties["subregion"] === "South America" || GCC_COUNTRIES.includes(feature.properties.name) ? "lightgreen" : "#ccc"
//             )
//             .attr("d", feature => pathGenerator(feature));

//     }, [data, dimensions, property, selectedCountry]);

//     return (
//         <div ref={wrapperRef} className="fullPageContainer">
//             {selectedCountry && (
//                 <div className="resultNumber" style={{ fontWeight: "bold", color: "brown", border: "2px solid brown", padding: "10px", borderRadius: "5px" }}>
//                     {`${selectedCountry.properties.name} ${propertyName[property]} ${selectedCountry.properties[property].toLocaleString()} ${propertyUnit[property]}`}
//                 </div>
//             )}
//             <svg ref={svgRef} className="fullPageSvg"></svg>
//         </div>
//     );
// }

// export default GeoChart;


