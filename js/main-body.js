/*!-----------------------------------------------
*   Name: Template Blogspot App Premium Version
*   Version: 1.1.1
*   Last Updated: 27/05/2020
-----------------------------
-   Version 1.1.1 - 27/05/2020
+   Fix some bugs and add post shortcodes
-   Version 1.1.0 - 01/05/2020
+   Add slider automatically for images in posts
-   Version 1.0.0 - 25/04/2020
+   Initial Release
----------------------------------------------- */
/*! Theia Sticky Sidebar | v1.7.0 - https://github.com/WeCodePixels/theia-sticky-sidebar */
!function(i){i.fn.theiaStickySidebar=function(t){function e(t,e){return!0===t.initialized||!(i("body").width()<t.minWidth)&&(function(t,e){t.initialized=!0,0===i("#theia-sticky-sidebar-stylesheet-"+t.namespace).length&&i("head").append(i('<style id="theia-sticky-sidebar-stylesheet-'+t.namespace+'">.theiaStickySidebar:after {content: ""; display: table; clear: both;}</style>'));e.each(function(){var e={};if(e.sidebar=i(this),e.options=t||{},e.container=i(e.options.containerSelector),0==e.container.length&&(e.container=e.sidebar.parent()),e.sidebar.parents().css("-webkit-transform","none"),e.sidebar.css({position:e.options.defaultPosition,overflow:"visible","-webkit-box-sizing":"border-box","-moz-box-sizing":"border-box","box-sizing":"border-box"}),e.stickySidebar=e.sidebar.find(".theiaStickySidebar"),0==e.stickySidebar.length){var a=/(?:text|application)\/(?:x-)?(?:javascript|ecmascript)/i;e.sidebar.find("script").filter(function(i,t){return 0===t.type.length||t.type.match(a)}).remove(),e.stickySidebar=i("<div>").addClass("theiaStickySidebar").append(e.sidebar.children()),e.sidebar.append(e.stickySidebar)}e.marginBottom=parseInt(e.sidebar.css("margin-bottom")),e.paddingTop=parseInt(e.sidebar.css("padding-top")),e.paddingBottom=parseInt(e.sidebar.css("padding-bottom"));var n=e.stickySidebar.offset().top,s=e.stickySidebar.outerHeight();function d(){e.fixedScrollTop=0,e.sidebar.css({"min-height":"1px"}),e.stickySidebar.css({position:"static",width:"",transform:"none"})}e.stickySidebar.css("padding-top",1),e.stickySidebar.css("padding-bottom",1),n-=e.stickySidebar.offset().top,s=e.stickySidebar.outerHeight()-s-n,0==n?(e.stickySidebar.css("padding-top",0),e.stickySidebarPaddingTop=0):e.stickySidebarPaddingTop=1,0==s?(e.stickySidebar.css("padding-bottom",0),e.stickySidebarPaddingBottom=0):e.stickySidebarPaddingBottom=1,e.previousScrollTop=null,e.fixedScrollTop=0,d(),e.onScroll=function(e){if(e.stickySidebar.is(":visible"))if(i("body").width()<e.options.minWidth)d();else{if(e.options.disableOnResponsiveLayouts){var a=e.sidebar.outerWidth("none"==e.sidebar.css("float"));if(a+50>e.container.width())return void d()}var n,s,r=i(document).scrollTop(),c="static";if(r>=e.sidebar.offset().top+(e.paddingTop-e.options.additionalMarginTop)){var p,b=e.paddingTop+t.additionalMarginTop,l=e.paddingBottom+e.marginBottom+t.additionalMarginBottom,f=e.sidebar.offset().top,h=e.sidebar.offset().top+(n=e.container,s=n.height(),n.children().each(function(){s=Math.max(s,i(this).height())}),s),g=0+t.additionalMarginTop,S=e.stickySidebar.outerHeight()+b+l<i(window).height();p=S?g+e.stickySidebar.outerHeight():i(window).height()-e.marginBottom-e.paddingBottom-t.additionalMarginBottom;var u=f-r+e.paddingTop,m=h-r-e.paddingBottom-e.marginBottom,y=e.stickySidebar.offset().top-r,k=e.previousScrollTop-r;"fixed"==e.stickySidebar.css("position")&&"modern"==e.options.sidebarBehavior&&(y+=k),"stick-to-top"==e.options.sidebarBehavior&&(y=t.additionalMarginTop),"stick-to-bottom"==e.options.sidebarBehavior&&(y=p-e.stickySidebar.outerHeight()),y=k>0?Math.min(y,g):Math.max(y,p-e.stickySidebar.outerHeight()),y=Math.max(y,u),y=Math.min(y,m-e.stickySidebar.outerHeight());var v=e.container.height()==e.stickySidebar.outerHeight();c=(v||y!=g)&&(v||y!=p-e.stickySidebar.outerHeight())?r+y-e.sidebar.offset().top-e.paddingTop<=t.additionalMarginTop?"static":"absolute":"fixed"}if("fixed"==c){var x=i(document).scrollLeft();e.stickySidebar.css({position:"fixed",width:o(e.stickySidebar)+"px",transform:"translateY("+y+"px)",left:e.sidebar.offset().left+parseInt(e.sidebar.css("padding-left"))-x+"px",top:"0px"})}else if("absolute"==c){var T={};"absolute"!=e.stickySidebar.css("position")&&(T.position="absolute",T.transform="translateY("+(r+y-e.sidebar.offset().top-e.stickySidebarPaddingTop-e.stickySidebarPaddingBottom)+"px)",T.top="0px"),T.width=o(e.stickySidebar)+"px",T.left="",e.stickySidebar.css(T)}else"static"==c&&d();"static"!=c&&1==e.options.updateSidebarHeight&&e.sidebar.css({"min-height":e.stickySidebar.outerHeight()+e.stickySidebar.offset().top-e.sidebar.offset().top+e.paddingBottom}),e.previousScrollTop=r}},e.onScroll(e),i(document).on("scroll."+e.options.namespace,function(i){return function(){i.onScroll(i)}}(e)),i(window).on("resize."+e.options.namespace,function(i){return function(){i.stickySidebar.css({position:"static"}),i.onScroll(i)}}(e)),"undefined"!=typeof ResizeSensor&&new ResizeSensor(e.stickySidebar[0],function(i){return function(){i.onScroll(i)}}(e))})}(t,e),!0)}function o(i){var t;try{t=i[0].getBoundingClientRect().width}catch(i){}return void 0===t&&(t=i.width()),t}return(t=i.extend({containerSelector:"",additionalMarginTop:0,additionalMarginBottom:0,updateSidebarHeight:!0,minWidth:0,disableOnResponsiveLayouts:!0,sidebarBehavior:"modern",defaultPosition:"relative",namespace:"TSS"},t)).additionalMarginTop=parseInt(t.additionalMarginTop)||0,t.additionalMarginBottom=parseInt(t.additionalMarginBottom)||0,function(t,o){e(t,o)||(console.log("TSS: Body width smaller than options.minWidth. Init is delayed."),i(document).on("scroll."+t.namespace,function(t,o){return function(a){var n=e(t,o);n&&i(this).unbind(a)}}(t,o)),i(window).on("resize."+t.namespace,function(t,o){return function(a){var n=e(t,o);n&&i(this).unbind(a)}}(t,o)))}(t,this),this}}(jQuery);

/*! Shortcode.js by @nicinabox | v1.1.0 - https://github.com/nicinabox/shortcode.js */
var Shortcode=function(e,t){e&&(this.el=e,this.tags=t,this.matches=[],this.regex="\\[{name}(\\s[\\s\\S]*?)?\\](?:((?!\\s*?(?:\\[{name}|\\[\\/(?!{name})))[\\s\\S]*?)(\\[/{name}\\]))?",this.el.jquery&&(this.el=this.el[0]),this.matchTags(),this.convertMatchesToNodes(),this.replaceNodes())};if(Shortcode.prototype.matchTags=function(){var e,t,a,r,n,s,o,i=this.el.outerHTML;for(var c in this.tags){if(!this.tags.hasOwnProperty(c))return;a=this.template(this.regex,{name:c});for(var h=0,p=(e=i.match(new RegExp(a,"g"))||[]).length;h<p;h++)r=(t=e[h].match(new RegExp(a)))[3]?"":void 0,s=t[0],n=this.escapeTagRegExp(s),o=this.parseOptions(t[1]),t[2]&&(r=t[2].trim(),s=s.replace(r,"").replace(/\n\s*/g,""),n=this.escapeTagRegExp(s).replace("\\]\\[","\\]([\\s\\S]*?)\\[")),this.matches.push({name:c,tag:s,regex:n,options:o,contents:r})}},Shortcode.prototype.convertMatchesToNodes=function(){var e,t,a=this.el.innerHTML;t=function(e,t,a,r,n,s,o){if(t)return e;var i=document.createElement("span");return i.setAttribute("data-sc-tag",this.tag),i.className="templateify-sc-node templateify-sc-node-"+this.name,i.outerHTML};for(var r=0,n=this.matches.length;r<n;r++)'((data-sc-tag=")|(<pre.*)|(<code.*))?',e=new RegExp('((data-sc-tag=")|(<pre.*)|(<code.*))?'+this.matches[r].regex,"g"),a=a.replace(e,t.bind(this.matches[r]));this.el.innerHTML=a},Shortcode.prototype.replaceNodes=function(){var e,t,a,r,n,s=this;this.el.querySelectorAll(".templateify-sc-node");n=function(e){e.jquery&&(e=e[0]),e=s.parseCallbackResult(e),r.parentNode.replaceChild(e,r)};for(var o=0,i=this.matches.length;o<i;o++)e=this.matches[o],(r=this.el.querySelector(".templateify-sc-node-"+e.name))&&r.dataset.scTag===e.tag&&void 0!==(t=this.tags[e.name].bind(e)(a=n.bind(e)))&&a(t)},Shortcode.prototype.parseCallbackResult=function(e){var t,a,r;switch(typeof e){case"function":e=document.createTextNode(e());break;case"string":if(t=document.createElement("div"),a=document.createDocumentFragment(),t.innerHTML=e,(r=t.childNodes).length){for(var n=0,s=r.length;n<s;n++)a.appendChild(r[n].cloneNode(!0));e=a}else e=document.createTextNode(e);break;case"object":e.nodeType||(e=JSON.stringify(e),e=document.createTextNode(e))}return e},Shortcode.prototype.parseOptions=function(e){var t,a={};if(e){(t=e.replace(/(\w+=)/g,"\n$1").split("\n")).shift();for(var r=0;r<t.length;r++){var n=t[r].split("=");a[n[0]]=n[1].replace(/\'|\"/g,"").trim()}return a}},Shortcode.prototype.escapeTagRegExp=function(e){return e.replace(/[\[\]\/]/g,"\\$&")},Shortcode.prototype.template=function(e,t){for(var a in t)e=e.replace(new RegExp("{"+a+"}","g"),t[a]);return e},String.prototype.trim=String.prototype.trim||function(){return this.replace(/^\s+|\s+$/g,"")},window.jQuery){var pluginName="shortcode";$.fn[pluginName]=function(e){return this.each(function(){$.data(this,pluginName)||$.data(this,pluginName,new Shortcode(this,e))}),this}};

/*! MenuIfy by Templateify | v1.0.0 - https://www.prodavad.com */
!function(a){a.fn.menuify=function(){return this.each(function(){var $t=a(this),b=$t.find('.LinkList ul > li').children('a'),c=b.length;for(var i=0;i<c;i++){var d=b.eq(i),h=d.text();if(h.charAt(0)!=='_'){var e=b.eq(i+1),j=e.text();if(j.charAt(0)==='_'){var m=d.parent();m.append('<ul class="sub-menu m-sub"/>');}}if(h.charAt(0)==='_'){d.text(h.replace('_',''));d.parent().appendTo(m.children('.sub-menu'));}}for(var i=0;i<c;i++){var f=b.eq(i),k=f.text();if(k.charAt(0)!=='_'){var g=b.eq(i+1),l=g.text();if(l.charAt(0)==='_'){var n=f.parent();n.append('<ul class="sub-menu2 m-sub"/>');}}if(k.charAt(0)==='_'){f.text(k.replace('_',''));f.parent().appendTo(n.children('.sub-menu2'));}}$t.find('.LinkList ul li ul').parent('li').addClass('has-sub');});}}(jQuery);

/*! Tabify by Templateify | v1.0.0 */
!function(a){a.fn.tabify=function(t){return t=jQuery.extend({onHover:!1,animated:!0,transition:"fadeInUp"},t),this.each(function(){var e=a(this),s=e.children("[tab-ify]"),i="tab-active";if(1==t.onHover)var n="mouseenter";else n="click";e.prepend('<ul class="select-tab"></ul>'),s.each(function(){1==t.animated&&a(this).addClass("tab-animated"),e.find(".select-tab").append('<li><a href="javascript:;">'+a(this).attr("tab-ify")+"</a></li>")}).eq(0).addClass(i).addClass("tab-"+t.transition),e.find(".select-tab a").on(n,function(){var e=a(this).parent().index();return a(this).closest(".select-tab").find(".active").removeClass("active"),a(this).parent().addClass("active"),s.removeClass(i).removeClass("tab-"+t.transition).eq(e).addClass(i).addClass("tab-"+t.transition),!1}).eq(0).parent().addClass("active")})}}(jQuery);

/*! jQuery replaceText by "Cowboy" Ben Alman | v1.1.0 - http://benalman.com/projects/jquery-replacetext-plugin/ */
(function($){$.fn.replaceText=function(b,a,c){return this.each(function(){var f=this.firstChild,g,e,d=[];if(f){do{if(f.nodeType===3){g=f.nodeValue;e=g.replace(b,a);if(e!==g){if(!c&&/</.test(e)){$(f).before(e);d.push(f)}else{f.nodeValue=e}}}}while(f=f.nextSibling)}d.length&&$(d).remove()})}})(jQuery);

/*! dark mode */
function auto(){document.body.classList.add('auto');if(new Date().getHours()>21||new Date().getHours()<6){document.body.classList.add('dark');localStorage.setItem('636724dark','true')}else{document.body.classList.remove('dark');localStorage.setItem('636724dark','false')}}function dark(){localStorage.getItem('636724dark')=='true'?document.body.classList.add('dark'):document.body.classList.remove('dark')}if(localStorage.getItem('636724auto')=='true'){auto()}else{localStorage.getItem('636724dark')==null?auto():dark()}function toggle(){localStorage.setItem('636724auto',localStorage.getItem('636724auto')=='true'?'false':'true');localStorage.getItem('636724auto')=='true'?auto():document.body.classList.remove('auto')}function mode(){document.body.classList.remove('auto');localStorage.removeItem('636724auto');localStorage.setItem('636724dark',localStorage.getItem('636724dark')=='true'?'false':'true');dark()};

! function(a) {
    a.fn.lazyify = function() {
        return this.each(function() {
            var t = a(this),
                dImg = t.attr('data-image'),
                iWid = Math.round(t.width()),
                iHei = Math.round(t.height()),
                iSiz = '/w' + iWid + '-h' + iHei + '-p-k-no-nu',
                img = '';
            if (dImg.match('s72-c')) {
                img = dImg.replace('/s72-c', iSiz)
            } else if (dImg.match('w72-h')) {
                img = dImg.replace('/w72-h72-p-k-no-nu', iSiz)
            } else {
                img = dImg
            }
            a(window).on('resize scroll', lazyOnScroll);
            function lazyOnScroll() {
                var wHeight = a(window).height(),
                    scrTop = a(window).scrollTop(),
                    offTop = t.offset().top;
                if (scrTop + wHeight > offTop) {
                    var n = new Image();
                    n.onload = function() {
                        t.attr('style', 'background-image:url(' + this.src + ')').addClass('lazy-ify')
                    }, n.src = img
                }
            }
            lazyOnScroll()
        })
    }
}(jQuery);
$('#startinhitnews-main-menu').menuify();
$('#startinhitnews-main-menu .widget').addClass('show-menu');
$(".show-search").click(function() {
    $(this), $("#search-form").toggleClass("show")
});
$('.blog-posts-headline,.related-title').each(function() {
    var $t = $(this),
        $m = $t.find('.more'),
        $mT = showMoreText;
    if ($mT != '') {
        $m.text($mT)
    }
});
$('.follow-by-email-text').each(function() {
    var $t = $(this),
        $fbet = followByEmailText;
    if ($fbet != '') {
        $t.text($fbet)
    }
});
$('#post-body').shortcode({
    ads: function() {
        if (this.options != undefined) {
            var i = this.options.id;
            switch (i) {
                case 'ads1':
                    return '<div id="new-before-ad"/>';
                    break;
                case 'ads2':
                    return '<div id="new-after-ad"/>';
                    break;
                default:
                    return '';
                    break
            }
        }
    }
});
$('#new-before-ad').each(function() {
    var $t = $(this);
    if ($t.length) {
        $('#before-ad').appendTo($t)
    }
});
$('#new-after-ad').each(function() {
    var $t = $(this);
    if ($t.length) {
        $('#after-ad').appendTo($t)
    }
});
$('#main-before-ad .widget').each(function() {
    var $t = $(this);
    if ($t.length) {
        $t.appendTo($('#before-ad'))
    }
});
$('#main-after-ad .widget').each(function() {
    var $t = $(this);
    if ($t.length) {
        $t.appendTo($('#after-ad'))
    }
});
$('#social-counter ul.social-icons li a').each(function() {
    var $t = $(this),
        $a = $t.find('.count'),
        $d = $t.data('content').trim(),
        $s = $d.split('$'),
        $u = $s[0],
        $c = $s[1];
    $t.attr('href', $u);
    $a.text($c)
});
$('#sidebar-tabs').each(function() {
    $('#sidebar-tabs .widget').each(function() {
        var textTab = $(this).find('.widget-title > h3').text().trim();
        $(this).attr('tab-ify', textTab)
    });
    $('#sidebar-tabs').tabify();
    var wCount = $('#sidebar-tabs .widget').length;
    if (wCount >= 1) {
        $(this).addClass('tabs-' + wCount).show()
    }
});

$('.avatar-image-container img').attr('src', function($this, i) {
    i = i.replace('//resources.blogblog.com/img/blank.gif', '//1.bp.blogspot.com/-oSjP8F09qxo/Wy1J9dp7b0I/AAAAAAAACF0/ggcRfLCFQ9s2SSaeL9BFSE2wyTYzQaTyQCK4BGAYYCw/s72-r/avatar.jpg');
    i = i.replace('//img1.blogblog.com/img/blank.gif', '//1.bp.blogspot.com/-oSjP8F09qxo/Wy1J9dp7b0I/AAAAAAAACF0/ggcRfLCFQ9s2SSaeL9BFSE2wyTYzQaTyQCK4BGAYYCw/s72-r/avatar.jpg');
    return i
});
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
                'background': color
            })
        }
    }
    if (type.match('source')) {
        $this.addClass('data-source').html('<span>Source </span><span class="data-source__name">' + txt + '</span><i aria-hidden="true" class="fa fa-external-link"></i>').wrap('<div id="source"></div>');
    }
    if (type.match('is-link')) {
        $this.addClass('is-link').text(txt);
        if (ico != 'is-link') {
            $this.text(txt + ' (.' + ico + ')');
        }
        if (color != 'is-link') {
            $this.addClass('colored-is-link').css({
                'background-color': 'transparent',
                'border': 'solid 1px' + color,
                'color': color
            })
            $this.hover(function() {
                $this.css({
                    'background-color': color,
                    'border': 'solid 1px' + color,
                    'color': '#ffffff'
                })
            }, function() {
                $this.css({
                    'background-color': 'transparent',
                    'border': 'solid 1px' + color,
                    'color': color
                })
            });
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
    if (type.match('descriptions')) {
            $this.replaceWith('<div id="descriptions"> <div class="descriptions-item1"><div class="descriptions-cont short-b" id="descriptions-cont">'+ html +'</div><div class="mask-descriptions"></div></div><div class="descriptions-item2"> <div class="descriptions-title"><span>Đọc thêm</span></div><div class="descriptions-title hidden"><span>Thu gọn</span></div></div></div>')
    }
    if (type.match('code-css')) {
        $this.replaceWith('<pre class="css short-b">' + html + '</pre>')
    }
    if (type.match('code-js')) {
        $this.replaceWith('<pre class="javascript short-b">' + html + '</pre>')
    }
    if (type.match('code-xml')) {
        $this.replaceWith('<pre class="xml short-b">' + html + '</pre>')
    }
    if (type.match('code-php')) {
        $this.replaceWith('<pre class="php short-b">' + html + '</pre>')
    }
    if (type.match('code-scss')) {
        $this.replaceWith('<pre class="scss short-b">' + html + '</pre>')
    }
    if (type.match('slider-img')) {
        $this.replaceWith('<div class="slider-img short-b">'+ html +'</div>');
        $('.slider-img').owlCarousel({
            items: 2,
            loop: true,
            margin: 10,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            autoHeight:true,
            stagePadding: 30,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                },
                681:{
                    items:2,
                }
            }
        });
    }
    var $sb = $('.post-body .short-b').find('b');
    $sb.each(function() {
        var $b = $(this),
            $t = $b.text().trim();
        if ($t.match('descriptions') || $t.match('slider-img') || $t.match('colorbox-success') || $t.match('colorbox-info') || $t.match('colorbox-warning') || $t.match('colorbox-danger') || $t.match('code-css') || $t.match('code-js') || $t.match('code-xml') || $t.match('code-php') || $t.match('code-scss')) {
            $b.replaceWith("")
        }
    })
});
$('.post-body strike').each(function() {
    var $this = $(this),
        type = $this.text().trim(),
        html = $this.html();
    if (type.match('contact-form')) {
        $this.replaceWith('<div class="contact-form"/>');
        $('.contact-form').append($('#ContactForm1'))
    }
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
    if (type.match('code')) {
        $this.replaceWith('<code class="short-b">' + html + '</code>')
    }
    if (type.match('kbd')) {
        $this.replaceWith('<kbd class="short-b">' + html + '</kbd>')
    }
    if (type.match('left-sidebar')) {
        $this.replaceWith('<style>.item #main-wrapper{float:right}.item #sidebar-wrapper{float:left}</style>')
    }
    if (type.match('right-sidebar')) {
        $this.replaceWith('<style>.item #main-wrapper{float:left}.item #sidebar-wrapper{float:right}</style>')
    }
    if (type.match('full-width')) {
        $this.replaceWith('<style>.item #main-wrapper{width:100%}.item #sidebar-wrapper{display:none}</style>')
    }
    var $sb = $('.post-body .short-b').find('b');
    $sb.each(function() {
        var $b = $(this),
            $t = $b.text().trim();
        if ($t.match('alert-success') || $t.match('alert-info') || $t.match('alert-warning') || $t.match('alert-danger') || $t.match('callout-success') || $t.match('callout-info') || $t.match('callout-warning') || $t.match('callout-danger') || $t.match('code') || $t.match('kbd')) {
            $b.replaceWith("")
        }
    })
});
$('.about-author .author-description span a').each(function() {
    var $this = $(this),
        cls = $this.text().trim(),
        url = $this.attr('href');
    $this.replaceWith('<li class="' + cls + '"><a href="' + url + '" title="' + cls + '" target="_blank"/></li>');
    $('.author-description').append($('.author-description span li'));
    $('.author-description').addClass('show-icons')
});

$('.footer-widgets-wrap').each(function() {
    var $t = $(this),
        $n = $t.find('.no-items').length;
    if ($n == 3) {
        $('#footer-wrapper').addClass('compact-footer')
    }
});

$('#startinhitnews-main-menu li').each(function() {
    var lc = $(this),
        ltx = lc.find('a'),
        am = ltx.attr('href'),
        st = am.toLowerCase(),
        $this = lc,
        li = $this,
        text = st;
    if (st.match('getmega')) {
        $this.addClass('has-sub mega-menu').append('<div class="getMega">' + am + '</div>')
    }
    $this.find('.getMega').shortcode({
        getMega: function() {
            var label = this.options.label,
                type = this.options.type,
                num = 5;
            ajaxMega($this, type, num, label, text);
            if (type == 'mtabs') {
                if (label != undefined) {
                    label = label.split('/')
                }
                megaTabs(li, type, label)
            }
        }
    })
});

function megaTabs(li, type, label) {
    if (type == 'mtabs') {
        if (label != undefined) {
            var lLen = label.length,
                code = '<ul class="complex-tabs">';
            for (var i = 0; i < lLen; i++) {
                var tag = label[i];
                if (tag) {
                    code += '<div class="mega-tab" tab-ify="' + tag + '"/>'
                }
            }
            code += '</ul>';
            li.addClass('mega-tabs mtabs').append(code);
            li.find('a:first').attr('href', 'javascript:;');
            $('.mega-tab').each(function() {
                var $this = $(this),
                    label = $this.attr('tab-ify');
                ajaxMega($this, 'megatabs', 4, label, 'getmega')
            });
            li.find('ul.complex-tabs').tabify({
                onHover: true
            })
        } else {
            li.addClass('mega-tabs').append('<ul class="mega-widget">' + msgError() + '</ul>')
        }
    }
}

$('#breaking-sec .HTML .widget-content').each(function() {
    var $this = $(this),
        text = $this.text().trim().toLowerCase();
    $this.shortcode({
        getBreaking: function() {
            var num = this.options.results,
                label = this.options.label;
            ajaxBreaking($this, 'breaking', num, label, text)
        }
    })
});

$('#featured-sec .HTML .widget-content').each(function() {
    var $this = $(this),
        text = $this.text().trim().toLowerCase();
    $this.shortcode({
        getFeatured: function() {
            var label = this.options.label,
                type = this.options.type;
            switch (type) {
                case 'featured1':
                    var num = 4;
                    break;
                case 'featured3':
                    num = 6;
                    break;
                case 'featured6':
                    num = 3;
                    break;
                default:
                    num = 5;
                    break
            }
            ajaxFeatured($this, type, num, label, text)
        }
    })
});
$('.block-posts .HTML .widget-content').each(function() {
    var $this = $(this),
        text = $this.text().trim().toLowerCase();
    $this.shortcode({
        getBlock: function() {
            var num = this.options.results,
                label = this.options.label,
                type = this.options.type;
            ajaxBlock($this, type, num, label, text)
        }
    })
});

$('.startinhitnews-widget-ready .HTML .widget-content').each(function() {
    var $this = $(this),
        text = $this.text().trim().toLowerCase();
    $this.shortcode({
        getWidget: function() {
            var num = this.options.results,
                label = this.options.label,
                type = this.options.type;
            ajaxWidget($this, type, num, label, text)
        }
    })
});
$('.startinhitnews-related-content').each(function() {
    var $this = $(this),
        label = $this.find('.related-tag').attr('data-label'),
        num = relatedPostsNum;
    if (num >= 6) {
        num = 6
    } else {
        num = 3
    }
    ajaxRelated($this, 'related', num, label, 'getrelated')
});

function msgError() {
    return '<span class="no-posts"><b>Error:</b> No Results Found</span>'
}

function msgServerError() {
    return '<div class="no-posts error-503"><b>Failed to load resource:</b> the server responded with a status of 503</div>'
}

function beforeLoader() {
    return '<div class="spinner"/>'
}

function getFeedUrl(type, num, label) {
    var furl = '';
    switch (label) {
        case 'recent':
            furl = '/feeds/posts/summary?alt=json&max-results=' + num;
            break;
        case 'comments':
            if (type == 'list') {
                furl = '/feeds/comments/summary?alt=json&max-results=' + num
            } else {
                furl = '/feeds/posts/summary/-/' + label + '?alt=json&max-results=' + num
            }
            break;
        default:
            furl = '/feeds/posts/summary/-/' + label + '?alt=json&max-results=' + num;
            break
    }
    return furl
}

function getPostLink(feed, i) {
    for (var x = 0; x < feed[i].link.length; x++)
        if (feed[i].link[x].rel == 'alternate') {
            var link = feed[i].link[x].href;
            break
        } return link
}

function getPostTitle(feed, i) {
    var n = feed[i].title.$t;
    return n
}

function getPostImage(feed, i) {
    if ('media$thumbnail' in feed[i]) {
        var src = feed[i].media$thumbnail.url;
        if (src.match('img.youtube.com')) {
            src = src.replace('/default.', '/0.')
        }
        var img = src
    } else {
        img = 'https://4.bp.blogspot.com/-eALXtf-Ljts/WrQYAbzcPUI/AAAAAAAABjY/vptx-N2H46oFbiCqbSe2JgVSlHhyl0MwQCK4BGAYYCw/s72-c/nth-ify.png'
    }
    return img
}

function getPostAuthor(feed, i) {
    var n = feed[i].author[0].name.$t,
        by = messages.postedBy,
        em = '';
    if (by != '') {
        em = '<em>' + by + '</em>'
    } else {
        em = ''
    }
    var code = '<span class="entry-author">' + em + '<span class="by">' + n + '</span></span>';
    return code
}

function getPostDate(feed, i) {
    var c = feed[i].published.$t,
        d = c.substring(0, 4),
        f = c.substring(5, 7),
        m = c.substring(8, 10),
        h = monthFormat[parseInt(f, 10) - 1] + ' ' + m + ', ' + d;
    var on = messages.postedOn,
        em = '';
    if (on != '') {
        em = '<em>' + on + '</em>'
    } else {
        em = ''
    }
    var code = ['<span class="entry-time">' + em + '<time class="published" datetime="' + c + '">' + h + '</time></span>', '<span class="entry-time"><time class="published" datetime="' + c + '">' + h + '</time></span>'];
    return code
}

function getPostLabel(feed, i) {
    if (feed[i].category != undefined) {
        var tag = feed[i].category[0].term,
            code = '<span class="entry-category">' + tag + '</span>'
    } else {
        code = ''
    }
    return code
}

function getPostSnippet(feed, i) {
    var n = feed[i].summary.$t,
        u = $('<div>').html(n),
        c = u.text().trim().substr(0, 150),
        code = '<div class="entry-snippet">' + c + '\u2026</div>';
    return code
}

function getNumberComments(feed, i) {
    if ('thr$total' in feed[i]) {
        var u = feed[i].thr$total.$t,
            code = '<div class="number-comments">' + u + '</div>';
    }
    return code
}

function getPostComments(feed, i, link) {
    var n = feed[i].author[0].name.$t,
        e = feed[i].author[0].gd$image.src.replace('/s113', '/w72-h72-p-k-no-nu'),
        h = feed[i].title.$t;
    if (e.match('//img1.blogblog.com/img/blank.gif')) {
        var img = '//4.bp.blogspot.com/-oSjP8F09qxo/Wy1J9dp7b0I/AAAAAAAACF0/ggcRfLCFQ9s2SSaeL9BFSE2wyTYzQaTyQCK4BGAYYCw/w72-h72-p-k-no-nu/avatar.jpg'
    } else {
        var img = e
    }
    var code = '<article class="custom-item item-' + i + '"><a class="entry-image-link cmm-avatar" href="' + link + '"><span class="entry-thumb" data-image="' + img + '"/></a><h2 class="entry-title"><a href="' + link + '">' + n + '</a></h2><span class="cmm-snippet excerpt">' + h + '</span></article>';
    return code
}

function getFeatMeta(type, i, author, date) {
    var code = '<div class="entry-meta">' + date[1] + '</div>';
    switch (type) {
        case 'featured1':
        case 'featured2':
        case 'featured3':
        case 'featured4':
        case 'featured5':
        case 'featured6':
            switch (i) {
                case 0:
                    switch (type) {
                        case 'featured1':
                        case 'featured2':
                        case 'featured4':
                            code = '<div class="entry-meta">' + author + date[0] + '</div>';
                            break
                    }
                    break;
                case 1:
                    switch (type) {
                        case 'featured4':
                            code = '<div class="entry-meta">' + author + date[0] + '</div>';
                            break
                    }
                    break
            }
            break
    }
    return code
}

function getAjax($this, type, num, label) {
    switch (type) {
        case 'msimple':
        case 'megatabs':
        case 'breaking':
        case 'featured1':
        case 'featured2':
        case 'featured3':
        case 'featured4':
        case 'featured5':
        case 'featured6':
        case 'block1':
        case 'block2':
        case 'col-left':
        case 'col-right':
        case 'grid1':
        case 'grid2':
        case 'carousel':
        case 'videos':
        case 'list':
        case 'related':
            if (label == undefined) {
                label = 'geterror404'
            }
            var furl = getFeedUrl(type, num, label);
            $.ajax({
                url: furl,
                type: 'GET',
                dataType: 'json',
                cache: true,
                beforeSend: function(data) {
                    switch (type) {
                        case 'featured1':
                        case 'featured2':
                        case 'featured3':
                        case 'featured4':
                        case 'featured5':
                        case 'featured6':
                            $this.html(beforeLoader()).parent().addClass('show-ify show-' + type + '');
                            break;
                        case 'block1':
                        case 'block2':
                        case 'grid1':
                        case 'grid2':
                        case 'videos':
                        case 'carousel':
                        case 'related':
                            $this.html(beforeLoader()).parent().addClass('show-ify');
                            break;
                        case 'col-left':
                            $this.html(beforeLoader()).parent().addClass('column-left block-column show-ify');
                            break;
                        case 'col-right':
                            $this.html(beforeLoader()).parent().addClass('column-right block-column show-ify');
                            break;
                        case 'list':
                            $this.html(beforeLoader());
                            break
                    }
                },
                success: function(data) {
                    var html = '';
                    switch (type) {
                        case 'msimple':
                        case 'megatabs':
                            html = '<ul class="mega-widget">';
                            break;
                        case 'breaking':
                            html = '<div class="breaking-news">';
                            break;
                        case 'featured1':
                        case 'featured2':
                        case 'featured3':
                        case 'featured4':
                        case 'featured5':
                        case 'featured6':
                            html = '<div class="featured-grid ' + type + '">';
                            break;
                        case 'block1':
                            html = '<div class="block-posts-1">';
                            break;
                        case 'block2':
                            html = '<div class="block-posts-2 total-' + num + '">';
                            break;
                        case 'col-left':
                        case 'col-right':
                            html = '<div class="column-posts">';
                            break;
                        case 'grid1':
                            html = '<div class="grid-posts-1 total-' + num + '">';
                            break;
                        case 'grid2':
                            html = '<div class="grid-posts-2">';
                            break;
                        case 'carousel':
                            html = '<div class="block-carousel">';
                            break;
                        case 'videos':
                            html = '<div class="block-videos total-' + num + '">';
                            break;
                        case 'list':
                            html = '<div class="custom-widget">';
                            break;
                        case 'related':
                            html = '<div class="related-posts total-' + num + '">';
                            break
                    }
                    var entry = data.feed.entry;
                    if (entry != undefined) {
                        for (var i = 0, feed = entry; i < feed.length; i++) {
                            var link = getPostLink(feed, i),
                                title = getPostTitle(feed, i, link),
                                image = getPostImage(feed, i, link),
                                author = getPostAuthor(feed, i),
                                date = getPostDate(feed, i),
                                tag = getPostLabel(feed, i),
                                snippet = getPostSnippet(feed, i),
                                comments = getNumberComments(feed, i),
                                feat_meta = getFeatMeta(type, i, author, date);
                            var content = '';
                            switch (type) {
                                case 'msimple':
                                case 'megatabs':
                                    content += '<article class="mega-item"><div class="mega-content"><a class="entry-image-link" href="' + link + '"><span class="entry-thumb" data-image="' + image + '"/></a><h2 class="entry-title"><a href="' + link + '">' + title + '</a></h2><div class="entry-meta">' + date[1] + '</div></div></article>';
                                    break;
                                case 'breaking':
                                    content += '<article class="breaking-item"><h2 class="entry-title"><a href="' + link + '">' + title + '</a></h2></article>';
                                    break;
                                case 'featured1':
                                case 'featured2':
                                case 'featured3':
                                case 'featured4':
                                case 'featured5':
                                case 'featured6':
                                    switch (i) {
                                        case 0:
                                            content += '<article class="featured-item item-' + i + '"><div class="featured-item-inner"><a class="entry-image-link before-mask" href="' + link + '"><span class="entry-thumb" data-image="' + image + '"/></a><div class="entry-info">' + tag + '<h2 class="entry-title"><a href="' + link + '">' + title + '</a></h2>' + feat_meta + '</div></div></article><div class="featured-scroll">';
                                            break;
                                        default:
                                            content += '<article class="featured-item item-' + i + '"><div class="featured-item-inner"><a class="entry-image-link before-mask" href="' + link + '"><span class="entry-thumb" data-image="' + image + '"/></a><div class="entry-info">' + tag + '<h2 class="entry-title"><a href="' + link + '">' + title + '</a></h2>' + feat_meta + '</div></div></article>';
                                            break
                                    }
                                    break;
                                case 'block1':
                                    switch (i) {
                                        case 0:
                                            content += '<article class="block-item item-' + i + '"><div class="block-inner"><a class="entry-image-link" href="' + link + '"><span class="entry-thumb" data-image="' + image + '"/></a>' + tag + '</div><h2 class="entry-title"><a href="' + link + '">' + title + '</a></h2><div class="entry-meta">' + author + date[0] + comments + '</div>' + snippet + '</article>';
                                            break;
                                        default:
                                            content += '<article class="block-item item-' + i + '"><a class="entry-image-link" href="' + link + '"><span class="entry-thumb" data-image="' + image + '"/></a><div class="entry-header"><h2 class="entry-title"><a href="' + link + '">' + title + '</a></h2><div class="entry-meta">' + date[1] + '</div></div></article>';
                                            break
                                    }
                                    break;
                                case 'block2':
                                    switch (i) {
                                        case 0:
                                            content += '<article class="block-item item-' + i + '"><div class="block-inner"><a class="entry-image-link" href="' + link + '"><span class="entry-thumb" data-image="' + image + '"/></a><div class="entry-info">' + tag + '<h2 class="entry-title"><a href="' + link + '">' + title + '</a></h2><div class="entry-meta">' + author + date[0] + '</div></div></div></article><div class="block-grid">';
                                            break;
                                        default:
                                            content += '<article class="block-item item-' + i + '"><div class="entry-image"><a class="entry-image-link" href="' + link + '"><span class="entry-thumb" data-image="' + image + '"/></a></div><h2 class="entry-title"><a href="' + link + '">' + title + '</a></h2><div class="entry-meta">' + date[1] + '</div></article>';
                                            break
                                    }
                                    break;
                                case 'col-left':
                                case 'col-right':
                                    switch (i) {
                                        case 0:
                                            content += '<article class="column-item item-' + i + '"><div class="column-inner"><a class="entry-image-link" href="' + link + '"><span class="entry-thumb" data-image="' + image + '"/></a>' + tag + '</div><h2 class="entry-title"><a href="' + link + '">' + title + '</a></h2><div class="entry-meta">' + author + date[0] + comments + '</div>' + snippet + '</article>';
                                            break;
                                        default:
                                            content += '<article class="column-item item-' + i + '"><a class="entry-image-link" href="' + link + '"><span class="entry-thumb" data-image="' + image + '"/></a><div class="entry-header"><h2 class="entry-title"><a href="' + link + '">' + title + '</a></h2><div class="entry-meta">' + date[1] + '</div></div></article>';
                                            break
                                    }
                                    break;
                                case 'grid1':
                                    content += '<article class="grid-item item-' + i + '"><div class="entry-image"><a class="entry-image-link" href="' + link + '"><span class="entry-thumb" data-image="' + image + '"/></a></div><h2 class="entry-title"><a href="' + link + '">' + title + '</a></h2><div class="entry-meta">' + date[1] + '</div></article>';
                                    break;
                                case 'grid2':
                                    content += '<article class="grid-item item-' + i + '"><div class="entry-image"><a class="entry-image-link" href="' + link + '"><span class="entry-thumb" data-image="' + image + '"/></a>' + tag + '</div><h2 class="entry-title"><a href="' + link + '">' + title + '</a></h2><div class="entry-meta">' + author + date[0] + comments + '</div>' + snippet + '</article>';
                                    break;
                                case 'carousel':
                                    content += '<article class="carousel-item item-' + i + '"><div class="entry-image"><a class="entry-image-link" href="' + link + '"><span class="entry-thumb" data-image="' + image + '"/></a></div><h2 class="entry-title"><a href="' + link + '">' + title + '</a></h2><div class="entry-meta">' + date[1] + '</div></article>';
                                    break;
                                case 'videos':
                                    content += '<article class="videos-item item-' + i + '"><div class="entry-image"><a class="entry-image-link" href="' + link + '"><span class="entry-thumb" data-image="' + image + '"/><span class="video-icon"/></a></div><h2 class="entry-title"><a href="' + link + '">' + title + '</a></h2><div class="entry-meta">' + date[1] + '</div></article>';
                                    break;
                                case 'list':
                                    switch (label) {
                                        case 'comments':
                                            var code = getPostComments(feed, i, link);
                                            content += code;
                                            break;
                                        default:
                                            content += '<article class="custom-item item-' + i + '"><a class="entry-image-link" href="' + link + '"><span class="entry-thumb" data-image="' + image + '"/></a><div class="entry-header"><h2 class="entry-title"><a href="' + link + '">' + title + '</a></h2><div class="entry-meta">' + date[1] + '</div></div></article>';
                                            break
                                    }
                                    break;
                                case 'related':
                                    content += '<article class="related-item item-' + i + '"><div class="related-item-inner"><div class="entry-image"><a class="entry-image-link" href="' + link + '"><span class="entry-thumb" data-image="' + image + '"/></a></div><h2 class="entry-title"><a href="' + link + '">' + title + '</a></h2><div class="entry-meta">' + date[1] + '</div></div></article>';
                                    break
                            }
                            html += content
                        }
                    } else {
                        switch (type) {
                            case 'msimple':
                            case 'megatabs':
                                html = '<ul class="mega-widget">' + msgError() + '</ul>';
                                break;
                            default:
                                html = msgError();
                                break
                        }
                    }
                    switch (type) {
                        case 'msimple':
                            html += '</ul>';
                            $this.append(html).addClass('msimple');
                            $this.find('a:first').attr('href', function($this, href) {
                                switch (label) {
                                    case 'recent':
                                        href = href.replace(href, '/search');
                                        break;
                                    default:
                                        href = href.replace(href, '/search/label/' + label);
                                        break
                                }
                                return href
                            });
                            break;
                        case 'breaking':
                            html += '</div></ul>';
                            $this.html(html).parent().addClass('show-ify');
                            var $slider = $this.find('.breaking-news, .entry-thumb');
                            $slider.owlCarousel({
                                items: 1,
                                animateOut: 'fadeOutRight',
                                animateIn: 'fadeInRight',
                                smartSpeed: 0,
                                nav: true,
                                navText: ['', ''],
                                loop: true,
                                autoplay: true,
                                autoplayTimeout: 3000,
                                autoplayHoverPause: true,
                                dots: false,
                                mouseDrag: false,
                                touchDrag: false,
                                freeDrag: false,
                                pullDrag: false
                            });
                            break;
                        case 'featured1':
                        case 'featured2':
                        case 'featured3':
                        case 'featured4':
                        case 'featured5':
                        case 'featured6':
                            html += '</div></div>';
                            $this.html(html);
                            break;
                        case 'block1':
                        case 'grid1':
                        case 'grid2':
                        case 'col-left':
                        case 'col-right':
                        case 'videos':
                            html += '</div>';
                            $this.html(html);
                            break;
                        case 'block2':
                            html += '</div></div>';
                            $this.html(html);
                            break;
                        case 'carousel':
                            html += '</div>';
                            $this.html(html);
                            var $slider = $this.find('.block-carousel');
                            $slider.owlCarousel({
                                items:3,
                                loop:true,
                                margin:20,
                                autoplay:true,
                                autoplayTimeout:3000,
                                autoplayHoverPause:true,
                                responsive: {
                                    0: {
                                        items: 1
                                    },
                                    541: {
                                        items: 2
                                    },
                                    681: {
                                        items: 3
                                    }
                                }
                            });
                            break;
                        default:
                            html += '</div>';
                            $this.html(html);
                            break
                    }
                    $this.find('span.entry-thumb').lazyify()
                },
                error: function() {
                    switch (type) {
                        case 'msimple':
                            $this.append('<ul>' + msgServerError() + '</ul>');
                            break;
                        case 'breaking':
                            $this.html(msgServerError()).parent().addClass('show-ify');
                            break;
                        default:
                            $this.html(msgServerError());
                            break
                    }
                }
            })
    }
}

function ajaxMega($this, type, num, label, text) {
    if (text.match('getmega')) {
        if (type == 'msimple' || type == 'megatabs' || type == 'mtabs') {
            return getAjax($this, type, num, label)
        } else {
            $this.addClass('has-sub mega-menu').append('<ul class="mega-widget">' + msgError() + '</ul>')
        }
    }
}

function ajaxBreaking($this, type, num, label, text) {
    if (text.match('getbreaking')) {
        if (type == 'breaking') {
            return getAjax($this, type, num, label)
        } else {
            $this.html(msgError()).parent().addClass('show-ify')
        }
    }
}

function ajaxFeatured($this, type, num, label, text) {
    if (text.match('getfeatured')) {
        if (type == 'featured1' || type == 'featured2' || type == 'featured3' || type == 'featured4' || type == 'featured5' || type == 'featured6') {
            return getAjax($this, type, num, label)
        } else {
            $this.html(beforeLoader()).parent().addClass('show-ify');
            setTimeout(function() {
                $this.html(msgError())
            }, 500)
        }
    }
}

function ajaxBlock($this, type, num, label, text) {
    if (text.match('getblock')) {
        if (type == 'block1' || type == 'block2' || type == 'col-left' || type == 'col-right' || type == 'grid1' || type == 'grid2' || type == 'carousel' || type == 'videos') {
            var moreText = showMoreText,
                text = '';
            if (moreText != '') {
                text = moreText
            } else {
                text = messages.showMore
            }
            $this.parent().find('.widget-title').append('<a class="more" href="/search/label/' + label + '">' + text + '</a>');
            var ajaxBlock_scroll = false
            $(window).on('scroll', function () {
                if ($(this).scrollTop() != 0) {
                    if (!ajaxBlock_scroll) {
                        ajaxBlock_scroll = true
                        return getAjax($this, type, num, label)
                    }
                }
            })
        } else {
            $this.html(msgError()).parent().addClass('show-ify')
        }
    }
}

function ajaxWidget($this, type, num, label, text) {
    if (text.match('getwidget')) {
        if (type == 'list') {
            return getAjax($this, type, num, label)
        } else {
            $this.html(msgError())
        }
    }
}

function ajaxRelated($this, type, num, label, text) {
    if (text.match('getrelated')) {
        return getAjax($this, type, num, label)
    }
}
$('.comments-title h3.title').each(function() {
    var $t = $(this),
        $tx = $t.text().trim(),
        $c = $t.attr('count').trim(),
        $m = $t.attr('message').trim(),
        $sp = $tx.split('/'),
        $r = '';
    if ($c == 0) {
        $r = $sp[1]
    } else {
        if ($sp[2] == undefined) {
            $r = $sp[0] + ' ' + $m
        } else {
            $r = $sp[0] + ' ' + $sp[2]
        }
    }
    $t.text($r)
});
$('.startinhitnews-blog-post-comments').each(function() {
    var $this = $(this),
        system = commentsSystem,
        facebook = '<div class="fb-comments" data-width="100%" data-href="' + disqus_blogger_current_url + '" order_by="time" data-numposts="5"></div>',
        sClass = 'comments-system-' + system;
    switch (system) {
        case 'blogger':
            $this.addClass(sClass).show();
            $('.entry-meta .entry-comments-link').addClass('show');
$(window).bind("load",function(){var e=$("#comments").attr("data-embed"),o=$("#comments").attr("data-allow-comments");if("true"==e&&"true"==o){if($.fn.reverseChildren=function(){return this.each(function(){var e=$(this);e.children().each(function(){e.prepend(this)})})},$(".comments-content ol").reverseChildren(),$(".sort-option").on("change",function(){$(".comments-content ol").reverseChildren()}),-1!=url.indexOf("#comments")&&-1!=url.indexOf("?showComment"))-1!=url.indexOf("?showComment")&&loadCSS("https://www.blogger.com/dyn-css/authorization.css?targetBlogID="+data.blog.blogId,"css"),$(".commentForm").removeClass("hidden"),$(".commentForm").append('<iframe class="blogger-iframe-colorize blogger-comment-from-post" id="comment-editor" name="comment-editor" src="" title="comment iframe"></iframe>'),$.getScript("https://www.blogger.com/static/v1/jsbin/1479000943-comment_from_post_iframe.js").done(function(){BLOG_CMT_createIframe("https://www.blogger.com/rpc_relay.html"),$(".commentForm").removeClass("spinner")});else{var t=!1;$(document).on("scroll",function(){$(this).scrollTop()>=$(".post-body").position().top&&(t||(t=!0,$("#comments").hasClass("threaded")&&loadCSS("https://www.blogger.com/dyn-css/authorization.css?targetBlogID="+data.blog.blogId,"css"),$(".commentForm").removeClass("hidden"),$(".commentForm").append('<iframe class="blogger-iframe-colorize blogger-comment-from-post" id="comment-editor" name="comment-editor" src="" title="comment iframe"></iframe>'),$.getScript("https://www.blogger.com/static/v1/jsbin/1479000943-comment_from_post_iframe.js").done(function(){BLOG_CMT_createIframe("https://www.blogger.com/rpc_relay.html"),$(".commentForm").removeClass("spinner")})))})}$(".post-header a.post-comment").click(function(){$("html,body").stop().animate({scrollTop:$(".commentForm").offset().top-100},"slow")});var m="",n="";$(".comment a.comment-reply").click(function(e){m=$("#comment-editor").attr("src"),$(".calcel-reply").remove(),$(".comment-actions").removeAttr("style");var o=$(this),t=o.attr("data-comment-id");m=m+"&parentID="+t,n=o.parent().parent().parent().attr("id"),$("#comment-editor").attr("src",m),o.parent().hide(),$(".commentForm").appendTo($("#"+n+">.comment-replybox-single")),$("html,body").stop().animate({scrollTop:$(".commentForm").offset().top-100},"slow"),$("#"+n+">.comment-replybox-single").append('<div class="calcel-reply"><button class="theme-button blue" type="button">Hủy</button></div>'),$(".calcel-reply").click(function(){$(this).remove(),$(".comment-actions").removeAttr("style"),$(".commentForm").appendTo($(".comment-form")),$("html,body").stop().animate({scrollTop:$(".commentForm").offset().top-100},"slow")})}),$(".toplevel-thread>ol>li>.comment-replies").each(function(){$(this).find(".comment-thread>ol>li").length>0&&$(this).before('<div class="view-replies"><span>Xem '+$(this).find(".comment-thread>ol>li").length+" câu trả lời</span></div>"),$(".comment .view-replies>span").click(function(){$(this).parent().hide(),$(this).parent().next().removeClass("hidden")})});var r=$(".toplevel-thread>ol>li"),s=20,l=r.length,a=0,i=0;if(-1!=url.indexOf("?showComment"))if(-1!=url.indexOf("#c")){if(n="#"+url.substring(url.indexOf("#c")+1,url.length),(a=$(n).parents(".comment-thread").hasClass("thirdlevel-thread")?$(n).parents("li").parents("li").index():$(n).parents(".comment-thread").hasClass("secondlevel-thread")?$(n).parents("li").index():$(n).index())>s)for(var c=0;c<a+1;c++)$(r[c]).removeClass("hidden");else for(c=0;c<s;c++)$(r[c]).removeClass("hidden");a<l&&$("#comments .loadmore").removeClass("hidden"),$(n).parents("li").find(".view-replies").hide(),$(n).parents(".comment-replies").removeClass("hidden"),$("html,body").stop().animate({scrollTop:$(n).offset().top-100},"slow")}else{for(c=0;c<s;c++)$(r[c]).removeClass("hidden");l>s&&$("#comments .loadmore").removeClass("hidden")}else{for(c=0;c<s;c++)$(r[c]).removeClass("hidden");l>s&&$("#comments .loadmore").removeClass("hidden")}$("#comments .loadmore>a").click(function(){if(i=$(".toplevel-thread>ol>li.comment.hidden").length,a=l-i,0==i)$(this).parent().addClass("hidden"),$("#comments .showless").removeClass("hidden");else for(var e=a;e<a+s;e++)$(r[e]).removeClass("hidden")}),$("#comments .showless>a").click(function(){l=r.length;for(var e=s;e<l;e++)$(r[e]).addClass("hidden");$(this).parent().addClass("hidden"),$("#comments .loadmore").removeClass("hidden"),$("html,body").stop().animate({scrollTop:$(".commentForm").offset().top-100},"slow")}),-1!=url.indexOf("#comments")&&$("html,body").stop().animate({scrollTop:$(".commentForm").offset().top-100},"slow")}});
            break;
        case 'disqus':
            $this.addClass(sClass).show();
            break;
        case 'facebook':
            $this.addClass(sClass).show().find('#comments').replaceWith(facebook);
            break;
        case 'hide':
            $this.hide();
            break;
        default:
            $this.addClass('comments-system-default').show();
            $('.entry-meta .entry-comments-link').addClass('show');
            break
    }
});
$(function() {
    $('.index-post .entry-image-link .entry-thumb, .PopularPosts .entry-image-link .entry-thumb, .FeaturedPost .entry-image-link .entry-thumb,.about-author .author-avatar').lazyify();

    $('.mobile-logo').each(function() {
        var $t = $(this),
            $l = $('#main-logo .header-widget a').clone();
        $l.find('#h1-tag').remove();
        $l.appendTo($t)
    });
    $('#mobile-menu').each(function() {
        var $t = $(this),
            $m = $('#startinhitnews-main-menu-nav').clone();
        $m.attr('id', 'main-mobile-nav');
        $m.find('.getMega, .mega-widget, .mega-tab').remove();
        $m.find('li.mega-tabs .complex-tabs').each(function() {
            var $eq = $(this);
            $eq.replaceWith($eq.find('> ul.select-tab').attr('class', 'sub-menu m-sub'))
        });
        $m.find('.mega-menu:not(.mega-tabs) > a').each(function() {
            var $t = $(this),
                $h = $t.attr('href').trim(),
                $tlc = $h.toLowerCase();
            if ($tlc.match('getmega')) {
                $t.append('<div class="getMega">' + $h + '</div>');
                $t.find('.getMega').shortcode({
                    getMega: function($u, $l) {
                        $l = this.options.label;
                        $l == 'recent' ? $u = '/search' : $u = '/search/label/' + $l;
                        $t.attr('href', $u)
                    }
                })
            }
        });
        $m.find('.mega-tabs ul li > a').each(function() {
            var $a = $(this),
                $l = $a.text().trim();
            $a.attr('href', '/search/label/' + $l)
        });
        $m.appendTo($t);
        $('.show-mobile-menu, .hide-mobile-menu, .overlay').on('click', function() {
            $('body').toggleClass('nav-active')
        });
        $('.mobile-menu .has-sub').append('<div class="submenu-toggle"/>');
        $('.mobile-menu .mega-menu').find('.submenu-toggle').remove();
        $('.mobile-menu .mega-tabs').append('<div class="submenu-toggle"/>');
        $('.mobile-menu ul li .submenu-toggle').on('click', function($this) {
            if ($(this).parent().hasClass('has-sub')) {
                $this.preventDefault();
                if (!$(this).parent().hasClass('show')) {
                    $(this).parent().addClass('show').children('.m-sub').slideToggle(170)
                } else {
                    $(this).parent().removeClass('show').find('> .m-sub').slideToggle(170)
                }
            }
        })
    });
    $('.social-mobile').each(function() {
        var $t = $(this),
            $l = $('#about-section .social-footer').clone();
        $l.removeClass('social-color');
        $l.appendTo($t)
    });

    $(window).scroll(function() {
        if (fixedMenu == true) {
            if ($(window).scrollTop() >= 190) {
                $('.navbar-wrap .navbar').addClass('scroll');
            } else {
                $('.navbar-wrap .navbar').removeClass('scroll');
            }
        }
    });
    $('#main-wrapper, #sidebar-wrapper').each(function() {
        if (fixedSidebar == true) {
            $(this).theiaStickySidebar({
                additionalMarginTop: 60,
                additionalMarginBottom: 20
            })
        }
    });

    jQuery(document).ready(function() {
            jQuery(window).scroll(function() {
                220 < jQuery(this).scrollTop() ? jQuery("#scrollToTop").fadeIn(600) : jQuery("#scrollToTop").fadeOut(600)
            })
        }),
        $(function() {
            $(document).ready(function() {
                $(".gototop").click(function() {
                    var t = $("#top").offset().top;
                    return $("html,body").animate({
                        scrollTop: t
                    }, 1e3)
                }), $(".gotobottom").click(function() {
                    var t = $("#bottom").offset().top;
                    return $("html,body").animate({
                        scrollTop: t
                    }, 1e3)
                })
            })
        });

    $('#load-more-link').each(function() {
        var $this = $(this),
            $loadLink = $this.data('load');
        if ($loadLink) {
            $('#load-more-link').show()
        }
        $('#load-more-link').on('click', function(a) {
            $('#load-more-link').hide();
            $.ajax({
                url: $loadLink,
                success: function(data) {
                    var $p = $(data).find('.blog-posts');
                    $p.find('.index-post').addClass('post-animated post-fadeInUp');
                    $('.blog-posts').append($p.html());
                    $loadLink = $(data).find('#load-more-link').data('load');
                    if ($loadLink) {
                        $('#load-more-link').show()
                    } else {
                        $('#load-more-link').hide();
                        $('#blog-pager .no-more').addClass('show')
                    }
                    $('.index-post .entry-image-link .entry-thumb').lazyify()
                },
                beforeSend: function() {
                    $('#blog-pager .loading').show()
                },
                complete: function() {
                    $('#blog-pager .loading').hide()
                }
            });
            a.preventDefault()
        })
    })
});
if(data.view.isMobileRequest != "true"){
    $('#startinhitnews-main-menu-nav li > a').each(function() {
        if (data.view.isPost == 'true') {
            var x = $('#breadcrumb a.label').attr('href'),
                y = $(this).attr('href')
        } else {
            var x = $('link[rel=canonical]').attr('href')
            if (x.indexOf('?') != -1) {
                x = x.substr(0, x.indexOf('?'))
            }
            var y = $(this).attr('href')
            y = y.substr(0, y.indexOf('?'))
        }
        if (x === y) {
            $(this).addClass('current active');
            $('#startinhitnews-main-menu-nav li > a').not($(this)).removeClass('current active')
        }
    });

    $('#startinhitnews-main-menu-nav li > a').hover(function() {
        $('#startinhitnews-main-menu-nav li > a.active').toggleClass('current');
    });

    if ($("#startinhitnews-main-menu-nav li > ul li > a").hasClass("current")) {
        $("#startinhitnews-main-menu-nav li ul > li > a.current").parents("#startinhitnews-main-menu-nav > li").children("#startinhitnews-main-menu-nav > li > a").toggleClass('current active');
    }
}
$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 500);
                return false;
            }
        }
    });
});
 
if(data.view.isMobileRequest == "true"){
/*! delete ?m=1 */
var uri;if((uri=window.location.toString()).indexOf("%3D","%3D")>0){var clean_uri=uri.substring(0,uri.indexOf("%3D"));window.history.replaceState({},document.title,clean_uri)}if((uri=window.location.toString()).indexOf("%3D%3D","%3D%3D")>0){clean_uri=uri.substring(0,uri.indexOf("%3D%3D"));window.history.replaceState({},document.title,clean_uri)}if((uri=window.location.toString()).indexOf("&m=1","&m=1")>0){clean_uri=uri.substring(0,uri.indexOf("&m=1"));window.history.replaceState({},document.title,clean_uri)}if((uri=window.location.toString()).indexOf("?m=1","?m=1")>0){clean_uri=uri.substring(0,uri.indexOf("?m=1"));window.history.replaceState({},document.title,clean_uri)}var protocol=window.location.protocol.replace(/\:/g,"");if("http"==protocol){var url=window.location.href.replace("http","https");window.location.replace(url)};
}

if(data.view.isPost == "true"){
    $('.post-nav').each(function() {
        var getLinkOlderPost = $('a.blog-pager-older-link').attr('href'),
            getLinkNewerPost = $('a.blog-pager-newer-link').attr('href');
        $.ajax({
          url: getLinkOlderPost,
          type: 'get',
          success: function(data) {
            var getTitle = $(data).find('.blog-post h1.entry-title').text();
            $('.post-older a .post-nav-inner p').text(getTitle)
          }
        });
        $.ajax({
          url: getLinkNewerPost,
          type: 'get',
          success: function(data) {
            var getTitle = $(data).find('.blog-post h1.entry-title').text();
            $('.post-newer a .post-nav-inner p').text(getTitle)
          }
        })
      });

$('.collapsible-item--title').click(function (e) {
    $(this).toggleClass('active').siblings('.collapsible-item--content').slideToggle(500);
    $(this).parent().siblings().children('.collapsible-item--title').removeClass('active');
    $(this).parent().siblings().children('.collapsible-item--content').slideUp(500);
})
/*! post views */
$(function(){jQuery.getScript("https://cdn.firebase.com/js/client/2.3.2/firebase.js").done(function(){$.each($(".post-views"),function(t,a){var e=$(a).find("#postviews"),i=$('link[rel="canonical"]').attr("href"),n=new Firebase("https://nguyen-tinh.firebaseio.com/pages/id/"+$(a).attr("data-id"));n.once("value",function(t){var r=t.val(),l=!1;null==r&&((r={}).value=0,r.url=$(a).attr("data-href"),r.id=$(a).attr("data-id"),l=!0),e.text(r.value),r.value++,"/"!=window.location.pathname&&$(a).attr("data-href")==i&&(l?n.set(r):n.child("value").set(r.value))})})})});
}

if(data.view.isSingleItem == "true"){
$('span.comment-content').each(function() {
    var $t = $(this);
    $t.replaceText(/(https:\/\/\S+(\.png|\.jpeg|\.jpg|\.gif))/g, '<img src="$1"/>');
    $t.replaceText(/(?:https:\/\/)?(?:www\.)?(?:youtube\.com)\/(?:watch\?v=)?(.+)/g, '<iframe id="youtube" width="100%" height="330" src="https://www.youtube.com/embed/$1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
});

/*! description */
var content = document.getElementById('descriptions-cont');
$(content).css("max-height", "150px");
$(".descriptions-title span").click(function() {
    $(".descriptions-title,.mask-descriptions").toggleClass("hidden");
    if (content.style.maxHeight == '150px') {
        content.style.maxHeight = content.scrollHeight + 'px'
    } else {
        content.style.maxHeight = '150px'
    }
});

/*! box category */
var postBody=document.querySelector(".post-body"),titleChapter=postBody.querySelectorAll("h2");if(3<=titleChapter.length){var i,leChapteraptor=[];for(i=0;i<titleChapter.length;i++)anchorChapter="chapter-"+(i+1),titleChapter[i].setAttribute("id",anchorChapter),titleChapter[i].setAttribute("title","Lên đầu trang"),leChapteraptor[i]="<li data-target=#"+anchorChapter+">"+titleChapter[i].innerHTML+"</li>";$(".box_category").html('<div class="category-title"><p>Nội dung chính</p></div><ul class="chapter">'+leChapteraptor.join("")+"</ul>")}else $(".box_category").remove();for($(function(){var t=$(".post-body a[name=more]");t?$(".box_category").insertAfter(t):$(".box_category").remove()}),$(".box_category p").click(function(){$(this).toggleClass("show"),$(this).parent().parent().find("ul").slideToggle("slow")}),$(".box_category li").bind("click",function(){var t=$(this).attr("data-target");$("html, body").stop().animate({scrollTop:$(t).offset().top-70},"slow")}),k=0;k<titleChapter.length;k++)titleChapter[k].addEventListener("click",function(){$("html, body").stop().animate({scrollTop:$(".box_category").position().top},"slow")});

/*! timeago */
!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof module&&"object"==typeof module.exports?t(require("jquery")):t(jQuery)}(function(t){t.timeago=function(e){return e instanceof Date?r(e):r("string"==typeof e?t.timeago.parse(e):"number"==typeof e?new Date(e):t.timeago.datetime(e))};var e=t.timeago;t.extend(t.timeago,{settings:{refreshMillis:6e4,allowPast:!0,allowFuture:!1,localeTitle:!1,cutoff:0,autoDispose:!0,strings:{prefixAgo:null,prefixFromNow:null,suffixAgo:null,suffixFromNow:null,inPast:"vừa xong",seconds:"vừa xong",minute:"1 phút trước",minutes:"%d phút trước",hour:"1 giờ trước",hours:"%d giờ trước",day:"1 ngày trước",days:"%d ngày trước",month:"1 tháng trước",months:"%d tháng trước",year:"1 năm trước",years:"%d năm trước",wordSeparator:" ",numbers:[]}},inWords:function(e){if(!this.settings.allowPast&&!this.settings.allowFuture)throw"timeago allowPast and allowFuture settings can not both be set to false.";var i=this.settings.strings,a=i.prefixAgo,r=i.suffixAgo;if(this.settings.allowFuture&&e<0&&(a=i.prefixFromNow,r=i.suffixFromNow),!this.settings.allowPast&&e>=0)return this.settings.strings.inPast;var n=Math.abs(e)/1e3,o=n/60,s=o/60,u=s/24,l=u/365;function m(a,r){var n=t.isFunction(a)?a(r,e):a,o=i.numbers&&i.numbers[r]||r;return n.replace(/%d/i,o)}var c=n<45&&m(i.seconds,Math.round(n))||n<90&&m(i.minute,1)||o<45&&m(i.minutes,Math.round(o))||o<90&&m(i.hour,1)||s<24&&m(i.hours,Math.round(s))||s<42&&m(i.day,1)||u<30&&m(i.days,Math.round(u))||u<45&&m(i.month,1)||u<365&&m(i.months,Math.round(u/30))||l<1.5&&m(i.year,1)||m(i.years,Math.round(l)),d=i.wordSeparator||"";return void 0===i.wordSeparator&&(d=" "),t.trim([a,c,r].join(d))},parse:function(e){var i=t.trim(e);return i=(i=(i=(i=(i=i.replace(/\.\d+/,"")).replace(/-/,"/").replace(/-/,"/")).replace(/T/," ").replace(/Z/," UTC")).replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2")).replace(/([\+\-]\d\d)$/," $100"),new Date(i)},datetime:function(i){var a=e.isTime(i)?t(i).attr("datetime"):t(i).attr("title");return e.parse(a)},isTime:function(e){return"time"===t(e).get(0).tagName.toLowerCase()}});var i={init:function(){i.dispose.call(this);var r=t.proxy(a,this);r();var n=e.settings;n.refreshMillis>0&&(this._timeagoInterval=setInterval(r,n.refreshMillis))},update:function(i){var r=i instanceof Date?i:e.parse(i);t(this).data("timeago",{datetime:r}),e.settings.localeTitle&&t(this).attr("title",r.toLocaleString()),a.apply(this)},updateFromDOM:function(){t(this).data("timeago",{datetime:e.parse(e.isTime(this)?t(this).attr("datetime"):t(this).attr("title"))}),a.apply(this)},dispose:function(){this._timeagoInterval&&(window.clearInterval(this._timeagoInterval),this._timeagoInterval=null)}};function a(){var i=e.settings;if(i.autoDispose&&!t.contains(document.documentElement,this))return t(this).timeago("dispose"),this;var a=function(i){if(!(i=t(i)).data("timeago")){i.data("timeago",{datetime:e.datetime(i)});var a=t.trim(i.text());e.settings.localeTitle?i.attr("title",i.data("timeago").datetime.toLocaleString()):!(a.length>0)||e.isTime(i)&&i.attr("title")||i.attr("title",a)}return i.data("timeago")}(this);return isNaN(a.datetime)||(0===i.cutoff||Math.abs(n(a.datetime))<i.cutoff?t(this).text(r(a.datetime)):t(this).attr("title").length>0&&t(this).text(t(this).attr("title"))),this}function r(t){return e.inWords(n(t))}function n(t){return(new Date).getTime()-t.getTime()}t.fn.timeago=function(t,e){var a=t?i[t]:i.init;if(!a)throw new Error("Unknown function name '"+t+"' for timeago");return this.each(function(){a.call(this,e)}),this},document.createElement("abbr"),document.createElement("time")}),$(".date-time a").each(function(){var t=$(this),e=(e=(e=t.html()).replace("SA","AM")).replace("CH","PM");t.attr("datetime",e),t.html(jQuery.timeago(e))});

/*! lazy load */
!function(e){e.fn.lazyload=function(t){var o={threshold:0,failurelimit:0,event:"scroll",effect:"show",container:window};t&&e.extend(o,t);var n=this;return"scroll"==o.event&&e(o.container).bind("scroll",function(t){var i=0;n.each(function(){if(e.abovethetop(this,o)||e.leftofbegin(this,o));else if(e.belowthefold(this,o)||e.rightoffold(this,o)){if(i++>o.failurelimit)return!1}else e(this).trigger("appear")});var r=e.grep(n,function(e){return!e.loaded});n=e(r)}),this.each(function(){var t=this;null==e(t).attr("original")&&e(t).attr("original",e(t).attr("src")),"scroll"!=o.event||null==e(t).attr("src")||o.placeholder==e(t).attr("src")||e.abovethetop(t,o)||e.leftofbegin(t,o)||e.belowthefold(t,o)||e.rightoffold(t,o)?(o.placeholder?e(t).attr("src",o.placeholder):e(t).removeAttr("src"),t.loaded=!1):t.loaded=!0,e(t).one("appear",function(){this.loaded||e("<img />").bind("load",function(){e(t).hide().attr("src",e(t).attr("original"))[o.effect](o.effectspeed),t.loaded=!0}).attr("src",e(t).attr("original"))}),"scroll"!=o.event&&e(t).bind(o.event,function(o){t.loaded||e(t).trigger("appear")})}),e(o.container).trigger(o.event),this},e.belowthefold=function(t,o){if(void 0===o.container||o.container===window)var n=e(window).height()+e(window).scrollTop();else n=e(o.container).offset().top+e(o.container).height();return n<=e(t).offset().top-o.threshold},e.rightoffold=function(t,o){if(void 0===o.container||o.container===window)var n=e(window).width()+e(window).scrollLeft();else n=e(o.container).offset().left+e(o.container).width();return n<=e(t).offset().left-o.threshold},e.abovethetop=function(t,o){if(void 0===o.container||o.container===window)var n=e(window).scrollTop();else n=e(o.container).offset().top;return n>=e(t).offset().top+o.threshold+e(t).height()},e.leftofbegin=function(t,o){if(void 0===o.container||o.container===window)var n=e(window).scrollLeft();else n=e(o.container).offset().left;return n>=e(t).offset().left+o.threshold+e(t).width()},e.extend(e.expr[":"],{"below-the-fold":"$.belowthefold(a, {threshold : 0, container: window})","above-the-fold":"!$.belowthefold(a, {threshold : 0, container: window})","right-of-fold":"$.rightoffold(a, {threshold : 0, container: window})","left-of-fold":"!$.rightoffold(a, {threshold : 0, container: window})"})}(jQuery),$(function(){$(".separator img,.tr-caption-container img,.post-body img").lazyload({placeholder:"//1.bp.blogspot.com/-Qg5bi1ZtDdM/VZ5nHAyYBqI/AAAAAAAAChE/exGnasO4oyk/s640/arlinadesign.gif",effect:"fadeIn",threshold:"-50"})});
}

/*! adblock */
if(turnOnAdblock == true){
!function(){function f(){var a=document.createElement("div");a.id="kamujahat";a.innerHTML='<div class="inner"> <div class="header"> <h2>BẠN ĐANG BẬT ADBLOCK!</h2> </div> <div class="isi"> <p>Cả nguồn sống bỗng chốc thu bé lại chỉ bằng quảng cáo, chúng tôi cam kết không có quảng cáo popup gây khó chịu.</p> <div class="tombol"><button class="1 active">Adblock</button><button class="2">Adblock Plus</button></div> <div class="tutorial"> <div class="1 active"> <ol> <li>Nhấp vào biểu tượng AdBlock trong trình duyệt của bạn<br><img src="data:image/png;base64,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" alt="Adblock"></li> <li>Chọn, Không chạy trên các trang trên tên miền này<br><img src="data:image/png;base64,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" alt="Adblock" width="300px"></li> <li>Một cửa sổ mới sẽ xuất hiện. Nhấp vào nút "Loại trừ"<br><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA+gAAAG2CAMAAADbZlx4AAAC91BMVEXRwsL8/Py7k4XZ6vDUnJrUx8f////4+Pj49/Ps59///+718+/v7u7p49vx8fHT09NERETMzMze3t4aWf8AAADi4uLq6urn5+f09PSOjo2AgICIiIiqqqvFxcTBBQDFCwFmZmbJysrX19eysrLh3dnKEQDe3c16AADPGACtrKy6urpOe9eko6FUVFbUHwA/AgLv7OWnp6f7z4T8+OIBAx3YJQCu+/bw/v/o+fwcAADk8vCXmJfdKwBnrfICAT0AAWOenpzx69L79tP07egdFhzOAgJQCgH//fj9+sViYmIFaKKGQAJBhsr7+af0MDIkICQSERH5rWbQiUHL+PfnGBhoaXM1NTQnKy/4PD1NdKSJzvaxzt7t0aPuJSXhMwS/v75ljLIOHC2fz+3+BQbst4L23uB3strW/Prt5Mv34bA2HxZal8x0dXXZrHLN7vHL4PTWuq8BQYRQhripZwV4WVJ1oc3b7v2PXkxTWHEwc62xeFNiRjns17ztram/q4wpFQXLz9ouYJZBTHl3aGZLSkweS4CJa2RALCC17O/u67hmepmDt+b95sPswsHMn3QcK0nrx5PRl1tSIQnWzcKy2/BlbIhyPhYEG0SWvturBwj60JppJwSsimUnOlWc4vbC1uju0s6rs8J3SzhXNiDSPTS2jGsGVJK75P0IKV2SVQ/dvJedurvZbGlRWY/pOwF5m7mrv9PI5uDXsoaTxOnaGBjDrqqMrs1QjN69jVxlV1ONprkfPWk6cf/34Zilj4QDL3Gry/49SmPTWE/bzbEABVWdZTaYdE3tZWV7vva6vK20eD7GjlTknVeMVy2LFRW4raplvExNaIXfgX3Fb2eHjqRVm+ehdmhofte7Pjy5GhaJhdfkBgbLJB7reFVmpdywmdX2wOCvbCiSgG97vmllj/90hpzwk4/2TFSOrv/BeybVsNq7uJ2dMjMWYhOR0dSrUlnV0ZA+tDZKgkfiTyqw17XBrtqsDlutdaoSe0NbYhbASwv/YJ38WRYU5E/tAAAAAXRSTlMAQObYZgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfhCgwAIy8E0o+mAAAgAElEQVR42u29f1AUV97vn4mpHhjGYZxifgBS12Bu6hsLSs1QO6PU44NDV1p395uZjXFmiaR0LCMwgBiuoPyIBAKZjU4YQAQLQ0yYTUB2t3Rxw4Oh4o/rQvaBUFtkc1O7dZ+yaq1K8sdWPff+8fzz/e/7Oae7ZwYYULOoiO8XiTQ93eec7unX+XzO6R546ikAwOonyda9RgMAWM0kPWW7USUIGq3NAABYhdi0GjL8qe5aQdDibACwelXXkOgUzxHNAVjVaDVPaRDPAVj1pj+l0Sy9hX4eOGcAPH48pVkyoOutpmxOKvtKTc02WaE6AI8b+qc0S4/Qk99/S+EZ9s/R99dCdAAeQ9GXfHnL+99//eWX/D/6h759/34y0ncAVpXoNvL8B+KXP/xAnv/wS+IHMh2nDYCVZrLVbJqP2XKPoieT57/kfPn9W9//8PLLL7/+8g9fI3sHYKVpzsWeC1ulvxfRC2XPf6CU/fuP3njrS4rp5DqZngzTAVhBnpuyrXqtMA+NzWIyWe4quk2N51++9dZb77+R9NEzb7315Q+vyzHdANUBWCmQz4JGq7XNRasRbGbF9MVFZ/Nw8qj8648K33jjjZS1779BUf114pdfY0YOgBWDlTy36fUWhj7+f4PGpmTvi4puUz0n0d+wbVmbnJL8kb7wrd/+4VVu+lsYpwOwUhJ3s9ZAWi/Eotfos61Liq7m7TRA//6NlOS1yfrk5/SFR3/7H39QYjpMB2ClBHSbhWut2B1dYHm3ybSU6NG8/XsaoL9RyEWniH70L7LoLKYjewdgBWCzmgyK1xarHNgtygL9bzAvIbplrZq3f/nWGx+9P1d0lru/ymL6c+bEFauTftKSz9xpaQPWSun+PzunEeR9Y4dKK1IMsVnHJHmdtPi5WepFAB4r0c1MdOa19fLouQtswXR5dPT3svxLim56//svmeYvk+g0Nk/esnbtWv3ajyyy6K+++jr9/8vv389OWO3Ob1s5ud+sSVq8dSnDra0H1ti0oc/X3K/pKWNU+qgzrs8onWz93Rrt8FW54tZTVUkGbeOx1upFT82tgdZLtSm4RsDqEF1O1c37qn9aPfp7i8V8+UBd3TmTnMEvJXr20a9/iBfdEi86M514+cujCUV3hHrSFMLnFr9Jn1SZlvZmbdJI1/WqpPs8rrIuKru5NtY/aGnN0BGhclusYq2meHPam9sXq/z/bqMCIDpYJaLLw/LL1T/9KZn+tok8/+lP60bN9yV64Vom+nNrLbLof/uPX//6ZRbRX//yaGrCapnobsKTljZ0UKum2lolY06yaXjanERaflrr6km7XiukRNNpLdtATqu1PANnAwDN3FGAo5MJveOgLZbHl51Pu06iN6Xl+eSK26qE4q60T5nobHdB6UvU5aT/uzmtrjaFjR6itse2s8mNwOf0weMjOkvTz5HezHTu+U9/esls+HGip1osFNF//duvv/z1H3hEX1T0P/6ExszDkTRmk0GrO7M1Z/0F0tm2c+vWC/bPcrbu06YkDW9OK3ruWlda7zcf88BrK/1zzr7GnK0X2HfKz8/k5FTZdv4553LS0Zytl53RsG+zz6T5d29L+zkX3SbdouKoSln0OkEjSKT4joMaRXSH/ejWnBeqeGeitR/Nyfm4SpNi46JrS7cWfL5G7T5i25XmbK2iVq6/oEHMB4+P6Pp9suDVyrdR671G9Je56GY5dVdE/+vX77//9V1F/5WNImRHU9ofu5NoAB1g2fQlZ4rjxW1p45MUj3svObWNL6WVV/JE+1/3MKEctPk4JQPVPK226SbS0v5F0xdIG3q3KS3NfyqaaDv6utLabnWlXWeK2grHqPDevV2q6NQf2HRTMdEdxcdo97T+USf1M43HtvFlhxzRWepRpIget53tq7S0lgHaMjyK37EFHiPRecr+KSXtsucX5Hn3u4n+clT055It1mSrJfk5vfWZv/zlqCH5mV//xx/uKjrF75+l5R127JyRx8151U7Hi03KILr3oFR4dH3VL/gPQ4roAb7ZaS6hTVfPROfDcb76sDpLLo1RNKeonneaSd2pjsujEV0jDXdFU3dtmTJhkFejtZUqy71XNKyO7dSwIiVTiN9O+wt1qH+9CqaDx0R0Nkw3K0k79/z3yp30u4r+siK6JVnuLyxWQ/JnTz/zkeHM12xG7u6i2yfS8m5L7dvSekdTP2lK818RmOgt+/7RRT45aEyctOXo+bShy/KcHhe9+e23bfNFH798i4VehzKSd81QvJZI8DrKGnaeT8srevtojyp6njw5MHRQyyO6gZUyfjm1flvaULemk5dFetc5OzanNR9nM3qy57b47SQSnQo9uTltxxWIDh6fiK63yNNwn3LP1Sfl7h7RX5ZFNyi/KE5vsCUffeZosvWZ//m3/+eeRP87BWKKvTvOabXSNJnJIvrQoJT0ChOd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" alt="Adblock"></li> <li>Biểu tượng trình duyệt nên đã chuyển sang màu xám<br><img src="data:image/png;base64,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" alt="Adblock"></li> <li>Làm mới lại trang nếu nó không tự động làm mới. Cảm ơn!</li> </ol> </div> <div class="2"> <ol> <li>Nhấp vào biểu tượng AdBlock Plus trong trình duyệt của bạn<br><img src="data:image/png;base64,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" alt="Adblock"></li> <li>Nhấp vào vị trí "Đã bật trên trang này"<br><img src="data:image/png;base64,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" alt="Adblock" width="250px"></li> <li>Sau khi nhấp vào, nó sẽ thay đổi thành "Disabled trên trang này"<br><img src="data:image/png;base64,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" alt="Adblock" width="250px"></li> <li>Biểu tượng trình duyệt nên đã chuyển sang màu xám<br><img src="data:image/png;base64,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" alt="Adblock"></li> <li>Làm mới lại trang nếu nó không tự động làm mới. Cảm ơn!</li> </ol> </div> </div> </div> </div>';
document.body.append(a);document.body.style.overflow="hidden";var b=a.querySelectorAll("button");a.querySelector(".close");var d=a.querySelectorAll(".tutorial > div");for(a=0;a<b.length;a++)b[a].addEventListener("click",function(a){a.preventDefault();a=this.getAttribute("class").split(" ")[0];for(var c=0;c<d.length;c++)d[c].classList.remove("active"),b[c].classList.remove("active");b[a-1].classList.add("active");d[a-1].classList.add("active")})}var b=document.createElement("script");b.type="text/javascript";
b.async=!0;b.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";b.onerror=function(){f();window.adblock=!0};var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(b,e)}();
}
