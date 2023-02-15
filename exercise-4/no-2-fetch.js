// karena fetch tidak bisa jalan di node js, maka saya coba pakai package node-fetch agar fetch API bisa jalan di node js
import fetch from "node-fetch";

const ambilDataUser = () => {
  fetch("https://reqres.in/api/users")
    .then((response) => response.json())
    .then((users) => console.log(users.data));
};

ambilDataUser();
