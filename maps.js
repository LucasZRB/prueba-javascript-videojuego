/*
 * Reglas:
 * El final de cada nivel debe ser el inicio del siguiente
*/

const emojis = {
    '-': ' ',
    'M': '🏔',
    'Z': '🧟‍♂️',
    'T': '🌳',
    'H': '🏠',
    'B': '🩸',
    'R': '🟦',
    'PLAYER': '🚶‍♂️',
    'PLAYER_RUNNER': '🏃‍♂️',
    'ZOMBIE_COLLISION': '🧠',
    'GAME_OVER': '👎',
    'WIN': '🏆',
    'HEART': '❤️',
    'ROTTEN_HEART': '💚'
};

const maps = [];
maps.push([
    'HZZZZZZZZT',
    '-ZZZZZZZZT',
    'BZZZZZZZZT',
    '-ZZZZZZZZT',
    '-ZZZZZZZZT',
    '-ZZZZZZZZT',
    'BZZZZZZZZT',
    '-ZZZZZZZZT',
    '-ZZZZZZZZT',
    'MZZZZZZZZT'
]);
maps.push([
    'M--ZZZTZZZ',
    'Z--ZZZZZZZ',
    'ZZ---BZZTZ',
    'ZB-ZZ-ZZZZ',
    'Z-ZZZ--ZZZ',
    'ZBZZTZ-ZZZ',
    'ZZ--ZZ--ZZ',
    'ZZ-BZZZ-ZZ',
    'ZZZZ-B-HZZ',
    'ZZZZZZZZZZ'
]);
maps.push([
    'H----BZTZZ',
    'ZZZZZ-ZZZZ',
    'ZZ-B--ZZTZ',
    'ZZ-ZZZTZZZ',
    'ZZ--B--ZZZ',
    'ZZZZZZ-ZZZ',
    'ZZ-----ZZZ',
    'ZZBZZZZZZZ',
    'ZZ-----MZZ',
    'ZZZZZZZZZZ'
]);