(this["webpackJsonpsea-battle"]=this["webpackJsonpsea-battle"]||[]).push([[0],{118:function(e,t,a){e.exports=a(400)},122:function(e,t,a){},400:function(e,t,a){"use strict";a.r(t);for(var n=a(1),l=a.n(n),r=a(14),s=a.n(r),o=(a(122),a(110)),i=a(111),c=a(117),m=a(116),d=(a(123),[10]),u=[10],h=0;h<10;h++){d[h]=[10],u[h]=[10];for(var y=0;y<10;y++)d[h][y]=0,u[h][y]=0}var E=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).arr=d,n.arrC=u,n.arrComp=u,n.arrPlayer=d,n.rez=!0,n.real=0,n.sumBoot=0,n.enemyCount=40,n.playerCount=40,n.state={real:0,statusGame:["\u0432\u0430\u0448 \u0445\u043e\u0434","\u0445\u043e\u0434 \u043f\u0440\u043e\u0442\u0438\u0432\u043d\u0438\u043a\u0430","\u043f\u043e\u0431\u0435\u0434a \u0432\u0430\u0448\u0430","\u043f\u043e\u0431\u0435\u0434a \u043f\u0440\u043e\u0442\u0438\u0432\u0432\u043d\u0438\u043a\u0430"],addClassN:["btn__pos__field","field__boot","field__boom","field__flub"]},n}return Object(i.a)(a,[{key:"createRandom",value:function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e))+e}},{key:"autoPosition",value:function(e,t){var a=this.arrPlayer,n=this.arrComp;this.randPosition(a),this.randPosition(n),this.positionViev(a)}},{key:"positionViev",value:function(e){for(var t=this.state.addClassN[1],a=0;a<10;a++)for(var n=0;n<10;n++)2==e[a][n]&&(document.getElementById("pos"+a+n).className=t)}},{key:"clickPosition",value:function(e,t){var a=this.state.addClassN[1],n=this.state.addClassN[0];if(this.sumBoot<=38)2==this.arrPlayer[e][t]?(this.arrPlayer[e][t]-=2,document.getElementById("pos"+e+t).className=n,this.sumBoot-=2):(this.arrPlayer[e][t]+=2,document.getElementById("pos"+e+t).className=a,this.sumBoot+=2);else{alert("\u043a\u043e\u0440\u0430\u0431\u043b\u0438 \u0437\u0430\u043a\u043e\u043d\u0447\u0438\u043b\u0441\u044c");var l=this.arrComp;this.randPosition(l)}}},{key:"randPosition",value:function(e){for(var t=4,a=3,n=2,l=1;l>0;){var r=this.createRandom(0,4),s=this.createRandom(0,4);0==e[r][s]&&0==e[r][s+1]&&0==e[r+1][s]&&0==e[r][s+2]&&0==e[r][s+3]&&0==e[r][s+4]?(e[r][s]=2,e[r][s+1]=2,e[r][s+2]=2,e[r][s+3]=2,l=0):0==e[r][s]&&0==e[r+1][s]&&0==e[r+2][s]&&0==e[r+3][s]&&0==e[r+4][s]&&0==e[r+5][s]&&(e[r][s]=2,e[r+1][s]=2,e[r+2][s]=2,e[r+3][s]=2,l=0)}for(;n>0;){var o=this.createRandom(0,4),i=this.createRandom(0,4);0==e[o][i]&&0==e[o][i+1]&&0==e[o+1][i]&&0==e[o][i+2]&&0==e[o][i+3]&&0==e[o+1][i+1]&&0==e[o][i+4]?(e[o][i]=2,e[o][i+1]=2,e[o][i+2]=2,n-=1):0==e[o][i]&&0==e[o+1][i+1]&&0==e[o+1][i]&&0==e[o+2][i]&&0==e[o+3][i]&&0==e[o+4][i]&&0==e[o+5][i]&&(e[o][i]=2,e[o+1][i]=2,e[o+2][i]=2,n-=1)}for(;a>0;){var c=this.createRandom(1,9),m=this.createRandom(0,9);0==e[c][m]&&0==e[c-1][m]&&0==e[c-1][m+1]&&0==e[c][m+1]&&0==e[c][m+2]&&0==e[c+1][m]&&0==e[c][m+2]&&(e[c][m]=2,e[c][m+1]=2,a--)}for(;t>0;){var d=this.createRandom(1,9),u=this.createRandom(1,9);0==e[d][u]&&0==e[d+1][u]&&0==e[d][u-1]&&0==e[d-1][u]&&0==e[d][u+1]&&(e[d][u]=2,t--)}}},{key:"delay",value:function(e,t){return function(){var a=arguments,n=this;setTimeout((function(){return e.apply(n,a)}),t)}}},{key:"moveComp",value:function(){var e=this.state.addClassN[2],t=this.state.addClassN[3],a=this.createRandom(0,9),n=this.createRandom(0,9);if(this.playerCount>1){if(2==this.arrPlayer[a][n]&&(this.setState((function(e){e.real;return{real:1}})),this.arrPlayer[a][n]=1,document.getElementById("pos"+a+n).className=e,this.playerCount-=2,2==this.arrPlayer[a][n+1])){var l=n+1;this.arrPlayer[a][n+1]=1,document.getElementById("pos"+a+l).className=e,this.playerCount-=2}0==this.arrPlayer[a][n]&&(this.arrPlayer[a][n]-=0,document.getElementById("pos"+a+n).className=t,this.setState((function(e){e.real;return{real:0}})))}else this.setState((function(e){e.real;return{real:3}}))}},{key:"killPosition",value:function(e,t){var a=this.state.addClassN[2],n=this.state.addClassN[3];this.enemyCount>0?2==this.arrComp[e][t]?(this.arrComp[e][t]=1,document.getElementById("posC"+e+t).className=a,this.enemyCount-=2,this.setState((function(e){e.real;return{real:0}}))):1!=this.arrPlayer[e][t]&&(this.arrComp[e][t]=0,document.getElementById("posC"+e+t).className=n,this.setState((function(e){e.real;return{real:1}})),this.moveComp()):(alert("you vin"),this.setState((function(e){e.real;return{real:2}})))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("input",{type:"text",value:this.state.statusGame[this.state.real],className:"hod",id:"hod"}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"field__main"},l.a.createElement(l.a.Fragment,null,l.a.createElement("table",null,l.a.createElement("tbody",null,this.arrPlayer.map((function(t,a){return l.a.createElement("tr",{key:a},t.map((function(t,n){return l.a.createElement("td",{key:n},l.a.createElement("button",{onClick:1==e.rez?function(){return e.autoPosition(a,n)}:function(){return e.delay(e.clickPosition(a,n),1500)},className:e.state.addClassN[0],id:"pos"+a+n}))})))})))))),l.a.createElement("div",{className:"field__main"},l.a.createElement(l.a.Fragment,null,l.a.createElement("table",null,l.a.createElement("tbody",null,this.arrComp.map((function(t,a){return l.a.createElement("tr",{key:a},t.map((function(t,n){return l.a.createElement("td",{key:n},l.a.createElement("button",{onClick:0!=e.playerCount?function(){return e.killPosition(a,n)}:0,className:e.state.addClassN[0],id:"posC"+a+n}))})))}))))))))}}]),a}(l.a.Component);function f(e){return l.a.createElement("button",{className:"btn",id:"btnClick"},e.name)}document.getElementById("start");function v(){document.getElementById("player").value,document.getElementById("enemy").value}function p(e){return l.a.createElement("div",{id:"window",className:"modal__main"},l.a.createElement("div",{className:"modal__title"},l.a.createElement("div",{className:"modal__text__title"},e.title),l.a.createElement("div",{id:"btnClose",className:"modal__close"},l.a.createElement("div",{className:"modal__close__line"}),l.a.createElement("div",{className:"modal__close__line1"}))),l.a.createElement("div",{className:"modal__text"},l.a.createElement("label",{for:"player"},"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f"),l.a.createElement("input",{type:"text",id:"player",placeholder:"\u041f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u044c\u0442\u0435\u0441\u044c",className:"input__name"}),l.a.createElement("label",{for:"enemy"},"\u041d\u0430\u0437\u043e\u0432\u0438\u0442\u0435 \u043f\u0440\u043e\u0442\u0438\u0432\u043d\u0438\u043a\u0430"),l.a.createElement("input",{type:"text",id:"enemy",placeholder:"\u041d\u0430\u0437\u043e\u0432\u0438\u0442\u0435 \u043f\u0440\u043e\u0442\u0438\u0432\u043d\u0438\u043a\u0430",className:"input__name"}),l.a.createElement("div",null,l.a.createElement("input",{type:"checkbox",class:"",id:"hand"}),l.a.createElement("label",{class:"form-check-label",for:"hand"},"\u0420\u0430\u0441\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u0440\u0430\u0431\u043b\u0438 \u0432 \u0440\u0443\u0447\u043d\u0443\u044e"),l.a.createElement("input",{type:"checkbox",class:"",id:"auto"}),l.a.createElement("label",{class:"",for:"auto"},"\u0420\u0430\u0441\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438")),l.a.createElement("div",null,l.a.createElement("button",{id:"start",onClick:v,class:"btn"},"\u041d\u0430\u0447\u0430\u0442\u044c"))),l.a.createElement("div",{className:"modal__footer"}))}function _(e){return l.a.createElement("div",{className:"footer__main"},l.a.createElement("p",null,"2020 NikitinaE"))}var N=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("header",null,l.a.createElement("h3",null,"\u043c\u043e\u0440\u0441\u043a\u043e\u0439 \u0431\u043e\u0439")),l.a.createElement("div",{className:"control"},l.a.createElement(p,{title:"\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u0435\u043d\u0430"})),l.a.createElement("div",{className:"control"},l.a.createElement(f,{name:"start game"})),l.a.createElement(E,null),l.a.createElement(_,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(N,null)),document.getElementById("root"));var C=document.getElementById("btnClick"),b=document.getElementById("start"),k=document.getElementById("window"),g=document.getElementById("btnClose");C.addEventListener("click",(function(){k.style.display="block"})),g.addEventListener("click",(function(){k.style.display="none"})),b.addEventListener("click",(function(){k.style.display="none"})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[118,1,2]]]);
//# sourceMappingURL=main.c5acda5a.chunk.js.map