var die = 6; 
var dice = 3; 
function dice_roll(die, dice) { 
var txtfld=document.form.text; 
txtfld.value =''; 
var roll = new Array(); 
for (loop=0; loop < dice; loop++) { 
roll[loop] = 0 + Math.round(Math.random() * die) % die + 1; 
txtfld.value += roll[loop]+' - '; 
} 
txtfld.value = txtfld.value.substring(0,txtfld.value.length-3); 
}