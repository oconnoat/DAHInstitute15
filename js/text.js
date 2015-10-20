
//get the value from the box and put it in the paragraph

function displayEmoji(){
    var character = document.getElementById('character');
    var display = document.getElementById('emoji');
    var the_value = String.fromCodePoint(character.value);
    console.log(the_value);
    display.textContent = the_value;
}
