import React from "react";
import { useMachine } from "@xstate/react";
import { Box } from "@chakra-ui/react";

import video from "./assets/pursuit-of-happiness.mp4";
import { playerMachine } from "./player.fsm";
import Splashscreen from "./components/Splashscreen";

const Player = () => {
  // Récupération de la machine à état
  const [playerState, playerSendEvent] = useMachine(playerMachine, {
    devTools: true,
  });

  // Récupération de la balise video
  const [videoElement, setVideoElement] = React.useState<HTMLVideoElement>();

  // Réactions aux changements d'états
  React.useEffect(() => {
    if (!videoElement) return;

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
        muted
      ></video>
    </Box>
  );
};

export default Player;
