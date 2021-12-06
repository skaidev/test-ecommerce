import React from "react";

const Content = () => {
  return (
    <div className=" container ">
      <div className="bg-light">
        {card.map((card) => (
          <div key={card.id}>
            <div>
              <h6>{card.title}</h6>
              <p>{card.body}</p>
            </div>
            <div>
              <img src={card.image} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;

const card = [
  {
    id: 1,
    img: "images/Group (1).svg",
    title: "100% warranty",
    body: "You have 30 days to return",
  },
  {
    id: 2,
    title: "Fast Delivery",
    body: "Delivery in less than 24hrs.",
    img: "images/Group (3).svg",
  },
  {
    id: 3,
    title: "Secured Payment",
    body: "We ensure secure transactions.",
    img: "images/Group (4).svg",
  },
  {
    id: 4,
    title: "24 hour Support",
    body: "Contact us 24hrs a day.",
    img: "images/fast 1.svg",
  },
];
