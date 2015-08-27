"use strict"
$(document).ready(function () {
    $("#last-update").text("Updated: " + getLastDate());
});

function getLastDate(){
    var last = new Date(document.lastModified);
    return (last.getMonth()+1).toString() + "/"+ last.getDate().toString() + "/" + last.getFullYear().toString();
}