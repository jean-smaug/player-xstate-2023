import React from "react";
import { useMachine } from "@xstate/react";
import { playerMachine } from "./player.fsm";

const Player = () => {
  // Récupération de la machine à état
  const [playerState, playerSend] = useMachine(playerMachine);

  // Réactions aux changements d'états
  React.useEffect(() => {}, []);

  // Rendu visuel
  return <div>Player</div>;
};

export default Player;
