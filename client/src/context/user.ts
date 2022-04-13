import { createContext } from "react";

export interface User {
  id: number;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  pictureLink: string;
}

interface IUserContext {
  user: User | null;
  setUser: (user: User | null) => void;
}

export const UserContext = createContext<IUserContext>({
  user: null,
  setUser: () => {},
});
