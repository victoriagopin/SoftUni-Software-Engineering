function tseamAccount(arr) {
    let petersAccount = arr.pop(arr[0]);
    let petersGames = petersAccount.split(' ');
    console.log(petersGames);
}

tseamAccount(['CS WoW Diablo',
    'Install LoL',
    'Uninstall WoW',
    'Update Diablo',
    'Expansion CS-Go',
    'Play!']);