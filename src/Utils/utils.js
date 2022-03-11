const today = new Date();
const date = String(today.getDate()).padStart(2, "0");
const month = String(today.toLocaleString("default", { month: "short" }));
const year = today.getFullYear();
const day = new Date().getMinutes();
const CurrentDay = new Date()
  .toLocaleDateString("en-US", {
    weekday: "long",
  })
  .toUpperCase();

const getDay = () => {
  return new Date().getMinutes();
};
export { date, month, year, CurrentDay, day, getDay };
