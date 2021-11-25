// let aa = +prompt('son')
// let bb = +prompt('darajasi')
// total = aa
// for (let s = 1; s < bb; s++) {
//     total = total * aa
//     console.log(total);
// }
// alert(total)



// let a = prompt('ism')
// let b = +prompt('yosh')
// console.log(a + b);
// let c = +prompt('9+3=?')
// console.log('12');
// let d = +prompt('9-4=?')
// console.log('5');
// let e = +prompt('3*4=?')
// console.log('12');
// let f = +prompt('8/4=?')
// console.log('2');
// if(c==12 && d==5 && e==12 && f==2 ){    
//     console.log(b + ' yoshdagi ' + a + ' Siz misollarni barchasini togri yechdingiz');
//     alert(b + ' yoshdagi ' + a + ' Siz misollarni barchasini togri yechdingiz')
// }
// else if((c==12 && d==5 && e==12)||(c==12 && d==5 && f==2 )||(c==12  && e==12 && f==2 )||(d==5 && e==12 && f==2 )){    
//     console.log(b + ' yoshdagi ' + a + ' Siz misollardan 3tasini togri yechdingiz');
//     alert(b + ' yoshdagi ' + a + ' Siz misollardan 3 tasini togri yechdingiz')
// }
// else if((c==12 && d==5)||(c==12 && f==2 )||(e==12 && f==2 )||(d==5 && e==12)||(c==12 && e==12)||(d==5 && f==2)){
//     console.log(b + ' yoshdagi ' + a + ' Siz misollardan 2tasini togri yechdingiz');
//     alert(b + ' yoshdagi ' + a + ' Siz misollardan 2 tasini togri yechdingiz')
// }
// else if((c==12)||(f==2 )||(d==5)||(e==12)){    
//     console.log(b + ' yoshdagi ' + a + ' Siz misollardan 1tasini togri yechdingiz');
//     alert(b + ' yoshdagi ' + a + ' Siz misollardan 1 tasini togri yechdingiz')
// }



// ДОМ ЗАДАНИЯ

var custom = +prompt('nechta misol yechmoxchisiz')
function num(min, max) {
    return Math.ceil(Math.random() * (max - min) + min)
}
function num2(min, max) {
    return Math.ceil(Math.random() * (max - min) + min)
}
var a = num(1, 20)
var b = num2(1, 10)

var total = a + b


while (isNaN(custom)) {
    custom = +prompt('son kiriting, nechta misol yechmoxchisiz')
}

for (let i = 0; i < custom; i++) {
    function num(min, max) {
        return Math.ceil(Math.random() * (max - min) + min)
    }
    function num2(min, max) {
        return Math.ceil(Math.random() * (max - min) + min)
    }
    var a = num(1, 20)
    var b = num2(1, 10)

    if (total <= 5 && total >= 0 || total <= 20 && total > 15 || total <= 35 && total > 30 || total <= 50 && total > 45) {
        javob = +prompt(a + ' - ' + b + ' = ?')
        total = a - b
        while (isNaN(javob)) {
            javob = + prompt(a + ' - ' + b + ' = ?', 'son kiriting')
        }
        if (javob === total) {
            console.log("tog'ri");
            alert("tog'ri")
        }
        else {
            console.log("notog'ri, tog'ri javob " + total);
            alert("notog'ri, tog'ri javob " + total)
        }

    }
    else if (total <= 10 && total > 5 || total <= 25 && total > 20 || total <= 40 && total > 35 || total <= 55 && total > 50 || total < 0) {
        javob = +prompt(a + ' * ' + b + ' = ?')
        total = a * b
        while (isNaN(javob)) {
            javob = + prompt(a + ' * ' + b + ' = ?', 'son kiriting')
        }
        if (javob === total) {
            console.log("tog'ri");
            alert("tog'ri")
        }
        else {
            console.log("notog'ri, tog'ri javob " + total);
            alert("notog'ri, tog'ri javob " + total)
        }

    }
    else if (total <= 15 && total > 10 || total <= 30 && total > 25 || total <= 45 && total > 40 || total <= 60 && total > 55) {
        javob = +prompt(a + ' / ' + b + ' = ?')
        total = a / b
        while (isNaN(javob)) {
            javob = + prompt(a + ' / ' + b + ' = ?', 'son kiriting')
        }
        if (javob === total) {
            console.log("tog'ri");
            alert("tog'ri")
        }
        else {
            console.log("notog'ri, tog'ri javob " + total);
            alert("notog'ri, tog'ri javob " + total)
        }
    }
    else if (total > 60) {
        javob = +prompt(a + ' + ' + b + ' = ?')
        total = a + b
        while (isNaN(javob)) {
            javob = +prompt(a + ' + ' + b + ' = ?', 'son kiriting')
        }
        if (javob === total) {
            console.log("tog'ri");
            alert("tog'ri")
        }
        else {
            console.log("notog'ri, tog'ri javob " + total);
            alert("notog'ri, tog'ri javob " + total)
        }
    }
    while (isNaN(javob)) {
        javob = + prompt('son kiriting')
    }
}