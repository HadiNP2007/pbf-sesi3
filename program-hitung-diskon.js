const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Program HItung Diskon");
console.log("1. Pulpen: 5000");
console.log("2. Buku: 10000");
console.log("3. Pensil: 3000");
console.log("4. Sepatu: 300000");
console.log("5. Sendal: 20000");

function harga(pilihan) {
    switch (pilihan) {
        case "1" : return 5000;
        case "2" : return 10000;
        case "3" : return 3000;
        case "4" : return 300000;
        case "5" : return 20000;
        default : return 0;
    }
}

rl.question("Pilih Barang (contoh : 1 2 3)", (input) => {
    let pilihan = input.split(" ");
    
    if (pilihan.length < 3) {
        console.log("Minimal 3 barang");
        rl.close();
        return;
    }



    let totalbelanja =
        harga(pilihan[0]) +
        harga(pilihan[1]) +
        harga(pilihan[2]);
    
    let diskon = 0;
    if (totalbelanja >= 300000)
        diskon = totalbelanja * 10 / 100;
    else if (totalbelanja >= 100000)
        diskon = totalbelanja * 5 / 100;
    else if (totalbelanja >= 50000)
        diskon = totalbelanja * 3 / 100;
    
    let totalbayar = totalbelanja - diskon;
    
    console.log("\nHasil");
    console.log("Total Belanja :", "Rp", totalbelanja);
    
    if (diskon > 0) {
        console.log("Diskon", "Rp", diskon);
        console.log("Total bayar", "Rp", totalbayar);
    } else {
        console.log("Anda tidak memenuhi syarat untuk mendapatkan diskon");
        console.log("Total Bayar :", "Rp", totalbayar);
    }
    
    rl.close()
});
    