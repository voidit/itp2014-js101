// comment
var myNubmer = 3;
var myString = "Hello!";
var myBoolean = true;
var myObject = {
    numberOfFolds: 0,
    title: "Origami",
    myColor: function() {
        return "rgb(255,0,0)";
    }
};
var myArray = new Array(5);
var myUnpredictableArray = [];
var myPredictableArray = ["dog", "cat", "dinosaur"];

function myFunction(a, b) {
    return a + b;
};

console.log(myPredictableArray[0]);

/*
Place breakpoint to line 25 and follow the way JS creates new paragraphs in the DOM
*/
for (var i = 0, j = 28; i < 10, j > 0; i += 2, j--) {
    document.write("<p>" + myFunction(i, j) + "</p>");
}
for (var p in myObject) {
    console.log(myObject[p]);
}
document.write(myFunction(2, 3));