"use strict"
$(document).ready(function () {
    console.log("HI");
    $("#lastUpdate").text("Updated: " + getLastDate());
});

function getLastDate(){
    var last = new Date(document.lastModified);
    return (last.getMonth()+1).toString() + "/"+ last.getDate().toString() + "/" + last.getFullYear().toString();
}