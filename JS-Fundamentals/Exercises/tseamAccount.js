// As a gamer, Peter has Tseam Account. He loves to buy new games. You are given Peter's account with all of his
// games-> strings, separated by space. Until you receive "Play!" you will be receiving commands which Peter does
// with his account.
// You may receive the following commands:
// • Install {game} - add the game at the last position in the account, but only if it isn't installed already.
// • Uninstall {game} - delete the game if it exists.
// • Update {game} - update the game if it exists and place it in the last position.
// • Expansion {game}-{expansion} - check if the game exists and insert after it the expansion in the
// following format: "{game}:{expansion}";
// Input
// • On the first input line you will receive Peter`s account - a sequence of game names, separated by space.
// • Until you receive "Play!" you will be receiving commands.
// Output
// • As output, you must print Peter`s Tseam account.
// Constraints
// • The command will always be valid.
// • The game and expansion will be strings and will contain any character, except '-'.


function tseamAccount(arr) {
    let petersAccount = arr.shift();
    let petersGames = petersAccount.split(' ');

    for (let action of arr) {
        let tokens = action.split(' ');
        let command = tokens[0];
        let game = tokens[1];

        if (command == 'Install' && !petersGames.includes(game)) {
            petersGames.push(game);
        } else if (command == 'Uninstall' && petersGames.includes(game)) {
            let gameToRemove = game;
            let index = petersGames.indexOf(gameToRemove);

            petersGames.splice(index, 1);
        } else if (command == 'Update' && petersGames.includes(game)) {
            let elementToMove = game;
            let index2 = petersGames.indexOf(elementToMove);

            petersGames.splice(index2, 1);
            petersGames.push(elementToMove);
        } else if (command == 'Expansion') {
            let [gameToExpand, expansion] = game.split('-');
            if (petersGames.includes(gameToExpand)) {
                let index3 = petersGames.indexOf(gameToExpand);
                petersGames.splice(index3 + 1, 0, `${gameToExpand}:${expansion}`);
            }
        }


    }
    console.log(petersGames.join(' '));
}

tseamAccount(['CS WoW Diablo',
    'Uninstall XCOM',
    'Update PeshoGame',
    'Update WoW',
    'Expansion Civ-V',
    'Play!']);