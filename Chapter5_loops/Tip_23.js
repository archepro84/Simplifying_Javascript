const team = [
    'Michelle B',
    'Dave L',
    'Dave C',
    'Courtney B',
    'Davina M',
]

// 정규 표현식을 이용한 Dav 문자열이 포함된 컬럼의 데이터를 반환
function fn_1() {
    const daves = [];
    for (let i = 0; i < team.length; i++) {
        if (team[i].match(/Dav/)) {
            daves.push(team[i]);
        }
    }

    console.log(daves);
}

// 60점 이상인 점수를 반환하는 함수
function fn_2() {
    const scores = [30, 82, 70, 45];

    function getNumberOfPassingScores(scores) {
        const passing = scores.filter(score => score > 59);
        return passing
    }

    const passing = getNumberOfPassingScores(scores);
    console.log(passing);
}

// 100점 이상인 점수의 갯수를 반환하는 함수
function fn_3() {
    const scores = [30, 82, 70, 45];

    function get_PerfectScores(scores) {
        const perfect = scores.filter(score => score > 100);
        return perfect.length
    }

    const perfectLength = get_PerfectScores(scores);
    console.log(perfectLength);
}

// fn_1()를 filter() 메서드를 이용해 리팩토링
function fn_4() {
    const daves = team.filter(member => member.match(/Dav/));

    console.log(daves);
}

const instructors = [
    {
        name: '짐',
        libraries: ['미디어교육정보 도서관'],
    },
    {
        name: '새라',
        libraries: ['기념 도서관', '문헌정보학 도서관'],
    },
    {
        name: '엘리엇',
        libraries: ['중앙 도서관'],
    }
]

// 근무 중인 도서관이 '기념 도서관'인 사서를 찾기 위한 함수
function fn_5() {
    let memorialInstructor;
    for (let i = 0; i < instructors.length; i++) {
        if (instructors[i].libraries.includes('기념 도서관')) {
            memorialInstructor = instructors[i];
            break;
        }
    }

    console.log(memorialInstructor);
}

// fn_5()를 find() 메서드를 이용해 리팩토링
function fn_5() {
    const librarian = instructors.find(instructor => {
        return instructor.libraries.includes('기념 도서관');
    })

    console.log(librarian);
}

// fn_6()를 커링 기법을 이용해 리팩토링
//  조건에 일치하는지 확인할 변수가 필요해 두 번째 인수를 추가해야할 때 사용함
function fn_6() {
    const findByLibrary = library => instructor => {
        return instructor.libraries.includes(library);
    };
    const librarian = instructors.find(findByLibrary('미디어교육정보 도서관'));

    console.log(librarian);
}


// fn_1();
// fn_2();
// fn_3();
// fn_4();
// fn_5();
fn_6();