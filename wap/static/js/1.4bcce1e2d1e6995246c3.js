webpackJsonp([1],{"24Wn":function(t,a,i){t.exports=i.p+"static/img/advantage2.54665d2.png"},"62pr":function(t,a,i){t.exports=i.p+"static/img/advantage15.d502970.png"},AMJ6:function(t,a,i){t.exports=i.p+"static/img/advantage13.c658dc5.png"},Icjp:function(t,a,i){t.exports=i.p+"static/img/advantage4.8c6220c.png"},OGkg:function(t,a,i){t.exports=i.p+"static/img/advantage6.4e9d584.png"},"Pak+":function(t,a,i){t.exports=i.p+"static/img/advantage8.b0e2c08.png"},U4IC:function(t,a){},VZ5r:function(t,a,i){t.exports=i.p+"static/img/advantage3.ea89992.png"},Wq5S:function(t,a,i){t.exports=i.p+"static/img/advantage9.5646052.png"},WtoF:function(t,a,i){t.exports=i.p+"static/img/advantage1.86dc62b.png"},Yhwk:function(t,a,i){t.exports=i.p+"static/img/advantage14.19331ed.png"},bMzo:function(t,a,i){t.exports=i.p+"static/img/advantage12.c4a2e06.png"},e28M:function(t,a){},jIfA:function(t,a,i){t.exports=i.p+"static/img/advantage5.e4974e6.png"},"k3u/":function(t,a,i){t.exports=i.p+"static/img/advantage16.f428edd.png"},miuN:function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0});i("OGwZ");var e=i("Cz8s"),n=i("mzkE"),s={render:function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"page row center"},[t.number%2==1?i("div",{staticClass:"row center  average box"},[i("div",{staticClass:"column"},[i("div",{staticClass:" row item-center"},[i("div",{staticClass:"numberBox row center "},[i("span",{staticClass:"number"},[t._v(t._s(t.number)+".")])]),t._v(" "),i("div",{staticClass:"diamond"}),t._v(" "),i("span",{staticClass:"title"},[t._v(t._s(t.title))])]),t._v(" "),i("div",{staticClass:"introduce"},[i("p",[t._v(t._s(t.introduce))])])]),t._v(" "),t._m(0)]):t._e(),t._v(" "),t.number%2==0?i("div",{staticClass:"row center  average box"},[t._m(1),t._v(" "),i("div",{staticClass:"column"},[i("div",{staticClass:" row item-center"},[i("div",{staticClass:"numberBox row center "},[i("span",{staticClass:"number"},[t._v(t._s(t.number)+".")])]),t._v(" "),i("div",{staticClass:"diamond"}),t._v(" "),i("span",{staticClass:"title"},[t._v(t._s(t.title))])]),t._v(" "),i("div",{staticClass:"introduce"},[i("p",[t._v(t._s(t.introduce))])])])]):t._e()])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"imgBox"},[a("img",{staticClass:"imgBox ",attrs:{src:i("WtoF"),alt:""}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"imgBox"},[a("img",{staticClass:"imgBox ",attrs:{src:i("WtoF"),alt:""}})])}]};var c=i("VU/8")({name:"advantage",props:["number","title","introduce","img_src"],data:function(){return{imgSrc:"@/assets/img/advantage1.png"}},mounted:function(){},comments:{}},s,!1,function(t){i("e28M")},"data-v-3650eb0a",null).exports,r={name:"advantage",components:{hader:e.a,footera:n.a,advantageModule:c},data:function(){return{data:[],nav:"advantage",img:{index:i("cJWz"),indexa:i("1UF1"),about:i("iWPK"),abouta:i("xlpS"),creation:i("jaRd"),creationa:i("P88/"),advantage:i("oVEK"),advantagea:i("/DrW"),partner:i("JjN+"),partnera:i("fose"),product:i("kV/A"),producta:i("Qpz5")}}},methods:{getAjaxanme:function(){var t=this;this.$http.get(this.$ports.gambling.getOddsCode,{type:"p_code"}).then(function(a){t.$store.dispatch("SET_PLAYALIAS",a.data.data)})},navClick:function(t){if(t==this.nav)return!1;var a=t;"index"==t&&(a="/"),this.$router.push({path:a})}},computed:{noRoll:function(){return this.$store.getters.getNoRoll}},watch:{noRoll:function(t){this.noroll=t}},mounted:function(){this.data=[{number:1,title:"原生APP",introduce:"自主开发的原生APP，远离被劫持的困扰，更能稳定的提供服务及有效防御攻击。 ",img_src:i("WtoF")},{number:2,title:"创新聊天室",introduce:"可在聊天室分享投注盈亏，用户购彩经验交流。当下最流行的发红包.抢红包功能。 可独立开启聊天室房间，计划炒群，完美避开V信的各种风控。",img_src:i("24Wn")},{number:3,title:"客服系统智能化",introduce:"模拟阿里的智能客服回复，大大提升客服人员的工作效率，节约客服人员的人工成本。",img_src:i("VZ5r")},{number:4,title:"长龙助手",introduce:"已开期数，系统自动统计，让玩家投注游刃有余，增加玩家的投注效率。 ",img_src:i("Icjp")},{number:5,title:"系统自开彩种自定义杀率",introduce:"除官方彩种外，系统自开彩种，可自定义KJ。 ",img_src:i("jIfA")},{number:6,title:"无限代理",introduce:"代理用户一体，佣金计算方式，代理亮点（佣金 结算，有效注单，合作互惠） ",img_src:i("OGkg")},{number:7,title:"晋级奖金",introduce:"有效投注自动累积，申请VIP晋级，获取对应奖励，尊享终身荣耀。 ",img_src:i("s6PU")},{number:8,title:"游戏体验",introduce:"我们网络最齐全，最受玩家欢迎的游戏平台，囊括真人视讯、 电子游艺、彩票游戏、体育竞技、电子竞技、棋牌游戏等，集 合中西流行的游戏及类型，客户可以自由灵活配搭。 ",img_src:i("Pak+")},{number:9,title:"服务专业",introduce:"专业的客服、运维团队， 产品操作简单方便，让用户轻松使用， 机房全部新架设服务器，顶级配置。如您有需要找帮手，我们的客 服、运维技术支援团队全天24小时随时为你服务。 ",img_src:i("Wq5S")},{number:10,title:"全天候防御系统",introduce:"我们采用自家研发的CDN立体化防攻击体系，24小时全面抵御任 何类型的DDoS或CC攻击，并提供独创防劫持技术，通过加密演 算法和密钥交换演算法加密建立安全连线确保信息传输。 ",img_src:i("vyAb")},{number:11,title:"全球顶尖机房",introduce:"我们在全球三甲的服务器供应商各设置节点，机房区域广怖全球 且具备完善的全球网路。中枢网路拥有数千英里的光纤缆线、使用 最先进的软体定义网路技术，可提供快速、稳定且可调整资源配置 的效能。 ",img_src:i("yBpv")},{number:12,title:"专业的技术",introduce:"我们提供业内最快速的流程化包网建站服务，过千华丽模板，任君 选择，自主创意，无任欢迎。前后台即日交付、卓越包网企业方案 ，极速打造网上品牌，随时上线运营。 ",img_src:i("bMzo")},{number:13,title:"多种支付方式",introduce:"支持支付宝，微信，QQ支付，银联汇款等多种支付方式 ",img_src:i("AMJ6")},{number:14,title:"每月好运金",introduce:"每月有效投注，月月领取好运彩金，让玩家爱不释手，大大增加玩家的留存率。 ",img_src:i("Yhwk")},{number:15,title:"每天签到彩金",introduce:"根据玩家VIP等级，天天领取惊喜红包，大大增加玩家的在线率。 ",img_src:i("62pr")},{number:16,title:"游戏玩法多样",introduce:"囊括真人视讯、电子游艺、彩票游戏、体育竞技 电子竞技、棋牌游戏等。 ",img_src:i("k3u/")}]}},o={render:function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"page"},[i("div",{staticClass:"list"},[i("hader"),t._v(" "),i("div",{staticClass:"ground"}),t._v(" "),t._l(t.data,function(a,e){return i("div",{staticClass:"page row center "},[a.number%2==1?i("div",{staticClass:" box "},[i("div",{staticClass:"row center average gradient box"},[i("div",{staticClass:"column"},[i("div",{staticClass:" row item-center"},[i("div",{staticClass:"numberBox row center "},[i("span",{staticClass:"number"},[t._v(t._s(a.number)+".")])]),t._v(" "),i("div",{staticClass:"diamond"}),t._v(" "),i("span",{staticClass:"title"},[t._v(t._s(a.title))])]),t._v(" "),i("div",{staticClass:"introduce"},[i("p",[t._v(t._s(a.introduce))])])]),t._v(" "),i("div",{staticClass:"imgBox"},[i("img",{staticClass:"imgBox ",attrs:{src:a.img_src,alt:""}})])])]):t._e(),t._v(" "),a.number%2==0?i("div",{staticClass:"row center  average box gradient"},[i("div",{staticClass:"imgBox"},[i("img",{staticClass:"imgBox ",attrs:{src:a.img_src,alt:""}})]),t._v(" "),i("div",{staticClass:"column"},[i("div",{staticClass:" row item-center"},[i("div",{staticClass:"numberBox row center "},[i("span",{staticClass:"number"},[t._v(t._s(a.number)+".")])]),t._v(" "),i("div",{staticClass:"diamond"}),t._v(" "),i("span",{staticClass:"title"},[t._v(t._s(a.title))])]),t._v(" "),i("div",{staticClass:"introduce"},[i("p",[t._v(t._s(a.introduce))])])])]):t._e()])}),t._v(" "),i("footera")],2),t._v(" "),i("div",{staticClass:"nav row average"},[i("div",{staticClass:"column average",class:{active:"index"==t.nav},on:{click:function(a){return t.navClick("index")}}},[i("div",[i("img",{attrs:{src:"index"==t.nav?t.img.indexa:t.img.index}})]),t._v(" "),t._m(0)]),t._v(" "),i("div",{staticClass:"column average",class:{active:"product"==t.nav},on:{click:function(a){return t.navClick("product")}}},[i("div",[i("img",{attrs:{src:"product"==t.nav?t.img.producta:t.img.product}})]),t._v(" "),t._m(1)]),t._v(" "),i("div",{staticClass:"column average",class:{active:"advantage"==t.nav},on:{click:function(a){return t.navClick("advantage")}}},[i("div",[i("img",{attrs:{src:"advantage"==t.nav?t.img.advantagea:t.img.advantage}})]),t._v(" "),t._m(2)]),t._v(" "),i("div",{staticClass:"column average",class:{active:"partner"==t.nav},on:{click:function(a){return t.navClick("partner")}}},[i("div",[i("img",{attrs:{src:"partner"==t.nav?t.img.partnera:t.img.partner}})]),t._v(" "),t._m(3)]),t._v(" "),i("div",{staticClass:"column average",class:{active:"customized"==t.nav},on:{click:function(a){return t.navClick("customized")}}},[i("div",[i("img",{attrs:{src:"customized"==t.nav?t.img.creationa:t.img.creation}})]),t._v(" "),t._m(4)]),t._v(" "),i("div",{staticClass:"column average",class:{active:"about"==t.nav},on:{click:function(a){return t.navClick("about")}}},[i("div",[i("img",{attrs:{src:"about"==t.nav?t.img.abouta:t.img.about}})]),t._v(" "),t._m(5)])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("p",[this._v("首页")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("p",[this._v("产品")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("p",[this._v("优势")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("p",[this._v("伙伴")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("p",[this._v("定制")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("p",[this._v("关于")])])}]};var v=i("VU/8")(r,o,!1,function(t){i("U4IC")},"data-v-027a3fc0",null);a.default=v.exports},s6PU:function(t,a,i){t.exports=i.p+"static/img/advantage7.51301bb.png"},vyAb:function(t,a,i){t.exports=i.p+"static/img/advantage10.ff2c141.png"},yBpv:function(t,a,i){t.exports=i.p+"static/img/advantage11.1c25518.png"}});
//# sourceMappingURL=1.4bcce1e2d1e6995246c3.js.map