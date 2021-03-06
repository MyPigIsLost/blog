[toc]

# ASCII

| Bin(二进制)                    | Oct(八进制)          | Dec(十进制)       | Hex(十六进制)        | 缩写/字符                | 解释                           |
| ------------------------------ | -------------------- | ----------------- | -------------------- | ------------------------ | ------------------------------ |
| 0000 0000                      | 00                   | 0                 | 0x00                 | NUL(null)                | 空字符                         |
| 0000 0001                      | 01                   | 1                 | 0x01                 | SOH(startofheadline)     | 标题开始                       |
| 0000 0010                      | 02                   | 2                 | 0x02                 | STX(startoftext)         | 正文开始                       |
| 0000 0011                      | 03                   | 3                 | 0x03                 | ETX(endoftext)           | 正文结束                       |
| 0000 0100                      | 04                   | 4                 | 0x04                 | EOT(endoftransmission)   | 传输结束                       |
| 0000 0101                      | 05                   | 5                 | 0x05                 | ENQ(enquiry)             | 请求                           |
| 0000 0110                      | 06                   | 6                 | 0x06                 | ACK(acknowledge)         | 收到通知                       |
| 0000 0111                      | 07                   | 7                 | 0x07                 | BEL(bell)                | 响铃                           |
| 0000 1000                      | 010                  | 8                 | 0x08                 | BS(backspace)            | 退格                           |
| 0000 1001                      | 011                  | 9                 | 0x09                 | HT(horizontaltab)        | 水平制表符                     |
| 0000 1010                      | 012                  | 10                | 0x0A                 | LF(NLlinefeed,newline)   | 换行键                         |
| 0000 1011                      | 013                  | 11                | 0x0B                 | VT(verticaltab)          | 垂直制表符                     |
| 0000 1100                      | 014                  | 12                | 0x0C                 | FF(NPformfeed,newpage)   | 换页键                         |
| 0000 1101                      | 015                  | 13                | 0x0D                 | CR(carriagereturn)       | 回车键                         |
| 0000 1110                      | 016                  | 14                | 0x0E                 | SO(shiftout)             | 不用切换                       |
| 0000 1111                      | 017                  | 15                | 0x0F                 | SI(shiftin)              | 启用切换                       |
| 0001 0000                      | 020                  | 16                | 0x10                 | DLE(datalinkescape)      | 数据链路转义                   |
| 0001 0001                      | 021                  | 17                | 0x11                 | DC1(devicecontrol1)      | 设备控制1                      |
| 0001 0010                      | 022                  | 18                | 0x12                 | DC2(devicecontrol2)      | 设备控制2                      |
| 0001 0011                      | 023                  | 19                | 0x13                 | DC3(devicecontrol3)      | 设备控制3                      |
| 0001 0100                      | 024                  | 20                | 0x14                 | DC4(devicecontrol4)      | 设备控制4                      |
| 0001 0101                      | 025                  | 21                | 0x15                 | NAK(negativeacknowledge) | 拒绝接收                       |
| 0001 0110                      | 026                  | 22                | 0x16                 | SYN(synchronousidle)     | 同步空闲                       |
| 0001 0111                      | 027                  | 23                | 0x17                 | ETB(endoftrans.block)    | 结束传输块                     |
| 0001 1000                      | 030                  | 24                | 0x18                 | CAN(cancel)              | 取消                           |
| 0001 1001                      | 031                  | 25                | 0x19                 | EM(endofmedium)          | 媒介结束                       |
| 0001 1010                      | 032                  | 26                | 0x1A                 | SUB(substitute)          | 代替                           |
| 0001 1011                      | 033                  | 27                | 0x1B                 | ESC(escape)              | 换码(溢出)                     |
| 0001 1100                      | 034                  | 28                | 0x1C                 | FS(fileseparator)        | 文件分隔符                     |
| 0001 1101                      | 035                  | 29                | 0x1D                 | GS(groupseparator)       | 分组符                         |
| 0001 1110                      | 036                  | 30                | 0x1E                 | RS(recordseparator)      | 记录分隔符                     |
| 0001 1111                      | 037                  | 31                | 0x1F                 | US(unitseparator)        | 单元分隔符                     |
| 0010 0000                      | 040                  | 32                | 0x20                 | (space)                  | 空格                           |
| 0010 0001                      | 041                  | 33                | 0x21                 | !                        | 叹号                           |
| 0010 0010                      | 042                  | 34                | 0x22                 | "                        | 双引号                         |
| 0010 0011                      | 043                  | 35                | 0x23                 | #                        | 井号                           |
| 0010 0100                      | 044                  | 36                | 0x24                 | $                        | 美元符                         |
| 0010 0101                      | 045                  | 37                | 0x25                 | %                        | 百分号                         |
| 0010 0110                      | 046                  | 38                | 0x26                 | &                        | 和号                           |
| 0010 0111                      | 047                  | 39                | 0x27                 | '                        | 闭单引号                       |
| 0010 1000                      | 050                  | 40                | 0x28                 | (                        | 开括号                         |
| 0010 1001                      | 051                  | 41                | 0x29                 | )                        | 闭括号                         |
| 0010 1010                      | 052                  | 42                | 0x2A                 | *                        | 星号                           |
| 0010 1011                      | 053                  | 43                | 0x2B                 | +                        | 加号                           |
| 0010 1100                      | 054                  | 44                | 0x2C                 | ,                        | 逗号                           |
| 0010 1101                      | 055                  | 45                | 0x2D                 | -                        | 减号/破折号                    |
| 0010 1110                      | 056                  | 46                | 0x2E                 | .                        | 句号                           |
| 0010 1111                      | 057                  | 47                | 0x2F                 | /                        | 斜杠                           |
| 0011 0000<br/>……<br/>0011 1001 | 060<br/>……<br/>071   | 48<br/>……<br/>57  | 0x30<br/>……<br/>0x39 | 0<br/>……<br/>9           | 字符0<br/>……<br/>字符9         |
| 0011 1010                      | 072                  | 58                | 0x3A                 | :                        | 冒号                           |
| 0011 1011                      | 073                  | 59                | 0x3B                 | ;                        | 分号                           |
| 0011 1100                      | 074                  | 60                | 0x3C                 | <                        | 小于                           |
| 0011 1101                      | 075                  | 61                | 0x3D                 | =                        | 等号                           |
| 0011 1110                      | 076                  | 62                | 0x3E                 | >                        | 大于                           |
| 0011 1111                      | 077                  | 63                | 0x3F                 | ?                        | 问号                           |
| 0100 0000                      | 0100                 | 64                | 0x40                 | @                        | 电子邮件符号                   |
| 0100 0001<br/>……<br/>0101 1010 | 0101<br/>……<br/>0132 | 65<br/>……<br/>90  | 0x41<br/>……<br/>0x5A | A<br/>……<br/>Z           | 大写字母A<br/>……<br/>大写字母Z |
| 0101 1011                      | 0133                 | 91                | 0x5B                 | [                        | 开方括号                       |
| 0101 1100                      | 0134                 | 92                | 0x5C                 | \                        | 反斜杠                         |
| 0101 1101                      | 0135                 | 93                | 0x5D                 | ]                        | 闭方括号                       |
| 0101 1110                      | 0136                 | 94                | 0x5E                 | ^                        | 脱字符                         |
| 0101 1111                      | 0137                 | 95                | 0x5F                 | _                        | 下划线                         |
| 0110 0000                      | 0140                 | 96                | 0x60                 | `                        | 开单引号                       |
| 0110 0001<br/>……<br/>0111 1010 | 0141<br/>……<br/>0172 | 97<br/>……<br/>122 | 0x61<br/>……<br/>0x7A | a<br/>……<br/>z           | 小写字母a<br/>……<br/>小写字母z |
| 0111 1011                      | 0173                 | 123               | 0x7B                 | {                        | 开花括号                       |
| 0111 1100                      | 0174                 | 124               | 0x7C                 | \|                       | 垂线                           |
| 0111 1101                      | 0175                 | 125               | 0x7D                 | }                        | 闭花括号                       |
| 0111 1110                      | 0176                 | 126               | 0x7E                 | ~                        | 波浪号                         |
| 0111 1111                      | 0177                 | 127               | 0x7F                 | DEL(delete)              | 删除                           |





