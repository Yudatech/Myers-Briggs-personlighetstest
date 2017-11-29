
let waittingList = [
  'Anna',
  'Bartil',
  'Cecilia',
  'David',
  'Erik',
  'Fredrik'
];
let treatedList = [];
//this are functions
// show waitting list 
function showWL(waittingList) {
  for (let name of waittingList) {
    $("#Waitting_list").append(`
    <ul class="list-group">
    <li class="list-group-item">${name}</li>
    </ul>
    `);
    select();
  }
}
// show treated list
function showDone(treatedList) {
  for (let done of treatedList) {
    $("#done").last().append(`
    <p>${done}<br/></p>
  `);
  }
}
//add new patient to the bottom
function addNew(name) {
  waittingList.push(name);
  return waittingList;
}
function addToTop(name){
  waittingList.unshift(name);
  return waittingList;
}

//finish treating
function toDone(name) {
  treatedList.push(name);
  return treatedList;
}
function finish(name) {
  waittingList.shift(name);
  return check(waittingList);
}

function check(waittingList) {
  if (waittingList.length == 0) {
    $("#Waitting_list").append("<p>Great work! You've done all your jobs!</P>");
    return [];
  } else {
    return waittingList;
  }
}
//move one to the top
function removeName(active) {
  let index = waittingList.indexOf(active);
  do{
    let move = waittingList.splice(index, 1);
    showWL(addNew(move));
  }while (index > 0) 
}
function moveToTop(name){
  let index = waittingList.indexOf(name);
 do{
    let move = waittingList.splice(index, 1)[0];
    return addToTop(move);
  } while (index >= 0) 
}




//move patient to the top of waitting list


// call functions//////////////////////////////////
//call show waitting list

showWL(check(waittingList));


//call show treated list
while (treatedList.length > 0) {
  showDone(treatedList);
}

// select patient
function select(){
  $(".list-group-item").on("click", function () {
    $(".list-group-item").removeClass("list-group-item-danger");
    $(this).addClass("list-group-item-danger");
  });
}


//finish treating
$("#have_done").on("click", function () {
  if (waittingList.length > 0) {
    $("#Waitting_list").empty();
    $("#done").empty();
    let finishName = waittingList[0];
    showDone(toDone(finishName));
    showWL(finish(finishName));

  }
});

$("#add").on("click", function () {
  if ($("#lists").val() != "") {
    $("#Waitting_list").empty();
    let add = $("#lists").val();
    showWL(addNew(add));
    $("#lists").val("");
  }
});

$("#emergency").on("click", function () {
  let item = $(".list-group-item-danger").text();
  $("#Waitting_list").empty();
  showWL(moveToTop(item));
});










