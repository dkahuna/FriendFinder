var friends = require("../data/friends.js");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {

        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        };

        console.log(req.body);

        // Here we take the result of the user's survey POST and parse it.
        var userData = req.body;
        var userScores = userData.scores;


        // This variable will caculate the difference between the user's scores and the 
        // scores of each user in the database
        var totalDifference = 0;

        // Here we loop through all of the friends possible in the database
        for (var i = 0; i < friends.length; i++) {
            
            console.log(friends[i]);
            totalDifference = 0;

            // We then loop through all the scores of each friend
            for (var j = 0; j < friends[i].scores[j]; j++) {

                // We calculate the difference between the scores and sum them into the totalDifference
                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

                // If the sum of the difference is less than the differences of the current "best match"
                if (totalDifference <= bestMatch.friendDifference) {

                    // Reset the bestMatch to be the new friend.
                    bestMatch.name = friends[i].name;
                    bestMatch.photo = friends[i].photo;
                    bestMatch.friendDifference = totalDifference;
                }
            }
        }

        // Finally save the user's data to the database (this has to happen AFTER the check. OTHERWISE,
        // the database will always return that the user is the user's best friend).
        friends.push(userData);

        //Return a JSON with the user's bestMatch. This will be used by the HTML in the next page.
        res.json(bestMatch);
    });
    
}