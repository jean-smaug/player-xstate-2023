import React from "react";
import { Button } from "@chakra-ui/react";

const Fetch = () => {
  // Déclaration de variables
  const [isIdle, setIsIdle] = React.useState(true);

  // Code applicatif
  const handleFetch = () => {
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
      {isIdle && "Inactif"}
    </div>
  );
};

export default Fetch;
