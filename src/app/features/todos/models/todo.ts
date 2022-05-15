export interface TodoJSON {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}
export interface Todo {
  id: number;
  userId: number
  username?: string;
  title: string;
  completed: 'Done' | 'Not Done';
}
