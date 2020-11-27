GHBit.onEvent(GHBit.enButton.B4, function () {
    radio.sendString("Z")
})
GHBit.onEvent(GHBit.enButton.B2, function () {
    radio.sendString("K")
})
GHBit.onEvent(GHBit.enButton.B3, function () {
    radio.sendString("A")
})
GHBit.onEvent(GHBit.enButton.B1, function () {
    radio.sendString("C")
})
radio.setGroup(3)
radio.setTransmitPower(7)
basic.showIcon(IconNames.Ghost)
basic.forever(function () {
    if (GHBit.Rocker(GHBit.enRocker.Up)) {
        radio.sendString("F")
        basic.showArrow(ArrowNames.North)
    } else if (GHBit.Rocker(GHBit.enRocker.Down)) {
        radio.sendString("B")
        basic.showArrow(ArrowNames.South)
    } else if (GHBit.Rocker(GHBit.enRocker.Left)) {
        radio.sendString("L")
        basic.showArrow(ArrowNames.West)
    } else if (GHBit.Rocker(GHBit.enRocker.Right)) {
        radio.sendString("R")
        basic.showArrow(ArrowNames.East)
    } else if (GHBit.Rocker(GHBit.enRocker.Press)) {
        radio.sendString("Y")
        basic.showIcon(IconNames.House)
    } else if (GHBit.Rocker(GHBit.enRocker.Nostate)) {
        radio.sendString("D")
        basic.showIcon(IconNames.Sword)
    }
})
