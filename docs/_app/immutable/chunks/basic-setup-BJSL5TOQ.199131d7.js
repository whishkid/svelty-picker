import{closeBrackets as me,autocompletion as pe,closeBracketsKeymap as ge,completionKeymap as xe}from"./index.0eb6cbe7.js";import{V as X,B as d,v as S,C as ye,F as Se,G as Me,H as D,S as W,J as Y,K as Z,M as m,E as p,j as ve,O as ee,Q as te,l as re,R as ne,U as be,W as Ce,X as ke,Y as Le,Z as We,_ as Fe,$ as Ae,a0 as Ee,a1 as De,a2 as Re,a3 as qe,a4 as Pe,a5 as we,a6 as Te,a7 as Ie,a8 as Oe,k as $e,a9 as Ke,aa as _e,ab as Be,ac as Qe}from"./4.2b6be858.js";import{c as h,l as ze}from"./index.8bf4ac7c.js";const G=typeof String.prototype.normalize=="function"?t=>t.normalize("NFKD"):t=>t;class C{constructor(e,r,n=0,s=e.length,i,a){this.test=a,this.value={from:0,to:0},this.done=!1,this.matches=[],this.buffer="",this.bufferPos=0,this.iter=e.iterRange(n,s),this.bufferStart=n,this.normalize=i?l=>i(G(l)):G,this.query=this.normalize(r)}peek(){if(this.bufferPos==this.buffer.length){if(this.bufferStart+=this.buffer.length,this.iter.next(),this.iter.done)return-1;this.bufferPos=0,this.buffer=this.iter.value}return ye(this.buffer,this.bufferPos)}next(){for(;this.matches.length;)this.matches.pop();return this.nextOverlapping()}nextOverlapping(){for(;;){let e=this.peek();if(e<0)return this.done=!0,this;let r=Se(e),n=this.bufferStart+this.bufferPos;this.bufferPos+=Me(e);let s=this.normalize(r);for(let i=0,a=n;;i++){let l=s.charCodeAt(i),o=this.match(l,a);if(o)return this.value=o,this;if(i==s.length-1)break;a==n&&i<r.length&&r.charCodeAt(i)==l&&a++}}}match(e,r){let n=null;for(let s=0;s<this.matches.length;s+=2){let i=this.matches[s],a=!1;this.query.charCodeAt(i)==e&&(i==this.query.length-1?n={from:this.matches[s+1],to:r+1}:(this.matches[s]++,a=!0)),a||(this.matches.splice(s,2),s-=2)}return this.query.charCodeAt(0)==e&&(this.query.length==1?n={from:r,to:r+1}:this.matches.push(1,r)),n&&this.test&&!this.test(n.from,n.to,this.buffer,this.bufferPos)&&(n=null),n}}typeof Symbol<"u"&&(C.prototype[Symbol.iterator]=function(){return this});const se={from:-1,to:-1,match:/.*/.exec("")},Q="gm"+(/x/.unicode==null?"":"u");class ie{constructor(e,r,n,s=0,i=e.length){if(this.text=e,this.to=i,this.curLine="",this.done=!1,this.value=se,/\\[sWDnr]|\n|\r|\[\^/.test(r))return new le(e,r,n,s,i);this.re=new RegExp(r,Q+(n!=null&&n.ignoreCase?"i":"")),this.test=n==null?void 0:n.test,this.iter=e.iter();let a=e.lineAt(s);this.curLineStart=a.from,this.matchPos=R(e,s),this.getLine(this.curLineStart)}getLine(e){this.iter.next(e),this.iter.lineBreak?this.curLine="":(this.curLine=this.iter.value,this.curLineStart+this.curLine.length>this.to&&(this.curLine=this.curLine.slice(0,this.to-this.curLineStart)),this.iter.next())}nextLine(){this.curLineStart=this.curLineStart+this.curLine.length+1,this.curLineStart>this.to?this.curLine="":this.getLine(0)}next(){for(let e=this.matchPos-this.curLineStart;;){this.re.lastIndex=e;let r=this.matchPos<=this.to&&this.re.exec(this.curLine);if(r){let n=this.curLineStart+r.index,s=n+r[0].length;if(this.matchPos=R(this.text,s+(n==s?1:0)),n==this.curLineStart+this.curLine.length&&this.nextLine(),(n<s||n>this.value.to)&&(!this.test||this.test(n,s,r)))return this.value={from:n,to:s,match:r},this;e=this.matchPos-this.curLineStart}else if(this.curLineStart+this.curLine.length<this.to)this.nextLine(),e=0;else return this.done=!0,this}}}const $=new WeakMap;class b{constructor(e,r){this.from=e,this.text=r}get to(){return this.from+this.text.length}static get(e,r,n){let s=$.get(e);if(!s||s.from>=n||s.to<=r){let l=new b(r,e.sliceString(r,n));return $.set(e,l),l}if(s.from==r&&s.to==n)return s;let{text:i,from:a}=s;return a>r&&(i=e.sliceString(r,a)+i,a=r),s.to<n&&(i+=e.sliceString(s.to,n)),$.set(e,new b(a,i)),new b(r,i.slice(r-a,n-a))}}class le{constructor(e,r,n,s,i){this.text=e,this.to=i,this.done=!1,this.value=se,this.matchPos=R(e,s),this.re=new RegExp(r,Q+(n!=null&&n.ignoreCase?"i":"")),this.test=n==null?void 0:n.test,this.flat=b.get(e,s,this.chunkEnd(s+5e3))}chunkEnd(e){return e>=this.to?this.to:this.text.lineAt(e).to}next(){for(;;){let e=this.re.lastIndex=this.matchPos-this.flat.from,r=this.re.exec(this.flat.text);if(r&&!r[0]&&r.index==e&&(this.re.lastIndex=e+1,r=this.re.exec(this.flat.text)),r){let n=this.flat.from+r.index,s=n+r[0].length;if((this.flat.to>=this.to||r.index+r[0].length<=this.flat.text.length-10)&&(!this.test||this.test(n,s,r)))return this.value={from:n,to:s,match:r},this.matchPos=R(this.text,s+(n==s?1:0)),this}if(this.flat.to==this.to)return this.done=!0,this;this.flat=b.get(this.text,this.flat.from,this.chunkEnd(this.flat.from+this.flat.text.length*2))}}}typeof Symbol<"u"&&(ie.prototype[Symbol.iterator]=le.prototype[Symbol.iterator]=function(){return this});function He(t){try{return new RegExp(t,Q),!0}catch{return!1}}function R(t,e){if(e>=t.length)return e;let r=t.lineAt(e),n;for(;e<r.to&&(n=r.text.charCodeAt(e-r.from))>=56320&&n<57344;)e++;return e}function _(t){let e=h("input",{class:"cm-textfield",name:"line"}),r=h("form",{class:"cm-gotoLine",onkeydown:s=>{s.keyCode==27?(s.preventDefault(),t.dispatch({effects:q.of(!1)}),t.focus()):s.keyCode==13&&(s.preventDefault(),n())},onsubmit:s=>{s.preventDefault(),n()}},h("label",t.state.phrase("Go to line"),": ",e)," ",h("button",{class:"cm-button",type:"submit"},t.state.phrase("go")));function n(){let s=/^([+-])?(\d+)?(:\d+)?(%)?$/.exec(e.value);if(!s)return;let{state:i}=t,a=i.doc.lineAt(i.selection.main.head),[,l,o,c,u]=s,g=c?+c.slice(1):0,x=o?+o:a.number;if(o&&u){let O=x/100;l&&(O=O*(l=="-"?-1:1)+a.number/i.doc.lines),x=Math.round(i.doc.lines*O)}else o&&l&&(x=x*(l=="-"?-1:1)+a.number);let V=i.doc.line(Math.max(1,Math.min(i.doc.lines,x)));t.dispatch({effects:q.of(!1),selection:p.cursor(V.from+Math.max(0,Math.min(g,V.length))),scrollIntoView:!0}),t.focus()}return{dom:r}}const q=W.define(),j=ee.define({create(){return!0},update(t,e){for(let r of e.effects)r.is(q)&&(t=r.value);return t},provide:t=>te.from(t,e=>e?_:null)}),Ne=t=>{let e=D(t,_);if(!e){let r=[q.of(!0)];t.state.field(j,!1)==null&&r.push(W.appendConfig.of([j,Ve])),t.dispatch({effects:r}),e=D(t,_)}return e&&e.dom.querySelector("input").focus(),!0},Ve=S.baseTheme({".cm-panel.cm-gotoLine":{padding:"2px 6px 4px","& label":{fontSize:"80%"}}}),Ge={highlightWordAroundCursor:!1,minSelectionLength:1,maxMatches:100,wholeWords:!1},ae=Y.define({combine(t){return Z(t,Ge,{highlightWordAroundCursor:(e,r)=>e||r,minSelectionLength:Math.min,maxMatches:Math.min})}});function je(t){let e=[Ze,Ye];return t&&e.push(ae.of(t)),e}const Je=d.mark({class:"cm-selectionMatch"}),Ue=d.mark({class:"cm-selectionMatch cm-selectionMatch-main"});function J(t,e,r,n){return(r==0||t(e.sliceDoc(r-1,r))!=m.Word)&&(n==e.doc.length||t(e.sliceDoc(n,n+1))!=m.Word)}function Xe(t,e,r,n){return t(e.sliceDoc(r,r+1))==m.Word&&t(e.sliceDoc(n-1,n))==m.Word}const Ye=X.fromClass(class{constructor(t){this.decorations=this.getDeco(t)}update(t){(t.selectionSet||t.docChanged||t.viewportChanged)&&(this.decorations=this.getDeco(t.view))}getDeco(t){let e=t.state.facet(ae),{state:r}=t,n=r.selection;if(n.ranges.length>1)return d.none;let s=n.main,i,a=null;if(s.empty){if(!e.highlightWordAroundCursor)return d.none;let o=r.wordAt(s.head);if(!o)return d.none;a=r.charCategorizer(s.head),i=r.sliceDoc(o.from,o.to)}else{let o=s.to-s.from;if(o<e.minSelectionLength||o>200)return d.none;if(e.wholeWords){if(i=r.sliceDoc(s.from,s.to),a=r.charCategorizer(s.head),!(J(a,r,s.from,s.to)&&Xe(a,r,s.from,s.to)))return d.none}else if(i=r.sliceDoc(s.from,s.to).trim(),!i)return d.none}let l=[];for(let o of t.visibleRanges){let c=new C(r.doc,i,o.from,o.to);for(;!c.next().done;){let{from:u,to:g}=c.value;if((!a||J(a,r,u,g))&&(s.empty&&u<=s.from&&g>=s.to?l.push(Ue.range(u,g)):(u>=s.to||g<=s.from)&&l.push(Je.range(u,g)),l.length>e.maxMatches))return d.none}}return d.set(l)}},{decorations:t=>t.decorations}),Ze=S.baseTheme({".cm-selectionMatch":{backgroundColor:"#99ff7780"},".cm-searchMatch .cm-selectionMatch":{backgroundColor:"transparent"}}),et=({state:t,dispatch:e})=>{let{selection:r}=t,n=p.create(r.ranges.map(s=>t.wordAt(s.head)||p.cursor(s.head)),r.mainIndex);return n.eq(r)?!1:(e(t.update({selection:n})),!0)};function tt(t,e){let{main:r,ranges:n}=t.selection,s=t.wordAt(r.head),i=s&&s.from==r.from&&s.to==r.to;for(let a=!1,l=new C(t.doc,e,n[n.length-1].to);;)if(l.next(),l.done){if(a)return null;l=new C(t.doc,e,0,Math.max(0,n[n.length-1].from-1)),a=!0}else{if(a&&n.some(o=>o.from==l.value.from))continue;if(i){let o=t.wordAt(l.value.from);if(!o||o.from!=l.value.from||o.to!=l.value.to)continue}return l.value}}const rt=({state:t,dispatch:e})=>{let{ranges:r}=t.selection;if(r.some(i=>i.from===i.to))return et({state:t,dispatch:e});let n=t.sliceDoc(r[0].from,r[0].to);if(t.selection.ranges.some(i=>t.sliceDoc(i.from,i.to)!=n))return!1;let s=tt(t,n);return s?(e(t.update({selection:t.selection.addRange(p.range(s.from,s.to),!1),effects:S.scrollIntoView(s.to)})),!0):!1},k=Y.define({combine(t){return Z(t,{top:!1,caseSensitive:!1,literal:!1,regexp:!1,wholeWord:!1,createPanel:e=>new mt(e),scrollToMatch:e=>S.scrollIntoView(e)})}});class oe{constructor(e){this.search=e.search,this.caseSensitive=!!e.caseSensitive,this.literal=!!e.literal,this.regexp=!!e.regexp,this.replace=e.replace||"",this.valid=!!this.search&&(!this.regexp||He(this.search)),this.unquoted=this.unquote(this.search),this.wholeWord=!!e.wholeWord}unquote(e){return this.literal?e:e.replace(/\\([nrt\\])/g,(r,n)=>n=="n"?`
`:n=="r"?"\r":n=="t"?"	":"\\")}eq(e){return this.search==e.search&&this.replace==e.replace&&this.caseSensitive==e.caseSensitive&&this.regexp==e.regexp&&this.wholeWord==e.wholeWord}create(){return this.regexp?new lt(this):new st(this)}getCursor(e,r=0,n){let s=e.doc?e:re.create({doc:e});return n==null&&(n=s.doc.length),this.regexp?v(this,s,r,n):M(this,s,r,n)}}class ce{constructor(e){this.spec=e}}function M(t,e,r,n){return new C(e.doc,t.unquoted,r,n,t.caseSensitive?void 0:s=>s.toLowerCase(),t.wholeWord?nt(e.doc,e.charCategorizer(e.selection.main.head)):void 0)}function nt(t,e){return(r,n,s,i)=>((i>r||i+s.length<n)&&(i=Math.max(0,r-2),s=t.sliceString(i,Math.min(t.length,n+2))),(e(P(s,r-i))!=m.Word||e(w(s,r-i))!=m.Word)&&(e(w(s,n-i))!=m.Word||e(P(s,n-i))!=m.Word))}class st extends ce{constructor(e){super(e)}nextMatch(e,r,n){let s=M(this.spec,e,n,e.doc.length).nextOverlapping();return s.done&&(s=M(this.spec,e,0,r).nextOverlapping()),s.done?null:s.value}prevMatchInRange(e,r,n){for(let s=n;;){let i=Math.max(r,s-1e4-this.spec.unquoted.length),a=M(this.spec,e,i,s),l=null;for(;!a.nextOverlapping().done;)l=a.value;if(l)return l;if(i==r)return null;s-=1e4}}prevMatch(e,r,n){return this.prevMatchInRange(e,0,r)||this.prevMatchInRange(e,n,e.doc.length)}getReplacement(e){return this.spec.unquote(this.spec.replace)}matchAll(e,r){let n=M(this.spec,e,0,e.doc.length),s=[];for(;!n.next().done;){if(s.length>=r)return null;s.push(n.value)}return s}highlight(e,r,n,s){let i=M(this.spec,e,Math.max(0,r-this.spec.unquoted.length),Math.min(n+this.spec.unquoted.length,e.doc.length));for(;!i.next().done;)s(i.value.from,i.value.to)}}function v(t,e,r,n){return new ie(e.doc,t.search,{ignoreCase:!t.caseSensitive,test:t.wholeWord?it(e.charCategorizer(e.selection.main.head)):void 0},r,n)}function P(t,e){return t.slice(ne(t,e,!1),e)}function w(t,e){return t.slice(e,ne(t,e))}function it(t){return(e,r,n)=>!n[0].length||(t(P(n.input,n.index))!=m.Word||t(w(n.input,n.index))!=m.Word)&&(t(w(n.input,n.index+n[0].length))!=m.Word||t(P(n.input,n.index+n[0].length))!=m.Word)}class lt extends ce{nextMatch(e,r,n){let s=v(this.spec,e,n,e.doc.length).next();return s.done&&(s=v(this.spec,e,0,r).next()),s.done?null:s.value}prevMatchInRange(e,r,n){for(let s=1;;s++){let i=Math.max(r,n-s*1e4),a=v(this.spec,e,i,n),l=null;for(;!a.next().done;)l=a.value;if(l&&(i==r||l.from>i+10))return l;if(i==r)return null}}prevMatch(e,r,n){return this.prevMatchInRange(e,0,r)||this.prevMatchInRange(e,n,e.doc.length)}getReplacement(e){return this.spec.unquote(this.spec.replace.replace(/\$([$&\d+])/g,(r,n)=>n=="$"?"$":n=="&"?e.match[0]:n!="0"&&+n<e.match.length?e.match[n]:r))}matchAll(e,r){let n=v(this.spec,e,0,e.doc.length),s=[];for(;!n.next().done;){if(s.length>=r)return null;s.push(n.value)}return s}highlight(e,r,n,s){let i=v(this.spec,e,Math.max(0,r-250),Math.min(n+250,e.doc.length));for(;!i.next().done;)s(i.value.from,i.value.to)}}const L=W.define(),z=W.define(),y=ee.define({create(t){return new K(B(t).create(),null)},update(t,e){for(let r of e.effects)r.is(L)?t=new K(r.value.create(),t.panel):r.is(z)&&(t=new K(t.query,r.value?H:null));return t},provide:t=>te.from(t,e=>e.panel)});class K{constructor(e,r){this.query=e,this.panel=r}}const at=d.mark({class:"cm-searchMatch"}),ot=d.mark({class:"cm-searchMatch cm-searchMatch-selected"}),ct=X.fromClass(class{constructor(t){this.view=t,this.decorations=this.highlight(t.state.field(y))}update(t){let e=t.state.field(y);(e!=t.startState.field(y)||t.docChanged||t.selectionSet||t.viewportChanged)&&(this.decorations=this.highlight(e))}highlight({query:t,panel:e}){if(!e||!t.spec.valid)return d.none;let{view:r}=this,n=new be;for(let s=0,i=r.visibleRanges,a=i.length;s<a;s++){let{from:l,to:o}=i[s];for(;s<a-1&&o>i[s+1].from-2*250;)o=i[++s].to;t.highlight(r.state,l,o,(c,u)=>{let g=r.state.selection.ranges.some(x=>x.from==c&&x.to==u);n.add(c,u,g?ot:at)})}return n.finish()}},{decorations:t=>t.decorations});function F(t){return e=>{let r=e.state.field(y,!1);return r&&r.query.spec.valid?t(e,r):fe(e)}}const T=F((t,{query:e})=>{let{to:r}=t.state.selection.main,n=e.nextMatch(t.state,r,r);if(!n)return!1;let s=p.single(n.from,n.to),i=t.state.facet(k);return t.dispatch({selection:s,effects:[N(t,n),i.scrollToMatch(s.main,t)],userEvent:"select.search"}),ue(t),!0}),I=F((t,{query:e})=>{let{state:r}=t,{from:n}=r.selection.main,s=e.prevMatch(r,n,n);if(!s)return!1;let i=p.single(s.from,s.to),a=t.state.facet(k);return t.dispatch({selection:i,effects:[N(t,s),a.scrollToMatch(i.main,t)],userEvent:"select.search"}),ue(t),!0}),ht=F((t,{query:e})=>{let r=e.matchAll(t.state,1e3);return!r||!r.length?!1:(t.dispatch({selection:p.create(r.map(n=>p.range(n.from,n.to))),userEvent:"select.search.matches"}),!0)}),ut=({state:t,dispatch:e})=>{let r=t.selection;if(r.ranges.length>1||r.main.empty)return!1;let{from:n,to:s}=r.main,i=[],a=0;for(let l=new C(t.doc,t.sliceDoc(n,s));!l.next().done;){if(i.length>1e3)return!1;l.value.from==n&&(a=i.length),i.push(p.range(l.value.from,l.value.to))}return e(t.update({selection:p.create(i,a),userEvent:"select.search.matches"})),!0},U=F((t,{query:e})=>{let{state:r}=t,{from:n,to:s}=r.selection.main;if(r.readOnly)return!1;let i=e.nextMatch(r,n,n);if(!i)return!1;let a=[],l,o,c=[];if(i.from==n&&i.to==s&&(o=r.toText(e.getReplacement(i)),a.push({from:i.from,to:i.to,insert:o}),i=e.nextMatch(r,i.from,i.to),c.push(S.announce.of(r.phrase("replaced match on line $",r.doc.lineAt(n).number)+"."))),i){let u=a.length==0||a[0].from>=i.to?0:i.to-i.from-o.length;l=p.single(i.from-u,i.to-u),c.push(N(t,i)),c.push(r.facet(k).scrollToMatch(l.main,t))}return t.dispatch({changes:a,selection:l,effects:c,userEvent:"input.replace"}),!0}),ft=F((t,{query:e})=>{if(t.state.readOnly)return!1;let r=e.matchAll(t.state,1e9).map(s=>{let{from:i,to:a}=s;return{from:i,to:a,insert:e.getReplacement(s)}});if(!r.length)return!1;let n=t.state.phrase("replaced $ matches",r.length)+".";return t.dispatch({changes:r,effects:S.announce.of(n),userEvent:"input.replace.all"}),!0});function H(t){return t.state.facet(k).createPanel(t)}function B(t,e){var r,n,s,i,a;let l=t.selection.main,o=l.empty||l.to>l.from+100?"":t.sliceDoc(l.from,l.to);if(e&&!o)return e;let c=t.facet(k);return new oe({search:((r=e==null?void 0:e.literal)!==null&&r!==void 0?r:c.literal)?o:o.replace(/\n/g,"\\n"),caseSensitive:(n=e==null?void 0:e.caseSensitive)!==null&&n!==void 0?n:c.caseSensitive,literal:(s=e==null?void 0:e.literal)!==null&&s!==void 0?s:c.literal,regexp:(i=e==null?void 0:e.regexp)!==null&&i!==void 0?i:c.regexp,wholeWord:(a=e==null?void 0:e.wholeWord)!==null&&a!==void 0?a:c.wholeWord})}function he(t){let e=D(t,H);return e&&e.dom.querySelector("[main-field]")}function ue(t){let e=he(t);e&&e==t.root.activeElement&&e.select()}const fe=t=>{let e=t.state.field(y,!1);if(e&&e.panel){let r=he(t);if(r&&r!=t.root.activeElement){let n=B(t.state,e.query.spec);n.valid&&t.dispatch({effects:L.of(n)}),r.focus(),r.select()}}else t.dispatch({effects:[z.of(!0),e?L.of(B(t.state,e.query.spec)):W.appendConfig.of(gt)]});return!0},de=t=>{let e=t.state.field(y,!1);if(!e||!e.panel)return!1;let r=D(t,H);return r&&r.dom.contains(t.root.activeElement)&&t.focus(),t.dispatch({effects:z.of(!1)}),!0},dt=[{key:"Mod-f",run:fe,scope:"editor search-panel"},{key:"F3",run:T,shift:I,scope:"editor search-panel",preventDefault:!0},{key:"Mod-g",run:T,shift:I,scope:"editor search-panel",preventDefault:!0},{key:"Escape",run:de,scope:"editor search-panel"},{key:"Mod-Shift-l",run:ut},{key:"Alt-g",run:Ne},{key:"Mod-d",run:rt,preventDefault:!0}];class mt{constructor(e){this.view=e;let r=this.query=e.state.field(y).query.spec;this.commit=this.commit.bind(this),this.searchField=h("input",{value:r.search,placeholder:f(e,"Find"),"aria-label":f(e,"Find"),class:"cm-textfield",name:"search",form:"","main-field":"true",onchange:this.commit,onkeyup:this.commit}),this.replaceField=h("input",{value:r.replace,placeholder:f(e,"Replace"),"aria-label":f(e,"Replace"),class:"cm-textfield",name:"replace",form:"",onchange:this.commit,onkeyup:this.commit}),this.caseField=h("input",{type:"checkbox",name:"case",form:"",checked:r.caseSensitive,onchange:this.commit}),this.reField=h("input",{type:"checkbox",name:"re",form:"",checked:r.regexp,onchange:this.commit}),this.wordField=h("input",{type:"checkbox",name:"word",form:"",checked:r.wholeWord,onchange:this.commit});function n(s,i,a){return h("button",{class:"cm-button",name:s,onclick:i,type:"button"},a)}this.dom=h("div",{onkeydown:s=>this.keydown(s),class:"cm-search"},[this.searchField,n("next",()=>T(e),[f(e,"next")]),n("prev",()=>I(e),[f(e,"previous")]),n("select",()=>ht(e),[f(e,"all")]),h("label",null,[this.caseField,f(e,"match case")]),h("label",null,[this.reField,f(e,"regexp")]),h("label",null,[this.wordField,f(e,"by word")]),...e.state.readOnly?[]:[h("br"),this.replaceField,n("replace",()=>U(e),[f(e,"replace")]),n("replaceAll",()=>ft(e),[f(e,"replace all")])],h("button",{name:"close",onclick:()=>de(e),"aria-label":f(e,"close"),type:"button"},["×"])])}commit(){let e=new oe({search:this.searchField.value,caseSensitive:this.caseField.checked,regexp:this.reField.checked,wholeWord:this.wordField.checked,replace:this.replaceField.value});e.eq(this.query)||(this.query=e,this.view.dispatch({effects:L.of(e)}))}keydown(e){Ce(this.view,e,"search-panel")?e.preventDefault():e.keyCode==13&&e.target==this.searchField?(e.preventDefault(),(e.shiftKey?I:T)(this.view)):e.keyCode==13&&e.target==this.replaceField&&(e.preventDefault(),U(this.view))}update(e){for(let r of e.transactions)for(let n of r.effects)n.is(L)&&!n.value.eq(this.query)&&this.setQuery(n.value)}setQuery(e){this.query=e,this.searchField.value=e.search,this.replaceField.value=e.replace,this.caseField.checked=e.caseSensitive,this.reField.checked=e.regexp,this.wordField.checked=e.wholeWord}mount(){this.searchField.select()}get pos(){return 80}get top(){return this.view.state.facet(k).top}}function f(t,e){return t.state.phrase(e)}const A=30,E=/[\s\.,:;?!]/;function N(t,{from:e,to:r}){let n=t.state.doc.lineAt(e),s=t.state.doc.lineAt(r).to,i=Math.max(n.from,e-A),a=Math.min(s,r+A),l=t.state.sliceDoc(i,a);if(i!=n.from){for(let o=0;o<A;o++)if(!E.test(l[o+1])&&E.test(l[o])){l=l.slice(o);break}}if(a!=s){for(let o=l.length-1;o>l.length-A;o--)if(!E.test(l[o-1])&&E.test(l[o])){l=l.slice(0,o);break}}return S.announce.of(`${t.state.phrase("current match")}. ${l} ${t.state.phrase("on line")} ${n.number}.`)}const pt=S.baseTheme({".cm-panel.cm-search":{padding:"2px 6px 4px",position:"relative","& [name=close]":{position:"absolute",top:"0",right:"4px",backgroundColor:"inherit",border:"none",font:"inherit",padding:0,margin:0},"& input, & button, & label":{margin:".2em .6em .2em 0"},"& input[type=checkbox]":{marginRight:".2em"},"& label":{fontSize:"80%",whiteSpace:"pre"}},"&light .cm-searchMatch":{backgroundColor:"#ffff0054"},"&dark .cm-searchMatch":{backgroundColor:"#00ffff8a"},"&light .cm-searchMatch-selected":{backgroundColor:"#ff6a0054"},"&dark .cm-searchMatch-selected":{backgroundColor:"#ff00ff8a"}}),gt=[y,ve.lowest(ct),pt];var Mt=t=>[ke(),Le(),We(),Fe(),Ae(),Ee(),De(),Re(),qe(Pe,{fallback:!0}),we(),me(),re.allowMultipleSelections.of(!0),t.autocomplete!==!1?pe():[],Te(),Ie(),Oe(),je(),$e.of([].concat(ge,Ke,dt,_e,Be,xe,ze,t.useTabs?[Qe]:[]))];export{Mt as default};