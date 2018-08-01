// Randomly assign colours to the life totals
var p1Color = (Math.floor(Math.random() * 12)) * 30
var p2Color = (Math.floor(Math.random() * 12)) * 30

document.getElementById('life1').style.backgroundColor = 'hsl(' + p1Color + ', 50%, 50%)'
document.getElementById('gain1').style.backgroundColor = 'hsl(' + p1Color + ', 50%, 40%)'
document.getElementById('lose1').style.backgroundColor = 'hsl(' + p1Color + ', 50%, 40%)'

document.getElementById('life2').style.backgroundColor = 'hsl(' + p2Color + ', 50%, 50%)'
document.getElementById('gain2').style.backgroundColor = 'hsl(' + p2Color + ', 50%, 40%)'
document.getElementById('lose2').style.backgroundColor = 'hsl(' + p2Color + ', 50%, 40%)'

// Handle Buttons
function gain(x) {
	var l = document.getElementById('lp' + x)
	l.textContent = parseInt(l.textContent) + 1
}

function lose(x) {
	var l = document.getElementById('lp' + x)
	l.textContent = parseInt(l.textContent) - 1
}