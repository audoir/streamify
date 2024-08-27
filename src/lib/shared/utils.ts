import Jabber from "jabber";

export function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const jabber = new Jabber();
export const createRandomWord = (): string => {
  return jabber.createWord(getRandomInt(5, 10), true);
};