(this["webpackJsonp@project/react-app"]=this["webpackJsonp@project/react-app"]||[]).push([[0],{130:function(e,n,t){!function(){var n=new Array(4);function t(){var e=n[0]^n[0]<<11;return n[0]=n[1],n[1]=n[2],n[2]=n[3],n[3]=n[3]^n[3]>>19^e^e>>8,(n[3]>>>0)/(1<<31>>>0)}function r(){return"hsl("+Math.floor(360*t())+","+(60*t()+40+"%")+","+(25*(t()+t()+t()+t())+"%")+")"}function a(e){var t={};return t.seed=e.seed||Math.floor(Math.random()*Math.pow(10,16)).toString(16),function(e){for(var t=0;t<n.length;t++)n[t]=0;for(t=0;t<e.length;t++)n[t%4]=(n[t%4]<<5)-n[t%4]+e.charCodeAt(t)}(t.seed),t.size=e.size||8,t.scale=e.scale||4,t.color=e.color||r(),t.bgcolor=e.bgcolor||r(),t.spotcolor=e.spotcolor||r(),t}function o(e,n){var r=function(e){for(var n=e,r=e,a=Math.ceil(n/2),o=n-a,i=[],c=0;c<r;c++){for(var u=[],l=0;l<a;l++)u[l]=Math.floor(2.3*t());var s=u.slice(0,o);s.reverse(),u=u.concat(s);for(var f=0;f<u.length;f++)i.push(u[f])}return i}((e=a(e||{})).size),o=Math.sqrt(r.length);n.width=n.height=e.size*e.scale;var i=n.getContext("2d");i.fillStyle=e.bgcolor,i.fillRect(0,0,n.width,n.height),i.fillStyle=e.color;for(var c=0;c<r.length;c++)if(r[c]){var u=Math.floor(c/o),l=c%o;i.fillStyle=1==r[c]?e.color:e.spotcolor,i.fillRect(l*e.scale,u*e.scale,e.scale,e.scale)}return n}var i={create:function(e){var n=document.createElement("canvas");return o(e,n),n},render:o};e.exports=i,"undefined"!==typeof window&&(window.blockies=i)}()},148:function(e,n,t){e.exports=t(397)},153:function(e,n,t){},161:function(e,n){},163:function(e,n){},188:function(e,n){},191:function(e,n){},212:function(e,n){},214:function(e,n){},397:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(68),i=t.n(o),c=t(136),u=t(400),l=(t(153),t(4)),s=t(12),f=t(11),d=t(27),h=t(121),p=t(125);t(67).config();var b=new d.a({supportedChainIds:[3]}),g=new h.a({urls:{3:"https://ropsten.infura.io/v3/084ddf3da9e240c5b5dd9264f37c0526"},defaultChainId:3,pollingInterval:12e3}),m=new p.a({dAppId:"cfefa032-9afd-4833-bfb4-2b0cb7ec3413",networks:[1,100]});t(67).config();var v=t(138);function w(e){var n=e.color,t=Object(v.a)(e,["color"]);return a.a.createElement("svg",Object.assign({width:"38",height:"38",viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",stroke:n},t),a.a.createElement("g",{fill:"none",fillRule:"evenodd"},a.a.createElement("g",{transform:"translate(1 1)",strokeWidth:"2"},a.a.createElement("circle",{strokeOpacity:".5",cx:"18",cy:"18",r:"18"}),a.a.createElement("path",{d:"M36 18c0-9.94-8.06-18-18-18"},a.a.createElement("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"1s",repeatCount:"indefinite"})))))}var x=t(33),j=t(5);function E(){var e=Object(l.a)(["\n  flex: 1;\n  display: flex;\n  background: rgba(0,0,0,0.25);\n"]);return E=function(){return e},e}function y(){var e=Object(l.a)(["\n  flex: 1;\n  display: flex;\n  background: rgba(0,0,0,0.25);\n  flex-direction: column;\n"]);return y=function(){return e},e}function O(){var e=Object(l.a)(["\n  flex: 1;\n  display: flex;\n  background: rgba(0,0,0,0.25);\n  min-height: 80vh;\n"]);return O=function(){return e},e}var k=j.b.div(O()),C=j.b.div(y()),S=j.b.div(E()),z=function(e){e.setBadgeCount;var n=e.bellPressed,t=a.a.useState(!1),r=Object(s.a)(t,2);return r[0],r[1],a.a.useEffect((function(){}),[n]),a.a.createElement(k,null,a.a.createElement(C,null),a.a.createElement(S,null))},M=t(129),I=t.n(M),F=t(45),P=t(46),A=t(139),B=t(137),R=t(130),L=t.n(R),N=function(e){Object(A.a)(t,e);var n=Object(B.a)(t);function t(e){return Object(F.a)(this,t),n.call(this,e)}return Object(P.a)(t,[{key:"getOpts",value:function(){return{seed:this.props.opts.seed||"foo",color:this.props.opts.color||"#dfe",bgcolor:this.props.opts.bgcolor||"#a71",size:this.props.opts.size||15,scale:this.props.opts.scale||3,spotcolor:this.props.opts.spotcolor||"#000"}}},{key:"componentDidMount",value:function(){this.draw()}},{key:"componentDidUpdate",value:function(e){this.props.seed!==e.seed&&this.draw()}},{key:"draw",value:function(){L.a.render({seed:this.props.opts.seed,size:this.props.opts.size,scale:this.props.opts.scale},this.canvas)}},{key:"render",value:function(){var e=this;return a.a.createElement("canvas",{ref:function(n){return e.canvas=n}})}}]),t}(a.a.Component);function W(){var e=Object(l.a)(["\n  margin: 0px 10px;\n  padding: 8px 15px;\n  height: 16px;\n  display: flex;\n  align-items: baseline;\n  justify-content: center;\n  font-weight: bold;\n  font-size: 14px;\n  color: #fff;\n  border-radius: 15px;\n  background: rgb(226,8,128);\n  background: linear-gradient(107deg, rgba(226,8,128,1) 30%, rgba(103,76,159,1) 70%, rgba(53,197,243,1) 100%);\n  &:hover {\n    opacity: 0.9;\n    cursor: pointer;\n    pointer: hand;\n  }\n  &:active {\n    opacity: 0.75;\n    cursor: pointer;\n    pointer: hand;\n  }\n"]);return W=function(){return e},e}function D(){var e=Object(l.a)(["\n"]);return D=function(){return e},e}function G(){var e=Object(l.a)(["\n  position: relative;\n  width: 50px;\n  height: 50px;\n  border-radius: 100%;\n  overflow: hidden;\n  transform: scale(0.85);\n  outline-width: 2px;\n  outline-color: rgba(225,225,225,1);\n"]);return G=function(){return e},e}function H(){var e=Object(l.a)(["\n  margin: 0;\n  padding: 0;\n  background: none;\n  border: 0;\n  outline: 0;\n  justify-content: flex-start;\n  flex: 1,\n  flex-direction: row;\n  align-items: center;\n  display: flex;\n"]);return H=function(){return e},e}var T=j.b.button(H()),V=j.b.div(G()),J=j.b.div(D()),U=j.b.span(W()),q=function(){var e=Object(f.c)(),n=(e.active,e.error),t=e.account,r=e.library,o=(e.chainId,a.a.useState("")),i=Object(s.a)(o,2),c=i[0],u=i[1],l=a.a.useState(""),d=Object(s.a)(l,2),h=d[0],p=d[1],b=a.a.useState(!1),g=Object(s.a)(b,2),m=g[0],v=g[1];return a.a.useEffect((function(){t&&""!=t&&c!==t&&(p(""),v(!1),r.lookupAddress(t).then((function(e){p(e),v(!0),u(t)})).catch((function(){v(!0),u(t)})))}),[t]),a.a.createElement(a.a.Fragment,null,t&&""!==t&&!n&&a.a.createElement(T,null,a.a.createElement(V,null,a.a.createElement(J,null,a.a.createElement(N,{seed:t.toLowerCase(),opts:{seed:t.toLowerCase(),size:7,scale:7}}))),a.a.createElement(U,null,!m&&a.a.createElement(I.a,{type:"Oval",color:"#FFF",height:16,width:16}),m&&h&&a.a.createElement(a.a.Fragment,null,h),m&&!h&&a.a.createElement(a.a.Fragment,null,t.substring(0,6),".....",t.substring(t.length-6)))))},K=t(131);function $(){var e=Object(l.a)(["\n  position: absolute;\n  font-size: 10px;\n  color: #fff;\n  padding: 2px 4px;\n  border-radius: 100%;\n  background: rgba(208.0, 44.0, 30.0, 1.0);\n  top: 0px;\n  left: 5px;\n  font-weight: bold;\n"]);return $=function(){return e},e}function Q(){var e=Object(l.a)(["\n  left: 0,\n"]);return Q=function(){return e},e}function X(){var e=Object(l.a)(["\n  position: absolute;\n  height: ","px;\n  width: ","px;\n"]);return X=function(){return e},e}function Y(){var e=Object(l.a)(["\n  border: 0;\n  outline: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 10px;\n  position: relative;\n  height: ","px;\n  width: ","px;\n  &:hover {\n    opacity: 0.9;\n    cursor: pointer;\n    pointer: hand;\n  }\n  &:active {\n    opacity: 0.75;\n    cursor: pointer;\n    pointer: hand;\n  }\n"]);return Y=function(){return e},e}var Z=j.b.button(Y(),(function(e){return e.height||40}),(function(e){return e.width||40})),_=j.b.img(X(),(function(e){return e.height||40}),(function(e){return e.width||40})),ee=Object(j.b)(_)(Q()),ne=j.b.span($()),te=function(e){var n=e.badgeCount,t=e.bellPressedCB,r=e.width,o=e.height,i=a.a.useState(0),c=Object(s.a)(i,2),u=c[0],l=c[1],f=a.a.useState(!1),d=Object(s.a)(f,2),h=d[0],p=d[1];return a.a.useEffect((function(){l(n),p(!0)}),[n]),a.a.createElement(Z,{onClick:function(){t&&t()},width:r,height:o},a.a.createElement(_,{ring:h,src:"/SVG/bell.svg",width:r,height:o}),a.a.createElement(ee,{src:"/SVG/ringer.svg",width:r,height:o}),a.a.createElement(ee,{src:"/SVG/bellBall.svg",width:r,height:o}),0!=u&&a.a.createElement(K.AnimateOnChange,{animationIn:"fadeIn",animationOut:"fadeOut",durationOut:200},a.a.createElement(ne,null,u)))};function re(){var e=Object(l.a)(["\n    background: #DC143C;\n  "]);return re=function(){return e},e}function ae(){var e=Object(l.a)(["\n    background: #FFAE42;\n  "]);return ae=function(){return e},e}function oe(){var e=Object(l.a)(["\n    background: #77DD77;\n  "]);return oe=function(){return e},e}function ie(){var e=Object(l.a)(["\n  height: 10px;\n  width: 10px;\n  border-radius: 100%;\n\n  ",";\n\n  ",";\n\n  ",";\n"]);return ie=function(){return e},e}function ce(){var e=Object(l.a)(["\n  background: #674c9f;\n"]);return ce=function(){return e},e}function ue(){var e=Object(l.a)(["\n  background: #e20880;\n"]);return ue=function(){return e},e}function le(){var e=Object(l.a)(["\n  border: 0;\n  outline: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 8px 15px;\n  margin: 10px;\n  color: #fff;\n  border-radius: 20px;\n  font-size: 14px;\n"]);return le=function(){return e},e}function se(){var e=Object(l.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return se=function(){return e},e}function fe(){var e=Object(l.a)(["\n\n"]);return fe=function(){return e},e}function de(){var e=Object(l.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return de=function(){return e},e}function he(){var e=Object(l.a)(["\n  display: flex;\n  flex: 1;\n  justfy-content: flex-start;\n"]);return he=function(){return e},e}function pe(){var e=Object(l.a)(["\n  height: 100%;\n  border-color: rgba(240,240,240,1);\n  border-style: solid;\n  border-width: 0 0 1px 0;\n  background: #fff;\n  padding: 5px 15px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-end;\n"]);return pe=function(){return e},e}var be=j.b.div(pe()),ge=j.b.div(he()),me=j.b.div(de()),ve=(j.b.button(fe()),j.b.div(se())),we=j.b.span(le()),xe=Object(j.b)(we)(ue()),je=Object(j.b)(we)(ce()),Ee=j.b.span(ie(),(function(e){return"active"===e.phase&&Object(j.a)(oe())}),(function(e){return"waiting"===e.phase&&Object(j.a)(ae())}),(function(e){return"error"===e.phase&&Object(j.a)(re())})),ye=function(e){var n=e.badgeCount,t=e.bellPressedCB,r=Object(f.c)(),o=r.active,i=r.error,c=r.account;return r.chainId,new Array(4),a.a.useEffect((function(){}),[c]),a.a.createElement(be,null,o&&!i&&a.a.createElement(ge,null,a.a.createElement(q,null)),a.a.createElement(me,null,o&&!i&&a.a.createElement(te,{badgeCount:n,bellPressedCB:t,width:40,height:40})),a.a.createElement(ve,null,!!i&&a.a.createElement(xe,null,function(e){return e instanceof d.b?"No Ethereum browser extension detected, install MetaMask on desktop or visit from a dApp browser on mobile.":e instanceof f.a?"Unsupported Network, please connect to Ropsten":e instanceof d.c?"Please authorize this website to access your Ethereum account.":(console.error(e),"An unknown error occurred. Check the console for more details.")}(i)),!o&&!i&&a.a.createElement(je,null,"Please connect to a Web3 Network"),a.a.createElement(Ee,{phase:o?"active":i?"error":"waiting"})))};function Oe(){var e=Object(l.a)(["\n  height: 40px;\n"]);return Oe=function(){return e},e}function ke(){var e=Object(l.a)(["\n  display: flex;\n  flex: 1;\n  align-self: center;\n  width: 100%;\n  max-width: 1280px;\n"]);return ke=function(){return e},e}function Ce(){var e=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin: 80px 20px 20px 20px;\n  flex: 1;\n"]);return Ce=function(){return e},e}function Se(){var e=Object(l.a)(["\n  height: 55px;\n  left: 0;\n  right: 0;\n  width: 100%;\n  position: fixed;\n  top: 0;\n  z-index: 999;\n  background: #fff;\n"]);return Se=function(){return e},e}var ze={Injected:b,Network:g,Portis:m};function Me(e,n){return new x.ethers.providers.Web3Provider(e)}var Ie=function(){return a.a.createElement(f.b,{getLibrary:Me},a.a.createElement(Fe,null))};function Fe(){var e=Object(f.c)(),n=e.connector,t=e.library,o=e.chainId,i=e.account,c=e.activate,u=e.deactivate,l=e.active,d=e.error,h=a.a.useState(0),p=Object(s.a)(h,2),v=p[0],x=p[1],j=a.a.useState(0),E=Object(s.a)(j,2),y=E[0],O=E[1],k=a.a.useState(),C=Object(s.a)(k,2),S=C[0],M=C[1];a.a.useEffect((function(){S&&S===n&&M(void 0)}),[S,n]);var I=function(){var e=Object(f.c)(),n=e.activate,t=e.active,a=Object(r.useState)(!1),o=Object(s.a)(a,2),i=o[0],c=o[1];return Object(r.useEffect)((function(){b.isAuthorized().then((function(e){e?n(b,void 0,!0).catch((function(){c(!0)})):c(!0)}))}),[]),Object(r.useEffect)((function(){!i&&t&&c(!0)}),[i,t]),i}();return function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=Object(f.c)(),t=n.active,a=n.error,o=n.activate;Object(r.useEffect)((function(){var n=window.ethereum;if(n&&n.on&&!t&&!a&&!e){var r=function(){console.log("Handling 'connect' event"),o(b)},i=function(e){console.log("Handling 'chainChanged' event with payload",e),o(b)},c=function(e){console.log("Handling 'accountsChanged' event with payload",e),e.length>0&&o(b)},u=function(e){console.log("Handling 'networkChanged' event with payload",e),o(b)};return n.on("connect",r),n.on("chainChanged",i),n.on("accountsChanged",c),n.on("networkChanged",u),function(){n.removeListener&&(n.removeListener("connect",r),n.removeListener("chainChanged",i),n.removeListener("accountsChanged",c),n.removeListener("networkChanged",u))}}}),[t,a,e,o])}(!I||!!S),a.a.createElement(a.a.Fragment,null,a.a.createElement(Pe,null,a.a.createElement(ye,{badgeCount:v,bellPressedCB:function(){O(y+1)}})),a.a.createElement(Ae,null,l&&!d&&a.a.createElement(Be,null,a.a.createElement(z,{setBadgeCount:x,bellPressed:y})),a.a.createElement("hr",{style:{margin:"2rem"}}),a.a.createElement("div",{style:{display:"grid",gridGap:"1rem",gridTemplateColumns:"1fr 1fr",maxWidth:"20rem",margin:"auto"}},Object.keys(ze).map((function(e){var t=ze[e],r=t===S,o=t===n,i=!I||!!S||o||!!d;return a.a.createElement("button",{style:{height:"3rem",borderRadius:"1rem",borderColor:r?"orange":o?"green":"unset",cursor:i?"unset":"pointer",position:"relative"},disabled:i,key:e,onClick:function(){M(t),c(ze[e])}},a.a.createElement("div",{style:{position:"absolute",top:"0",left:"0",height:"100%",display:"flex",alignItems:"center",color:"black",margin:"0 0 0 1rem"}},r&&a.a.createElement(w,{color:"black",style:{height:"25%",marginLeft:"-1rem"}}),o&&a.a.createElement("span",{role:"img","aria-label":"check"},"\u2705")),e)}))),a.a.createElement("hr",{style:{margin:"2rem"}}),a.a.createElement("div",{style:{display:"grid",gridGap:"1rem",gridTemplateColumns:"fit-content",maxWidth:"20rem",margin:"auto"}},(l||d)&&a.a.createElement("button",{style:{height:"3rem",marginTop:"2rem",borderRadius:"1rem",borderColor:"red",cursor:"pointer"},onClick:function(){u()}},"Deactivate"),!(!t||!i)&&a.a.createElement("button",{style:{height:"3rem",borderRadius:"1rem",cursor:"pointer"},onClick:function(){t.getSigner(i).signMessage("\ud83d\udc4b").then((function(e){window.alert("Success!\n\n".concat(e))})).catch((function(e){window.alert("Failure!"+(e&&e.message?"\n\n".concat(e.message):""))}))}},"Sign Message"),!(n!==g||!o)&&a.a.createElement("button",{style:{height:"3rem",borderRadius:"1rem",cursor:"pointer"},onClick:function(){n.changeChainId(1===o?3:1)}},"Switch Networks"),n===m&&a.a.createElement(a.a.Fragment,null,void 0!==o&&a.a.createElement("button",{style:{height:"3rem",borderRadius:"1rem",cursor:"pointer"},onClick:function(){n.changeNetwork(1===o?100:1)}},"Switch Networks"),a.a.createElement("button",{style:{height:"3rem",borderRadius:"1rem",cursor:"pointer"},onClick:function(){n.close()}},"Kill Portis Session")))))}var Pe=j.b.div(Se()),Ae=j.b.div(Ce()),Be=j.b.div(ke());j.b.a(Oe()),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(67).config();var Re=new c.a({uri:"https://api.thegraph.com/subgraphs/name/paulrberg/create-eth-app"});i.a.render(a.a.createElement(u.a,{client:Re},a.a.createElement(Ie,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[148,1,2]]]);
//# sourceMappingURL=main.2aaaf9bf.chunk.js.map