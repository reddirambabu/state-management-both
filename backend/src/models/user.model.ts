export interface User {
  id: number;
  name: string;
  email: string;
}

export let users: User[] = [
  { id: 1, name: "Alice", email: "alice@example.com" },
];