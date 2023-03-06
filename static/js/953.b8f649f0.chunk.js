"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[953],{1963:function(e,n,r){var a=r(4942),i=r(1413),t=r(9439),l=r(2791);n.Z=function(e){var n=e.initialState,r=e.onSubmit,o=(0,l.useState)((0,i.Z)({},n)),s=(0,t.Z)(o,2),c=s[0],u=s[1];return{state:c,setState:u,handleChange:function(e){var n=e.target,r=n.name,t=n.value,l=n.type,o=n.checked,s="checkbox"===l?o:t;console.log(t),console.log(o),u((function(e){return(0,i.Z)((0,i.Z)({},e),{},(0,a.Z)({},r,s))}))},handleSubmit:function(e){e.preventDefault(),r((0,i.Z)({},c)),u((0,i.Z)({},n))}}}},4953:function(e,n,r){r.r(n),r.d(n,{default:function(){return Q}});var a=r(2791),i=r(1252),t=r(4087),l=r(4224),o=r(1963),s={name:"",number:""},c=r(2701),u=r(4585),d=r(7886),m=r(896),p=r(6856),f=r(184),h=function(e){var n=e.onSubmit,r=(0,i.If)().colorMode,a=(0,o.Z)({initialState:s,onSubmit:n}),h=a.state,v=a.handleChange,x=a.handleSubmit,g=h.name,b=h.number;return(0,f.jsx)(t.xu,{maxW:"440px",borderColor:"teal",borderWidth:"2px",borderRadius:"lg",p:"6",children:(0,f.jsxs)(c.NI,{as:"form",onSubmit:x,isRequired:!0,children:[(0,f.jsx)(u.l,{color:"dark"===r?"white":"black",children:"Name"}),(0,f.jsx)(d.I,{value:g,onChange:v,name:"name",type:"text",mb:"2",placeholder:" Name"}),(0,f.jsx)(u.l,{color:"dark"===r?"white":"black",children:"Number"}),(0,f.jsx)(d.I,{value:b,onChange:v,name:"number",type:"text",placeholder:"number",mb:"6"}),(0,f.jsx)(m.M,{children:(0,f.jsx)(l.z,{type:"submit",borderRadius:"md",bg:"teal",color:"white",px:4,h:8,_hover:{bg:"#049494"},_active:{bg:"#049494",transform:"scale(0.89)"},leftIcon:(0,f.jsx)(p.BB4,{}),colorScheme:"teal",variant:"solid",children:"Contact"})})]})})},v=r(1413),x=r(4925),g=r(7872),b=r(2952),Z=["templateAreas","gap","rowGap","columnGap","column","row","autoFlow","autoRows","templateRows","autoColumns","templateColumns"],j=(0,g.G)((function(e,n){var r=e.templateAreas,a=e.gap,i=e.rowGap,t=e.columnGap,l=e.column,o=e.row,s=e.autoFlow,c=e.autoRows,u=e.templateRows,d=e.autoColumns,m=e.templateColumns,p=(0,x.Z)(e,Z),h={display:"grid",gridTemplateAreas:r,gridGap:a,gridRowGap:i,gridColumnGap:t,gridAutoColumns:d,gridColumn:l,gridRow:o,gridAutoFlow:s,gridAutoRows:c,gridTemplateRows:u,gridTemplateColumns:m};return(0,f.jsx)(b.m.div,(0,v.Z)({ref:n,__css:h},p))}));j.displayName="Grid";var y=r(5310),k=r(3142),C=r(2625),w=["columns","spacingX","spacingY","spacing","minChildWidth"],I=(0,g.G)((function(e,n){var r,a=e.columns,i=e.spacingX,t=e.spacingY,l=e.spacing,o=e.minChildWidth,s=(0,x.Z)(e,w),c=(0,y.F)(),u=o?function(e,n){return(0,C.XQ)(e,(function(e){var r,a=(0,k.LP)("sizes",e,"number"===typeof(r=e)?"".concat(r,"px"):r)(n);return null===e?null:"repeat(auto-fit, minmax(".concat(a,", 1fr))")}))}(o,c):(r=a,(0,C.XQ)(r,(function(e){return null===e?null:"repeat(".concat(e,", minmax(0, 1fr))")})));return(0,f.jsx)(j,(0,v.Z)({ref:n,gap:l,columnGap:i,rowGap:t,templateColumns:u},s))}));I.displayName="SimpleGrid";var N=r(5946),R=r(9434),_=function(e){return e.filter},F=function(e){var n=e.contacts,r=e.filter;if(!r)return n.items;var a=r.toLowerCase();return n.items.filter((function(e){return e.name.toLowerCase().includes(a)}))},q=r(7129),S=r(2996),G=r(6992),P=["spacing","spacingX","spacingY","children","justify","direction","align","className","shouldWrapChildren"],T=["className"];function O(e){return"number"===typeof e?"".concat(e,"px"):e}(0,g.G)((function(e,n){var r=e.spacing,i=void 0===r?"0.5rem":r,t=e.spacingX,l=e.spacingY,o=e.children,s=e.justify,c=e.direction,u=e.align,d=e.className,m=e.shouldWrapChildren,p=(0,x.Z)(e,P),h=(0,a.useMemo)((function(){var e={spacingX:t,spacingY:l},n=e.spacingX,r=void 0===n?i:n,a=e.spacingY,o=void 0===a?i:a;return{"--chakra-wrap-x-spacing":function(e){return(0,C.XQ)(r,(function(n){return O((0,S.fr)("space",n)(e))}))},"--chakra-wrap-y-spacing":function(e){return(0,C.XQ)(o,(function(n){return O((0,S.fr)("space",n)(e))}))},"--wrap-x-spacing":"calc(var(--chakra-wrap-x-spacing) / 2)","--wrap-y-spacing":"calc(var(--chakra-wrap-y-spacing) / 2)",display:"flex",flexWrap:"wrap",justifyContent:s,alignItems:u,flexDirection:c,listStyleType:"none",padding:"0",margin:"calc(var(--wrap-y-spacing) * -1) calc(var(--wrap-x-spacing) * -1)","& > *:not(style)":{margin:"var(--wrap-y-spacing) var(--wrap-x-spacing)"}}}),[i,t,l,s,u,c]),g=(0,a.useMemo)((function(){return m?a.Children.map(o,(function(e,n){return(0,f.jsx)(B,{children:e},n)})):o}),[o,m]);return(0,f.jsx)(b.m.div,(0,v.Z)((0,v.Z)({ref:n,className:(0,G.cx)("chakra-wrap",d),overflow:"hidden"},p),{},{children:(0,f.jsx)(b.m.ul,{className:"chakra-wrap__list",__css:h,children:g})}))})).displayName="Wrap";var B=(0,g.G)((function(e,n){var r=e.className,a=(0,x.Z)(e,T);return(0,f.jsx)(b.m.li,(0,v.Z)({ref:n,__css:{display:"flex",alignItems:"flex-start"},className:(0,G.cx)("chakra-wrap__listitem",r)},a))}));B.displayName="WrapItem";var D=r(176),L=r(9229),W=r(4464),X=function(e){var n=e.contact,r=e.removeContact,a=(0,i.If)().colorMode;return(0,f.jsxs)(D.k,{minWidth:"420px",alignItems:"center",p:2,borderBottom:"2px",children:[(0,f.jsx)(t.xu,{children:(0,f.jsxs)(L.x,{color:"dark"===a?"white":"black",children:[n.name,": ",n.number]})}),(0,f.jsx)(W.L,{}),(0,f.jsx)(t.xu,{children:(0,f.jsx)(l.z,{borderRadius:"md",bg:"teal",color:"white",px:4,h:8,_hover:{bg:"#049494"},_active:{bg:"#049494",transform:"scale(0.89)"},onClick:function(){return r(n.id)},children:(0,f.jsx)(p.FH3,{size:18})})})]})},A=function(e){var n=e.contacts,r=e.removeContact;return(0,f.jsx)(t.xu,{mt:12,children:n.map((function(e){return(0,f.jsx)(B,{children:(0,f.jsx)(X,{contact:e,removeContact:r})},e.id)}))})};A.defaultProps={contacts:[]};var z=function(e){var n=e.onFilter,r=e.value,a=(0,i.If)().colorMode;return(0,f.jsx)(t.xu,{maxW:"440px",borderColor:"teal",borderWidth:"2px",borderRadius:"lg",p:"6",children:(0,f.jsxs)(c.NI,{as:"form",isRequired:!0,children:[(0,f.jsx)(u.l,{color:"dark"===a?"white":"black",children:" Find contacts by name"}),(0,f.jsx)(d.I,{value:r,onChange:n,name:"filter",type:"text",mb:"2",placeholder:" Name"})]})})},M=r(5653),H=r(9085),Q=function(){var e=(0,i.If)().colorMode,n=(0,R.v9)(F),r=(0,R.v9)(_),l=(0,R.I0)();(0,a.useEffect)((function(){l((0,q.yF)())}),[l]);return(0,f.jsxs)(t.xu,{children:[(0,f.jsx)(m.M,{children:(0,f.jsx)(N.X,{m:8,padding:"2",as:"h2",size:"md",color:"dark"===e?"white":"black",children:"Contacts"})}),(0,f.jsxs)(I,{columns:2,spacing:10,children:[(0,f.jsx)(t.xu,{children:(0,f.jsx)(h,{onSubmit:function(e){l((0,q.uK)(e))}})}),(0,f.jsx)(t.xu,{children:(0,f.jsx)(z,{onFilter:function(e){var n=e.target;l((0,M.h)(n.value))},value:r})})]}),(0,f.jsx)(t.xu,{children:(0,f.jsx)(A,{contacts:n,removeContact:function(e){l((0,q.zY)(e))}})}),(0,f.jsx)(H.Ix,{autoClose:3e3})]})}},2625:function(e,n,r){r.d(n,{XQ:function(){return i}});var a=r(6992);Object.freeze(["base","sm","md","lg","xl","2xl"]);function i(e,n){return Array.isArray(e)?e.map((function(e){return null===e?null:n(e)})):(0,a.Kn)(e)?Object.keys(e).reduce((function(r,a){return r[a]=n(e[a]),r}),{}):null!=e?n(e):null}},4585:function(e,n,r){r.d(n,{l:function(){return p}});var a=r(1413),i=r(4925),t=r(2701),l=r(7872),o=r(9084),s=r(2996),c=r(2952),u=r(6992),d=r(184),m=["className","children","requiredIndicator","optionalIndicator"],p=(0,l.G)((function(e,n){var r,l=(0,o.mq)("FormLabel",e),p=(0,s.Lr)(e),h=(p.className,p.children),v=p.requiredIndicator,x=void 0===v?(0,d.jsx)(f,{}):v,g=p.optionalIndicator,b=void 0===g?null:g,Z=(0,i.Z)(p,m),j=(0,t.NJ)(),y=null!=(r=null==j?void 0:j.getLabelProps(Z,n))?r:(0,a.Z)({ref:n},Z);return(0,d.jsxs)(c.m.label,(0,a.Z)((0,a.Z)({},y),{},{className:(0,u.cx)("chakra-form__label",p.className),__css:(0,a.Z)({display:"block",textAlign:"start"},l),children:[h,(null==j?void 0:j.isRequired)?x:b]}))}));p.displayName="FormLabel";var f=(0,l.G)((function(e,n){var r=(0,t.NJ)(),i=(0,t.e)();if(!(null==r?void 0:r.isRequired))return null;var l=(0,u.cx)("chakra-form__required-indicator",e.className);return(0,d.jsx)(c.m.span,(0,a.Z)((0,a.Z)({},null==r?void 0:r.getRequiredIndicatorProps(e,n)),{},{__css:i.requiredIndicator,className:l}))}));f.displayName="RequiredIndicator"},2701:function(e,n,r){r.d(n,{NI:function(){return w},NJ:function(){return C},e:function(){return Z}});var a=r(1413),i=r(4925),t=r(9439),l=r(9886),o=r(4591),s=r(7872),c=r(9084),u=r(2996),d=r(2952),m=r(6992),p=r(2791),f=r(184),h=["id","isRequired","isInvalid","isDisabled","isReadOnly"],v=["getRootProps","htmlProps"],x=(0,l.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),g=(0,t.Z)(x,2),b=g[0],Z=g[1],j=(0,l.k)({strict:!1,name:"FormControlContext"}),y=(0,t.Z)(j,2),k=y[0],C=y[1];var w=(0,s.G)((function(e,n){var r=(0,c.jC)("Form",e),l=function(e){var n=e.id,r=e.isRequired,l=e.isInvalid,s=e.isDisabled,c=e.isReadOnly,u=(0,i.Z)(e,h),d=(0,p.useId)(),f=n||"field-".concat(d),v="".concat(f,"-label"),x="".concat(f,"-feedback"),g="".concat(f,"-helptext"),b=(0,p.useState)(!1),Z=(0,t.Z)(b,2),j=Z[0],y=Z[1],k=(0,p.useState)(!1),C=(0,t.Z)(k,2),w=C[0],I=C[1],N=(0,p.useState)(!1),R=(0,t.Z)(N,2),_=R[0],F=R[1],q=(0,p.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,a.Z)((0,a.Z)({id:g},e),{},{ref:(0,o.lq)(n,(function(e){e&&I(!0)}))})}),[g]),S=(0,p.useCallback)((function(){var e,n,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,a.Z)((0,a.Z)({},r),{},{ref:i,"data-focus":(0,m.PB)(_),"data-disabled":(0,m.PB)(s),"data-invalid":(0,m.PB)(l),"data-readonly":(0,m.PB)(c),id:null!=(e=r.id)?e:v,htmlFor:null!=(n=r.htmlFor)?n:f})}),[f,s,_,l,c,v]),G=(0,p.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,a.Z)((0,a.Z)({id:x},e),{},{ref:(0,o.lq)(n,(function(e){e&&y(!0)})),"aria-live":"polite"})}),[x]),P=(0,p.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,a.Z)((0,a.Z)((0,a.Z)({},e),u),{},{ref:n,role:"group"})}),[u]),T=(0,p.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,a.Z)((0,a.Z)({},e),{},{ref:n,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]);return{isRequired:!!r,isInvalid:!!l,isReadOnly:!!c,isDisabled:!!s,isFocused:!!_,onFocus:function(){return F(!0)},onBlur:function(){return F(!1)},hasFeedbackText:j,setHasFeedbackText:y,hasHelpText:w,setHasHelpText:I,id:f,labelId:v,feedbackId:x,helpTextId:g,htmlProps:u,getHelpTextProps:q,getErrorMessageProps:G,getRootProps:P,getLabelProps:S,getRequiredIndicatorProps:T}}((0,u.Lr)(e)),s=l.getRootProps,x=(l.htmlProps,(0,i.Z)(l,v)),g=(0,m.cx)("chakra-form-control",e.className);return(0,f.jsx)(k,{value:x,children:(0,f.jsx)(b,{value:r,children:(0,f.jsx)(d.m.div,(0,a.Z)((0,a.Z)({},s({},n)),{},{className:g,__css:r.container}))})})}));w.displayName="FormControl",(0,s.G)((function(e,n){var r=C(),i=Z(),t=(0,m.cx)("chakra-form__helper-text",e.className);return(0,f.jsx)(d.m.div,(0,a.Z)((0,a.Z)({},null==r?void 0:r.getHelpTextProps(e,n)),{},{__css:i.helperText,className:t}))})).displayName="FormHelperText"},7886:function(e,n,r){r.d(n,{I:function(){return v}});var a=r(1413),i=r(4925),t=r(2701),l=r(6992),o=["isDisabled","isInvalid","isReadOnly","isRequired"],s=["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"];function c(e){var n=function(e){var n,r,o,c=(0,t.NJ)(),u=e.id,d=e.disabled,m=e.readOnly,p=e.required,f=e.isRequired,h=e.isInvalid,v=e.isReadOnly,x=e.isDisabled,g=e.onFocus,b=e.onBlur,Z=(0,i.Z)(e,s),j=e["aria-describedby"]?[e["aria-describedby"]]:[];(null==c?void 0:c.hasFeedbackText)&&(null==c?void 0:c.isInvalid)&&j.push(c.feedbackId);(null==c?void 0:c.hasHelpText)&&j.push(c.helpTextId);return(0,a.Z)((0,a.Z)({},Z),{},{"aria-describedby":j.join(" ")||void 0,id:null!=u?u:null==c?void 0:c.id,isDisabled:null!=(n=null!=d?d:x)?n:null==c?void 0:c.isDisabled,isReadOnly:null!=(r=null!=m?m:v)?r:null==c?void 0:c.isReadOnly,isRequired:null!=(o=null!=p?p:f)?o:null==c?void 0:c.isRequired,isInvalid:null!=h?h:null==c?void 0:c.isInvalid,onFocus:(0,l.v0)(null==c?void 0:c.onFocus,g),onBlur:(0,l.v0)(null==c?void 0:c.onBlur,b)})}(e),r=n.isDisabled,c=n.isInvalid,u=n.isReadOnly,d=n.isRequired,m=(0,i.Z)(n,o);return(0,a.Z)((0,a.Z)({},m),{},{disabled:r,readOnly:u,required:d,"aria-invalid":(0,l.Qm)(c),"aria-required":(0,l.Qm)(d),"aria-readonly":(0,l.Qm)(u)})}var u=r(7872),d=r(9084),m=r(2996),p=r(2952),f=r(184),h=["htmlSize"],v=(0,u.G)((function(e,n){var r=e.htmlSize,t=(0,i.Z)(e,h),o=(0,d.jC)("Input",t),s=c((0,m.Lr)(t)),u=(0,l.cx)("chakra-input",e.className);return(0,f.jsx)(p.m.input,(0,a.Z)((0,a.Z)({size:r},s),{},{__css:o.field,ref:n,className:u}))}));v.displayName="Input",v.id="Input"},9229:function(e,n,r){r.d(n,{x:function(){return p}});var a=r(1413),i=r(4925),t=r(7872),l=r(9084),o=r(2996),s=r(2952),c=r(6992),u=r(5246),d=r(184),m=["className","align","decoration","casing"],p=(0,t.G)((function(e,n){var r=(0,l.mq)("Text",e),t=(0,o.Lr)(e),p=(t.className,t.align,t.decoration,t.casing,(0,i.Z)(t,m)),f=(0,u.oA)({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return(0,d.jsx)(s.m.p,(0,a.Z)((0,a.Z)((0,a.Z)({ref:n,className:(0,c.cx)("chakra-text",e.className)},f),p),{},{__css:r}))}));p.displayName="Text"}}]);
//# sourceMappingURL=953.b8f649f0.chunk.js.map