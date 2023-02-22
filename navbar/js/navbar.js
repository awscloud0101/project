$(document).ready(function () {

    $('.navbar .dropdown-item').on('click', function (e) {
        /* CampusWhiz: If the clicked element is a menu item then navigate to the corresposnding url */
        if($(this).hasClass("dropdown-item") && !$(this).hasClass("dropdown")){
            //alert($(this).attr('href'));
            attrTarget = $(this)[0].hasAttribute("target"); //CampusWhiz: Check if URL to opened in new tab
            if(typeof attrTarget !== typeof undefined && attrTarget !== false){
                window.open($(this).attr('href'), '_blank');
            } else {
                window.location = $(this).attr('href');
            }
        }
        
        var $el = $(this).children('.dropdown-toggle');
        var $parent = $el.offsetParent(".dropdown-menu");
        $(this).parent("li").toggleClass('open');

        if (!$parent.parent().hasClass('navbar-nav')) {
            if ($parent.hasClass('show')) {
                $parent.removeClass('show');
                $el.next().removeClass('show');
                $el.next().css({"top": -999, "left": -999});

            } else {
                $parent.parent().find('.show').removeClass('show');
                $parent.addClass('show');
                $el.next().addClass('show');
                $el.next().css({"top": $el[0].offsetTop, "left": $parent.outerWidth() - 4});
            }
            e.preventDefault();
            e.stopPropagation();
        }
    });

    $('.navbar .dropdown').on('hidden.bs.dropdown', function () {
        $(this).find('li.dropdown').removeClass('show open');
        $(this).find('ul.dropdown-menu').removeClass('show open');
    });

});
