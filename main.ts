basic.forever(function () {
    for (let j = 0; j <= 1; j++) {
        for (let i = 0; i <= 1; i++) {
            led.plot(2 - (i - j), 2)
            basic.pause(100)
            led.plot(2, 2 - (i - j))
            basic.pause(100)
        }
    }
    for (let i = 0; i <= 4; i++) {
        for (let j = 0; j <= 4; j++) {
            led.plot(i - (2 + (j - 4)), 2)
            basic.pause(100)
            led.plot(2, i - (2 + (j - 4)))
        }
    }
})
