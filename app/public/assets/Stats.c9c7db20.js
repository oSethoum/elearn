import{u as y,L as T}from"./index.388e8e0a.js";import{I as _,J as M,n as f}from"./schema.bcb88cc1.js";import{t as B,r as p,j as e,d as o,B as A,S as D,F as I,au as t,h as n,k as l,bg as k,a6 as c,b6 as Q,b5 as H,E as z,a1 as O}from"./vendor.0be45842.js";import{D as v}from"./DataGrid.9dd6d65b.js";const P=O(r=>({students:{backgroundColor:r.colorScheme==="dark"?`${r.colors.blue[5]}50`:r.colors.blue[5],color:"#FFFFFF"},teachers:{backgroundColor:r.colorScheme==="dark"?`${r.colors.violet[5]}50`:r.colors.violet[5],color:"#FFFFFF"},courses:{backgroundColor:r.colorScheme==="dark"?`${r.colors.red[5]}60`:r.colors.red[5],color:"#FFFFFF"},topics:{backgroundColor:r.colorScheme==="dark"?`${r.colors.green[5]}50`:r.colors.green[5],color:"#FFFFFF"},cardHeader:{backgroundColor:r.colorScheme==="dark"?r.colors.dark[9]:r.colors.gray[1]}})),q=()=>{var S,F,x,w;const{classes:r}=P(),{t:i}=B(),[h,g]=p.exports.useState([]),[u,m]=p.exports.useState([]),[b]=_(),{setHeader:N}=y();p.exports.useEffect(()=>{N("dashboard")},[]);let{data:s,loading:C}=M({variables:{swhere:{user:{is:{disabled:{equals:!0}}}},twhere:{user:{is:{disabled:{equals:!0}}}}}});return C?e(T,{height:"85vh"}):o(A,{children:[e(D,{cols:4,breakpoints:[{maxWidth:"sm",cols:2}],spacing:"md",children:o(I,{children:[o(t,{shadow:"sm",className:r.students,children:[o(n,{position:"apart",children:[e(l,{size:"xl",children:i("students")}),e(k,{size:25})]}),e(c,{h:20}),e(l,{size:"xl",weight:"bold",children:(S=s==null?void 0:s.aggregateStudent._count)==null?void 0:S._all})]}),o(t,{shadow:"sm",className:r.teachers,children:[o(n,{position:"apart",children:[e(l,{size:"xl",children:i("teachers")}),e(k,{size:25})]}),e(c,{h:20}),e(l,{size:"xl",weight:"bold",children:(F=s==null?void 0:s.aggregateTeacher._count)==null?void 0:F._all})]}),o(t,{shadow:"sm",className:r.courses,children:[o(n,{position:"apart",children:[e(l,{size:"xl",children:i("courses")}),e(Q,{size:25})]}),e(c,{h:20}),e(l,{size:"xl",weight:"bold",children:(x=s==null?void 0:s.aggregateCourse._count)==null?void 0:x._all})]}),o(t,{shadow:"sm",className:r.topics,children:[o(n,{position:"apart",children:[e(l,{size:"xl",children:i("topics")}),e(H,{size:25})]}),e(c,{h:20}),e(l,{size:"xl",weight:"bold",children:(w=s==null?void 0:s.aggregateTopic._count)==null?void 0:w._all})]})]})}),e(c,{h:"xl"}),o(t,{p:0,withBorder:!0,shadow:"sm",children:[e(t.Section,{children:o(n,{p:10,position:"apart",children:[e(l,{size:"xl",weight:"bold",children:i("newStudents")}),e(z,{disabled:h.length==0,onClick:()=>{const a=h.map(d=>s==null?void 0:s.students[d].user.id);b({variables:{where:{id:{in:a}},data:{disabled:{set:!1}}},refetchQueries:[f.Query.statePageData]}),g([])},children:i("approve")})]})}),e(v,{height:250,withSelection:!0,headerModifier:i,selectedIndexes:h,setSelectedIndexes:g,data:s==null?void 0:s.students.map(a=>{var d;return{username:a.user.username,firstName:a.lastName,lastName:a.lastName,email:a.user.email,year:a.year,topic:(d=a.topic)==null?void 0:d.name,createdAt:a.user.createdAt}}),highlightOnHover:!0,verticalSpacing:"sm"})]}),e(c,{h:50}),o(t,{p:0,withBorder:!0,shadow:"sm",children:[e(t.Section,{children:o(n,{p:10,position:"apart",children:[e(l,{size:"xl",weight:"bold",children:i("newTeachers")}),e(z,{disabled:u.length==0,onClick:()=>{const a=u.map(d=>s==null?void 0:s.teachers[d].user.id);b({variables:{where:{id:{in:a}},data:{disabled:{set:!1}}},refetchQueries:[f.Query.statePageData]}),m([])},children:i("approve")})]})}),e(v,{height:250,headerModifier:i,withSelection:!0,selectedIndexes:u,setSelectedIndexes:m,data:s==null?void 0:s.teachers.map(a=>({firstName:a.firstName,lastName:a.lastName,username:a.user.username,email:a.user.email,createdAt:a.user.createdAt})),highlightOnHover:!0,verticalSpacing:"sm"})]}),e(c,{h:50})]})};export{q as Stats,q as default};
