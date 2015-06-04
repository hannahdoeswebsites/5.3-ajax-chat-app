this["JST"] = this["JST"] || {};
this["JST"]["application"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<h1>Hello</h1>\n";
},"useData":true});
this["JST"]["chat"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<nav class=\"chatrooms\">\n  <ul>\n    <li>Chat 1</li>\n    <li>Chat 2 </li>\n    <li>Chat 3</li>\n  </ul>\n\n\n</nav>\n\n<section class=\"chat-box\">\n\n</section>\n\n<section class=\"outputMessage\">\n  <textarea form=\"text\" name=\"outputMessage\" cols=\"50\" rows=\"50\"> </textarea>\n  </section>\n\n<section class=\"enterMessage\">\n\n  <form class=\"input-messages\">\n<textarea class=\"message\" form=\"text\" name=\"enterMessage\" cols=\"50\" rows=\"2\" placeholder=\"Type your message here\"> </textarea>\n<input id=\"submit\" type=\"submit\" value=\"Submit Message\">\n</form>\n\n</section>\n";
},"useData":true});
this["JST"]["login"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<form class=\"login-form\">\n    <input class=\"login-form-username\" type=\"text\" placeholder=\"Username\">\n     <input id=\"submit\" type=\"submit\" value=\"Log In\">\n   </form>\n";
},"useData":true});