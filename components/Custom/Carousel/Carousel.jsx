"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "../Card/Card";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function CCarousel({ initialData }) {
  return (
    <section className="my-6">
      <Carousel responsive={responsive} infinite={true} ssr={true}  swipeable={true}  draggable={true} autoPlay={true} autoPlaySpeed={2500} pauseOnHover={true}  keyBoardControl={true}>
          {initialData.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              description={item.Description}
            />
          ))}
      </Carousel>
    </section>
  );
}
