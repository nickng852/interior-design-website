import styled from "styled-components";
import { Link } from "react-router-dom";

export const Logo = styled(Link)`
  margin: 0.5rem 3rem;
  padding: 1.8rem;
  font-family: "Jost", sans-serif;
  font-size: 1.4rem;
  font-weight: 400;
  color: ${({ navbar }) => (navbar ? "#353b48" : "#fff")};
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;

  span {
    font-size: 1.05rem;
    font-weight: 300;
  }

  &:hover {
    color: ${({ navbar }) => (navbar ? "#353b48" : "#fff")};
  }

  // X-Large devices (large desktops, less than 1400px)
  @media (max-width: 1399.98px) {
    margin: 0.5rem 2rem;
    padding: 1.5rem;
    font-size: 1.3rem;

    span {
      font-size: 1rem;
    }
  }

  // Large devices (desktops, less than 1200px)
  @media (max-width: 1199.98px) {
  }

  // Medium devices (tablets, less than 992px)
  @media (max-width: 991.98px) {
    margin: 0.5rem 1rem;
    padding: 1rem;
    font-size: 1.2rem;

    span {
      font-size: 0.95rem;
    }
  }

  // Small devices (landscape phones, less than 768px)
  @media (max-width: 767.98px) {
    margin: 0.5rem;
    padding: 0.9rem;
    font-size: 1.1rem;

    span {
      font-size: 0.9rem;
    }
  }

  // X-Small devices (portrait phones, less than 576px)
  @media (max-width: 575.98px) {
    margin: 0;
    padding: 0.8rem;
    font-size: 1rem;

    span {
      font-size: 0.85rem;
    }
  }
`;
