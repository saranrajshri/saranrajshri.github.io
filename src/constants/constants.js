const prod = {
  BASE_URL: "https://saranrajshri.herokuapp.com/api/",
};
const dev = {
  BASE_URL: "http://localhost:8000/api/",
};

export default process.env.NODE_ENV === "development" ? dev : prod;
