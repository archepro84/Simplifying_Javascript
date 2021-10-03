function fn_1() {
    // // 배열만으로 어떤 색인지 유추하기 힘들다.
    // const colors = ['#d10202', '#19d836', '#0e33d8'];

    const colors = {
        red: '#d10202',
        green: '#19d836',
        blue: '#0e33d8',
    };
    // export const config = {
    //     endpoint: 'http://pragprog.com',
    //     key: 'secretkey',
    // }

    function getBill(item) {
        return {
            name: item.name,
            due: twoWeeksFromNow(),
            total: calculateTotal(item.price),
        };
    }

    const bill = getBill({
        name: '객실 청소',
        price: 30
    });

    function displayBill(bill) {
        return `${bill.name} 비용은 ${bill.total} 달러이며 납부일은 ${bill.due}입니다.`;
    }

    function calculateTotal(price) {
        return price;
    }

    function twoWeeksFromNow(){
        return new Date;
    }
}

// fn_1();