const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question("Input the time ", (timeInput) => {
    let i = timeInput;
    function startTimer() {
        let countdownTimer = setInterval(function () {
            console.log(i--);
            if (i <= 0) {
                console.log("counter finished")
                clearTimeout(countdownTimer);
            }
        }, 1000);
    }
    startTimer();
    rl.close()
});
