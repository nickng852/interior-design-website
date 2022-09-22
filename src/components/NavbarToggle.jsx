import styled from "styled-components";

export const Hamburger = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ::before,
  ::after {
    content: "";
    position: absolute;
    width: 28px;
    height: 2px;
    background-color: ${({ navbar }) => (navbar ? "#353b48" : "#fff")};
    border-radius: 35px;
    transition: all 0.3s ease;

    // Small devices (landscape phones, less than 768px)
    @media (max-width: 767.98px) {
      width: 25px;
    }

    // X-Small devices (portrait phones, less than 576px)
    @media (max-width: 575.98px) {
      width: 22.5px;
    }
  }

  ::before {
    transform: ${({ open }) => (open ? "rotate(45deg)" : "translateY(-4.5px)")};
  }

  ::after {
    transform: ${({ open }) => (open ? "rotate(-45deg)" : "translateY(4.5px)")};
  }
`;
