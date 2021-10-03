function fn_1() {
    const book = {
        title: 'Reasons and Persons',
        author: 'Derek Parfit',
    };
    const update = {...book, year: 1984};
    console.log(update);

    const update2 = {...book, title: 'Reasons & Persons'};
    console.log(update2);
}

function fn_2() {
    const defaults = {
        author: '',
        title: '',
        year: 2021,
        rating: null,
    };

    const book = {
        author: 'Joe Morgan',
        title: 'Simplifying Javascript',
    };

    const update = Object.assign({}, defaults, book);
    console.log(update);

    // 앞의 인자값을 뒤에 인자값이 덮어 쓴다. ☆
    const bookWithDefaults = {...defaults, ...book};
    console.log(bookWithDefaults);


}

function fn_3() {
    const defaultEmployee = {
        name: {
            first: '',
            last: '',
        },
        years: 0,
    };

    const employee2 = Object.assign(
        {},
        defaultEmployee,
        {
            name: Object.assign({}, defaultEmployee.name)
        },
    );

    const employee = {
        ...defaultEmployee,
        name: {...defaultEmployee.name},
    };
    console.log(defaultEmployee);
    console.log(employee2);

    defaultEmployee.name.first = 'Hello world';
    console.log(defaultEmployee);
    console.log(employee2);
    console.log(employee);
}

// fn_1();
// fn_2();
fn_3();