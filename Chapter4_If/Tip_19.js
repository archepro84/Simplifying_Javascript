function fn_1() {
    // path가 정의되어 있고 빈 값이 아닌 경우 해당 경로를 반환한다.
    function getIconPath(icon) {
        const path = icon.path ? icon.path : 'uploads/default.png';
        return `https://assets.foo.com/${path}`;
    }

    const icon = {
        path: 'acme/bar.png'
    };
    console.log(getIconPath(icon));
}

function fn_2() {
    function getIconPath(icon) {
        const path = icon.path || 'uploads/default.png';
        return `https://assets.foo.com/${path}`;
    }

    const icon = {
        path: 'acme/bar.png'
    };
    console.log(getIconPath(icon));
}

function fn_3() {
    // 지정된 배열이 없음
    const userConfig1 = {};

    //내용이 없는 배열
    const userConfig2 = {
        images: []
    };

    // 내용이 있는 배열
    const userConfig3 = {
        images: [
            'me.png',
            'work.png'
        ]
    };

    // // 속성이 정의되지 않은 경우에는 제대로 동작하지 않는다.
    // const img = userConfig1.images[0] || 'default.png';

    // 배열에 항목이 존재하지 않으면 문제가 발생한다.
    function getFirstImage(userConfig) {
        let img = 'default.png';
        if (userConfig.images) {
            img = userConfig.images[0];
        }
        return img;
    }

    // 배열에 항목이 없을 경우 undefined가 반환된다.
    const img = getFirstImage(userConfig2);
    console.log(img);

    // 가독성이 떨어지는 함수가 되어버렸다.
    function getImage(userConfig) {
        let img = 'default.png';
        if (userConfig.images) {
            if (userConfig.images.length) {
                img = userConfig.images[0];
            }
        }
        return img;
    }

}

function fn_4() {
    // 지정된 배열이 없음
    const userConfig1 = {};

    //내용이 없는 배열
    const userConfig2 = {
        images: []
    };

    // 내용이 있는 배열
    const userConfig3 = {
        images: [
            'me.png',
            'work.png'
        ]
    };

    function getImage(userConfig) {
        if (userConfig.images && userConfig.images.length > 0) {
            return userConfig.images[0];
        }
        return 'default.png';
    }

    console.log(getImage(userConfig1));
    console.log(getImage(userConfig2));
    console.log(getImage(userConfig3));
}

function fn_5() {
    // 지정된 배열이 없음
    const userConfig1 = {};

    //내용이 없는 배열
    const userConfig2 = {
        images: []
    };

    // 내용이 있는 배열
    const userConfig3 = {
        images: [
            'me.png',
            'work.png'
        ]
    };

    function getImage(userConfig) {
        const images = userConfig.images;
        return images && images.length ? images[0] : 'default.png';
    }

    console.log(getImage(userConfig1));
    console.log(getImage(userConfig2));
    console.log(getImage(userConfig3));
}

function fn_6() {
    // 지정된 배열이 없음
    const userConfig1 = {};

    //내용이 없는 배열
    const userConfig2 = {
        images: []
    };

    // 내용이 있는 배열
    const userConfig3 = {
        images: [
            'me.png',
            'work.png'
        ]
    };

    //gif를 받지않는 코드를 추가한 함수
    function getImage(userConfig) {
        const images = userConfig.images;
        return images && images.length && images[0].indexOf('gif') < 0
            ? images[0] : 'default.png';
    }

    console.log(getImage(userConfig1));
    console.log(getImage(userConfig2));
    console.log(getImage(userConfig3));
}

// fn_1();
// fn_2();
// fn_3();
// fn_4();
// fn_5();
fn_6();