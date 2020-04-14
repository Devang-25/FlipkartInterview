

// Check Pangram
function checkPangram() {
    var newStrArray = str.replace(/ /g, '').toLocaleLowerCase()  //removing spaces
    var counter = 0
    for (let i = 0; i < 26; i++) {
        if (newStrArray.includes(String.fromCharCode(i + 97))) {
            counter = counter + 1
        }
    }
    if (counter === 26) {
        return true
    } else {
        return false
    }
}
var str = "The quick brown fox jumps over the lazy dog"
console.log(checkPangram(str))


