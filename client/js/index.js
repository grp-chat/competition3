const sock = io();

function Pairing(judge, stacker) {
    this.judge = judge;
    this.stacker = stacker;
}

var pair1 = new Pairing("LXR", "TJY");
var pair2 = new Pairing("TJY", "LK");
var pair3 = new Pairing("LK", "JV");
var pair4 = new Pairing("JV", "SZF");
var pair5 = new Pairing("JL", "JHA");
var pair6 = new Pairing("JHA", "LXR");
var pair7 = new Pairing("SZF", "H");
var pair8 = new Pairing("H", "SZF");
/* var pair9 = new Pairing("", "");
var pair10 = new Pairing("", ""); */

var pairArr = [pair1, pair2, pair3, pair4, pair5, pair6, pair7, pair8];

var stu = ["LXR", "TJY", "LK", "SZF", "JV", "JL", "JHA", "H"];
var stu2 = ["LXR", "TJY", "LK", "SZF", "JV", "JL", "JHA", "H"];

var assignment = "LXR";
var judgeH1 = document.getElementById("judgeH1");
var stackerH1 = document.getElementById("stackerH1");
var routineH1 = document.getElementById("routineH1");

stackerH1.innerHTML = "Stacker: " + assignment;

var highlightedBox = false;
var connectedArr = [];

//---------------------------------------- USER PIN NUMBER PROMPT -----------------------------------------
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
sock.emit('newuser', nickname);
//---------------------------------------- USER PIN NUMBER PROMPT -----------------------------------------

judgeH1.innerHTML = "Judge: " + nickname;

pairArr.forEach((pair) => {
    if (pair.judge === nickname) {
        assignment = pair.stacker;
        stackerH1.innerHTML = "Stacker: " + assignment;
    }
});

function createContainerDiv() {
    var thisDiv = document.createElement('div');
    thisDiv.setAttribute("class", "Container2");
    thisDiv.style.display = "flex";
    thisDiv.style.marginTop = "10px";
    //thisDiv.style.backgroundColor = "lightgrey";

    return thisDiv;
}

function createBranchDiv(watclass) {
    var thisDiv = document.createElement('div');
    thisDiv.setAttribute("class", watclass)
    //thisDiv.style.height = "830px";
    //thisDiv.style.width = "400px"
    //thisDiv.style.backgroundColor = "red";
    //thisDiv.style.flexWrap = "wrap";
    //thisDiv.style.display = "flex";

    return thisDiv;
}

function createMatchDiv(watclass) {
    var thisDiv = document.createElement('div');
    thisDiv.setAttribute("class", watclass);
    //thisDiv.style.height = "200px";
    //thisDiv.style.backgroundColor = "blue";

    return thisDiv;
}

function createObjectDiv(watclass) {
    var thisDiv = document.createElement('div');
    thisDiv.setAttribute("class", watclass);
    return thisDiv;
}

function createDivWithSelect(watclass, watid) {
    var thisDiv = document.createElement('div');
    var thisSelect = document.createElement('select');

    thisSelect.setAttribute("class", watclass);
    thisSelect.setAttribute("id", watid);
    thisSelect.setAttribute("type", "text");
    thisSelect.style.height = "40px";
    thisSelect.style.width = "110px";

    /* for (var i = 1; i <= nameArr.length; i++) {
        thisSelect.textContent = nameArr[i];
        thisSelect.value = nameArr[i];
    } */


    thisDiv.append(thisSelect);
    return thisDiv;
}

function createDivWithNameFor(watclass, watid) {
    var thisDiv = document.createElement('div');
    //var thisSelect = document.createElement('select');

    thisDiv.setAttribute("class", watclass);
    thisDiv.setAttribute("id", watid);
    thisDiv.setAttribute("type", "text");
    thisDiv.style.height = "40px";
    thisDiv.style.width = "110px";

    //thisDiv.append(thisSelect);
    return thisDiv;
}

function createDivWithInput(watid) {
    var thisDiv = document.createElement('div');
    var thisSelect = document.createElement('input');

    thisSelect.setAttribute("class", "Time");
    thisSelect.setAttribute("id", watid);
    thisSelect.setAttribute("type", "number");
    thisSelect.style.height = "40px";
    thisSelect.style.width = "110px";

    thisDiv.append(thisSelect);
    return thisDiv;
}

function createDivWithForm(watid) {
    var thisDiv = document.createElement('div');
    var thisForm = document.createElement('form');
    thisForm.setAttribute("class", "Result");
    thisForm.setAttribute("name", "FormId1");
    thisDiv.append(thisForm);


    var thisSelect = document.createElement('select');
    thisSelect.setAttribute("id", watid);
    var thisOption = document.createElement('option');
    thisOption.value = 0;
    thisOption.innerHTML = 0;
    thisSelect.append(thisOption);
    var thisOption = document.createElement('option');
    thisOption.value = 1;
    thisOption.innerHTML = 1;
    thisSelect.append(thisOption);
    var thisOption = document.createElement('option');
    thisOption.value = 2;
    thisOption.innerHTML = 2;
    thisSelect.append(thisOption);
    var thisOption = document.createElement('option');
    thisOption.value = 3;
    thisOption.innerHTML = 3;
    thisSelect.append(thisOption);

    thisSelect.style.height = "40px";
    thisSelect.style.width = "40px";

    thisForm.append(thisSelect);

    return thisDiv;
}

function createABox(a, b, c, d, e, f, g, h, i, j) {
    var matchDiv = createMatchDiv(a);
    var objectDiv = createObjectDiv(b);
    branchDiv.append(matchDiv);
    matchDiv.append(objectDiv);


    var selectDiv = createDivWithSelect(c, d);
    var inputDiv = createDivWithInput(e);
    var formDiv = createDivWithForm(f);

    objectDiv.append(selectDiv);
    objectDiv.append(inputDiv);
    objectDiv.append(formDiv);

    //=========================================================
    var selectDiv = createDivWithSelect(g, h);
    var inputDiv = createDivWithInput(i);
    var formDiv = createDivWithForm(j);

    objectDiv.append(selectDiv);
    objectDiv.append(inputDiv);
    objectDiv.append(formDiv);
}

function createABox2(a, b, c, d, e, f, g, h, i, j) {
    var matchDiv = createMatchDiv(a);
    var objectDiv = createObjectDiv(b);
    branchDiv.append(matchDiv);
    matchDiv.append(objectDiv);


    var selectDiv = createDivWithNameFor(c, d);
    var inputDiv = createDivWithInput(e);
    var formDiv = createDivWithForm(f);

    objectDiv.append(selectDiv);
    objectDiv.append(inputDiv);
    objectDiv.append(formDiv);

    //=========================================================
    var selectDiv = createDivWithSelect(g, h);
    var inputDiv = createDivWithInput(i);
    var formDiv = createDivWithForm(j);

    objectDiv.append(selectDiv);
    objectDiv.append(inputDiv);
    objectDiv.append(formDiv);
}

function createABox3(a, b, c, d, e, f, g, h, i, j) {
    var matchDiv = createMatchDiv(a);
    var objectDiv = createObjectDiv(b);
    branchDiv.append(matchDiv);
    matchDiv.append(objectDiv);


    var selectDiv = createDivWithSelect(c, d);
    var inputDiv = createDivWithInput(e);
    var formDiv = createDivWithForm(f);

    objectDiv.append(selectDiv);
    objectDiv.append(inputDiv);
    objectDiv.append(formDiv);

    //=========================================================
    var selectDiv = createDivWithNameFor(g, h);
    var inputDiv = createDivWithInput(i);
    var formDiv = createDivWithForm(j);

    objectDiv.append(selectDiv);
    objectDiv.append(inputDiv);
    objectDiv.append(formDiv);
}

function createABox5(a, b, c, d, e, f, g, h, i, j) {
    var matchDiv = createMatchDiv(a);
    var objectDiv = createObjectDiv(b);
    branchDiv.append(matchDiv);
    matchDiv.append(objectDiv);


    var selectDiv = createDivWithNameFor(c, d);
    var inputDiv = createDivWithInput(e);
    var formDiv = createDivWithForm(f);

    objectDiv.append(selectDiv);
    objectDiv.append(inputDiv);
    objectDiv.append(formDiv);

    //=========================================================
    var selectDiv = createDivWithNameFor(g, h);
    var inputDiv = createDivWithInput(i);
    var formDiv = createDivWithForm(j);

    objectDiv.append(selectDiv);
    objectDiv.append(inputDiv);
    objectDiv.append(formDiv);
}

function appendName(id, plyr, idBox) {
    ele = document.getElementById(id)
    var opts = ele.options.length;
    for (var i = 0; i < opts; i++) {
        if (ele.options[i].value === plyr) {
            ele.options[i].selected = true;
            break;
        }
    }
    if (plyr === nickname) {
        document.getElementById(idBox).disabled = false;
    } else if (plyr != nickname && nickname != "TCR") {
        document.getElementById(idBox).disabled = true;
    }


}

function appendName2(id, plyr, idBox) {
    document.getElementById(id).innerHTML = plyr;
    if (plyr === nickname) {
        document.getElementById(idBox).disabled = false;
    } else if (plyr != nickname && nickname != "TCR") {
        document.getElementById(idBox).disabled = true;
    }
}

function appendResult(id, rslt) {
    ele = document.getElementById(id)
    var opts = ele.options.length;
    for (var i = 0; i < opts; i++) {
        //alert(ele.options[i].value);
        if (ele.options[i].value === rslt) {
            ele.options[i].selected = true;
            break;
        }
    }
}

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

    stu.forEach((student) => {
        if (message === "TCR: assign " + student + " to me" && nickname === "TCR") {
            let text = student + " assigned to TCR successfully";
            assignment = student;
            stackerH1.innerHTML = "Stacker: " + assignment;
            sock.emit('chat-to-server', text);
        }

        stu2.forEach((student2) => {
            if (message === "TCR: assign " + student2 + " to " + student && nickname === "TCR") {
                let text = "[" + connectedArr.toString() + "]";
                sock.emit('manualAssign', { student2, student});
                /* assignment = student;
                stackerH1.innerHTML = "Stacker: " + assignment; */
                sock.emit('chat-to-server', text);

            }
        });

    });


}

function validOrNot(result) {
    if (result < 6.9 || result > 999.999) {
        alert("Invalid result");
        result = 0;
    }
    return result;
}

sock.on('sendconnected', data => {
    connectedArr = data;
    console.log(connectedArr);
});

sock.on('clientupdatename', data => {
    appendName(data.id, data.plyr, data.idBox);
});

sock.on('clientupdatename2', data => {
    appendName2(data.id2, data.plyr, data.idBox);
});

sock.on('clientupdateresult', data => {
    appendResult(data.id, data.notInt);
});

sock.on('clientupdatetime', data => {

    document.getElementById(data.input).value = data.keyin;

});

sock.on('clientupdatewincon', data => {

    //ele = document.getElementById(id)
    var opts = Result00.options.length;
    for (var i = 0; i < opts; i++) {
        if (Result00.options[i].value === data) {
            Result00.options[i].selected = true;
            break;
        }
    }

});

/* sock.on('updateonconnect', data => {
    for (var i = 1; i <= 29; i++) {

        var playerEle = document.getElementById(data.objects[i].player);
        
        if (playerEle.tagName === 'DIV') {
            playerEle.innerHTML = data.objects[i].pcontent;
        } else if (playerEle.tagName === 'SELECT') {
            if (nickname != "TCR") {
                var opt = document.createElement('option');
                opt.value = data.objects[i].pcontent;
                opt.innerHTML = data.objects[i].pcontent;
                playerEle.appendChild(opt);
                playerEle.value = data.objects[i].pcontent;

            }
        }

        var timeEle = document.getElementById(data.objects[i].time);
        timeEle.value = data.objects[i].tcontent;

        var resultEle = document.getElementById(data.objects[i].result);
        resultEle.value = data.objects[i].rcontent;

        console.log("Update objects complete");
    }
}); */

sock.on('chat-to-clients', data => {
    appendMessage(data);
});

sock.on('highlight', data => {
    var selBox = document.getElementById(data.eleId).parentElement.parentElement;
    /* if (selBox.classList.contains('blue')) {
            
    } else {
        
    } */
    selBox.classList.toggle("blue");
    highlightedBox = !highlightedBox;
    if (highlightedBox != data.highlightedBox) {
        selBox.classList.toggle("blue");
        highlightedBox = !highlightedBox;
    }

});

sock.on('highlight2', data => {
    var selBox = document.getElementById(data.eleId).parentElement;
    /* if (selBox.classList.contains('blue')) {
            
    } else {
        
    } */
    selBox.classList.toggle("blue");
    highlightedBox = !highlightedBox;
    if (highlightedBox != data.highlightedBox) {
        selBox.classList.toggle("blue");
        highlightedBox = !highlightedBox;
    }

});

sock.on('findJudge', data => {
    if (nickname === data.judge) {
        assignment = data.stacker;
        stackerH1.innerHTML = "Stacker: " + assignment;
        let text = assignment + " assigned to " + nickname + " successfully";
        sock.emit('chat-to-server', text);
    }
});


var saveW1 = document.getElementById("saveWarm1");
saveW1.addEventListener("click", () => {
    var dTry = document.getElementById("warm1");
    var result = dTry.value;
    var stacker = assignment;
    var whichTry = "warm1";
    sock.emit('updStacker', { stacker, result, whichTry });
    console.log("Result saved " + result + stacker);
});

var saveW2 = document.getElementById("saveWarm2");
saveW2.addEventListener("click", () => {
    var dTry = document.getElementById("warm2");
    var result = dTry.value;
    var stacker = assignment;
    var whichTry = "warm2";
    sock.emit('updStacker', { stacker, result, whichTry });
    console.log("Result saved " + result + stacker);
});


var saveResult = document.getElementById("saveTry1");
saveResult.addEventListener("click", () => {
    var try1 = document.getElementById("try1");
    var result = try1.value;
    result = validOrNot(result);
    var stacker = assignment;
    var whichTry = "try1";
    sock.emit('updStacker', { stacker, result, whichTry });
    let text = nickname + " saved " + stacker + "'s 1st Try as " + result;
    sock.emit('chat-to-server', text);
    if (result != 0) {
        saveResult.disabled = true;
    }
    if (nickname === "TCR") {
        saveResult.disabled = false;
    }
});

var save2 = document.getElementById("saveTry2");
save2.addEventListener("click", () => {
    var dTry = document.getElementById("try2");
    var result = dTry.value;
    result = validOrNot(result);
    var stacker = assignment;
    var whichTry = "try2";
    sock.emit('updStacker', { stacker, result, whichTry });
    let text = nickname + " saved " + stacker + "'s 2nd Try as " + result;
    sock.emit('chat-to-server', text);
    if (result != 0) {
        save2.disabled = true;
    }
    if (nickname === "TCR") {
        save2.disabled = false;
    }
});

var save3 = document.getElementById("saveTry3");
save3.addEventListener("click", () => {
    var dTry = document.getElementById("try3");
    var result = dTry.value;
    result = validOrNot(result);
    var stacker = assignment;
    var whichTry = "try3";
    sock.emit('updStacker', { stacker, result, whichTry });
    let text = nickname + " saved " + stacker + "'s 3rd Try as " + result;
    sock.emit('chat-to-server', text);
    if (result != 0) {
        save3.disabled = true;
    }
    if (nickname === "TCR") {
        save3.disabled = false;
    }
    
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

