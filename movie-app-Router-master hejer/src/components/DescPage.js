import React from 'react'

const DescPage = () => {
  return (
    <div>
     <h1>hello</h1>
    </div>
  )
}

export default DescPage;

















// import React, { useEffect } from "react";
// import Iframe from "react-iframe";
// import { Link } from "react-router-dom";
// import { Card } from "react-bootstrap";

// const DescPage = ({ movie, setMovie, match }) => {
//   useEffect(() => {
//     setMovie(movie.filter((el) => el.id === match.params.id)[0]);
//   });
//   return (
//     <div className="container">
//       <Card style={{ width: "600px", height: "500px" }}>
//         <Card.Header as="h5">Movie details</Card.Header>
//         <Card.Body>
//           <Card.Title>{movie.title}</Card.Title>
//           <Iframe
//             url={movie.trailer}
//             width="200px"
//             height="200px"
//             id="myId"
//             className=""
//             display="initial"
//             position="relative"
//           />
//           <Card.Text className="description">{movie.description}</Card.Text>
//           <button
//             variant="primary"
//             className="text-decoration-none btn btn-warning ml-5 mt-2"
//           >
//             <Link to="/">Back Home</Link>
//           </button>
//         </Card.Body>
//       </Card>
//       ;
//     </div>
//   );
// };

// export default DescPage;
