var alltihai = [
		"<div  id='write'  class = 'is-node'><p><strong><span>题型</span></strong></p><p><span>简答</span></p><p><strong><span>题目</span></strong><span> </span></p><p><span>设有以下两个数据表：</span></p><p><span>商品表1(商品代号 char(8), 分类名 char(8), 单价 float, 数量 int)</span></p><p><span>商品表2(商品代号 char(8), 产地 char(6), 品牌 char(6))</span></p><p><span>使用SQL语句实现以下功能：</span></p><p><span>（1）从商品库中查询出每一种商品的商品代号、分类名、数量、品牌信息。</span></p><p><span>（2）从商品库中查询出数量大于10的商品种数量。</span></p><p><span>（3）从商品库中查询出比所有商品单价的平均值要高的全部商品。</span></p><p><strong><span>答案</span></strong></p><p><span>(1)select 商品表1.商品代号, 分类名, 数量, 品牌</span></p><p><span>from 商品表1, 商品表2</span></p><p><span>where 商品表1.商品代号=商品表2.商品代号</span></p><p><span>(2)select count(*)</span></p><p><span>from 商品表1</span></p><p><span>where 数量&gt;10</span></p><p><span>(3)select *</span></p><p><span>from 商品表1</span></p><p><span>where 单价&gt;all(select avg(单价) from 商品表1)</span></p><p><strong><span>解析</span></strong></p><p><span>（1）</span><code>from</code><span>后面有多个表时，表示将这些表进行连接，</span><code>from 商品表1, 商品表2</code><span>没有指定连接方式，则为内连接，即</span><code>inner join</code><span>。</span></p><p><span>（3）</span><code>ALL</code><span>可以处理返回值中的每条记录，但如果返回值仅有单个记录，则可以不使用</span><code>ALL</code><span>。</span></p><p><span>此处的子查询结果是单个记录，可以不用all，即：</span></p><pre spellcheck=\"false\" class=\"md-fences md-end-block ty-contain-cm modeLoaded\" lang=\"sql\"><div class=\"CodeMirror cm-s-inner CodeMirror-wrap\" lang=\"sql\"><div style=\"overflow: hidden; position: relative; width: 3px; height: 0px; top: 0px; left: 4px;\"><textarea autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\" tabindex=\"0\" style=\"position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; outline: none;\"></textarea></div><div class=\"CodeMirror-scrollbar-filler\" cm-not-content=\"true\"></div><div class=\"CodeMirror-gutter-filler\" cm-not-content=\"true\"></div><div class=\"CodeMirror-scroll\" tabindex=\"-1\"><div class=\"CodeMirror-sizer\" style=\"margin-left: 0px; margin-bottom: 0px; border-right-width: 0px; padding-right: 0px; padding-bottom: 0px;\"><div style=\"position: relative; top: 0px;\"><div class=\"CodeMirror-lines\" role=\"presentation\"><div role=\"presentation\" style=\"position: relative; outline: none;\"><div class=\"CodeMirror-measure\"><pre><span>xxxxxxxxxx</span></pre></div><div class=\"CodeMirror-measure\"></div><div style=\"position: relative; z-index: 1;\"></div><div class=\"CodeMirror-code\" role=\"presentation\" style=\"\"><div class=\"CodeMirror-activeline\" style=\"position: relative;\"><div class=\"CodeMirror-activeline-background CodeMirror-linebackground\"></div><div class=\"CodeMirror-gutter-background CodeMirror-activeline-gutter\" style=\"left: 0px; width: 0px;\"></div><pre class=\" CodeMirror-line \" role=\"presentation\"><span role=\"presentation\" style=\"padding-right: 0.1px;\"><span class=\"cm-keyword\">select</span> *</span></pre></div><div class=\"\" style=\"position: relative;\"><pre class=\" CodeMirror-line \" role=\"presentation\"><span role=\"presentation\" style=\"padding-right: 0.1px;\"><span cm-text=\"\">​</span></span></pre></div><div class=\"\" style=\"position: relative;\"><pre class=\" CodeMirror-line \" role=\"presentation\"><span role=\"presentation\" style=\"padding-right: 0.1px;\"><span class=\"cm-keyword\">from</span> 商品表1</span></pre></div><div class=\"\" style=\"position: relative;\"><pre class=\" CodeMirror-line \" role=\"presentation\"><span role=\"presentation\" style=\"padding-right: 0.1px;\"><span cm-text=\"\">​</span></span></pre></div><div class=\"\" style=\"position: relative;\"><pre class=\" CodeMirror-line \" role=\"presentation\"><span role=\"presentation\" style=\"padding-right: 0.1px;\"><span class=\"cm-keyword\">where</span> 单价&gt;(<span class=\"cm-keyword\">select</span> avg(单价) <span class=\"cm-keyword\">from</span> 商品表1)</span></pre></div></div></div></div></div></div><div style=\"position: absolute; height: 0px; width: 1px; border-bottom: 0px solid transparent; top: 130px;\"></div><div class=\"CodeMirror-gutters\" style=\"display: none; height: 130px;\"></div></div></div></pre><p>&nbsp;</p><p><strong><span>知识链接</span></strong></p><p><a href='https://mypigislost.github.io/blog/ruankaowanggong/know/sqldeallgongneng.html'><span>SQL的ALL功能</span></a></p><p><a href='https://mypigislost.github.io/blog/ruankaowanggong/know/sqldeavggongneng.html'><span>SQL的AVG功能</span></a></p></div>",
		"<div  id='write'  class = 'is-node'><p><strong><span>题型</span></strong></p><p><span>单选</span></p><p><strong><span>题目</span></strong><span> </span></p><p><span>一条指令必须包括（）。</span></p><p><span>A.操作码和地址码</span></p><p><span>B.信息和数据</span></p><p><span>C.时间和信息</span></p><p><span>D.以上都不是</span></p><p><strong><span>答案</span></strong></p><p><span>A</span></p><p><strong><span>解析</span></strong></p><p><span>指令的一般格式：操作码字段（OP）+地址码字段（A）。</span></p><p><strong><span>知识链接</span></strong></p></div>",
		"<div  id='write'  class = 'is-node'><p><strong><span>题型</span></strong></p><p><span>单选</span></p><p><strong><span>题目</span></strong><span> </span></p><p><span>windows xp是（）操作系统。</span></p><p><span>A.单用户单任务</span></p><p><span>B.多用户多任务</span></p><p><span>C.单用户多任务</span></p><p><span>D.多用户但任务</span></p><p><strong><span>答案</span></strong></p><p><span>D</span></p><p><strong><span>解析</span></strong></p><p><span>windows xp同时只能登陆一个用户，同时只能运行一个程序。</span></p><p><strong><span>知识链接</span></strong></p></div>",
		
		
		
	];