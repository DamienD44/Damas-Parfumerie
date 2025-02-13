export interface Card {
  id?: number;
  name: string;
  marque: string;
  description: string;
  image: string;
  user_id: number;
}
export interface Parfum extends Card {}
