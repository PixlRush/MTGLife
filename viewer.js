// Randomly Determine their colours
var p1Color = Math.floor(Math.random() * 12) * 30
var p2Color = Math.floor(Math.random() * 12) * 30

console.log(p1Color, p2Color)

// Assign those colours to the elements
document.getElementById('info1').style.backgroundColor =
  'hsl(' + p1Color + ', 33%, 49%)'
document.getElementById('player1').style.backgroundColor =
  'hsl(' + p1Color + ', 43%, 61%)'

document.getElementById('info2').style.backgroundColor =
  'hsl(' + p2Color + ', 33%, 49%)'
document.getElementById('player2').style.backgroundColor =
  'hsl(' + p2Color + ', 43%, 61%)'

// Set flag for Perfect
var l1 = document.getElementById('life1')
l1.style['text-shadow'] = '4px 4px gold'
var l2 = document.getElementById('life2')
l2.style['text-shadow'] = '4px 4px gold'
