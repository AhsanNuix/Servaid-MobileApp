(self.webpackChunkservaid_server=self.webpackChunkservaid_server||[]).push([[695],{62031:(A,L,p)=>{"use strict";A.exports=p(59525)},59525:function(A,L,p){(function(m,R){A.exports=R(p(67294),p(78384))})(this,function(m,R){return function(n){var d={};function t(a){if(d[a])return d[a].exports;var o=d[a]={i:a,l:!1,exports:{}};return n[a].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=n,t.c=d,t.d=function(a,o,u){t.o(a,o)||Object.defineProperty(a,o,{enumerable:!0,get:u})},t.r=function(a){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},t.t=function(a,o){if(1&o&&(a=t(a)),8&o||4&o&&typeof a=="object"&&a&&a.__esModule)return a;var u=Object.create(null);if(t.r(u),Object.defineProperty(u,"default",{enumerable:!0,value:a}),2&o&&typeof a!="string")for(var s in a)t.d(u,s,function(c){return a[c]}.bind(null,s));return u},t.n=function(a){var o=a&&a.__esModule?function(){return a.default}:function(){return a};return t.d(o,"a",o),o},t.o=function(a,o){return Object.prototype.hasOwnProperty.call(a,o)},t.p="",t(t.s=110)}({0:function(n,d,t){n.exports=t(19)()},1:function(n,d){n.exports=m},10:function(n,d,t){var a=t(25),o=t(26),u=t(22),s=t(27);n.exports=function(c,l){return a(c)||o(c,l)||u(c,l)||s()},n.exports.default=n.exports,n.exports.__esModule=!0},110:function(n,d,t){"use strict";t.r(d),t.d(d,"Main",function(){return e}),t.d(d,"SkipToContent",function(){return k});var a,o=t(5),u=t.n(o),s=t(4),c=t.n(s),l=t(3),v=t.n(l),b=t(1),T=t.n(b),i=t(0),S=t.n(i),E=t(2),x=t.n(E),D=["labelledBy"],h=x.a.main(a||(a=v()([`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`]))),e=function(M){var w=M.labelledBy,U=c()(M,D),H=w||"main-content-title";return T.a.createElement(h,u()({"aria-labelledby":H,id:"main-content",tabIndex:-1},U))};e.defaultProps={labelledBy:void 0},e.propTypes={labelledBy:S.a.string};var r,f=t(6),j=x()(f.Box)(r||(r=v()([`
  text-decoration: none;
  position: absolute;
  z-index: 9999;
  left: -100%;
  top: -100%;

  &:focus {
    left: `,`;
    top: `,`;
  }
`])),function(M){return M.theme.spaces[3]},function(M){return M.theme.spaces[3]}),k=function(M){var w=M.children;return T.a.createElement(j,{as:"a",href:"#main-content",background:"primary600",color:"neutral0",padding:3,hasRadius:!0},w)};k.propTypes={children:S.a.node.isRequired}},13:function(n,d){function t(a){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?(n.exports=t=function(o){return typeof o},n.exports.default=n.exports,n.exports.__esModule=!0):(n.exports=t=function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},n.exports.default=n.exports,n.exports.__esModule=!0),t(a)}n.exports=t,n.exports.default=n.exports,n.exports.__esModule=!0},19:function(n,d,t){"use strict";var a=t(20);function o(){}function u(){}u.resetWarningCache=o,n.exports=function(){function s(v,b,T,i,S,E){if(E!==a){var x=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw x.name="Invariant Violation",x}}function c(){return s}s.isRequired=s;var l={array:s,bool:s,func:s,number:s,object:s,string:s,symbol:s,any:s,arrayOf:c,element:s,elementType:s,instanceOf:c,node:s,objectOf:c,oneOf:c,oneOfType:c,shape:c,exact:c,checkPropTypes:u,resetWarningCache:o};return l.PropTypes=l,l}},2:function(n,d){n.exports=R},20:function(n,d,t){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},21:function(n,d){n.exports=function(t,a){(a==null||a>t.length)&&(a=t.length);for(var o=0,u=new Array(a);o<a;o++)u[o]=t[o];return u},n.exports.default=n.exports,n.exports.__esModule=!0},22:function(n,d,t){var a=t(21);n.exports=function(o,u){if(o){if(typeof o=="string")return a(o,u);var s=Object.prototype.toString.call(o).slice(8,-1);return s==="Object"&&o.constructor&&(s=o.constructor.name),s==="Map"||s==="Set"?Array.from(o):s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?a(o,u):void 0}},n.exports.default=n.exports,n.exports.__esModule=!0},24:function(n,d){n.exports=function(t,a){if(t==null)return{};var o,u,s={},c=Object.keys(t);for(u=0;u<c.length;u++)o=c[u],a.indexOf(o)>=0||(s[o]=t[o]);return s},n.exports.default=n.exports,n.exports.__esModule=!0},25:function(n,d){n.exports=function(t){if(Array.isArray(t))return t},n.exports.default=n.exports,n.exports.__esModule=!0},26:function(n,d){n.exports=function(t,a){var o=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(o!=null){var u,s,c=[],l=!0,v=!1;try{for(o=o.call(t);!(l=(u=o.next()).done)&&(c.push(u.value),!a||c.length!==a);l=!0);}catch(b){v=!0,s=b}finally{try{l||o.return==null||o.return()}finally{if(v)throw s}}return c}},n.exports.default=n.exports,n.exports.__esModule=!0},27:function(n,d){n.exports=function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},n.exports.default=n.exports,n.exports.__esModule=!0},3:function(n,d){n.exports=function(t,a){return a||(a=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(a)}}))},n.exports.default=n.exports,n.exports.__esModule=!0},4:function(n,d,t){var a=t(24);n.exports=function(o,u){if(o==null)return{};var s,c,l=a(o,u);if(Object.getOwnPropertySymbols){var v=Object.getOwnPropertySymbols(o);for(c=0;c<v.length;c++)s=v[c],u.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(o,s)&&(l[s]=o[s])}return l},n.exports.default=n.exports,n.exports.__esModule=!0},5:function(n,d){function t(){return n.exports=t=Object.assign||function(a){for(var o=1;o<arguments.length;o++){var u=arguments[o];for(var s in u)Object.prototype.hasOwnProperty.call(u,s)&&(a[s]=u[s])}return a},n.exports.default=n.exports,n.exports.__esModule=!0,t.apply(this,arguments)}n.exports=t,n.exports.default=n.exports,n.exports.__esModule=!0},6:function(n,d,t){"use strict";t.r(d),t.d(d,"Box",function(){return h});var a,o=t(3),u=t.n(o),s=t(2),c=t.n(s),l=t(7),v=t(1),b=t.n(v),T=t(0),i=t.n(T),S=function(e){return b.a.createElement("div",e)},E={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},x={_hover:i.a.func,background:i.a.string,basis:i.a.oneOfType([i.a.string,i.a.string]),borderColor:i.a.string,children:i.a.oneOfType([i.a.node,i.a.string]),color:i.a.string,flex:i.a.oneOfType([i.a.string,i.a.string]),grow:i.a.oneOfType([i.a.string,i.a.string]),hasRadius:i.a.bool,hiddenS:i.a.bool,hiddenXS:i.a.bool,padding:i.a.oneOfType([i.a.number,i.a.arrayOf(i.a.number)]),paddingBottom:i.a.oneOfType([i.a.number,i.a.arrayOf(i.a.number)]),paddingLeft:i.a.oneOfType([i.a.number,i.a.arrayOf(i.a.number)]),paddingRight:i.a.oneOfType([i.a.number,i.a.arrayOf(i.a.number)]),paddingTop:i.a.oneOfType([i.a.number,i.a.arrayOf(i.a.number)]),shadow:i.a.string,shrink:i.a.oneOfType([i.a.string,i.a.string])};S.defaultProps=E,S.propTypes=x;var D={color:!0},h=c.a.div.withConfig({shouldForwardProp:function(e,r){return!D[e]&&r(e)}})(a||(a=u()([`
  // Font
  font-size: `,`;

  // Colors
  background: `,`;
  color: `,`;

  // Spaces
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`

  // Responsive hiding
  `,`
  `,`
  

  // Borders
  border-radius: `,`;
  border-style: `,`;
  border-width: `,`;
  border-color: `,`;
  border: `,`;

  // Shadows
  box-shadow: `,`;

  // Handlers
  pointer-events: `,`;
  &:hover {
    `,`
  }

  // Display
  display: `,`;

  // Position
  position: `,`;
  left: `,`;
  right: `,`;
  top: `,`;
  bottom: `,`;
  z-index: `,`;
  overflow: `,`;
  cursor: `,`;

  // Size
  width: `,`;
  max-width: `,`;
  min-width: `,`;
  height: `,`;
  max-height: `,`;
  min-height: `,`;

  // Animation
  transition: `,`;
  transform: `,`;
  animation: `,`;

  //Flexbox children props
  flex-shrink: `,`;
  flex-grow: `,`;
  flex-basis: `,`;
  flex: `,`;

  // Text
  text-align: `,`;
  text-transform: `,`;
  line-height: `,`;

  // Cursor
  cursor: `,`;
`])),function(e){var r=e.fontSize;return e.theme.fontSizes[r]||r},function(e){var r=e.theme,f=e.background;return r.colors[f]},function(e){var r=e.theme,f=e.color;return r.colors[f]},function(e){var r=e.theme,f=e.padding;return Object(l.a)("padding",f,r)},function(e){var r=e.theme,f=e.paddingTop;return Object(l.a)("padding-top",f,r)},function(e){var r=e.theme,f=e.paddingRight;return Object(l.a)("padding-right",f,r)},function(e){var r=e.theme,f=e.paddingBottom;return Object(l.a)("padding-bottom",f,r)},function(e){var r=e.theme,f=e.paddingLeft;return Object(l.a)("padding-left",f,r)},function(e){var r=e.theme,f=e.marginLeft;return Object(l.a)("margin-left",f,r)},function(e){var r=e.theme,f=e.marginRight;return Object(l.a)("margin-right",f,r)},function(e){var r=e.theme,f=e.marginTop;return Object(l.a)("margin-top",f,r)},function(e){var r=e.theme,f=e.marginBottom;return Object(l.a)("margin-bottom",f,r)},function(e){var r=e.theme;return e.hiddenS?"".concat(r.mediaQueries.tablet," { display: none; }"):void 0},function(e){var r=e.theme;return e.hiddenXS?"".concat(r.mediaQueries.mobile," { display: none; }"):void 0},function(e){var r=e.theme,f=e.hasRadius,j=e.borderRadius;return f?r.borderRadius:j},function(e){return e.borderStyle},function(e){return e.borderWidth},function(e){var r=e.borderColor;return e.theme.colors[r]},function(e){var r=e.theme,f=e.borderColor,j=e.borderStyle,k=e.borderWidth;if(f&&!j&&!k)return"1px solid ".concat(r.colors[f])},function(e){var r=e.theme,f=e.shadow;return r.shadows[f]},function(e){return e.pointerEvents},function(e){var r=e._hover,f=e.theme;return r?r(f):void 0},function(e){return e.display},function(e){return e.position},function(e){var r=e.left;return e.theme.spaces[r]||r},function(e){var r=e.right;return e.theme.spaces[r]||r},function(e){var r=e.top;return e.theme.spaces[r]||r},function(e){var r=e.bottom;return e.theme.spaces[r]||r},function(e){return e.zIndex},function(e){return e.overflow},function(e){return e.cursor},function(e){var r=e.width;return e.theme.spaces[r]||r},function(e){var r=e.maxWidth;return e.theme.spaces[r]||r},function(e){var r=e.minWidth;return e.theme.spaces[r]||r},function(e){var r=e.height;return e.theme.spaces[r]||r},function(e){var r=e.maxHeight;return e.theme.spaces[r]||r},function(e){var r=e.minHeight;return e.theme.spaces[r]||r},function(e){return e.transition},function(e){return e.transform},function(e){return e.animation},function(e){return e.shrink},function(e){return e.grow},function(e){return e.basis},function(e){return e.flex},function(e){return e.textAlign},function(e){return e.textTransform},function(e){return e.lineHeight},function(e){return e.cursor});h.defaultProps=E,h.propTypes=x},7:function(n,d,t){"use strict";var a=t(10),o=t.n(a),u=t(13),s=t.n(u);d.a=function(c,l,v){var b=l;if(Array.isArray(l)||s()(l)!=="object"||(b=[l==null?void 0:l.desktop,l==null?void 0:l.tablet,l==null?void 0:l.mobile]),b!==void 0){if(Array.isArray(b)){var T=b,i=o()(T,3),S=i[0],E=i[1],x=i[2],D="".concat(c,": ").concat(v.spaces[S],";");return E!==void 0&&(D+="".concat(v.mediaQueries.tablet,`{
          `).concat(c,": ").concat(v.spaces[E],`;
        }`)),x!==void 0&&(D+="".concat(v.mediaQueries.mobile,`{
          `).concat(c,": ").concat(v.spaces[x],`;
        }`)),D}var h=v.spaces[b]||b;return"".concat(c,": ").concat(h,";")}}}})})},56752:(A,L,p)=>{"use strict";p.r(L),p.d(L,{SettingsPage:()=>Z,default:()=>J});var m=p(67294),R=p(15482),n=p(97132),d=p(68547),t=p(84734),a=p.n(t),o=p(5493),u=p(67826),s=p(47857),c=p(49425),l=p(19408),v=p(62031),b=p(9008),T=p(34626),i=p(78862),S=p(9669),E=p.n(S),x=p(18446),D=p.n(x),h=p(50779);const r=g=>g;var f=p(8041),j=p(36968),k=p.n(j);const M={isLoading:!0,isSubmiting:!1,initialData:{responsiveDimensions:!0,sizeOptimization:!0,autoOrientation:!1,videoPreview:!1},modifiedData:{responsiveDimensions:!0,sizeOptimization:!0,autoOrientation:!1,videoPreview:!1}},U=(g,P)=>(0,f.default)(g,y=>{switch(P.type){case"CANCEL_CHANGES":{y.modifiedData=g.initialData;break}case"GET_DATA_SUCCEEDED":{y.isLoading=!1,y.initialData=P.data,y.modifiedData=P.data;break}case"ON_CHANGE":{k()(y,["modifiedData",...P.keys.split(".")],P.value);break}case"ON_SUBMIT":{y.isSubmiting=!0;break}case"SUBMIT_SUCCEEDED":{y.initialData=g.modifiedData,y.isSubmiting=!1;break}case"ON_SUBMIT_ERROR":{y.isSubmiting=!1;break}default:return g}});var H=p(24442),V=p(25108),Y=(g,P,y)=>new Promise((F,N)=>{var G=O=>{try{B(y.next(O))}catch(z){N(z)}},W=O=>{try{B(y.throw(O))}catch(z){N(z)}},B=O=>O.done?F(O.value):Promise.resolve(O.value).then(G,W);B((y=y.apply(g,P)).next())});const Z=()=>{const{formatMessage:g}=(0,n.useIntl)(),{lockApp:P,unlockApp:y}=(0,d.useOverlayBlocker)(),F=(0,d.useNotification)();(0,d.useFocusWhenNavigate)();const[{initialData:N,isLoading:G,isSubmiting:W,modifiedData:B},O]=(0,m.useReducer)(U,M,r),z=(0,m.useRef)(!0);(0,m.useEffect)(()=>{const I=E().CancelToken.source(),q=()=>Y(void 0,null,function*(){try{const{data:{data:X}}=yield h.be.get((0,h.IF)("settings"),{cancelToken:I.token});O({type:"GET_DATA_SUCCEEDED",data:X})}catch(X){V.error(X)}});return z.current&&q(),()=>{I.cancel("Operation canceled by the user."),z.current=!1}},[]);const $=D()(N,B),K=C=>Y(void 0,null,function*(){if(C.preventDefault(),!$){P(),O({type:"ON_SUBMIT"});try{yield h.be.put((0,h.IF)("settings"),B),O({type:"SUBMIT_SUCCEEDED"}),F({type:"success",message:{id:"notification.form.success.fields"}})}catch(I){V.error(I),O({type:"ON_SUBMIT_ERROR"})}y()}}),Q=({target:{name:C,value:I}})=>{O({type:"ON_CHANGE",keys:C,value:I})};return m.createElement(v.Main,{tabIndex:-1},m.createElement(R.Helmet,{title:g({id:(0,h.OB)("page.title"),defaultMessage:"Settings - Media Libray"})}),m.createElement("form",{onSubmit:K},m.createElement(i.HeaderLayout,{title:g({id:(0,h.OB)("settings.header.label"),defaultMessage:"Media Library"}),primaryAction:m.createElement(l.Button,{disabled:$,"data-testid":"save-button",loading:W,type:"submit",startIcon:m.createElement(a(),null),size:"L"},g({id:"global.save",defaultMessage:"Save"})),subtitle:g({id:(0,h.OB)("settings.sub-header.label"),defaultMessage:"Configure the settings for the Media Library"})}),m.createElement(i.ContentLayout,null,G?m.createElement(d.LoadingIndicatorPage,null):m.createElement(i.Layout,null,m.createElement(b.Stack,{spacing:12},m.createElement(o.Box,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},m.createElement(b.Stack,{spacing:4},m.createElement(u.Flex,null,m.createElement(c.Typography,{variant:"delta",as:"h2"},g({id:(0,h.OB)("settings.blockTitle"),defaultMessage:"Asset management"}))),m.createElement(T.Grid,{gap:6},m.createElement(T.GridItem,{col:6,s:12},m.createElement(s.ToggleInput,{"aria-label":"responsiveDimensions","data-testid":"responsiveDimensions",checked:B.responsiveDimensions,hint:g({id:(0,h.OB)("settings.form.responsiveDimensions.description"),defaultMessage:"Enabling this option will generate multiple formats (small, medium and large) of the uploaded asset."}),label:g({id:(0,h.OB)("settings.form.responsiveDimensions.label"),defaultMessage:"Responsive friendly upload"}),name:"responsiveDimensions",offLabel:g({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:g({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:C=>{Q({target:{name:"responsiveDimensions",value:C.target.checked}})}})),m.createElement(T.GridItem,{col:6,s:12},m.createElement(s.ToggleInput,{"aria-label":"sizeOptimization","data-testid":"sizeOptimization",checked:B.sizeOptimization,hint:g({id:(0,h.OB)("settings.form.sizeOptimization.description"),defaultMessage:"Enabling this option will reduce the image size and slightly reduce its quality."}),label:g({id:(0,h.OB)("settings.form.sizeOptimization.label"),defaultMessage:"Size optimization"}),name:"sizeOptimization",offLabel:g({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:g({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:C=>{Q({target:{name:"sizeOptimization",value:C.target.checked}})}})),m.createElement(T.GridItem,{col:6,s:12},m.createElement(s.ToggleInput,{"aria-label":"autoOrientation","data-testid":"autoOrientation",checked:B.autoOrientation,hint:g({id:(0,h.OB)("settings.form.autoOrientation.description"),defaultMessage:"Enabling this option will automatically rotate the image according to EXIF orientation tag."}),label:g({id:(0,h.OB)("settings.form.autoOrientation.label"),defaultMessage:"Auto orientation"}),name:"autoOrientation",offLabel:g({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:g({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:C=>{Q({target:{name:"autoOrientation",value:C.target.checked}})}}))))))))))},J=()=>m.createElement(d.CheckPagePermissions,{permissions:H.Z.settings},m.createElement(Z,null))}}]);
