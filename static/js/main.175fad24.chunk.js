(this["webpackJsonphello-word-zilliqa"]=this["webpackJsonphello-word-zilliqa"]||[]).push([[0],{129:function(e,t,n){},131:function(e,t,n){},134:function(e,t){},139:function(e,t){},140:function(e,t){},159:function(e,t){},161:function(e,t){},172:function(e,t){},174:function(e,t){},200:function(e,t){},202:function(e,t){},207:function(e,t){},209:function(e,t){},221:function(e,t){},224:function(e,t){},277:function(e,t){},284:function(e,t,n){"use strict";n.r(t);var a=n(22),c=n.n(a),s=n(120),r=n.n(s),o=(n(129),n(5)),l=n.n(o),i=n(18),u=n(121),d=n(122),b=n(12),h=n(124),j=n(123),p=(n(131),n(2)),g=n(23),f=g.BN,v=g.Long,m=g.bytes,x=g.units,w=n(33).toBech32Address,O=n(232).Zilliqa,y=n(119),k=y.StatusType,S=y.MessageType,H=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={contractAddress:"",setHelloValue:"",welcomeMsg:""},a.handleAddressChange=a.handleAddressChange.bind(Object(b.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(b.a)(a)),a.handleHelloChange=a.handleHelloChange.bind(Object(b.a)(a)),a.setHello=a.setHello.bind(Object(b.a)(a)),a.getHello=a.getHello.bind(Object(b.a)(a)),a.connectZilpay=a.connectZilpay.bind(Object(b.a)(a)),a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){}},{key:"handleAddressChange",value:function(e){this.setState({contractAddress:e.target.value})}},{key:"handleSubmit",value:function(){localStorage.setItem("contract_address",this.state.contractAddress)}},{key:"handleHelloChange",value:function(e){this.setState({setHelloValue:e.target.value})}},{key:"setHello",value:function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.zilPay.wallet.isEnable){e.next=4;break}this.updateWelcomeMsg(),e.next=8;break;case 4:return e.next=6,window.zilPay.wallet.connect();case 6:e.sent?this.updateWelcomeMsg():alert("Not able to call setHello as transaction is rejected");case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"updateWelcomeMsg",value:function(){var e=Object(i.a)(l.a.mark((function e(){var t,n,a,c,s,r,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=window.zilPay,n=this.state.setHelloValue,a=localStorage.getItem("contract_address"),333,1,c=m.pack(333,1),s=x.toQa("2000",x.Units.Li),a=a.substring(2),r=w(a),e.prev=9,o=t.contracts.at(r),e.next=13,o.call("setHello",[{vname:"msg",type:"String",value:n}],{version:c,amount:new f(0),gasPrice:s,gasLimit:v.fromNumber(1e4)});case 13:e.sent,e.next=19;break;case 16:e.prev=16,e.t0=e.catch(9),console.log(e.t0);case 19:case"end":return e.stop()}}),e,this,[[9,16]])})));return function(){return e.apply(this,arguments)}}()},{key:"getHello",value:function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.zilPay.wallet.isEnable){e.next=4;break}this.getWelcomeMsg(),e.next=8;break;case 4:return e.next=6,window.zilPay.wallet.connect();case 6:e.sent?this.getWelcomeMsg():alert("Not able to call setHello as transaction is rejected");case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getWelcomeMsg",value:function(){var e=Object(i.a)(l.a.mark((function e(){var t,n,a,c,s,r,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=window.zilPay,n=localStorage.getItem("contract_address"),333,1,a=m.pack(333,1),c=x.toQa("2000",x.Units.Li),n=n.substring(2),s=w(n),e.prev=8,r=t.contracts.at(s),e.next=12,r.call("getHello",[],{version:a,amount:new f(0),gasPrice:c,gasLimit:v.fromNumber(1e4)});case 12:o=e.sent,console.log(JSON.stringify(o.TranID)),this.eventLogSubscription(),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(8),console.log(e.t0);case 20:case"end":return e.stop()}}),e,this,[[8,17]])})));return function(){return e.apply(this,arguments)}}()},{key:"eventLogSubscription",value:function(){var e=Object(i.a)(l.a.mark((function e(){var t,n,a=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new O("https://dev-api.zilliqa.com"),(n=t.subscriptionBuilder.buildEventLogSubscriptions("wss://dev-ws.zilliqa.com",{addresses:[localStorage.getItem("contract_address")]})).emitter.on(k.SUBSCRIBE_EVENT_LOG,(function(e){console.log("get SubscribeEventLog echo : ",e)})),n.emitter.on(S.EVENT_LOG,(function(e){if(console.log("get new event log: ",JSON.stringify(e)),e.hasOwnProperty("value")&&"getHello"==e.value[0].event_logs[0]._eventname){var t=e.value[0].event_logs[0].params[0].value;a.setState({welcomeMsg:t}),console.log("welcomeMsg",t)}})),e.next=6,n.start();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"connectZilpay",value:function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,window.zilPay.wallet.connect();case 3:window.zilPay.wallet.isConnect?(localStorage.setItem("zilpay_connect",!0),window.location.reload(!1)):alert("Zilpay connection failed, try again..."),e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsxs)("div",{children:[" ","Current Contract Address : ".concat(localStorage.getItem("contract_address"))," "]}),Object(p.jsx)("h3",{children:"Update Contract Address"}),Object(p.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(p.jsxs)("label",{children:["New Address ",Object(p.jsx)("br",{}),Object(p.jsx)("input",{type:"text",onChange:this.handleAddressChange,size:"70",placeholder:"Format: 0x47d9CEea9a2DA23dc6b2D96A16F7Fbf884580665"})]}),Object(p.jsx)("br",{}),Object(p.jsx)("input",{type:"submit",value:"Submit"}),Object(p.jsx)("hr",{})]}),Object(p.jsx)("div",{children:" Hello World Contract Transitions"}),Object(p.jsx)("br",{}),Object(p.jsx)("label",{children:"Set Hello"}),Object(p.jsx)("br",{}),Object(p.jsx)("input",{type:"text",onChange:this.handleHelloChange,size:"30"}),Object(p.jsx)("br",{}),Object(p.jsx)("button",{onClick:this.setHello,children:"Set Hello"}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)("label",{children:"Get Hello"}),Object(p.jsx)("br",{}),Object(p.jsx)("button",{onClick:this.getHello,children:"Get Hello"}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsxs)("div",{children:[" ","Current Welcome Msg : ".concat(this.state.welcomeMsg)," "]}),Object(p.jsx)("hr",{}),!localStorage.getItem("zilpay_connect")&&Object(p.jsx)("button",{onClick:this.connectZilpay,children:"Connect Zilpay"}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{})]})}}]),n}(c.a.Component);r.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(H,{})}),document.getElementById("root"))}},[[284,1,2]]]);
//# sourceMappingURL=main.175fad24.chunk.js.map