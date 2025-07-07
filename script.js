const leftFold = document.getElementById("leftFold");
const rightFold = document.getElementById("rightFold");
const hiddenImage = document.getElementById("hiddenImage");
const result = document.getElementById("result");

const handLeft = document.getElementById("handLeft");
const handRight = document.getElementById("handRight");

let correctIndex = 0;
let isAnswerAllowed = false;

function openPaper() {
    // buka kertas
    leftFold.style.transform = "rotateY(-150deg)";
    rightFold.style.transform = "rotateY(150deg)";
    hiddenImage.style.opacity = 1;

    // tangan ke arah membuka
    handLeft.style.transform = "translateX(-150%)";
    handRight.style.transform = "translateX(60%)";

    setTimeout(() => {
        // tutup kembali
        leftFold.style.transform = "rotateY(0deg)";
        rightFold.style.transform = "rotateY(0deg)";
        hiddenImage.style.opacity = 0;

        // tangan kembali ke tengah
        handLeft.style.transform = "translateX(-100%)";
        handRight.style.transform = "translateX(0%)";

        isAnswerAllowed = true;
    }, 400);
}
function checkAnswer(index) {
    if (!isAnswerAllowed) {
        result.textContent = "❗ Buka dulu kertasnya!";
        result.style.color = "orange";
        return;
    }

    if (index === correctIndex) {
        result.textContent = "✅ Benar!";
        result.style.color = "green";
        document.getElementById("correctImage").style.display = "block";
        // Mainkan suara
        const audio = document.getElementById("correctSound");
        audio.currentTime = 0; // reset audio jika sebelumnya sudah diputar
        audio.play();
        // Efek confetti
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    } else {
        document.getElementById("popupWrong").style.display = "flex";
    }

    isAnswerAllowed = false;
}
function openFullscreen() {
    const elem = document.documentElement; // seluruh dokumen

    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
        /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
        /* IE11 */
        elem.msRequestFullscreen();
    }
}
