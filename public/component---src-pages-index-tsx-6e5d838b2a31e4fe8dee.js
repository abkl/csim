(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{146:function(e,t,n){"use strict";n.r(t);var r=n(9),a=(n(0),n(203)),i=n(150),o=n(183),s=n(201);t.default=function(){return Object(r.c)(o.a,null,Object(r.c)(s.a,{title:"Home",description:"Scouting Application for Team 4159",keywords:["scouting","application","Team 4159"]}),Object(r.c)("h1",null,"Hello guys!"),Object(r.c)("p",null,"Welcolme to the 2019 Scouting Application"),Object(r.c)(i.Link,{to:"/scouting-form"},Object(r.c)(a.a,null,"Scouting Form")))}},150:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return g}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return f});var r=n(9),a=n(0),i=n.n(a),o=n(4),s=n.n(o),c=n(149),l=n.n(c);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var d=n(155),u=n.n(d);n.d(t,"PageRenderer",function(){return u.a});var p=n(36);n.d(t,"parsePath",function(){return p.a});var m=i.a.createContext({}),f=function(e){return Object(r.c)(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):Object(r.c)("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},155:function(e,t,n){var r;e.exports=(r=n(171))&&r.default||r},169:function(e){e.exports={data:{site:{siteMetadata:{title:"Cardinal Scout Improved"}}}}},171:function(e,t,n){"use strict";n.r(t);n(58);var r=n(0),a=n.n(r),i=n(4),o=n.n(i),s=n(61),c=n(2),l=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return a.a.createElement(s.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},183:function(e,t,n){"use strict";var r=n(9),a=n(169),i=n(0),o=n.n(i),s=n(150),c=n(199),l=n.n(c),d=n(200),u=n.n(d),p=new l.a(u.a),m=p.rhythm,f=n(27),g=function(e){var t=e.siteTitle;return Object(r.c)("div",{css:Object(r.b)("background:linear-gradient(90deg,#d26ac2,#46c9e5);margin-bottom:1.45rem;padding:",m(1),";padding-top:",m(1.5),";")},Object(r.c)("h1",{css:Object(r.b)("display:inline-block;font-style:normal;padding-left:",m(1),";")},Object(r.c)(s.Link,{to:"/",css:Object(f.a)({color:"black",textDecoration:"none"},"")},t)))};t.a=function(e){var t=e.children;return Object(r.c)(s.StaticQuery,{query:"755544856",render:function(e){return Object(r.c)(o.a.Fragment,null,Object(r.c)(g,{siteTitle:e.site.siteMetadata.title}),Object(r.c)("div",{css:Object(r.b)("margin:0 auto;padding:",m(2),";padding-top:",m(1.5),";")},t))},data:a})}},201:function(e,t,n){"use strict";var r=n(9),a=n(202),i=(n(0),n(228)),o=n.n(i),s=n(150);t.a=function(e){var t=e.description,n=e.lang,i=void 0===n?"en":n,l=e.meta,d=void 0===l?[]:l,u=e.keywords,p=void 0===u?[]:u,m=e.title;return Object(r.c)(s.StaticQuery,{query:c,render:function(e){var n=t||e.site.siteMetadata.description;return Object(r.c)(o.a,{htmlAttributes:{lang:i},title:m,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:m},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:m},{name:"twitter:description",content:n}].concat(p.length>0?{name:"keywords",content:p.join(", ")}:[]).concat(d)})},data:a})};var c="1025518380"},202:function(e){e.exports={data:{site:{siteMetadata:{title:"Cardinal Scout Improved",description:"Revolutionizing scouting since 2018",author:"@thiskappaisgrey"}}}}},203:function(e,t,n){"use strict";var r=n(227),a=Object(r.a)("button",{target:"e244gug0"})({name:"18k9s45",styles:"display:inline-block;color:palevioletred;font-size:1em;margin:1em;padding:0.25em 1em;border:2px solid palevioletred;border-radius:3px;"});t.a=a},227:function(e,t,n){"use strict";var r=n(0),a=n(62),i=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|default|defer|dir|disabled|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|itemProp|itemScope|itemType|itemID|itemRef|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,o=Object(a.a)(function(e){return i.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91}),s=n(59),c=n.n(s),l=n(9),d=n(18),u=n(15),p=o,m=function(e){return"theme"!==e&&"innerRef"!==e},f=function(e){return"string"==typeof e&&e.charCodeAt(0)>96?p:m};t.a=function e(t,n){var a,i,o;void 0!==n&&(a=n.label,o=n.target,i=t.__emotion_forwardProp&&n.shouldForwardProp?function(e){return t.__emotion_forwardProp(e)&&n.shouldForwardProp(e)}:n.shouldForwardProp);var s=t.__emotion_real===t,p=s&&t.__emotion_base||t;"function"!=typeof i&&s&&(i=t.__emotion_forwardProp);var m=i||f(p),g=!m("as");return function(){var h=arguments,y=s&&void 0!==t.__emotion_styles?t.__emotion_styles.slice(0):[];if(void 0!==a&&y.push("label:"+a+";"),null==h[0]||void 0===h[0].raw)y.push.apply(y,h);else{y.push(h[0][0]);for(var v=h.length,b=1;b<v;b++)y.push(h[b],h[0][b])}var k=Object(l.d)(function(e,t,n){return Object(r.createElement)(l.a.Consumer,null,function(a){var s=g&&e.as||p,c="",l=[],h=e;if(null==e.theme){for(var v in h={},e)h[v]=e[v];h.theme=a}"string"==typeof e.className&&(c+=Object(d.a)(t.registered,l,e.className));var b=Object(u.a)(y.concat(l),t.registered,h);Object(d.b)(t,b,"string"==typeof s),c+=t.key+"-"+b.name,void 0!==o&&(c+=" "+o);var k=g&&void 0===i?f(s):m,w={};for(var x in e)g&&"as"===x||k(x)&&(w[x]=e[x]);return w.className=c,w.ref=n||e.innerRef,Object(r.createElement)(s,w)})});return k.displayName=void 0!==a?a:"Styled("+("string"==typeof p?p:p.displayName||p.name||"Component")+")",k.defaultProps=t.defaultProps,k.__emotion_real=k,k.__emotion_base=p,k.__emotion_styles=y,k.__emotion_forwardProp=i,Object.defineProperty(k,"toString",{value:function(){return"."+o}}),k.withComponent=function(t,r){return e(t,void 0!==r?c()({},n||{},r):n).apply(void 0,y)},k}}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-6e5d838b2a31e4fe8dee.js.map