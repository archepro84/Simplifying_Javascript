// prices 배열을 부동 소수점으로 변환하는 반복문
function fn_1() {
    const prices = ['1.0', '2.15'];

    const formattedPrices = [];
    for (let i = 0; i < prices.length; i++) {
        formattedPrices.push(parseFloat(prices[i]));
    }

    console.log(formattedPrices);
}

// fn_1에서 문자열을 포함하지만, 숫자로 변환할 수 있는 값만 반환하는 함수
//  1. 반복문 바깥쪽에 추가로 빈배열을 두게 되었다.
//  2. 이터레이터를 선언하려면 세 부분으로 나뉜 패턴을 따라야한다.
//  3. 값을 변환하는 작업과 불필요한 값을 제외하기 위한 두 가지의 관심사가 혼합된다.
//  코드가 단순하지 않고, 가독성이 추후 떨어지게 될 것이다.
function fn_2() {
    const prices = ['1.0', 'negotiable', '2.15'];

    const formattedPrices = [];
    for (let i = 0; i < prices.length; i++) {
        const price = parseFloat(prices[i]);
        if (price) {
            formattedPrices.push(price);
        }
    }

    console.log(formattedPrices);
}

// 배열 메서드로 for 문을 변환
function fn_3() {
    const prices = ['1.0', '2.15'];
    const formattedPrices = prices.map(price => parseFloat(price));

    console.log(formattedPrices);
}

// 배열 메서드를 연결해서 사용
//  한 가지 배열 메서드를 호출하고 반환된 결과는 이어지는 배열 메서드로 전달되도록 구현
function fn_4() {
    const prices = ['1.0', '흥정가능', '2.15'];
    const formattedPrices = prices.map(price => parseFloat(price))
        .filter(price => price);

    console.log(formattedPrices);
}

// fn_1();
// fn_2();
// fn_3();
fn_4();