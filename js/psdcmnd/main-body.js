$(document).ready(function(){$(".apps").each(function(){var d=$(this);$(".drop",d).click(function(n){return n.preventDefault(),$div=$(".gb_fa",d),$div.slideToggle(),$(".gb_fa").not($div).hide(),!1})}),$("html,.drops,.dropsss,.dropss,.tt_tg,.dropdown-link,.dropdwn,.Label button,.bg_Se input").click(function(){$(".gb_fa").hide()}),$(".au").each(function(){var d=$(this);$(".dropss",d).click(function(n){return n.preventDefault(),$div=$(".au-menu",d),$div.slideToggle(),$(".au-menu").not($div).hide(),!1})}),$("html,.drop,.drops,.dropsss,.tt_tg,.dropdown-link,.dropdwn,.Label button,.bg_Se input").click(function(){$(".au-menu").hide()}),$(".tb").each(function(){var d=$(this);$(".dropsss",d).click(function(n){return n.preventDefault(),$div=$(".tb-menu",d),$div.slideToggle(),$(".tb-menu").not($div).hide(),!1})
$('.tb-menu,.au-menu').click(function(e){e.stopPropagation()})}),$("html,.drop,.drops,.dropss,.tt_tg,.dropdown-link,.dropdwn,.Label button,.bg_Se input").click(function(){$(".tb-menu").hide()
$('.recent-comments ul').empty()
$('#numcomments').attr('value','0')
$('#allcomments').attr('value','')
$('.loading').removeClass('loader').removeClass('load')}),$("html").click(function(){$(".tg-menu").hide()}),$(".tg").each(function(){var d=$(this);$(".tt_tg",d).click(function(n){return n.preventDefault(),$div=$(".tg-menu",d),$div.slideToggle(),$(".tg-menu").not($div).hide(),!1})}),$("html,.drop,.drops,.dropss,.dropsss,.dropdown-link,.dropdwn,.Label button,.bg_Se input").click(function(){$(".tg-menu").hide()}),$(".dropdown").each(function(){var d=$(this);$(".dropdown-link",d).click(function(n){return n.preventDefault(),$div=$(".dropdown-container",d),$div.slideToggle(),$(".dropdown-container").not($div).hide(),!1})}),$("html,.drop,.drops,.dropss,.dropsss,.tt_tg,.dropdwn,.Label button,.bg_Se input").click(function(){$(".dropdown-container").hide()}),$(".dd").each(function(){var d=$(this);$(".drops",d).click(function(n){return n.preventDefault(),$div=$(".dd-menu",d),$div.slideToggle(),$(".dd-menu").not($div).hide(),!1})}),$("html,.drop,.dropss,.dropsss,.tt_tg,.dropdown-link,.dropdwn,.Label button,.bg_Se input").click(function(){$(".dd-menu").hide()}),$(".dds").each(function(){var d=$(this);$(".dropdwn",d).click(function(n){return n.preventDefault(),$div=$(".dds-menu",d),$div.slideToggle(),$(".dds-menu").not($div).hide(),!1})}),$("html,.drop,.drops,.dropss,.dropsss,.tt_tg,.dropdown-link,.Label button,.bg_Se input").click(function(){$(".dds-menu").hide()})
$('#backer .open').click(function(e){e.stopPropagation()
$('.overlay').removeClass('hidden')
$('#backer .list-label-widget-content').removeClass('invisible')
$('#backer button.open').addClass('hidden')
$('#backer button.close').removeClass('hidden')})
$('#backer .list-label-widget-content').click(function(e){e.stopPropagation()})
$('html,.drop,.drops,.dropss,.dropsss,.tt_tg,.dropdown-link,.dropdwn,.bg_Se input').click(function(){$('#backer .list-label-widget-content').addClass('invisible')
$('#backer button.open').removeClass('hidden')
$('#backer button.close,.overlay').addClass('hidden')})
$('#backer .dark').click(function(){$('#backer .darkmode ul').slideToggle()
$('#backer .darkmode .expand_more').toggle()
$('#backer .darkmode .expand_less').toggle()})
$('#backer .grid').click(function(){$('#backer .gridmode ul').slideToggle()
$('#backer .gridmode .expand_more').toggle()
$('#backer .gridmode .expand_less').toggle()})
$('#backer .blog').click(function(){$('#backer .blog ul').slideToggle()
$('#backer .blog .expand_more').toggle()
$('#backer .blog .expand_less').toggle()})
$('#backer .facebook').click(function(){$('#backer .facebook ul').slideToggle()
$('#backer .facebook .expand_more').toggle()
$('#backer .facebook .expand_less').toggle()})
$('#backer .maytinh').click(function(){$('#backer .maytinh ul').slideToggle()
$('#backer .maytinh .expand_more').toggle()
$('#backer .maytinh .expand_less').toggle()})
$('#backer .psdcmnd').click(function(){$('#backer .psdcmnd ul').slideToggle()
$('#backer .psdcmnd .expand_more').toggle()
$('#backer .psdcmnd .expand_less').toggle()})
$('#backer .download').click(function(){$('#backer .download ul').slideToggle()
$('#backer .download .expand_more').toggle()
$('#backer .download .expand_less').toggle()})
$('.bg_Se input').click(function(e){e.stopPropagation()
$('.gb_Se').addClass('gb_af')})
$('html,.drop,.drops,.dropss,.dropsss,.tt_tg,.dropdown-link,.dropdwn,.Label button').click(function(){$('.gb_Se').removeClass('gb_af')})
$('#backer .open').click(function(e){e.stopPropagation()
$('#backer').removeClass('fixed').addClass('default')})
var lastScroll=0;jQuery(document).ready(function($){$(window).scroll(function(){var scroll=$(window).scrollTop();if(scroll>lastScroll){$('#backer').removeClass('default').addClass('fixed')
$('#backer .list-label-widget-content').addClass('invisible')
$('#backer button.open').removeClass('hidden')
$('.gb_Se').removeClass('gb_af')
$('#backer button.close,.overlay,.dong-menu').addClass('hidden')}else if(scroll<lastScroll){$('#backer').addClass('default').removeClass('fixed')}
lastScroll=scroll})})
$('.bg_Se input').click(function(e){e.stopPropagation()
$('.gb_Se').addClass('gb_af')})
$('html,.drop,.drops,.dropss,.dropsss,.tt_tg,.dropdown-link,.dropdwn,.Label button').click(function(){$('.gb_Se').removeClass('gb_af')})
var lastScroll=0;jQuery(document).ready(function($){$(window).scroll(function(){var scroll=$(window).scrollTop();if(scroll>lastScroll){$('#backer').removeClass('default').addClass('fixed')
$('#backer .list-label-widget-content').addClass('invisible')
$('#backer button.open').removeClass('hidden')
$('.gb_Se').removeClass('gb_af')
$('#backer button.close,.overlay').addClass('hidden')}else if(scroll<lastScroll){$('#backer').addClass('default').removeClass('fixed')}
lastScroll=scroll})})
$('.bg_Se input').on('keyup',function(e){var textinput=$(this).val()
if(textinput){$.ajax({type:'GET',url:'/feeds/posts/summary',data:{'max-results':10,'alt':'json','q':textinput},dataType:'jsonp',success:function(data){$('.results,.clear-text').removeClass('hidden')
$('.results').empty()
if(data.feed.entry){for(var i=0;i<data.feed.entry.length;i++){for(var j=0;j<data.feed.entry[i].link.length;j++){if(data.feed.entry[i].link[j].rel=='alternate'){var postUrl=data.feed.entry[i].link[j].href;break}}
var postTitle=data.feed.entry[i].title.$t
$('.results').append('<li><a href='+postUrl+' title="'+postTitle+'">'+'<svg viewBox="0 0 48 48"><path d="M38 6H10c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zm-3.98 12H14v-4h20.02v4zm0 8H14v-4h20.02v4zm-6 8H14v-4h14.02v4z"></path></svg>'+postTitle+'</a></li>')}}else{$('.results').addClass('hidden')}}})}else{$('.results,.clear-text').addClass('hidden')}})
$('.clear-text').click(function(){$('.bg_Se input').val('')
$('.results,.clear-text').addClass('hidden')
$('.results').empty()})
$.ajax({url:"/feeds/posts/summary",type:"get",data:{'max-results':0,'alt':'json'},dataType:"jsonp",success:function(e){var totalItems=e.feed.openSearch$totalResults.$t;$('.total_posts').html(totalItems)}})})
$(function(){$.fn.scrollToTop=function(){$(this).hide().removeAttr("href"),"0"!=$(window).scrollTop()&&$(this).fadeIn("slow")
var o=$(this);$(window).scroll(function(){"0"==$(window).scrollTop()?$(o).fadeOut("slow"):$(o).fadeIn("slow")}),$(this).click(function(){$("html, body").animate({scrollTop:0},"slow")})}
$(".MD-StoTop").scrollToTop()})
$('.tb button.dropsss').on('click',function(){scroll=0
if($('.tb-menu').css('display')==='none'){$('.recent-comments').addClass('loader')
var numcomments=10;$.ajax({type:'GET',url:'/feeds/comments/summary',data:{'max-results':numcomments,'alt':'json'},dataType:'jsonp',jsonp:'callback',jsonpCallback:'getComments',success:function(e){$('.recent-comments').removeClass('loader')
var totalcomments=e.feed.openSearch$totalResults.$t
$('#allcomments').attr('value',totalcomments)
scroll=1
$('.recent-comments').scroll(function(){var a=$('.recent-comments').scrollTop(),b=parseInt($('.comments').height()-$('.recent-comments').height())
if(a>=b){if(scroll==1){scroll=0
$('.loading').addClass('loader').addClass('load')
var items=Number($('#numcomments').val())
items=items+numcomments
if(items<=totalcomments){setTimeout(function(){$('#numcomments').val(items)
$.ajax({type:'GET',url:'/feeds/comments/summary',data:{'max-results':numcomments,'start-index':items+1,'alt':'json'},dataType:'jsonp',jsonp:'callback',jsonpCallback:'getComments',success:function(){scroll=1
var lastcomments=items+numcomments;if(lastcomments>totalcomments){$('.loading').removeClass('loader').removeClass('load')}}})},1000)}else{$('.loading').removeClass('loader').removeClass('load')}}}})}})}else{$('.recent-comments ul').empty()
$('#numcomments').attr('value','0')
$('#allcomments').attr('value','')
$('.loading').removeClass('loader').removeClass('load')}})
function getComments(e){if(e.feed.entry){for(var t=0;t<e.feed.entry.length;t++){for(var r=0;r<e.feed.entry[t].link.length;r++)
if("alternate"==e.feed.entry[t].link[r].rel){var a=e.feed.entry[t].link[r].href;break}
var n=e.feed.entry[t].published.$t,l=e.feed.entry[t].author[0].gd$image.src.replace("//img1.blogblog.com/img/b16-rounded.gif","//lh3.googleusercontent.com/zFdxGE77vvD2w5xHy6jkVuElKv-U9_9qLkRYK8OnbDeJPtjSZ82UPq5w6hJ-SA=s40"),s=n.substring(8,10)+"/"+n.substring(5,7)+"/"+n.substring(0,4),i=e.feed.entry[t].author[0].uri.$t,c=(e.feed.entry[t].title.$t,e.feed.entry[t].author[0].name.$t),o=e.feed.entry[t].summary.$t.substring(0,150);function formatUrl(o){if(o){o=o.replace(/((https?\:\/\/)|(www\.))(\S+)(\w{2,4})(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/gi,function(url){var full_url=url;if(!full_url.match('^https?:\/\/')){full_url='//'+full_url}
return'<a href="'+full_url+'">'+url+'</a>'})}
return o}
$(".recent-comments ul").append('<li><div class="rc_avatar"><img src='+l+' alt="'+c+'" /></div><div class="rc_block"><div class="rc_header"><span class="rc_user"><a rel="nofollow" href='+a+' title="'+c+'">'+c+'</a></span><span class="rc_date"><a rel="nofollow" href='+a+'>'+s+'</a></span></div><p class="rc_content">'+formatUrl(o)+"</p></div></li>")}}
function replaceText(){bodyText=document.getElementsByClassName('recent-comments')[0]
text=bodyText.innerHTML
text=text.replace(/=ok/gi,'👌')
text=text.replace(/=hi/gi,'✌')
text=text.replace(/\(y\)/gi,'👍')
text=text.replace(/\(yy\)/gi,'👎')
text=text.replace(/=hl/gi,'👈')
text=text.replace(/=hr/gi,'👉')
text=text.replace(/=hup/gi,'👆')
text=text.replace(/=hd/gi,'👇')
text=text.replace(/=j/gi,'👇')
text=text.replace(/=clap/gi,'👏')
text=text.replace(/&lt;3/gi,'💗')
text=text.replace(/=he/gi,'😍')
text=text.replace(/:3/gi,'😂')
text=text.replace(/:\)\)/gi,'😅')
text=text.replace(/;\)/gi,'😉')
text=text.replace(/:D/gi,'😁')
text=text.replace(/=D/gi,'😃')
text=text.replace(/:\)/gi,'😏')
text=text.replace(/\/\=r/gi,'😏')
text=text.replace(/:\(\(/gi,'😭')
text=text.replace(/:\(/gi,'😞')
text=text.replace(/==/gi,'😓')
text=text.replace(/:\*/gi,'😘')
text=text.replace(/\^\_\^/gi,'😊')
text=text.replace(/:\-\P/gi,'😜')
text=text.replace(/:P/gi,'😜')
text=text.replace(/\/=l/gi,'😒')
text=text.replace(/\:\-\)/gi,'😌')
text=text.replace(/8\|/gi,'😎')
text=text.replace(/:\'\(/gi,'😢')
bodyText.innerHTML=text}
replaceText()}
// tooltip
!function(t){"use strict";var e=function(t,e){this.init("tooltip",t,e)};e.prototype={constructor:e,init:function(e,i,o){var n,s;this.type=e,this.$element=t(i),this.options=this.getOptions(o),this.enabled=!0,"click"==this.options.trigger?this.$element.on("click."+this.type,this.options.selector,t.proxy(this.toggle,this)):"manual"!=this.options.trigger&&(n="hover"==this.options.trigger?"mouseenter":"focus",s="hover"==this.options.trigger?"mouseleave":"blur",this.$element.on(n+"."+this.type,this.options.selector,t.proxy(this.enter,this)),this.$element.on(s+"."+this.type,this.options.selector,t.proxy(this.leave,this))),this.options.selector?this._options=t.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},getOptions:function(e){return(e=t.extend({},t.fn[this.type].defaults,e,this.$element.data())).delay&&"number"==typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),e},enter:function(e){var i=t(e.currentTarget)[this.type](this._options).data(this.type);if(!i.options.delay||!i.options.delay.show)return i.show();clearTimeout(this.timeout),i.hoverState="in",this.timeout=setTimeout(function(){"in"==i.hoverState&&i.show()},i.options.delay.show)},leave:function(e){var i=t(e.currentTarget)[this.type](this._options).data(this.type);if(this.timeout&&clearTimeout(this.timeout),!i.options.delay||!i.options.delay.hide)return i.hide();i.hoverState="out",this.timeout=setTimeout(function(){"out"==i.hoverState&&i.hide()},i.options.delay.hide)},show:function(){var t,e,i,o,n,s,h;if(this.hasContent()&&this.enabled){switch(t=this.tip(),this.setContent(),this.options.animation&&t.addClass("fade"),s="function"==typeof this.options.placement?this.options.placement.call(this,t[0],this.$element[0]):this.options.placement,e=/in/.test(s),t.detach().css({top:0,left:0,display:"block"}).insertAfter(this.$element),i=this.getPosition(e),o=t[0].offsetWidth,n=t[0].offsetHeight,e?s.split(" ")[1]:s){case"bottom":h={top:i.top+i.height,left:i.left+i.width/2-o/2};break;case"top":h={top:i.top-n,left:i.left+i.width/2-o/2};break;case"left":h={top:i.top+i.height/2-n/2,left:i.left-o};break;case"right":h={top:i.top+i.height/2-n/2,left:i.left+i.width}}t.offset(h).addClass(s).addClass("in")}},setContent:function(){var t=this.tip(),e=this.getTitle();t.find(".tooltip-inner")[this.options.html?"html":"text"](e),t.removeClass("fade in top bottom left right")},hide:function(){var e,i=this.tip();return i.removeClass("in"),t.support.transition&&this.$tip.hasClass("fade")?(e=setTimeout(function(){i.off(t.support.transition.end).detach()},500),i.one(t.support.transition.end,function(){clearTimeout(e),i.detach()})):i.detach(),this},fixTitle:function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("data-original-title"))&&t.attr("data-original-title",t.attr("title")||"").attr("title","")},hasContent:function(){return this.getTitle()},getPosition:function(e){return t.extend({},e?{top:0,left:0}:this.$element.offset(),{width:this.$element[0].offsetWidth,height:this.$element[0].offsetHeight})},getTitle:function(){var t=this.$element,e=this.options;return t.attr("data-original-title")||("function"==typeof e.title?e.title.call(t[0]):e.title)},tip:function(){return this.$tip=this.$tip||t(this.options.template)},validate:function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},enable:function(){this.enabled=!0},disable:function(){this.enabled=!1},toggleEnabled:function(){this.enabled=!this.enabled},toggle:function(e){var i=t(e.currentTarget)[this.type](this._options).data(this.type);i[i.tip().hasClass("in")?"hide":"show"]()},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}};var i=t.fn.tooltip;t.fn.tooltip=function(i){return this.each(function(){var o=t(this),n=o.data("tooltip"),s="object"==typeof i&&i;n||o.data("tooltip",n=new e(this,s)),"string"==typeof i&&n[i]()})},t.fn.tooltip.Constructor=e,t.fn.tooltip.defaults={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover",title:"",delay:0,html:!1},t.fn.tooltip.noConflict=function(){return t.fn.tooltip=i,this}}(window.jQuery),$(document).ready(function(){$('[data-toggle="tooltip"]').tooltip()});
// dark mode
document.getElementById("darkmode").addEventListener("click",function(){var e=document.body.classList.toggle("night");localStorage.setItem("darkmode-banner",e)}),jQuery(document).ready(function(e){e(function(){e("darkmode").click(function(e){e.preventDefault()})})});
// Ctrl u
var _0x4300=["onkeydown","ctrlKey","keyCode","Tempalte by Nguyễn Tỉnh?","OK, Người ta cho đằng ấy copy đấy nha. Ahihi!!!","Địt mẹ mày =)) Cố chấp vl"];document[_0x4300[0]]=function(n){if(n[_0x4300[1]]&&85===n[_0x4300[2]]){if(1!=confirm(_0x4300[3]))return alert(_0x4300[5]),!1;alert(_0x4300[4])}};
// console
console.log('%cDeveloped by Nguyễn Tỉnh 😎\n=> https://fb.com/StarTinhIT\nMua template liên hệ mình nhé!', 'font:2.5em Roboto;color:#ff0000')
// ripple
var parent,ink,d,x,y;$(".ripple").mouseup(function(e){ink.addClass("end")}),$(".ripple").mousedown(function(e){var i=$(this);0==(parent=i).find(".ink").length&&parent.append("<div class='splash-wrapper'><div class='ink'></div></div>"),(ink=parent.find(".ink")).removeClass("animate"),ink.removeClass("end"),ink.height()||ink.width()||(d=Math.max(parent.outerWidth(),parent.outerHeight()),ink.css({height:d,width:d})),x=e.pageX-parent.offset().left-ink.width()/2,y=e.pageY-parent.offset().top-ink.height()/2,ink.css({top:y+"px",left:x+"px"}).addClass("animate")});
// setup post
$('.post-body a').each(function() {
    var $this = $(this),
        type = $this.text().trim(),
        sp = type.split('/'),
        txt = sp[0],
        ico = sp[1],
        color = sp.pop();
    if (type.match('button')) {
        $this.addClass('button').text(txt);
        if (ico != 'button') {
            $this.addClass(ico)
        }
        if (color != 'button') {
            $this.addClass('colored-button').css({
                'background-color': color
            })
        }
    }
});
$('.post-body blockquote').each(function() {
    var $this = $(this),
        type = $this.text().trim(),
        html = $this.html();
    if (type.match('colorbox-success')) {
        $this.replaceWith('<div class="colorbox colorbox-success short-b">' + html + '</div>')
    }
    if (type.match('colorbox-info')) {
        $this.replaceWith('<div class="colorbox colorbox-info short-b">' + html + '</div>')
    }
    if (type.match('colorbox-warning')) {
        $this.replaceWith('<div class="colorbox colorbox-warning short-b">' + html + '</div>')
    }
    if (type.match('colorbox-danger')) {
        $this.replaceWith('<div class="colorbox colorbox-danger short-b">' + html + '</div>')
    }
    var $sb = $('.post-body .short-b').find('b');
    $sb.each(function() {
        var $b = $(this),
            $t = $b.text().trim();
        if ($t.match('colorbox-success') || $t.match('colorbox-info') || $t.match('colorbox-warning') || $t.match('colorbox-danger')) {
            $b.replaceWith("")
        }
    })
});
$('.post-body strike').each(function() {
    var $this = $(this),
        type = $this.text().trim(),
        html = $this.html();
    if (type.match('alert-success')) {
        $this.replaceWith('<div class="alert-message alert-success short-b">' + html + '</div>')
    }
    if (type.match('alert-info')) {
        $this.replaceWith('<div class="alert-message alert-info short-b">' + html + '</div>')
    }
    if (type.match('alert-warning')) {
        $this.replaceWith('<div class="alert-message alert-warning short-b">' + html + '</div>')
    }
    if (type.match('alert-danger')) {
        $this.replaceWith('<div class="alert-message alert-danger short-b">' + html + '</div>')
    }
    if (type.match('callout-success')) {
        $this.replaceWith('<div class="callout callout-success short-b">' + html + '</div>')
    }
    if (type.match('callout-info')) {
        $this.replaceWith('<div class="callout callout-info short-b">' + html + '</div>')
    }
    if (type.match('callout-warning')) {
        $this.replaceWith('<div class="callout callout-warning short-b">' + html + '</div>')
    }
    if (type.match('callout-danger')) {
        $this.replaceWith('<div class="callout callout-danger short-b">' + html + '</div>')
    }
    var $sb = $('.post-body .short-b').find('b');
    $sb.each(function() {
        var $b = $(this),
            $t = $b.text().trim();
        if ($t.match('alert-success') || $t.match('alert-info') || $t.match('alert-warning') || $t.match('alert-danger') || $t.match('callout-success') || $t.match('callout-info') || $t.match('callout-warning') || $t.match('callout-danger')) {
            $b.replaceWith("")
        }
    })
});
