
var config = {
    ".chosen-select": {},
    ".chosen-select-deselect": {
        allow_single_deselect: true
    },
    ".chosen-select-no-single": {
        disable_search_threshold: 10
    },
    ".chosen-select-no-results": {
        no_results_text: "Oops, nothing found!"
    },
    ".chosen-select-width": {
        width: "95%"
    }
};

// Capturing the form inputs
$("#submit").on("click", (event) => {
    event.preventDefault();

    // Creating an object for the user's data input
    var userData = {
        name: $("#name").val(),
        photo: $("#photo").val(),
        scores: [
            
            $("#q1").val(),
            $("#q2").val(),
            $("#q3").val(),
            $("#q4").val(),
            $("#q5").val(),
            $("#q6").val(),
            $("#q7").val(),
            $("#q8").val(),
            $("#q9").val(),
            $("#q10").val()
        ]
    };

        // returing the .map(math.abs( a[ 00i ] - b[ i ] ))

        // AJAX post the data to the friends API.
        $.post("/api/friends", userData, (data) => {

            // Grabbing the result from the AJAX post so that the "best" matches name and photo are displayed
            $("#match-name").text(data.name);
            $("#match-img").attr("src", data.photo);

            // Showing the modal with best match
            $("#results-modal").modal("toggle");
        } );

});