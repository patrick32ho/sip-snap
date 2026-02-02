import type { Call } from "@coinbase/onchainkit/transaction/types";
import { RECORD_TX_TO } from "./constants";

export const START_GAME_CALLS: Call[] = [
  {
    to: RECORD_TX_TO,
    value: 0n,
    data: "0x",
  },
];
