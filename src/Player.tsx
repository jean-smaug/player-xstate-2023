import React from "react";
import { useMachine } from "@xstate/react";
import { Box } from "@chakra-ui/react";

import video from "./assets/pursuit-of-happiness.mp4";
import { playerMachine } from "./player.fsm";

const Player = () => {
  // Récupération de la machine à état
  const [playerState, playerSend] = useMachine(playerMachine);

  // Récupération de la balise video
  const videoRef = React.useRef(null);
  const videoElement = videoRef.current;

  // Réactions aux changements d'états
  React.useEffect(() => {}, [playerState]);

  // Rendu visuel
  return (
    <Box position="relative">
      <video
        style={{
          height: "50vh",
        }}
        loop={false}
        ref={videoRef}
        src={video}
      ></video>
    </Box>
  );
};

export default Player;
