// tests go here; this will not be compiled when this package is used as an extension.
MicroCar.setBrightness(40)

MicroCar.setAllLEDs(MicroCarColour.Blue)
basic.pause(1000)

MicroCar.setOneLED(MicroCarLED.LED0, MicroCarColour.Red)
MicroCar.setOneLED(MicroCarLED.LED1, MicroCarColour.Green)
MicroCar.setOneLED(MicroCarLED.LED2, MicroCarColour.Blue)
MicroCar.setOneLED(MicroCarLED.LED3, MicroCarColour.Purple)

MicroCar.successSound()
basic.pause(1000)

MicroCar.clearLEDs()
MicroCar.errorSound()