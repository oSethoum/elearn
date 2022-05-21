import{t as C,a8 as S,j as e,B as s,d as o,aG as L,aH as O,Y as u,m as T,aF as w,k as t,a5 as A,a6 as a,h as f,ay as d,E as c,a1 as j,r as x,aI as E,aJ as N,F as H,aK as M,aL as R,aM as W,aA as y,aN as D,au as b,S as z,aO as P,aP as U,aQ as G,aR as V,O as J,aS as K}from"./vendor.0be45842.js";import{H as Q}from"./Header.cb0b718c.js";import{C as Y,F as $}from"./BrandLogos.fa73e98b.js";import{u as k}from"./index.388e8e0a.js";import{U as q}from"./UserButton.9aeb4ca6.js";import{L as X}from"./Logo.99ad6cec.js";var Z="/assets/hero-image.600f1843.jpg";const _=j(r=>({inner:{position:"relative",zIndex:1},title:{fontWeight:800,fontSize:40,letterSpacing:-1,paddingLeft:r.spacing.md,paddingRight:r.spacing.md,color:r.white,marginBottom:r.spacing.xs,textAlign:"center",fontFamily:`Greycliff CF, ${r.fontFamily}`,"@media (max-width: 520px)":{fontSize:28,textAlign:"left"}},highlight:{color:r.colors[r.primaryColor][4]},description:{color:r.colors.gray[0],textAlign:"center","@media (max-width: 520px)":{fontSize:r.fontSizes.md,textAlign:"left"}},controls:{marginTop:r.spacing.xl*1.5,display:"flex",justifyContent:"center",paddingLeft:r.spacing.md,paddingRight:r.spacing.md,"@media (max-width: 520px)":{flexDirection:"column"}},control:{height:42,fontSize:r.fontSizes.md,"&:not(:first-of-type)":{marginLeft:r.spacing.md},"@media (max-width: 520px)":{"&:not(:first-of-type)":{marginTop:r.spacing.md,marginLeft:0}}},secondaryControl:{color:r.white,backgroundColor:"rgba(255, 255, 255, .4)","&:hover":{backgroundColor:"rgba(255, 255, 255, .45) !important"}}})),ee=()=>{const{classes:r,cx:i}=_(),{t:n}=C(),{user:g}=k(),l=S();return e(s,{children:o(L,{sx:{height:"100vh",position:"relative",display:"flex",justifyContent:"center"},src:Z,children:[e(O,{zIndex:1,color:"#000",opacity:.65}),e(u,{sx:h=>({position:"absolute",zIndex:10,width:300,top:20,backgroundColor:h.fn.rgba(h.colors.dark[9],.6)}),children:e(X,{fill:l.colors[l.primaryColor][3],width:300})}),e(T,{sx:{height:"120vh"},children:o("div",{className:r.inner,children:[o(w,{className:r.title,children:[n("heroLine")," ",e(t,{component:"span",inherit:!0,className:r.highlight,children:n("online")})]}),e(A,{size:640,children:e(t,{size:"lg",className:r.description,children:n("subHeroLine")})}),e(s,{className:r.controls,children:g?e(a,{h:80}):o(f,{mt:10,children:[e(d,{to:"/register",children:e(c,{className:r.control,variant:"white",size:"lg",children:n("register")})}),e(d,{to:"/login",children:e(c,{className:i(r.control,r.secondaryControl),size:"lg",children:n("login")})})]})})]})})]})})},p=({color:r,title:i,icon:n})=>o(u,{withBorder:!0,shadow:"xs",children:[e(s,{style:{backgroundColor:r,display:"flex",justifyContent:"center",alignItems:"center",height:60,fontSize:26,color:"white",fontWeight:700},children:i}),e(s,{my:50,children:e(s,{my:20,children:x.exports.isValidElement(n)&&x.exports.cloneElement(n,{color:r})})})]});var re="/assets/science.74f648b0.jpg",ie="/assets/languages.b5cfbe82.jpg",oe="/assets/arabic.e33e42c7.jpeg";const m=({image:r,title:i,description:n})=>o(u,{withBorder:!0,shadow:"xs",children:[e(E,{src:r,height:160}),e(w,{children:i}),n]});function de(){const r=S(),{t:i}=C(),[n,g]=N(),{user:l,departmentsRef:h,featuresRef:v,scrollToDepartments:F,scrollToFeatures:B}=k();return o(H,{children:[e(Q,{rightSide:o(f,{direction:"row",children:[e(q,{}),e(Y,{})]}),withBorder:!0,responsive:!0,children:o(f,{children:[e(c,{leftIcon:e(M,{}),onClick:()=>{B()},children:i("features")}),e(c,{leftIcon:e(R,{}),onClick:()=>{F()},color:"green",children:i("departments")}),e(d,{to:"about-us",children:e(c,{leftIcon:e(W,{}),color:"orange",children:i("aboutUs")})}),l&&e(d,{to:"courses",children:e(c,{leftIcon:e(y,{}),color:"red",children:i("courses")})}),(l==null?void 0:l.role)==="admin"&&e(d,{to:"/dashboard",children:e(c,{color:"violet",leftIcon:e(D,{}),children:i("dashboard")})})]})}),e(ee,{}),o(A,{size:"xl",sx:{display:"flex",flexDirection:"column"},children:[e(a,{h:90,ref:v}),e(b,{withBorder:!0,children:e("h1",{style:{textAlign:"center",margin:0,color:r.colors.blue[5]},children:i("features")})}),e(a,{h:50}),o(z,{cols:3,spacing:"lg",sx:{textAlign:"center"},breakpoints:[{maxWidth:r.breakpoints.sm,cols:1}],children:[e(p,{title:i("lessons"),color:r.colors.teal[5],icon:e(y,{size:120})}),e(p,{title:i("homeWorks"),color:r.colors.orange[7],icon:e(P,{size:120})}),e(p,{title:i("videoConference"),color:r.colors.blue[5],icon:e(U,{size:120})})]}),e(a,{h:75}),e(a,{h:90,ref:h}),e(b,{withBorder:!0,children:e("h1",{style:{textAlign:"center",margin:0,color:r.colors.green[6]},children:i("departments")})}),e(a,{h:50}),o(z,{cols:3,spacing:"lg",sx:{textAlign:"center"},breakpoints:[{maxWidth:r.breakpoints.sm,cols:1}],children:[e(m,{title:i("departmentOfExactSciences"),description:o(s,{p:20,sx:{textAlign:"left"},children:[o(t,{size:"xl",children:[i("topics")," :"]}),e(a,{h:8}),e(t,{size:"lg",color:"blue",children:i("mathematicsAndPhysics")}),e(t,{children:i("teacherOfMiddleEducation")}),e(a,{h:5}),e(t,{size:"lg",color:"blue",children:i("mathematicsPhysicsAndComputerScience")}),e(t,{children:i("teacherOfSecondaryEducation")})]}),image:re}),e(m,{title:i("departmentOfForeignLanguages"),description:o(s,{p:20,sx:{textAlign:"left"},children:[o(t,{size:"xl",children:[i("topics")," :"]}),e(a,{h:8}),e(t,{size:"lg",color:"blue",children:i("frenchLanguage")}),e(t,{children:i("teacherOfSecondaryEducation")}),e(a,{h:5}),e(t,{size:"lg",color:"blue",children:i("englishLanguage")}),e(t,{children:i("teacherOfSecondaryEducation")})]}),image:ie}),e(m,{title:i("departmentOfArabic"),description:o(s,{p:20,sx:{textAlign:"left"},children:[o(t,{size:"xl",children:[i("topics")," :"]}),e(a,{h:8}),e(t,{size:"lg",color:"blue",children:i("arabic")}),e(t,{children:i("teacherOfPrimaryEducation")})]}),image:oe})]}),e(a,{h:75})]}),e(G,{position:{bottom:20,right:20},children:e(V,{transition:"slide-up",mounted:n.y>600,children:I=>e(J,{style:I,size:"xl",variant:"outline",color:"blue",radius:100,onClick:()=>g({y:0}),children:e(K,{})})})}),e($,{withBorder:!0})]})}export{de as Home,de as default};
