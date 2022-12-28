let x = 0
let y = 0
let list: number[] = []
let n = 0
let a = 0
function 燈數 (num: number) {
    if (num % 5 == 0) {
        x = 4
        y = Math.floor(num / 5) - 1
    } else {
        x = Math.floor(num / 5) - 1
        y = Math.floor(num / 5)
    }
    led.plot(x, y)
}
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    list = []
    for (let index = 0; index < 25; index++) {
        list.push(0)
    }
    n = 0
    while (n < a) {
        a = randint(0, 24)
        if (list[a] == 0) {
            list[a] = 1
            n += 1
            燈數(a + 1)
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    a += -1
    if (a < 0) {
        a = 0
    }
})
input.onButtonPressed(Button.B, function () {
    a += 1
    if (a > 25) {
        a = 25
    }
})
