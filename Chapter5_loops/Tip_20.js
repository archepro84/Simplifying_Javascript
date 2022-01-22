// 일반적인 함수
function fn_1() {
    function capitalize(name) {
        return name[0].toUpperCase() + name.slice(1);
    }

    console.log(capitalize("hello world fn_1"));
}

// 익명 함수
function fn_2() {
    const capitalize = function (name) {
        return name[0].toUpperCase() + name.slice(1);
    }
    console.log(capitalize("hello world fn_2"));
}

// 화살표 함수
function fn_3() {
    const capitalize = name => {
        return name[0].toUpperCase() + name.slice(1);
    }
    console.log(capitalize("hello world fn_3"));
}

// 일반적인 함수
function fn_4() {
    function key() {
        return 'abc123';
    }
}

// 화살표 함수
function fn_5() {
    const key = () => {
        return 'abc123';
    }
}

const capitalize = name => {
    return name[0].toUpperCase() + name.slice(1);
}

// 일반적인 함수
function fn_6() {
    function greet(first, last) {
        return `안녕하세요, ${capitalize(first)} ${capitalize(last)}님`
    }

    console.log(greet("김", "덕배"));
}

// 화살표 함수
function fn_7() {
    const greet = (first, last) => {
        return `안녕하세요, ${capitalize(first)} ${capitalize(last)}님`
    }

    console.log(greet("김", "덕배"));
}


// 일반적인 콜백 함수
function fn_8() {
    function applyCustomGreeting(name, callback) {
        return callback(capitalize(name));
    }

    function callback(name) {
        return `안녕, ${name}!`;
    }

    const message = applyCustomGreeting("hello world", callback)
    console.log(message);
}

// 익명 함수를 이용한 콜백 함수
function fn_9() {
    function applyCustomGreeting(name, callback) {
        return callback(capitalize(name));
    }

    const message = applyCustomGreeting('hello world', function (name) {
        return `안녕, ${name}!`;
    });
    console.log(message);
}

// 화살표 함수를 이용한 콜백 함수
function fn_10() {
    function applyCustomGreeting(name, callback) {
        return callback(capitalize(name));
    }

    const message = applyCustomGreeting('hello world', name => `안녕, ${name}!`);
    console.log(message);
}

// fn_1();
// fn_2();
// fn_3();
// fn_4();
// fn_5();
// fn_6();
// fn_7();
// fn_8();
// fn_9();
fn_10();