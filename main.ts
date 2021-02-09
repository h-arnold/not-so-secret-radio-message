radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onGesture(Gesture.Shake, function () {
    if (radio_group == 100) {
        radio_group = 101
        radio.setGroup(radio_group)
        basic.showIcon(IconNames.SmallDiamond)
    } else {
        radio_group = 100
        radio.setGroup(radio_group)
        basic.showIcon(IconNames.SmallSquare)
    }
})
let radio_group = 0
radio_group = 101
radio.setGroup(radio_group)
basic.showIcon(IconNames.SmallDiamond)
