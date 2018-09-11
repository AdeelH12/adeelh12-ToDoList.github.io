var toDoItems = [];
var i = 1;
var userInput; 
var listElement;
var checkBox;


document.getElementById("addItem").onclick = function (){

    userInput = prompt("Enter your Todo: ")
    
    toDoItems.push(userInput);
    
    document.getElementById("item-list").insertAdjacentHTML('beforeend', stylePara());

   
}

function stylePara(){
    
    var html = '';
    
    html += '<label class="container">';
    
    html += '<input type="checkBox">';
    
    html += '<span class="checkMark"></span>';
    
    html += '<span class="checkLabel">' + userInput + '</span>';
    
    html += '</label>';
    
    return html;
    
    
    
}