!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var i=r("6JpON");function a(e,t){return Math.random()>.3?new Promise((function(n){setTimeout((function(){return n({position:e,delay:t})}),t)})):Promise.reject({position:e,delay:t})}document.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault();for(var n=+t.target.elements.delay.value,o=+t.target.elements.step.value,r=+t.target.elements.amount.value,l=1;l<=r;l++)a(l,n).then((function(t){var n=t.position,o=t.delay;e(i).Notify.success("✅ Fullfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(t){var n=t.position,o=t.delay;e(i).Notify.failure("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))})),n+=o}))}();
//# sourceMappingURL=03-promises.23c90c4a.js.map