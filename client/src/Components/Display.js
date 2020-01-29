import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

import useLocalStorage from "../Hooks/useLocalStorage";
import Card from "./Card";

const Container = styled.div`
  background: rgba(57, 204, 204, 1);
  background: -webkit-linear-gradient(
    top,
    rgba(57, 204, 204, 1) 0%,
    rgba(34, 122, 122, 1) 100%
  );
  background: linear-gradient(
    to bottom,
    rgba(57, 204, 204, 1) 0%,
    rgba(34, 122, 122, 1) 100%
  );
  h1 {
    padding: 20px 0;
  }
  .cardContainer {
    display: flex;
    justify-content: space-around;
    align-self: center;
    flex-wrap: wrap;
    margin: 5px;
  }
`;

function Display() {
  const [data, setData] = useLocalStorage("players", []);
  // const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/players`)
      .then(res => {
        const players = res.data;
        console.log("hey", players);
        setData(players);
      })
      .catch(err => console.log("noo", err));
  }, []);

  if (data.length > 0) {
    return (
      <Container>
        <h1>Women's World Cup players</h1>
        <div className="cardContainer">
          {data.map(player => (
            <Card players={player} />
          ))}
        </div>
      </Container>
    );
  } else {
    return <h2>Loading...</h2>;
  }
}

export default Display;
