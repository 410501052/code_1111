basic.forever(function () {
    for (let j = 0; j <= 1; j++) {
        for (let i = 0; i <= 1; i++) {
            led.plot(2 + (i - j), 2)
        }
    }
})
