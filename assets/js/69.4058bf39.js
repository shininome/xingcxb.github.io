(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{446:function(s,t,n){"use strict";n.r(t);var a=n(0),e=Object(a.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"数据集预处理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据集预处理"}},[s._v("#")]),s._v(" 数据集预处理")]),s._v(" "),t("p",[s._v("本节主要是认识怎么处理文本数据，需要注意的是本节说明为了方便起见，本章后续所有的文本预测都以字符为基本单位。")]),s._v(" "),t("blockquote",[t("p",[s._v("文字经过预处理，将所有的字符以外的符号都变为了空格")])]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tokenize")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("lines"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" token"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'word'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#@save")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v('"""将文本行拆分为单词或字符词元"""')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" token "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'word'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("line"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("split"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" line "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" lines"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("elif")]),s._v(" token "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'char'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("list")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("line"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" line "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" lines"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'错误：未知词元类型：'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" token"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\ntokens "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" tokenize"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("lines"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"char"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" i "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("range")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("tokens"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("div",{staticClass:"custom-block note"},[t("p",{staticClass:"custom-block-title"},[s._v("笔记")]),s._v(" "),t("p",[s._v("list(str) 会将str转变为单个字符。")]),s._v(" "),t("p",[s._v("也很合理，因为遍历字符就是一个一个遍历的。")])])])}),[],!1,null,null,null);t.default=e.exports}}]);