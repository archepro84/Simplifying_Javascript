function fn_1() {
    const sections = ['shipping'];

    function displayShipping(sections) {
        // Javascript의 0 = False
        if (sections.indexOf('shipping')) {
            return true;
        }
        return false;
    }

    console.log(displayShipping(sections));
}

function fn_2() {
    const sections = ['contact', 'shipping'];

    function displayShipping(sections) {
        return sections.indexOf('shipping') > -1;
    }

    console.log(displayShipping(sections));
}

function fn_3() {
    const sections = ['contact', 'shipping'];

    function displayShipping(sections) {
        return sections.includes('shipping');
    }

    console.log(displayShipping(sections));
}

// fn_1();
// fn_2();
// fn_3();