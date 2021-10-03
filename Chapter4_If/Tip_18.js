function fn_1() {
    const title = '과장';

    let permissions;
    if (title === '과장') {
        permissions = ['근로시간', '수당'];
    } else {
        permissions = ['근로시간'];
    }

    const permissions2 = title === '과장' ? ['근로시간', '수당'] : ['근로시간'];

    // 삼항 연산자를 제대로 읽을 수 없고, 단순하지도 않다.
    const permissions3 = title === '부장' || title === '과장' ? title === '과장' ?
        ['근로시간', '초과근무승인', '수당'] : ['근로시간', '초과근무승인'] : ['근로시간'];

    // Permissions3을 독립 함수로 이동
    function getTimePermissions({title}) {
        if (title === '과장') {
            return ['근로시간', '초과근무승인', '수당'];
        }
        if (title === '부장') {
            return ['근로시간', '초과근무승인'];
        }
        return ['근로시간'];
    }

    const permissions4 = getTimePermissions({title: '사원'});

    console.log(permissions);
    console.log(permissions2);
    console.log(permissions3);
    console.log(permissions4);
}

fn_1();