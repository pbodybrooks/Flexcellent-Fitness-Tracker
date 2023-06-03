function createCard() {
    var cardEle = document.createElement('div');
    cardEle.classList.add('workCard');

    var container = document.querySelector('.workouts');

    container.appendChild(cardEle);

    const nodeList = document.querySelectorAll(".workCard");
    console.log(nodeList);
    for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].innerHTML ="<form name='input' action='#' method='get'>" +
        "<label for='exercise'>Exercise</label>" +
        "<input type='text' id='exercise' name='exercise'><br><br>" +
        "<label for='sets'>Sets</label>" +
        "<input type='text' id='sets' name='sets' ><br>" +
        "<label for='reps'>Reps</label>" +
        "<input type='text' id='reps' name='reps'><br>" +
        "<label for='weight'>Weight</label>" +
        "<input type='text' id='weight' name='w eight'><br><br>" +
        "<input type='submit' value='Save'>" +
        "</form>"
        ;
    }

}



