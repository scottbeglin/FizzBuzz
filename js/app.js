$(document).ready(function () {

    //function to declare numbers
    function check(counter) {
        var msg = "<li>" + counter + "</li>";

        //if number is a multiple of 3 print Fizz
        if (counter % 3 == 0) {
            msg = "<li>Fizz</li>";
            console.log("Fizz");
        }

        //if number is a multiple of 5 print Buzz
        if (counter % 5 == 0) {
            msg = "<li>Buzz</li>";
            console.log("Buzz");
        }

        //if number is a multiple of 3 and 5 print FizzBuzz
        if (counter % 15 == 0) {
            msg = "<li>FizzBuzz</li>";
            console.log("FizzBuzz");
        }

        //print remaining numbers
        console.log(counter);
        return msg;

    }
    //list numbers from 1-100 with FizzBuzz results
    for (var counter = 1; counter <= 100; counter++) {
        $('#getAnswers').append(check(counter));
    }

});
