$(document).ready(function () {


    $.each(votes, function (i, obj) {
        $('#login-select').append('<option>' + i + '</option>');
    });

    var loginSelected;

    $("#login-select").change(function () {

        $('.div-vote').empty();

        loginSelected = $('#login-select option:selected').text();
        console.log(loginSelected);



        if (loginSelected == "--Login--") {
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
        $('#matiere-select').trigger("change");
    });



    $("#matiere-select").change(function () {

        $('.div-vote').empty();

        $('.div-vote').append('<h3>' + loginSelected + ' a voté pour : ' + '</h3>');
        var matiereSelected = $('#matiere-select option:selected').text();
        var loginGeneral = [];
        var taille = 143
        var vote_user = [];
        var tableauP = [];
        var tableauUser = [];
        var tableauVotes = [];
        var tableauVotesBis = [];
        var tableauVotesSelected = [];
        var tableauGraph = [];
        var tableauSelected = [];
        var count = 0;
        var countTotal = 0;
        var divChart = "";
        var m = 0;

        console.log('matiere : ' + matiereSelected);


        $('.titre').empty();
        $('.titre').append('Votes en ' + matiereSelected);


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
            $.each(votes, function (i, obj) {


                if (matiereSelected == 'ACDA') {


                    loginGeneral.push(obj.ACDA.toString());
                    $.each(obj.ACDA, function (z, el) {

                        if (i == loginSelected) {
                            //console.log("User: "+ i + " n'a pas voté pour " + user );
                            tableauSelected.push(new Array(0, user));
                        }
                        if (el == user) {
                            if (i == loginSelected) {

                                console.log("user : " + user);
                                if (user) {
                                    $('.div-vote').append('<li>' + user + '</li>');
                                }
                                console.log("User: " + i + " a voté pour " + user);
                                m = m + 1;
                                tableauSelected.push(new Array(1, user));
                            }
                            countloginPerso = countloginPerso + 1;
                        }
                    })

                    divChart = "myChartAcda";
                    $("#myChartAng").hide();
                    $("#myChartAsr").hide();
                    $("#myChartArt").hide();
                    $("#myChartApl").hide();
                    $("#myChartEc").hide();
                    $("#myChartEgod").hide();
                    $("#myChartMath").hide();
                    $("#myChartSgbd").hide();
                    $("#myChartSport").hide();
                    $("#myChartAcda").show();

                } else if (matiereSelected == 'ANG') {
                    loginGeneral.push(obj.ANG.toString());
                    $.each(obj.ANG, function (z, el) {
                        if (i == loginSelected) {
                            //console.log("User: "+ i + " n'a pas voté pour " + user );
                            tableauSelected.push(new Array(0, user));
                        }
                        if (el == user) {
                            if (i == loginSelected) {

                                console.log("user : " + user);
                                if (user) {

                                    $('.div-vote').append('<li>' + user + '</li>');

                                }
                                console.log("User: " + i + " a voté pour " + user);
                                m = m + 1;
                                tableauSelected.push(new Array(1, user));
                            }
                            countloginPerso = countloginPerso + 1;
                        }
                    })
                    divChart = "myChartAng";

                    $("#myChartAcda").hide();
                    $("#myChartAsr").hide();
                    $("#myChartArt").hide();
                    $("#myChartApl").hide();
                    $("#myChartEc").hide();
                    $("#myChartEgod").hide();
                    $("#myChartMath").hide();
                    $("#myChartSgbd").hide();
                    $("#myChartSport").hide();
                    $("#myChartAng").show();

                } else if (matiereSelected == 'ASR') {
                    loginGeneral.push(obj.ASR.toString());
                    $.each(obj.ASR, function (z, el) {
                        if (i == loginSelected) {
                            //console.log("User: "+ i + " n'a pas voté pour " + user );
                            tableauSelected.push(new Array(0, user));
                        }
                        if (el == user) {
                            if (i == loginSelected) {

                                console.log("user : " + user);
                                if (user) {

                                    $('.div-vote').append('<li>' + user + '</li>');

                                }
                                console.log("User: " + i + " a voté pour " + user);
                                m = m + 1;
                                tableauSelected.push(new Array(1, user));
                            }
                            countloginPerso = countloginPerso + 1;
                        }
                    })
                    divChart = "myChartAsr";
                    $("#myChartAcda").hide();
                    $("#myChartAng").hide();
                    $("#myChartArt").hide();
                    $("#myChartApl").hide();
                    $("#myChartEc").hide();
                    $("#myChartEgod").hide();
                    $("#myChartMath").hide();
                    $("#myChartSgbd").hide();
                    $("#myChartSport").hide();
                    $("#myChartAsr").show();

                } else if (matiereSelected == 'ART') {
                    loginGeneral.push(obj.ART.toString()); // on push les prenoms dans le tableau en fonction da la matiere
                    $.each(obj.ART, function (z, el) {
                        if (i == loginSelected) {
                            //console.log("User: "+ i + " n'a pas voté pour " + user );
                            tableauSelected.push(new Array(0, user));
                        }
                        if (el == user) {
                            if (i == loginSelected) {

                                console.log("user : " + user);
                                if (user) {

                                    $('.div-vote').append('<li>' + user + '</li>');

                                }
                                console.log("User: " + i + " a voté pour " + user);
                                m = m + 1;
                                tableauSelected.push(new Array(1, user));
                            }
                            countloginPerso = countloginPerso + 1;
                        }
                    })
                    divChart = "myChartArt";
                    $("#myChartAcda").hide();
                    $("#myChartAng").hide();
                    $("#myChartAsr").hide();
                    $("#myChartApl").hide();
                    $("#myChartEc").hide();
                    $("#myChartEgod").hide();
                    $("#myChartMath").hide();
                    $("#myChartSgbd").hide();
                    $("#myChartSport").hide();
                    $("#myChartArt").show();
                } else if (matiereSelected == 'APL') {
                    loginGeneral.push(obj.APL.toString()); // on push les prenoms dans le tableau en fonction da la matiere
                    $.each(obj.APL, function (z, el) {
                        if (i == loginSelected) {
                            //console.log("User: "+ i + " n'a pas voté pour " + user );
                            tableauSelected.push(new Array(0, user));
                        }
                        if (el == user) {
                            if (i == loginSelected) {

                                console.log("user : " + user);
                                if (user) {

                                    $('.div-vote').append('<li>' + user + '</li>');

                                }
                                console.log("User: " + i + " a voté pour " + user);
                                m = m + 1;
                                tableauSelected.push(new Array(1, user));
                            }
                            countloginPerso = countloginPerso + 1;
                        }
                    })

                    divChart = "myChartApl";
                    $("#myChartAcda").hide();
                    $("#myChartAng").hide();
                    $("#myChartAsr").hide();
                    $("#myChartArt").hide();
                    $("#myChartEc").hide();
                    $("#myChartEgod").hide();
                    $("#myChartMath").hide();
                    $("#myChartSgbd").hide();
                    $("#myChartSport").hide();
                    $("#myChartApl").show();

                } else if (matiereSelected == 'EC') {
                    loginGeneral.push(obj.EC.toString()); // on push les prenoms dans le tableau en fonction da la matiere
                    $.each(obj.EC, function (z, el) {
                        if (i == loginSelected) {
                            //console.log("User: "+ i + " n'a pas voté pour " + user );
                            tableauSelected.push(new Array(0, user));
                        }
                        if (el == user) {
                            if (i == loginSelected) {

                                console.log("user : " + user);
                                if (user) {

                                    $('.div-vote').append('<li>' + user + '</li>');

                                }
                                console.log("User: " + i + " a voté pour " + user);
                                m = m + 1;
                                tableauSelected.push(new Array(1, user));
                            }
                            countloginPerso = countloginPerso + 1;
                        }
                    })

                    divChart = "myChartEc";
                    $("#myChartAcda").hide();
                    $("#myChartAng").hide();
                    $("#myChartAsr").hide();
                    $("#myChartArt").hide();
                    $("#myChartApl").hide();
                    $("#myChartEgod").hide();
                    $("#myChartMath").hide();
                    $("#myChartSgbd").hide();
                    $("#myChartSport").hide();
                    $("#myChartEc").show();

                } else if (matiereSelected == 'EGOD') {
                    loginGeneral.push(obj.EGOD.toString()); // on push les prenoms dans le tableau en fonction da la matiere
                    $.each(obj.EGOD, function (z, el) {
                        if (i == loginSelected) {
                            //console.log("User: "+ i + " n'a pas voté pour " + user );
                            tableauSelected.push(new Array(0, user));
                        }
                        if (el == user) {
                            if (i == loginSelected) {

                                console.log("user : " + user);
                                if (user) {

                                    $('.div-vote').append('<li>' + user + '</li>');

                                }
                                console.log("User: " + i + " a voté pour " + user);
                                m = m + 1;
                                tableauSelected.push(new Array(1, user));
                            }
                            countloginPerso = countloginPerso + 1;
                        }
                    })

                    divChart = "myChartEgod";
                    $("#myChartAcda").hide();
                    $("#myChartAng").hide();
                    $("#myChartAsr").hide();
                    $("#myChartArt").hide();
                    $("#myChartApl").hide();
                    $("#myChartEc").hide();
                    $("#myChartMath").hide();
                    $("#myChartSgbd").hide();
                    $("#myChartSport").hide();
                    $("#myChartEgod").show();

                } else if (matiereSelected == 'MAT') {
                    loginGeneral.push(obj.MAT.toString()); // on push les prenoms dans le tableau en fonction da la matiere
                    $.each(obj.MAT, function (z, el) {
                        if (i == loginSelected) {
                            //console.log("User: "+ i + " n'a pas voté pour " + user );
                            tableauSelected.push(new Array(0, user));
                        }
                        if (el == user) {
                            if (i == loginSelected) {

                                console.log("user : " + user);
                                if (user) {

                                    $('.div-vote').append('<li>' + user + '</li>');

                                }
                                console.log("User: " + i + " a voté pour " + user);
                                m = m + 1;
                                tableauSelected.push(new Array(1, user));
                            }
                            countloginPerso = countloginPerso + 1;
                        }
                    })

                    divChart = "myChartMath";
                    $("#myChartAcda").hide();
                    $("#myChartAng").hide();
                    $("#myChartAsr").hide();
                    $("#myChartArt").hide();
                    $("#myChartApl").hide();
                    $("#myChartEc").hide();
                    $("#myChartEgod").hide();
                    $("#myChartSgbd").hide();
                    $("#myChartSport").hide();
                    $("#myChartMath").show();

                } else if (matiereSelected == 'SGBD') {
                    loginGeneral.push(obj.SGBD.toString()); // on push les prenoms dans le tableau en fonction da la matiere
                    $.each(obj.SGBD, function (z, el) {
                        if (i == loginSelected) {
                            //console.log("User: "+ i + " n'a pas voté pour " + user );
                            tableauSelected.push(new Array(0, user));
                        }
                        if (el == user) {
                            if (i == loginSelected) {

                                console.log("user : " + user);
                                if (user) {

                                    $('.div-vote').append('<li>' + user + '</li>');

                                }
                                console.log("User: " + i + " a voté pour " + user);
                                m = m + 1;
                                tableauSelected.push(new Array(1, user));
                            }
                            countloginPerso = countloginPerso + 1;
                        }
                    })

                    divChart = "myChartSgbd";
                    $("#myChartAcda").hide();
                    $("#myChartAng").hide();
                    $("#myChartAsr").hide();
                    $("#myChartArt").hide();
                    $("#myChartApl").hide();
                    $("#myChartEc").hide();
                    $("#myChartEgod").hide();
                    $("#myChartMath").hide();
                    $("#myChartSport").hide();
                    $("#myChartSgbd").show();

                } else if (matiereSelected == 'SPORT') {
                    loginGeneral.push(obj.SPORT.toString()); // on push les prenoms dans le tableau en fonction da la matiere
                    $.each(obj.SPORT, function (z, el) {
                        if (i == loginSelected) {
                            //console.log("User: "+ i + " n'a pas voté pour " + user );
                            tableauSelected.push(new Array(0, user));
                        }
                        if (el == user) {
                            if (i == loginSelected) {

                                console.log("user : " + user);
                                if (user) {

                                    $('.div-vote').append('<li>' + user + '</li>');

                                }
                                console.log("User: " + i + " a voté pour " + user);
                                m = m + 1;
                                tableauSelected.push(new Array(1, user));
                            }
                            countloginPerso = countloginPerso + 1;
                        }
                    })

                    divChart = "myChartSport";
                    $("#myChartAcda").hide();
                    $("#myChartAng").hide();
                    $("#myChartAsr").hide();
                    $("#myChartArt").hide();
                    $("#myChartApl").hide();
                    $("#myChartEc").hide();
                    $("#myChartEgod").hide();
                    $("#myChartMath").hide();
                    $("#myChartSgbd").hide();
                    $("#myChartSport").show();
                }
            });

            countTotal = countTotal + countloginPerso;
            tableauGraph.push(new Array(countloginPerso, user));
            // tableauGraph2.push(new Array(countloginPerso, user));

        });

        console.log("" + countTotal + " vote en " + matiereSelected);

        //console.log(tableauSelected);
        //tableauSelected.sort();
        tableauGraph.sort();


        //============================================================
        //FORMULE MED
        if ( matiereSelected != "--Matiere--") {
	        var lnpi=0;
	        var score=0;
	        var x=0;
	        var y=0;
	        var z=0;

	        for (var i = 0; i < tableauGraph.length; i++) {
	        	x=tableauGraph[i][0];
	        	//console.log("x="+x);
	        	if(countTotal!=0) {
	        		y=x/countTotal;
		        	//console.log("y="+y);
		        	if(y>0) {
			        	z=Math.log(y);
			        	//console.log("z="+z);
						var lnpi=lnpi+z;
			        	//console.log("lnpi="+lnpi);
			        }
	        	}
				//console.log(""+lnpi+"+"+"ln("+tableauGraph[i][0]+"/"+countTotal);
				//console.log("lnpi="+lnpi);
	        }
			//if (m!=0) {
				var logm = Math.log(m);
				console.log("m="+m);
				console.log("logm="+logm);
				console.log("lnpi="+lnpi);
				score=Math.round(logm-(1/m)*lnpi);
				console.log("score="+score);
			//}
	    }
        //============================================================


        for (var i = 0; i < tableauSelected.length; i++) {
            tableauVotesSelected.push(tableauSelected[i][0]);
        }

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

        tableauVotesSelected.reverse();


        var ctx = document.getElementById(divChart);
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: tableauUser,
                datasets: [{
                    label: 'Votes généraux',
                    data: tableauVotes,
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderWidth: 1
                },/* {
                    label: 'Vote de ' + loginSelected,
                    data: tableauVotesSelected,
                    backgroundColor: 'rgb(0, 99, 132)',
                    borderWidth: 1
                }*/]
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
		if (isNaN(score)) {
			$('.score').append('Aucun vote');
		}
		else {
			$('.score').append('Score : '+score);
		}

        $('.div-vote').show();
    });


});


