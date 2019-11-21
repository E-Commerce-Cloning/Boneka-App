import React, { useState } from "react";
import { Card } from "react-bootstrap";
import ItemsCarousel from "react-items-carousel";

const NewArrival = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  return (
    <div style={{ marginTop: "50px" }} className="container">
      <h4 style={{ fontFamily: "Noto Sans", font: "bold", marginLeft: "10px" }}>
        New Arrival
      </h4>
      <hr />
      <div
        style={{
          padding: `0 ${chevronWidth}px`,
          height: "150px",
          marginTop: "10px"
        }}
      >
        <ItemsCarousel
          infiniteLoop
          requestToChangeActive={setActiveItemIndex}
          activeItemIndex={activeItemIndex}
          numberOfCards={6}
          gutter={20}
          leftChevron={<button>{"<"}</button>}
          rightChevron={<button>{">"}</button>}
          outsideChevron
          chevronWidth={chevronWidth}
        >
          <div style={{ height: "100px" }}>
            <Card style={{ width: "8rem", height: "4rem" }}>
              <Card.Img
                variant="top"
                src="https://static.bmdstatic.com/pk/product/medium/5d1ebaec1f12f.jpg"
              />
              <Card.Body>
                <Card.Title style={{ fontSize: "17px" }}>Card Title</Card.Title>
                <Card.Text style={{ fontSize: "15px", font: "solid" }}>
                  Rp. 100.000
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div style={{ height: "250px" }}>
            <Card style={{ width: "8rem", height: "4rem" }}>
              <Card.Img
                variant="top"
                src="https://static.bmdstatic.com/pk/product/medium/5d1ebaec1f12f.jpg"
              />
              <Card.Body>
                <Card.Title style={{ fontSize: "17px" }}>Card Title</Card.Title>
                <Card.Text style={{ fontSize: "15px", font: "solid" }}>
                  Rp. 100.000
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div style={{ height: "250px" }}>
            <Card style={{ width: "8rem", height: "4rem" }}>
              <Card.Img
                variant="top"
                src="https://static.bmdstatic.com/pk/product/medium/5d1ebaec1f12f.jpg"
              />
              <Card.Body>
                <Card.Title style={{ fontSize: "17px" }}>Card Title</Card.Title>
                <Card.Text style={{ fontSize: "15px", font: "solid" }}>
                  Rp. 100.000
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div style={{ height: "250px" }}>
            <Card style={{ width: "8rem", height: "4rem" }}>
              <Card.Img
                variant="top"
                src="https://static.bmdstatic.com/pk/product/medium/5d1ebaec1f12f.jpg"
              />
              <Card.Body>
                <Card.Title style={{ fontSize: "17px" }}>Card Title</Card.Title>
                <Card.Text style={{ fontSize: "15px", font: "solid" }}>
                  Rp. 100.000
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div style={{ height: "250px" }}>
            <Card style={{ width: "8rem", height: "4rem" }}>
              <Card.Img
                variant="top"
                src="https://static.bmdstatic.com/pk/product/medium/5d1ebaec1f12f.jpg"
              />
              <Card.Body>
                <Card.Title style={{ fontSize: "17px" }}>Card Title</Card.Title>
                <Card.Text style={{ fontSize: "15px", font: "solid" }}>
                  Rp. 100.000
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div style={{ height: "250px" }}>
            <Card style={{ width: "8rem", height: "4rem" }}>
              <Card.Img
                variant="top"
                src="https://static.bmdstatic.com/pk/product/medium/5d1ebaec1f12f.jpg"
              />
              <Card.Body>
                <Card.Title style={{ fontSize: "17px" }}>Card Title</Card.Title>
                <Card.Text style={{ fontSize: "15px", font: "solid" }}>
                  Rp. 100.000
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div style={{ height: "250px" }}>
            <Card style={{ width: "8rem", height: "4rem" }}>
              <Card.Img
                variant="top"
                src="https://static.bmdstatic.com/pk/product/medium/5d1ebaec1f12f.jpg"
              />
              <Card.Body>
                <Card.Title style={{ fontSize: "17px" }}>Card Title</Card.Title>
                <Card.Text style={{ fontSize: "15px", font: "solid" }}>
                  Rp. 100.000
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div style={{ height: "250px" }}>
            <Card style={{ width: "8rem", height: "4rem" }}>
              <Card.Img
                variant="top"
                src="https://static.bmdstatic.com/pk/product/medium/5d1ebaec1f12f.jpg"
              />
              <Card.Body>
                <Card.Title style={{ fontSize: "17px" }}>Card Title</Card.Title>
                <Card.Text style={{ fontSize: "15px", font: "solid" }}>
                  Rp. 100.000
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div style={{ height: "250px" }}>
            <Card style={{ width: "8rem", height: "4rem" }}>
              <Card.Img
                variant="top"
                src="https://static.bmdstatic.com/pk/product/medium/5d1ebaec1f12f.jpg"
              />
              <Card.Body>
                <Card.Title style={{ fontSize: "17px" }}>Card Title</Card.Title>
                <Card.Text style={{ fontSize: "15px", font: "solid" }}>
                  Rp. 100.000
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </ItemsCarousel>
      </div>
    </div>
  );
};

export default NewArrival;

// import React from "react";
// import { Card } from "react-bootstrap";
// import Flickity from "react-flickity-component";
// import "./flickity.css";

// const flickityOptions = {
//   initialIndex: 1
// };

// const CardCarousel = () => {
//   return (
//     <>
//       <div className="container">
//         <div className="row">
//           <div className="col col-md-10">
//             <Flickity
//               className={"carousel"} // default ''
//               elementType={"div"} // default 'div'
//               options={flickityOptions} // takes flickity options {}
//               disableImagesLoaded={false} // default false
//               reloadOnUpdate // default false
//               static // default false
//             >
//               <Card style={{ width: "8rem", height: "6rem" }}>
//                 <Card.Img
//                   variant="top"
//                   src="https://static.bmdstatic.com/pk/product/medium/5d1ebaec1f12f.jpg"
//                 />
//                 <Card.Body>
//                   <Card.Title style={{ fontSize: "17px" }}>
//                     Card Title
//                   </Card.Title>
//                   <br />
//                   <Card.Text style={{ fontSize: "15px", font: "solid" }}>
//                     Rp. 100.000
//                   </Card.Text>
//                 </Card.Body>
//               </Card>
//               <Card style={{ width: "8rem", height: "6rem" }}>
//                 <Card.Img
//                   variant="top"
//                   src="https://static.bmdstatic.com/pk/product/medium/5d1ebaec1f12f.jpg"
//                 />
//                 <Card.Body>
//                   <Card.Title style={{ fontSize: "17px" }}>
//                     Card Title
//                   </Card.Title>
//                   <br />
//                   <Card.Text style={{ fontSize: "15px", font: "solid" }}>
//                     Rp. 100.000
//                   </Card.Text>
//                 </Card.Body>
//               </Card>
//               <Card style={{ width: "8rem", height: "6rem" }}>
//                 <Card.Img
//                   variant="top"
//                   src="https://static.bmdstatic.com/pk/product/medium/5d1ebaec1f12f.jpg"
//                 />
//                 <Card.Body>
//                   <Card.Title style={{ fontSize: "17px" }}>
//                     Card Title
//                   </Card.Title>
//                   <br />
//                   <Card.Text style={{ fontSize: "15px", font: "solid" }}>
//                     Rp. 100.000
//                   </Card.Text>
//                 </Card.Body>
//               </Card>
//               <Card style={{ width: "8rem", height: "6rem" }}>
//                 <Card.Img
//                   variant="top"
//                   src="https://static.bmdstatic.com/pk/product/medium/5d1ebaec1f12f.jpg"
//                 />
//                 <Card.Body>
//                   <Card.Title style={{ fontSize: "17px" }}>
//                     Card Title
//                   </Card.Title>
//                   <br />
//                   <Card.Text style={{ fontSize: "15px", font: "solid" }}>
//                     Rp. 100.000
//                   </Card.Text>
//                 </Card.Body>
//               </Card>
//             </Flickity>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CardCarousel;
