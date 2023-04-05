import popup_message from"../popup_message.js";function getCookie(e){const n=document.cookie.split(";");for(let t=0;t<n.length;t++){const o=n[t].trim();if(o.startsWith(e+"="))return decodeURIComponent(o.substring(e.length+1))}return null}function checkCookie(){return!!getCookie("cuser")&&(location.replace("SVCC/main.html"),!0)}if(!1===checkCookie()){function calendar(){const e=new Date;let n=e.getDate(),t=e.getMonth(),o=e.getFullYear();if(sessionStorage.getItem("bday")){let e=JSON.parse(sessionStorage.getItem("bday"));var i=e.day,s=e.month,a=e.year}else i=n,s=t,a=o;$.each(["January","February","March","April","May","June","July","August","September","October","November","December"],(function(e,n){s==e?$("#month").append($("<option />").val(e).html(n).attr("selected","selected")):$("#month").append($("<option />").val(e).html(n))})),daysOptions(s,i,a);for(let e=(new Date).getFullYear();e>1900;e--)a==e?$("#year").append($("<option />").val(e).html(e).attr("selected","selected")):$("#year").append($("<option />").val(e).html(e));$("#month").bind("change",(function(){daysOptions($("#month").val(),$("#day").val(),$("#year").val()),tempSaveBday()})),$("#year").bind("change",(function(){daysOptions($("#month").val(),$("#day").val(),$("#year").val()),tempSaveBday()})),$("#day").bind("change",(function(){tempSaveBday()}))}function tempSaveBday(){let e={month:$("#month").val(),day:$("#day").val(),year:$("#year").val()};sessionStorage.setItem("bday",JSON.stringify(e))}function daysOptions(e,n,t){$("#day").empty();let o=daysInMonth(parseInt(e)+1,t);for(let e=1;e<=o;e++)n==e?$("#day").append($("<option />").val(e).html(e).attr("selected","selected")):$("#day").append($("<option />").val(e).html(e))}function daysInMonth(e,n){return new Date(n,e,0).getDate()}function showMSG(e,n){$("body").prepend(popup_message(e,n)),$("#ok").click((function(){$(".popup-message").remove()}))}function login_form(e,n){sessionStorage.removeItem("bday"),sessionStorage.removeItem("cform"),e.addClass("login-form").removeClass("signup-form"),e.hide(),e.html(login()),e.fadeIn(300),$("#login-btn").click((function(){if(0==$(".popup-message").length){let e=autentication($("#studentId").val(),$("#password").val(),$("#access").val());!0===e?setTimeout((function(){location.replace("SVCC/main.html")}),1e3):"error1"===e?setTimeout((function(){showMSG("Invalid Input","Please Enter Student ID and Password.")}),1e3):"error2"===e?setTimeout((function(){showMSG("Invalid Input","Please Enter your Student ID.")}),1e3):"error3"===e?setTimeout((function(){showMSG("Invalid Input","Please Enter your Password.")}),1e3):setTimeout((function(){showMSG("Invalid Account","Student ID and Password not Match.")}),1e3)}})),$(document).keydown((function(e){13==e.which&&0==$(".popup-message").length&&$("#login-btn").trigger("click")})),$("#goto-signup").unbind("click"),$("#goto-signup").bind("click",(()=>e.fadeOut(300,(()=>signup_step1(e,n)))))}function signup_step1(e,n){sessionStorage.setItem("cform","s1"),$("#backBTN").remove(),$(".signup-form").length||(e.addClass("signup-form").removeClass("login-form"),e.hide(),e.html(signup()),e.fadeIn(300));let t=$("#steps");t.hide(),t.html(step1()),calendar(),t.fadeIn(300);let o=$("#next-btn"),i=$("#goto-login");o.unbind("click"),o.bind("click",(()=>{t.fadeOut(300,(()=>signup_step2(e,n))),tempSaveBday()})),i.unbind("click"),i.bind("click",(()=>e.fadeOut(300,(()=>login_form(e,n)))))}function signup_step2(e,n){sessionStorage.setItem("cform","s2");let t=$("#steps");var o;t.hide(),t.html(step2()),t.fadeIn(300,(()=>{(o=$("#next-btn")).removeAttr("id").attr("id","next-btn").val("Next"),o.unbind("click"),o.bind("click",(()=>t.fadeOut(300,(()=>signup_step3(e,n)))))})),$("#backBTN").length||$(".back-container").prepend('<i id="backBTN" class="backBTN fa-solid fa-chevron-left"></i>'),$("#backBTN").unbind("click"),$("#backBTN").bind("click",(()=>t.fadeOut(300,(()=>signup_step1(e,n)))))}function signup_step3(e,n){sessionStorage.setItem("cform","s3");let t=$("#steps");var o;t.hide(),t.html(step3()),t.fadeIn(300,(()=>{(o=$("#next-btn")).removeAttr("id").attr("id","submit-btn").val("Submit"),o.unbind("click"),$("#submit-btn").bind("click",(function(){showMSG("Invalid to Perform","This function is not working yet")}))})),$("#backBTN").length||$(".back-container").prepend('<i id="backBTN" class="backBTN fa-solid fa-chevron-left"></i>'),$("#backBTN").unbind("click"),$("#backBTN").bind("click",(()=>{t.fadeOut(300,(()=>{signup_step2(e,n),o.removeAttr("id").attr("id","next-btn").val("Next")}))}))}function autentication(e,n,t){if(""===e&&""===n)return"error1";if(""===e)return"error2";if(""===n)return"error3";if("user"===e&&"user"===n&&"student"===t){let t={access:"student",username:e,password:n};return document.cookie=`cuser = ${JSON.stringify(t)}; max-age= 1800; path=/`,!0}return!1}function login(){return'<h1>Login</h1>\n    <select id="access" class="input-box">\n      <option value="student" selected="selected">STUDENT</option>\n      <option value="admin" disabled>ADMINISTRATOR</option>\n      <option value="faculty" disabled>FACULTY</option>\n      <option value="cashier" disabled>CASHIER</option>\n      <option value="cashadmin" disabled>CASHIER ADMINISTRATOR</option>\n      <option value="regstaff" disabled>REGISTRAR STAFF</option>\n      <option value="misstaff" disabled>MIS STAFF</option>\n    </select>\n    <input\n      id="studentId"\n      class="input-box"\n      type="password"\n      placeholder="Student ID | Login ID | RFID"\n    />\n    <input\n      id="password"\n      class="input-box"\n      type="password"\n      placeholder="Password"\n    />\n    <input id="login-btn" class="login-btn" type="button" value="Login" />\n    <div>\n      <h3 class="new-student">\n        New Student? Please <span id="goto-signup">click here!</span>\n      </h3>\n    </div>'}function signup(){return'<div class="back-container">\n  <div class="head-container">\n    <h3>New Student</h3>\n    <h1>Registration</h1>\n  </div></div>\n  \n  <div id="steps"></div>\n\n  <input id="next-btn" class="next-btn" type="button" value="Next" />\n  <span id="goto-login" class="back-to-login">Back to Login</span>'}function step1(){return'<div class="group-input">\n    <label for="firstname">\n      Firstname\n      <input id="firstname" class="input-box" type="text" />\n    </label>\n    <label for="lastname">\n      Lastname\n      <input id="lastname" class="input-box" type="text" />\n    </label>\n  </div>\n  <label for="birthday">\n    Birthday\n    <div class="group-input">\n      <select id="month" class="input-box">\n      </select>\n      <select id="day" class="input-box">\n      </select>\n      <select id="year" class="input-box">\n      </select>\n    </div>\n  </label>\n  <label for="Gender">\n    Gender\n    <div class="group-input gender">\n      <input type="radio" value="female" name="select" id="option-1" />\n      <input type="radio" value="male" name="select" id="option-2" />\n      <label for="option-1" class="option option-1">\n        <span>Female</span>\n        <div class="dot"></div>\n      </label>\n      <label for="option-2" class="option option-2">\n        <span>Male</span>\n        <div class="dot"></div>\n      </label>\n    </div>\n  </label>'}function step2(){return'<label for="nationality">\n    Nationality\n    <input id="nationality" class="input-box" type="text" />\n  </label>\n  <label for="mobile-number">\n    Mobile Number\n    <input id="mobile-number" class="input-box" type="text" />\n  </label>\n  <label for="email">\n    Email Address\n    <input id="email" class="input-box" type="text" />\n  </label>'}function step3(){return'<label for="course">\n    Select course you want to take\n    <select class="input-box">\n      <option value="none" selected="selected">No Options</option>\n    </select>\n  </label>\n  <label for="course">\n    Select temporary student status\n    <select class="input-box">\n      <option value="none" selected="selected">No Options</option>\n    </select>\n  </label>\n\n  <div class="group-input">\n    <label for="year-level">\n      Year Level\n      <select class="input-box">\n        <option value="none" selected="selected">No Options</option>\n      </select>\n    </label>\n    <label for="student-type">\n      Student Type\n      <select class="input-box">\n        <option value="none" selected="selected">No Options</option>\n      </select>\n    </label>\n  </div>'}$("body").show(),$(document).ready((function(){let e=$(".login-form"),n=$("head");sessionStorage.getItem("cform")?"login"==sessionStorage.getItem("cform")?login_form(e,n):"s1"==sessionStorage.getItem("cform")?signup_step1(e,n):"s2"==sessionStorage.getItem("cform")?(signup_step1(e,n),signup_step2(e,n)):"s3"==sessionStorage.getItem("cform")&&(signup_step1(e,n),signup_step3(e,n)):login_form(e,n)}))}