import React from "react";
import styled from "styled-components";
const ContentComp = () => {
  return (
    <Wrapper>
      <div className="">
        <div className=" container bg-light header d-lg-grid">
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
    img: "images/guarantee 1.svg",
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
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2rem;

    .wrap {
      margin-top: 0.2rem;
    }
    .para {
      border: 5px solid white;
      padding: 10px;
      box-shadow: 7px 10px 5px 0px rgba(230, 218, 218, 0.75);
      gap: 1rem;
      margin-bottom: 2rem;
    }
  }
`;
