// Exercise 11

// The following exercise contains the following subjects:
// ● Order Of Operation
// ● If statements

// Instructions

// John and Mike both play basketball on different teams. In the latest 3 games, John's team scored 89, 120, and 103 points,
// while Mike's team scored 116, 94, and 123 points.
// 1. Calculate the average score for each team.
// 2. Decide which team wins on average (highest average score), and print the winner to the console. Also include
// the average score in the output.
// 3. Then change the scores to show different winners. Don't forget to take into account that there might be a draw (the
// same average score).
// 4. EXTRA: Mary also plays basketball, and her team scored 97, 134, and 105 points. Like before, log the average 
// winner to the console.
// 5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

const johnsTeamScore = [89, 120, 103];
const mikesTeamScore = [116, 94, 123];

function whoWins(johnsTeamScore, mikesTeamScore){
    let johnsTeamScoreSum = 0;
    let mikesTeamScoreSum = 0;
    
    for(let i = 0; i < johnsTeamScore.length; i++){
        johnsTeamScoreSum += johnsTeamScore[i];
    }

    const johnsTeamScoreAverage = johnsTeamScoreSum / johnsTeamScore.length;
    
    for(let i = 0; i < mikesTeamScore.length; i++){
        mikesTeamScoreSum += mikesTeamScore[i];
    }

    const mikesTeamScoreAverage = mikesTeamScoreSum / mikesTeamScore.length;

    if (johnsTeamScoreAverage > mikesTeamScoreAverage) {
        console.log('John`s team won with the average score ' + johnsTeamScoreAverage + ' points');
    } else if (johnsTeamScoreAverage < mikesTeamScoreAverage) {
        console.log('Mike`s team won with the average score ' + mikesTeamScoreAverage  + ' points');
    } else {
        console.log('The average score of two teams are equal');
    }

}

whoWins(johnsTeamScore, mikesTeamScore);