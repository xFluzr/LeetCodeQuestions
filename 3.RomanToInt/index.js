function getValue(letter) {
    switch (letter) {
        case "I":
            return 1;
            break;
        case "V":
            return 5;
            break;
        case "X":
            return 10;
            break;
        case "L":
            return 50;
            break;
        case "C":
            return 100;
            break;
        case "D":
            return 500;
            break;
        case "M":
            return 1000;
            break;
        default:
            return 0;
            break;
    }
}
function romanToInt(s) {
    var sum = 0;
    for (var i = 0; i < s.length; i++) {
        var temp = getValue(s[i]);
        if (i + 1 < s.length) {
            var nextTemp = getValue(s[i + 1]);
            if (temp >= nextTemp) {
                sum += temp;
            }
            else {
                sum += (nextTemp - temp);
                i++;
            }
        }
        else {
            sum += temp;
        }
    }
    return sum;
}
;
console.log(romanToInt("IX"));
