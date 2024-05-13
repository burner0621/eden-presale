import { PublicKey } from "@solana/web3.js";

export const PRESALE_PROGRAM_PUBKEY = new PublicKey(
  "FBHBauX9kYhjQEtMPbhK64HFRUpVWvMJB6AdYs6f5o9U"
);

export const TOKEN_PUBKEY = new PublicKey(
  "DnWjVQyptmxvJgiKafTr6GzvEAoy6nmENdxf1Upvw8B"
);

export const PRESALE_WALLET_PUBKEY = new PublicKey(
  "4TBZD1Cbw5d8NM4qC7HEqivPcbMcMFL2SQ29DJ8NiZ4q"
);

export const PRESALE_SEED = "CLUB_PRESALE_SEED";
export const USER_SEED = "CLUB_USER_SEED";
export const PRESALE_ID = 2;

export const PRESALE_AUTHORITY = new PublicKey(
  "B7AM6s1cEukJsNmDdtN1FTTqLYLpr1BokBUfJiHVWArk"
);

export const TOKEN_PRESALE_HARDCAP = 50000000; // token
export const PRICE_PER_TOKEN = 7350; // $
export const PRICE_DECIMAL = 8

export const BUYER_SOFTCAP = 0.2; // sol
export const BUYER_HARDCAP = 50; // sol
export const BUYER_TOKEN_HARDCAP = 50000000; // token

export const TOKEN_DECIMAL = 8;
export const SOL_TOKEN_DECIMAL = 9;
export const USDT_TOKEN_DECIMAL = 6;

export const SOL_TOKEN_PUBKEY = new PublicKey ("So11111111111111111111111111111111111111112")
export const USDT_TOKEN_PUBKEY = new PublicKey('A9bCEvAtMHqtBbhCQ7vqRNiZ4YKnXs1tZKpCz5cP2mNx')

export const SOL_PRICEFEED_ID = new PublicKey('J83w4HKfqxwcq3BEMMkPFSppX3gqekLyLJBexebFVkix')

export const START_TIME = new Date("2024-05-21T15:00:00Z")
export const END_TIME = new Date("2024-05-22T15:00:00Z")