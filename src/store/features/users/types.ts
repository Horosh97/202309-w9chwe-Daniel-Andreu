export interface UserStructureWithoutId {
  name: string;
  username: string;
  birthday: string;
  quote: string;
  profilePicture: string;
  isFriend: boolean;
  interest: string[];
}

export interface UserStructure extends UserStructureWithoutId {
  id: number;
}
export interface UsersStateStructure {
  users: UserStructure[];
}
