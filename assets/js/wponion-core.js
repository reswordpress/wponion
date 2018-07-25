"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n};$wponion.debug_info=null,$wponion.field_debug_info=null,$wponion.settings_args=null,$wponion.text=null,$wponion._instances={},$wponion.tost=swal.mixin({toast:!0,position:"top-end",showConfirmButton:!1,customClass:"wpsweatalert2",onOpen:function(){var n=parseInt(jQuery("#wpadminbar").height())+3;jQuery("div.wpsweatalert2").parent().css("top",n+"px")},timer:4e3}),$wponion.field_js_id=function(n){return n.attr("data-wponion-jsid")},$wponion.js_args=function(n,o){return o=o||{},n?void 0===window[n]||void 0===window[n]?o:window[n]:o},$wponion.field_args=function(n,o){return o=o||{},JSON.parse(JSON.stringify($wponion.js_args($wponion.field_js_id(n),o)))},$wponion.url_to_object=function(n){return(n||document.location.search).replace(/(^\?)/,"").split("&").map(function(n){return this[(n=n.split("="))[0]]=n[1],this}.bind({}))[0]},$wponion.txt=function(n,o){return o=o||"string_default_not_found",void 0!==$wponion.text[n]?$wponion.text[n]:o},$wponion.loading_screen=function(n){return n.find(".wponion-page-loader").fadeOut("slow"),$wponion},$wponion.global_debug_view=function(){var n=jQuery("a.wponion-global-debug-handle");if(null===$wponion.debug_info&&0<n.length){var o=$wponion.js_args("wponion_defined_vars"),i={};jQuery.each(o,function(n,o){i[o]=$wponion.js_args(o)}),$wponion.debug_info=i}return n.on("click",function(n){n.preventDefault();swal({title:$wponion.txt("global_json_output","Global WPOnion Debug Data"),html:jQuery("#wponiondebuginfopopup > div"),showConfirmButton:!0,confirmButtonText:$wponion.txt("get_json_output","Get JSON Output"),showCloseButton:!1,animation:!1,width:"800px",onBeforeOpen:function(){swal.enableLoading()},onOpen:function(){jQuery("#swal2-content #wponion-global-debug-content").jsonView($wponion.debug_info).overlayScrollbars({className:"os-theme-dark",resize:"vertical"}),swal.disableLoading()}}).then(function(n){if(n.value)return swal({width:"600px",html:'<textarea style="min-width:550px; min-height:300px">'+JSON.stringify($wponion.debug_info)+"</textarea>"})})}),$wponion},$wponion.settings=function(n,o){return o=o||{},void 0!==$wponion.settings_args[n]?$wponion.settings_args[n]:o},$wponion.is_debug=function(){return $wponion.settings("debug")},$wponion.__field_debug_info=function(){if($wponion.is_debug()&&null===$wponion.field_debug_info){var n=$wponion.js_args("wponion_defined_vars"),e={},t=$wponion.txt("unmodified_debug"),r=$wponion.txt("modified_debug");jQuery.each(n,function(n,o){var i=$wponion.js_args(o);e[o]={},e[o][t]=i.debug_info||i,e[o][r]={}}),$wponion.field_debug_info=e}return $wponion},$wponion.__plugin_debug_info=function(n,o,i){if($wponion.is_debug()){"object"===(void 0===n?"undefined":_typeof(n))&&(n=$wponion.field_js_id(n));var e=$wponion.txt("modified_debug");void 0!==$wponion.field_debug_info[n]&&void 0===$wponion.field_debug_info[n][e][o]&&($wponion.field_debug_info[n][e][o]=i)}return $wponion},$wponion._get_debug_info=function(n){return $wponion.is_debug()&&("object"===(void 0===n?"undefined":_typeof(n))&&(n=$wponion.field_js_id(n)),void 0!==$wponion.field_debug_info[n])?$wponion.field_debug_info[n]:{}},$wponion.get_js_arg=function(n,o,i){i=i||{};var e=$wponion.js_args(n,i);return void 0!==e[o]?e[o]:i},$wponion.get_module=function(n){return $wponion.get_js_arg(n,"module",!1)},$wponion.get_plugin_id=function(n){return $wponion.get_js_arg(n,"plugin_id",!1)},$wponion.array_merge=function(){var n,o=Array.prototype.slice.call(arguments),i=o.length,e={},t="",r=0,u=0,s=0,a=0,p=Object.prototype.toString,d=!0;for(s=0;s<i;s++)if("[object Array]"!==p.call(o[s])){d=!1;break}if(d){for(d=[],s=0;s<i;s++)d=d.concat(o[s]);return d}for(a=s=0;s<i;s++)if(n=o[s],"[object Array]"===p.call(n))for(u=0,r=n.length;u<r;u++)e[a++]=n[u];else for(t in n)n.hasOwnProperty(t)&&(parseInt(t,10)+""===t?e[a++]=n[t]:e[t]=n[t]);return e},$wponion.ajax=function(n,o,i,e,t){var r={url:$wponion.settings("ajax_url"),method:"post"};o=o||{},"object"===(void 0===n?"undefined":_typeof(n))?o=n:r.url=r.url+"&"+$wponion.settings("ajax_action_key")+"="+n,void 0!==(r=$wponion.array_merge(r,o)).onSuccess&&(i=r.onSuccess),void 0!==r.onError&&(e=r.onError),void 0!==r.onAlways&&(t=r.onAlways);var u=jQuery.ajax(r);return u.done(function(n){void 0!==i&&i(n)}),u.fail(function(n){void 0!==e&&e(n)}),u.always(function(n){void 0!==t&&t(n)}),u},$wponion.trigger_update_select=function(n){n.hasClass("chosen")?n.trigger("chosen:updated"):n.hasClass("select2")?n.trigger("change"):n.hasClass("selectize")},$wponion.save_instance=function(n,o){void 0===$wponion._instances[n]&&($wponion._instances[n]=o)},$wponion.get=function(n){return"string"!=typeof n&&(n=$wponion.field_js_id(n)),void 0!==$wponion._instances[n]&&$wponion._instances[n]},$wponion.validate_single_function=function(n){if("object"===(void 0===n?"undefined":_typeof(n))){var o=!1!==n.wponion_js_args&&n.wponion_js_args,i=!1!==n.wponion_js_contents&&n.wponion_js_contents;return!1===o&&!1!==i?new Function(i):!1!==o&&!1!==i?new Function(o,i):n}return n},$wponion.validate_js_function=function(n){if("object"===(void 0===n?"undefined":_typeof(n))||"array"===n)for(var o in n)n[o]=$wponion.validate_single_function(n[o]);return n},function(n,o,i,e,t){var r=wp.hooks;i(n).on("load",function(){e.settings_args=e.js_args("wponion_core",{}),e.text=e.js_args("wponion_i18n",{}),e.__field_debug_info(),r.doAction("wponion_before_init"),e.global_debug_view(),e.loading_screen(i(".wponion-framework")),r.doAction("wponion_init")}),r.doAction("wponion_loaded")}(window,document,jQuery,$wponion);