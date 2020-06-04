---

---

[toc]

# TCP传输控制协议

## 概述

传输控制协议 TCP(Transmission Control Protocol)：是面向连接的、可靠的传输协议。

## 数据结构

TCP 层传输的数据单元是报文，也称为报文段， 一个 TCP 报文段由首部和数据段两部
分组成。

首部是 TCP 为了实现端到端可靠传输所加上的控制信息，而数据段部分则是由高层即
应用层来的数据。

![tcpchuanshukongzhixieyi1](/pic/tcpchuanshukongzhixieyi1.jpg)

## 连接管理

### 连接建立

三次握手建立 TCP 连接。

![tcpchuanshukongzhixieyi2](/pic/tcpchuanshukongzhixieyi2.jpg)

### 连接释放

四次握手释放 TCP 连接。

![tcpchuanshukongzhixieyi3](/pic/tcpchuanshukongzhixieyi3.jpg)

## 流量控制和拥塞控制

TCP 采用可变发送窗口机制很方便地在 TCP 连接上实现对发送端的流量控制。

发送端窗口的大小由接收端来控制，并且将窗口大小的值写入 TCP 报文段首部的窗口字段，写入的数值就是当前设定的接收窗口大小。

## 差错控制

![tcpchuanshukongzhixieyi4](/pic/tcpchuanshukongzhixieyi4.jpg)

## 服务

（1）可靠的、有连接的传输。

（2）流量控制。

（3）拥塞控制。

（4）对段的检错、应答、重传、排序。



