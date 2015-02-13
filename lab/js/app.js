/*
 *
 *
 * A SIMPLE SPIN THE BOTTLE APPLICATION PROTOTYPE BY IAN INNOCENT MBAE {ianmin2}
 * Started February 13th 2015
 *
 *
 */



actions = [];
participants = [];

function cleanArray(actualArray) {

    var tempArray = new Array();

    for (var i = 0; i < actualArray.length; i++) {

        if (actualArray[i] && actualArray[i].trim() != "") {

            tempArray.push(actualArray[i]);

        }

    }

    return tempArray;

}


//THE GAME PARTICIPANTS HANDLER
function getParticipants() {

    var player_names = $("#participants").val();
    participants = cleanArray( player_names.split(',') );


    if (participants.length < 2) {

        participants = false;

        $('responses').html($("<error>"));

        gameText("error", "ENTER AT LEAST TWO PARTICIPANT NAMES IN ORDER TO CONTINUE", 0, 70);

        setTimeout(function () {

            $(function () {
                $("error").fadeOut(1000);
            });

        }, 6000);

    } else {

        $('responses').html($("<error>"));

        $("error").show();

        gameText("error", " ... Loading Game ... ", 0, 70);

        setTimeout(function () {
            
            localStorage.setItem("players", JSON.stringify(participants));
            
            startGame();
            
        }, 2000);

    }



}

//REAL-TIME TYPING EFFECT GENERATOR
var gameText = function (target, message, index, interval) {

    $(function () {

        if (index < message.length) {

            $(target).append(message[index++]);
            setTimeout(function () {
                gameText(target, message, index, interval);
            }, interval);

        }


    });

}



//THE ACTUAL GAME HANDLER
function startGame() {

    window.location = "spin.html";
    
    number_of_players = participants.length;

    degrees_per_player = Math.floor(360 / number_of_players);

    console.info("The degrees allocated per player are: " + degrees_per_player);





}