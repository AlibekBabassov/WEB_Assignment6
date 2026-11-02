$(document).ready(function () {
    console.log("jQuery is ready!");

    $("h1").css("color", "#0055ffff");

    $(".intro").css("font-size", "18px");

    $("#changeHeadline").click(function () {
        $("#headline").text("Aspiring Front-End Developer");
    });

    $("#highlightIntro").click(function () {
        $(".intro").html("<b>I am learning jQuery</b> and building my first interactive portfolio!");
        $(".intro").css({
            "color": "#d6175aff",
            "font-style": "italic"
        });
    });

    $("#darkTheme").click(function () {
        $("body").css({
            "background-color": "#191919ff",
            "color": "#f5f5f5ff"
        });
    });

    $("#lightTheme").click(function () {
        $("body").css({
            "background-color": "#ffffff",
            "color": "#171717ff"
        });
    });

    $("#hideBtn").click(function () {
        $("#status, #funFacts").hide();
    });

    $("#showBtn").click(function () {
        $("#status, #funFacts").show();
    });

    $("#toggleBtn").click(function () {
        $("#status, #funFacts").toggle();
    });

    $("#fadeOutBtn").click(function () {
        $(".images img").fadeOut();
    });

    $("#fadeInBtn").click(function () {
        $(".images img").fadeIn();
    });

    $("#fadeToggleBtn").click(function () {
        $(".images img").fadeToggle();
    });

    $(".panelHeading").click(function () {
        $(this).next(".panel").slideToggle();
    });

    $("#openAll").click(function () {
        $(".panel").slideDown();
    });

    $("#closeAll").click(function () {
        $(".panel").slideUp();
    });

    $("#addSkill").click(function () {
        var skill = $("#skillInput").val().trim();
        if (skill === "") {
            $("#skillMessage").text("Please enter a skill!");
        } else {
            $("#skillList").append($("<li>").text(skill));
            $("#skillMessage").text("");
            $("#skillInput").val("");
        }
    });

    $("#prependSkill").click(function () {
        var skill = $("#skillInput").val().trim();
        if (skill === "") {
            $("#skillMessage").text("Please enter a skill!");
        } else {
            $("#skillList").prepend($("<li>").text(skill));
            $("#skillMessage").text("");
            $("#skillInput").val("");
        }
    });

    $("#removeSkill").click(function () {
        $("#skillList li:last-child").remove();
    });

    $("#changeLink").click(function () {
        $("#socialLink").attr("href", "https://www.linkedin.com/in/әлібек-бабасов-5b56b6447/");
        $("#socialLink").text("My LinkedIn");
    });

    $("#nameInput").on("input", function () {
        $("#nameOutput").text($(this).val());
    });

    $("#emailInput").on("input", function () {
        $("#emailOutput").text($(this).val());
    });

    var skillsShown = false;

    $("#animateSkills").click(function () {
        if (skillsShown === false) {
            $(".bar").each(function () {
                $(this).animate({ width: $(this).data("level") }, 1000);
            });
            skillsShown = true;
        } else {
            $(".bar").animate({ width: "0%" }, 1000);
            skillsShown = false;
        }
    });
});