function fn_1() {
    const cart = [{
        name: 'the foundation triology',
        price: 19.99,
        discount: false,
    }, {
        name: 'Godel Escher, Bach',
        price: 15.99,
        discount: false,
    }, {
        name: 'Red Mars',
        price: 5.99,
        discount: true,
    }];

    const reward = {
        name: 'Guide to Science Fiction',
        price: 0,
        discount: true,
    };

    function addFreeGift(cart) {
        if (cart.length > 2) {
            cart.push(reward);
            return cart;
        }
        return cart;
    }

    function summarizeCart(cart) {
        const discountable = cart.filter(item => item.discount);
        if (discountable.length > 1) {
            return {
                return: '할인 상품은 하나만 주문할 수 있습니다.'
            };
        }
        const cartWithReward = addFreeGift(cart);
        return {
            discounts: discountable.length,
            items: cartWithReward.length,
            cart: cartWithReward,
        };
    }

    console.log(summarizeCart(cart));
    console.log(cart);
}


function fn_2() {
    const cart = [{
        name: 'the foundation triology',
        price: 19.99,
        discount: false,
    }, {
        name: 'Godel Escher, Bach',
        price: 15.99,
        discount: false,
    }, {
        name: 'Red Mars',
        price: 5.99,
        discount: true,
    }];

    const reward = {
        name: 'Guide to Science Fiction',
        price: 0,
        discount: true,
    };

    function addFreeGift(cart) {
        if (cart.length > 2) {
            return [...cart, reward];
        }
        return cart;
    }

    function summarizeCart(cart) {
        const discountable = cart.filter(item => item.discount);
        if (discountable.length > 1) {
            return {
                return: '할인 상품은 하나만 주문할 수 있습니다.'
            };
        }
        const cartWithReward = addFreeGift(cart);
        return {
            discounts: discountable.length,
            items: cartWithReward.length,
            cart: cartWithReward,
        };
    }

    console.log(summarizeCart(cart));
    console.log(cart);

    // const titles = ['Moby Dick','White Teeth'];
    // const moreTitles = [...titles, 'The Conscius Mind'];
    // console.log(moreTitles);
}


function fn_3() {
    // // 배열의 앞에 추가하기
    // const titles = ['Moby Dick', 'White Teeth'];
    // titles.shift('The Conscious Mind');

    // 배열의 앞에 추가하기 2
    const moreTitles = ['Moby Dick', 'White Teeth'];
    const evenMoreTitles = ['The Conscious Mind', ...moreTitles];

    //배열의 사본 만들기 1
    const toCopy = ['Moby Dick', 'White Teeth'];
    const copied = toCopy.slice();

    //배열의 사본 만들기 2
    const moreCopies = ['Moby Dick', 'White Teeth'];
    const moreCopied = [...moreCopies];

    console.log(evenMoreTitles);
    console.log(copied);
    console.log(moreCopied);
}

// fn_1();
// fn_2();
fn_3();