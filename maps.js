/*
 * Reglas:
 * El final de cada nivel debe ser el inicio del siguiente
*/

const emojis = {
    '-': ' ',
    'M': 'π',
    'Z': 'π§ββοΈ',
    'T': 'π³',
    'H': 'π ',
    'B': 'π©Έ',
    'R': 'π¦',
    'PLAYER': 'πΆββοΈ',
    'PLAYER_RUNNER': 'πββοΈ',
    'ZOMBIE_COLLISION': 'π§ ',
    'GAME_OVER': 'π',
    'WIN': 'π',
    'HEART': 'β€οΈ',
    'ROTTEN_HEART': 'π'
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