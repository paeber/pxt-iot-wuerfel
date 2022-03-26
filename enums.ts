// Enum defines

enum Logic_LV {
    enable = 0,
    disable = 1
}

enum MCP_Regs {
    IODIR = 0x01,
    DEFVAL = 0x08,
    GPPU = 0x06,
    GPIO = 0x09
}


enum MCP_Pins {
    RAK_RST = 0x01,
    RAK_LED = 0x02,
    OC1     = 0x04,
    OC2     = 0x08,
    GP4     = 0x10,
    GP5     = 0x20, 
    GP6     = 0x40,
    USR_LED = 0x80
}
