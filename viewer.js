function XMLLoad () {
  var xhttp = new XMLHttpRequest()
  // Set up what to do when the state changes of the GET
  xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) { // If complete
      // Parse out the XML into players
      var xmlDoc = this.responseXML
      var p1 = xmlDoc.getElementsByTagName('player1')[0]
      var p2 = xmlDoc.getElementsByTagName('player2')[0]

      //Deal with timer and Status
      document.getElementById('timer').textContent =
        xmlDoc.getElementsByTagName('timer')[0].textContent
      document.getElementById('status').textContent =
        xmlDoc.getElementsByTagName('status')[0].textContent


      // Deal with Player 1
      document.getElementById('info1').style.backgroundColor =
        'hsl(' + p1.getElementsByTagName('color')[0].textContent + ', 33%, 49%)'
      document.getElementById('player1').style.backgroundColor =
        'hsl(' + p1.getElementsByTagName('color')[0].textContent + ', 43%, 61%)'
      document.getElementById('name1').textContent =
        p1.getElementsByTagName('name')[0].textContent
      document.getElementById('record1').textContent =
        p1.getElementsByTagName('record')[0].textContent
      document.getElementById('life1').textContent =
        p1.getElementsByTagName('life')[0].textContent
      loadGame(p1, 1, 1)
      loadGame(p1, 1, 2)

      // Deal with Player 2
      document.getElementById('info2').style.backgroundColor =
        'hsl(' + p2.getElementsByTagName('color')[0].textContent + ', 33%, 49%)'
      document.getElementById('player2').style.backgroundColor =
        'hsl(' + p2.getElementsByTagName('color')[0].textContent + ', 43%, 61%)'
      document.getElementById('life2').textContent =
        p2.getElementsByTagName('life')[0].textContent
      document.getElementById('name2').textContent =
        p2.getElementsByTagName('name')[0].textContent
      document.getElementById('record2').textContent =
        p2.getElementsByTagName('record')[0].textContent
      document.getElementById('life2').textContent =
        p2.getElementsByTagName('life')[0].textContent
      loadGame(p2, 2, 1)
      loadGame(p2, 2, 2)
    }
  }
  // Create and Send the request
  xhttp.open('GET', 'data.xml?' + Math.random(), true) // Use the Random to stop cache
  xhttp.send()
}

function loadGame (player, p, match){
  var stat = player.getElementsByTagName('m' + match)[0].textContent
  console.log(stat)
  var newClass
  // Determine the New Class
  switch (stat) {
    case "1":
      newClass = 'mwinIndicatorF'
      break
    default:
      newClass = 'mwinIndicator'
      break
  }
  // Apply the New Class
  document.getElementById('mwins' + p).children[match - 1].className = newClass
}

XMLLoad()
