// 일반적인 객체로 해결하는 방법
function fn_1() {
    const dogs = [
        {
            name: 'max',
            size: 'small',
            breed: 'boston terrier',
            color: 'black'
        }, {
            name: 'don',
            size: 'large',
            breed: 'labrador',
            color: 'black'
        }, {
            name: 'shadow',
            size: 'medium',
            breed: 'labrador',
            color: 'chocolate'
        }
    ];
    let filters = {};

    // 서로 다른 패더라임이 작용한다.
    function addFilters(filters, key, value) {
        filters[key] = value;
    }

    function deleteFilters(filters, key) {
        delete filters[key];
    }

    function clearFilters(filters) {
        filters = {};
        return filters;
    }

    addFilters(filters, 'size', 'large');
    addFilters(filters, 'breed', 'labrador');
    addFilters(filters, 'color', 'black');
    console.log(filters);

    deleteFilters(filters, 'size');
    deleteFilters(filters, 'breed');
    console.log(filters);

    filters = clearFilters(filters);
    console.log(filters);

}

function fn_2() {
    let filters = new Map();

    filters.set('breed', 'labrador');
    console.log(filters.get('breed'));

    // Chaining 적용
    let filters2 = new Map()
        .set('breed', 'labrador')
        .set('size', 'large')
        .set('color', 'chocolate');
    console.log(filters2.get('size'));

    // Key-Value Array를 Map으로 변환
    let filters3 = new Map(
        [
            ['size', 'large'],
            ['breed', 'labrador'],
            ['color', 'chocolate']
        ]);
    console.log(filters3);
    console.log(`filters3.get(color) : ${filters3.get('color')}`);

    filters3.delete('color');
    console.log(`filters3.get('color') : ${filters3.get('color')}`);

    filters3.clear();
    console.log(`filters.get('size') : ${filters.get('size')}`);
}

function fn_3() {
    let petFilters = new Map();

    /** Mapfilter 함수의 특징
     * 1. 항상 맵 인스턴스의 Method를 사용한다.
     * 2. delete() Method를 사용할 수 있기 때문에 언어 수준의 연산자를 사용하지 않는다.
     * 3. clear() Method를 사용할 수 있기 때문에 새로운 인스턴스를 생성하지 않는다.
     * */
    function addFilters(filters, key, value) {
        filters.set(key, value);
    }

    function deleteFilters(filters, key) {
        filters.delete(key);
    }

    function clearFilters(filters) {
        filters.clear();
    }

    addFilters(petFilters, 'size', 'large');
    addFilters(petFilters, 'breed', 'labrador');
    addFilters(petFilters, 'color', 'black');
    console.log(petFilters);

    deleteFilters(petFilters, 'size');
    deleteFilters(petFilters, 'breed');
    console.log(petFilters);

    petFilters = clearFilters(petFilters);
    console.log(petFilters);
}

function fn_4() {
    const errors = {
        100: '이름이 잘못되었습니다.',
        110: '이름에는 문자만 입력할 수 있습니다.',
        200: '색상이 잘못되었습니다.',
    };


    // // Object의 정수의 Key값은 String 형식으로 저장된다.
    // function isDataValid(data) {
    //     if (data.length < 10)
    //         return errors.100
    //     return true;
    // }

    console.log(Object.keys(errors));

}

function fn_5() {
    const errors = new Map([
        [100, '이름이 잘못되었습니다.'],
        [110, '이름에는 문자만 입력할 수 있습니다.'],
        [200, '색상이 잘못되었습니다.'],
    ]);

    console.log(errors.get(100));
    console.log(errors.keys());
}

// fn_1();
// fn_2();
// fn_3();
// fn_4();
fn_5();