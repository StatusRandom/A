input.onButtonPressed(Button.A, function () {
    music.playMelody("A G A G A G A G ", 120)
    basic.showNumber(6)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("Pillin!")
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(7)
    music.playMelody("C D C D C D C D ", 120)
})
basic.forever(function () {
    basic.showNumber(3)
    basic.pause(100)
    basic.showIcon(IconNames.No)
    basic.pause(100)
    basic.showNumber(2)
    basic.pause(1000)
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showIcon(IconNames.Yes)
    } else if (input.buttonIsPressed(Button.B)) {
        basic.showIcon(IconNames.No)
    }
})
control.inBackground(function () {
    music.playMelody("A G F E F G A B ", 120)
})
