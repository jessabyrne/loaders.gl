(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{282:function(t,e,n){"use strict";n.r(e);n(3);var i=n(0),o=n.n(i),a=n(407),r=(n(24),n(55),n(76),n(39),n(4),n(293)),s=n.n(r),l=(n(297),n(327)),c=n(335),u=n(666),p=n(465),d=n.n(p),m=n(621),f=n(553),h=n(410),v=n(622),g=n(667),y=n(636),b=n(642),_=n(618),w=n(635),E=n(340);function S(t,e,n,i,o,a,r){try{var s=t[a](r),l=s.value}catch(c){return void n(c)}s.done?e(l):Promise.resolve(l).then(i,o)}var L="https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/",T=L+"model-index.json",x="https://raw.githubusercontent.com/uber-common/deck.gl-data/master/luma.gl/examples/gltf/",M="DamagedHelmet/glTF-Binary/DamagedHelmet.glb";function O(){return P.apply(this,arguments)}function P(){var t;return t=s.a.mark(function t(){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(T).then(function(t){return t.json()});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t)}),(P=function(){var e=this,n=arguments;return new Promise(function(i,o){var a=t.apply(e,n);function r(t){S(a,i,o,r,s,"next",t)}function s(t){S(a,i,o,r,s,"throw",t)}r(void 0)})}).apply(this,arguments)}n(27),n(181);function R(t,e){var n=document.getElementById("modelSelector");if(n){var i=["glTF-Draco","glTF-Binary","glTF-Embedded","glTF"];t.forEach(function(t){var e=t.name,o=t.variants,a=i.find(function(t){return o[t]}),r=document.createElement("option");r.text=e+" ("+a+")",r.value=e+"/"+a+"/"+o[a],n.appendChild(r)}),n.onchange=function(t){var i=n&&n.value||M;e(L+"/"+i)}}}function D(t){var e=document.getElementById("showSelector");e&&(e.onchange=function(n){var i=e.value.split(" ").map(function(t){return parseFloat(t)});t({u_ScaleDiffBaseMR:i.slice(0,4),u_ScaleFGDSpec:i.slice(4)})});var n=document.getElementById("lightSelector");n&&(n.onchange=function(e){t({light:n.value})})}function A(t){var e=document.getElementById("iblSelector");e&&(e.onchange=function(n){t(function(t){switch(t){case"exclusive":return{imageBasedLightingEnvironment:!0,lights:!1};case"addition":return{imageBasedLightingEnvironment:!0,lights:!0};case"off":return{imageBasedLightingEnvironment:null,lights:!0};default:return{}}}(e.value))})}var F='\n<p><b>glTF Loader</b>.</p>\n<p>Rendered using luma.gl.</p>\n<div>\n  Model<br/>\n  <select id="modelSelector" style="border: 1px solid gray; width: 200px;">\n    <option value="'+M+'">Default</option>\n  </select>\n  <br>\n</div>\n<div>\n  Show<br/>\n  <select id="showSelector" style="border: 1px solid gray; width: 200px;">\n    <option value="0 0 0 0 0 0 0 0">Final Result</option>\n\n    <option value="0 1 0 0 0 0 0 0">Base Color</option>\n    <option value="0 0 1 0 0 0 0 0">Metallic</option>\n    <option value="0 0 0 1 0 0 0 0">Roughness</option>\n    <option value="1 0 0 0 0 0 0 0">Diffuse</option>\n\n    <option value="0 0 0 0 1 0 0 0">Specular Reflection</option>\n    <option value="0 0 0 0 0 1 0 0">Geometric Occlusion</option>\n    <option value="0 0 0 0 0 0 1 0">Microfacet Distribution</option>\n    <option value="0 0 0 0 0 0 0 1">Specular</option>\n  </select>\n  <br>\n</div>\n<div>\n  Regular Lights<br/>\n  <select id="lightSelector" style="border: 1px solid gray; width: 200px;">\n    <option value="default">Default</option>\n    <option value="ambient">Ambient Only</option>\n    <option value="directional1">1x Directional (Red) + Ambient</option>\n    <option value="directional3">3x Directional (RGB)</option>\n    <option value="point1far">1x Point Light Far (Red) + Ambient</option>\n    <option value="point1near">1x Point Light Near (Red) + Ambient</option>\n  </select>\n  <br>\n</div>\n<div>\n  Image-Based Light<br/>\n  <select id="iblSelector" style="border: 1px solid gray; width: 200px;">\n    <option value="exclusive">On (Exclusive)</option>\n    <option value="addition">On (Addition to Regular)</option>\n    <option value="off">Off (Only Regular)</option>\n  </select>\n  <br/>\n</div>\n<p><img src="https://img.shields.io/badge/WebVR-Supported-orange.svg" /></p>\n',I={default:{directionalLights:[{color:[255,255,255],direction:[0,.5,.5],intensity:1}]},ambient:{ambientLight:{color:[255,255,255],intensity:1}},directional1:{directionalLights:[{color:[255,0,0],direction:[1,0,0],intensity:1}],ambientLight:{color:[255,255,255],intensity:1}},directional3:{directionalLights:[{color:[255,0,0],direction:[1,0,0],intensity:1},{color:[0,0,255],direction:[0,0,1],intensity:1},{color:[0,255,0],direction:[0,1,0],intensity:1}]},point1far:{pointLights:[{color:[255,0,0],position:[200,0,0],attenuation:[0,0,.01],intensity:1}],ambientLight:{color:[255,255,255],intensity:1}},point1near:{pointLights:[{color:[255,0,0],position:[10,0,0],attenuation:[0,0,.01],intensity:1}],ambientLight:{color:[255,255,255],intensity:1}}};function B(t,e,n,i,o,a,r){try{var s=t[a](r),l=s.value}catch(c){return void n(c)}s.done?e(l):Promise.resolve(l).then(i,o)}var U,j=function(){function t(t,e){var n=void 0===e?{}:e,i=n.initialZoom,o=void 0===i?2:i,a=n.onDrop,r=void 0===a?function(t){}:a;this.mouse={lastX:0,lastY:0},this.translate=o,this.rotation=[0,0],this.rotationStart=[0,0],this.rotationAnimation=!0,this.onDrop=r,this._initializeEventHandling(t)}var e=t.prototype;return e.animate=function(t){this.rotationAnimation&&(this.rotation[1]=t/3600)},e.getMatrices=function(){var t=this.rotation,e=t[0],n=t[1];return{cameraPosition:[-this.translate*Math.sin(n)*Math.cos(-e),-this.translate*Math.sin(-e),this.translate*Math.cos(n)*Math.cos(-e)],viewMatrix:(new w.a).translate([0,0,-this.translate]).rotateX(e).rotateY(n)}},e._initializeEventHandling=function(t){var e=this;t.onwheel=function(t){e.translate+=t.deltaY/10,e.translate<.1&&(e.translate=.1),t.preventDefault()},t.onpointerdown=function(n){e.mouse.lastX=n.clientX,e.mouse.lastY=n.clientY,e.rotationStart[0]=e.rotation[0],e.rotationStart[1]=e.rotation[1],t.setPointerCapture(n.pointerId),n.preventDefault(),e.rotationAnimation=!1},t.onpointermove=function(t){if(t.buttons){var n=t.clientX-e.mouse.lastX,i=t.clientY-e.mouse.lastY;e.rotation[0]=e.rotationStart[0]+i/100,e.rotation[1]=e.rotationStart[1]+n/100}},t.ondragover=function(t){t.dataTransfer.dropEffect="link",t.preventDefault()},t.ondrop=function(){var t,n=(t=s.a.mark(function t(n){var i;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n.preventDefault(),n.dataTransfer.files&&1===n.dataTransfer.files.length&&(i=n.dataTransfer.files[0],e.onDrop(i));case 2:case"end":return t.stop()}},t)}),function(){var e=this,n=arguments;return new Promise(function(i,o){var a=t.apply(e,n);function r(t){B(a,i,o,r,s,"next",t)}function s(t){B(a,i,o,r,s,"throw",t)}r(void 0)})});return function(t){return n.apply(this,arguments)}}()},t}();function C(t,e,n,i,o,a,r){try{var s=t[a](r),l=s.value}catch(c){return void n(c)}s.done?e(l):Promise.resolve(l).then(i,o)}function G(t){return function(){var e=this,n=arguments;return new Promise(function(i,o){var a=t.apply(e,n);function r(t){C(a,i,o,r,s,"next",t)}function s(t){C(a,i,o,r,s,"throw",t)}r(void 0)})}}function k(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var X=((U={})[d.a.TEXTURE_CUBE_MAP_POSITIVE_X]="right",U[d.a.TEXTURE_CUBE_MAP_NEGATIVE_X]="left",U[d.a.TEXTURE_CUBE_MAP_POSITIVE_Y]="top",U[d.a.TEXTURE_CUBE_MAP_NEGATIVE_Y]="bottom",U[d.a.TEXTURE_CUBE_MAP_POSITIVE_Z]="front",U[d.a.TEXTURE_CUBE_MAP_NEGATIVE_Z]="back",U),N={gltf:{parserVersion:1},pbrDebug:!0,imageBasedLightingEnvironment:null,lights:!1};Object(l.b)([u.a]);var V=function(t){var e,n;n=t,(e=o).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,o.getInfo=function(){return F};var i=o.prototype;function o(e){var n,i=(void 0===e?{}:e).modelFile,o=void 0===i?null:i;return(n=t.call(this)||this).scenes=[],n.animator=null,n.gl=null,n.modelFile=o,n.glOptions={alpha:!1},n.controller=null,n.u_ScaleDiffBaseMR=[0,0,0,0],n.u_ScaleFGDSpec=[0,0,0,0],n.onInitialize=n.onInitialize.bind(k(n)),n.onRender=n.onRender.bind(k(n)),n}return i.getInfo=function(){return F},i.onInitialize=function(){var t=G(s.a.mark(function t(e){var n,i,o,a=this;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.gl,i=e.canvas,Object(m.a)(n,{depthTest:!0,blend:!1}),this.controller=new j(i,{initialZoom:2,onDrag:function(t){return a._loadGLTF(t)}}),this.loadOptions=Object.assign({},N),this.environment=new y.a(n,{brdfLutUrl:x+"/brdfLUT.png",getTexUrl:function(t,e,n){return x+"/papermill/"+t+"/"+t+"_"+X[e]+"_"+n+".jpg"}}),this.loadOptions.imageBasedLightingEnvironment=this.environment,this.gl=n,!this.modelFile){t.next=12;break}return t.next=10,this._loadGLTF(this.modelFile,{pbrDebug:!1,imageBasedLightingEnvironment:null,lights:!0});case 10:t.next=19;break;case 12:return t.next=14,O();case 14:return R(t.sent,function(){var t=G(s.a.mark(function t(e){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a._deleteScenes(),t.next=3,a._loadGLTF(e);case 3:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()),r=void 0,l=void 0,r=document.getElementById("modelSelector"),l=r&&r.value||M,o=L+"/"+l,t.next=19,this._loadGLTF(o);case 19:D(function(t){Object.assign(a,t)}),A(function(t){Object.assign(a.loadOptions,t),a.loadOptions.imageBasedLightingEnvironment&&(a.loadOptions.imageBasedLightingEnvironment=a.environment),a._rebuildModel()});case 21:case"end":return t.stop()}var r,l},t,this)}));return function(e){return t.apply(this,arguments)}}(),i.onRender=function(t){var e=this,n=t.gl,i=t.time,o=t.aspect,a=t.viewMatrix,r=t.projectionMatrix;Object(f.a)(n,{color:[.2,.2,.2,1],depth:!0}),this.controller.animate(i);var s=this.controller.getMatrices(),l=new w.a(a?Array.from(a):null);l.multiplyRight(s.viewMatrix);var c=r?new w.a(Array.from(r)):(new w.a).perspective({fov:Object(E.h)(40),aspect:o,near:.01,far:9e3});if(!this.scenes.length)return!1;this.animator&&this.animator.animate(i);var u=!0;return this.scenes[0].traverse(function(t,n){var i=n.worldMatrix,o=new w.a(c).multiplyRight(l).multiplyRight(i);e._applyLight(t),u=u&&t.draw({uniforms:{u_Camera:s.cameraPosition,u_MVPMatrix:o,u_ModelMatrix:i,u_NormalMatrix:new w.a(i).invert().transpose(),u_ScaleDiffBaseMR:e.u_ScaleDiffBaseMR,u_ScaleFGDSpec:e.u_ScaleFGDSpec},parameters:t.props.parameters})}),u},i._loadGLTF=function(){var t=G(s.a.mark(function t(e){var n,i,o,a,r,l;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=this.gl,i=this.loadOptions,this._deleteScenes(),t.next=4,Object(c.a)(e,b.a,Object.assign({},i,{gl:n,DracoLoader:u.a}));case 4:o=t.sent,a=o.gltf,r=o.scenes,l=o.animator,r[0].traverse(function(t,e){e.worldMatrix;return h.a.info(4,"Using model: ",t)()}),Object.assign(this,{scenes:r,animator:l,gltf:a});case 8:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),i._rebuildModel=function(){(this.gltf.meshes||[]).forEach(function(t){return delete t._mesh}),(this.gltf.nodes||[]).forEach(function(t){return delete t._node}),(this.gltf.bufferViews||[]).forEach(function(t){return delete t.lumaBuffers}),this._deleteScenes(),Object.assign(this,Object(_.a)(this.gl,this.gltf,this.loadOptions))},i._deleteScenes=function(){this.scenes.forEach(function(t){return t.delete()}),this.scenes=[],v.a.get("Resource Counts").forEach(function(t){var e=t.name,n=t.count;h.a.info(3,e+": "+n)()})},i._applyLight=function(t){t.updateModuleSettings({lightSources:I[this.light||"default"]})},o}(g.a);if("undefined"!=typeof window&&!window.website){var Y=new V;Y.start();var z=document.createElement("div");z.innerHTML=Y.getInfo(),document.body.appendChild(z)}n.d(e,"default",function(){return H});var H=function(t){var e,n;function i(){return t.apply(this,arguments)||this}return n=t,(e=i).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,i.prototype.render=function(){return o.a.createElement(a.a,Object.assign({AnimationLoop:V},this.props))},i}(o.a.Component)},407:function(t,e,n){"use strict";(function(t){n.d(e,"a",function(){return d});n(24);var i=n(0),o=n.n(i),a=n(539),r=n(622),s=n(664),l=n(665),c=n(408);void 0===t||t.navigator||(t.navigator={}),"undefined"!=typeof window&&(window.website=!0);var u={EXAMPLE_NOT_SUPPPORTED:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}},p={position:"fixed",fontSize:"12px",zIndex:1e4,color:"#fff",background:"#000",padding:"8px",opacity:.8},d=function(t){var e,n;function i(e){var n,i=(n=t.call(this,e)||this).props.AnimationLoop;return n.animationLoop=new i,n}n=t,(e=i).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var d=i.prototype;return d.componentDidMount=function(){var t=this.props.showStats;this.animationLoop._setDisplay(new s.a);var e=this.props.path;if(e){Object(a.b)("https://raw.githubusercontent.com/uber/loaders.gl/master/"+e)}this.animationLoop.start(this.props),t&&this._showStats(this.animationLoop)},d.componentWillUnmount=function(){this.animationLoop.stop(this.props),this.animationLoop.delete(),this.animationLoop=null},d._showStats=function(t){var e=this,n=new l.a(t.stats,{container:this.refs.renderStats,title:"Render Time",css:{header:{fontWeight:"bold"}},framesPerUpdate:60,formatters:{"CPU Time":"averageTime","GPU Time":"averageTime","Frame Rate":"fps"},resetOnUpdate:{"CPU Time":!0,"GPU Time":!0,"Frame Rate":!0}});r.a.get("Memory Usage").reset();var i=new l.a(r.a.get("Memory Usage"),{container:this.refs.memStats,css:{header:{fontWeight:"bold"}},framesPerUpdate:60,formatters:{"GPU Memory":"memory","Buffer Memory":"memory","Renderbuffer Memory":"memory","Texture Memory":"memory"}});this.animationFrame=window.requestAnimationFrame(function t(){n.update(),i.update(),e.animationFrame=window.requestAnimationFrame(t)})},d._stopStats=function(){window.cancelAnimationFrame(this.animationFrame)},d.render=function(){var t=this.props,e=t.name,n=t.panel,i=void 0===n||n,a=t.stats,r=t.sourceLink;if(this.animationLoop.isSupported&&!this.animationLoop.isSupported()){var s=this.animationLoop.getAltText?this.animationLoop.getAltText():"THIS EXAMPLE IS NOT SUPPORTED";return o.a.createElement("div",{style:u.EXAMPLE_NOT_SUPPPORTED},o.a.createElement("h2",null," ",s," "))}var l=this.props.AnimationLoop.getInfo()||this.animationLoop.getInfo&&this.animationLoop.getInfo();return o.a.createElement("div",{className:"fg",style:{width:"100%",height:"100%",padding:0,border:0}},a?o.a.createElement("div",{ref:"stats",className:"stats",style:p},o.a.createElement("div",{ref:"renderStats",className:"renderStats"}),o.a.createElement("div",{ref:"memStats",className:"memStats"})):null,o.a.createElement("canvas",{id:this.props.canvas,style:{width:"100%",height:"100%",padding:0,border:0}}),i?o.a.createElement(c.a,{name:e,controls:l,sourceLink:r}):null)},i}(i.Component);d.defaultProps={canvas:"example-canvas"},d.displayName="AnimationLoop"}).call(this,n(133))},408:function(t,e,n){"use strict";n.d(e,"a",function(){return a});n(24);var i=n(0),o=n.n(i);var a=function(t){var e,n;function i(){return t.apply(this,arguments)||this}return n=t,(e=i).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,i.prototype.render=function(){var t=this.props,e=t.name,n=t.controls,i=t.sourceLink;return o.a.createElement("div",{className:"options-panel top-right",tabIndex:"0"},o.a.createElement("h3",null,e),o.a.createElement("div",{className:"control-panel",dangerouslySetInnerHTML:{__html:n}}),i&&o.a.createElement("div",{className:"source-link"},o.a.createElement("a",{href:i,target:"_new"},"View Code ↗")))},i}(i.PureComponent)}}]);