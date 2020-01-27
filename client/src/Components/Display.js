import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

import useLocalStorage from "../Hooks/useLocalStorage";
import Card from "./Card";

const Container = styled.div``;

function Display() {
  const [data, setData] = useLocalStorage("players", []);

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
        {data.map(player => (
          <Card players={player} />
        ))}
      </Container>
    );
  } else {
    return <h2>Loading...</h2>;
  }
}

export default Display;
