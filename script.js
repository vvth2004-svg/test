const prizes = [
    "🎉 10.000 VNĐ",
    "🎉 20.000 VNĐ",
    "🎉 50.000 VNĐ",
    "🎉 100.000 VNĐ",
    "🎁 Gấu bông",
    "🍀 Chúc may mắn lần sau"
];

function spin() {
    let result = document.getElementById("result");

    let count = 0;

    let animation = setInterval(() => {
        let randomPrize =
            prizes[Math.floor(Math.random() * prizes.length)];

        result.innerText = randomPrize;

        count++;

        if (count > 20) {
            clearInterval(animation);

            let finalPrize =
                prizes[Math.floor(Math.random() * prizes.length)];

            result.innerText = "🏆 " + finalPrize;
        }
    }, 100);
}