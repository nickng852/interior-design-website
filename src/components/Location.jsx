import React from "react";
import styled from "styled-components";
import { Container, Col, Row } from "react-bootstrap";
import Map from "./GoogleMap";

const Location = () => {
  return (
    <>
      <Wrapper>
        <Row>
          <Col>
            <Heading>Head Office</Heading>
            <Content></Content>
          </Col>
          <Col>
            <MapWrapper>
              <Map />
            </MapWrapper>
          </Col>
        </Row>
      </Wrapper>
    </>
  );
};

const Wrapper = styled(Container)`
  margin: 5rem auto;
  max-width: 1440px;
`;

const Heading = styled.div``;

const Content = styled.div``;

const MapWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 30vh;
`;

export default Location;
