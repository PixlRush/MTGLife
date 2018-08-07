function XMLLoad () {
  var xhttp = new XMLHttpRequest()
  // Set up what to do when the state changes of the GET
  xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) { // If complete
      // Parse out the XML into players
      var xmlDoc = this.responseXML
      var p1 = xmlDoc.getElementsByTagName('player1')[0]
      var p2 = xmlDoc.getElementsByTagName('player2')[0]

      // Deal with Player 1
      document.getElementById('life1').style.backgroundColor =
        'hsl(' + p1.getElementsByTagName('color')[0].textContent + ', 50%, 50%)'
      document.getElementById('gain1').style.backgroundColor =
        'hsl(' + p1.getElementsByTagName('color')[0].textContent + ', 50%, 40%)'
      document.getElementById('lose1').style.backgroundColor =
        'hsl(' + p1.getElementsByTagName('color')[0].textContent + ', 50%, 40%)'
      document.getElementById('lp1').textContent =
        p1.getElementsByTagName('life')[0].textContent

      // Deal with Player 2
      document.getElementById('life2').style.backgroundColor =
        'hsl(' + p2.getElementsByTagName('color')[0].textContent + ', 50%, 50%)'
      document.getElementById('gain2').style.backgroundColor =
        'hsl(' + p2.getElementsByTagName('color')[0].textContent + ', 50%, 40%)'
      document.getElementById('lose2').style.backgroundColor =
        'hsl(' + p2.getElementsByTagName('color')[0].textContent + ', 50%, 40%)'
      document.getElementById('lp2').textContent =
        p2.getElementsByTagName('life')[0].textContent
      console.log('Loaded XML')
    }
  }
  // Create and Send the request
  xhttp.open('GET', 'data.xml?' + Math.random(), true) // Use the Random to stop cache
  xhttp.send()
}

// Handle Buttons
function gain(x) {
  var l = document.getElementById('lp' + x)
  l.textContent = parseInt(l.textContent) + 1
}

function lose(x) {
  var l = document.getElementById('lp' + x)
  l.textContent = parseInt(l.textContent) - 1
}

XMLLoad()
