namespace LEDRun{
    //% blockId=LEDrunblock
    //% block="PLOT at $x and $y"
    //% x.min=0 x.max=4
    //% y.min=0 y.max=4
    export function plotAT(x: number, y: number): void{
        led.plot(x,y)
    }
}
