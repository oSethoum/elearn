import{s as l}from"./schema.bcb88cc1.js";import{a4 as c,t as h,j as a,a5 as d,d as g,au as m,B as i,aF as u,av as p,a1 as x}from"./vendor.0be45842.js";const f=x(e=>({title:{backgroundColor:e.colorScheme==="dark"?e.colors.dark[5]:e.colors.gray[2]}})),T=()=>{var r,n;const{classes:e}=f(),o=c();h();const{data:s}=l({variables:{where:{id:parseInt(o.assignmentId)}}});return a(d,{size:"xl",sx:{minHeight:"60vh"},children:g(m,{withBorder:!0,p:0,my:20,children:[a(i,{p:5,px:15,className:e.title,children:a(u,{children:(r=s==null?void 0:s.assignment)==null?void 0:r.title})}),a(p,{}),a(i,{p:20,sx:t=>({"& iframe":{width:25*16,height:25*9,[t.fn.largerThan("md")]:{width:35*16,height:35*9},[t.fn.largerThan("lg")]:{width:45*16,height:45*9}}}),dangerouslySetInnerHTML:{__html:(n=s==null?void 0:s.assignment)==null?void 0:n.content}})]})})};export{T as Lesson,T as default};
