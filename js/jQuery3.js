$(document).ready(function () {
    $("#modify").click(function () {
        $("#myList li:eq(2)").text("Jagadeesh");
        $("#myList li:eq(0)").text("Sai");
    });

    $("#clone").click(function () {
        $("#container p").first().clone().appendTo("#container");
    });

    $("#findParent").click(function () {
        $("#child").parent().css("border", "2px solid LightSlateGray");
    });

    $("#findChildren").click(function () {
        $("#parentDiv").children().css("color", "Magenta");
    });

    $("#addItem").click(function () {
        $("#dynamicList").append("<li>Added Item</li>");
    });

    $("#removeItem").click(function () {
        $("#dynamicList li:last").remove();
    });

    $("#highlight").click(function () {
        $("#myTable tr:odd").css("background-color", "LightSkyBlue");
    });
});