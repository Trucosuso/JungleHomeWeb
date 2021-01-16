$(function () {
    $("#burger-menu").on("click", function () {
        let navMenu = $("#navMenu");
        if ($(navMenu).css("display") == "none") {
            $(navMenu).slideDown("fast", function () {
                $(this).css("display", "");
                $(this).removeClass("hidden-sm");
            });
        } else {
            $(navMenu).slideUp("fast", function () {
                $(this).css("display", "");
                $(this).addClass("hidden-sm");
            });
        }
        toggleIcon(this);
    });

    $("#aside-burger-menu").on("click", function () {
        let aside = $("aside");
        if ($(aside).css("display") == "none") {
            $(aside).slideDown("fast", function () {
                $(this).css("display", "");
                $(this).removeClass("hidden-md");
            });
        } else {
            $(aside).slideUp("fast", function () {
                $(this).css("display", "");
                $(this).addClass("hidden-md");
            });
        }
        toggleIcon(this)
    });
});

function toggleIcon(burgerIcon) {
    $(burgerIcon).children().toggle();
}