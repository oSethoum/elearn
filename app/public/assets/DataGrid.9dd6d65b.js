var J=Object.defineProperty,K=Object.defineProperties;var M=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var H=(r,o,i)=>o in r?J(r,o,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[o]=i,B=(r,o)=>{for(var i in o||(o={}))P.call(o,i)&&H(r,i,o[i]);if(p)for(var i of p(o))T.call(o,i)&&H(r,i,o[i]);return r},E=(r,o)=>K(r,M(o));var F=(r,o)=>{var i={};for(var h in r)P.call(r,h)&&o.indexOf(h)<0&&(i[h]=r[h]);if(r!=null&&p)for(var h of p(r))o.indexOf(h)<0&&T.call(r,h)&&(i[h]=r[h]);return i};import{r as m,j as g,Y as z,m as Q,d as t,h as R,Z as U,k as V,_ as D,F as W,$ as X,B as L,a0 as s,a1 as x}from"./vendor.0be45842.js";const I=x(r=>({thead:{backgroundColor:r.colorScheme==="dark"?r.colors.dark[9]:r.colors.gray[1],height:"40px",position:"sticky",top:0,zIndex:10,boxShadow:`0px 0px 10px ${r.colorScheme==="dark"?r.colors.gray[8]:r.colors.gray[4]}`},rowSelected:{backgroundColor:r.fn.rgba(r.colors.blue[7],.2)}}));function hr(e){var b=e,{data:r,selectedIndexes:o,withSelection:i,setSelectedIndexes:h,headerModifier:y,height:d,width:G,actionsLabel:f,actions:k}=b,N=F(b,["data","selectedIndexes","withSelection","setSelectedIndexes","headerModifier","height","width","actionsLabel","actions"]);const{classes:C,cx:S}=I(),u=y||(l=>l),[c,_]=m.exports.useState(1),[$,A]=m.exports.useState([]);if(m.exports.useEffect(()=>{r&&A([...r.slice((c-1)*10,c*10)])},[c,r]),!r||(r==null?void 0:r.length)==0)return g(z,{sx:{minHeight:300},children:g(Q,{sx:{minHeight:300},children:t(R,{direction:"column",children:[g(U,{size:36}),g(V,{children:u("empty")})]})})});const w=Object.keys(r[0]),O=w.map(l=>g("th",{children:u(l)},l)),j=(l,a)=>{a?h&&o&&h([...o,l]):h&&o&&h(o.filter(n=>n!==l))},Y=()=>{o&&o.length===r.length?h&&h([]):h&&h(r.map((l,a)=>a))},Z=$.map((l,a)=>t("tr",{className:S(o!=null&&o.includes(a)?C.rowSelected:null),children:[!!i&&g("td",{children:g(D,{checked:o==null?void 0:o.includes(a),onChange:n=>n.currentTarget.checked?j(a,!0):j(a,!1)})}),w.map((n,v)=>g("td",{children:l[n]},v)),k&&g("td",{children:k(a)})]},a)),q=()=>{let l=r.length%10>0?1:0;return Math.floor(r.length/10)+l};return t(W,{children:[g(z,{withBorder:!0,sx:{width:G,minHeight:490},children:t(X,E(B({},N),{children:[g("thead",{className:C.thead,children:t("tr",{children:[!!i&&g("th",{style:{width:20},children:g(D,{checked:(o==null?void 0:o.length)===r.length,indeterminate:o&&(o==null?void 0:o.length)>0&&(o==null?void 0:o.length)<r.length,onChange:Y})}),O,f&&g("th",{style:{width:100},children:u(f)})]})}),g(L,{component:"tbody",children:Z})]}))}),r.length>10&&g(s,{initialPage:1,my:20,total:q(),sx:{float:"right"},page:c,onChange:_})]})}export{hr as D};
