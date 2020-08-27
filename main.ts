music.playMelody("E B E B E E F - ", 200)
basic.showLeds(`
    . . . . .
    . # . # .
    # . . . #
    . # # # .
    . . . . .
    `)
music.playTone(262, music.beat(BeatFraction.Whole))
basic.showIcon(IconNames.Heart)
