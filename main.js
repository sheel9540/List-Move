function moveRight() {
    var tab1 = document.getElementById("tab1")
    var tab2 = document.getElementById("tab2")
    var chb = document.getElementsByName("ch1")

    for(var i = 0; i < chb.length; i++) {
        if(chb[i].checked){

            var chId = (chb[i].id)

            var newRow = tab2.insertRow(tab2.length)
            
            newRow.innerHTML = tab1.rows[i+1].innerHTML
            
            var index = tab1.rows[i+1].rowIndex
            tab1.deleteRow(index)
            i--;

            
            var newR = document.getElementById(chId)
            newR.setAttribute("name","ch2")

        } 
    }
}

function moveLeft() {
    var tab1 = document.getElementById("tab1")
    var tab2 = document.getElementById("tab2")
    var chb = document.getElementsByName("ch2")

    for(var i = 0; i < chb.length; i++) {
        if(chb[i].checked){

            var chId = (chb[i].id)

            var newRow = tab1.insertRow(tab1.length)
            
            newRow.innerHTML = tab2.rows[i+1].innerHTML

            var index = tab2.rows[i+1].rowIndex
            tab2.deleteRow(index)
            i--;

            var newR = document.getElementById(chId)
            newR.setAttribute("name","ch1")

        } 
    }
}