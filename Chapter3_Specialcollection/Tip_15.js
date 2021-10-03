function fn_1() {
    const defaults = new Map()
        .set('color', 'chocolate')
        .set('breed', 'beagle')
        .set('location', 'Kansas');

    const filters = new Map()
        .set('color', 'black');
    console.log(filters.has('color'));

    // filtering 조건을 Map에 추가하는 함수
    function applyDefaults(map, defaults) {
        for (const [key, value] of defaults) {
            if (!map.has(key)) {
                map.set(key, value);
            }
        }
    }

    applyDefaults(filters, defaults);
    console.log(filters);
}

function fn_2() {
    const defaults = new Map()
        .set('color', 'chocolate')
        .set('breed', 'beagle')
        .set('location', 'Kansas');

    const filters = new Map()
        .set('color', 'black');

    // filtering 조건을 담은 Collection을 새롭게 생성하는 함수
    function applyDefaults(map, defaults) {
        const copy = new Map([...map]);
        for (const [key, value] of defaults) {
            if (!copy.has(key)) {
                copy.set(key, value);
            }
        }
        return copy;
    }

    const copy = applyDefaults(filters, defaults);
    console.log(copy);
    console.log(filters);
}

function fn_3() {
    const defaults = new Map()
        .set('color', 'chocolate')
        .set('breed', 'beagle')
        .set('location', 'Kansas');

    // Map을 생성할 때 앞에 있는 Array에 뒤에 Array를 덮어 쓰기한다.
    let filters = new Map()
        .set('color', 'black');
    let filters2 = new Map()
        .set('color', 'chocolate');
    let update = new Map([...filters, ...filters2]);
    // console.log(update);

    // filtering 조건을 담은 Collection을 새롭게 생성하는 함수
    function applyDefaults(map, defaults) {
        return new Map([...map, ...defaults]);
    }

    const copy = applyDefaults(filters, filters2);
    console.log(copy);
    console.log(filters);
    console.log(filters2);
}


// fn_1();
// fn_2();
fn_3();