const sock = io();

var changesMade = false;
const table = document.getElementById("table");
var allStackers = [];


var c1, c2, c3, c4, c5, c6, c7, c8, c9, c10,
    c11, c12, c13, c14, c15, c16, c17, c18, c19, c20,
    c21, c22, c23, c24, c25, c26, c27, c28, c29, c30;
var row1, row2, row3, row4, row5, row6, row7, row8, row9, row10;

var allRows = [row1, row2, row3, row4, row5, row6, row7, row8, row9, row10];

var allCells = [c1, c2, c3, c4, c5, c6, c7, c8, c9, c10,
    c11, c12, c13, c14, c15, c16, c17, c18, c19, c20,
    c21, c22, c23, c24, c25, c26, c27, c28, c29, c30];

/* allRows.forEach((row) => {

}); */

function Position(id, result) {
    this.id = id;
    this.result = result;
}

var pos1 = new Position("--", 0);
var pos2 = new Position("--", 0);
var pos3 = new Position("--", 0);
var pos4 = new Position("--", 0);
var pos5 = new Position("--", 0);
var pos6 = new Position("--", 0);
var pos7 = new Position("--", 0);
var pos8 = new Position("--", 0);
var pos9 = new Position("--", 0);
var pos10 = new Position("--", 0);

allPos = [pos1, pos2, pos3, pos4, pos5, pos6, pos7, pos8, pos9, pos10]


var j = 0;
for (var i = 1; i <= 10; i++) {
    allRows[i] = table.insertRow(i);
    allCells[j] = allRows[i].insertCell(0);
    allCells[j].innerHTML = i;
    j++;
    allCells[j] = allRows[i].insertCell(1);
    j++;
    allCells[j] = allRows[i].insertCell(2);
    j++;

    //cell1.innerHTML = i;

}

/* var row = table.insertRow(1);
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2); */

//--------------------------------------------------------------------------------------------------------
const promptMsg = () => {
    var nick = prompt("Please enter your pin number:");
    while (nick.length == 0) {
        alert("Please enter your pin number!");
        nick = prompt("Please enter your pin number:");
    }


    if (nick === '8111188') {
        nickname = 'Aum';
        correctPin = true;
    } else if (nick === '1888811') {
        nickname = 'Nina'
        correctPin = true;
    } else if (nick === '9852') {
        nickname = 'LK'
        correctPin = true;
    } else if (nick === '9035') {
        nickname = 'LXR'
        correctPin = true;
    } else if (nick === '6588') {
        nickname = 'TJY'
        correctPin = true;
    } else if (nick === '1072') {
        nickname = 'JL'
        correctPin = true;
    } else if (nick === '3839') {
        nickname = 'SZF'
        correctPin = true;
    } else if (nick === '5691') {
        nickname = 'JV'
    } else if (nick === '4048') {
        nickname = 'H'
    } else if (nick === '88888') {
        nickname = 'TCR'
    } else if (nick === '3583') {
        nickname = 'JHA'
    } else if (nick === '5086') {
        nickname = 'CED'
    } else if (nick === '2105') {
        nickname = 'CJH'
    } else if (nick === '2167') {
        nickname = 'KX'
    } else if (nick === '7051') {
        nickname = 'KN'
    } else if (nick === '1198') {
        nickname = 'LOK'
    } else if (nick === '7089') {
        nickname = 'JW'
    } else if (nick === '3825') {
        nickname = 'JZ'
    } else if (nick === '1289') {
        nickname = 'JX'
    } else if (nick === '1399') {
        nickname = 'JAY'
    } else if (nick === '8579') {
        nickname = 'TWN'
    } else if (nick === '8828') {
        nickname = 'LJY'
    } else if (nick === '3191') {
        nickname = 'ELI'
    } else if (nick === '3307') {
        nickname = 'CUR'
    } else if (nick === '1529') {
        nickname = 'LSH'
    } else if (nick === '7385') {
        nickname = 'RYD'
    } else if (nick === '4162') {
        nickname = 'JT'
    } else if (nick === '6139') {
        nickname = 'KSY'
    } else {
        alert("Wrong pin number!");
        promptMsg();
    }
};

promptMsg();
//--------------------------------------------------------------------------------------------------------

function appendMessage(message) {
    const messageDiv = document.createElement('div');
    messageDiv.innerText = message;
    div3.append(messageDiv);
    div3.scrollTop = div3.scrollHeight;
    if (message === "TCR: force reset") {
        sock.emit('resetserverval');
        if (nickname != "TCR") {
            window.location.reload();
        }
    }

    if (message === "TCR: connected users" && nickname === "TCR") {
        let text = "[" + connectedArr.toString() + "]";
        sock.emit('chat-to-server', text);
    }

}

sock.on('postResult', data => {
    //test.innerHTML = data;
    //cell1.innerHTML = data[0].try1;

    allStackers = data;

    var j = 1;
    for (var i = 0; i < allStackers.length; i++) {
        allCells[j].innerHTML = allStackers[i].id;
        j++;
        allCells[j].innerHTML = allStackers[i].best;
        j++;
        j++;
    }

});

sock.on('chat-to-clients', data => {
    appendMessage(data);
});







var chatDiv = document.createElement("div");
//var chatDiv = document.getElementById("chatdiv");
//chatDiv.setAttribute("id", "chatdiv");
chatDiv.style.width = "450px";
chatDiv.style.height = "339px";
//chatDiv.style = "background:rgba(255, 255, 255, 0.5); color:black; overflow: auto;"
chatDiv.style.background = "rgba(255, 255, 255, 0.5)";
chatDiv.style.color = "black";
chatDiv.style.overflow = "auto";
chatDiv.style.overflowX = "hidden";
chatDiv.style.float = "right";
chatDiv.style.marginLeft = "2%";
chatDiv.style.position = "fixed";
chatDiv.style.top = "30px";
chatDiv.style.right = "30px";


document.body.append(chatDiv);

var chatInput = document.createElement('input');
chatInput.className = "form-control";
chatInput.style.width = "338px";
chatInput.style.height = "48px";
chatInput.setAttribute("id", "chatinput");
chatInput.setAttribute("type", "text");
chatInput.style.display = "inline";
chatDiv.appendChild(chatInput);

var chatBtn = document.createElement('button');

chatBtn.className = "btn btn-secondary";
chatBtn.setAttribute("id", "chatBtn");
chatBtn.innerHTML = "Send";

chatDiv.appendChild(chatBtn);

var div3 = document.createElement('div');
div3.setAttribute("id", "messagediv");
div3.style.width = '420px';
div3.style.height = '280px'
div3.style.color = 'black';
div3.style.background = 'rgba(236, 236, 236, 0.5)';
div3.setAttribute("id", "chatdiv");
div3.style.overflowY = "auto";
chatDiv.appendChild(div3);

chatBtn.addEventListener('click', function () {
    var message = nickname + ': ';
    message += chatInput.value;
    sock.emit('chat-to-server', message);
    chatInput.value = '';
});

chatInput.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("chatBtn").click();
    }

});

window.onscroll = function (ev) {
    if ((window.innerHeight + window.scrollY + 200) >= document.body.offsetHeight) {
        // you're at the bottom of the page
        chatDiv.style.top = "300px";
    } else {
        chatDiv.style.top = "30px";
    }
};

