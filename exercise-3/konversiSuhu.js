// fungsi untuk coverter suhu dari farenheit to celcius

export const converter = (suhuFarenheit) => {
  let hasil = (5 / 9) * (suhuFarenheit - 32);
  return `${suhuFarenheit} farenheit = ${hasil} celcius`;
};
