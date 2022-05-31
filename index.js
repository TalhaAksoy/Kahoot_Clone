$(document).ready(function(){
    $("#submit").click(function(){
        let value = $("#userName").val();
        let value2 = $("#gameId").val();
        window.location.href = "./game.html";
    });
})