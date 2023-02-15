import axios from "axios";

const ambilDataUser = async () => {
  let response = await axios.get("https://reqres.in/api/users");
  console.log(response.data.data);
};

ambilDataUser();
