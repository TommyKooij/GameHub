import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "4da9fb9fdde14d0e85d4b1797d602cf4",
  },
});
