function fn_1() {
    const employee = {
        name: 'Eric',
        equipmentTraining: true,
    };

    function listCerts(employee) {
        if (employee.equipmentTraining) {
            employee.certificates = ['Equipment'];
            delete employee.equipmentTraining;
        }
    }

    function checkAuthorization() {
        if (!employee.equipmentTraining) {
            return `기계를 작동할 권한이 없습니다.`;
        }
        return `반갑습니다, ${employee.name}님`;
    }

    listCerts(employee);
    console.log(checkAuthorization(employee));
}

function fn_2() {
    const employee = {
        name: 'Eric',
        equipmentTraining: true,
    };

    function checkAuthorization() {
        if (employee.equipmentTraining !== true) {
            return `기계를 작동할 권한이 없습니다.`;
        }
        return `반갑습니다, ${employee.name}님`;
    }

    console.log(checkAuthorization(employee));
    employee.equipmentTraining = '';
    console.log(checkAuthorization(employee));
}


// fn_1();
fn_2();