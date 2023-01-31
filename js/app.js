$("h1").shuffleString({
    color : "red",
    complete : function() {
        console.log("string is shuffled");
    }
});
$("p").shuffleString();