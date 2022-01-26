const sailors = [
    {
        name: 'yi hong',
        active: true,
        email: 'yh@thproductions.io',
    },
    {
        name: 'alex',
        active: true,
        email: '',
    },
    {
        name: 'nathan',
        active: false,
        email: '',
    },
];

function sendEmail(sailor) {
    console.log(sailor)
}

function fn_1() {
    // active가 false인 회원을 제외하는 함수
    const active = sailors.filter(sailor => sailor.active);

    // 이메일 주소를 정규화하여 존재하지 않는 이메일을 astraios.shop으로 변경한다.
    const emails = active.map(member => member.email || `${member.name}@astraios.shop`);

    emails.forEach(sailor => sendEmail(sailor));
}

// 결괏값에 직접 메서드를 호출해 변수에 할당하는 중간 단계를 제거하여 체이닝으로 리팩터링함
//  배열 메서드가 고유의 작업을 수행하기 때문에 코드를 한눈에 이해하기 쉽도록 수정함
function fn_2() {
    sailors
        .filter(sailor => sailor.active)
        .map(sailor => sailor.email || `${sailor.name}@astraios.shop`)
        .forEach(sailor => sendEmail(sailor))
}


// fn_1();
fn_2();
