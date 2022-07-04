/*-----------------------------------------------
*   Name: Android Apk Mod Premium Version For Blogspot
*   Version: 1.2.0
*   Last Updated: 24/03/2020
----------------------------------------------- */
/* Templateify Plugins */

/*! Theia Sticky Sidebar | v1.7.0 - https://github.com/WeCodePixels/theia-sticky-sidebar */
(function($){$.fn.theiaStickySidebar=function(options){var defaults={'containerSelector':'','additionalMarginTop':0,'additionalMarginBottom':0,'updateSidebarHeight':true,'minWidth':0,'disableOnResponsiveLayouts':true,'sidebarBehavior':'modern','defaultPosition':'relative','namespace':'TSS'};options=$.extend(defaults,options);options.additionalMarginTop=parseInt(options.additionalMarginTop)||0;options.additionalMarginBottom=parseInt(options.additionalMarginBottom)||0;tryInitOrHookIntoEvents(options,this);function tryInitOrHookIntoEvents(options,$that){var success=tryInit(options,$that);if(!success){console.log('TSS: Body width smaller than options.minWidth. Init is delayed.');$(document).on('scroll.'+options.namespace,function(options,$that){return function(evt){var success=tryInit(options,$that);if(success){$(this).unbind(evt)}}}(options,$that));$(window).on('resize.'+options.namespace,function(options,$that){return function(evt){var success=tryInit(options,$that);if(success){$(this).unbind(evt)}}}(options,$that))}}function tryInit(options,$that){if(options.initialized===true){return true}if($('body').width()<options.minWidth){return false}init(options,$that);return true}function init(options,$that){options.initialized=true;var existingStylesheet=$('#theia-sticky-sidebar-stylesheet-'+options.namespace);if(existingStylesheet.length===0){$('head').append($('<style id="theia-sticky-sidebar-stylesheet-'+options.namespace+'">.theiaStickySidebar:after {content: ""; display: table; clear: both;}</style>'))}$that.each(function(){var o={};o.sidebar=$(this);o.options=options||{};o.container=$(o.options.containerSelector);if(o.container.length==0){o.container=o.sidebar.parent()}o.sidebar.parents().css('-webkit-transform','none');o.sidebar.css({'position':o.options.defaultPosition,'overflow':'visible','-webkit-box-sizing':'border-box','-moz-box-sizing':'border-box','box-sizing':'border-box'});o.stickySidebar=o.sidebar.find('.theiaStickySidebar');if(o.stickySidebar.length==0){var javaScriptMIMETypes=/(?:text|application)\/(?:x-)?(?:javascript|ecmascript)/i;o.sidebar.find('script').filter(function(index,script){return script.type.length===0||script.type.match(javaScriptMIMETypes)}).remove();o.stickySidebar=$('<div>').addClass('theiaStickySidebar').append(o.sidebar.children());o.sidebar.append(o.stickySidebar)}o.marginBottom=parseInt(o.sidebar.css('margin-bottom'));o.paddingTop=parseInt(o.sidebar.css('padding-top'));o.paddingBottom=parseInt(o.sidebar.css('padding-bottom'));var collapsedTopHeight=o.stickySidebar.offset().top;var collapsedBottomHeight=o.stickySidebar.outerHeight();o.stickySidebar.css('padding-top',1);o.stickySidebar.css('padding-bottom',1);collapsedTopHeight-=o.stickySidebar.offset().top;collapsedBottomHeight=o.stickySidebar.outerHeight()-collapsedBottomHeight-collapsedTopHeight;if(collapsedTopHeight==0){o.stickySidebar.css('padding-top',0);o.stickySidebarPaddingTop=0}else{o.stickySidebarPaddingTop=1}if(collapsedBottomHeight==0){o.stickySidebar.css('padding-bottom',0);o.stickySidebarPaddingBottom=0}else{o.stickySidebarPaddingBottom=1}o.previousScrollTop=null;o.fixedScrollTop=0;resetSidebar();o.onScroll=function(o){if(!o.stickySidebar.is(":visible")){return}if($('body').width()<o.options.minWidth){resetSidebar();return}if(o.options.disableOnResponsiveLayouts){var sidebarWidth=o.sidebar.outerWidth(o.sidebar.css('float')=='none');if(sidebarWidth+50>o.container.width()){resetSidebar();return}}var scrollTop=$(document).scrollTop();var position='static';if(scrollTop>=o.sidebar.offset().top+(o.paddingTop-o.options.additionalMarginTop)){var offsetTop=o.paddingTop+options.additionalMarginTop;var offsetBottom=o.paddingBottom+o.marginBottom+options.additionalMarginBottom;var containerTop=o.sidebar.offset().top;var containerBottom=o.sidebar.offset().top+getClearedHeight(o.container);var windowOffsetTop=0+options.additionalMarginTop;var windowOffsetBottom;var sidebarSmallerThanWindow=(o.stickySidebar.outerHeight()+offsetTop+offsetBottom)<$(window).height();if(sidebarSmallerThanWindow){windowOffsetBottom=windowOffsetTop+o.stickySidebar.outerHeight()}else{windowOffsetBottom=$(window).height()-o.marginBottom-o.paddingBottom-options.additionalMarginBottom}var staticLimitTop=containerTop-scrollTop+o.paddingTop;var staticLimitBottom=containerBottom-scrollTop-o.paddingBottom-o.marginBottom;var top=o.stickySidebar.offset().top-scrollTop;var scrollTopDiff=o.previousScrollTop-scrollTop;if(o.stickySidebar.css('position')=='fixed'){if(o.options.sidebarBehavior=='modern'){top+=scrollTopDiff}}if(o.options.sidebarBehavior=='stick-to-top'){top=options.additionalMarginTop}if(o.options.sidebarBehavior=='stick-to-bottom'){top=windowOffsetBottom-o.stickySidebar.outerHeight()}if(scrollTopDiff>0){top=Math.min(top,windowOffsetTop)}else{top=Math.max(top,windowOffsetBottom-o.stickySidebar.outerHeight())}top=Math.max(top,staticLimitTop);top=Math.min(top,staticLimitBottom-o.stickySidebar.outerHeight());var sidebarSameHeightAsContainer=o.container.height()==o.stickySidebar.outerHeight();if(!sidebarSameHeightAsContainer&&top==windowOffsetTop){position='fixed'}else if(!sidebarSameHeightAsContainer&&top==windowOffsetBottom-o.stickySidebar.outerHeight()){position='fixed'}else if(scrollTop+top-o.sidebar.offset().top-o.paddingTop<=options.additionalMarginTop){position='static'}else{position='absolute'}}if(position=='fixed'){var scrollLeft=$(document).scrollLeft();o.stickySidebar.css({'position':'fixed','width':getWidthForObject(o.stickySidebar)+'px','transform':'translateY('+top+'px)','left':(o.sidebar.offset().left+parseInt(o.sidebar.css('padding-left'))-scrollLeft)+'px','top':'0px'})}else if(position=='absolute'){var css={};if(o.stickySidebar.css('position')!='absolute'){css.position='absolute';css.transform='translateY('+(scrollTop+top-o.sidebar.offset().top-o.stickySidebarPaddingTop-o.stickySidebarPaddingBottom)+'px)';css.top='0px'}css.width=getWidthForObject(o.stickySidebar)+'px';css.left='';o.stickySidebar.css(css)}else if(position=='static'){resetSidebar()}if(position!='static'){if(o.options.updateSidebarHeight==true){o.sidebar.css({'min-height':o.stickySidebar.outerHeight()+o.stickySidebar.offset().top-o.sidebar.offset().top+o.paddingBottom})}}o.previousScrollTop=scrollTop};o.onScroll(o);$(document).on('scroll.'+o.options.namespace,function(o){return function(){o.onScroll(o)}}(o));$(window).on('resize.'+o.options.namespace,function(o){return function(){o.stickySidebar.css({'position':'static'});o.onScroll(o)}}(o));if(typeof ResizeSensor!=='undefined'){new ResizeSensor(o.stickySidebar[0],function(o){return function(){o.onScroll(o)}}(o))}function resetSidebar(){o.fixedScrollTop=0;o.sidebar.css({'min-height':'1px'});o.stickySidebar.css({'position':'static','width':'','transform':'none'})}function getClearedHeight(e){var height=e.height();e.children().each(function(){height=Math.max(height,$(this).height())});return height}})}function getWidthForObject(object){var width;try{width=object[0].getBoundingClientRect().width}catch(err){}if(typeof width==="undefined"){width=object.width()}return width}return this}})(jQuery);

/*! MenuIfy by Templateify | v1.0.0 - https://www.templateify.com */
!function(a){a.fn.menuify=function(){return this.each(function(){var $t=a(this),b=$t.find('.LinkList ul > li').children('a'),c=b.length;for(var i=0;i<c;i++){var d=b.eq(i),h=d.text();if(h.charAt(0)!=='_'){var e=b.eq(i+1),j=e.text();if(j.charAt(0)==='_'){var m=d.parent();m.append('<ul class="sub-menu m-sub"/>');}}if(h.charAt(0)==='_'){d.text(h.replace('_',''));d.parent().appendTo(m.children('.sub-menu'));}}for(var i=0;i<c;i++){var f=b.eq(i),k=f.text();if(k.charAt(0)!=='_'){var g=b.eq(i+1),l=g.text();if(l.charAt(0)==='_'){var n=f.parent();n.append('<ul class="sub-menu2 m-sub"/>');}}if(k.charAt(0)==='_'){f.text(k.replace('_',''));f.parent().appendTo(n.children('.sub-menu2'));}}$t.find('.LinkList ul li ul').parent('li').addClass('has-sub');});}}(jQuery);

/*! Tabify by Templateify | v1.0.0 - https://www.templateify.com */
!function(a){a.fn.tabify=function(b){b=jQuery.extend({onHover:false,animated:true,transition:'fadeInUp'},b);return this.each(function(){var e=a(this),c=e.children('[tab-ify]'),d=0,n='tab-animated',k='tab-active';if(b.onHover==true){var event='mouseenter'}else{var event='click'}e.prepend('<ul class="select-tab"></ul>');c.each(function(){if(b.animated==true){a(this).addClass(n)}e.find('.select-tab').append('<li><a href="javascript:;">'+a(this).attr('tab-ify')+'</a></li>')}).eq(d).addClass(k).addClass('tab-'+b.transition);e.find('.select-tab a').on(event,function(){var f=a(this).parent().index();a(this).closest('.select-tab').find('.active').removeClass('active');a(this).parent().addClass('active');c.removeClass(k).removeClass('tab-'+b.transition).eq(f).addClass(k).addClass('tab-'+b.transition);return false}).eq(d).parent().addClass('active')})}}(jQuery);

/*! ResizeIfy - LazyIfy on Scroll by Templateify | v1.1.0 - https://www.templateify.com */
!function(a){a.fn.lazyify=function(){return this.each(function(){var t=a(this),dImg=t.attr('data-image'),iWid=Math.round(t.width()*1.2),iHei=Math.round(t.height()*1.2),iSiz='/w'+iWid+'-h'+iHei+'-p-k-no-nu',img='';if(dImg.match('s72-c')){img=dImg.replace('/s72-c',iSiz);}else if(dImg.match('w72-h')){img=dImg.replace('/w72-h72-p-k-no-nu',iSiz);}else{img=dImg;}
a(window).on('load resize scroll',lazyOnScroll);function lazyOnScroll(){var wHeight=a(window).height(),scrTop=a(window).scrollTop(),offTop=t.offset().top;if(scrTop+wHeight>offTop){var n=new Image();n.onload=function(){t.attr('style','background-image:url('+this.src+')').addClass('lazy-ify');},n.src=img;}}
lazyOnScroll();});}}(jQuery);

/*! jQuery replaceText by "Cowboy" Ben Alman | v1.1.0 - http://benalman.com/projects/jquery-replacetext-plugin/ */
(function($){$.fn.replaceText=function(b,a,c){return this.each(function(){var f=this.firstChild,g,e,d=[];if(f){do{if(f.nodeType===3){g=f.nodeValue;e=g.replace(b,a);if(e!==g){if(!c&&/</.test(e)){$(f).before(e);d.push(f)}else{f.nodeValue=e}}}}while(f=f.nextSibling)}d.length&&$(d).remove()})}})(jQuery);

/* Templateify Scripts */
$('#android-mod-main-menu').menuify();
$('#android-mod-main-menu .widget').addClass('show-menu');
$('.search-toggle').on('click', function() {
    $('body').toggleClass('search-active')
});
$('.blog-posts-title a.more,.related-title a.more').each(function() {
    var $t = $(this),
        $smt = viewAllText;
    if ($smt != '') {
        $t.text($smt)
    }
});
$('.follow-by-email-text').each(function() {
    var $t = $(this),
        $fbet = followByEmailText;
    if ($fbet != '') {
        $t.text($fbet)
    }
});
$('#sidebar-tabs').tabify();
$('.post-body strike').each(function() {
    var $t = $(this),
        $mtc = $t.text().trim();
    if ($mtc == '$ads1') {
        $t.replaceWith('<div id="android-mod-new-before-ad"/>')
    }
    if ($mtc == '$ads2') {
        $t.replaceWith('<div id="android-mod-new-after-ad"/>')
    }
    if ($mtc == '$get-download') {
        $t.replaceWith('<a href="#download" rel="nofollow" class="button download">download</a>')
    }
    if ($mtc == '$download') {
        $t.replaceWith('<a name="download"></a><div class="title-download">Download File</div>')
    }
});
$('#android-mod-new-before-ad').each(function() {
    var $t = $(this);
    if ($t.length) {
        $('#before-ad').appendTo($t)
    }
});
$('#android-mod-new-after-ad').each(function() {
    var $t = $(this);
    if ($t.length) {
        $('#after-ad').appendTo($t)
    }
});
$('#android-mod-main-before-ad .widget').each(function() {
    var $t = $(this);
    if ($t.length) {
        $t.appendTo($('#before-ad'))
    }
});
$('#android-mod-main-after-ad .widget').each(function() {
    var $t = $(this);
    if ($t.length) {
        $t.appendTo($('#after-ad'))
    }
});
$('.avatar-image-container img').attr('src', function($this, i) {
    i = i.replace('//resources.blogblog.com/img/blank.gif', '//4.bp.blogspot.com/-oSjP8F09qxo/Wy1J9dp7b0I/AAAAAAAACF0/ggcRfLCFQ9s2SSaeL9BFSE2wyTYzQaTyQCK4BGAYYCw/s35-r/avatar.jpg');
    i = i.replace('//img1.blogblog.com/img/blank.gif', '//4.bp.blogspot.com/-oSjP8F09qxo/Wy1J9dp7b0I/AAAAAAAACF0/ggcRfLCFQ9s2SSaeL9BFSE2wyTYzQaTyQCK4BGAYYCw/s35-r/avatar.jpg');
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
    if (type.match('copyright')) {
        $this.replaceWith('<div class="copyright short-b"><span>Source: </span>'+html+'</div>')
    }
    var $sb = $('.post-body .short-b').find('b');
    $sb.each(function() {
        var $b = $(this),
            $t = $b.text().trim();
        if ($t.match('alert-success') || $t.match('alert-info') || $t.match('alert-warning') || $t.match('alert-danger') || $t.match('callout-success') || $t.match('callout-info') || $t.match('callout-warning') || $t.match('callout-danger') || $t.match('code') || $t.match('kbd') || $t.match('copyright')) {
            $b.replaceWith("")
        }
    })
});
$('.android-mod-share-links .window-ify,.entry-share .window-ify').on('click', function() {
    var $this = $(this),
        url = $this.data('url'),
        wid = $this.data('width'),
        hei = $this.data('height'),
        wsw = window.screen.width,
        wsh = window.screen.height,
        mrl = Math.round(wsw / 2 - wid / 2),
        mrt = Math.round(wsh / 2 - hei / 2),
        win = window.open(url, '_blank', 'scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=' + wid + ',height=' + hei + ',left=' + mrl + ',top=' + mrt);
    win.focus()
});
$('.android-mod-share-links').each(function() {
    var $t = $(this),
        $b = $t.find('.show-hid a');
    $b.on('click', function() {
        $t.toggleClass('show-hidden')
    })
});
$('.about-author .author-description span a').each(function() {
    var $this = $(this),
        cls = $this.text().trim(),
        url = $this.attr('href');
    $this.replaceWith('<li class="' + cls + '"><a href="' + url + '" title="' + cls + '" target="_blank"/></li>');
    $('.description-links').append($('.author-description span li'));
    $('.description-links').addClass('show')
});

function msgError() {
    return '<span class="no-posts"><b>Error:</b> No Results Found</span>'
}

function beforeLoader() {
    return '<div class="loader"/>'
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
        b = messages.postAuthorLabel,
        e = '';
    if (b != '') {
        e = '<span class="by">' + b + '</span>'
    } else {
        e = ''
    }
    if (messages.postAuthor == 'true') {
        var code = '<span class="entry-author">' + e + '<span class="author">' + n + '</span></span>'
    } else {
        var code = ''
    }
    return code
}

function getPostDate(feed, i) {
    var c = feed[i].published.$t,
        d = c.substring(0, 4),
        f = c.substring(5, 7),
        m = c.substring(8, 10),
        h = monthFormat[parseInt(f, 10) - 1] + ' ' + m + ', ' + d;
    if (messages.postDate == 'true') {
        var code = '<span class="entry-time"><time class="published" datetime="' + c + '">' + h + '</time></span>'
    } else {
        code = ''
    }
    return code
}

function getPostMeta(author, date) {
    if (messages.postAuthor == 'true' && messages.postDate == 'true') {
        var long = '<div class="entry-meta m-1">' + author + date + '</div>'
    } else if (messages.postAuthor == 'true') {
        long = '<div class="entry-meta m-2">' + author + '</div>'
    } else if (messages.postDate == 'true') {
        long = '<div class="entry-meta m-2">' + date + '</div>'
    } else {
        long = ''
    }
    if (messages.postDate == 'true') {
        var small = '<div class="entry-meta m-2">' + date + '</div>'
    } else {
        small = ''
    }
    var code = [long, small];
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

function getPostComments(feed, i, link) {
    var n = feed[i].author[0].name.$t,
        e = feed[i].author[0].gd$image.src.replace('/s113', '/w55-h55-p-k-no-nu'),
        h = feed[i].title.$t;
    if (e.match('//img1.blogblog.com/img/blank.gif') || e.match('//img1.blogblog.com/img/b16-rounded.gif')) {
        var img = '//4.bp.blogspot.com/-oSjP8F09qxo/Wy1J9dp7b0I/AAAAAAAACF0/ggcRfLCFQ9s2SSaeL9BFSE2wyTYzQaTyQCK4BGAYYCw/w55-h55-p-k-no-nu/avatar.jpg'
    } else {
        var img = e
    }
    var code = '<article class="custom-item item-' + i + '"><a class="entry-image-link cmm-avatar" href="' + link + '"><span class="entry-thumb" data-image="' + img + '"/></a><h2 class="entry-title"><a href="' + link + '">' + n + '</a></h2><p class="cmm-snippet excerpt">' + h + '</p></article>';
    return code
}

function getCustomStyle(type, label, color, lClass) {
    lClass = label.replace(' ', '-');
    if (color != false) {
        if (type == 'featured') {
            var code = '.id-' + type + '-' + lClass + ' .entry-category{background-color:' + color + ';color:#fff}.id-' + type + '-' + lClass + ' .loader:after{border-color:' + color + ';border-right-color:rgba(155,155,155,0.2)}'
        } else {
            code = '.id-' + type + '-' + lClass + ' .entry-category{background-color:' + color + ';color:#fff}.id-' + type + '-' + lClass + ' .title-wrap > h3,.id-' + type + '-' + lClass + ' .title-wrap > a.more:hover,.id-' + type + '-' + lClass + ' .entry-header:not(.entry-info) .entry-title a:hover,.id-' + type + '-' + lClass + ' .entry-header:not(.entry-info) .entry-meta span.author{color:' + color + '}.id-' + type + '-' + lClass + ' .loader:after{border-color:' + color + ';border-right-color:rgba(155,155,155,0.2)}'
        }
    } else {
        code = ''
    }
    return code
}

function getAjax($this, type, num, label, color) {
    switch (type) {
        case 'msimple':
        case 'megatabs':
        case 'featured1':
        case 'featured2':
        case 'featured3':
        case 'block1':
        case 'col-left':
        case 'col-right':
        case 'grid1':
        case 'grid2':
        case 'videos':
        case 'gallery':
        case 'list':
        case 'related':
            if (label == false) {
                label = 'geterror404'
            }
            var furl = getFeedUrl(type, num, label);
            $.ajax({
                url: furl,
                type: 'GET',
                dataType: 'json',
                cache: true,
                beforeSend: function(data) {
                    var style = getCustomStyle(type, label, color),
                        lClass = label.replace(' ', '-');
                    switch (type) {
                        case 'featured1':
                        case 'featured2':
                        case 'featured3':
                            $('#page-skin-2').prepend(style);
                            $this.html(beforeLoader()).parent().addClass('type-' + type + ' id-' + type + '-' + lClass + ' show-ify');
                            break;
                        case 'block1':
                        case 'grid1':
                        case 'grid2':
                        case 'videos':
                        case 'gallery':
                            $('#page-skin-2').prepend(style);
                            $this.html(beforeLoader()).parent().addClass('type-' + type + ' id-' + type + '-' + lClass + ' show-ify');
                            break;
                        case 'col-left':
                        case 'col-right':
                            $('#page-skin-2').prepend(style);
                            $this.html(beforeLoader()).parent().addClass('type-' + type + ' block-column id-' + type + '-' + lClass + ' show-ify');
                            break;
                        case 'list':
                            $this.html(beforeLoader());
                            break;
                        case 'related':
                            $this.html(beforeLoader()).parent().addClass('show-ify');
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
                        case 'featured1':
                        case 'featured2':
                        case 'featured3':
                            html = '<div class="featured-posts ' + type + '">';
                            break;
                        case 'block1':
                            html = '<div class="content-block-1">';
                            break;
                        case 'col-left':
                        case 'col-right':
                            html = '<div class="column-block">';
                            break;
                        case 'grid1':
                            html = '<div class="grid-block-1 total-' + num + '">';
                            break;
                        case 'grid2':
                            html = '<div class="grid-block-2">';
                            break;
                        case 'videos':
                            html = '<div class="videos-block total-' + num + '">';
                            break;
                        case 'gallery':
                            html = '<div class="gallery-block total-' + num + '">';
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
                                meta = getPostMeta(author, date),
                                tag = getPostLabel(feed, i);
                            var content = '';
                            switch (type) {
                                case 'msimple':
                                case 'megatabs':
                                    content += '<article class="mega-item"><div class="mega-content"><a class="entry-image-link" href="' + link + '"><span class="entry-thumb" data-image="' + image + '"/></a><h2 class="entry-title"><a href="' + link + '">' + title + '</a></h2>' + meta[1] + '</div></article>';
                                    break;
                                case 'featured1':
                                case 'featured2':
                                case 'featured3':
                                    switch (i) {
                                        case 0:
                                            content += '<article class="featured-item item-' + i + '"><div class="featured-item-inner"><a class="entry-image-link before-mask" href="' + link + '"><span class="entry-thumb" data-image="' + image + '"/></a>' + tag + '<div class="entry-header entry-info"><h2 class="entry-title"><a href="' + link + '">' + title + '</a></h2>' + meta[0] + '</div></div></article><div class="featured-scroll">';
                                            break;
                                        default:
                                            content += '<article class="featured-item item-' + i + '"><div class="featured-item-inner"><a class="entry-image-link before-mask" href="' + link + '"><span class="entry-thumb" data-image="' + image + '"/></a>' + tag + '<div class="entry-header entry-info"><h2 class="entry-title"><a href="' + link + '">' + title + '</a></h2>' + meta[1] + '</div></div></article>';
                                            break
                                    }
                                    break;
                                case 'block1':
                                    switch (i) {
                                        case 0:
                                            content += '<article class="block-item item-' + i + '"><div class="block-inner">' + tag + '<a class="entry-image-link before-mask" href="' + link + '"><span class="entry-thumb" data-image="' + image + '"/></a><div class="entry-header entry-info"><h2 class="entry-title"><a href="' + link + '">' + title + '</a></h2>' + meta[0] + '</div></div></article>';
                                            break;
                                        default:
                                            content += '<article class="block-item item-' + i + '"><a class="entry-image-link" href="' + link + '"><span class="entry-thumb" data-image="' + image + '"/></a><div class="entry-header"><h2 class="entry-title"><a href="' + link + '">' + title + '</a></h2>' + meta[1] + '</div></article>';
                                            break
                                    }
                                    break;
                                case 'col-left':
                                case 'col-right':
                                    switch (i) {
                                        case 0:
                                            content += '<article class="column-item item-' + i + '"><div class="column-inner">' + tag + '<a class="entry-image-link before-mask" href="' + link + '"><span class="entry-thumb" data-image="' + image + '"/></a><div class="entry-header entry-info"><h2 class="entry-title"><a href="' + link + '">' + title + '</a></h2>' + meta[0] + '</div></div></article>';
                                            break;
                                        default:
                                            content += '<article class="column-item item-' + i + '"><a class="entry-image-link" href="' + link + '"><span class="entry-thumb" data-image="' + image + '"/></a><div class="entry-header"><h2 class="entry-title"><a href="' + link + '">' + title + '</a></h2>' + meta[1] + '</div></article>';
                                            break
                                    }
                                    break;
                                case 'grid1':
                                    content += '<article class="grid-item item-' + i + '"><div class="entry-image"><a class="entry-image-link" href="' + link + '"><span class="entry-thumb" data-image="' + image + '"/></a></div><div class="entry-header"><h2 class="entry-title"><a href="' + link + '">' + title + '</a></h2>' + meta[1] + '</div></article>';
                                    break;
                                case 'grid2':
                                    content += '<article class="grid-item item-' + i + '"><div class="entry-image">' + tag + '<a class="entry-image-link" href="' + link + '"><span class="entry-thumb" data-image="' + image + '"/></a></div><div class="entry-header"><h2 class="entry-title"><a href="' + link + '">' + title + '</a></h2>' + meta[0] + '</div></article>';
                                    break;
                                case 'videos':
                                    switch (i) {
                                        case 0:
                                            content += '<article class="videos-item item-' + i + '"><div class="videos-inner">' + tag + '<a class="entry-image-link before-mask" href="' + link + '"><span class="entry-thumb" data-image="' + image + '"/><span class="video-icon"/></a><div class="entry-header entry-info"><h2 class="entry-title"><a href="' + link + '">' + title + '</a></h2>' + meta[0] + '</div></div></article>';
                                            break;
                                        default:
                                            content += '<article class="videos-item item-' + i + '"><div class="videos-inner"><a class="entry-image-link before-mask" href="' + link + '"><span class="entry-thumb" data-image="' + image + '"/><span class="video-icon"/></a><div class="entry-header entry-info"><h2 class="entry-title"><a href="' + link + '">' + title + '</a></h2></div></div></article>';
                                            break
                                    }
                                    break;
                                case 'gallery':
                                    switch (i) {
                                        case 0:
                                            content += '<article class="gallery-item item-' + i + '"><div class="gallery-inner">' + tag + '<a class="entry-image-link before-mask" href="' + link + '"><span class="entry-thumb" data-image="' + image + '"/><span class="gallery-icon"/></a><div class="entry-header entry-info"><h2 class="entry-title"><a href="' + link + '">' + title + '</a></h2>' + meta[0] + '</div></div></article>';
                                            break;
                                        default:
                                            content += '<article class="gallery-item item-' + i + '"><div class="gallery-inner"><a class="entry-image-link before-mask" href="' + link + '"><span class="entry-thumb" data-image="' + image + '"/><span class="gallery-icon"/></a><div class="entry-header entry-info"><h2 class="entry-title"><a href="' + link + '">' + title + '</a></h2></div></div></article>';
                                            break
                                    }
                                    break;
                                case 'list':
                                    switch (label) {
                                        case 'comments':
                                            var code = getPostComments(feed, i, link);
                                            content += code;
                                            break;
                                        default:
                                            content += '<article class="custom-item item-' + i + '"><a class="entry-image-link" href="' + link + '"><span class="entry-thumb" data-image="' + image + '"/></a><div class="entry-header"><h2 class="entry-title"><a href="' + link + '">' + title + '</a></h2>' + meta[1] + '</div></article>';
                                            break
                                    }
                                    break;
                                case 'related':
                                    content += '<article class="related-item post item-' + i + '"><div class="entry-image"><a class="entry-image-link" href="' + link + '"><span class="entry-thumb" data-image="' + image + '"/></a></div><div class="entry-header"><h2 class="entry-title"><a href="' + link + '">' + title + '</a></h2>' + meta[1] + '</div></article>';
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
                        case 'featured1':
                        case 'featured2':
                        case 'featured3':
                            html += '</div></div>';
                            $this.html(html);
                            break;
                        case 'block1':
                        case 'grid1':
                        case 'grid2':
                        case 'col-left':
                        case 'col-right':
                        case 'videos':
                        case 'gallery':
                            html += '</div>';
                            $this.html(html);
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
                        case 'megatabs':
                            $this.append('<ul>' + msgError() + '</ul>');
                            break;
                        default:
                            $this.html(msgError());
                            break
                    }
                }
            })
    }
}

function ajaxMega($this, type, num, label, mtc) {
    if (mtc.match('getmega')) {
        if (type == 'msimple' || type == 'megatabs' || type == 'mtabs') {
            return getAjax($this, type, num, label)
        } else {
            $this.append('<ul class="mega-widget">' + msgError() + '</ul>')
        }
    }
}

function ajaxFeatured($this, type, num, label, mtc, color) {
    if (mtc.match('getfeatured')) {
        if (type == 'featured1' || type == 'featured2' || type == 'featured3') {
            return getAjax($this, type, num, label, color)
        } else {
            $this.html(beforeLoader()).parent().addClass('show-ify');
            setTimeout(function() {
                $this.html(msgError())
            }, 500)
        }
    }
}

function ajaxBlock($this, type, num, label, mtc, color) {
    if (mtc.match('getblock')) {
        if (type == 'block1' || type == 'col-left' || type == 'col-right' || type == 'grid1' || type == 'grid2' || type == 'videos' || type == 'gallery') {
            var moreText = viewAllText,
                text = '';
            if (moreText != '') {
                text = moreText
            } else {
                text = messages.viewAll
            }
            $this.parent().find('.widget-title').append('<a class="more" href="/search/label/' + label + '">' + text + '</a>');
            return getAjax($this, type, num, label, color)
        } else {
            $this.html(msgError()).parent().addClass('show-ify')
        }
    }
}

function ajaxWidget($this, type, num, label, mtc) {
    if (mtc.match('getwidget')) {
        if (type == 'list') {
            return getAjax($this, type, num, label)
        } else {
            $this.html(msgError())
        }
    }
}

function ajaxRelated($this, type, num, label, mtc) {
    if (mtc.match('getrelated')) {
        return getAjax($this, type, num, label)
    }
}

function shortCodeIfy(a, b, c) {
    var d = a.split('$'),
        e = /[^{\}]+(?=})/g;
    for (var i = 0; i < d.length; i++) {
        var f = d[i].split('=');
        if (f[0].trim() == b) {
            c = f[1];
            if (c.match(e) != null) {
                return String(c.match(e)).trim()
            } else {
                return false
            }
        }
    }
    return false
}

function megaTabs($this, type, label, mtc) {
    if (type == 'mtabs') {
        if (label != false) {
            var lLen = label.length,
                code = '<ul class="complex-tabs">';
            for (var i = 0; i < lLen; i++) {
                var tag = label[i];
                if (tag) {
                    code += '<div class="mega-tab" tab-ify="' + tag + '"/>'
                }
            }
            code += '</ul>';
            $this.addClass('mega-tabs mtabs').append(code);
            $this.find('> a:first').attr('href', 'javascript:;');
            $('.mega-tab').each(function() {
                var $this = $(this),
                    label = $this.attr('tab-ify');
                ajaxMega($this, 'megatabs', 4, label, mtc)
            });
            $this.find('ul.complex-tabs').tabify({
                onHover: true
            })
        } else {
            $this.append('<ul class="mega-widget">' + msgError() + '</ul>')
        }
    }
}
$('#android-mod-main-menu li').each(function(type, label) {
    var lc = $(this),
        $this = lc,
        ltx = lc.find('a'),
        txt = ltx.attr('href').trim(),
        mtc = txt.toLowerCase();
    type = shortCodeIfy(txt, 'type');
    label = shortCodeIfy(txt, 'label');
    if (mtc.match('getmega')) {
        $this.addClass('has-sub mega-menu')
    }
    ajaxMega($this, type, 5, label, mtc);
    if (type == 'mtabs') {
        if (label != false) {
            label = label.split('/')
        }
        megaTabs($this, type, label, mtc)
    }
});
$('#featured .HTML .widget-content').each(function(type, num, label, color) {
    var $this = $(this),
        txt = $this.text().trim(),
        mtc = txt.toLowerCase();
    type = shortCodeIfy(txt, 'type');
    label = shortCodeIfy(txt, 'label');
    color = shortCodeIfy(txt, 'color');
    switch (type) {
        case 'featured2':
            num = 4;
            break;
        case 'featured3':
            num = 5;
            break;
        default:
            num = 3;
            break
    }
    ajaxFeatured($this, type, num, label, mtc, color)
});
$('.android-mod-content-blocks .HTML .widget-content').each(function(type, num, label, color) {
    var $this = $(this),
        txt = $this.text().trim(),
        mtc = txt.toLowerCase();
    type = shortCodeIfy(txt, 'type');
    num = shortCodeIfy(txt, 'results');
    label = shortCodeIfy(txt, 'label');
    color = shortCodeIfy(txt, 'color');
    ajaxBlock($this, type, num, label, mtc, color)
});
$('.android-mod-widget-ready .HTML .widget-content').each(function(type, num, label) {
    var $this = $(this),
        txt = $this.text().trim(),
        mtc = txt.toLowerCase();
    type = shortCodeIfy(txt, 'type');
    num = shortCodeIfy(txt, 'results');
    label = shortCodeIfy(txt, 'label');
    ajaxWidget($this, type, num, label, mtc)
});
$('.android-mod-related-content').each(function() {
    var $this = $(this),
        label = $this.find('.related-tag').attr('data-label'),
        num = relatedPostsNum;
    ajaxRelated($this, 'related', num, label, 'getrelated')
});
$('.android-mod-blog-post-comments').each(function() {
    var $this = $(this),
        system = commentsSystem,
        facebook = '<div class="fb-comments" data-width="100%" data-href="' + disqus_blogger_current_url + '" order_by="time" data-colorscheme="' + fbCommentsTheme + '" data-numposts="5"></div>',
        sClass = 'comments-system-' + system;
    switch (system) {
        case 'blogger':
            $this.addClass(sClass).show();
            $('.entry-meta .entry-comments-link').addClass('show');
            break;
        case 'disqus':
            $this.addClass(sClass).show();
            break;
        case 'facebook':
            $this.addClass(sClass).find('#comments').html(facebook);
            $this.show();
            break;
        case 'hide':
            $this.hide();
            break;
        default:
            $this.addClass('comments-system-blogger').show();
            $('.entry-meta .entry-comments-link').addClass('show');
            break
    }
    var $r = $this.find('.comments .toplevel-thread > ol > .comment .comment-actions .comment-reply'),
        $c = $this.find('.comments .toplevel-thread > #top-continue');
    $r.on('click', function() {
        $c.show()
    });
    $c.on('click', function() {
        $c.hide()
    })
});
$(function() {
    $('.index-post .entry-image-link .entry-thumb, .PopularPosts .entry-image-link .entry-thumb, .FeaturedPost .entry-image-link .entry-thumb,.about-author .author-avatar').lazyify();
    $('.mobile-logo').each(function() {
        var $t = $(this),
            $l = $('#main-logo .header-widget a').clone();
        $l.find('#h1-tag').remove();
        $l.appendTo($t)
    });
    $('#android-mod-mobile-menu').each(function() {
        var $t = $(this),
            $m = $('#android-mod-main-menu-nav').clone();
        $m.attr('id', 'main-mobile-nav');
        $m.find('.mega-widget, .mega-tab').remove();
        $m.find('li.mega-tabs .complex-tabs').each(function() {
            var $eq = $(this);
            $eq.replaceWith($eq.find('> ul.select-tab').attr('class', 'sub-menu m-sub'))
        });
        $m.find('.mega-menu:not(.mega-tabs) > a').each(function($l, $u) {
            var $a = $(this),
                $h = $a.attr('href').trim(),
                $m = $h.toLowerCase();
            if ($m.match('getmega')) {
                $l = shortCodeIfy($h, 'label');
                $l == 'recent' ? $u = '/search' : $u = '/search/label/' + $l;
                $a.attr('href', $u)
            }
        });
        $m.find('.mega-tabs ul li > a').each(function() {
            var $a = $(this),
                $l = $a.text().trim();
            $a.attr('href', '/search/label/' + $l)
        });
        $m.appendTo($t);
        $('.show-android-mod-mobile-menu, .hide-android-mod-mobile-menu, .overlay').on('click', function() {
            $('body').toggleClass('nav-active')
        });
        $('.android-mod-mobile-menu .has-sub').append('<div class="submenu-toggle"/>');
        $('.android-mod-mobile-menu .mega-menu').find('.submenu-toggle').remove();
        $('.android-mod-mobile-menu .mega-tabs').append('<div class="submenu-toggle"/>');
        $('.android-mod-mobile-menu ul li .submenu-toggle').on('click', function($this) {
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
            $l = $('#main-navbar-social ul.social').clone();
        $l.appendTo($t)
    });
    $('#android-mod-header-wrapper .headerify').each(function() {
        var $this = $(this);
        if (fixedMenu == true) {
            if ($this.length > 0) {
                var t = $(document).scrollTop(),
                    w = $this.offset().top,
                    s = $this.height(),
                    h = (w + s);
                $(window).scroll(function() {
                    var n = $(document).scrollTop(),
                        f = $('#footer-wrapper').offset().top,
                        m = (f - s);
                    if (n < m) {
                        if (n > h) {
                            $this.addClass('is-fixed')
                        } else if (n <= 0) {
                            $this.removeClass('is-fixed')
                        }
                        if (n > t) {
                            $this.removeClass('show')
                        } else {
                            $this.addClass('show')
                        }
                        t = $(document).scrollTop()
                    }
                })
            }
        }
    });
    $('#main-wrapper,#sidebar-wrapper').each(function() {
        if (fixedSidebar == true) {
            if (fixedMenu == true) {
                var $topMargin = 75
            } else {
                $topMargin = 25
            }
            $(this).theiaStickySidebar({
                additionalMarginTop: $topMargin,
                additionalMarginBottom: 25
            })
        }
    });
    $('#post-body iframe').each(function() {
        var $t = $(this),
            $mtc = $t.attr('src');
        if ($mtc.match('www.youtube.com')) {
            $t.wrap('<div class="responsive-video-wrap"/>')
        }
    });
    $('p.comment-content').each(function() {
        var $t = $(this);
        $t.replaceText(/(https:\/\/\S+(\.png|\.jpeg|\.jpg|\.gif))/g, '<img src="$1"/>');
        $t.replaceText(/(?:https:\/\/)?(?:www\.)?(?:youtube\.com)\/(?:watch\?v=)?(.+)/g, '<div class="responsive-video-wrap"><iframe id="youtube" width="100%" height="358" src="https://www.youtube.com/embed/$1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>')
    });
    $('#android-mod-load-more-link').each(function() {
        var $this = $(this),
            $loadLink = $this.data('load');
        if ($loadLink) {
            $('#android-mod-load-more-link').show()
        }
        $('#android-mod-load-more-link').on('click', function(a) {
            $('#android-mod-load-more-link').hide();
            $.ajax({
                url: $loadLink,
                success: function(data) {
                    var $p = $(data).find('.blog-posts');
                    $p.find('.index-post').addClass('post-animated post-fadeInUp');
                    $('.blog-posts').append($p.html());
                    $loadLink = $(data).find('#android-mod-load-more-link').data('load');
                    if ($loadLink) {
                        $('#android-mod-load-more-link').show()
                    } else {
                        $('#android-mod-load-more-link').hide();
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
    });
    $('.back-top').each(function() {
        var $t = $(this);
        $(window).on('scroll', function() {
            $(this).scrollTop() >= 100 ? $t.fadeIn(250) : $t.fadeOut(250);
            $t.offset().top >= $('#footer-wrapper').offset().top - 32 ? $t.addClass('on-footer') : $t.removeClass('on-footer')
        }), $t.click(function() {
            $('html, body').animate({
                scrollTop: 0
            }, 500)
        })
    })
});

$(function() {
    //$(".separator:first").remove();
    $(".post-body > img:first").remove();
});
$('.collapsible-item--title').click(function(e) {
    $(this).toggleClass('active').siblings('.collapsible-item--content').slideToggle(500);
    $(this).parent().siblings().children('.collapsible-item--title').removeClass('active');
    $(this).parent().siblings().children('.collapsible-item--content').slideUp(500);
});

/* loading page */
$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 500);
                return false;
            }
        }
    });
});

/* delete ?m=1 */
if(data.view.isMobileRequest == "true"){
var uri;if((uri=window.location.toString()).indexOf("%3D","%3D")>0){var clean_uri=uri.substring(0,uri.indexOf("%3D"));window.history.replaceState({},document.title,clean_uri)}if((uri=window.location.toString()).indexOf("%3D%3D","%3D%3D")>0){clean_uri=uri.substring(0,uri.indexOf("%3D%3D"));window.history.replaceState({},document.title,clean_uri)}if((uri=window.location.toString()).indexOf("&m=1","&m=1")>0){clean_uri=uri.substring(0,uri.indexOf("&m=1"));window.history.replaceState({},document.title,clean_uri)}if((uri=window.location.toString()).indexOf("?m=1","?m=1")>0){clean_uri=uri.substring(0,uri.indexOf("?m=1"));window.history.replaceState({},document.title,clean_uri)}var protocol=window.location.protocol.replace(/\:/g,"");if("http"==protocol){var url=window.location.href.replace("http","https");window.location.replace(url)}
}

if(data.view.isPost == "true"){
/*! box category */
var postBody=document.querySelector(".post-body"),titleChapter=postBody.querySelectorAll("h2");if(3<=titleChapter.length){var i,leChapteraptor=[];for(i=0;i<titleChapter.length;i++)anchorChapter="chapter-"+(i+1),titleChapter[i].setAttribute("id",anchorChapter),titleChapter[i].setAttribute("title","Lên đầu trang"),leChapteraptor[i]="<li data-target=#"+anchorChapter+">"+titleChapter[i].innerHTML+"</li>";$(".box_category").html('<p>Nội dung chính <label></label></p><ul class="chapter">'+leChapteraptor.join("")+"</ul>")}else $(".box_category").remove();for($(function(){var t=$(".post-body a[name=more]");t?$(".box_category").insertAfter(t):$(".box_category").remove()}),$(".box_category p>label").click(function(){$(this).toggleClass("show"),$(this).parent().parent().find("ul").slideToggle("slow")}),$(".box_category li").bind("click",function(){var t=$(this).attr("data-target");$("html, body").stop().animate({scrollTop:$(t).offset().top-70},"slow")}),k=0;k<titleChapter.length;k++)titleChapter[k].addEventListener("click",function(){$("html, body").stop().animate({scrollTop:$(".box_category").position().top},"slow")});
    
/*! shortlink */
var adlinkfly_url="https://1shortlink.com/",adlinkfly_api_token="9453c8f226946d87888855576207edf568c9572f",adlinkfly_advert=2,adlinkfly_domains=["drive.google.com","www.mediafire.com","ajmt-my.sharepoint.com","bitly.com"];function adlinkfly_get_url(e){var n=document.createElement("a");return n.href=e,n}function adlinkfly_get_host_name(e){return null==e||""===e||e.match(/^\#/)?"":-1===(e=adlinkfly_get_url(e)).href.search(/^http[s]?:\/\//)?"":e.href.split("/")[2].split(":")[0].toLowerCase()}function adlinkfly_base64_encode(e){return btoa(encodeURIComponent(e).replace(/%([0-9A-F]{2})/g,function(e,n){return String.fromCharCode("0x"+n)}))}document.addEventListener("DOMContentLoaded",function(e){if(void 0!==adlinkfly_url&&void 0!==adlinkfly_api_token){var n=1;void 0!==adlinkfly_advert&&(2==adlinkfly_advert&&(n=2),0==adlinkfly_advert&&(n=0));var l=document.getElementsByTagName("a");if(void 0===adlinkfly_domains)if("undefined"==typeof adlinkfly_exclude_domains);else for(a=0;a<l.length;a++){var o=adlinkfly_get_host_name(l[a].getAttribute("href"));0<o.length&&-1===adlinkfly_exclude_domains.indexOf(o)?l[a].href=adlinkfly_url+"api/v1/full-pages?api_key="+encodeURIComponent(adlinkfly_api_token)+"&url="+adlinkfly_base64_encode(l[a].href)+"&type="+encodeURIComponent(n):"magnet:"===l[a].protocol&&(l[a].href=adlinkfly_url+"api/v1/full-pages?api_key="+encodeURIComponent(adlinkfly_api_token)+"&url="+adlinkfly_base64_encode(l[a].href)+"&type="+encodeURIComponent(n))}else for(var a=0;a<l.length;a++)0<(o=adlinkfly_get_host_name(l[a].getAttribute("href"))).length&&-1<adlinkfly_domains.indexOf(o)?l[a].href=adlinkfly_url+"api/v1/full-pages?api_key="+encodeURIComponent(adlinkfly_api_token)+"&url="+adlinkfly_base64_encode(l[a].href)+"&type="+encodeURIComponent(n):"magnet:"===l[a].protocol&&(l[a].href=adlinkfly_url+"api/v1/full-pages?api_key="+encodeURIComponent(adlinkfly_api_token)+"&url="+adlinkfly_base64_encode(l[a].href)+"&type="+encodeURIComponent(n))}});
}

if(data.view.isSingleItem == "true"){
/*! timeago */
!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof module&&"object"==typeof module.exports?t(require("jquery")):t(jQuery)}(function(t){t.timeago=function(e){return e instanceof Date?r(e):r("string"==typeof e?t.timeago.parse(e):"number"==typeof e?new Date(e):t.timeago.datetime(e))};var e=t.timeago;t.extend(t.timeago,{settings:{refreshMillis:6e4,allowPast:!0,allowFuture:!1,localeTitle:!1,cutoff:0,autoDispose:!0,strings:{prefixAgo:null,prefixFromNow:null,suffixAgo:null,suffixFromNow:null,inPast:"vừa xong",seconds:"vừa xong",minute:"1 phút trước",minutes:"%d phút trước",hour:"1 giờ trước",hours:"%d giờ trước",day:"1 ngày trước",days:"%d ngày trước",month:"1 tháng trước",months:"%d tháng trước",year:"1 năm trước",years:"%d năm trước",wordSeparator:" ",numbers:[]}},inWords:function(e){if(!this.settings.allowPast&&!this.settings.allowFuture)throw"timeago allowPast and allowFuture settings can not both be set to false.";var i=this.settings.strings,a=i.prefixAgo,r=i.suffixAgo;if(this.settings.allowFuture&&e<0&&(a=i.prefixFromNow,r=i.suffixFromNow),!this.settings.allowPast&&e>=0)return this.settings.strings.inPast;var n=Math.abs(e)/1e3,o=n/60,s=o/60,u=s/24,l=u/365;function m(a,r){var n=t.isFunction(a)?a(r,e):a,o=i.numbers&&i.numbers[r]||r;return n.replace(/%d/i,o)}var c=n<45&&m(i.seconds,Math.round(n))||n<90&&m(i.minute,1)||o<45&&m(i.minutes,Math.round(o))||o<90&&m(i.hour,1)||s<24&&m(i.hours,Math.round(s))||s<42&&m(i.day,1)||u<30&&m(i.days,Math.round(u))||u<45&&m(i.month,1)||u<365&&m(i.months,Math.round(u/30))||l<1.5&&m(i.year,1)||m(i.years,Math.round(l)),d=i.wordSeparator||"";return void 0===i.wordSeparator&&(d=" "),t.trim([a,c,r].join(d))},parse:function(e){var i=t.trim(e);return i=(i=(i=(i=(i=i.replace(/\.\d+/,"")).replace(/-/,"/").replace(/-/,"/")).replace(/T/," ").replace(/Z/," UTC")).replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2")).replace(/([\+\-]\d\d)$/," $100"),new Date(i)},datetime:function(i){var a=e.isTime(i)?t(i).attr("datetime"):t(i).attr("title");return e.parse(a)},isTime:function(e){return"time"===t(e).get(0).tagName.toLowerCase()}});var i={init:function(){i.dispose.call(this);var r=t.proxy(a,this);r();var n=e.settings;n.refreshMillis>0&&(this._timeagoInterval=setInterval(r,n.refreshMillis))},update:function(i){var r=i instanceof Date?i:e.parse(i);t(this).data("timeago",{datetime:r}),e.settings.localeTitle&&t(this).attr("title",r.toLocaleString()),a.apply(this)},updateFromDOM:function(){t(this).data("timeago",{datetime:e.parse(e.isTime(this)?t(this).attr("datetime"):t(this).attr("title"))}),a.apply(this)},dispose:function(){this._timeagoInterval&&(window.clearInterval(this._timeagoInterval),this._timeagoInterval=null)}};function a(){var i=e.settings;if(i.autoDispose&&!t.contains(document.documentElement,this))return t(this).timeago("dispose"),this;var a=function(i){if(!(i=t(i)).data("timeago")){i.data("timeago",{datetime:e.datetime(i)});var a=t.trim(i.text());e.settings.localeTitle?i.attr("title",i.data("timeago").datetime.toLocaleString()):!(a.length>0)||e.isTime(i)&&i.attr("title")||i.attr("title",a)}return i.data("timeago")}(this);return isNaN(a.datetime)||(0===i.cutoff||Math.abs(n(a.datetime))<i.cutoff?t(this).text(r(a.datetime)):t(this).attr("title").length>0&&t(this).text(t(this).attr("title"))),this}function r(t){return e.inWords(n(t))}function n(t){return(new Date).getTime()-t.getTime()}t.fn.timeago=function(t,e){var a=t?i[t]:i.init;if(!a)throw new Error("Unknown function name '"+t+"' for timeago");return this.each(function(){a.call(this,e)}),this},document.createElement("abbr"),document.createElement("time")}),$(".date-time a,.datetime a").each(function(){var t=$(this),e=(e=(e=t.html()).replace("SA","AM")).replace("CH","PM");t.attr("datetime",e),t.html(jQuery.timeago(e))});
}

