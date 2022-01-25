const sailingClub = [
    'yi hong',
    'andy',
    'darcy',
    'jessi',
    'alex',
    'nathan',
]

// 일부 이름을 대문자로 변환하기 위한 함수
function fn_1() {
    const names = ['walter', 'white'];
    const capitalized = names.forEach(name => name.toUpperCase());

    console.log(capitalized);
}

// 대문자로 변경한 결과를 capitalized 배열에 담는 함수
//  배열을 직접 조작하는 방식은 좋은 방법이 아니다.
function fn_2() {
    const names = ['walter', 'white'];
    let capitalized = [];
    names.forEach(name => capitalized.push(name.toUpperCase()));

    console.log(capitalized);
}

// 데이터를 조작하지 않고, 부수 효과를 필요한 경우에 forEach() 메서드를 사용함
function fn_3() {
    function sendEmail(member) {
        console.log(`Send Email: ${member}`);
    }

    sailingClub.forEach(member => sendEmail(member))
}

// fn_1();
// fn_2();
fn_3();