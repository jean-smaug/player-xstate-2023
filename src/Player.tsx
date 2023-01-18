import React from "react";
import { useMachine } from "@xstate/react";
import { Box } from "@chakra-ui/react";

import video from "./assets/pursuit-of-happiness.mp4";
import { playerMachine } from "./player.fsm";

const Player = () => {
  // Récupération de la machine à état
  const [playerState, playerSend] = useMachine(playerMachine, {
    devTools: true,
  });

  // Récupération de la balise video
  const [videoElement, setVideoElement] =
    React.useState<HTMLVideoElement>(null);

  // Réactions aux changements d'états
  React.useEffect(() => {
    // TODO
  }, [playerState]);

  // Rendu visuel
  return (
    <Box position="relative">
      <video
        style={{
          height: "50vh",
        }}
        loop={false}
        ref={(videoElement) =>
          setVideoElement(videoElement as HTMLVideoElement)
        }
        src={video}
      ></video>
    </Box>
  );
};

export default Player;
