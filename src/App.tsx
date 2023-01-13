import { useState } from "react";
import { Center, Heading } from "@chakra-ui/react";
import Player from "./Player";
import Fetch from "./Fetch";

function App() {
  return (
    <Center w="full" h="100vh" flexDir="column">
      <Heading mb="10">Projet XState</Heading>

      {import.meta.env.VITE_APP === "fetch" && <Fetch />}
      {import.meta.env.VITE_APP === "player" && <Player />}
    </Center>
  );
}

export default App;
