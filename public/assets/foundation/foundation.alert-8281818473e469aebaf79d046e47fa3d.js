!function(t,n,i,e){"use strict";Foundation.libs.alert={name:"alert",version:"5.3.0",settings:{callback:function(){}},init:function(t,n,i){this.bindings(n,i)},events:function(){var n=this,i=this.S;t(this.scope).off(".alert").on("click.fndtn.alert","["+this.attr_name()+"] a.close",function(t){var e=i(this).closest("["+n.attr_name()+"]"),s=e.data(n.attr_name(!0)+"-init")||n.settings;t.preventDefault(),Modernizr.csstransitions?(e.addClass("alert-close"),e.on("transitionend webkitTransitionEnd oTransitionEnd",function(t){i(this).trigger("close").trigger("close.fndtn.alert").remove(),s.callback()})):e.fadeOut(300,function(){i(this).trigger("close").trigger("close.fndtn.alert").remove(),s.callback()})})},reflow:function(){}}}(jQuery,window,window.document);