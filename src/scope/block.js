function fruits() {
    if (true) {
        var fruits1 = 'apple'; // function scope
        let fruits2 = 'kiwi'; //bock scope
        const fruits3 = 'banana' //block scope
        console.log(fruits2);
        console.log(fruits3);
    }

    console.log(fruits1);
   
}

fruits();