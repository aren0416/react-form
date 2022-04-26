import { Link } from "react-router-dom";
import styled from "styled-components";

const SBottom = styled.div``;

export const Bottom = ({ text, link, linkText }) => {
  return (
    <SBottom>
      {text} <Link to={link}>{linkText}</Link>
    </SBottom>
  );
};
