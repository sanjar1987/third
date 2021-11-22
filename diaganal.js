var a = +prompt('diaganal sonini kiriting')
var line = ''
for (let i = 1; i < a; i++) {
    for (let s = 1; s < a; s++) {
        if (i == s) {
            line = line + '🟥'
        }
        else if (s == 1) {
            line += '🟥'
        }
        else if (i == 1) {
            line += '🟥'
        }
        // else if (s == a || i == a) {
        //     line = line + '🟥'
        // }
        else {
            line = line + '⬜'
        }
    }
    line += '🟥'
    console.log(line);
    line = ''
}

for (let i = 0; i < a; i++) {
    line += '🟥'
}
console.log(line);