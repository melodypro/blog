!function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c?c:a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b){function c(a,b){"use strict";this.el=a,this.options=d({},this.options),d(this.options,b),this._init()}var d=a("../helpers/extend");c.prototype.options={},c.prototype._init=function(){"use strict";this.setAltCaption()},c.prototype.setAltCaption=function(){"use strict";var a=document.createElement("figure"),b=document.createElement("figcaption");b.innerHTML=this.el.alt,this.el.parentNode.replaceChild(a,this.el),a.appendChild(this.el),a.appendChild(b)},b.exports=c},{"../helpers/extend":3}],2:[function(a,b){function c(a,b){"use strict";this.el=a,this.options=d({},this.options),d(this.options,b),this._init()}var d=a("../helpers/extend");c.prototype.options={},c.prototype._init=function(){"use strict";var a=this;a.el.onclick=function(b){b.preventDefault(),a.animate(),a.goToLink()}},c.prototype.animate=function(){"use strict";var a=this.getBounds(),b=this.getTweens(a);this.animateTo(b)},c.prototype.goToLink=function(){"use strict";var a=this.getTarget(),b=this.getDuration();this.preload(a),setTimeout(function(){window.location.href=a},b)},c.prototype.preload=function(a){"use strict";var b=new XMLHttpRequest;b.open("GET",a,!0),b.send(null)},c.prototype.getDuration=function(){"use strict";var a=window.getComputedStyle(this.el),b=a.transitionDuration;return b=b.indexOf("ms")>-1?parseFloat(b):1e3*parseFloat(b)},c.prototype.getTarget=function(a){"use strict";var b=this,c=a||b.el.href;return c},c.prototype.getBounds=function(){"use strict";var a={};return a.start=this.el.getBoundingClientRect(),this.el.classList.add("fullscreen"),a.end=this.el.getBoundingClientRect(),this.el.classList.remove("fullscreen"),a},c.prototype.getTweens=function(a){"use strict";var b={};return b.translate={},b.scale={},b.translate.y=a.end.top-a.start.top+"px",b.translate.x=a.end.left-a.start.left+"px",b.scale.y=a.end.height/a.start.height,b.scale.x=a.end.width/a.start.width,b},c.prototype.animateTo=function(a){"use strict";var b;this.el.classList.add("transitioning"),b="translate("+a.translate.x+", "+a.translate.y+")",b+=" scale("+a.scale.x+", "+a.scale.y+")",this.el.style.transform=b,this.el.style.mozTransform=b,this.el.style.webkitTransform=b},b.exports=c},{"../helpers/extend":3}],3:[function(a,b){function c(a,b){"use strict";for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);return a}b.exports=c},{}],4:[function(a){var b,c=a("./components/pageTransition.js"),d=a("./components/imageFixer"),e=a("fitvids"),f=document.getElementsByClassName("card"),g=document.getElementsByTagName("img");for(setTimeout(function(){"use strict";document.getElementsByTagName("main")[0].classList.remove("animate-in")},300),b=0;b<f.length;b+=1)new c(f.item(b));for(b=0;b<g.length;b+=1)new d(g.item(b));e()},{"./components/imageFixer":1,"./components/pageTransition.js":2,fitvids:5}],5:[function(a,b){"use strict";function c(a,b){return"string"==typeof a&&(b=a,a=document),Array.prototype.slice.call(a.querySelectorAll(b))}function d(a){if(!/fluid-width-video-wrapper/.test(a.parentNode.className)){var b=parseInt(a.getAttribute("width"),10),c=parseInt(a.getAttribute("height"),10),d=isNaN(b)?a.clientWidth:b,e=isNaN(c)?a.clientHeight:c,f=e/d;a.removeAttribute("width"),a.removeAttribute("height");var g=document.createElement("div");a.parentNode.insertBefore(g,a),g.className="fluid-width-video-wrapper",g.style.paddingTop=100*f+"%",g.appendChild(a)}}function e(a){return"undefined"==typeof a?"":Array.isArray(a)?a.join():a}function f(){var a=document.createElement("div");return a.innerHTML='<p>x</p><style id="fit-vids-style">'+i+"</style>",a.childNodes[1]}function g(a){return"[object Object]"===Object.prototype.toString.call(a)}var h=['iframe[src*="player.vimeo.com"]','iframe[src*="youtube.com"]','iframe[src*="youtube-nocookie.com"]','iframe[src*="kickstarter.com"][src*="video.html"]',"object"],i=".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}";b.exports=function(a,b){b=b||{},a=a||"body",g(a)&&(b=a,a="body");var i=c(a);if(!(i.length<1)){if(!document.getElementById("fit-vids-style")){var j=document.head||document.getElementsByTagName("head")[0];j.appendChild(f())}var k=e(b.players),l=e(h);k.length&&(l=l+","+k);for(var m=0,n=i.length;n>m;m++)for(var o=i[m],p=c(o,l),q=0,r=p.length;r>q;q++)d(p[q])}}},{}]},{},[4]);