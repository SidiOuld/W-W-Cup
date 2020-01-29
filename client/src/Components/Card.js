import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 2px solid black;
  width: 200px;
  height: 100px;
  margin: 10px 5px;
  h4,
  h5,
  h6 {
    margin: 10px;
  }
`;

function Card(props) {
  const players = props.players;
  return (
    <Container key={players.id}>
      <h4> Nane: {players.name}</h4>
      <h5> Country: {players.country}</h5>
      <h6>Searches: {players.searches}</h6>
    </Container>
  );
}

export default Card;
