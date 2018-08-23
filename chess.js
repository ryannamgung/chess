document.addEventListener('DOMContentLoaded', () => {
  const board = document.getElementById("board")
  //creation functions
  function createBoard(){
    var table = document.createElement("table");
    for (var i = 1; i < 9; i++) {
        var tr = document.createElement('tr');
        tr.id = `row${i}`;
        for (var j = 1; j < 9; j++) {
            var td = document.createElement('td');
            td.style.height = "50px";
            td.style.width = "50px";
            if (i%2 == j%2) {
                td.className = "white";
            } else {
                td.className = "black";
                td.style.backgroundColor = "black";
            }
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    board.appendChild(table);
  }

  function placePawn(){
    //this is the table, duh.
    // debugger
    let whitePawnRow = board.querySelector("table").querySelector("#row7")
    let blackPawnRow = board.querySelector("table").querySelector("#row2")

    let i = 1
    whitePawnRow.querySelectorAll("td").forEach((td) => {
      const whitePawnDiv = document.createElement("div")
      whitePawnDiv.id = `white-pawn${i}`
      whitePawnDiv.innerHTML += "<img src='images/white-pawn.png' style='height:50px; width:50px'>"
      td.appendChild(whitePawnDiv)
      i++
    })

    i = 1
    blackPawnRow.querySelectorAll("td").forEach((td) => {
      const blackPawnDiv = document.createElement("div")
      blackPawnDiv.id = `black-pawn${i}`
      blackPawnDiv.innerHTML += "<img src='images/black-pawn.png' style='height:50px; width:50px'>"
      td.appendChild(blackPawnDiv)
      i++
    })
    // const pawnRows = [...myTable.querySelectorAll("tr")].filter((tr) => tr.id == 2)
  }
  //-------------------------------------------------------------------//
  //-------------------------------------------------------------------//
  //call functions
  createBoard()
  placePawn()

})
