//Challenge 1: Your age in Days
function ageInDays() {
    var birthYear = prompt('Year of birth: ');
    let ageInDays = (2020 - birthYear) * 365;
    let h2 = document.createElement('h2');
    let answer = document.createTextNode('You are ' + ageInDays + ' days old!');
    h2.setAttribute('id', 'ageInDays');
    h2.appendChild(answer);
    document.getElementById('flex-box-result').appendChild(h2);

}

//resetiranje rezultata
function reset() {
    document.getElementById('ageInDays').remove();
}