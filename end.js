$(document).ready(function()
{
    let url = window.location.href
    let userName = url.split("?")[1].split("=")[1]
    let score = url.split("?")[2].split("=")[1] 
    console.log(score)
    $(".userName").text(userName);
    $(".score").text(score);
});