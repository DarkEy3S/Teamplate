export function goodVsEvil(good, evil) {
    let goodPower = new PowerUnits();
    let evilPower = new PowerUnits();
    let goodResult = 0;
    let evilResult = 0;
    let goodArr = [];
    let evilArr = [];

    goodArr = good.split(' ');
    evilArr = evil.split(' ');
    for (let i = 0; i <= 5; i++) {
        goodResult += goodArr[i] * +Object.values(goodPower.good)[i];
    }
    for (let i = 0; i <= 6; i++) {
        evilResult += evilArr[i] * +Object.values(evilPower.evil)[i];
    }

    if (goodResult < evilResult) {
        return 'Battle Result: Evil eradicates all trace of Good';
    } else if (goodResult > evilResult) {
        return 'Battle Result: Good triumphs over Evil';
    } else {
        return 'Battle Result: No victor on this battle field';
    }
}

class PowerUnits {
    constructor() {
        this.good = {
            Hobbit: 1,
            Men: 2,
            Elves: 3,
            Dwarves: 3,
            Eagles: 4,
            Wizard: 10,
        };
        this.evil = {
            orcs: 1,
            men: 2,
            wargs: 2,
            goblins: 2,
            urukHai: 3,
            trolls: 5,
            wizards: 10,
        };
    }
}
