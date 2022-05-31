$(document).ready(function(){
    $("#submit").click(function(){
        if(($("#userName").val().length != 0) && ($("#gameId").val().length != 0))
        {
            let value = $("#userName").val();
            let value2 = $("#gameId").val();
            window.location.href = "./game.html?userName="+value+"?GameId="+value2+"";
        }
    });
})