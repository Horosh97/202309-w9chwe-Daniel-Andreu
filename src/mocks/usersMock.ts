import { UserStructure } from "../store/features/users/types";

const usersMock: UserStructure[] = [
  {
    id: 1,
    name: "Juan Antonio Velasco",
    username: "@juanantoniov",
    birthday: "12/04/1994",
    quote: "Mi vida sería mejor si no estudiase nunca más en un bootcamp",
    profilePicture: "https://i.ibb.co/6FdCX8d/1.webp",
    isFriend: true,
    interests: "Pizza, Juego de tronos, Programación",
  },
  {
    id: 2,
    name: "Maria Rodriguez",
    username: "@mariarod",
    birthday: "25/08/1990",
    quote: "Amo viajar y descubrir nuevas culturas",
    profilePicture: "https://i.ibb.co/WP4C4V8/2.webp",
    isFriend: false,
    interests: "Viajes, Fotografía, Cocina",
  },
  {
    id: 3,
    name: "Carlos Pérez",
    username: "@carlosp",
    birthday: "05/11/1985",
    quote: "Apasionado por la tecnología y la ciencia",
    profilePicture: "https://i.ibb.co/jvN7MXV/3.webp",
    isFriend: true,
    interests: "Tecnología, Ciencia, Cine",
  },
];
export default usersMock;
