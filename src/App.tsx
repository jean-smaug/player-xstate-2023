import { useState } from "react";
import { Center, Heading } from "@chakra-ui/react";
import Player from "./Player";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Center w="full" h="100vh" flexDir="column">
      <Heading mb="10">Projet XState</Heading>

      <Player />
    </Center>
  );
}

export default App;
