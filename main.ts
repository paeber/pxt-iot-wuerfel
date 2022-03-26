/**
 * IoT-Wuerfel 
 * GBS St. Gallen, 2022
 */

//% color="#00796b" icon="\uf1eb"
namespace MCP23008 {
    let i2c_addr = 0x20

    //% blockId="MCP_I2C_Write"
    //% block="MCP I2C Write to %register Data %value"
    //% advanced=false
    export function i2c_write(register: MCP_Regs, value: number) {
        pins.i2cWriteNumber(i2c_addr, register, NumberFormat.UInt8LE, true)
        pins.i2cWriteNumber(i2c_addr, value, NumberFormat.UInt8LE, false)
    }


    //% blockId="MCP_I2C_Read"
    //% block="MCP read register %register"
    //% advanced=false
    export function i2c_read(register: MCP_Regs) {
        pins.i2cWriteNumber(i2c_addr, register, NumberFormat.UInt8LE, true)
        return pins.i2cReadNumber(i2c_addr, NumberFormat.UInt8LE, false)
    }

    //% blockId="MCP_Pin_Set"
    //% block="MCP set pin %pin to %value"
    //% advanced=false
    export function pin_set(pin: MCP_Pins, value: number) {
        let pinvalue = i2c_read(MCP_Regs.GPIO)
        if (value) {
            value = pinvalue | pin
        }
        else {
            value = pinvalue & ~pin
        }
        pins.i2cWriteNumber(i2c_addr, MCP_Regs.GPIO, NumberFormat.UInt8LE, true)
        pins.i2cWriteNumber(i2c_addr, value, NumberFormat.UInt8LE, false)
        return value
    }


}


basic.forever(function () {
	
})
