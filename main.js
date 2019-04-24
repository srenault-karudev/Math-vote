$(document).ready(function () {

    // on masque les div matieres et login voté

    $("#Matiere").hide();
    $(".div-login").hide();

    // on affiche les differents login dans le select
    $.each(logins, function (i, obj) {
        $('#login-select').append('<option>' + i + '</option>');
    });

// au changement de la valeur du select login on fait des choses
    $("#login-select").change(function () {
        var loginSelected = $('#login-select option:selected').text();

        // on affiche div matiere
        $("#Matiere").show();

        console.log('loginSelected: ' + loginSelected);

        // on verifie le clic des bouttons radios

        $("#acda,#ang,#asr,#art,#EC,#EGOD,#MATH,#SGBD,#SPORT,#apl").click(function () {
            //on affiche la div login voté

            $(".div-login").show();



            var matiere = "";
            var count = 0; // compteur du nombre de login vote
            var acda = $('#acda').prop('checked'); // true si checked
            var ang = $('#ang').prop('checked');
            var asr = $('#asr').prop('checked');
            var art = $('#art').prop('checked');
            var apl = $('#apl').prop('checked');
            var EC = $('#EC').prop('checked');
            var EGOD = $('#EGOD').prop('checked');
            var MATH = $('#MATH').prop('checked');
            var SGBD = $('#SGBD').prop('checked');
            var SPORT = $('#SPORT').prop('checked');



            if (acda == true) {
                matiere = 'ACDA';
                console.log(matiere);
                console.log('1 :' + acda);
            } else if (ang == true) {


                matiere = 'ANG'
                console.log(matiere);
                console.log('2 :' + ang);
            } else if (asr == true) {


                matiere = 'ASR';
                console.log(matiere);
                console.log('3 :' + asr);
            } else if (art == true) {


                matiere = 'ART';
                console.log(matiere);
                console.log('4 :' + art);
            } else if (EC == true) {


                matiere = 'EC';
                console.log(matiere);
                console.log('5 :' + EC);
            } else if (EGOD == true) {


                matiere = 'EGOD';
                console.log(matiere);
                console.log('6 :' + EGOD);
            } else if (MATH == true) {


                matiere = 'MAT';
                console.log(matiere);
                console.log('7 :' + MATH);
            } else if (SGBD == true) {


                matiere = 'SGBD';
                console.log(matiere);
                console.log('8 :' + SGBD);
            } else if (SPORT == true) {


                matiere = 'SPORT';
                console.log(matiere);
                console.log('9:' + SPORT);

            } else if (apl == true) {

                matiere = 'APL';
                console.log(matiere);
                console.log('10 :' + apl);

            } else if (acda == false && ang == false && asr == false && art == false && EC == false && EGOD == false && MATH == false && SGBD == false && SPORT == false && apl == false) {
                matiere = '';
                console.log(matiere);
                console.log('autre:' + matiere);
            }

            // pour chaque login  choisis dans le select on va afficher les gens qui ont vote pour ce login par matiere
            $.each(votes, function (i, obj) {



                //console.log(matiere);
                // if (obj.EGOD == "vaurie") {
                //     console.log( "gfg:"+i)
                // }

                if (matiere == 'ACDA') {

                    if (obj.ACDA == loginSelected) {

                        $('.loginAng').hide();
                        $('.loginAsr').hide();
                        $('.loginArt').hide();
                        $('.loginEc').hide();
                        $('.loginEgod').hide();
                        $('.loginMath').hide();
                        $('.loginSgbd').hide();
                        $('.loginSport').hide();
                        $('.loginApl').hide();

                        count = count + 1;

                        $('.loginAcda').append(i + '<br>'); // on affiche l'un apres l'autrs les gens qui ont voté dans le html
                        $('.loginAcda').show();

                    }
                } else if (matiere == 'ANG') {

                    if (obj.ANG == loginSelected) {

                        $('.loginAcda').hide();
                        $('.loginAsr').hide();
                        $('.loginArt').hide();
                        $('.loginEc').hide();
                        $('.loginEgod').hide();
                        $('.loginMath').hide();
                        $('.loginSgbd').hide();
                        $('.loginSport').hide();
                        $('.loginApl').hide();

                        count = count + 1;

                        $('.loginAng').append(i + '<br>');
                        $('.loginAng').show();

                    }
                } else if (matiere == 'ASR') {

                    if (obj.ASR == loginSelected) {

                        $('.loginAcda').hide();
                        $('.loginAng').hide();
                        $('.loginArt').hide();
                        $('.loginEc').hide();
                        $('.loginEgod').hide();
                        $('.loginMath').hide();
                        $('.loginSgbd').hide();
                        $('.loginSport').hide();
                        $('.loginApl').hide();

                        count = count + 1;
                        $('.loginAsr').append(i + '<br>');
                        $('.loginAsr').show();
                    }
                } else if (matiere == 'ART') {

                    if (obj.ART == loginSelected) {

                        $('.loginAcda').hide();
                        $('.loginAng').hide();
                        $('.loginAsr').hide();
                        $('.loginEc').hide();
                        $('.loginEgod').hide();
                        $('.loginMath').hide();
                        $('.loginSgbd').hide();
                        $('.loginSport').hide();
                        $('.loginApl').hide();

                        count = count + 1;
                        $('.loginArt').append(i + '<br>');
                        $('.loginArt').show();
                    }
                } else if (matiere == 'EC') {

                    if (obj.EC == loginSelected) {

                        $('.loginAcda').hide();
                        $('.loginAng').hide();
                        $('.loginAsr').hide();
                        $('.loginArt').hide();
                        $('.loginEgod').hide();
                        $('.loginMath').hide();
                        $('.loginSgbd').hide();
                        $('.loginSport').hide();
                        $('.loginApl').hide();

                        count = count + 1;
                        $('.loginEc').append(i + '<br>');
                        $('.loginEc').show();

                    }
                } else if (matiere == 'EGOD') {

                    if (obj.EGOD == loginSelected) {

                        $('.loginAcda').hide();
                        $('.loginAng').hide();
                        $('.loginAsr').hide();
                        $('.loginArt').hide();
                        $('.loginEc').hide();
                        $('.loginMath').hide();
                        $('.loginSgbd').hide();
                        $('.loginSport').hide();
                        $('.loginApl').hide();

                        count = count + 1;
                        $('.loginEgod').append(i + '<br>');
                        $('.loginEgod').show();
                    }
                } else if (matiere == 'MAT') {

                    if (obj.MAT == loginSelected) {

                        $('.loginAcda').hide();
                        $('.loginAng').hide();
                        $('.loginAsr').hide();
                        $('.loginArt').hide();
                        $('.loginEc').hide();
                        $('.loginEgod').hide();
                        $('.loginSgbd').hide();
                        $('.loginSport').hide();
                        $('.loginApl').hide();

                        count = count + 1;
                        $('.loginMath').append(i + '<br>');
                        $('.loginMath').show();

                    }
                } else if (matiere == 'SGBD') {

                    if (obj.SGBD == loginSelected) {

                        $('.loginAcda').hide();
                        $('.loginAng').hide();
                        $('.loginAsr').hide();
                        $('.loginArt').hide();
                        $('.loginEc').hide();
                        $('.loginEgod').hide();
                        $('.loginMath').hide();
                        $('.loginSport').hide();
                        $('.loginApl').hide();

                        count = count + 1;
                        $('.loginSgbd').append(i + '<br>');
                        $('.loginSgbd').show();

                    }
                } else if (matiere == 'SPORT') {

                    if (obj.SPORT == loginSelected) {

                        $('.loginAcda').hide();
                        $('.loginAng').hide();
                        $('.loginAsr').hide();
                        $('.loginArt').hide();
                        $('.loginEc').hide();
                        $('.loginEgod').hide();
                        $('.loginMath').hide();
                        $('.loginSgbd').hide();
                        $('.loginApl').hide();

                        count = count + 1;
                        $('.loginSport').append(i + '<br>');
                        $('.loginSport').show();


                    }


                    } else if (matiere == 'APL') {

                    if (obj.APL == loginSelected) {

                        $('.loginAcda').hide();
                        $('.loginAng').hide();
                        $('.loginAsr').hide();
                        $('.loginArt').hide();
                        $('.loginEc').hide();
                        $('.loginEgod').hide();
                        $('.loginMath').hide();
                        $('.loginSgbd').hide();
                        $('.loginSport').hide();


                        count = count + 1;
                        $('.loginApl').append(i + '<br>');
                        $('.loginSport').show();

                    }
                }

                else if (matiere == '') {

                        $('.loginAcda').hide();
                        $('.loginAng').hide();
                        $('.loginAsr').hide();
                        $('.loginArt').hide();
                        $('.loginEc').hide();
                        $('.loginEgod').hide();
                        $('.loginMath').hide();
                        $('.loginSgbd').hide();
                        $('.loginSport').hide();
                        $('.loginApl').hide();

                    }

                });

            console.log('count:' + count);

        });


    });


});



