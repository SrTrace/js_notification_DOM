var e=function(e,t,n,i,o){var a=document.createElement("div");a.classList.add("notification",o),a.innerHTML="\n    <h2 class = 'title'>".concat(n,"</h2>\n    <p>").concat(i,"</p>\n  "),a.style.top="".concat(e,"px"),a.style.right="".concat(t,"px"),document.body.append(a),setTimeout(function(){a.remove()},2e3)};e(10,10,"Title of Success message","Message example.\n Notification should contain title and description.","success"),e(150,10,"Title of Error message","Message example.\n Notification should contain title and description.","error"),e(290,10,"Title of Warning message","Message example.\n Notification should contain title and description.","warning");
//# sourceMappingURL=index.37dafdca.js.map
