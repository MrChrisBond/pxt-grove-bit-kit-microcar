enum MicroCarLED {
    //% block="LED 0"
    LED0 = 0,
    //% block="LED 1"
    LED1 = 1,
    //% block="LED 2"
    LED2 = 2,
    //% block="LED 3"
    LED3 = 3
}

enum MicroCarColour {
    //% block="red"
    Red = 0xff0000,
    //% block="green"
    Green = 0x00ff00,
    //% block="blue"
    Blue = 0x0000ff,
    //% block="yellow"
    Yellow = 0xffff00,
    //% block="purple"
    Purple = 0xff00ff,
    //% block="cyan"
    Cyan = 0x00ffff,
    //% block="white"
    White = 0xffffff,
    //% block="off"
    Off = 0x000000
}

/**
 * LED and buzzer controls for the Grove Bit Kit micro:car.
 */
//% color="#1E90FF" weight=100 icon="\uf1b9" block="MicroCar LEDs"
namespace MicroCar {
    let strip: neopixel.Strip = null
    let initialised = false

    function setup(): void {
        if (!initialised) {
            strip = neopixel.create(DigitalPin.P1, 4, NeoPixelMode.RGB)
            strip.setBrightness(40)
            strip.clear()
            strip.show()

            music.setBuiltInSpeakerEnabled(false)
            pins.analogSetPitchPin(AnalogPin.P0)

            initialised = true
        }
    }

    function clamp(value: number, low: number, high: number): number {
        if (value < low) return low
        if (value > high) return high
        return value
    }

    /**
     * Set the brightness of the car LEDs.
     */
    //% block="set LED brightness to $brightness"
    //% brightness.min=0 brightness.max=255 brightness.defl=40
    //% weight=100
    export function setBrightness(brightness: number): void {
        setup()
        strip.setBrightness(clamp(brightness, 0, 255))
        strip.show()
    }

    /**
     * Set all four car LEDs to one colour.
     */
    //% block="set all LEDs to $colour"
    //% weight=99
    export function setAllLEDs(colour: MicroCarColour): void {
        setup()
        strip.showColor(colour)
    }

    /**
     * Set one car LED to one colour.
     */
    //% block="set $led to $colour"
    //% weight=98
    export function setOneLED(led: MicroCarLED, colour: MicroCarColour): void {
        setup()
        strip.setPixelColor(led, colour)
        strip.show()
    }

    /**
     * Set all car LEDs using red, green and blue values.
     */
    //% block="set all LEDs red $red green $green blue $blue"
    //% red.min=0 red.max=255 red.defl=255
    //% green.min=0 green.max=255 green.defl=0
    //% blue.min=0 blue.max=255 blue.defl=0
    //% weight=97
    export function setAllRGB(red: number, green: number, blue: number): void {
        setup()
        red = clamp(red, 0, 255)
        green = clamp(green, 0, 255)
        blue = clamp(blue, 0, 255)
        strip.showColor(neopixel.rgb(red, green, blue))
    }

    /**
     * Set one car LED using red, green and blue values.
     */
    //% block="set $led red $red green $green blue $blue"
    //% red.min=0 red.max=255 red.defl=255
    //% green.min=0 green.max=255 green.defl=0
    //% blue.min=0 blue.max=255 blue.defl=0
    //% weight=96
    export function setOneRGB(led: MicroCarLED, red: number, green: number, blue: number): void {
        setup()
        red = clamp(red, 0, 255)
        green = clamp(green, 0, 255)
        blue = clamp(blue, 0, 255)
        strip.setPixelColor(led, neopixel.rgb(red, green, blue))
        strip.show()
    }

    /**
     * Turn off all car LEDs.
     */
    //% block="turn off LEDs"
    //% weight=95
    export function clearLEDs(): void {
        setup()
        strip.clear()
        strip.show()
    }

    /**
     * Play a tone using the car buzzer.
     */
    //% block="play buzzer tone $frequency Hz for $duration ms"
    //% frequency.min=100 frequency.max=2000 frequency.defl=440
    //% duration.min=10 duration.max=2000 duration.defl=300
    //% weight=90
    export function playBuzzerTone(frequency: number, duration: number): void {
        setup()
        music.playTone(frequency, duration)
    }

    /**
     * Play a simple success sound.
     */
    //% block="play success sound"
    //% weight=89
    export function successSound(): void {
        setup()
        music.playTone(523, 120)
        music.playTone(659, 120)
        music.playTone(784, 180)
    }

    /**
     * Play a simple error sound.
     */
    //% block="play error sound"
    //% weight=88
    export function errorSound(): void {
        setup()
        music.playTone(220, 150)
        music.playTone(175, 250)
    }
}