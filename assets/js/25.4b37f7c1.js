(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{219:function(t,a,n){"use strict";n.r(a);var e=n(0),s=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"content"},[n("h2",{attrs:{id:"样式小记"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#样式小记","aria-hidden":"true"}},[t._v("#")]),t._v(" 样式小记")]),t._v(" "),n("p",[n("code",[t._v("2018-03-11")])]),t._v(" "),n("h4",{attrs:{id:"盒子"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#盒子","aria-hidden":"true"}},[t._v("#")]),t._v(" 盒子")]),t._v(" "),n("ul",[n("li",[t._v("正常流宽度：除非有明显的width设置，否则div流的宽度不会超过父级容器。格式化宽度：出现在绝对定位，是包裹性，除非是left,right同时出现就是计算的格式化宽度")]),t._v(" "),n("li",[t._v("width是作用在content-box上的")]),t._v(" "),n("li",[t._v("margin只在width为auto时可以改变元素尺寸，利用这个特性可以两端宽度固定并float，中间元素两端固定就可以自适应了")]),t._v(" "),n("li",[t._v("width父级auto子元素100%也是ok，height不行(除非绝对定位)，除非父元素的height有可以生效的值")]),t._v(" "),n("li",[t._v("普通height：100%是算的content-box，绝对定位的算的是padding-box")]),t._v(" "),n("li",[t._v("展开收起动画可使用max-height + overflow:hidden")]),t._v(" "),n("li",[t._v("替换元素有自己的一套固有样式，所以设成display:block宽度也不会变成100%")]),t._v(" "),n("li",[t._v("content: attr(xx)：attr可以取html属性，包括自定义属性")]),t._v(" "),n("li",[t._v("宽度不够就会是首选最小宽度")]),t._v(" "),n("li",[t._v("内联标签clientHeight，clientWidth都是0")]),t._v(" "),n("li",[t._v("padding不支持负值")]),t._v(" "),n("li",[t._v("padding的百分比无论水平还是竖直方向都是相对宽度计算的, padding:50%就可以实现一个响应式正方形")]),t._v(" "),n("li",[t._v("margin的百分比也是都相对于width")])]),t._v(" "),n("h4",{attrs:{id:"margin合并"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#margin合并","aria-hidden":"true"}},[t._v("#")]),t._v(" margin合并")]),t._v(" "),n("ul",[n("li",[t._v("子元素与父级top/bottom合并（2，3，4也可以用于别的margin合并的情况）\n"),n("ul",[n("li",[t._v("1、父级格式化上下文：overflow hidden")]),t._v(" "),n("li",[t._v("2、父级设置 border-top/bottom 值")]),t._v(" "),n("li",[t._v("3、父级设置 padding-top/bottom值")]),t._v(" "),n("li",[t._v("4、父级和第一/最后一个子元素之间添加内联元素")]),t._v(" "),n("li",[t._v("5、如果是margin-bottom，可以设置 height, max-height, min-height")])])]),t._v(" "),n("li",[t._v("margin合并的计算规则：\n"),n("ul",[n("li",[t._v("1、正正取大值")]),t._v(" "),n("li",[t._v("2、正负值相加")]),t._v(" "),n("li",[t._v("3、负负最负值")])])]),t._v(" "),n("li",[t._v("margin: auto 是填充剩下的距离，可以搞出靠右对其，而不必 float: right")]),t._v(" "),n("li",[t._v("元素在当前方向具有流填充特性的时候 margin: auto 才会居中。\n"),n("ul",[n("li",[t._v("1、可以  writing-mode: vertical-lr把流方向改成竖的，就可以 margin: auto 垂直居中了。")]),t._v(" "),n("li",[t._v("2、绝对定位四个方向都是0+margin: auto可以实现水平垂直都居中")]),t._v(" "),n("li",[t._v("3、绝对定位下，top: 50%; margin-top: -元素一半高度。实现垂直居中")]),t._v(" "),n("li",[t._v("4、设置inline-block + vertical-align: middle + text-align: center实现垂直水平居中")])])]),t._v(" "),n("li",[t._v("align-items：居中（flex-direction为 row时垂直居中，column时水平居中）")]),t._v(" "),n("li",[t._v("justify-content：居中（与row相反）")]),t._v(" "),n("li",[t._v("内联替换元素没有margin合并问题。inline元素垂直margin无效。margin只有与定位方向一致时候才能改变自己位置，否则只能改变别人位置")]),t._v(" "),n("li",[t._v("border-width不支持%百分比值")]),t._v(" "),n("li",[t._v("border和line-height等传统CSS属性没有小数像素")]),t._v(" "),n("li",[t._v("line-height设置数字（如 1.5）时是被正确继承的，如果是百分比和带单位的数值则是直接计算好具体的值被继承")]),t._v(" "),n("li",[t._v("vertical-align 只能用于内联元素（inline / inline-xxx）和display为table-cell的元素。但是浮动和绝对定位会使元素块状化导致 vertical-align 失效。display为table-cell设置vertical-align: middle可以使子元素垂直居中（据说是作用在自身）")]),t._v(" "),n("li",[t._v("display的值只要不为none，其display的计算值就是block或table（只有 inline-table元素float才会是table，其他的都会变成block），再设置display: block是无意义的")]),t._v(" "),n("li",[t._v("float会导致父级塌陷，下面的块级重叠，但是块级里的行框盒子和浮动元素不可重叠性，也就是文字会跟随在浮动元素后面")]),t._v(" "),n("li",[t._v("float的基准点是他最近的行框元素，比如一段文字有两行，float元素在这文档后面就是在第二行前面浮动，在文档前面就是在第一行前面浮动")]),t._v(" "),n("li",[t._v("clear: 保证自己不与浮动元素相邻，也就是无法再一行显示。所以设置margin-top：-xxx就无效。clear属性只有块级元素才有效， ::affter等伪元素默认是内联，所以要设置 display: block")]),t._v(" "),n("li",[t._v("普通流元素设置overflow: hidden之后会自动填满除了浮动元素以外剩余的空间。这就很吊了，即使浮动元素动态变化，剩下的部分也能动态变化")]),t._v(" "),n("li",[t._v("BFC元素：封闭健壮，子元素不会影响外部元素，所以不会出现margin重叠等。外部元素也不会影响到子元素，所以可以去除浮动的影响")]),t._v(" "),n("li",[t._v("overflow: hidden剪裁的边界是border而不是padding。")]),t._v(" "),n("li",[t._v("url后面加个空锚点 # 就会回到顶部")]),t._v(" "),n("li",[t._v("positon: absolute 位置是相对于padding box计算的")]),t._v(" "),n("li",[t._v("只有positon: absolute/fixed属性时是无依赖绝对定位，元素还在原来的位置，并且会跟随前面元素变化。但是脱离了文档流，不占用空间")]),t._v(" "),n("li",[t._v("clip: rect(top,right,bottom,left) 剪裁属性只能用在 position为absolute或fixed元素上。剪裁后元素大小其实还是在的，仅仅是决定了哪部分是可见的。不同于display: none")]),t._v(" "),n("li",[t._v("absolute在对立方向同时发生定位时就会有流体特性")]),t._v(" "),n("li",[t._v("position: relative自己的top等定位是相对于自身位置（使用百分比计算的值是包含块的值），并且不会有其他影响，不像margin变了之后下面的元素也跟上，relative只是自身位置变了")]),t._v(" "),n("li",[t._v("relative在对立方向同时发生定位时只会留下有用的（top，left），这与absolute的拉伸填满不一样")]),t._v(" "),n("li",[t._v("relative层级高，会覆盖普通元素，所以要relative最小化")]),t._v(" "),n("li",[t._v("z-index只有在position不为static的时候才有效，css3里flex盒子也有效。z-index为数值时才会创建层叠上下文。同一个层叠上下文内的z-index才能像预期生效。由于层级上下文的background和border是最底层的，子元素设置z-index为负数也不能比他更低，所以普通元素避免设置z-index导致创建层级上下文引发其他问题")]),t._v(" "),n("li",[t._v("em是相对当前元素font-size计算值，rem是相对于根元素，ex是字符x的高度，ch是 0 的宽度")]),t._v(" "),n("li",[t._v("font 图：@font-face设置font-family，url等，然后使用这个font-family。最好用伪元素写，与html解耦。\n"),n("ul",[n("li",[t._v("好处：矢量，颜色可控，资源小")]),t._v(" "),n("li",[t._v("缺点：加载慢的时候会看见字体替换过程。与本机字体冲突。原字符与替换图标x-height不一样导致垂直对齐问题。SVG更吊。")])])]),t._v(" "),n("li",[t._v("word-break: break-all   毫不留情的换行。word-wrap: break-word  如果认为有合适换行的点就换行，导致后面有很多空白")]),t._v(" "),n("li",[t._v("trasition支持visibility但不支持display: none。所以即想淡入淡出又不想占据空间，可以visibility + position无依赖绝对定位")])]),t._v(" "),n("h4",{attrs:{id:"选择器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#选择器","aria-hidden":"true"}},[t._v("#")]),t._v(" 选择器")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",{staticStyle:{"text-align":"left"}},[t._v("元字符")]),t._v(" "),n("th",{staticStyle:{"text-align":"left"}},[t._v("作用")])])]),t._v(" "),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("[attribute]")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("用于选取带有指定属性的元素")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("[attribute=value]")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("用于选取带有指定属性和值的元素")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("[attribute~=value]")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("用于选取属性值中包含指定词汇的元素")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("[attribute")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("=value]")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("[attribute^=value]")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("匹配属性值以指定值开头的每个元素")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("[attribute$=value]")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("匹配属性值以指定值结尾的每个元素")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("[attribute*=value]")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("匹配属性值中包含指定值的每个元素")])])])]),t._v(" "),n("h4",{attrs:{id:"动画"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#动画","aria-hidden":"true"}},[t._v("#")]),t._v(" 动画")]),t._v(" "),n("div",{staticClass:"language-css extra-class"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 创建动画  */")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token atrule"}},[n("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@keyframes")]),t._v(" mytest")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("0%")]),t._v("   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" red"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("left")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("0px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("top")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("0px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("25%")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" yellow"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("left")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("200px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("top")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("0px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("50%")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" blue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("left")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("200px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("top")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("200px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("75%")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" green"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("left")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("0px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("top")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("200px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("100%")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" red"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("left")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("0px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("top")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("0px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("animation-name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" mytest"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("animation-duration")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 5s"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("animation-timing-function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" linear"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("animation-delay")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 2s"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("animation-iteration-count")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" infinite"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("animation-direction")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" alternate"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("animation-play-state")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" running"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t// "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("animation")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" myfirst 5s linear 2s infinite alternate"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h4",{attrs:{id:"flex"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#flex","aria-hidden":"true"}},[t._v("#")]),t._v(" flex")]),t._v(" "),n("ul",[n("li",[t._v("设为 Flex 布局以后，子元素的float、clear和vertical-align属性将失效")])]),t._v(" "),n("h4",{attrs:{id:"其他"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#其他","aria-hidden":"true"}},[t._v("#")]),t._v(" 其他")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("<link>")]),t._v(" 定义文档与外部资源的关系。常用href(url)，type(MIME_type)，rel(stylesheet,icon,xxx)")]),t._v(" "),n("li",[t._v("媒体查询： "),n("code",[t._v("@media only screen and (device-width: 500px) { }")])]),t._v(" "),n("li",[t._v("CSS @import - "),n("code",[t._v("@import url(‘x.css’)")])]),t._v(" "),n("li",[t._v("权重：\n"),n("ul",[n("li",[t._v("一个行内样式+1000")]),t._v(" "),n("li",[t._v("一个id+100")]),t._v(" "),n("li",[t._v("一个属性选择器/class或者伪类+10")]),t._v(" "),n("li",[t._v("一个元素名，或者伪元素+1。")]),t._v(" "),n("li",[t._v("!important最牛逼")])])]),t._v(" "),n("li",[t._v("文字最多几行设置 … 点点点："),n("code",[t._v("display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 3;overflow: hidden;")])])]),t._v(" "),n("h4",{attrs:{id:"重点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#重点","aria-hidden":"true"}},[t._v("#")]),t._v(" 重点")]),t._v(" "),n("ul",[n("li",[t._v("transform会给元素提高层级(相当于relative)")]),t._v(" "),n("li",[t._v("transform会将 fixed 变成 absolute")]),t._v(" "),n("li",[t._v("在移动端直接使用transition会卡，可以先"),n("code",[t._v("transform: translate3D(0,0,0)")]),t._v("来开启移动端的动画GPU加速")]),t._v(" "),n("li",[n("code",[t._v("transform: scaleY(1 / devicePixelRatio)")]),t._v(" 可以精确 1px 到 1个物理像素")]),t._v(" "),n("li",[t._v("css定义变量: "),n("code",[t._v("- -a, var(- -a)")]),t._v("，可以利用媒体查询改变变量的值，从而影响页面")])])])}],!1,null,null,null);a.default=s.exports}}]);