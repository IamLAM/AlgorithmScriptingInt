//In this course you will learn  to develop simple codes 

function sumAll(arr) {
    var max = Math.max(arr[0], arr[1]);
    console.log(max);
    var min = Math.min(arr[0], arr[1]);
    var temp = 0;
    for (var i = min; i <= max; i++) {
        temp += i;
    }
    return (temp);
}

console.log(sumAll([1, 4]));

function convertHTML(str) {
    // Split by character to avoid problems.

    var temp = str.split('');

    // Since we are only checking for a few HTML elements I used a switch

    for (var i = 0; i < temp.length; i++) {
        switch (temp[i]) {
            case '<':
                temp[i] = '&lt;';
                break;
            case '&':
                temp[i] = '&amp;';
                break;
            case '>':
                temp[i] = '&gt;';
                break;
            case '"':
                temp[i] = '&quot;';
                break;
            case "'":
                temp[i] = "&apos;";
                break;
        }
    }

    temp = temp.join('');
    return temp;
}


function sumFibs(num) {
    var prevNumber = 0;
    var currNumber = 1;
    var result = 0;
    while (currNumber <= num) {
        if (currNumber % 2 !== 0) {
            result += currNumber;
        }

        currNumber += prevNumber;
        prevNumber = currNumber - prevNumber;
    }

    return result;
}


///a person and lastname

var Person = function(firstAndLast) {
    var fullName = firstAndLast;

    this.getFirstName = function() {
        return fullName.split(" ")[0];
    };

    this.getLastName = function() {
        return fullName.split(" ")[1];
    };

    this.getFullName = function() {
        return fullName;
    };

    this.setFirstName = function(name) {
        fullName = name + " " + fullName.split(" ")[1];
    };

    this.setLastName = function(name) {
        fullName = fullName.split(" ")[0] + " " + name;
    };

    this.setFullName = function(name) {
        fullName = name;
    };
};