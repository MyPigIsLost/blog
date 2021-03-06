[toc]

# 奈奎斯特定理与香农定理

## 数学基础

（1）
$$
x=\log_a N
$$
意思是a的x次方等于N，（a>0且a != 1）。数x叫做a为底N的对数。

（2）当幂的指数为小数时, 如
$$
2^{\frac{1}{2}}
$$
实际上就是先是2的一次方，再开方，如果指数是三分之二，那么就是2的二次方再开三次方。

## 无噪声下的信道容量（奈奎斯特定理）

奈奎斯特在1942年证明，无噪声下的信道的最大信号传输速率与信道带宽的关系，即奈奎斯特——无噪信道容量公式，信道的最大信号传输速率（码元速率）=信道带宽（低通信道）=信道带宽（理论状态）：
$$
R_{max}=2*B*\log_2 N(bps)
$$
Rmax：最大信号传输速率，单位为 bps。

B：信道的带宽，单位为 Hz。

N：对一个码元抽样的离散值个数。即进制数，二进制是N为2，就是只能表示两个电平，高和低，即可表示的信息数。采用4个相位，每个相位4种振幅的某种编码方式，其可表示4*4=16种信息。

 **示例**

普通电话线路带宽约 3kHz，若码元抽样的离散值个数 N=16， 则最大数据传输速率：
$$
R_{max}=2*3000*\log_2 16(bps)=2*3000*4=24000bps=24kbps
$$
 **示例**

某通信链路带宽为3kHz，采用4个相位，每个相位具有4种振幅的QAM调制技术，则该通信链路最大数据传输率是多少？
$$
R_{max}=2*3000*\log_2 (4*4)(bps)=24kbps
$$

## 有噪声下的信道容量（香农定理）

克劳德·艾尔伍德·香农（ClaudeElwood Shannon）是美国科学家、信息论的创始人。他提出了信息熵的概念，为信息论和数字通信奠定了基础。

Shannon 证明，对于带宽为 B，信噪比为 S/N 的有噪声信道，其最大数据传输率为：
$$
R_{max}=B*\log_2 (1+S/N)(bps)
$$
其中 S/N 为信号功率与噪声功率的比，称为信噪比。

我们一般使用数值分贝(dB)来表示信噪比。
$$
分贝(dB)=10*\log_{10} S/N
$$
 **示例**

已知信噪比为 30dB，带宽为 3kHz，求信道的最大数据传输速率。

第一步，求S/N：
$$
10*\log_{10} (S/N)=30(dB)
$$

$$
log_{10} (S/N)=30/10=3
$$

$$
S/N=10^{3}=1000
$$



使用香农定理：
$$
R_{max}=3000*log_{2}(1+1000)≈30kbps
$$
