const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question(
    "Pilih olahraga:\n" +
    "1. Lari\n" +
    "2. Push-up\n" +
    "3. Plank\n" +
    "Pilihan: ",
    (olahraga) => {

        rl.question("Masukkan lama olahraga (menit): ", (waktu) => {

            waktu = parseFloat(waktu);

            let kalori;

            if (olahraga == "1") {
                kalori = (waktu / 5) * 60;
                console.log("Olahraga: Lari");
            }
            else if (olahraga == "2") {
                kalori = (waktu / 30) * 200;
                console.log("Olahraga: Push-up");
            }
            else if (olahraga == "3") {
                kalori = waktu * 5;
                console.log("Olahraga: Plank");
            }
            else {
                console.log("Pilihan olahraga tidak tersedia.");
                rl.close();
                return;
            }

            console.log("Waktu:", waktu, "menit");
            console.log("Kalori terbakar:", kalori, "kalori");

            rl.close();
        });
    }
);