const firms = new Map()
    .set(10, 'lvie Group')
    .set(23, 'Soundscaping Source')
    .set(31, 'Big 6');

function isAvailable(id) {
    return true
}

// Map을 순회하면서 이용할 수 있는 회사를 확인한다.
function fn_1() {
    const entries = [...firms]; // Map to Array
    for (let i = 0; i < entries.length; i++) {
        const [id, name] = entries[i];
        if (!isAvailable(id)) {
            return `${name}은 사용할 수 없습니다.`
        }
    }
    return '모든 회사를 사용할 수 있습니다.'
}

// find() 메서드를 사용해서 서비스를 제공하지 못하는 회사를 검색
//  이용할 수 없는 회사가 있는지 확인 > 메시지를 반환하는 2 단계를 거쳐야 한다.
//  이용이 불가능한 회사 중 첫 번째 회사만 찾을 수 있다.
function fn_2() {
    const unavailable = [...firms].find(firm => {
        const [id] = firm;
        return !isAvailable(id);
    });
    if (unavailable) {
        return `${unavailable[1]}는 사용할 수 없습니다.`
    }
    return `모든 회사를 사용할 수 있습니다.`;
}

// reduce() 메서드에서 반환될 문자열의 기본값을 성공 메시지로 구성
//  코드를 이해하기 어려울 수 있다.
//  이용이 불가능한 마지막 회사만 찾을 수 있다.
function fn_3() {
    const message = [...firms].reduce((availability, firm) => {
        const [id, name] = firm;
        if (!isAvailable(id)) {
            return `${name}는 사용할 수 없습니다.`;
        }
        return availability;
    }, `모든 회사를 사용할 수 있습니다.`);
    return message;
}

// for ... of 문으로 반복문을 개선
function fn_4() {
    for (const firm of firms) {
        const [id, name] = firm;
        if (!isAvailable(id)) {
            return `${name}는 사용할 수 없습니다.`;
        }
    }
    return `모든 회사를 사용할 수 있습니다.`;
}

const firmsObject = {
    10: 'lvie Group',
    23: 'Soundscaping Source',
    31: 'Big 6',
}

// fn_5를 for ... in 으로 개선
function fn_5() {
    for (const id in firmsObject) {
        if (!isAvailable(parseInt(id, 10))) {
            return `${firmsObject[id]}는 사용할 수 없습니다.`
        }
    }
    return `모든 회사를 사용할 수 있습니다.`;
}


// fn_1();
// fn_2();
// fn_3();
// fn_4();
fn_5();