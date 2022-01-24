const band = [{
    name: 'corbett',
    instrument: 'guitar',
}, {
    name: 'evan',
    instrument: 'guitar',
}, {
    name: 'sean',
    instrument: 'bass',
}, {
    name: 'brett',
    instrument: 'drums',
}]

// band의 instrument만 추출
function fn_1() {
    const instruments = [];
    for (let i = 0; i < band.length; i++) {
        const instrument = band[i].instrument;
        instruments.push(instrument);
    }

    console.log(instruments);
}

// fn_1을 리팩토링
// push 메서드 -> 별도의 함수를 생성
function fn_2() {
    function getInstrument(member) {
        return member.instrument;
    }

    const instruments = [];
    for (let i = 0; i < band.length; i++) {
        instruments.push(getInstrument(band[i]));
    }

    console.log(instruments);
}

// getInstrument -> map()으로 변경
//  실행 결과, 배열을 얻게 된다는 사실을 알 수 있다.
//  실행 전에 미리 배열을 선언할 필요가 없어졌다.
//  원본 배열과 같은 길이의 배열이 생성된다는 것을 알 수 있다.
//  instrument만 배열에 담기고 다른 정보는 담기지 않는다는 점을 알 수 있다.
function fn_3() {
    function getInstrument(member) {
        return member.instrument;
    }

    const instruments = band.map(getInstrument);

    console.log(instruments);
}

// getInstrument -> 익명 함수로 변경
function fn_4() {
    const instruments = band.map(member => member.instrument);

    console.log(instruments);
}


// fn_1();
// fn_2();
// fn_3();
fn_4();
