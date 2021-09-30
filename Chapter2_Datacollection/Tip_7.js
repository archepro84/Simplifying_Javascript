function fn_1() {
    const cart = ['Naming and Necessity', 'Alice in wonderland'];
    const copyCart = [...cart];

    console.log(...cart);
    console.log(copyCart);
}


function fn_2() {
    // 지정한 항목을 배열에서 제거하기 위한 함수
    function removeItem(items, removable) {
        const updated = [];
        for (let i = 0; i < items.length; i++) {
            if (items[i] !== removable) {
                updated.push(items[i]);
            }
        }
        return updated;
    }

}

function fn_3() {
    // 지정한 항목을 배열에서 제거하기 위한 함수
    function removeItem(items, removable) {
        const index = items.indexOf(removable);
        items.splice(index, 1);
        return items;
    }

    const books = ['practical vim', 'moby dick', 'the dark tower'];
    const recent = removeItem(books, 'moby dick');
    const novels = removeItem(books, 'practical vim');

    console.log(books);
    console.log(recent);
    console.log(novels);
}

function fn_4() {
    // 지정한 항목을 배열에서 제거하기 위한 함수
    function removeItem(items, removable) {
        const index = items.indexOf(removable);
        return items.slice(0, index).concat(items.slice(index + 1));
    }

    const books = ['practical vim', 'moby dick', 'the dark tower'];
    const recent = removeItem(books, 'moby dick');
    const novels = removeItem(books, 'practical vim');

    console.log(books);
    console.log(recent);
    console.log(novels);
}

function fn_5() {
    // 지정한 항목을 배열에서 제거하기 위한 함수
    function removeItem(items, removable) {
        const index = items.indexOf(removable);
        return [...items.slice(0, index), ...items.slice(index + 1)];
    }

    const books = ['practical vim', 'moby dick', 'the dark tower'];
    const recent = removeItem(books, 'moby dick');
    const novels = removeItem(books, 'practical vim');

    console.log(books);
    console.log(recent);
    console.log(novels);
}

function fn_6() {
    const book = ['Reasons and Persons', 'Derek Parfit', 19.99];

    function formatBook(title, author, price) {
        return `${title} by ${author} $${price}`;
    }

    // console.log(formatBook(book[0], book[1], book[2]));
    console.log(formatBook(...book));
}

// fn_1();
// fn_2();
// fn_3();
// fn_4();
// fn_5();
fn_6();