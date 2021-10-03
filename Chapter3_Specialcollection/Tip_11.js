// Default값을 설정하면서, 원래의 데이터를 유지하는 새로운 객체를 생성하는 방법 1
function fn_1() {
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

    function addBookDefaults(book, defaults) {
        const fields = Object.keys(defaults);
        const updated = {};
        for (let i = 0; i < fields.length; i++) {
            const field = fields[i];
            updated[field] = book[field] || defaults[field];
        }
        return updated;

    }

    console.log(addBookDefaults(book, defaults));
}

// Default값을 설정하면서, 원래의 데이터를 유지하는 새로운 객체를 생성하는 방법 2
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

    // defaults 테이블의 데이터 갱신된다.
    console.log(Object.assign(defaults, book));
    console.log(defaults);
}

function fn_3() {
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

    const updated = Object.assign({}, defaults, book);
    console.log(updated);
    console.log(defaults);
    console.log(book);
}

function fn_4() {
    const defaultEmployee = {
        name: {
            first: '',
            last: '',
        },
        years: 0,
    };

    // 원본 객체 또는 복사한 객체 중에서 중첩된 객체의 값을 변경하면 원본 객체와 복사한 객체 모두 변경된다.
    const employee = Object.assign({}, defaultEmployee);
    console.log(employee);
    console.log(defaultEmployee);

    defaultEmployee.name.first = 'Update name first';
    console.log(employee);
    console.log(defaultEmployee);
}

function fn_5() {
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

    // 원본 객체를 수정하더라도 모두 변경되지 않는다.
    console.log(employee2);
    console.log(defaultEmployee);

    defaultEmployee.name.last = 'Update name Last';
    console.log(employee2);
    console.log(defaultEmployee);
}

// fn_1();
// fn_2();
// fn_3();
// fn_4();
fn_5();