import React from "react";
import styled from "styled-components";
const ContentComp = () => {
  return (
    <Wrapper>
      <div className="">
        <div className=" container bg-light header">
          {card.map((card) => (
            <div className="d-flex para" key={card.id}>
              <div className=" wrap">
                <img src={card.img} alt="" />
              </div>
              <div>
                <h6>{card.title}</h6>
                <p>{card.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default ContentComp;

const card = [
  {
    id: 1,
    title: "100% warranty",
    body: "You have 30 days to return",
    img: "images/Group (1).svg",
  },
  {
    id: 2,
    title: "Fast Delivery",
    body: "Delivery in less than 24hrs.",
    img: "images/fast 1.svg",
  },
  {
    id: 3,
    title: "Secured Payment",
    body: "We ensure secure transactions.",
    img: "images/Vector.svg",
  },
  {
    id: 4,
    title: "24 hour Support",
    body: "Contact us 24hrs a day.",
    img: "images/Group (3).svg",
  },
];

export const Wrapper = styled.div`
  .header {
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    .wrap {
      margin-top: 0.2rem;
    }
    .para {
      border: 3px solid white;
      padding: 2px;
      box-shadow: 2px, 5px;
    }
  }
`;
