function fn_1() {
    const staff = [
        {
            name: 'Wesley',
            position: 'musician'
        },
        {
            name: 'Davis',
            position: 'engineer'
        },
    ];

    function getMusicians(staff) {
        return staff.filter(member => member.position === 'musician');
    }

    console.log(getMusicians(staff));
}

function fn_2() {
    const game1 = {
        player: 'Jim Jonas',
        hits: 2,
        runs: 1,
        errors: 0,
    };

    const game2 = {
        player: 'Jim Jonas',
        hits: 3,
        runs: 0,
        errors: 1,
    };

    const total = {};
    const stats = Object.keys(game1);
    for (let i = 0; i < stats.length; i++) {
        const stat = stats[i];
        if (stat !== 'player') {
            total[stat] = game1[stat] + game2[stat];
        }
    }
    console.log(total);
}

function fn_3() {
    const dog = {
        name: 'Don',
        color: 'black',
    };
    console.log(dog.name);
}

function fn_4() {
    const dogPair = [
        ['name', 'Don'],
        ['color', 'black'],
    ];

    function getName(dog) {
        return dog.find(attribute => {
            return attribute[0] === 'name';
        })[1];
    }

    console.log(getName(dogPair));
}

// fn_1();
// fn_2();
// fn_3();
// fn_4();