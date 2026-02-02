import { RECORD_TX_TO } from "./constants";

type StartGameCall = {
  to: `0x${string}`;
  value?: bigint;
  data?: `0x${string}`;
};

export const START_GAME_CALLS: StartGameCall[] = [
  {
    to: RECORD_TX_TO,
    value: BigInt(0),
    data: "0x",
  },
];
