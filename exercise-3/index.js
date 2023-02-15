import { converter } from "./konversiSuhu.js";
import hitungBMI from "./hitungBMI.js";

console.log("---------------------KONVERSI SUHU---------------------------------\n");
const hasilSuhu = converter(99.2);
console.log(hasilSuhu);

console.log("\n---------------------HITUNG BMI---------------------------------\n");
const hasilBMI = hitungBMI(60, 170);

console.log(hasilBMI);
