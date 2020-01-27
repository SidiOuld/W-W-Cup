import React from "react";
import styled from "styled-components";

const Container = styled.div``;

function Card(props) {
  const players = props.players;
  return (
    <Container>
      <h1>{players.name}</h1>
    </Container>
  );
}

export default Card;
