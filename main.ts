let number = 0
input.onGesture(Gesture.Shake, function () {
    number = randint(1, 9)
    if (number == 1) {
        basic.showLeds(`
            # # # . .
            . . # . .
            . . # . .
            . . # . .
            # # # # #
            `)
        basic.pause(500)
        basic.clearScreen()
    } else if (number == 2) {
        basic.showLeds(`
            . # # . .
            # . . # .
            . . . # .
            . # # . .
            # # # # #
            `)
        basic.pause(500)
        basic.clearScreen()
    } else if (number == 3) {
        basic.showLeds(`
            . # # # .
            . . . . #
            . # # # #
            . . . . #
            . # # # .
            `)
        basic.pause(500)
        basic.clearScreen()
    } else if (number == 4) {
        basic.showLeds(`
            . . . # .
            . . # # .
            . # . # .
            # # # # #
            . . . # .
            `)
        basic.pause(500)
        basic.clearScreen()
    } else if (number == 5) {
        basic.showLeds(`
            # # # # #
            # . . . .
            # # # # .
            . . . . #
            # # # # .
            `)
        basic.pause(500)
        basic.clearScreen()
    } else if (number == 6) {
        basic.showLeds(`
            . # # # .
            # . . . .
            # # # # .
            # . . . #
            . # # # .
            `)
        basic.pause(500)
        basic.clearScreen()
    } else if (number == 7) {
        basic.showLeds(`
            # # # # .
            . . . # .
            . . # . .
            . # . . .
            . # . . .
            `)
        basic.pause(500)
        basic.clearScreen()
    } else if (number == 8) {
        basic.showLeds(`
            . # # # .
            # . . . #
            . # # # .
            # . . . #
            . # # # .
            `)
        basic.pause(500)
        basic.clearScreen()
    } else if (number == 9) {
        basic.showLeds(`
            . # # # .
            # . . . #
            # # # # #
            . . . . #
            # # # # .
            `)
        basic.pause(500)
        basic.clearScreen()
    }
})
