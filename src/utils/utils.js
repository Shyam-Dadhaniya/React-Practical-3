const getDate = (type) => {
  switch (type) {
    case "date":
      return new Date().getDate();
    case "month":
      return new Date().toLocaleDateString("en-US", { month: "short" });
    case "year":
      return new Date().getFullYear();
    case "day":
      return new Date()
        .toLocaleDateString("en-US", { weekday: "long" })
        .toUpperCase();
    default:
      break;
  }
};

export default getDate;
