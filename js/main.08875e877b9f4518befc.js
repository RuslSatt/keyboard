(()=>{"use strict";const e=[{code:"Backquote",ru:"ё",en:"`",shiftRu:"Ё",shiftEn:"~"},{code:"Digit1",ru:"1",en:"1",shiftRu:"!",shiftEn:"!"},{code:"Digit2",ru:"2",en:"2",shiftRu:'"',shiftEn:"@"},{code:"Digit3",ru:"3",en:"3",shiftRu:"№",shiftEn:"#"},{code:"Digit4",ru:"4",en:"4",shiftRu:";",shiftEn:"$"},{code:"Digit5",ru:"5",en:"5",shiftRu:"%",shiftEn:"%"},{code:"Digit6",ru:"6",en:"6",shiftRu:":",shiftEn:"^"},{code:"Digit7",ru:"7",en:"7",shiftRu:"?",shiftEn:"&"},{code:"Digit8",ru:"8",en:"8",shiftRu:"*",shiftEn:"*"},{code:"Digit9",ru:"9",en:"9",shiftRu:"(",shiftEn:"("},{code:"Digit0",ru:"0",en:"0",shiftRu:")",shiftEn:")"},{code:"Minus",ru:"-",en:"-",shiftRu:"_",shiftEn:"_"},{code:"Equal",ru:"=",en:"=",shiftRu:"+",shiftEn:"+"},{code:"Backspace",ru:"Backspace",en:"Backspace",shiftRu:"Backspace",shiftEn:"Backspace",br:!0},{code:"Tab",ru:"Tab",en:"Tab",shiftRu:"Tab",shiftEn:"Tab"},{code:"KeyQ",ru:"й",en:"q",shiftRu:"Й",shiftEn:"Q"},{code:"KeyW",ru:"ц",en:"w",shiftRu:"Ц",shiftEn:"W"},{code:"KeyE",ru:"у",en:"e",shiftRu:"У",shiftEn:"E"},{code:"KeyR",ru:"к",en:"r",shiftRu:"К",shiftEn:"R"},{code:"KeyT",ru:"е",en:"t",shiftRu:"Е",shiftEn:"T"},{code:"KeyY",ru:"н",en:"y",shiftRu:"Н",shiftEn:"Y"},{code:"KeyU",ru:"г",en:"u",shiftRu:"Г",shiftEn:"U"},{code:"KeyI",ru:"ш",en:"i",shiftRu:"Ш",shiftEn:"I"},{code:"KeyO",ru:"щ",en:"o",shiftRu:"Щ",shiftEn:"O"},{code:"KeyP",ru:"з",en:"p",shiftRu:"З",shiftEn:"P"},{code:"BracketLeft",ru:"х",en:"[",shiftRu:"Х",shiftEn:"{"},{code:"BracketRight",ru:"ъ",en:"]",shiftRu:"Ъ",shiftEn:"}"},{code:"Backslash",ru:"\\",en:"\\",shiftRu:"/",shiftEn:"|"},{code:"Delete",ru:"Del",en:"Del",shiftRu:"Del",shiftEn:"Del",br:!0},{code:"CapsLock",ru:"CapsLk",en:"CapsLk",shiftRu:"CapsLk",shiftEn:"CapsLk"},{code:"KeyA",ru:"ф",en:"a",shiftRu:"Ф",shiftEn:"A"},{code:"KeyS",ru:"ы",en:"s",shiftRu:"Ы",shiftEn:"S"},{code:"KeyD",ru:"в",en:"d",shiftRu:"В",shiftEn:"D"},{code:"KeyF",ru:"а",en:"f",shiftRu:"А",shiftEn:"F"},{code:"KeyG",ru:"п",en:"g",shiftRu:"П",shiftEn:"G"},{code:"KeyH",ru:"р",en:"h",shiftRu:"Р",shiftEn:"H"},{code:"KeyJ",ru:"о",en:"j",shiftRu:"О",shiftEn:"J"},{code:"KeyK",ru:"л",en:"k",shiftRu:"Л",shiftEn:"K"},{code:"KeyL",ru:"д",en:"l",shiftRu:"Д",shiftEn:"L"},{code:"Semicolon",ru:"ж",en:";",shiftRu:"Ж",shiftEn:":"},{code:"Quote",ru:"э",en:"'",shiftRu:"Э",shiftEn:'"'},{code:"Enter",ru:"Enter",en:"Enter",shiftRu:"Enter",shiftEn:"Enter",br:!0},{code:"ShiftLeft",ru:"Shift",en:"Shift",shiftRu:"Shift",shiftEn:"Shift"},{code:"KeyZ",ru:"я",en:"z",shiftRu:"Я",shiftEn:"Z"},{code:"KeyX",ru:"ч",en:"x",shiftRu:"Ч",shiftEn:"X"},{code:"KeyC",ru:"с",en:"c",shiftRu:"С",shiftEn:"C"},{code:"KeyV",ru:"м",en:"v",shiftRu:"М",shiftEn:"V"},{code:"KeyB",ru:"и",en:"b",shiftRu:"И",shiftEn:"B"},{code:"KeyN",ru:"т",en:"n",shiftRu:"Т",shiftEn:"N"},{code:"KeyM",ru:"ь",en:"m",shiftRu:"Ь",shiftEn:"M"},{code:"Comma",ru:"б",en:",",shiftRu:"Б",shiftEn:"<"},{code:"Period",ru:"ю",en:".",shiftRu:"Ю",shiftEn:">"},{code:"Slash",ru:".",en:"/",shiftRu:",",shiftEn:"?"},{code:"ArrowUp",ru:"▲",en:"▲",shiftRu:"▲",shiftEn:"▲"},{code:"ShiftRight",ru:"Shift",en:"Shift",shiftRu:"Shift",shiftEn:"Shift",br:!0},{code:"ControlLeft",ru:"Ctrl",en:"Ctrl",shiftRu:"Ctrl",shiftEn:"Ctrl"},{code:"AltLeft",ru:"Alt",en:"Alt",shiftRu:"Alt",shiftEn:"Alt"},{code:"Space",ru:"Space",en:"Space",shiftRu:"Space",shiftEn:"Space"},{code:"AltRight",ru:"Alt",en:"Alt",shiftRu:"Alt",shiftEn:"Alt"},{code:"ControlRight",ru:"Ctrl",en:"Ctrl",shiftRu:"Ctrl",shiftEn:"Ctrl"},{code:"ArrowLeft",ru:"◄",en:"◄",shiftRu:"◄",shiftEn:"◄"},{code:"ArrowDown",ru:"▼",en:"▼",shiftRu:"▼",shiftEn:"▼"},{code:"ArrowRight",ru:"►",en:"►",shiftRu:"►",shiftEn:"►"},{code:"Lang",ru:"RU",en:"EN",shiftRu:"RU",shiftEn:"EN"}];function t(e,t){for(var s=0;s<t.length;s++){var i=t[s];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var s=new(function(){function s(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),this.elements={keyboard:null,keyboardContainer:null,area:null,keysAll:[]},this.value="",this.keys=e,this.isCaps=!1,this.isShift=!1,this.lang="ru",this.activeCaps=!1,this.activeCapsDown=!1,this.langFlag=!1,this.crtlActive=!1}var i,a,n;return i=s,(a=[{key:"init",value:function(){this.getLocalStorage(),this.elements.keyboard=document.createElement("div"),this.elements.keyboardContainer=document.createElement("div"),this.elements.keyboard.classList.add("keyboard"),this.elements.keyboardContainer.classList.add("keyboard__container"),document.body.append(this.elements.keyboard),this.elements.keyboardContainer.append(this.render()),this.elements.keyboard.append(this.elements.keyboardContainer),this.elements.keysAll=document.querySelectorAll(".keyboard__key"),this.elements.area=document.querySelector("textarea"),this.elements.area.value=this.value}},{key:"render",value:function(){var e=this,t=document.createDocumentFragment();return this.keys.forEach((function(s){var i=document.createElement("button");i.classList.add("keyboard__key"),"ru"===e.lang?i.innerHTML=s.ru:i.innerHTML=s.en,t.append(i),document.addEventListener("pointerup",(function(){i.classList.contains("caps")||i.classList.remove("active")}));var a=function(){i.addEventListener("pointerup",(function(){i.classList.remove("active")}))};switch(s.code){case"Backspace":i.classList.add("backspace"),i.setAttribute("data-code","".concat(s.code)),i.addEventListener("pointerdown",(function(t){t.preventDefault(),i.classList.add("active"),e.backspaceEvent()})),a();break;case"Tab":i.classList.add("tab"),i.setAttribute("data-code","".concat(s.code)),i.addEventListener("pointerdown",(function(t){t.preventDefault(),i.classList.add("active"),e.tabEvent()})),a();break;case"CapsLock":i.classList.add("caps"),i.setAttribute("data-code","".concat(s.code)),i.addEventListener("click",(function(t){t.preventDefault(),e.activeCaps=!e.activeCaps,e.activeCaps?i.classList.add("active"):i.classList.remove("active"),e.capsLock()}));break;case"Enter":i.classList.add("enter"),i.setAttribute("data-code","".concat(s.code)),i.addEventListener("pointerdown",(function(t){t.preventDefault(),i.classList.add("active"),e.enterEvent()})),a();break;case"ShiftLeft":i.classList.add("shift_left"),i.setAttribute("data-code","".concat(s.code)),e.shiftEvent(i);break;case"ShiftRight":i.classList.add("shift_right"),i.setAttribute("data-code","".concat(s.code)),e.shiftEvent(i);break;case"Space":i.classList.add("space"),i.setAttribute("data-code","".concat(s.code)),i.addEventListener("pointerdown",(function(t){t.preventDefault(),i.classList.add("active"),e.spaceEvent()})),a();break;case"Lang":i.classList.add("lang"),i.setAttribute("data-code","".concat(s.code)),i.addEventListener("pointerdown",(function(t){t.preventDefault(),i.classList.add("active"),e.changeLang()})),a();break;case"Delete":i.addEventListener("pointerdown",(function(t){t.preventDefault(),i.classList.add("active"),e.value="",e.setValue()})),a(),i.classList.add("delete"),i.setAttribute("data-code","".concat(s.code));break;case"AltRight":i.classList.add("alt_right"),i.setAttribute("data-code","".concat(s.code)),i.addEventListener("pointerdown",(function(e){e.preventDefault(),i.classList.add("active")})),a();break;case"AltLeft":i.classList.add("alt_left"),i.setAttribute("data-code","".concat(s.code)),i.addEventListener("pointerdown",(function(e){e.preventDefault(),i.classList.add("active")})),a();break;case"ControlLeft":i.classList.add("ctrl_left"),i.setAttribute("data-code","".concat(s.code)),i.addEventListener("pointerdown",(function(e){e.preventDefault(),i.classList.add("active")})),a();break;default:i.addEventListener("pointerdown",(function(t){t.preventDefault();var a=e.elements.area,n=a.selectionStart,c=a.selectionEnd,r=function(t){e.value=e.value.substring(0,n)+t+e.value.substring(c)};i.classList.add("active"),1===s.shiftRu.length&&1===s.ru.length&&("ru"===e.lang?e.isCaps?e.isShift?r(s.shiftRu.toLowerCase()):r(s.ru.toUpperCase()):e.isShift?r(s.shiftRu):r(s.ru):e.isCaps?e.isShift?r(s.shiftEn.toLowerCase()):r(s.en.toUpperCase()):e.isShift?r(s.shiftEn):r(s.en)),e.setValue(),a.focus(),a.selectionEnd=n===c?c+1:c})),i.addEventListener("pointerup",(function(){i.classList.remove("active")})),i.setAttribute("data-code","".concat(s.code))}if(s.br){var n=document.createElement("br");t.append(n)}})),t}},{key:"changeLang",value:function(){"ru"===this.lang?this.lang="en":this.lang="ru",this.setLocalStorage(),"en"===this.lang?this.isCaps?(this.lowerCaseEn(),this.isCaps=!1,this.capsLock()):this.lowerCaseEn():this.isCaps?(this.lowerCaseRu(),this.isCaps=!1,this.capsLock()):this.lowerCaseRu()}},{key:"setValue",value:function(){this.elements.area.value=this.value}},{key:"tabEvent",value:function(){var e=this.elements.area,t=e.selectionStart,s=e.selectionEnd;this.value=this.value.substring(0,t)+"\t"+this.value.substring(s),this.setValue(),e.focus(),e.selectionEnd=s+1}},{key:"backspaceEvent",value:function(){var e=this.elements.area,t=e.selectionStart,s=e.selectionEnd;this.value=this.value.substring(0,t>0&&t===s?t-1:t)+this.value.substring(s),this.setValue(),e.focus(),e.selectionEnd=t>0?s-1:s}},{key:"enterEvent",value:function(){var e=this.elements.area,t=e.selectionStart,s=e.selectionEnd;this.value=this.value.substring(0,t)+"\n"+this.value.substring(s),this.setValue(),e.focus(),e.selectionEnd=s+1}},{key:"spaceEvent",value:function(){var e=this.elements.area,t=e.selectionStart,s=e.selectionEnd;this.value=this.value.substring(0,t)+" "+this.value.substring(s),this.setValue(),e.focus(),e.selectionEnd=s+1}},{key:"shiftEvent",value:function(e){var t=this;e.addEventListener("pointerdown",(function(){e.classList.add("active"),t.isShift=!0,t.shift()})),e.addEventListener("pointerup",(function(){e.classList.remove("active"),t.isShift=!1,t.shift()}))}},{key:"upperCaseRu",value:function(){var e=this;this.keys.forEach((function(t,s){e.elements.keysAll[s].innerText=t.shiftRu}))}},{key:"upperCaseText",value:function(){this.elements.keysAll.forEach((function(e){1===e.innerText.length&&(e.innerText=e.innerText.toUpperCase())}))}},{key:"lowerCaseText",value:function(){this.elements.keysAll.forEach((function(e){1===e.innerText.length&&(e.innerText=e.innerText.toLowerCase())}))}},{key:"upperCaseEn",value:function(){var e=this;this.keys.forEach((function(t,s){e.elements.keysAll[s].innerText=t.shiftEn}))}},{key:"lowerCaseRu",value:function(){var e=this;this.keys.forEach((function(t,s){e.elements.keysAll[s].innerText=t.ru}))}},{key:"lowerCaseEn",value:function(){var e=this;this.keys.forEach((function(t,s){e.elements.keysAll[s].innerText=t.en}))}},{key:"capsLock",value:function(){var e=this;this.isCaps?this.isCaps=!1:this.isCaps=!0,this.elements.keysAll.forEach((function(t){1===t.innerText.length&&(e.isCaps?t.innerText=t.innerText.toUpperCase():t.innerText=t.innerText.toLowerCase())}))}},{key:"shift",value:function(){this.isCaps?this.isShift?"ru"===this.lang?(this.upperCaseRu(),this.lowerCaseText()):(this.upperCaseEn(),this.lowerCaseText()):"ru"===this.lang?(this.lowerCaseRu(),this.upperCaseText()):(this.lowerCaseEn(),this.upperCaseText()):this.isShift?"ru"===this.lang?this.upperCaseRu():this.upperCaseEn():"ru"===this.lang?this.lowerCaseRu():this.lowerCaseEn()}},{key:"keyPress",value:function(){var e=this;document.addEventListener("keypress",(function(t){var s=e.elements.area,i=s.selectionStart,a=s.selectionEnd;t.preventDefault(),e.elements.keysAll.forEach((function(n){n.dataset.code===t.code&&(n.classList.add("active"),e.value=e.value.substring(0,i)+n.innerText+e.value.substring(a),e.setValue(),s.focus(),s.selectionEnd=i===a?a+1:a)}))}))}},{key:"keyDown",value:function(){var e=this;document.addEventListener("keydown",(function(t){switch(t.code){case"CapsLock":t.preventDefault(),document.querySelector(".caps").classList.add("active"),e.activeCapsDown||(e.capsLock(),e.activeCapsDown=!0);break;case"ShiftLeft":t.preventDefault(),document.querySelector(".shift_left").classList.add("active"),e.isShift=!0,e.shift();break;case"ShiftRight":t.preventDefault(),document.querySelector(".shift_right").classList.add("active"),e.isShift=!0,e.shift();break;case"Enter":t.preventDefault(),document.querySelector(".enter").classList.add("active"),e.enterEvent();break;case"Space":t.preventDefault(),document.querySelector(".space").classList.add("active"),e.spaceEvent();break;case"AltLeft":t.preventDefault(),document.querySelector(".alt_left").classList.add("active"),e.langFlag=!0;break;case"ControlLeft":t.preventDefault(),document.querySelector(".ctrl_left").classList.add("active"),e.crtlActive||e.langFlag&&(e.changeLang(),e.crtlActive=!0);break;case"AltRight":t.preventDefault(),document.querySelector(".alt_right").classList.add("active");break;case"Backspace":t.preventDefault(),document.querySelector(".backspace").classList.add("active"),e.backspaceEvent();break;case"Delete":t.preventDefault(),document.querySelector(".delete").classList.add("active"),e.value="",e.setValue();break;case"Tab":t.preventDefault(),document.querySelector(".tab").classList.add("active"),e.tabEvent();break;default:e.elements.keysAll.forEach((function(e){e.dataset.code===t.code&&e.classList.add("active")}))}}))}},{key:"keyUp",value:function(){var e=this;document.addEventListener("keyup",(function(t){switch(t.code){case"ShiftLeft":e.isShift=!1,document.querySelector(".shift_left").classList.remove("active"),e.shift();break;case"ShiftRight":e.isShift=!1,document.querySelector(".shift_right").classList.remove("active"),e.shift();break;case"AltLeft":document.querySelector(".alt_left").classList.remove("active"),e.langFlag=!1;break;case"CapsLock":var s=document.querySelector(".caps");e.activeCapsDown=!1,e.activeCaps=!e.activeCaps,e.activeCaps?s.classList.add("active"):s.classList.remove("active");break;case"ControlLeft":document.querySelector(".ctrl_left").classList.remove("active"),e.crtlActive=!1;break;default:e.elements.keysAll.forEach((function(e){e.dataset.code===t.code&&e.classList.remove("active")}))}}))}},{key:"setLocalStorage",value:function(){localStorage.setItem("lang",this.lang)}},{key:"getLocalStorage",value:function(){localStorage.getItem("lang")&&(this.lang=localStorage.getItem("lang"))}}])&&t(i.prototype,a),n&&t(i,n),Object.defineProperty(i,"prototype",{writable:!1}),s}());window.addEventListener("DOMContentLoaded",(function(){s.init(),s.keyDown(),s.keyUp(),s.keyPress()}))})();