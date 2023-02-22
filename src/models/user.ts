import { player } from "./player";

export type user = {
  id: number;
  name: string;
  email: string;
  username: string;
  player: player;
  roles: [];
};