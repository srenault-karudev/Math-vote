function sortNumber(a, b) {
    return a - b;
}

$(document).ready(function () {


    $.each(votes, function (i, obj) {
        $('#login-select').append('<option>' + i + '</option>');
    });

    $("#login-select").change(function () {
        var loginSelected = $('#login-select option:selected').text();
        console.log(loginSelected);
    });


    $("#matiere-select").change(function () {

        var matiereSelected = $('#matiere-select option:selected').text();
        var loginGeneral = [];
        var taille = 143
        var vote_user = [];
        var tableauUser = [];
        var tableauVotes = [];
        //var tableauTaille = [];
        var tableauGraph = [];
        var count = 0;
        var divChart = "";

        console.log('matiere : ' + matiereSelected);


        $('.titre').empty();
        $('.titre').append('Vote reçus en ' + matiereSelected + ' par étudiant');


        if (matiereSelected == "--Matiere--") {
            $("#myChartAng").hide();
            $("#myChartAsr").hide();
            $("#myChartArt").hide();
            $("#myChartApl").hide();
            $("#myChartEc").hide();
            $("#myChartEgod").hide();
            $("#myChartMath").hide();
            $("#myChartSgbd").hide();
            $("#myChartSport").hide();
            $("#myChartAcda").hide();
            $('.titre').empty();
            $('.score').empty();

        }
        $.each(votes, function (user, x) {

             var countloginPerso = 0;

            if (user == "bohl") {
         console.log(x.ACDA);

                $.each(x.ACDA, function (i, j) {

                });
            }



            // $.each(votes, function (i, obj) {
            //
            // 	if (matiereSelected == 'ACDA') {
            //
            // 		loginGeneral.push(obj.ACDA.toString());
            // 		$.each(obj.ACDA, function (z, el) {
            // 			if (el == user) countloginPerso = countloginPerso + 1;
            // 		})
            //
            // 		divChart = "myChartAcda";
            //
            // 	}
            // });


            tableauGraph.push(new Array(countloginPerso, user));


            //vote_user.push(user, countloginPerso, taille);
            //console.log("user: "+ user + " | " + "votes: " + countloginPerso);

        });
        tableauGraph.sort();
        console.log(tableauGraph);

        for (var i = 0; i < tableauGraph.length; i++) {
            if (tableauGraph[i][0] == 0) {

            } else if (tableauGraph[i][0] > 9) {

            } else {
                tableauUser.push(tableauGraph[i][1]);
                tableauVotes.push(tableauGraph[i][0]);
            }
        }
        for (var j = 0; j < tableauGraph.length; j++) {
            if (tableauGraph[j][0] < 10) {

            } else {
                tableauUser.push(tableauGraph[j][1]);
                tableauVotes.push(tableauGraph[j][0]);
            }
        }
        tableauUser.reverse();
        tableauVotes.reverse();


        var ctx = document.getElementById(divChart);
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: tableauUser,
                datasets: [{
                    label: 'nombre de votes',
                    data: tableauVotes,
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });


        $('.score').empty();
        $('.score').append('Score : 400');

    });


});


