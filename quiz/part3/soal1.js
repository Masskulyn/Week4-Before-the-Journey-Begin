function hapusSimbol(str) {
  // you can only write your code here!
  return str.replace(/[^a-zA-Z0-9]/g, ""); //berfungsi untuk menghapus simbol selain huruf dan angka
}

// TEST CASES
console.log(hapusSimbol("test%$4aa")); // test4aa
console.log(hapusSimbol("devel0p3r s3j@@ati")); // devel0p3rs3jati
console.log(hapusSimbol("ma@#k!an~")); // makan
console.log(hapusSimbol("coding")); // coding
console.log(hapusSimbol("1+3-5*2=100")); // 1352100
