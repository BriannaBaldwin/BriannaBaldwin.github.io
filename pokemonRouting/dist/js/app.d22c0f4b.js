(function(t){function s(s){for(var i,c,l=s[0],r=s[1],o=s[2],v=0,u=[];v<l.length;v++)c=l[v],Object.prototype.hasOwnProperty.call(e,c)&&e[c]&&u.push(e[c][0]),e[c]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);d&&d(s);while(u.length)u.shift()();return n.push.apply(n,o||[]),a()}function a(){for(var t,s=0;s<n.length;s++){for(var a=n[s],i=!0,l=1;l<a.length;l++){var r=a[l];0!==e[r]&&(i=!1)}i&&(n.splice(s--,1),t=c(c.s=a[0]))}return t}var i={},e={app:0},n=[];function c(s){if(i[s])return i[s].exports;var a=i[s]={i:s,l:!1,exports:{}};return t[s].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=t,c.c=i,c.d=function(t,s,a){c.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,s){if(1&s&&(t=c(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var i in t)c.d(a,i,function(s){return t[s]}.bind(null,i));return a},c.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(s,"a",s),s},c.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},c.p="/pokemonRouting/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=s,l=l.slice();for(var o=0;o<l.length;o++)s(l[o]);var d=r;n.push([0,"chunk-vendors"]),a()})({0:function(t,s,a){t.exports=a("56d7")},"07f5":function(t,s,a){t.exports=a.p+"img/pikachu.76f027c1.png"},1357:function(t,s,a){t.exports=a.p+"img/vileplume.0c57c4ec.png"},"191b":function(t,s,a){t.exports=a.p+"img/jynx.5d0fcec5.png"},2270:function(t,s,a){t.exports=a.p+"img/ninetails.cb841816.png"},"22de":function(t,s,a){t.exports=a.p+"img/mrMime.0501d038.png"},2356:function(t,s,a){t.exports=a.p+"img/arcanine.b5021dd7.png"},"438c":function(t,s,a){t.exports=a.p+"img/charizard.d48c3077.png"},5052:function(t,s,a){t.exports=a.p+"img/mew.2f959693.png"},"50bf":function(t,s,a){t.exports=a.p+"img/moltres.4993ed0b.png"},"56d7":function(t,s,a){"use strict";a.r(s);a("cadf"),a("551c"),a("f751"),a("097d");var i=a("2b0e"),e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"container"},[a("div",{staticClass:"pokemon"},[a("router-view"),a("div",{staticClass:"pokemon-links has-text-centered"},[a("router-link",{attrs:{to:"/fire"}},[t._v("\n        Fire\n      ")]),a("router-link",{attrs:{to:"/grass"}},[t._v("\n        Grass\n      ")]),a("router-link",{attrs:{to:"/water"}},[t._v("\n        Water\n      ")]),a("router-link",{attrs:{to:"/electric"}},[t._v("\n        Electric\n      ")]),a("router-link",{attrs:{to:"/psychic"}},[t._v("\n        Psychic\n      ")])],1)],1)])},n=[],c={name:"App"},l=c,r=(a("eafa"),a("2877")),o=Object(r["a"])(l,e,n,!1,null,null,null),d=o.exports,v=a("8c4f"),u=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"card card--fire \n  has-text-weight-bold \n  has-text-white"},[a("div",{staticClass:"card-content has-text-centered"},[a("div",{staticClass:"main"},[a("div",{staticClass:"title has-text-white"},[t._v("🔥 Fire 🔥")]),a("router-link",{attrs:{to:"/charizard"}},[t._v("\n        Charizard\n      ")]),a("br"),a("router-link",{attrs:{to:"/ninetails"}},[t._v("\n        Ninetails\n      ")]),a("br"),a("router-link",{attrs:{to:"/flareon"}},[t._v("\n        Flareon\n      ")]),a("br"),a("router-link",{attrs:{to:"/moltres"}},[t._v("\n        Moltres\n      ")]),a("br"),a("router-link",{attrs:{to:"/arcanine"}},[t._v("\n        Arcanine\n      ")]),a("br")],1)])])},m=[],h={name:"FireTypeCard"},p=h,C=Object(r["a"])(p,u,m,!1,null,null,null),g=C.exports,_=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"card card--water \n  has-text-weight-bold \n  has-text-white"},[a("div",{staticClass:"card-content has-text-centered"},[a("div",{staticClass:"main"},[a("div",{staticClass:"title has-text-white"},[t._v("💧 Water 💧")]),a("router-link",{attrs:{to:"/blastoise"}},[t._v("\n        Blastoise\n      ")]),a("br"),a("router-link",{attrs:{to:"/psyduck"}},[t._v("\n        Psyduck\n      ")]),a("br"),a("router-link",{attrs:{to:"/vaporeon"}},[t._v("\n        Vaporeon\n      ")]),a("br"),a("router-link",{attrs:{to:"/lapras"}},[t._v("\n        Lapras\n      ")]),a("br")],1)])])},b=[],x={name:"WaterTypeCard"},f=x,w=Object(r["a"])(f,_,b,!1,null,null,null),y=w.exports,E=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"card card--grass \n  has-text-weight-bold \n  has-text-white"},[a("div",{staticClass:"card-content has-text-centered"},[a("div",{staticClass:"main"},[a("div",{staticClass:"title has-text-white"},[t._v("🍃 Grass 🍃")]),a("router-link",{attrs:{to:"/venusaur"}},[t._v("\n        Venusaur\n      ")]),a("br"),a("router-link",{attrs:{to:"/tangela"}},[t._v("\n        Tangela\n      ")]),a("br"),a("router-link",{attrs:{to:"/exeggutor"}},[t._v("\n        Exeggutor\n      ")]),a("br"),a("router-link",{attrs:{to:"/vileplume"}},[t._v("\n        Vileplume\n      ")]),a("br")],1)])])},k=[],$={name:"GrassTypeCard"},j=$,O=Object(r["a"])(j,E,k,!1,null,null,null),T=O.exports,z=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"card card--electric \n  has-text-weight-bold \n  has-text-white"},[a("div",{staticClass:"card-content has-text-centered"},[a("div",{staticClass:"main"},[a("div",{staticClass:"title has-text-white"},[t._v("⚡ Electric ⚡")]),a("router-link",{attrs:{to:"/pikachu"}},[t._v("\n        Pikachu\n      ")]),a("br"),a("router-link",{attrs:{to:"/zapdos"}},[t._v("\n        Zapdos\n      ")]),a("br"),a("router-link",{attrs:{to:"/jolteon"}},[t._v("\n        Jolteon\n      ")]),a("br"),a("router-link",{attrs:{to:"/electabuzz"}},[t._v("\n        Electabuzz\n      ")]),a("br")],1)])])},W=[],H={name:"ElectricTypeCard"},M=H,P=Object(r["a"])(M,z,W,!1,null,null,null),S=P.exports,V=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"card card--psychic \n  has-text-weight-bold \n  has-text-white"},[a("div",{staticClass:"card-content has-text-centered"},[a("div",{staticClass:"main"},[a("div",{staticClass:"title has-text-white"},[t._v("👁️ Psychic 👁️")]),a("router-link",{attrs:{to:"/mew"}},[t._v("\n        Mew\n      ")]),a("br"),a("router-link",{attrs:{to:"/alakazam"}},[t._v("\n        Alakazam\n      ")]),a("br"),a("router-link",{attrs:{to:"/mrmime"}},[t._v("\n        Mr. Mime\n      ")]),a("br"),a("router-link",{attrs:{to:"/jynx"}},[t._v("\n        Jynx\n      ")]),a("br")],1)])])},F=[],J={name:"PsychicTypeCard"},A=J,N=Object(r["a"])(A,V,F,!1,null,null,null),B=N.exports,G=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},L=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"card card--water has-text-weight-bold has-text-white"},[i("div",{staticClass:"card-image"},[i("div",{staticClass:"card-image-container"},[i("img",{attrs:{src:a("9aa4")}})])]),i("div",{staticClass:"card-content has-text-centered"},[i("div",{staticClass:"main"},[i("div",{staticClass:"title has-text-white"},[t._v("Blastoise")]),i("div",{staticClass:"hp"},[t._v("hp 79")])]),i("div",{staticClass:"stats columns is-mobile"},[i("div",{staticClass:"column"},[t._v("\n        💧"),i("br"),i("span",{staticClass:"tag is-light"},[t._v("Type")])]),i("div",{staticClass:"column center-column"},[t._v("\n        223 lbs"),i("br"),i("span",{staticClass:"tag is-light"},[t._v("Weight")])]),i("div",{staticClass:"column"},[t._v("\n        1.6 m"),i("br"),i("span",{staticClass:"tag is-light"},[t._v("Height")])])])])])}],Z={name:"BlastoiseCard"},R=Z,q=Object(r["a"])(R,G,L,!1,null,null,null),D=q.exports,I=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},K=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"card card--water has-text-weight-bold has-text-white"},[i("div",{staticClass:"card-image"},[i("div",{staticClass:"card-image-container"},[i("img",{staticStyle:{margin:"0px 30px"},attrs:{src:a("d60f"),width:"300px"}})])]),i("div",{staticClass:"card-content has-text-centered"},[i("div",{staticClass:"main"},[i("div",{staticClass:"title has-text-white"},[t._v("Psyduck")]),i("div",{staticClass:"hp"},[t._v("hp 50")])]),i("div",{staticClass:"stats columns is-mobile"},[i("div",{staticClass:"column"},[t._v("\n        💧👁️"),i("br"),i("span",{staticClass:"tag is-light"},[t._v("Type")])]),i("div",{staticClass:"column center-column"},[t._v("\n        43.2 lbs"),i("br"),i("span",{staticClass:"tag is-light"},[t._v("Weight")])]),i("div",{staticClass:"column"},[t._v("\n        0.8 m"),i("br"),i("span",{staticClass:"tag is-light"},[t._v("Height")])])])])])}],Q={name:"PsyduckCard"},U=Q,X=Object(r["a"])(U,I,K,!1,null,null,null),Y=X.exports,tt=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},st=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"card card--water has-text-weight-bold has-text-white"},[i("div",{staticClass:"card-image"},[i("div",{staticClass:"card-image-container"},[i("img",{attrs:{src:a("6c4a")}})])]),i("div",{staticClass:"card-content has-text-centered"},[i("div",{staticClass:"main"},[i("div",{staticClass:"title has-text-white"},[t._v("Vaporeon")]),i("div",{staticClass:"hp"},[t._v("hp 130")])]),i("div",{staticClass:"stats columns is-mobile"},[i("div",{staticClass:"column"},[t._v("\n        💧"),i("br"),i("span",{staticClass:"tag is-light"},[t._v("Type")])]),i("div",{staticClass:"column center-column"},[t._v("\n        63.9 lbs"),i("br"),i("span",{staticClass:"tag is-light"},[t._v("Weight")])]),i("div",{staticClass:"column"},[t._v("\n        1.0 m"),i("br"),i("span",{staticClass:"tag is-light"},[t._v("Height")])])])])])}],at={name:"VaporeonCard"},it=at,et=Object(r["a"])(it,tt,st,!1,null,null,null),nt=et.exports,ct=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},lt=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"card card--water has-text-weight-bold has-text-white"},[i("div",{staticClass:"card-image"},[i("div",{staticClass:"card-image-container"},[i("img",{staticStyle:{margin:"10px -15px"},attrs:{src:a("fdd3"),width:"500px"}})])]),i("div",{staticClass:"card-content has-text-centered"},[i("div",{staticClass:"main"},[i("div",{staticClass:"title has-text-white"},[t._v("Lapras")]),i("div",{staticClass:"hp"},[t._v("hp 130")])]),i("div",{staticClass:"stats columns is-mobile"},[i("div",{staticClass:"column"},[t._v("\n        💧"),i("br"),i("span",{staticClass:"tag is-light"},[t._v("Type")])]),i("div",{staticClass:"column center-column"},[t._v("\n        485.0 lbs"),i("br"),i("span",{staticClass:"tag is-light"},[t._v("Weight")])]),i("div",{staticClass:"column"},[t._v("\n        2.5 m"),i("br"),i("span",{staticClass:"tag is-light"},[t._v("Height")])])])])])}],rt={name:"LaprasCard"},ot=rt,dt=Object(r["a"])(ot,ct,lt,!1,null,null,null),vt=dt.exports,ut=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},mt=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"card card--fire \n  has-text-weight-bold \n  has-text-white"},[i("div",{staticClass:"card-image"},[i("div",{staticClass:"card-image-container"},[i("img",{attrs:{src:a("438c")}})])]),i("div",{staticClass:"card-content has-text-centered"},[i("div",{staticClass:"main"},[i("div",{staticClass:"title has-text-white"},[t._v("Charizard")]),i("div",{staticClass:"hp"},[t._v("hp 78")])]),i("div",{staticClass:"stats columns is-mobile"},[i("div",{staticClass:"column"},[t._v("🔥"),i("br"),i("span",{staticClass:"tag is-warning"},[t._v("Type")])]),i("div",{staticClass:"column center-column"},[t._v("199 lbs"),i("br"),i("span",{staticClass:"tag is-warning"},[t._v("Weight")])]),i("div",{staticClass:"column"},[t._v("1.7 m "),i("br"),i("span",{staticClass:"tag is-warning"},[t._v("Height")])])])])])}],ht={name:"CharizardCard"},pt=ht,Ct=Object(r["a"])(pt,ut,mt,!1,null,null,null),gt=Ct.exports,_t=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},bt=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"card card--fire2 \n  has-text-weight-bold \n  has-text-white"},[i("div",{staticClass:"card-image"},[i("div",{staticClass:"card-image-container"},[i("img",{attrs:{src:a("2270"),width:"450"}})])]),i("div",{staticClass:"card-content has-text-centered"},[i("div",{staticClass:"main"},[i("div",{staticClass:"title has-text-white"},[t._v("Ninetails")]),i("div",{staticClass:"hp"},[t._v("hp 73")])]),i("div",{staticClass:"stats columns is-mobile"},[i("div",{staticClass:"column"},[t._v("🔥"),i("br"),i("span",{staticClass:"tag is-warning"},[t._v("Type")])]),i("div",{staticClass:"column center-column"},[t._v("43.9 lbs"),i("br"),i("span",{staticClass:"tag is-warning"},[t._v("Weight")])]),i("div",{staticClass:"column"},[t._v("1.1 m "),i("br"),i("span",{staticClass:"tag is-warning"},[t._v("Height")])])])])])}],xt={name:"NinetailsCard"},ft=xt,wt=Object(r["a"])(ft,_t,bt,!1,null,null,null),yt=wt.exports,Et=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},kt=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"card card--fire2 \n  has-text-weight-bold \n  has-text-white"},[i("div",{staticClass:"card-image"},[i("div",{staticClass:"card-image-container"},[i("img",{attrs:{src:a("6a36"),width:"450"}})])]),i("div",{staticClass:"card-content has-text-centered"},[i("div",{staticClass:"main"},[i("div",{staticClass:"title has-text-white"},[t._v("Flareon")]),i("div",{staticClass:"hp"},[t._v("hp 65")])]),i("div",{staticClass:"stats columns is-mobile"},[i("div",{staticClass:"column"},[t._v("🔥"),i("br"),i("span",{staticClass:"tag is-warning"},[t._v("Type")])]),i("div",{staticClass:"column center-column"},[t._v("55.1 lbs"),i("br"),i("span",{staticClass:"tag is-warning"},[t._v("Weight")])]),i("div",{staticClass:"column"},[t._v("0.9 m "),i("br"),i("span",{staticClass:"tag is-warning"},[t._v("Height")])])])])])}],$t={name:"FlareonCard"},jt=$t,Ot=Object(r["a"])(jt,Et,kt,!1,null,null,null),Tt=Ot.exports,zt=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},Wt=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"card card--fire2 \n  has-text-weight-bold \n  has-text-white"},[i("div",{staticClass:"card-image"},[i("div",{staticClass:"card-image-container"},[i("img",{staticStyle:{margin:"100px 20px"},attrs:{src:a("50bf"),width:"450"}})])]),i("div",{staticClass:"card-content has-text-centered"},[i("div",{staticClass:"main"},[i("div",{staticClass:"title has-text-white"},[t._v("Moltres")]),i("div",{staticClass:"hp"},[t._v("hp 90")])]),i("div",{staticClass:"stats columns is-mobile"},[i("div",{staticClass:"column"},[t._v("🔥"),i("br"),i("span",{staticClass:"tag is-warning"},[t._v("Type")])]),i("div",{staticClass:"column center-column"},[t._v("132.3 lbs"),i("br"),i("span",{staticClass:"tag is-warning"},[t._v("Weight")])]),i("div",{staticClass:"column"},[t._v("2.0 m "),i("br"),i("span",{staticClass:"tag is-warning"},[t._v("Height")])])])])])}],Ht={name:"MoltresCard"},Mt=Ht,Pt=Object(r["a"])(Mt,zt,Wt,!1,null,null,null),St=Pt.exports,Vt=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},Ft=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"card card--fire2 \n  has-text-weight-bold \n  has-text-white"},[i("div",{staticClass:"card-image"},[i("div",{staticClass:"card-image-container"},[i("img",{staticStyle:{margin:"10px 20px"},attrs:{src:a("2356"),width:"450"}})])]),i("div",{staticClass:"card-content has-text-centered"},[i("div",{staticClass:"main"},[i("div",{staticClass:"title has-text-white"},[t._v("Arcanie")]),i("div",{staticClass:"hp"},[t._v("hp 90")])]),i("div",{staticClass:"stats columns is-mobile"},[i("div",{staticClass:"column"},[t._v("🔥"),i("br"),i("span",{staticClass:"tag is-warning"},[t._v("Type")])]),i("div",{staticClass:"column center-column"},[t._v("341.7 lbs"),i("br"),i("span",{staticClass:"tag is-warning"},[t._v("Weight")])]),i("div",{staticClass:"column"},[t._v("1.9 m "),i("br"),i("span",{staticClass:"tag is-warning"},[t._v("Height")])])])])])}],Jt={name:"ArcanineCard"},At=Jt,Nt=Object(r["a"])(At,Vt,Ft,!1,null,null,null),Bt=Nt.exports,Gt=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},Lt=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"card card--grass has-text-weight-bold has-text-white"},[i("div",{staticClass:"card-image"},[i("div",{staticClass:"card-image-container"},[i("img",{attrs:{src:a("ef01")}})])]),i("div",{staticClass:"card-content has-text-centered"},[i("div",{staticClass:"main"},[i("div",{staticClass:"title has-text-white"},[t._v("Venusaur")]),i("div",{staticClass:"hp hp-grass"},[t._v("hp 80")])]),i("div",{staticClass:"stats columns is-mobile"},[i("div",{staticClass:"column"},[t._v("\n        🍃"),i("br"),i("span",{staticClass:"tag is-success"},[t._v("Type")])]),i("div",{staticClass:"column center-column"},[t._v("\n        220 lbs"),i("br"),i("span",{staticClass:"tag is-success"},[t._v("Weight")])]),i("div",{staticClass:"column"},[t._v("\n        2.0 m"),i("br"),i("span",{staticClass:"tag is-success"},[t._v("Height")])])])])])}],Zt={name:"VenusaurCard"},Rt=Zt,qt=Object(r["a"])(Rt,Gt,Lt,!1,null,null,null),Dt=qt.exports,It=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},Kt=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"card card--grass has-text-weight-bold has-text-white"},[i("div",{staticClass:"card-image"},[i("div",{staticClass:"card-image-container"},[i("img",{staticStyle:{margin:"0px 45px"},attrs:{src:a("bced"),width:"435"}})])]),i("div",{staticClass:"card-content has-text-centered"},[i("div",{staticClass:"main"},[i("div",{staticClass:"title has-text-white"},[t._v("Tangela")]),i("div",{staticClass:"hp hp-grass"},[t._v("hp 65")])]),i("div",{staticClass:"stats columns is-mobile"},[i("div",{staticClass:"column"},[t._v("\n        🍃"),i("br"),i("span",{staticClass:"tag is-success"},[t._v("Type")])]),i("div",{staticClass:"column center-column"},[t._v("\n        77.2 lbs"),i("br"),i("span",{staticClass:"tag is-success"},[t._v("Weight")])]),i("div",{staticClass:"column"},[t._v("\n        1.0 m"),i("br"),i("span",{staticClass:"tag is-success"},[t._v("Height")])])])])])}],Qt={name:"TangelaCard"},Ut=Qt,Xt=Object(r["a"])(Ut,It,Kt,!1,null,null,null),Yt=Xt.exports,ts=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},ss=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"card card--grass has-text-weight-bold has-text-white"},[i("div",{staticClass:"card-image"},[i("div",{staticClass:"card-image-container"},[i("img",{staticStyle:{margin:"-50px 40px"},attrs:{src:a("aa56"),width:"435"}})])]),i("div",{staticClass:"card-content has-text-centered"},[i("div",{staticClass:"main"},[i("div",{staticClass:"title has-text-white"},[t._v("Exeggutor")]),i("div",{staticClass:"hp hp-grass"},[t._v("hp 95")])]),i("div",{staticClass:"stats columns is-mobile"},[i("div",{staticClass:"column"},[t._v("\n        🍃"),i("br"),i("span",{staticClass:"tag is-success"},[t._v("Type")])]),i("div",{staticClass:"column center-column"},[t._v("\n        264.6 lbs"),i("br"),i("span",{staticClass:"tag is-success"},[t._v("Weight")])]),i("div",{staticClass:"column"},[t._v("\n        10.9 m"),i("br"),i("span",{staticClass:"tag is-success"},[t._v("Height")])])])])])}],as={name:"ExeggutorCard"},is=as,es=Object(r["a"])(is,ts,ss,!1,null,null,null),ns=es.exports,cs=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},ls=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"card card--grass has-text-weight-bold has-text-white"},[i("div",{staticClass:"card-image"},[i("div",{staticClass:"card-image-container"},[i("img",{staticStyle:{margin:"0px 45px"},attrs:{src:a("1357"),width:"435"}})])]),i("div",{staticClass:"card-content has-text-centered"},[i("div",{staticClass:"main"},[i("div",{staticClass:"title has-text-white"},[t._v("Vileplume")]),i("div",{staticClass:"hp hp-grass"},[t._v("hp 75")])]),i("div",{staticClass:"stats columns is-mobile"},[i("div",{staticClass:"column"},[t._v("\n        🍃"),i("br"),i("span",{staticClass:"tag is-success"},[t._v("Type")])]),i("div",{staticClass:"column center-column"},[t._v("\n        41.0 lbs"),i("br"),i("span",{staticClass:"tag is-success"},[t._v("Weight")])]),i("div",{staticClass:"column"},[t._v("\n        1.2 m"),i("br"),i("span",{staticClass:"tag is-success"},[t._v("Height")])])])])])}],rs={name:"VileplumeCard"},os=rs,ds=Object(r["a"])(os,cs,ls,!1,null,null,null),vs=ds.exports,us=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},ms=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"card card--electric\nhas-text-weight-bold\nhas-text-white"},[i("div",{staticClass:"card-image"},[i("div",{staticClass:"card-image-container"},[i("img",{attrs:{src:a("07f5")}})])]),i("div",{staticClass:"card-content has-text-centered"},[i("div",{staticClass:"main"},[i("div",{staticClass:"title has-text-white"},[t._v("Pikachu")]),i("div",{staticClass:"hp"},[t._v("hp 35")])]),i("div",{staticClass:"stats columns is-mobile"},[i("div",{staticClass:"column"},[t._v("⚡"),i("br"),i("span",{staticClass:"tag is-warning"},[t._v("Type")])]),i("div",{staticClass:"column center-column"},[t._v("13.2 lbs"),i("br"),i("span",{staticClass:"tag is-warning"},[t._v("Weight")])]),i("div",{staticClass:"column"},[t._v("0.4 m "),i("br"),i("span",{staticClass:"tag is-warning"},[t._v("Height")])])])])])}],hs={name:"PikachuCard"},ps=hs,Cs=Object(r["a"])(ps,us,ms,!1,null,null,null),gs=Cs.exports,_s=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},bs=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"card card--electric2\nhas-text-weight-bold\nhas-text-white"},[i("div",{staticClass:"card-image"},[i("div",{staticClass:"card-image-container"},[i("img",{attrs:{src:a("6c58")}})])]),i("div",{staticClass:"card-content has-text-centered"},[i("div",{staticClass:"main"},[i("div",{staticClass:"title has-text-white"},[t._v("Zapdos")]),i("div",{staticClass:"hp"},[t._v("hp 90")])]),i("div",{staticClass:"stats columns is-mobile"},[i("div",{staticClass:"column"},[t._v("⚡"),i("br"),i("span",{staticClass:"tag is-warning"},[t._v("Type")])]),i("div",{staticClass:"column center-column"},[t._v("116.0 lbs"),i("br"),i("span",{staticClass:"tag is-warning"},[t._v("Weight")])]),i("div",{staticClass:"column"},[t._v("1.6 m "),i("br"),i("span",{staticClass:"tag is-warning"},[t._v("Height")])])])])])}],xs={name:"ZapdosCard"},fs=xs,ws=Object(r["a"])(fs,_s,bs,!1,null,null,null),ys=ws.exports,Es=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},ks=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"card card--electric\nhas-text-weight-bold\nhas-text-white"},[i("div",{staticClass:"card-image"},[i("div",{staticClass:"card-image-container"},[i("img",{attrs:{src:a("a552")}})])]),i("div",{staticClass:"card-content has-text-centered"},[i("div",{staticClass:"main"},[i("div",{staticClass:"title has-text-white"},[t._v("Jolteon")]),i("div",{staticClass:"hp"},[t._v("hp 65")])]),i("div",{staticClass:"stats columns is-mobile"},[i("div",{staticClass:"column"},[t._v("⚡"),i("br"),i("span",{staticClass:"tag is-warning"},[t._v("Type")])]),i("div",{staticClass:"column center-column"},[t._v("54.0 lbs"),i("br"),i("span",{staticClass:"tag is-warning"},[t._v("Weight")])]),i("div",{staticClass:"column"},[t._v("0.8 m "),i("br"),i("span",{staticClass:"tag is-warning"},[t._v("Height")])])])])])}],$s={name:"PikachuCard"},js=$s,Os=Object(r["a"])(js,Es,ks,!1,null,null,null),Ts=Os.exports,zs=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},Ws=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"card card--electric\nhas-text-weight-bold\nhas-text-white"},[i("div",{staticClass:"card-image"},[i("div",{staticClass:"card-image-container"},[i("img",{attrs:{src:a("ea93")}})])]),i("div",{staticClass:"card-content has-text-centered"},[i("div",{staticClass:"main"},[i("div",{staticClass:"title has-text-white"},[t._v("Electabuzz")]),i("div",{staticClass:"hp"},[t._v("hp 65")])]),i("div",{staticClass:"stats columns is-mobile"},[i("div",{staticClass:"column"},[t._v("⚡"),i("br"),i("span",{staticClass:"tag is-warning"},[t._v("Type")])]),i("div",{staticClass:"column center-column"},[t._v("66.1 lbs"),i("br"),i("span",{staticClass:"tag is-warning"},[t._v("Weight")])]),i("div",{staticClass:"column"},[t._v("1.1 m "),i("br"),i("span",{staticClass:"tag is-warning"},[t._v("Height")])])])])])}],Hs={name:"ElectabuzzCard"},Ms=Hs,Ps=Object(r["a"])(Ms,zs,Ws,!1,null,null,null),Ss=Ps.exports,Vs=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},Fs=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"card card--psychic \n  has-text-weight-bold \n  has-text-white"},[i("div",{staticClass:"card-image"},[i("div",{staticClass:"card-image-container"},[i("img",{attrs:{src:a("5052")}})])]),i("div",{staticClass:"card-content has-text-centered"},[i("div",{staticClass:"main"},[i("div",{staticClass:"title has-text-white"},[t._v("Mew")]),i("div",{staticClass:"hp"},[t._v("hp 100")])]),i("div",{staticClass:"stats columns is-mobile"},[i("div",{staticClass:"column"},[t._v("👁️"),i("br"),i("span",{staticClass:"tag is-danger"},[t._v("Type")])]),i("div",{staticClass:"column center-column"},[t._v("8.8 lbs"),i("br"),i("span",{staticClass:"tag is-danger"},[t._v("Weight")])]),i("div",{staticClass:"column"},[t._v("0.4 m "),i("br"),i("span",{staticClass:"tag is-danger"},[t._v("Height")])])])])])}],Js={name:"MewCard"},As=Js,Ns=Object(r["a"])(As,Vs,Fs,!1,null,null,null),Bs=Ns.exports,Gs=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},Ls=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"card card--psychic \n  has-text-weight-bold \n  has-text-white"},[i("div",{staticClass:"card-image"},[i("div",{staticClass:"card-image-container"},[i("img",{staticStyle:{margin:"0px -10px"},attrs:{src:a("f781")}})])]),i("div",{staticClass:"card-content has-text-centered"},[i("div",{staticClass:"main"},[i("div",{staticClass:"title has-text-white"},[t._v("Alakazam")]),i("div",{staticClass:"hp"},[t._v("hp 55")])]),i("div",{staticClass:"stats columns is-mobile"},[i("div",{staticClass:"column"},[t._v("👁️"),i("br"),i("span",{staticClass:"tag is-danger"},[t._v("Type")])]),i("div",{staticClass:"column center-column"},[t._v("105.8 lbs"),i("br"),i("span",{staticClass:"tag is-danger"},[t._v("Weight")])]),i("div",{staticClass:"column"},[t._v("1.5 m "),i("br"),i("span",{staticClass:"tag is-danger"},[t._v("Height")])])])])])}],Zs={name:"MewCard"},Rs=Zs,qs=Object(r["a"])(Rs,Gs,Ls,!1,null,null,null),Ds=qs.exports,Is=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},Ks=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"card card--psychic \n  has-text-weight-bold \n  has-text-white"},[i("div",{staticClass:"card-image"},[i("div",{staticClass:"card-image-container"},[i("img",{staticStyle:{margin:"20px -10px"},attrs:{src:a("22de")}})])]),i("div",{staticClass:"card-content has-text-centered"},[i("div",{staticClass:"main"},[i("div",{staticClass:"title has-text-white"},[t._v("Mr. Mime")]),i("div",{staticClass:"hp"},[t._v("hp 40")])]),i("div",{staticClass:"stats columns is-mobile"},[i("div",{staticClass:"column"},[t._v("👁️"),i("br"),i("span",{staticClass:"tag is-danger"},[t._v("Type")])]),i("div",{staticClass:"column center-column"},[t._v("120.2 lbs"),i("br"),i("span",{staticClass:"tag is-danger"},[t._v("Weight")])]),i("div",{staticClass:"column"},[t._v("1.3 m "),i("br"),i("span",{staticClass:"tag is-danger"},[t._v("Height")])])])])])}],Qs={name:"MrMimeCard"},Us=Qs,Xs=Object(r["a"])(Us,Is,Ks,!1,null,null,null),Ys=Xs.exports,ta=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},sa=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"card card--psychic \n  has-text-weight-bold \n  has-text-white"},[i("div",{staticClass:"card-image"},[i("div",{staticClass:"card-image-container"},[i("img",{staticStyle:{margin:"20px -10px"},attrs:{src:a("191b")}})])]),i("div",{staticClass:"card-content has-text-centered"},[i("div",{staticClass:"main"},[i("div",{staticClass:"title has-text-white"},[t._v("Jynx")]),i("div",{staticClass:"hp"},[t._v("hp 65")])]),i("div",{staticClass:"stats columns is-mobile"},[i("div",{staticClass:"column"},[t._v("👁️"),i("br"),i("span",{staticClass:"tag is-danger"},[t._v("Type")])]),i("div",{staticClass:"column center-column"},[t._v("89.5 lbs"),i("br"),i("span",{staticClass:"tag is-danger"},[t._v("Weight")])]),i("div",{staticClass:"column"},[t._v("1.4 m "),i("br"),i("span",{staticClass:"tag is-danger"},[t._v("Height")])])])])])}],aa={name:"JynxCard"},ia=aa,ea=Object(r["a"])(ia,ta,sa,!1,null,null,null),na=ea.exports,ca=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("h3",{staticClass:"subtitle has-text-white"},[t._v("\n  Sorry. We couldn't find that Pokémon :(.\n")])},la=[],ra={name:"NotFound"},oa=ra,da=Object(r["a"])(oa,ca,la,!1,null,null,null),va=da.exports;i["a"].use(v["a"]);var ua=[{path:"/",component:gt},{path:"/fire",component:g},{path:"/water",component:y},{path:"/grass",component:T},{path:"/electric",component:S},{path:"/psychic",component:B},{path:"/charizard",component:gt},{path:"/ninetails",component:yt},{path:"/flareon",component:Tt},{path:"/moltres",component:St},{path:"/arcanine",component:Bt},{path:"/blastoise",component:D},{path:"/psyduck",component:Y},{path:"/vaporeon",component:nt},{path:"/lapras",component:vt},{path:"/venusaur",component:Dt},{path:"/tangela",component:Yt},{path:"/exeggutor",component:ns},{path:"/vileplume",component:vs},{path:"/pikachu",component:gs},{path:"/zapdos",component:ys},{path:"/jolteon",component:Ts},{path:"/electabuzz",component:Ss},{path:"/mew",component:Bs},{path:"/alakazam",component:Ds},{path:"/mrmime",component:Ys},{path:"/jynx",component:na},{path:"*",component:va}],ma=new v["a"]({mode:"history",routes:ua});i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(d)},router:ma}).$mount("#app")},"6a36":function(t,s,a){t.exports=a.p+"img/flareon.28c57853.png"},"6c4a":function(t,s,a){t.exports=a.p+"img/vaporeon.d7ba3450.png"},"6c58":function(t,s,a){t.exports=a.p+"img/zapdos.aa969626.png"},"9aa4":function(t,s,a){t.exports=a.p+"img/blastoise.200a1be3.png"},a552:function(t,s,a){t.exports=a.p+"img/jolteon.a564d524.png"},aa56:function(t,s,a){t.exports=a.p+"img/exeggutor.a41d254c.png"},bced:function(t,s,a){t.exports=a.p+"img/tangela.9cb3385f.png"},d571:function(t,s,a){},d60f:function(t,s,a){t.exports=a.p+"img/psyduck.44735a0a.png"},ea93:function(t,s,a){t.exports=a.p+"img/electabuzz.7b751038.png"},eafa:function(t,s,a){"use strict";a("d571")},ef01:function(t,s,a){t.exports=a.p+"img/venusaur.1b4e9cda.png"},f781:function(t,s,a){t.exports=a.p+"img/alakazam.5333c883.png"},fdd3:function(t,s,a){t.exports=a.p+"img/lapras.536e0c07.png"}});
//# sourceMappingURL=app.d22c0f4b.js.map