function greeting() {
    let username = 'oscar';

    function displayUserName() {
        return 'hello  ${username}';

    }
    return displayUserName;
}

const g = greeting();
console.log(g);
console.log(g());