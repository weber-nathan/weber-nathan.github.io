/*!
 * Sticky-kit v1.1.3 | MIT | Leaf Corcoran 2015 | http://leafo.net
 */
(function(){var A,M;A=window.jQuery,M=A(window),A.fn.stick_in_parent=function(t){var w,_,i,o,x,e,P,V,F,C,z,I;for(null==t&&(t={}),I=t.sticky_class,x=t.inner_scrolling,z=t.recalc_every,C=t.parent,V=t.offset_top,P=t.spacer,_=t.bottoming,null==V&&(V=0),null==C&&(C=void 0),null==x&&(x=!0),null==I&&(I="is_stuck"),w=A(document),null==_&&(_=!0),F=function(t){var i;return window.getComputedStyle?(t=window.getComputedStyle(t[0]),i=parseFloat(t.getPropertyValue("width"))+parseFloat(t.getPropertyValue("margin-left"))+parseFloat(t.getPropertyValue("margin-right")),"border-box"!==t.getPropertyValue("box-sizing")&&(i+=parseFloat(t.getPropertyValue("border-left-width"))+parseFloat(t.getPropertyValue("border-right-width"))+parseFloat(t.getPropertyValue("padding-left"))+parseFloat(t.getPropertyValue("padding-right"))),i):t.outerWidth(!0)},i=function(s,r,n,l,a,c,p,u){var d,t,f,g,h,k,y,m,i,b,v,e;if(!s.data("sticky_kit")){if(s.data("sticky_kit",!0),h=w.height(),y=s.parent(),null!=C&&(y=y.closest(C)),!y.length)throw"failed to find stick parent";if(d=f=!1,(v=null!=P?P&&s.closest(P):A("<div />"))&&v.css("position",s.css("position")),(m=function(){var t,i,o;if(!u&&(h=w.height(),t=parseInt(y.css("border-top-width"),10),i=parseInt(y.css("padding-top"),10),r=parseInt(y.css("padding-bottom"),10),n=y.offset().top+t+i,l=y.height(),f&&(d=f=!1,null==P&&(s.insertAfter(v),v.detach()),s.css({position:"",top:"",width:"",bottom:""}).removeClass(I),o=!0),a=s.offset().top-(parseInt(s.css("margin-top"),10)||0)-V,c=s.outerHeight(!0),p=s.css("float"),v&&v.css({width:F(s),height:c,display:s.css("display"),"vertical-align":s.css("vertical-align"),float:p}),o))return e()})(),c!==l)return g=void 0,k=V,b=z,e=function(){var t,i,o,e;if(!u&&(o=!1,null!=b&&(--b<=0&&(b=z,m(),o=!0)),o||w.height()===h||m(),o=M.scrollTop(),null!=g&&(i=o-g),g=o,f?(_&&(e=l+n<o+c+k,d&&!e&&(d=!1,s.css({position:"fixed",bottom:"",top:k}).trigger("sticky_kit:unbottom"))),o<a&&(f=!1,k=V,null==P&&("left"!==p&&"right"!==p||s.insertAfter(v),v.detach()),t={position:"",width:"",top:""},s.css(t).removeClass(I).trigger("sticky_kit:unstick")),x&&((t=M.height())<c+V&&!d&&(k-=i,k=Math.max(t-c,k),k=Math.min(V,k),f&&s.css({top:k+"px"})))):a<o&&(f=!0,(t={position:"fixed",top:k}).width="border-box"===s.css("box-sizing")?s.outerWidth()+"px":s.width()+"px",s.css(t).addClass(I),null==P&&(s.after(v),"left"!==p&&"right"!==p||v.append(s)),s.trigger("sticky_kit:stick")),f&&_&&(null==e&&(e=l+n<o+c+k),!d&&e)))return d=!0,"static"===y.css("position")&&y.css({position:"relative"}),s.css({position:"absolute",bottom:r,top:"auto"}).trigger("sticky_kit:bottom")},i=function(){return m(),e()},t=function(){if(u=!0,M.off("touchmove",e),M.off("scroll",e),M.off("resize",i),A(document.body).off("sticky_kit:recalc",i),s.off("sticky_kit:detach",t),s.removeData("sticky_kit"),s.css({position:"",bottom:"",top:"",width:""}),y.position("position",""),f)return null==P&&("left"!==p&&"right"!==p||s.insertAfter(v),v.remove()),s.removeClass(I)},M.on("touchmove",e),M.on("scroll",e),M.on("resize",i),A(document.body).on("sticky_kit:recalc",i),s.on("sticky_kit:detach",t),setTimeout(e,0)}},o=0,e=this.length;o<e;o++)t=this[o],i(A(t));return this}}).call(this);
