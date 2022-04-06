import React from "react";
import Card from "./Card";
import components from './card.css';
import Component  from "./Card.js";
import component from './Cards.js'

import image1 from "../assets/image1.jpg";
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image1 from "../assets/image4.jpg";
import image2 from '../assets/image5.jpg';

const cards = [
  {
    id: 1,
    title: "Java",
    image: image1,
    url: "https://java.com",
  },
  {
    id: 2,
    title: "Python",
    image: image2,
    url: "https://python.com",
  },
  {
    id: 3,
    title: "C",
    image: image3,
    url: "https://C.com",
  },
  {
    id: 4,
    title: "C#",
    image: image2,
    url: "https://C#.com",
  },
  {
    id: 5,
    title: "C++",
    image: image3,
    url: "https://C++.com",
  },
];

function Cards() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {cards.map(({ title, image, url, id }) => (
          <div className="col-md-4" key={id}>
            <Card imageSource={image} title={title} url={url} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
