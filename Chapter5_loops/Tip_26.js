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


function fn_1() {
    const callback = function (collectedValues, item) {
        return [...collectedValues, item];
    };

    const saying = ['veni', 'vedi', 'veci'];
    const initialValue = [];
    const copy = saying.reduce(callback, initialValue);

    console.log(copy);
}

// dogs 객체를 순회하며 color를 확인하고 고윳값을 저장하는 함수
//  reduce가 더 많은 값을 쉽게 다룰수 있도록 코드에 유연성을 제공해 효율적인 코드를 작성할 수 있다.
function fn_2() {
    const colors = dogs.reduce((colors, dog) => {
        if (colors.includes(dog['color'])) {
            return colors;
        }
        return [...colors, dog['color']];
    }, []);

    console.log(colors);
}

// reduce() 메서드에 넘겨주는 콜백 함수에서 각 항목을 Set에 추가하는 함수
//  속성별로 고윳값만 담긴 컬렉션이 filters에 할당된다.
function fn_3() {
    const filters = dogs.reduce((filters, item) => {
            filters.breed.add(item['breed']);
            filters.size.add(item['size']);
            filters.color.add(item['color']);
            return filters;
        },
        {
            breed: new Set(),
            size: new Set(),
            color: new Set(),
        });

    console.log(filters);
}

const developers = [
    {
        name: 'Jeff',
        language: 'php',
    },
    {
        name: 'Ashley',
        language: 'python',
    },
    {
        name: 'Sara',
        language: 'python',
    },
    {
        name: 'Joe',
        language: 'javascript',
    },
];

// developers에서 각 language별로 몇 명인지 확인하는 함수
function fn_4() {
    const aggregated = developers.reduce((specialities, developer) => {
        const count = specialities[developer.language] || 0;
        return {
            ...specialities,
            [developer.language]: count + 1,
        };
    }, {});

    console.log(aggregated);
}


// fn_1();
// fn_2();
// fn_3();
fn_4();