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

// RAK3172
enum eRAK3172_RC {
    OK,	                    //Command executed correctly without error.
    AT_ERROR,	            //Generic error or input is not supported.
    AT_PARAM_ERROR,         //The input parameter of the command is wrong.
    AT_BUSY_ERROR,          //The network is busy so the command is not completed.
    AT_TEST_PARAM_OVERFLOW,	//The parameter is too long.
    AT_NO_NETWORK_JOINED,	//Module is not yet joined to a network.
    AT_RX_ERROR,           	//Error detected during the reception of the command
    AT_DUTYCYLE_RESTRICTED, //Duty cycle limited and cannot send data

    UNKNOWN                 //Waiting for new RC
}

enum eBool {
    disable,   //disable represents 0
    enable     //enable represents 1
}

enum eBands {
    EU433,
    CN470,
    RU864,
    IN865,
    EU868,
    US915,
    AU915,
    KR920,
    AS923
}

enum Channels {
    //% block="One"    
    One = 1,
    //% block="Two"
    Two = 2,
    //% block="Three"
    Three = 3,
    //% block="Four"
    Four = 4,
    //% block="Five"
    Five = 5,
    //% block="Six"
    Six = 6,
    //% block="Seven"
    Seven = 7,
    //% block="Eight"
    Eight = 8,
    //% block="Nine"
    Nine = 9,
    //% block="Ten"
    Ten = 10,
    //% block="Eleven"
    Eleven = 11,
    //% block="Twelve"
    Twelve = 12,
    //% block="Thirteen"
    Thirteen = 13,
    //% block="Fourteen"
    Fourteen = 14,
    //% block="fifteen"
    Fifteen = 15,
    //% block="Sixteen"
    Sixteen = 16,
    //% block="Seventeen"
    Seventeen = 17,
    //% block="Eighteen"
    Eighteen = 18,
    //% block="Nineteen"
    Nineteen = 19,
    //% block="Twenty"
    Twenty = 20
}


