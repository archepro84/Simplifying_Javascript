function fn_1() {
    const dogs = [
        {
            name: 'max',
            size: 'small',
            breed: 'boston terrier',
            color: 'black'
        }, {
            name: 'don',
            size: 'large',
            breed: 'labrador',
            color: 'black'
        }, {
            name: 'shadow',
            size: 'medium',
            breed: 'labrador',
            color: 'chocolate'
        }
    ];

    function getColors(dogs) {
        return dogs.map(dog => dog['color']);
    }

    function getUnique(attributes) {
        const unique = [];
        for (const attribute of attributes) {
            if (!unique.includes(attribute)) {
                unique.push(attribute);
            }
        }
        return unique;
    }

    const color = getColors(dogs);
    console.log(getUnique(color));

    const colors = getColors(dogs);
    const unique = new Set(colors);
    console.log(unique);

    function getUniqueSet(attributes) {
        return [...new Set(attributes)];
    }

    console.log(getUniqueSet(colors));

}

function fn_2() {
    const dogs = [
        {
            name: 'max',
            size: 'small',
            breed: 'boston terrier',
            color: 'black'
        }, {
            name: 'don',
            size: 'large',
            breed: 'labrador',
            color: 'black'
        }, {
            name: 'shadow',
            size: 'medium',
            breed: 'labrador',
            color: 'chocolate'
        }
    ];
    let names = new Set();
    names.add('joe');
    names.add('bea');
    names.add('joe');
    console.log(names);

    function getUniqueColors(dogs) {
        const unique = new Set();
        for (const dog of dogs) {
            unique.add(dog.color);
        }
        return [...unique];
    }

    console.log(getUniqueColors(dogs));
}

function fn_3() {
    const dogs = [
        {
            name: 'max',
            size: 'small',
            breed: 'boston terrier',
            color: 'black'
        }, {
            name: 'don',
            size: 'large',
            breed: 'labrador',
            color: 'black'
        }, {
            name: 'shadow',
            size: 'medium',
            breed: 'labrador',
            color: 'chocolate'
        }
    ];

    function getUniqueColors(dogs) {
        return [...dogs.reduce((colors, {color}) => colors.add(color), new Set())];
    }
    
    console.log(getUniqueColors(dogs));
}

function fn_4() {

}

function fn_5() {

}

// fn_1();
// fn_2();
fn_3();
// fn_4();
// fn_5();