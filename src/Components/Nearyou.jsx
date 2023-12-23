import React from 'react';
import "../Style/Nearyou.css";
const Card = ({ imgSrc, title, text, updatedAt }) => (
  <div className="card-container">
    <div className="hlo">
      <h3>__ Smyle Big Smyle XL - __</h3>
      {/* <h1>HELP US TO HELP YOU!</h1> */}
    </div>

    <div className="card">
      <img className="card-img-top" src={imgSrc} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">{updatedAt}</small>
      </div>
    </div>
  </div>
);

const CardGroup = () => {
  const cardData = [
  
    {
      imgSrc: "services-4.jpg",
      title: <h3>DENTAL CARE IN BABIES-</h3>,
      text: "This card has supporting text below as a natural lead-in to additional content .",
    },
    {
      imgSrc: "services-4.jpg",
      title: "Card title 2",
      text: "This card has supporting text below as a natural lead-in to additional content.",
    },{
      imgSrc: "services-4.jpg",
      title: "Card title 2",
      text: "This card has supporting text below as a natural lead-in to additional content.",
    },
    {
      imgSrc: "services-4.jpg",
      title: "Card title 2",
      text: "This card has supporting text below as a natural lead-in to additional content.",
    },
    {
      imgSrc: "services-4.jpg",
      title: "Card title 2",
      text: "This card has supporting text below as a natural lead-in to additional content.",
    },
    {
      imgSrc: "services-4.jpg",
      title: "Card title 2",
      text: "This card has supporting text below as a natural lead-in to additional content.",
    },
    {
      imgSrc: "services-4.jpg",
      title: "Card title 2",
      text: "This card has supporting text below as a natural lead-in to additional content.",
    },
    {
      imgSrc: "services-4.jpg",
      title: "Card title 2",
      text: "This card has supporting text below as a natural lead-in to additional content.",
    },
    // Add more card data as needed
  ];

  return (
    <div className="card-group">
      {cardData.map((card, index) => (
        <Card
          key={index} // It's recommended to use a unique key for each element when mapping over arrays
          imgSrc={card.imgSrc}
          title={card.title}
          text={card.text}
          updatedAt={card.updatedAt}
        />
      ))}
    </div>
  );
};

export default CardGroup;
