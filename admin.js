var xhttp = new XMLHttpRequest()
xhttp.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    XMLRead(this)
  }
}
xhttp.open('GET', 'data.xml?' + Math.random(), true) // Use the Random to stop cache
xhttp.send()

function XMLRead (xml) {
  var xmlDoc = xml.responseXML
  // Deal with First Player Items
  var p1 = xmlDoc.getElementsByTagName('player1')[0]
  document.getElementById('name1').textContent =
    (p1.getElementsByTagName('name')[0].innerHTML)
  document.getElementById('record1').textContent =
    (p1.getElementsByTagName('record')[0].innerHTML)
  document.getElementById('color1').textContent =
    'Hue: ' + (p1.getElementsByTagName('color')[0].innerHTML)
  document.getElementById('life1').textContent =
    'Life: ' + (p1.getElementsByTagName('life')[0].innerHTML)
  document.getElementById('player1').style.backgroundColor =
    'hsl(' + p1.getElementsByTagName('color')[0].textContent + ', 50%, 50%)'
  document.getElementById('info1').style.backgroundColor =
      'hsl(' + p1.getElementsByTagName('color')[0].textContent + ', 50%, 40%)'
  // Deal with Second Player Items
  var p2 = xmlDoc.getElementsByTagName('player2')[0]
  document.getElementById('name2').textContent =
    (p2.getElementsByTagName('name')[0].innerHTML)
  document.getElementById('record2').textContent =
    (p2.getElementsByTagName('record')[0].innerHTML)
  document.getElementById('color2').textContent =
    'Hue: ' + (p2.getElementsByTagName('color')[0].innerHTML)
  document.getElementById('life2').textContent =
    'Life: ' + (p2.getElementsByTagName('life')[0].innerHTML)
  document.getElementById('player2').style.backgroundColor =
    'hsl(' + p2.getElementsByTagName('color')[0].textContent + ', 50%, 50%)'
  document.getElementById('info2').style.backgroundColor =
      'hsl(' + p2.getElementsByTagName('color')[0].textContent + ', 50%, 40%)'
}
