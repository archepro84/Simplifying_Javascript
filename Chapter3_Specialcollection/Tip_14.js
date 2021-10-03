function fn_1() {
    const filters = {
        color: 'black',
        breed: 'labrador',
    };

    function getAppliedFilters(filters) {
        const keys = Object.keys(filters);
        keys.sort();
        const applied = [];
        for (const key of keys) {
            applied.push(`${key}:${filters[key]}`);
        }
        return `선택한 조건은 ${applied.join(', ')} 입니다.`;
    }

    console.log(getAppliedFilters(filters));
    // 선택한 조건은 breed:labrador, color:black 입니다.
}

function fn_2() {
    const filters = new Map()
        .set('color', 'black')
        .set('breed', 'labrador');

    function checkFilters(filters) {
        for (const entry of filters) {
            console.log(entry);
        }
    }

    function getAppliedFilters(filters) {
        const applied = [];
        for (const [key, value] of filters) {
            applied.push(`${key}:${value}`);
        }
        return `선택한 조건은 ${applied.join(', ')} 입니다.`;
    }

    checkFilters(filters);
    console.log(filters.entries());
    console.log(getAppliedFilters(filters));
}

function fn_3() {
    const filters = new Map()
        .set('color', 'black')
        .set('breed', 'labrador');

    // // sort Method를 내장 함수에서 지원하지 않는다.
    // filters.sort();
    console.log(...filters);

    // Map Iterator인 배열의 요소 중 Key값으로 정렬하기 위한 함수
    // ex) Map Iterator = [ [key, value], [key, value] ]
    function sortByKey(a, b) {
        return a[0] > b[0] ? 1 : -1;
    }

    // SortByKey에서 반환된 Key-Value 쌍을 for문으로 순회한다.
    function getSortedAppliedFilters(filters) {
        const applied = [];
        for (const [key, value] of [...filters].sort(sortByKey)) {
            applied.push(`${key}:${value}`);
        }
        return `선택한 조건은 ${applied.join(', ')} 입니다.`;
    }

    console.log(getSortedAppliedFilters(filters));
}

function fn_4() {
    const filters = new Map()
        .set('color', 'black')
        .set('breed', 'labrador');

    function getAppliedFilters(filters) {
        const applied = [...filters].map(([key, value]) => {
            return `${key}:${value}`;
        });
        return `선택한 조건은 ${applied.join(', ')} 입니다.`;
    }

    console.log(getAppliedFilters(filters));

}

// fn_1();
// fn_2();
// fn_3();
fn_4();