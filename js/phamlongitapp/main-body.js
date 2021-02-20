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
if(data.view.isPost == "true"){
    !function(i){i.fn.theiaStickySidebar=function(t){function e(t,e){return!0===t.initialized||!(i("body").width()<t.minWidth)&&(function(t,e){t.initialized=!0,0===i("#theia-sticky-sidebar-stylesheet-"+t.namespace).length&&i("head").append(i('<style id="theia-sticky-sidebar-stylesheet-'+t.namespace+'">.theiaStickySidebar:after {content: ""; display: table; clear: both;}</style>'));e.each(function(){var e={};if(e.sidebar=i(this),e.options=t||{},e.container=i(e.options.containerSelector),0==e.container.length&&(e.container=e.sidebar.parent()),e.sidebar.parents().css("-webkit-transform","none"),e.sidebar.css({position:e.options.defaultPosition,overflow:"visible","-webkit-box-sizing":"border-box","-moz-box-sizing":"border-box","box-sizing":"border-box"}),e.stickySidebar=e.sidebar.find(".theiaStickySidebar"),0==e.stickySidebar.length){var a=/(?:text|application)\/(?:x-)?(?:javascript|ecmascript)/i;e.sidebar.find("script").filter(function(i,t){return 0===t.type.length||t.type.match(a)}).remove(),e.stickySidebar=i("<div>").addClass("theiaStickySidebar").append(e.sidebar.children()),e.sidebar.append(e.stickySidebar)}e.marginBottom=parseInt(e.sidebar.css("margin-bottom")),e.paddingTop=parseInt(e.sidebar.css("padding-top")),e.paddingBottom=parseInt(e.sidebar.css("padding-bottom"));var n=e.stickySidebar.offset().top,s=e.stickySidebar.outerHeight();function d(){e.fixedScrollTop=0,e.sidebar.css({"min-height":"1px"}),e.stickySidebar.css({position:"static",width:"",transform:"none"})}e.stickySidebar.css("padding-top",1),e.stickySidebar.css("padding-bottom",1),n-=e.stickySidebar.offset().top,s=e.stickySidebar.outerHeight()-s-n,0==n?(e.stickySidebar.css("padding-top",0),e.stickySidebarPaddingTop=0):e.stickySidebarPaddingTop=1,0==s?(e.stickySidebar.css("padding-bottom",0),e.stickySidebarPaddingBottom=0):e.stickySidebarPaddingBottom=1,e.previousScrollTop=null,e.fixedScrollTop=0,d(),e.onScroll=function(e){if(e.stickySidebar.is(":visible"))if(i("body").width()<e.options.minWidth)d();else{if(e.options.disableOnResponsiveLayouts){var a=e.sidebar.outerWidth("none"==e.sidebar.css("float"));if(a+50>e.container.width())return void d()}var n,s,r=i(document).scrollTop(),c="static";if(r>=e.sidebar.offset().top+(e.paddingTop-e.options.additionalMarginTop)){var p,b=e.paddingTop+t.additionalMarginTop,l=e.paddingBottom+e.marginBottom+t.additionalMarginBottom,f=e.sidebar.offset().top,h=e.sidebar.offset().top+(n=e.container,s=n.height(),n.children().each(function(){s=Math.max(s,i(this).height())}),s),g=0+t.additionalMarginTop,S=e.stickySidebar.outerHeight()+b+l<i(window).height();p=S?g+e.stickySidebar.outerHeight():i(window).height()-e.marginBottom-e.paddingBottom-t.additionalMarginBottom;var u=f-r+e.paddingTop,m=h-r-e.paddingBottom-e.marginBottom,y=e.stickySidebar.offset().top-r,k=e.previousScrollTop-r;"fixed"==e.stickySidebar.css("position")&&"modern"==e.options.sidebarBehavior&&(y+=k),"stick-to-top"==e.options.sidebarBehavior&&(y=t.additionalMarginTop),"stick-to-bottom"==e.options.sidebarBehavior&&(y=p-e.stickySidebar.outerHeight()),y=k>0?Math.min(y,g):Math.max(y,p-e.stickySidebar.outerHeight()),y=Math.max(y,u),y=Math.min(y,m-e.stickySidebar.outerHeight());var v=e.container.height()==e.stickySidebar.outerHeight();c=(v||y!=g)&&(v||y!=p-e.stickySidebar.outerHeight())?r+y-e.sidebar.offset().top-e.paddingTop<=t.additionalMarginTop?"static":"absolute":"fixed"}if("fixed"==c){var x=i(document).scrollLeft();e.stickySidebar.css({position:"fixed",width:o(e.stickySidebar)+"px",transform:"translateY("+y+"px)",left:e.sidebar.offset().left+parseInt(e.sidebar.css("padding-left"))-x+"px",top:"0px"})}else if("absolute"==c){var T={};"absolute"!=e.stickySidebar.css("position")&&(T.position="absolute",T.transform="translateY("+(r+y-e.sidebar.offset().top-e.stickySidebarPaddingTop-e.stickySidebarPaddingBottom)+"px)",T.top="0px"),T.width=o(e.stickySidebar)+"px",T.left="",e.stickySidebar.css(T)}else"static"==c&&d();"static"!=c&&1==e.options.updateSidebarHeight&&e.sidebar.css({"min-height":e.stickySidebar.outerHeight()+e.stickySidebar.offset().top-e.sidebar.offset().top+e.paddingBottom}),e.previousScrollTop=r}},e.onScroll(e),i(document).on("scroll."+e.options.namespace,function(i){return function(){i.onScroll(i)}}(e)),i(window).on("resize."+e.options.namespace,function(i){return function(){i.stickySidebar.css({position:"static"}),i.onScroll(i)}}(e)),"undefined"!=typeof ResizeSensor&&new ResizeSensor(e.stickySidebar[0],function(i){return function(){i.onScroll(i)}}(e))})}(t,e),!0)}function o(i){var t;try{t=i[0].getBoundingClientRect().width}catch(i){}return void 0===t&&(t=i.width()),t}return(t=i.extend({containerSelector:"",additionalMarginTop:0,additionalMarginBottom:0,updateSidebarHeight:!0,minWidth:0,disableOnResponsiveLayouts:!0,sidebarBehavior:"modern",defaultPosition:"relative",namespace:"TSS"},t)).additionalMarginTop=parseInt(t.additionalMarginTop)||0,t.additionalMarginBottom=parseInt(t.additionalMarginBottom)||0,function(t,o){e(t,o)||(console.log("TSS: Body width smaller than options.minWidth. Init is delayed."),i(document).on("scroll."+t.namespace,function(t,o){return function(a){var n=e(t,o);n&&i(this).unbind(a)}}(t,o)),i(window).on("resize."+t.namespace,function(t,o){return function(a){var n=e(t,o);n&&i(this).unbind(a)}}(t,o)))}(t,this),this}}(jQuery);
    }
    
    /*! Shortcode.js by @nicinabox | v1.1.0 - https://github.com/nicinabox/shortcode.js */
    var Shortcode=function(el,tags){if(!el){return}this.el=el;this.tags=tags;this.matches=[];this.regex='\\[{name}(\\s[\\s\\S]*?)?\\]'+'(?:((?!\\s*?(?:\\[{name}|\\[\\/(?!{name})))[\\s\\S]*?)'+'(\\[\/{name}\\]))?';if(this.el.jquery){this.el=this.el[0]}this.matchTags();this.convertMatchesToNodes();this.replaceNodes()};Shortcode.prototype.matchTags=function(){var html=this.el.outerHTML,instances,match,re,contents,regex,tag,options;for(var key in this.tags){if(!this.tags.hasOwnProperty(key)){return}re=this.template(this.regex,{name:key});instances=html.match(new RegExp(re,'g'))||[];for(var i=0,len=instances.length;i<len;i++){match=instances[i].match(new RegExp(re));contents=match[3]?'':undefined;tag=match[0];regex=this.escapeTagRegExp(tag);options=this.parseOptions(match[1]);if(match[2]){contents=match[2].trim();tag=tag.replace(contents,'').replace(/\n\s*/g,'');regex=this.escapeTagRegExp(tag).replace('\\]\\[','\\]([\\s\\S]*?)\\[')}this.matches.push({name:key,tag:tag,regex:regex,options:options,contents:contents})}}};Shortcode.prototype.convertMatchesToNodes=function(){var html=this.el.innerHTML,excludes,re,replacer;replacer=function(match,p1,p2,p3,p4,offset,string){if(p1){return match}else{var node=document.createElement('span');node.setAttribute('data-sc-tag',this.tag);node.className='templateify-sc-node templateify-sc-node-'+this.name;return node.outerHTML}};for(var i=0,len=this.matches.length;i<len;i++){excludes='((data-sc-tag=")|(<pre.*)|(<code.*))?';re=new RegExp(excludes+this.matches[i].regex,'g');html=html.replace(re,replacer.bind(this.matches[i]))}this.el.innerHTML=html};Shortcode.prototype.replaceNodes=function(){var self=this,html,match,result,done,node,fn,replacer,nodes=this.el.querySelectorAll('.templateify-sc-node');replacer=function(result){if(result.jquery){result=result[0]}result=self.parseCallbackResult(result);node.parentNode.replaceChild(result,node)};for(var i=0,len=this.matches.length;i<len;i++){match=this.matches[i];node=this.el.querySelector('.templateify-sc-node-'+match.name);if(node&&node.dataset.scTag===match.tag){fn=this.tags[match.name].bind(match);done=replacer.bind(match);result=fn(done);if(result!==undefined){done(result)}}}};Shortcode.prototype.parseCallbackResult=function(result){var container,fragment,children;switch(typeof result){case'function':result=document.createTextNode(result());break;case'string':container=document.createElement('div');fragment=document.createDocumentFragment();container.innerHTML=result;children=container.childNodes;if(children.length){for(var i=0,len=children.length;i<len;i++){fragment.appendChild(children[i].cloneNode(true))}result=fragment}else{result=document.createTextNode(result)}break;case'object':if(!result.nodeType){result=JSON.stringify(result);result=document.createTextNode(result)}break;case'default':break}return result};Shortcode.prototype.parseOptions=function(stringOptions){var options={},set;if(!stringOptions){return}set=stringOptions.replace(/(\w+=)/g,'\n$1').split('\n');set.shift();for(var i=0;i<set.length;i++){var kv=set[i].split('=');options[kv[0]]=kv[1].replace(/\'|\"/g,'').trim()}return options};Shortcode.prototype.escapeTagRegExp=function(regex){return regex.replace(/[\[\]\/]/g,'\\$&')};Shortcode.prototype.template=function(s,d){for(var p in d){s=s.replace(new RegExp('{'+p+'}','g'),d[p])}return s};String.prototype.trim=String.prototype.trim||function(){return this.replace(/^\s+|\s+$/g,'')};if(window.jQuery){var pluginName='shortcode';$.fn[pluginName]=function(tags){this.each(function(){if(!$.data(this,pluginName)){$.data(this,pluginName,new Shortcode(this,tags))}});return this}}
    
    /*! MenuIfy by Templateify | v1.0.0 - https://www.prodavad.com */
    !function(a){a.fn.menuify=function(){return this.each(function(){var $t=a(this),b=$t.find('.LinkList ul > li').children('a'),c=b.length;for(var i=0;i<c;i++){var d=b.eq(i),h=d.text();if(h.charAt(0)!=='_'){var e=b.eq(i+1),j=e.text();if(j.charAt(0)==='_'){var m=d.parent();m.append('<ul class="sub-menu m-sub"/>');}}if(h.charAt(0)==='_'){d.text(h.replace('_',''));d.parent().appendTo(m.children('.sub-menu'));}}for(var i=0;i<c;i++){var f=b.eq(i),k=f.text();if(k.charAt(0)!=='_'){var g=b.eq(i+1),l=g.text();if(l.charAt(0)==='_'){var n=f.parent();n.append('<ul class="sub-menu2 m-sub"/>');}}if(k.charAt(0)==='_'){f.text(k.replace('_',''));f.parent().appendTo(n.children('.sub-menu2'));}}$t.find('.LinkList ul li ul').parent('li').addClass('has-sub');});}}(jQuery);
    
    /*! Tabify by Templateify | v1.0.0 */
    !function(a){a.fn.tabify=function(b){b=jQuery.extend({onHover:false,animated:true,transition:'fadeInUp'},b);return this.each(function(){var e=a(this),c=e.children('[tab-ify]'),d=0,n='tab-animated',k='tab-active';if(b.onHover==true){var event='mouseenter'}else{var event='click'}e.prepend('<ul class="select-tab"></ul>');c.each(function(){if(b.animated==true){a(this).addClass(n)}e.find('.select-tab').append('<li><a href="javascript:;">'+a(this).attr('tab-ify')+'</a></li>')}).eq(d).addClass(k).addClass('tab-'+b.transition);e.find('.select-tab a').on(event,function(){var f=a(this).parent().index();a(this).closest('.select-tab').find('.active').removeClass('active');a(this).parent().addClass('active');c.removeClass(k).removeClass('tab-'+b.transition).eq(f).addClass(k).addClass('tab-'+b.transition);return false}).eq(d).parent().addClass('active')})}}(jQuery);
    
    /*! jQuery replaceText by "Cowboy" Ben Alman | v1.1.0 - http://benalman.com/projects/jquery-replacetext-plugin/ */
    if(data.view.isSingleItem == "true"){
    (function($){$.fn.replaceText=function(b,a,c){return this.each(function(){var f=this.firstChild,g,e,d=[];if(f){do{if(f.nodeType===3){g=f.nodeValue;e=g.replace(b,a);if(e!==g){if(!c&&/</.test(e)){$(f).before(e);d.push(f)}else{f.nodeValue=e}}}}while(f=f.nextSibling)}d.length&&$(d).remove()})}})(jQuery);
    }
    
    /*! dark mode */
    function auto(){document.body.classList.add('auto');if(new Date().getHours()>20||new Date().getHours()<6){document.body.classList.add('dark');localStorage.setItem('661739dark','true')}else{document.body.classList.remove('dark');localStorage.setItem('661739dark','false')}}function dark(){localStorage.getItem('661739dark')=='true'?document.body.classList.add('dark'):document.body.classList.remove('dark')}if(localStorage.getItem('661739auto')=='true'){auto()}else{localStorage.getItem('661739dark')==null?auto():dark()}function toggle(){localStorage.setItem('661739auto',localStorage.getItem('661739auto')=='true'?'false':'true');localStorage.getItem('661739auto')=='true'?auto():document.body.classList.remove('auto')}function mode(){document.body.classList.remove('auto');localStorage.removeItem('661739auto');localStorage.setItem('661739dark',localStorage.getItem('661739dark')=='true'?'false':'true');dark()}
    
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
    $('#phamlongitapp-main-menu').menuify();
    $('#phamlongitapp-main-menu .widget').addClass('show-menu');
    
    $('.show-search,.overlay-search').on('click', function() {
        $('body').toggleClass('open-search')
    });
    $('.follow-by-email-text').each(function() {
        var $t = $(this),
            $fbet = followByEmailText;
        if ($fbet != '') {
            $t.text($fbet)
        }
    });
    
    $('.post-body strike').each(function() {
        var $t = $(this),
            $mtc = $t.text().trim();
        if ($mtc == '$ads1') {
            $t.replaceWith('<div id="new-before-ad"/>')
        }
        if ($mtc == '$ads2') {
            $t.replaceWith('<div id="new-after-ad"/>')
        }
        if ($mtc == '$get-download') {
            $t.replaceWith('<div id="new-before-ad"/><a href="#download" rel="nofollow" class="button download">Download</a>')
        }
        if ($mtc == '$download') {
          $t.replaceWith('<a name="download"></a><div class="title-download"></div><div id="new-after-ad"/>')
          $(document).ready(function(){
            $('.title-download').each(function () {
              var text = $(this),
                  html = $('table .file-name').text();
              text.html('Tải '+ html +' cho Android')
            })
          });
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
        if (type.match('file-name')) {
            $this.replaceWith('<div class="download-list__title"><span class="file-name short-b">' + html + '</span><span class="version"></span></div>');
            $(document).ready(function(){
              $('.download-list .version').each(function () {
                var text = $(this),
                    html = $('table .version').text();
                text.html('v' + html + '')
              })
            });
        }
        if (type.match('file-link')) {
            $this.replaceWith('<div class="download-list__file short-b">'+ html +'</div>')
        }
        var $sb = $('.post-body .short-b').find('b');
        $sb.each(function() {
            var $b = $(this),
                $t = $b.text().trim();
            if ($t.match('file-link') || $t.match('file-name') || $t.match('alert-success') || $t.match('alert-info') || $t.match('alert-warning') || $t.match('alert-danger') || $t.match('callout-success') || $t.match('callout-info') || $t.match('callout-warning') || $t.match('callout-danger') || $t.match('code') || $t.match('kbd')) {
                $b.replaceWith("")
            }
        })
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
    
    $('.post-body ul li').each(function() {
        var $this = $(this),
            type = $this.text().trim(),
            html = $this.html();
        if (type.match('download-item')) {
          $this.replaceWith('<div class="download-item short-b">' + html + '</div>');
          $('.download-item').parents('.post-body ul').addClass('download-list');
        }
        var $sb = $('.post-body .short-b').find('b');
        $sb.each(function() {
            var $b = $(this),
                $t = $b.text().trim();
            if ($t.match('download-item')) {
                $b.replaceWith("")
            }
        })
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
        if (type.match('slider-img')) {
            $this.replaceWith('<div class="slider-img short-b">'+ html +'</div>');
        }
        var $sb = $('.post-body .short-b').find('b');
        $sb.each(function() {
            var $b = $(this),
                $t = $b.text().trim();
            if ($t.match('slider-img') || $t.match('colorbox-success') || $t.match('colorbox-info') || $t.match('colorbox-warning') || $t.match('colorbox-danger') || $t.match('descriptions')) {
                $b.replaceWith("")
            }
        })
        var owl = $('.slider-img');
        owl.owlCarousel({
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
    
    $('#phamlongitapp-main-menu li').each(function() {
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
    
    $('#featured-sec .HTML .widget-content').each(function() {
        var $this = $(this),
            text = $this.text().trim().toLowerCase();
        $this.shortcode({
            getFeatured: function() {
                var label = this.options.label,
                    type = this.options.type;
                if ("results" in this.options) {
                   var num = this.options.results;
                } else {
                    num = 8
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
                    type = this.options.type,
                    intro = this.options.intro;
                ajaxBlock($this, type, num, label, text, intro)
            }
        })
    });
    
    $('.phamlongitapp-widget-ready .HTML .widget-content').each(function() {
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
    $('.phamlongitapp-related-content').each(function() {
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
                furl = '/feeds/posts/summary?alt=json-in-script&max-results=' + num;
                break;
            case 'comments':
                if (type == 'list') {
                    furl = '/feeds/comments/summary?alt=json-in-script&max-results=' + num
                } else {
                    furl = '/feeds/posts/summary/-/' + label + '?alt=json-in-script&max-results=' + num
                }
                break;
            default:
                furl = '/feeds/posts/summary/-/' + label + '?alt=json-in-script&max-results=' + num;
                break
        }
        return furl
    }
    
    function getPostLink(feed, i) {
        for (var x = 0; x < feed[i].link.length; x++)
            if (feed[i].link[x].rel == 'alternate') {
                var link = feed[i].link[x].href;
                break
            }
        return link
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
        var code = '<article class="custom-item item-' + i + '"><div class="entry-image-avatar"><a class="entry-image-link cmm-avatar" href="' + link + '"><span class="entry-thumb" data-image="' + img + '"/></a></div><h2 class="entry-title"><a href="' + link + '">' + n + '</a></h2><span class="cmm-snippet excerpt">' + h + '</span></article>';
        return code
    }
    
    
    function getAjax($this, type, num, label) {
      var furl = '';
      if (label == undefined) {
          label = 'geterror404'
      }
      var startajax = function(url, indexNum) {
           $.ajax({
              url: url,
              type: 'GET',
              dataType: 'jsonp',
              cache: true,
              beforeSend: function(data) {
                  switch (type) {
                      case 'featured':
                          $this.html(beforeLoader()).parent().addClass('show-ify show-' + type + '');
                          break;
                      case 'grid1':
                      case 'carousel':
                      case 'related':
                          $this.html(beforeLoader()).parent().addClass('show-ify');
                          break;
                      case 'list':
                          $this.html(beforeLoader());
                          break
                  }
              }
          }).done(function(data) {
            var html = '';
            switch (type) {
                case 'msimple':
                case 'megatabs':
                    html = '<ul class="mega-widget">';
                    break;
                case 'featured':
                    html = '<div class="featured-grid ' + type + '">';
                    break;
                case 'grid1':
                    html = '<div class="grid-posts-1 total-' + num + '">';
                    break;
                case 'carousel':
                    html = '<div class="block-carousel">';
                    break;
                case 'list':
                    html = '<div class="custom-widget">';
                    break;
                case 'related':
                    html = '<div class="related-posts total-' + num + '">';
                    break
            }
            var entry = data.feed.entry,
                moreText = showMoreText,
                text = '';
            if (moreText != '') {
                text = moreText
            } else {
                text = messages.showMore
            }
            if (entry != undefined) {
                for (var i = 0, feed = entry; i < feed.length; i++) {
                    var link = getPostLink(feed, i),
                        title = getPostTitle(feed, i, link),
                        image = getPostImage(feed, i, link),
                        author = getPostAuthor(feed, i),
                        date = getPostDate(feed, i),
                        comments = getNumberComments(feed, i);
                    var content = '';
                    switch (type) {
                        case 'msimple':
                        case 'megatabs':
                            content += '<article class="mega-item"><div class="mega-content"><a class="entry-image-link" href="' + link + '"><span class="entry-thumb" data-image="' + image + '"/></a><h2 class="entry-title"><a href="' + link + '">' + title + '</a></h2><div class="entry-meta">' + date[1] + '</div></div></article>';
                            break;
                        case 'featured':
                            content += '<article class="featured-item item-' + i + '"><div class="featured-item-inner"><a class="entry-image-link" href="' + link + '"><span class="entry-thumb before-mask" data-image="' + image + '"/><h2 class="entry-title">' + title + '</h2></a></div></article>';
                            break;
                        case 'grid1':
                            content += '<article class="grid-item item-' + i + '"><div class="entry-image"><a class="entry-image-link" href="' + link + '"><span class="entry-thumb before-mask" data-image="' + image + '"/><h2 class="entry-title">' + title + '</h2></a></div></article>';
                            break;
                        case 'carousel':
                            content += '<article class="carousel-item item-' + i + '"><div class="entry-image"><a class="entry-image-link" href="' + link + '"><span class="entry-thumb" data-image="' + image + '"/></a></div><h2 class="entry-title"><a href="' + link + '">' + title + '</a></h2></article>';
                            break;
                        case 'list':
                            switch (label) {
                                case 'comments':
                                    var code = getPostComments(feed, i, link);
                                    content += code;
                                    break;
                                default:
                                    content += '<article class="custom-item item-' + i + '"><div class="entry-image"><a class="entry-image-link" href="' + link + '"><span class="entry-thumb" data-image="' + image + '"/></a></div><div class="entry-header"><h2 class="entry-title"><a href="' + link + '">' + title + '</a></h2><div class="entry-meta">' + date[1] + '</div></div></article>';
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
                case 'featured':
                    html += '</div>';
                    if (label !== "random") {
                        $this.html(html);
                    } else {
                        $this.append(html).find('.spinner').remove();
                        $this.find('article').unwrap().wrapAll('<div class="featured-grid ' + type + '">').promise().done(function() {
                            var item = $this.find('article');
                            item.removeClass('item-0');
                            item.each(function(index, elem) {
                                $(elem).addClass('item-' + index);
                            })
                        });
                    }
                    break;
                case 'grid1':
                    html += '</div>';
                    if (label == "recent") {
                        $this.html(html).append('<div class="center" id="blog-pager"><a class="theme-button" href="/search?&max-results=6">' + text + '</a></div>');
                    } else {
                        $this.html(html).append('<div class="center" id="blog-pager"><a class="theme-button" href="/search/label/' + label + '?&max-results=6">' + text + '</a></div>');
                    }
                    break;
                case 'carousel':
                    html += '</div>';
                    $this.html(html);
                    var $slider = $this.find('.block-carousel');
                    $slider.owlCarousel({
                        items: 1,
                        loop: true,
                        margin: 30,
                        autoHeight:true,
                        autoplay: true,
                        autoplayTimeout: 3000,
                        autoplayHoverPause: true,
                        responsive: {
                            0: {
                                items: 1
                            },
                            541: {
                                items: 2,
                                margin: 20
                            },
                            681: {
                                items: 2,
                                margin: 30
                            },
                            881: {
                                items: 3
                            }
                        }
                    });
                    break;
                case 'list':
                    html += '</div>';
                    if (label !== "random") {
                        $this.html(html);
                    } else {
                        $this.append(html).find('.spinner').remove();
                        $this.find('article').unwrap().wrapAll('<div class="custom-widget">').promise().done(function() {
                            var item = $this.find('article');
                            item.removeClass('item-0');
                            item.each(function(index, elem) {
                                $(elem).addClass('item-' + index);
                            })
                        });
                    }
                    break;
                default:
                    html += '</div>';
                    $this.html(html);
                    break
            }
            $this.find('span.entry-thumb').lazyify()
          }).fail(function() {
            switch (type) {
              case 'msimple':
                  $this.append('<ul>' + msgServerError() + '</ul>');
                  break;
              default:
                  $this.html(msgServerError());
                  break
          }
          });
      }
      switch (type) {
          case 'featured':
          case 'list':
                if (label != 'random') {
                    furl = getFeedUrl(type, num, label);
                    startajax(furl);
                } else {
                    var total, randomArr = [];
                    $.ajax({
                      type: "GET",
                      dataType: 'jsonp',
                      url: "/feeds/posts/summary?alt=json-in-script&max-results=0",
                      success: function(data) {
                        total = parseInt(data.feed.openSearch$totalResults.$t);
                        if (num > total) num = total;
                        while (randomArr.length < num) {
                          var r = Math.floor(Math.random() * total) + 1;
                          if (randomArr.indexOf(r) === -1) randomArr.push(r);
                        }
                      }
                    }).done(function() {
                      $(randomArr).each(function(i, index) {
                        furl = '/feeds/posts/summary?alt=json-in-script&max-results=1&start-index=' + index;
                        startajax(furl, i);
                      })
                    })
                }
              break;
          case 'msimple':
          case 'megatabs':
          case 'grid1':
          case 'carousel':
          case 'related':
            furl = getFeedUrl(type, num, label);
            startajax(furl);
            break;
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
    
    
    function ajaxFeatured($this, type, num, label, text) {
        if (text.match('getfeatured')) {
            if (type == 'featured') {
                return getAjax($this, type, num, label)
            } else {
                $this.html(beforeLoader()).parent().addClass('show-ify');
                setTimeout(function () {
                    $this.html(msgError())
                }, 500)
            }
        }
    }
    
    function ajaxBlock($this, type, num, label, text, intro) {
        if (text.match('getblock')) {
            if (type == 'grid1' || type == 'carousel') {
                if (intro != "") {
                    $this.parent().find('.widget-title').append('<p class="intro">' + intro + '</p>');
                }
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
    $('.phamlongitapp-blog-post-comments').each(function() {
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
        $('#mobile-menu').each(function() {
            var $t = $(this),
                $m = $('#phamlongitapp-main-menu-nav').clone();
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
        if (fixedMenu == true) {
            $("body").addClass("fixed");
        }
        $(window).scroll(function() {
            if (fixedMenu == true && data.view.isMobileRequest != "true") {
                if ($(window).scrollTop() >= 30) {
                    $('.navbar-wrap').addClass('scroll');
                } else {
                    $('.navbar-wrap').removeClass('scroll');
                }
            }
        });
        if(data.view.isPost == "true"){
            $('#main-wrapper, #sidebar-wrapper').each(function() {
                if (fixedSidebar == true) {
                    $(this).theiaStickySidebar({
                        additionalMarginTop: 60,
                        additionalMarginBottom: 20
                    })
                }
            });
        }
      if(data.view.isMobileRequest != "true"){
        $('.back-top').each(function() {
            var $this = $(this);
            $(window).on('scroll', function() {
                $(this).scrollTop() >= 100 ? $this.fadeIn(250) : $this.fadeOut(250)
            }), $this.click(function() {
                $('html, body').animate({
                    scrollTop: 0
                }, 500)
            })
        });
      }
        if(data.view.isMultipleItems == "true"){
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
                            $('#blog-pager .loading').hide();
                        }
                    });
                    a.preventDefault()
                })
            })
        }
    });
    
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
    
      $(".post-body > img:first").remove();
    
      $('.collapsible-item--title,.download-list__title').click(function(e) {
        $(this).toggleClass('active').siblings('.collapsible-item--content,.download-list__file').slideToggle(500);
        $(this).parent().siblings().children('.collapsible-item--title,.download-list__title').removeClass('active');
        $(this).parent().siblings().children('.collapsible-item--content,.download-list__file').slideUp(500);
      });
    }
    
    $('#phamlongitapp-main-menu-nav li > a').each(function() {
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
            $('#phamlongitapp-main-menu-nav li > a').not($(this)).removeClass('current active')
        }
    });
    
    $('#phamlongitapp-main-menu-nav li > a').hover(function() {
        $('#phamlongitapp-main-menu-nav li > a.active').toggleClass('current');
    });
    
    if ($("#phamlongitapp-main-menu-nav li > ul li > a").hasClass("current")) {
        $("#phamlongitapp-main-menu-nav li ul > li > a.current").parents("#phamlongitapp-main-menu-nav > li").children("#phamlongitapp-main-menu-nav > li > a").toggleClass('current active');
    }
    
    if(data.view.isMobileRequest == "true"){
    /*! delete ?m=1 */
    var uri;if((uri=window.location.toString()).indexOf("%3D","%3D")>0){var clean_uri=uri.substring(0,uri.indexOf("%3D"));window.history.replaceState({},document.title,clean_uri)}if((uri=window.location.toString()).indexOf("%3D%3D","%3D%3D")>0){clean_uri=uri.substring(0,uri.indexOf("%3D%3D"));window.history.replaceState({},document.title,clean_uri)}if((uri=window.location.toString()).indexOf("&m=1","&m=1")>0){clean_uri=uri.substring(0,uri.indexOf("&m=1"));window.history.replaceState({},document.title,clean_uri)}if((uri=window.location.toString()).indexOf("?m=1","?m=1")>0){clean_uri=uri.substring(0,uri.indexOf("?m=1"));window.history.replaceState({},document.title,clean_uri)}var protocol=window.location.protocol.replace(/\:/g,"");if("http"==protocol){var url=window.location.href.replace("http","https");window.location.replace(url)};
    }
    
    if(data.view.isSingleItem == "true"){
      $('span.comment-content').each(function() {
        var $t = $(this);
        $t.replaceText(/(https:\/\/\S+(\.png|\.jpeg|\.jpg|\.gif))/g, '<img src="$1"/>');
        $t.replaceText(/(?:https:\/\/)?(?:www\.)?(?:youtube\.com)\/(?:watch\?v=)?(.+)/g, '<iframe id="youtube" width="100%" height="330" src="https://www.youtube.com/embed/$1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
      });
    
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
    
    $(".post-body ol > li > a > img").parents(".post-body ol").addClass('slider-img');
    
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
    
    /*! post views */
    $(function(){jQuery.getScript("https://cdn.firebase.com/js/client/2.3.2/firebase.js").done(function(){$.each($(".post-views"),function(t,a){var e=$(a).find("#postviews"),i=$('link[rel="canonical"]').attr("href"),n=new Firebase("https://nguyen-tinh.firebaseio.com/pages/id/"+$(a).attr("data-id"));n.once("value",function(t){var r=t.val(),l=!1;null==r&&((r={}).value=0,r.url=$(a).attr("data-href"),r.id=$(a).attr("data-id"),l=!0),e.text(r.value),r.value++,"/"!=window.location.pathname&&$(a).attr("data-href")==i&&(l?n.set(r):n.child("value").set(r.value))})})})});
    
    /*! timeago */
    !function(t){"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof module&&"object"==typeof module.exports?t(require("jquery")):t(jQuery)}(function(t){t.timeago=function(e){return e instanceof Date?r(e):r("string"==typeof e?t.timeago.parse(e):"number"==typeof e?new Date(e):t.timeago.datetime(e))};var e=t.timeago;t.extend(t.timeago,{settings:{refreshMillis:6e4,allowPast:!0,allowFuture:!1,localeTitle:!1,cutoff:0,autoDispose:!0,strings:{prefixAgo:null,prefixFromNow:null,suffixAgo:null,suffixFromNow:null,inPast:"vừa xong",seconds:"vừa xong",minute:"1 phút trước",minutes:"%d phút trước",hour:"1 giờ trước",hours:"%d giờ trước",day:"1 ngày trước",days:"%d ngày trước",month:"1 tháng trước",months:"%d tháng trước",year:"1 năm trước",years:"%d năm trước",wordSeparator:" ",numbers:[]}},inWords:function(e){if(!this.settings.allowPast&&!this.settings.allowFuture)throw"timeago allowPast and allowFuture settings can not both be set to false.";var i=this.settings.strings,a=i.prefixAgo,r=i.suffixAgo;if(this.settings.allowFuture&&e<0&&(a=i.prefixFromNow,r=i.suffixFromNow),!this.settings.allowPast&&e>=0)return this.settings.strings.inPast;var n=Math.abs(e)/1e3,o=n/60,s=o/60,u=s/24,l=u/365;function m(a,r){var n=t.isFunction(a)?a(r,e):a,o=i.numbers&&i.numbers[r]||r;return n.replace(/%d/i,o)}var c=n<45&&m(i.seconds,Math.round(n))||n<90&&m(i.minute,1)||o<45&&m(i.minutes,Math.round(o))||o<90&&m(i.hour,1)||s<24&&m(i.hours,Math.round(s))||s<42&&m(i.day,1)||u<30&&m(i.days,Math.round(u))||u<45&&m(i.month,1)||u<365&&m(i.months,Math.round(u/30))||l<1.5&&m(i.year,1)||m(i.years,Math.round(l)),d=i.wordSeparator||"";return void 0===i.wordSeparator&&(d=" "),t.trim([a,c,r].join(d))},parse:function(e){var i=t.trim(e);return i=(i=(i=(i=(i=i.replace(/\.\d+/,"")).replace(/-/,"/").replace(/-/,"/")).replace(/T/," ").replace(/Z/," UTC")).replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2")).replace(/([\+\-]\d\d)$/," $100"),new Date(i)},datetime:function(i){var a=e.isTime(i)?t(i).attr("datetime"):t(i).attr("title");return e.parse(a)},isTime:function(e){return"time"===t(e).get(0).tagName.toLowerCase()}});var i={init:function(){i.dispose.call(this);var r=t.proxy(a,this);r();var n=e.settings;n.refreshMillis>0&&(this._timeagoInterval=setInterval(r,n.refreshMillis))},update:function(i){var r=i instanceof Date?i:e.parse(i);t(this).data("timeago",{datetime:r}),e.settings.localeTitle&&t(this).attr("title",r.toLocaleString()),a.apply(this)},updateFromDOM:function(){t(this).data("timeago",{datetime:e.parse(e.isTime(this)?t(this).attr("datetime"):t(this).attr("title"))}),a.apply(this)},dispose:function(){this._timeagoInterval&&(window.clearInterval(this._timeagoInterval),this._timeagoInterval=null)}};function a(){var i=e.settings;if(i.autoDispose&&!t.contains(document.documentElement,this))return t(this).timeago("dispose"),this;var a=function(i){if(!(i=t(i)).data("timeago")){i.data("timeago",{datetime:e.datetime(i)});var a=t.trim(i.text());e.settings.localeTitle?i.attr("title",i.data("timeago").datetime.toLocaleString()):!(a.length>0)||e.isTime(i)&&i.attr("title")||i.attr("title",a)}return i.data("timeago")}(this);return isNaN(a.datetime)||(0===i.cutoff||Math.abs(n(a.datetime))<i.cutoff?t(this).text(r(a.datetime)):t(this).attr("title").length>0&&t(this).text(t(this).attr("title"))),this}function r(t){return e.inWords(n(t))}function n(t){return(new Date).getTime()-t.getTime()}t.fn.timeago=function(t,e){var a=t?i[t]:i.init;if(!a)throw new Error("Unknown function name '"+t+"' for timeago");return this.each(function(){a.call(this,e)}),this},document.createElement("abbr"),document.createElement("time")}),$(".date-time a").each(function(){var t=$(this),e=(e=(e=t.html()).replace("SA","AM")).replace("CH","PM");t.attr("datetime",e),t.html(jQuery.timeago(e))});
    
    /*! lazy load */
    !function(e){e.fn.lazyload=function(t){var o={threshold:0,failurelimit:0,event:"scroll",effect:"show",container:window};t&&e.extend(o,t);var n=this;return"scroll"==o.event&&e(o.container).bind("scroll",function(t){var i=0;n.each(function(){if(e.abovethetop(this,o)||e.leftofbegin(this,o));else if(e.belowthefold(this,o)||e.rightoffold(this,o)){if(i++>o.failurelimit)return!1}else e(this).trigger("appear")});var r=e.grep(n,function(e){return!e.loaded});n=e(r)}),this.each(function(){var t=this;null==e(t).attr("original")&&e(t).attr("original",e(t).attr("src")),"scroll"!=o.event||null==e(t).attr("src")||o.placeholder==e(t).attr("src")||e.abovethetop(t,o)||e.leftofbegin(t,o)||e.belowthefold(t,o)||e.rightoffold(t,o)?(o.placeholder?e(t).attr("src",o.placeholder):e(t).removeAttr("src"),t.loaded=!1):t.loaded=!0,e(t).one("appear",function(){this.loaded||e("<img />").bind("load",function(){e(t).hide().attr("src",e(t).attr("original"))[o.effect](o.effectspeed),t.loaded=!0}).attr("src",e(t).attr("original"))}),"scroll"!=o.event&&e(t).bind(o.event,function(o){t.loaded||e(t).trigger("appear")})}),e(o.container).trigger(o.event),this},e.belowthefold=function(t,o){if(void 0===o.container||o.container===window)var n=e(window).height()+e(window).scrollTop();else n=e(o.container).offset().top+e(o.container).height();return n<=e(t).offset().top-o.threshold},e.rightoffold=function(t,o){if(void 0===o.container||o.container===window)var n=e(window).width()+e(window).scrollLeft();else n=e(o.container).offset().left+e(o.container).width();return n<=e(t).offset().left-o.threshold},e.abovethetop=function(t,o){if(void 0===o.container||o.container===window)var n=e(window).scrollTop();else n=e(o.container).offset().top;return n>=e(t).offset().top+o.threshold+e(t).height()},e.leftofbegin=function(t,o){if(void 0===o.container||o.container===window)var n=e(window).scrollLeft();else n=e(o.container).offset().left;return n>=e(t).offset().left+o.threshold+e(t).width()},e.extend(e.expr[":"],{"below-the-fold":"$.belowthefold(a, {threshold : 0, container: window})","above-the-fold":"!$.belowthefold(a, {threshold : 0, container: window})","right-of-fold":"$.rightoffold(a, {threshold : 0, container: window})","left-of-fold":"!$.rightoffold(a, {threshold : 0, container: window})"})}(jQuery),$(function(){$(".separator img,.tr-caption-container img,.post-body img").lazyload({placeholder:"//1.bp.blogspot.com/-Qg5bi1ZtDdM/VZ5nHAyYBqI/AAAAAAAAChE/exGnasO4oyk/s640/arlinadesign.gif",effect:"fadeIn",threshold:"-50"})});
    }
