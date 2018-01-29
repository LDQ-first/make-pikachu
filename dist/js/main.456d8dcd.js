/*! author by ldq-first */
webpackJsonp([0],{"49fU":function(n,t){n.exports=vendor_library},"79Kf":function(n,t){},J6O1:function(n,t,r){n.exports=r("49fU")(1)},fAzA:function(n,t,r){"use strict";(function(n){r("79Kf");(function(){var t=50;n(".actions").on("click","button",function(r){var e=n(r.currentTarget),o=e.attr("data-speed");switch(e.addClass("active").siblings(".active").removeClass("active"),o){case"slow":t=100;break;case"normal":t=50;break;case"fast":t=10}});!function(n,r,e){var o=document.querySelector("#code"),i=document.querySelector("#styleTag"),p=0,a=void 0;a=setTimeout(function d(){p+=1,o.innerHTML=n.substring(0,p),i.innerHTML=r.substring(0,1.1*p),o.scrollTop=o.scrollHeight,p<n.length?a=setTimeout(d,t):e&&e.call()},t)}(".preview-wrapper {\n  background: #FFE600;\n}\n\n.nose {\n  width: 0px;\n  height: 0px;\n  border: 11px solid;\n  border-width: 12px;\n  border-color: #000 transparent transparent;  \n  border-radius: 50%;\n  position: absolute;\n  left: 50%;\n  top: 28px;\n  margin-left: -12px;\n}\n\n.eye {\n  width: 49px;\n  height: 49px;\n  background: #2e2e2e;\n  position: absolute;\n  border-radius: 50%;\n  border: 2px solid #000;\n  &::before {\n    content: '';\n    display: block;\n    width: 24px;\n    height: 24px;\n    background: #FFF;\n    position: absolute;\n    border-radius: 50%;\n    left: 6px;\n    top: -1px;\n    border: 2px solid #000;\n  }\n  &.left {\n    right: 50%;\n    margin-right: 90px;\n  }\n  &.right {\n    left: 50%;\n    margin-left: 90px;\n  }\n}\n\n.face {\n  width: 68px;\n  height: 68px;\n  background: #fc0d1c;\n  border: 2px solid black;\n  border-radius: 50%;\n  position: absolute;\n  top: 85px;\n  &.left {\n    right: 50%;\n    margin-right: 116px;\n  }\n  &.right {\n    left: 50%;\n    margin-left: 116px;\n  }\n}\n\n.upperlip {\n  height: 25px;\n  width: 76px;\n  border: 2px solid black;\n  border-top: none;\n  position: absolute;\n  top: 46px;\n  background: #FFE600;\n  &.left {\n    border-bottom-left-radius: 40px 25px;\n    border-right: none;\n    right: 50%;\n    transform: rotate(-22deg);\n  }\n  &.right {\n    border-bottom-right-radius: 40px 25px;\n    border-left: none;\n    left: 50%;\n    transform: rotate(20deg);\n  }\n}\n\n.lowerlip-wrapper {\n  position: absolute;\n  bottom: -50px;\n  left: 50%;\n  margin-left: -150px;\n  height: 158px;\n  width: 300px;\n  overflow: hidden;\n  .lowerlip {\n    width: 300px;\n    height: 3500px;\n    background: #990513;\n    border-radius: 200px/2000px;\n    border: 2px solid black;\n    position: absolute;\n    bottom: 0;\n    width: 300px;\n    overflow: hidden;\n    &::after {\n      content: '';\n      position: absolute;\n      bottom: -20px;\n      width: 140px;\n      height: 140px;\n      left: 50%;\n      margin-left: -70px;\n      background: #fc4a62;\n      border-radius: 50%;\n    }\n  }\n}",".preview-wrapper {\n  background: #FFE600; }\n\n.nose {\n  width: 0px;\n  height: 0px;\n  border: 11px solid;\n  border-width: 12px;\n  border-color: #000 transparent transparent;\n  border-radius: 50%;\n  position: absolute;\n  left: 50%;\n  top: 28px;\n  margin-left: -12px; }\n\n.eye {\n  width: 49px;\n  height: 49px;\n  background: #2e2e2e;\n  position: absolute;\n  border-radius: 50%;\n  border: 2px solid #000; }\n  .eye::before {\n    content: '';\n    display: block;\n    width: 24px;\n    height: 24px;\n    background: #FFF;\n    position: absolute;\n    border-radius: 50%;\n    left: 6px;\n    top: -1px;\n    border: 2px solid #000; }\n  .eye.left {\n    right: 50%;\n    margin-right: 90px; }\n  .eye.right {\n    left: 50%;\n    margin-left: 90px; }\n\n.face {\n  width: 68px;\n  height: 68px;\n  background: #fc0d1c;\n  border: 2px solid black;\n  border-radius: 50%;\n  position: absolute;\n  top: 85px; }\n  .face.left {\n    right: 50%;\n    margin-right: 116px; }\n  .face.right {\n    left: 50%;\n    margin-left: 116px; }\n\n.upperlip {\n  height: 25px;\n  width: 76px;\n  border: 2px solid black;\n  border-top: none;\n  position: absolute;\n  top: 46px;\n  background: #FFE600; }\n  .upperlip.left {\n    border-bottom-left-radius: 40px 25px;\n    border-right: none;\n    right: 50%;\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg); }\n  .upperlip.right {\n    border-bottom-right-radius: 40px 25px;\n    border-left: none;\n    left: 50%;\n    -webkit-transform: rotate(20deg);\n            transform: rotate(20deg); }\n\n.lowerlip-wrapper {\n  position: absolute;\n  bottom: -50px;\n  left: 50%;\n  margin-left: -150px;\n  height: 158px;\n  width: 300px;\n  overflow: hidden; }\n  .lowerlip-wrapper .lowerlip {\n    width: 300px;\n    height: 3500px;\n    background: #990513;\n    border-radius: 200px/2000px;\n    border: 2px solid black;\n    position: absolute;\n    bottom: 0;\n    width: 300px;\n    overflow: hidden; }\n    .lowerlip-wrapper .lowerlip::after {\n      content: '';\n      position: absolute;\n      bottom: -20px;\n      width: 140px;\n      height: 140px;\n      left: 50%;\n      margin-left: -70px;\n      background: #fc4a62;\n      border-radius: 50%; }")}).call()}).call(t,r("J6O1"))}},["fAzA"]);