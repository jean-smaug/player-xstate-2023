import React from "react";
import { Button } from "@chakra-ui/react";

const Fetch = () => {
  // Déclaration de variables

  // Code applicatif
  const handleFetch = () => {
    console.log("handleFetch");

    // fetch("https://jsonplaceholder.typicode.com/todos/1")
    //   .then(() => {
    //     // OK
    //   })
    //   .catch(() => {
    //     // Pas OK
    //   });
  };

  // Rendu visuel
  return (
    <div>
      <Button>Fetch</Button>
    </div>
  );
};

export default Fetch;
