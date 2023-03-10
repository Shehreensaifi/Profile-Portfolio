import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import styled from "styled-components";

const Star = ({ star }) => {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    return (
      <span key={index}>
        {star >= index + 1 ? (
          <FaStar className="icon" />
        ) : star >= index + 0.5 ? (
          <FaStarHalfAlt className="icon" />
        ) : (
          <AiOutlineStar className="icon" />
        )}
      </span>
    );
  });
  return (
    <Wrapper>
      <div className="icon-style">{ratingStar}</div>;
    </Wrapper>
  );
};
const Wrapper = styled.section`
  justify-content: flex-start;

  .icon {
    font-size: 2rem;
    color: rgb(8, 132, 8);
  }
  .empty-icon {
    font-size: 2.6rem;
  }
  p {
    padding-left: 1.2rem;
    margin: 0;
  }
`;
export default Star;
