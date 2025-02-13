export interface Card {
  id?: string;
  name: string;
  marque: string;
  description: string;
  image: string;
  user_id: string;
}
export interface Parfum extends Card {
  user_id: number;
}
