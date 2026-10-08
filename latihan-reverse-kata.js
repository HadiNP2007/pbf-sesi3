const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Masukkan Kalimat Yang ingin dibalik:", (kalimat) => {
    
    let hasil = kalimat.split("").reverse().join("");
    
    console.log("Hasilnya Adalah :", hasil);
    
    rl.close();
})