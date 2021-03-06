var title = "<div  id='write'  class = 'is-node'><p><strong><span>题型</span></strong></p><p><span>简答</span></p><p><strong><span>题目</span></strong></p><p><span>";
var alltihai = [
	/*0*/title+"设有以下两个数据表：</span></p><p><span>商品表1(商品代号 char(8), 分类名 char(8), 单价 float, 数量 int)</span></p><p><span>商品表2(商品代号 char(8), 产地 char(6), 品牌 char(6))</span></p><p><span>使用SQL语句实现以下功能：</span></p><p><span>（1）从商品库中查询出每一种商品的商品代号、分类名、数量、品牌信息。</span></p><p><span>（2）从商品库中查询出数量大于10的商品种数量。</span></p><p><span>（3）从商品库中查询出比所有商品单价的平均值要高的全部商品。</span></p><p><strong><span>答案</span></strong></p><p><span>(1)</span></p><p><code>select 商品表1.商品代号, 分类名, 数量, 品牌</code></p><p><code>from 商品表1, 商品表2</code></p><p><code>where 商品表1.商品代号=商品表2.商品代号</code></p><p><span>(2)</span></p><p><code>select count(*)</code></p><p><code>from 商品表1</code></p><p><code>where 数量&gt;10</code></p><p><span>(3)</span></p><p><code>select *</code></p><p><code>from 商品表1</code></p><p><code>where 单价&gt;all(select avg(单价) from 商品表1)</code></p><p><strong><span>解析</span></strong></p><p><span>（1）</span><code>from</code><span>后面有多个表时，表示将这些表进行连接，</span><code>from 商品表1, 商品表2</code><span>没有指定连接方式，则为内连接，即</span><code>inner join</code><span>。</span></p><p><span>（3）</span><code>ALL</code><span>可以处理返回值中的每条记录，但如果返回值仅有单个记录，则可以不使用</span><code>ALL</code><span>。</span></p><p><span>此处的子查询结果是单个记录，可以不用all，即：</span></p><p><code>select *</code></p><p><code>from 商品表1</code></p><p><code>where 单价&gt;(select avg(单价) from 商品表1)</code></p><p><strong><span>知识链接</span></strong></p><p><a href='./know/sqldeallgongneng.html'><span>SQL的ALL功能</span></a></p><p><a href='./know/sqldeavggongneng.html'><span>SQL的AVG功能</span></a></p></div>"
		,
	/*1*/title+"一条指令必须包括（）。</span></p><p><span>A.操作码和地址码</span></p><p><span>B.信息和数据</span></p><p><span>C.时间和信息</span></p><p><span>D.以上都不是</span></p><p><strong><span>答案</span></strong></p><p><span>A</span></p><p><strong><span>解析</span></strong></p><p><span>指令的一般格式：操作码字段（OP）+地址码字段（A）。</span></p><p><strong><span>知识链接</span></strong></p></div>"
		,
	/*2*/title+"windows xp是（）操作系统。</span></p><p><span>A.单用户单任务</span></p><p><span>B.多用户多任务</span></p><p><span>C.单用户多任务</span></p><p><span>D.多用户单任务</span></p><p><strong><span>答案</span></strong></p><p><span>D</span></p><p><strong><span>解析</span></strong></p><p><span>单用户单任务操作系统：只允许一个用户登录，同时只运行一个程序。</span></p><p><span>多任务多用户操作系统：允许多个用户使用，同时可以运行多个程序。</span></p><p><strong><span>知识链接</span></strong></p><p><a href='./know/caozuoxitongdefenlei.html'><span>操作系统的分类</span></a></p></div>"
		,
	/*3*/title+"（1）什么是计算机病毒？</span></p><p><span>（2）列出几种病毒的防御方法。</span></p><p><strong><span>答案</span></strong></p><p><span>（1）中华人民共和国计算机信息系统安全保护条例》中明确定义，病毒是指：编制或者在计算机程序中插入的破坏计算机功能或者破坏数据，影响计算机使用并且能够自我复制的一组计算机指令或者程序代码。</span></p><p><span>（2）</span></p><ol><li><span>提高计算机用户的病毒防范意识。</span></li><li><span>安装防火墙、病毒监控软件、反病毒软件，并及时更新和升级它们。</span></li><li><span>经常查找操作系统和其它软件的漏洞，并及时更新和升级它们。</span></li><li><span>经常用杀毒软件全面扫描计算机的所有硬盘分区，查找潜伏病毒。</span></li><li><span>移动存储，连接到计算机后，要先就是对其进行病毒扫描。</span></li><li><span>网上下载的内容，要先进行病毒扫描。</span></li><li><span>不浏览不健康的网站。</span></li><li><span>不打开来历不明的电子邮件。</span></li><li><span>不使用盗版软件。</span></li><li><span>定期备份数据。</span></li></ol><p><strong><span>解析</span></strong></p><p><span>（2）思考角度：</span></p><ol><li><span>从个人方面。</span></li><li><span>从附加软件防御方面。</span></li><li><span>从系统本身方面。</span></li><li><span>对电脑病毒的主动防御。</span></li><li><span>对外来病毒的主动防御。</span></li><li><span>原理可能的病毒源。</span></li><li><span>可以挽回病毒造成的损失的方法。</span></li></ol><p><strong><span>知识链接</span></strong></p><p>&nbsp;</p></div>"
		,
	/*4*/title+"比较分析UDP和TCP协议的主要特点和使用场合。</span></p><p><strong><span>答案</span></strong></p><p><span>（1）主要特点：</span></p><figure><table><thead><tr><th><span>协议</span></th><th><span>特点</span></th></tr></thead><tbody><tr><td><span>UDP（用户数据报协议）</span></td><td><span>（1）不可靠的、无连接传输：应用进程的每次输出操作均生成一个UDP数据包，数据报独立，没有编号，不排序，数据报可以沿不同路径传递。</span><br><span>（2）UDP 使用套接字地址提供进程到进程的通信。</span><br><span>（3）没有流量控制，没有窗口机制，当到来的报文太多时，接收方可能会溢出。</span><br><span>（4）除了校验和外，UDP 没有差错控制机制，发送方不知道报文丢失还是重传。</span><br><span>（5）不提供拥塞控制，UDP 假设被发送的分组很小且零星，不会在网络中造成拥塞。</span><br><span>（6）封装和解封装。</span><br><span>（7）多路复用与多路分解。</span></td></tr><tr><td><span>TCP（传输控制协议）</span></td><td><span>（1）可靠的、面向连接的传输协议。</span><br><span>（2）流量控制。</span><br><span>（3）拥塞控制。</span><br><span>（4）对段的检错、应答、重传、排序。</span></td></tr></tbody></table></figure><p><span>（2）使用场合：</span></p><p><span>UDP：通常用于不要求可靠传输的场合。</span></p><p><span>TCP：通常用于需要可靠传输的场合，并能满足对段的检错、应答、重传、排序功能和流量控制、拥塞控制的要求。</span></p><p><strong><span>解析</span></strong></p><p>&nbsp;</p><p><strong><span>知识链接</span></strong></p><p><a href='./know/udpyonghushujubaoxieyi.html'><span>UDP用户数据报协议</span></a></p><p><a href='./know/tcpchuanshukongzhixieyi.html'><span>TCP传输控制协议</span></a></p></div>"
		,
	/*5*/title+"（1）什么是数据库完整性？</span></p><p><span>（2）数据库中有哪些完整性约束条件？</span></p><p><strong><span>答案</span></strong></p><p><span>（1）数据库完整性（Database Integrity）是指数据库中数据在逻辑上的一致性、正确性、有效性和相容性。数据库完整性由各种各样的完整性约束来保证，因此可以说数据库完整性设计就是数据库完整性约束的设计。</span></p><p><span>（2）在关系模型中有四类完整性约束：</span></p><ol><li><span>实体完整性：规定表的每一行在表中是惟一的实体。约束子句，主键子句，primary key。</span></li><li><span>域完整性：表中的列必须满足某种特定的数据类型约束，其中约束又包括取值范围、精度等规定。</span></li><li><span>参照完整性：两个表的主关键字和外关键字的数据应一致，保证了表之间的数据的一致性，防止了数据丢失或无意义的数据在数据库中扩散。约束子句，外键子句，foreign key。</span></li><li><span>用户自定义完整性：不同的关系数据库系统根据其应用环境的不同，往往还需要一些特殊的约束条件。用户定义的完整性即是针对某个特定关系数据库的约束条件，它反映某一具体应用必须满足的语义要求。</span></li></ol><p><strong><span>解析</span></strong></p><p>&nbsp;</p><p><strong><span>知识链接</span></strong></p><p><a href='./know/shujuwanzhengxing.html'><span>数据完整性</span></a></p></div>"
		,
	/*6*/title+"简述数据库设计中各个阶段的主要内容。</span></p><p><strong><span>答案</span></strong></p><figure><table><thead><tr><th><span>阶段</span></th><th><span>主要内容</span></th></tr></thead><tbody><tr><td><span>需求分析阶段</span></td><td><span>需求收集和分析，结果得到数据字典描述的数据需求和数据流图描述的处理需求。</span></td></tr><tr><td><span>概念结构设计阶段</span></td><td><span>通过对用户需求进行综合、归纳与抽象，形成独立于具体DBMS的概念模型。</span></td></tr><tr><td><span>逻辑结构设计阶段</span></td><td><span>将概念结构转换为某个DBMS所支持的数据模型，并对其进行优化。</span></td></tr><tr><td><span>物理结构设计阶段</span></td><td><span>为逻辑数据模型选取一个最适合应用环境的物理结构(包括存储结构和存取方法)。一般分为确定局数据的物理结构和对物理结构进行评价。</span></td></tr><tr><td><span>实施阶段</span></td><td><span>运用DBMS提供的数据语言及其宿主语言，根据逻辑设计和物理设计的结果建立数据库，编制与调试应用程序，组织数据入库，并进行试运行。</span></td></tr><tr><td><span>运行和维护阶段</span></td><td><span>数据库应用系统经过试运行后即可投入正式运行。在数据库系统运行过程中必须不断地对其进行评价、调整与修改。</span></td></tr></tbody></table></figure><p><span>设计一个完善的数据库应用系统不可能一蹴而就，它往往是上述六个阶段的不断反复。</span></p><p><strong><span>解析</span></strong></p><p><span>概念结构设计阶段：DBMS的概念模型，可以用E-R图表示。</span></p><p><span>逻辑结构设计阶段：数据模型，例如关系模型。</span></p><p><span>实施阶段：数据语言，例如SQL；宿主语言，例如C，</span></p><p><strong><span>知识链接</span></strong></p></div>"
		,
	/*7*/title+"简述网络操作系统的类型及应用。</span></p><p><strong><span>答案</span></strong></p><figure><table><thead><tr><th><span>类型</span></th><th><span>应用</span></th></tr></thead><tbody><tr><td><span>集中模式</span></td><td><span>系统的基本单元是由一台主机和若干台与主机相连的终端构成。</span><br><span>例如：unix。</span><br><span>应用：关键任务场合，如金融行业。</span></td></tr><tr><td><span>客户机/服务器模式</span></td><td><span>服务器是网络的控制中心，并向客户提供服务。客户是用于本地处理和访问服务器的站点。</span><br><span>例如：netware、windows nt。</span><br><span>应用：中等应用场合。</span></td></tr><tr><td><span>对等模式</span></td><td><span>采用这种模式的站点都是对等的，既可以作为客户访问其它站点，又可以作为服务器向其他站点提供服务。这种模式具有分布处理和分布控制的功能。</span><br><span>例如：netware lite、windows for workfroup。</span><br><span>应用：简单网络连接，如分布式计算。</span></td></tr></tbody></table></figure><p><strong><span>解析</span></strong></p><p>&nbsp;</p><p><strong><span>知识链接</span></strong></p></div>"
		,
	/*8*/title+"简述软件开发中可行性研究的意义，以及应该从哪些方面研究目标系统的可行性。</span></p><p><strong><span>答案</span></strong></p><p><span>（1）意义：用最小的代价在尽可能短的时间内确定问题能否解决，以决定项目开展与否。并大大压缩简化系统分析和设计过程。</span></p><p><span>（2）方面：</span></p><ol><li><span>技术可行性：考察使用现有技术是否能实现项目系统。</span></li><li><span>经济可行性：经济效益是否大于其开发成本。</span></li><li><span>操作可行性：操作方法是否能在用户内部实行。</span></li></ol><p><span>必要时，还要从法律、社会效益等方面研究。</span></p><p><strong><span>解析</span></strong></p><p>&nbsp;</p><p><strong><span>知识链接</span></strong></p><p>&nbsp;</p></div>"
		,
	/*9*/title+"简述计算机病毒的基本特征，列出几种你所知道的计算机病毒。</span></p><p><strong><span>答案</span></strong></p><p><span>（1）</span></p><figure><table><thead><tr><th><span>特点</span></th><th><span>说明</span></th></tr></thead><tbody><tr><td><span>寄生性</span></td><td><span>病毒具有把自身复制到其他程序的能力。</span></td></tr><tr><td><span>传染性</span></td><td><span>大部分病毒感染系统后一般不会马上发作。</span></td></tr><tr><td><span>潜伏性</span></td><td><span>大部分病毒感染系统后一般不会马上发作。</span></td></tr><tr><td><span>隐蔽性</span></td><td><span>很难被人发现病。</span></td></tr><tr><td><span>可触发性</span></td><td><span>病毒因某个事件或数值的出现，诱使病毒实施感染或进行攻击的特性称为可触发性。</span></td></tr><tr><td><span>破坏性</span></td><td><span>会对系统产生不同程度的影响。</span></td></tr><tr><td><span>不可预见性</span></td><td><span>不同类型的病毒，它们的代码千差万别，反病毒软件对病毒永远是滞后的。</span></td></tr></tbody></table></figure><p><span>（2）系统病毒：CIH；</span></p><p><span>蠕虫病毒：冲击波、小邮差；</span></p><p><span>木马病毒、黑客病毒：QQ消息尾巴、网络枭雄；</span></p><p><span>脚本病毒：共色代码、欢乐时光；</span></p><p><span>宏病毒：梅丽莎；</span></p><p><span>病毒种植程序：冰河播种者、MSN射手；</span></p><p><span>破坏性程序病毒：格式化C盘、杀手命令；</span></p><p><span>玩笑病毒：女鬼病毒；</span></p><p><span>捆绑机病毒：捆绑QQ、系统杀手。</span></p><p><strong><span>解析</span></strong></p><p>&nbsp;</p><p><strong><span>知识链接</span></strong></p><p><a href='./knowjisuanjibingdu.html'><span>计算机病毒</span></a></p></div>"
		,
	/*10*/title+"编写算法，将一个节点类型为Node的单链表逆序链接，即若为a1，a2，a3……，an，则逆序链接后变为an……，a3，a2，a1。</span></p><p><strong><span>答案</span></strong></p><p><code>void cojtrary(Node * L)</code></p><p><code>{</code></p><p><code>Node * last = NULL;</code></p><p><code>Node * next = NULL;</code></p><p><code>while(L-&gt;next != NULL)</code></p><p><code>{</code></p><p><code>next = L-&gt;next;</code></p><p><code>L-&gt;next = last;</code></p><p><code>last = L;</code></p><p><code>L = next;</code></p><p><code>}</code></p><p><code>}</code></p><p><strong><span>解析</span></strong></p><p><strong><span>知识链接</span></strong></p></div>"
		,
	/*11*/title+"在虚拟存储器中，术语“物理空间”和“逻辑空间”有何联系和区别？</span></p><p><strong><span>答案</span></strong></p><figure><table><thead><tr><th><span>联系</span></th><th><span>区别</span></th></tr></thead><tbody><tr><td><span>程序运行时，必须把逻辑空间映射到物理空间。</span></td><td><span>物理空间是指实际地址对应的空间，又称“实存空间”；逻辑空间是指编程时可用的虚拟地址对应的地址空间，又称“虚存空间”。</span><br><span>逻辑空间远远大于物理空间。</span><br><span>物理空间是在运行程序时，计算机能提供的真正的主存空间；逻辑空间是用户编程时可以运用的虚拟空间。</span></td></tr></tbody></table></figure><p><strong><span>解析</span></strong></p><p><strong><span>知识链接</span></strong></p></div>"
		,
	/*12*/title+"差错控制是一种主动的防范措施。</span></p><p><strong><span>答案</span></strong></p><p><span>对。</span></p><p><strong><span>解析</span></strong></p><p><span>差错检测能检查出计算机信号在网络传输过程中出现的信号传输错误，便于以后很好的对数据错误改正。</span></p><p><strong><span>知识链接</span></strong></p><p><a href='./know/chacuokongzhi.html'><span>差错控制</span></a></p><p>&nbsp;</p></div>"
		,
	/*13*/title+"（）是指按内容访问的存储器。</span></p><p><span>A.虚拟存储器</span></p><p><span>B.相联存储器</span></p><p><span>C.高速缓存（cache）</span></p><p><span>D.随机访问存储器</span></p><p><strong><span>答案</span></strong></p><p><span>B</span></p><p><strong><span>解析</span></strong></p><p>&nbsp;</p><p><strong><span>知识链接</span></strong></p><p><a href=',/know/cunchuqihuafen.html'><span>存储器划分</span></a></p></div>"
		,
	/*14*/title+""
		,
	/*15*/title+""
		,
	/*16*/title+""
		,
	/*17*/title+""
		,
	/*18*/title+""
		,
	/*19*/title+""
		,
	/*20*/title+""
		,
	/*21*/title+""
		,
	];
	
	
	
	
	
	
	
	
	
	
	
	