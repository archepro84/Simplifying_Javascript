function fn_1() {
    const items = ['One', 'Two', 'Three'];
    for (var i = 0; i < items.length; i++) {
        setTimeout(() => {
            console.log(`setTimeout을 실행합니다. i : ${i}`);
        }, 0);
    }
    console.log("fn_1 함수를 종료합니다.");
}

fn_1();