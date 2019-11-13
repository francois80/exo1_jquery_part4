$(function(){
  var nbGames = 0;
  var computerScore = 0;
  var playerScore = 0;
  var draw = 0;
  $('button').click(function(){
    var playerChoice = $('select option:selected').val();
    var imgPlayer = $('<img />');
    var imgComputer = $('<img />');
    imgPlayer.attr('src', `assets/img/${playerChoice}.png`);
    $('#player>img').remove();
    $('#player-span').after(imgPlayer);
    var computerChoice = Math.floor(Math.random() * 3);
    imgComputer.attr('src', `assets/img/${computerChoice}.png`);
    $('#computer>img').remove();
    $('#computer-span').before(imgComputer);
    console.log(computerChoice);
    ++nbGames;
    if (computerChoice == playerChoice) {
      console.log('Egalité');
    } else if ((computerChoice == 0 && playerChoice == 2) || (computerChoice == 1 && playerChoice == 0) || (computerChoice == 2 && playerChoice == 1)){
      ++computerScore;
      console.log('Vous avez perdu');
    } else {
      ++playerScore;
      console.log('Vous avez gagné');
    }
    let victoryPlayer = ((playerScore / nbGames) * 100).toFixed(2);
    let victoryComputer = ((computerScore / nbGames) * 100).toFixed(2);
    draw = (100 - victoryPlayer - victoryComputer).toFixed(2);
    console.log(victoryPlayer);
    console.log(victoryComputer);
    console.log(draw);
  });
});
// $(function(){
//   var victoires = 0; //nombre de victoires
//   var defaites = 0; //nombre de défaites
//   var egalites = 0; //nombre d'égalités
//   var nbcoup = 0; //nombre de parties jouées
//
//   $('#shifumi').click(function(){
//     // réccupération du choix de l'utilisateur
//     var choix = $('#listChifoumi option:selected').val();
//     let pourcentage;
//     if(choix == ""){
//       alert('Veuillez sélectionner une option');
//     }
//     else{
//       //réccupération dans computerChoice du choix aléatoire de la machine
//       var computer = ["Pierre", "Feuille", "Ciseaux"];
//       for (var i = 0; i <= 2; i++) {
//   	     computerChoice = computer[(Math.floor(Math.random()*computer.length))];
//        }
//        //affichage du choix de la machine dans le champ texte shifu
//        $('#shifu').val(computerChoice);
//        //En fonction du choix fait par le //nombre de victoires client et par la machine
//        //on compare à l'aide du switch pour afficher : égalité, gagné, perdu
//        switch(computerChoice) {
//           case 'Feuille':
//             if(choix === computerChoice){
//               nbcoup +=1;
//               egalites +=1;
//               $('#egalites').val(egalites);
//               $('#result').addClass('blue');
//               $('.blue').css({'color':'blue','text-align':'center','font-size':'6em'});
//               $('#result').text('EGALITE');
//               break;
//             }
//             if(choix === 'Pierre'){
//               nbcoup +=1;
//               defaites += 1;
//               $('#defaites').val(defaites);
//               $('#result').addClass('red');
//               $('.red').css({'color':'red','text-align':'center','font-size':'6em'});
//               $('#result').text('PERDU');
//               break;
//             }
//             if(choix === 'Ciseaux'){
//               nbcoup +=1;
//               victoires += 1;
//               $('#victoires').val(victoires);
//               $('#result').addClass('green');
//               $('.green').css({'color':'green','text-align':'center','font-size':'6em'});
//               $('#result').text('GAGNE');
//               break;
//             }
//             case 'Pierre':
//               if(choix === computerChoice){
//                 nbcoup +=1;
//                 egalites +=1;
//                 $('#egalites').val(egalites);
//                 $('#result').addClass('blue');
//                 $('.blue').css({'color':'blue','text-align':'center','font-size':'6em'});
//                 $('#result').text('EGALITE');
//                 break;
//               }
//               if(choix === 'Ciseaux'){
//                 nbcoup +=1;
//                 defaites += 1;
//                 $('#defaites').val(defaites);
//                 $('#result').addClass('red');
//                 $('.red').css({'color':'red','text-align':'center','font-size':'6em'});
//                 $('#result').text('PERDU');
//                 break;
//               }
//               if(choix === 'Feuille'){
//                 nbcoup +=1;
//                 victoires += 1;
//                 $('#victoires').val(victoires);
//                 $('#result').addClass('green');
//                 $('.green').css({'color':'green','text-align':'center','font-size':'6em'});
//                 $('#result').text('GAGNE');
//                 break;
//               }
//               case 'Ciseaux':
//                 if(choix === computerChoice){
//                   nbcoup +=1;
//                   egalites +=1;
//                   $('#egalites').val(egalites);
//                   $('#result').addClass('blue');
//                   $('.blue').css({'color':'blue','text-align':'center','font-size':'6em'});
//                   $('#result').text('EGALITE');
//                   break;
//                 }
//                 if(choix === 'Feuille'){
//                   nbcoup +=1;
//                   defaites += 1;
//                   $('#defaites').val(defaites);
//                   $('#result').addClass('red');
//                   $('.red').css({'color':'red','text-align':'center','font-size':'6em'});
//                   $('#result').text('PERDU');
//                   break;
//                 }
//                 if(choix === 'Pierre'){
//                   nbcoup +=1;
//                   victoires += 1;
//                   $('#victoires').val(victoires);
//                   $('#result').addClass('green');
//                   $('.green').css({'color':'green','text-align':'center','font-size':'6em'});
//                   $('#result').text('GAGNE');
//                   break;
//                 }
//             break;
//           default:
//             alert('coucou');
//        }
//        //%tage : (1OO multiplié par nombre victoire)/par nombre de jeu(essais)
//       pourcentage = parseInt((100*victoires)/nbcoup);
//       $('#reussites').val(pourcentage +' %');
//       $('#parties').val(nbcoup);
//     }
//   });
// });
