// fungsi untuk menghitung BMI dan juga menentukan kategorinya

const hitungBMI = (berat, tinggi) => {
  tinggi = tinggi / 100;
  let hasil = berat / (tinggi * tinggi);
  let kategori;
  if (hasil < 17) {
    kategori = "sangat kurus";
  } else if (hasil >= 17 && hasil <= 18.4) {
    kategori = "kurus";
  } else if (hasil >= 18.5 && hasil <= 25) {
    kategori = "normal";
  } else if (hasil >= 25.1 && hasil <= 27) {
    kategori = "gemuk";
  } else if (hasil > 27) {
    kategori = "sangat gemuk";
  } else {
    return `error`;
  }
  return `Berat badan: ${berat} kg\nTinggi Badan: ${tinggi} m\nBMI: ${hasil}\nkategori: ${kategori}`;
};

export default hitungBMI;
