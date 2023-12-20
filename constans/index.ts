export const headerLinks = [
  {
    label: "Inizio",
    route: "/",
  },
  {
    label: "Crea Eventi",
    route: "/events/create",
  },
  {
    label: "Profilo",
    route: "/profile",
  },
];

export const eventDefaultValues = {
  title: "",
  description: "",
  location: "",
  imageUrl: "",
  startDateTime: new Date(),
  endDateTime: new Date(),
  categoryId: "",
  price: "",
  isFree: false,
  url: "",
};
