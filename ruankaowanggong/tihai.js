var alltihai = [
		/*0*/"<div  id='write'  class = 'is-node'><p><strong><span>题型</span></strong></p><p><span>简答</span></p><p><strong><span>题目</span></strong><span> </span></p><p><span>设有以下两个数据表：</span></p><p><span>商品表1(商品代号 char(8), 分类名 char(8), 单价 float, 数量 int)</span></p><p><span>商品表2(商品代号 char(8), 产地 char(6), 品牌 char(6))</span></p><p><span>使用SQL语句实现以下功能：</span></p><p><span>（1）从商品库中查询出每一种商品的商品代号、分类名、数量、品牌信息。</span></p><p><span>（2）从商品库中查询出数量大于10的商品种数量。</span></p><p><span>（3）从商品库中查询出比所有商品单价的平均值要高的全部商品。</span></p><p><strong><span>答案</span></strong></p><p><span>(1)</span></p><pre spellcheck=\"false\" class=\"md-fences md-end-block ty-contain-cm modeLoaded\" lang=\"sql\"><div class=\"CodeMirror cm-s-inner CodeMirror-wrap\" lang=\"sql\"><div style=\"overflow: hidden; position: relative; width: 3px; height: 0px; top: 0px; left: 4px;\"><textarea autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\" tabindex=\"0\" style=\"position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; outline: none;\"></textarea></div><div class=\"CodeMirror-scrollbar-filler\" cm-not-content=\"true\"></div><div class=\"CodeMirror-gutter-filler\" cm-not-content=\"true\"></div><div class=\"CodeMirror-scroll\" tabindex=\"-1\"><div class=\"CodeMirror-sizer\" style=\"margin-left: 0px; margin-bottom: 0px; border-right-width: 0px; padding-right: 0px; padding-bottom: 0px;\"><div style=\"position: relative; top: 0px;\"><div class=\"CodeMirror-lines\" role=\"presentation\"><div role=\"presentation\" style=\"position: relative; outline: none;\"><div class=\"CodeMirror-measure\"><pre><span>xxxxxxxxxx</span></pre></div><div class=\"CodeMirror-measure\"></div><div style=\"position: relative; z-index: 1;\"></div><div class=\"CodeMirror-code\" role=\"presentation\"><div class=\"CodeMirror-activeline\" style=\"position: relative;\"><div class=\"CodeMirror-activeline-background CodeMirror-linebackground\"></div><div class=\"CodeMirror-gutter-background CodeMirror-activeline-gutter\" style=\"left: 0px; width: 0px;\"></div><pre class=\" CodeMirror-line \" role=\"presentation\"><span role=\"presentation\" style=\"padding-right: 0.1px;\"><span class=\"cm-keyword\">select</span> 商品表1.商品代号, 分类名, 数量, 品牌</span></pre></div><pre class=\" CodeMirror-line \" role=\"presentation\"><span role=\"presentation\" style=\"padding-right: 0.1px;\"><span class=\"cm-keyword\">from</span> 商品表1, 商品表2</span></pre><div class=\"\" style=\"position: relative;\"><pre class=\" CodeMirror-line \" role=\"presentation\"><span role=\"presentation\" style=\"padding-right: 0.1px;\"><span class=\"cm-keyword\">where</span> 商品表1.商品代号=商品表2.商品代号</span></pre></div></div></div></div></div></div><div style=\"position: absolute; height: 0px; width: 1px; border-bottom: 0px solid transparent; top: 78px;\"></div><div class=\"CodeMirror-gutters\" style=\"display: none; height: 78px;\"></div></div></div></pre><p><span>(2)</span></p><pre spellcheck=\"false\" class=\"md-fences md-end-block ty-contain-cm modeLoaded\" lang=\"sql\"><div class=\"CodeMirror cm-s-inner CodeMirror-wrap\" lang=\"sql\"><div style=\"overflow: hidden; position: relative; width: 3px; height: 0px; top: 0px; left: 4px;\"><textarea autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\" tabindex=\"0\" style=\"position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; outline: none;\"></textarea></div><div class=\"CodeMirror-scrollbar-filler\" cm-not-content=\"true\"></div><div class=\"CodeMirror-gutter-filler\" cm-not-content=\"true\"></div><div class=\"CodeMirror-scroll\" tabindex=\"-1\"><div class=\"CodeMirror-sizer\" style=\"margin-left: 0px; margin-bottom: 0px; border-right-width: 0px; padding-right: 0px; padding-bottom: 0px;\"><div style=\"position: relative; top: 0px;\"><div class=\"CodeMirror-lines\" role=\"presentation\"><div role=\"presentation\" style=\"position: relative; outline: none;\"><div class=\"CodeMirror-measure\"><pre><span>xxxxxxxxxx</span></pre></div><div class=\"CodeMirror-measure\"></div><div style=\"position: relative; z-index: 1;\"></div><div class=\"CodeMirror-code\" role=\"presentation\"><div class=\"CodeMirror-activeline\" style=\"position: relative;\"><div class=\"CodeMirror-activeline-background CodeMirror-linebackground\"></div><div class=\"CodeMirror-gutter-background CodeMirror-activeline-gutter\" style=\"left: 0px; width: 0px;\"></div><pre class=\" CodeMirror-line \" role=\"presentation\"><span role=\"presentation\" style=\"padding-right: 0.1px;\"><span class=\"cm-keyword\">select</span> <span class=\"cm-keyword\">count</span>(*)</span></pre></div><pre class=\" CodeMirror-line \" role=\"presentation\"><span role=\"presentation\" style=\"padding-right: 0.1px;\"><span class=\"cm-keyword\">from</span> 商品表1</span></pre><div class=\"\" style=\"position: relative;\"><pre class=\" CodeMirror-line \" role=\"presentation\"><span role=\"presentation\" style=\"padding-right: 0.1px;\"><span class=\"cm-keyword\">where</span> 数量&gt;<span class=\"cm-number\">10</span></span></pre></div></div></div></div></div></div><div style=\"position: absolute; height: 0px; width: 1px; border-bottom: 0px solid transparent; top: 78px;\"></div><div class=\"CodeMirror-gutters\" style=\"display: none; height: 78px;\"></div></div></div></pre><p><span>(3)</span></p><pre spellcheck=\"false\" class=\"md-fences md-end-block ty-contain-cm modeLoaded\" lang=\"sql\"><div class=\"CodeMirror cm-s-inner CodeMirror-wrap\" lang=\"sql\"><div style=\"overflow: hidden; position: relative; width: 3px; height: 0px; top: 0px; left: 4px;\"><textarea autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\" tabindex=\"0\" style=\"position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; outline: none;\"></textarea></div><div class=\"CodeMirror-scrollbar-filler\" cm-not-content=\"true\"></div><div class=\"CodeMirror-gutter-filler\" cm-not-content=\"true\"></div><div class=\"CodeMirror-scroll\" tabindex=\"-1\"><div class=\"CodeMirror-sizer\" style=\"margin-left: 0px; margin-bottom: 0px; border-right-width: 0px; padding-right: 0px; padding-bottom: 0px;\"><div style=\"position: relative; top: 0px;\"><div class=\"CodeMirror-lines\" role=\"presentation\"><div role=\"presentation\" style=\"position: relative; outline: none;\"><div class=\"CodeMirror-measure\"><pre><span>xxxxxxxxxx</span></pre></div><div class=\"CodeMirror-measure\"></div><div style=\"position: relative; z-index: 1;\"></div><div class=\"CodeMirror-code\" role=\"presentation\"><div class=\"CodeMirror-activeline\" style=\"position: relative;\"><div class=\"CodeMirror-activeline-background CodeMirror-linebackground\"></div><div class=\"CodeMirror-gutter-background CodeMirror-activeline-gutter\" style=\"left: 0px; width: 0px;\"></div><pre class=\" CodeMirror-line \" role=\"presentation\"><span role=\"presentation\" style=\"padding-right: 0.1px;\"><span class=\"cm-keyword\">select</span> *</span></pre></div><pre class=\" CodeMirror-line \" role=\"presentation\"><span role=\"presentation\" style=\"padding-right: 0.1px;\"><span class=\"cm-keyword\">from</span> 商品表1</span></pre><div class=\"\" style=\"position: relative;\"><pre class=\" CodeMirror-line \" role=\"presentation\"><span role=\"presentation\" style=\"padding-right: 0.1px;\"><span class=\"cm-keyword\">where</span> 单价&gt;all(<span class=\"cm-keyword\">select</span> avg(单价) <span class=\"cm-keyword\">from</span> 商品表1)</span></pre></div></div></div></div></div></div><div style=\"position: absolute; height: 0px; width: 1px; border-bottom: 0px solid transparent; top: 78px;\"></div><div class=\"CodeMirror-gutters\" style=\"display: none; height: 78px;\"></div></div></div></pre><p><strong><span>解析</span></strong></p><p><span>（1）</span><code>from</code><span>后面有多个表时，表示将这些表进行连接，</span><code>from 商品表1, 商品表2</code><span>没有指定连接方式，则为内连接，即</span><code>inner join</code><span>。</span></p><p><span>（3）</span><code>ALL</code><span>可以处理返回值中的每条记录，但如果返回值仅有单个记录，则可以不使用</span><code>ALL</code><span>。</span></p><p><span>此处的子查询结果是单个记录，可以不用all，即：</span></p><pre spellcheck=\"false\" class=\"md-fences md-end-block ty-contain-cm modeLoaded md-focus\" lang=\"sql\"><div class=\"CodeMirror cm-s-inner CodeMirror-wrap CodeMirror-focused\" lang=\"sql\"><div style=\"overflow: hidden; position: relative; width: 3px; height: 0px; top: 52px; left: 308px;\"><textarea autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\" tabindex=\"0\" style=\"position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; outline: none;\"></textarea></div><div class=\"CodeMirror-scrollbar-filler\" cm-not-content=\"true\"></div><div class=\"CodeMirror-gutter-filler\" cm-not-content=\"true\"></div><div class=\"CodeMirror-scroll\" tabindex=\"-1\"><div class=\"CodeMirror-sizer\" style=\"margin-left: 0px; margin-bottom: 0px; border-right-width: 0px; padding-right: 0px; padding-bottom: 0px;\"><div style=\"position: relative; top: 0px;\"><div class=\"CodeMirror-lines\" role=\"presentation\"><div role=\"presentation\" style=\"position: relative; outline: none;\"><div class=\"CodeMirror-measure\"><pre><span>xxxxxxxxxx</span></pre></div><div class=\"CodeMirror-measure\"></div><div style=\"position: relative; z-index: 1;\"></div><div class=\"CodeMirror-code\" role=\"presentation\"><div class=\"\" style=\"position: relative;\"><pre class=\" CodeMirror-line \" role=\"presentation\"><span role=\"presentation\" style=\"padding-right: 0.1px;\"><span class=\"cm-keyword\">select</span> *</span></pre></div><pre class=\" CodeMirror-line \" role=\"presentation\"><span role=\"presentation\" style=\"padding-right: 0.1px;\"><span class=\"cm-keyword\">from</span> 商品表1</span></pre><div class=\"CodeMirror-activeline\" style=\"position: relative;\"><div class=\"CodeMirror-activeline-background CodeMirror-linebackground\"></div><div class=\"CodeMirror-gutter-background CodeMirror-activeline-gutter\" style=\"left: 0px; width: 0px;\"></div><pre class=\" CodeMirror-line \" role=\"presentation\"><span role=\"presentation\" style=\"padding-right: 0.1px;\"><span class=\"cm-keyword\">where</span> 单价&gt;(<span class=\"cm-keyword\">select</span> avg(单价) <span class=\"cm-keyword\">from</span> 商品表1)</span></pre></div></div></div></div></div></div><div style=\"position: absolute; height: 0px; width: 1px; border-bottom: 0px solid transparent; top: 78px;\"></div><div class=\"CodeMirror-gutters\" style=\"display: none; height: 78px;\"></div></div></div></pre><p><strong><span>知识链接</span></strong></p><p><a href='https://mypigislost.github.io/blog/ruankaowanggong/know/sqldeallgongneng.html'><span>SQL的ALL功能</span></a></p><p><a href='https://mypigislost.github.io/blog/ruankaowanggong/know/sqldeavggongneng.html'><span>SQL的AVG功能</span></a></p></div>",
		/*1*/"<div  id='write'  class = 'is-node'><p><strong><span>题型</span></strong></p><p><span>单选</span></p><p><strong><span>题目</span></strong><span> </span></p><p><span>一条指令必须包括（）。</span></p><p><span>A.操作码和地址码</span></p><p><span>B.信息和数据</span></p><p><span>C.时间和信息</span></p><p><span>D.以上都不是</span></p><p><strong><span>答案</span></strong></p><p><span>A</span></p><p><strong><span>解析</span></strong></p><p><span>指令的一般格式：操作码字段（OP）+地址码字段（A）。</span></p><p><strong><span>知识链接</span></strong></p></div>",
		/*2*/"<div  id='write'  class = 'is-node'><p><strong><span>题型</span></strong></p><p><span>单选</span></p><p><strong><span>题目</span></strong><span> </span></p><p><span>windows xp是（）操作系统。</span></p><p><span>A.单用户单任务</span></p><p><span>B.多用户多任务</span></p><p><span>C.单用户多任务</span></p><p><span>D.多用户单任务</span></p><p><strong><span>答案</span></strong></p><p><span>D</span></p><p><strong><span>解析</span></strong></p><p><span>单用户单任务操作系统：只允许一个用户登录，同时只运行一个程序。</span></p><p><span>多任务多用户操作系统：允许多个用户使用，同时可以运行多个程序。</span></p><p><strong><span>知识链接</span></strong></p><p><a href=''><span>操作系统的分类</span></a></p></div>",
		/*3*/"<div  id='write'  class = 'is-node'><p><strong><span>题型</span></strong></p><p><span>简答</span></p><p><strong><span>题目</span></strong><span> </span></p><p><span>（1）什么事计算机病毒？</span></p><p><span>（2）列出几种病毒的防御方法。</span></p><p><strong><span>答案</span></strong></p><p><span>（1）中华人民共和国计算机信息系统安全保护条例》中明确定义，病毒是指：编制或者在计算机程序中插入的破坏计算机功能或者破坏数据，影响计算机使用并且能够自我复制的一组计算机指令或者程序代码。</span></p><p><span>（2）</span></p><ol><li><span>提高计算机用户的病毒防范意识。</span></li><li><span>安装防火墙、病毒监控软件、反病毒软件，并及时更新和升级它们。</span></li><li><span>经常查找操作系统和其它软件的漏洞，并及时更新和升级它们。</span></li><li><span>经常用杀毒软件全面扫描计算机的所有硬盘分区，查找潜伏病毒。</span></li><li><span>移动存储，连接到计算机后，要先就是对其进行病毒扫描。</span></li><li><span>网上下载的内容，要先进行病毒扫描。</span></li><li><span>不浏览不健康的网站。</span></li><li><span>不打开来历不明的电子邮件。</span></li><li><span>不使用盗版软件。</span></li><li><span>定期备份数据。</span></li></ol><p><strong><span>解析</span></strong></p><p><span>（2）思考角度：</span></p><ol><li><span>从个人方面。</span></li><li><span>从附加软件防御方面。</span></li><li><span>从系统本身方面。</span></li><li><span>对电脑病毒的主动防御。</span></li><li><span>对外来病毒的主动防御。</span></li><li><span>原理可能的病毒源。</span></li><li><span>可以挽回病毒造成的损失的方法。</span></li></ol><p><strong><span>知识链接</span></strong></p><p>&nbsp;</p></div>",
		/*4*/
		/*5*/
		/*6*/
		/*7*/
		/*8*/
		/*9*/
		/*10*/
		/*11*/
		/*12*/
		/*13*/
		/*14*/
		/*15*/
		/*16*/
		/*17*/
		/*18*/
		/*19*/
		/*20*/
		/*21*/
	];
	
	
	
	
	
	
	
	
	
	
	
	