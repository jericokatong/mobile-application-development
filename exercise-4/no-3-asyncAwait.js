// karena fetch tidak bisa jalan di node js, maka saya coba pakai package node-fetch agar fetch API bisa jalan di node js
import fetch from "node-fetch";

const ambilDataUser = async () => {
  let response = await fetch("https://reqres.in/api/users");
  response = await response.json();
  console.log(response.data);
};

ambilDataUser();
