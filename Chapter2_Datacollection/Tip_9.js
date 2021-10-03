function fn_1() {
    //직원의 정보
    const staff = [{
        name: 'Joe',
        years: 10,
    }, {
        name: 'Theo',
        years: 5,
    }, {
        name: 'Dyan',
        years: 10,
    }];

    function sortByYears(a, b) {
        if (a.years === b.years) {
            return 0;
        }
        return a.years - b.years;
    }

    const sortByName = (a, b) => {
        if (a.name === b.name) {
            return 0;
        }
        return a.years - b.years;
    };

    console.log(staff);
    // console.log(staff.sort(sortByYears));
    console.log(staff.sort(sortByName));
    console.log(staff);
}


function fn_2() {
    //직원의 정보
    const staff = [{
        name: 'Joe',
        years: 10,
    }, {
        name: 'Theo',
        years: 5,
    }, {
        name: 'Dyan',
        years: 10,
    }];

    function sortByYears(a, b) {
        if (a.years === b.years) {
            return 0;
        }
        return a.years - b.years;
    }

    const sortByName = (a, b) => {
        if (a.name === b.name) {
            return 0;
        }
        return a.years - b.years;
    };

    console.log([...staff].sort(sortByYears));
    // console.log([...staff].sort(sortByName));
    console.log(staff);
}

// fn_1();
fn_2();