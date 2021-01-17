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
        toggleIcon(this);
    });

    $("#plant-care > h1 > svg").on("click", function () {
        let p = $("#plant-care > p");
        if ($(p).css("display") == "none") {
            $(p).slideDown("fast", function () {
                $(this).css("display", "");
                $(this).removeClass("hidden");
            });
        } else {
            $(p).slideUp("fast", function () {
                $(this).css("display", "");
                $(this).addClass("hidden");
            });
        }
        toggleIcon(this);
    });
});

function toggleIcon(icon) {
    $(icon).children().toggle();
}