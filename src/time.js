const HOURS_IN_SECONDS = 3600;
const DAYS_IN_SECONDS = 24 * HOURS_IN_SECONDS;
const WEEKS_IN_SECONDS = 7 * DAYS_IN_SECONDS;
const YEARS_IN_SECONDS = 365 * DAYS_IN_SECONDS;
const loopText = ['y', 'w', 'd', 'h', 's']

function time(seconds) {
    let timeLeft = seconds;
    let timeStack = [];

    if (timeLeft === 0) {
        return '0s'
    }
    if (timeLeft / YEARS_IN_SECONDS >= 1) {
        timeStack[0] = Math.trunc(timeLeft / YEARS_IN_SECONDS);
        timeLeft = timeLeft % YEARS_IN_SECONDS;
    } else {
        timeStack[0] = 0;
    }
    if (timeLeft / WEEKS_IN_SECONDS >= 1) {
        timeStack[1] = Math.trunc(timeLeft / WEEKS_IN_SECONDS);
        timeLeft = timeLeft % WEEKS_IN_SECONDS;
    } else {
        timeStack[1] = 0;
    }
    if (timeLeft / DAYS_IN_SECONDS >= 1) {
        timeStack[2] = Math.trunc(timeLeft / DAYS_IN_SECONDS);
        timeLeft = timeLeft % DAYS_IN_SECONDS;
    } else {
        timeStack[2] = 0;
    }
    if (timeLeft / HOURS_IN_SECONDS >= 1) {
        timeStack[3] = Math.trunc(timeLeft / HOURS_IN_SECONDS);
        timeLeft = timeLeft % HOURS_IN_SECONDS;
    } else {
        timeStack[3] = 0;
    }

    timeStack[4] = timeLeft

    let result = '';
    let previousFlag = true;

    loopText.forEach(item => {
        let actualValue = timeStack.shift();
        if (actualValue > 0 && previousFlag) {
            result += `${actualValue}${item} `;
        } else {
            previousFlag = false
        }
    })

    return (result)

}


module.exports = time;