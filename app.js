const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const PORT = process.env.PORT || 3000;

const app = express();

const clientPath = `${__dirname}/client`;
console.log(`Serving static files from path ${clientPath}`);

app.use(express.static(clientPath));
const server = http.createServer(app);
const io = socketio(server);

server.listen(PORT);
console.log("Server listening at " + PORT);


//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------


function Person(id, r1, p1, r2, p2, inOrOut) {
    this.id = id;
    this.r1 = r1;
    this.p1 = p1;
    this.r2 = r2;
    this.p2 = p2;
    this.inOrOut = inOrOut;
    this.results = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.penalties = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
}

function Stacker(id, routine, warm1, warm2, try1, try2, try3, best) {
    this.id = id;
    this.routine = routine;
    this.warm1 = warm1;
    this.warm2 = warm2;
    this.try1 = try1;
    this.try2 = try2;
    this.try3 = try3;
    this.best = best;
}

function Record(player, pcontent, time, tcontent, result, rcontent) {
    this.player = player;
    this.pcontent = pcontent;
    this.time = time;
    this.tcontent = tcontent;
    this.result = result;
    this.rcontent = rcontent;
    this.store = function () {};
    this.update = function() {};
}

var winCon = 1;
var recCount = 1;
var obj1 = new Record("Player1", "--", "time1", 0.000, "Result1", 0)
var objects = {};
var connectedUsers = [];
var highlightedBox = false;


var pIdArr = [
    "Player1", "Player2", "Player3", "Player4", "Player5", "Player6", "Player7", "Player8", "Player9", "Player10", 
    "Player11", "Player12", "Player13", "Player14", "Player15", "Player16", "Player17", "Player18", "Player19",
    "Player20", "Player21", "Player22", "Player23", "Player24", "Player25", "Player26", "Player27", "Player28", 
    "Player29"
];
var tIdArr = [
    "time1", "time2", "time3", "time4", "time5", "time6", "time7", "time8", "time9", "time10", 
    "time11", "time12", "time13", "time14", "time15", "time16", "time17", "time18", "time19",
    "time20", "time21", "time22", "time23", "time24", "time25", "time26", "time27", "time28", "time29"
];
var rIdArr = [
    "Result1", "Result2", "Result3", "Result4", "Result5", "Result6", "Result7", "Result8", "Result9", "Result10", 
    "Result11", "Result12", "Result13", "Result14", "Result15", "Result16", "Result17", "Result18", "Result19",
    "Result20", "Result21", "Result22", "Result23", "Result24", "Result25", "Result26", "Result27", "Result28",
     "Result29"
];



for (var i = 1; i <= 29; i++) {
    objects[i] = new Record(pIdArr[i-1], "--", tIdArr[i-1], "", rIdArr[i-1], 0);
}

/* var objLXR = new Person("LXR", 0, 0, 0, 0, false);
var objLK = new Person("LK", 0, 0, 0, 0, false);
var objTJY = new Person("TJY", 0, 0, 0, 0, false);
var objJHA = new Person("JHA", 0, 0, 0, 0, false);
var objJL = new Person("JL", 0, 0, 0, 0, false);
var objSZF = new Person("SZF", 0, 0, 0, 0, false); */


//var objUsers = [objTJY, objLXR, objJL, objLK, objJHA, objSZF];

var stacker1 = new Stacker("LXR", "333", 0, 0, 0, 0, 0, 0);
var stacker2 = new Stacker("TJY", "333", 0, 0, 0, 0, 0, 0);
var stacker3 = new Stacker("LK", "333", 0, 0, 0, 0, 0, 0);
var stacker4 = new Stacker("SZF", "333", 0, 0, 0, 0, 0, 0);
var stacker5 = new Stacker("JV", "333", 0, 0, 0, 0, 0, 0);
var stacker6 = new Stacker("JL", "333", 0, 0, 0, 0, 0, 0);
var stacker7 = new Stacker("JHA", "333", 0, 0, 0, 0, 0, 0);
var stacker8 = new Stacker("H", "333", 0, 0, 0, 0, 0, 0);
var stacker9 = new Stacker("--", "333", 0, 0, 0, 0, 0, 0);
var stacker10 = new Stacker("--", "333", 0, 0, 0, 0, 0, 0);


var allStackers = [stacker1, stacker2, stacker3, stacker4, stacker5, 
    stacker6, stacker7, stacker8, stacker9, stacker10];

var dProperty = ["warm1", "warm2", "try1", "try2", "try3"];

/* allStackers.forEach((stacker) => {
    console.log(stacker.id)
}); */

var users = ["JX", "JZ", "TWN", "LJY", "ELI", "CUR", "LSH", "RYD", "KSY"];

var objJX = new Person("JX", 0, 0, 0, 0, false);
var objJZ = new Person("JZ", 0, 0, 0, 0, false);
var objTWN = new Person("TWN", 0, 0, 0, 0, false);
var objLJY = new Person("LJY", 0, 0, 0, 0, false);
var objELI = new Person("ELI", 0, 0, 0, 0, false);
var objCUR = new Person("CUR", 0, 0, 0, 0, false);
var objLSH = new Person("LSH", 0, 0, 0, 0, false);
var objRYD = new Person("RYD", 0, 0, 0, 0, false);
var objKSY = new Person("KSY", 0, 0, 0, 0, false);
var objUsers = [objJX, objJZ, objTWN, objLJY, objELI, objCUR, objLSH, objRYD, objKSY]; //THIS ARRAY MUST FOLLOW ARRAY SEQUENCE IN INDEX.JS


//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------


io.on('connection', (sock) => {
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~LISTEN FROM CLIENT - CONNECTION~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    sock.on('newuser', (data) => {
        
        sock.id = data;
        var sysmessage = sock.id + " connected";
        io.emit("updateonconnect", {objects});
        io.emit('chat-to-clients', sysmessage);
        //console.log(objects);
        connectedUsers.push(sock.id);
        io.emit('sendconnected', connectedUsers);

    });

    sock.on('disconnect', () => {

        var sysmessage = sock.id + " disconnected";
        io.emit('chat-to-clients', sysmessage);
        const index = connectedUsers.indexOf(sock.id);
        if (index > -1) {
            connectedUsers.splice(index, 1); // 2nd parameter means remove one item only
        }
        io.emit('sendconnected', connectedUsers);

    });
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~LISTEN FROM CLIENT - CONNECTION ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~LISTEN FROM CLIENT - ADD & MINUS WINS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    /* sock.on('addWin', (data) => {
        if (data === "AA") {
            aumWins++;
        }
        if (data === "NN") {
            ninaWins++;
        }
        if (data === "LK") {
            LKWins++;
        }
        if (data === "LXR") {
            LXRWins++;
        }
        if (data === "JHA") {
            JHAWins++;
        }
        if (data === "SZF") {
            SZFWins++;
        }
        if (data === "JL") {
            JLWins++;
        }
        if (data === "TJY") {
            TJYWins++;
        }
    }); */

    /* sock.on('give', (data) => {

        if (data.userId === "LK") {
            LKWins--;
            if (data.giveToId === "JHA") {
                JHAWins++
            }
            if (data.giveToId === "SZF") {
                SZFWins++
            }
        }
        if (data.userId === "LXR") {
            LXRWins--;
            if (data.giveToId === "TJY") {
                TJYWins++
            }
            if (data.giveToId === "JL") {
                JLWins++
            }
        }
        if (data.userId === "JHA") {
            JHAWins--;
            if (data.giveToId === "LK") {
                LKWins++
            }
            if (data.giveToId === "SZF") {
                SZFWins++
            }
        }
        if (data.userId === "SZF") {
            SZFWins--;
            if (data.giveToId === "LK") {
                LKWins++
            }
            if (data.giveToId === "JHA") {
                JHAWins++
            }
        }
        if (data.userId === "JL") {
            JLWins--;
            if (data.giveToId === "TJY") {
                TJYWins++
            }
            if (data.giveToId === "LXR") {
                LXRWins++
            }
        }
        if (data.userId === "TJY") {
            TJYWins--;
            if (data.giveToId === "LXR") {
                LXRWins++
            }
            if (data.giveToId === "JL") {
                JLWins++
            }
        }
        var giverId = data.userId
        var receiverId = data.giveToId
        io.emit("lifegained", { giverId, receiverId });
    }); */

    /* sock.on('requestlife', (data) => {
        var requesterId = data.nickname;
        var requestToId = data.requestToId;
        io.emit('sendrequest', { requesterId, requestToId });

    }); */


    /* sock.on('minusWin', (data) => {
        if (data === "AA") {
            aumWins--;
            //console.log("did this run? " + data + " " + aumWins);
        }
        if (data === "NN") {
            ninaWins--;
        }
        if (data === "LK") {
            LKWins--;
        }
        if (data === "LXR") {
            LXRWins--;
        }
        if (data === "JHA") {
            JHAWins--;
        }
        if (data === "SZF") {
            SZFWins--;
        }
        if (data === "JL") {
            JLWins--;
        }
        if (data === "TJY") {
            TJYWins--;
        }

    }); */
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~LISTEN FROM CLIENT - ADD & MINUS WINS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~LISTEN FROM CLIENT - ADD & MINUS CHALLENGES ~~~~~~~~~~~~~~~~~~~~~~~~~~
    /* sock.on('addCha', (data) => {
        if (data === "AA") {
            aumChas++;
        }
        if (data === "NN") {
            ninaChas++;
        }
        if (data === "LK") {
            LKChas++;
        }
        if (data === "LXR") {
            LXRChas++;
        }
        if (data === "JHA") {
            JHAChas++;
        }
        if (data === "SZF") {
            SZFChas++;
        }
        if (data === "JL") {
            JLChas++;
        }
        if (data === "TJY") {
            TJYChas++;
        }
    }); */

    /* sock.on('minusCha', (data) => {
        if (data === "AA") {
            aumChas--;
        }
        if (data === "NN") {
            ninaChas--;
        }
        if (data === "LK") {
            LKChas--;
        }
        if (data === "LXR") {
            LXRChas--;
        }
        if (data === "JHA") {
            JHAChas--;
        }
        if (data === "SZF") {
            SZFChas--;
        }
        if (data === "JL") {
            JLChas--;
        }
        if (data === "TJY") {
            TJYChas--;
        }
    }); */
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~LISTEN FROM CLIENT - ADD & MINUS CHALLENGES ~~~~~~~~~~~~~~~~~~~~~~~~~~
    sock.on('submit', (data) => {

        var index = users.indexOf(data.nickname);
        objUsers[index].results[roundNum - 1] = data.result;
        objUsers[index].penalties[roundNum - 1] = data.penalties;
        console.log("The result received on server is " + objUsers[index].results[roundNum - 1] + " for user " + objUsers[index].id);
        io.emit('reshistory', objUsers[index]);

    });

    sock.on('editresult', (data) => {

        var index = users.indexOf(data.student);
        objUsers[index].results[data.round - 1] = data.result;
        objUsers[index].penalties[data.round - 1] = data.penalties;

    });

    sock.on('chat-to-server', (data) => {
        io.emit('chat-to-clients', data);
    });

    sock.on('challengethisuser', (data) => {
        io.emit('appendchallenger', data);
    });

    sock.on('challenge', (data) => {
        var userId = data;
        io.emit('sendchallenge', userId);

    });

    sock.on('nextround', () => {
        roundNum++;
        io.emit('refreshall', roundNum);
    });

//############################################################################################################

    sock.on('updatename', (data) => {
        io.emit('clientupdatename', data);
        for (var i = 1; i <= 29; i++) {
            if (objects[i].player === data.id) {
                objects[i].pcontent = data.plyr;
                console.log("Record saved: " + objects[i].pcontent + " at record: " + objects[i].player);
            }
        }
        
    });

    sock.on('updatename2', (data) => {
        io.emit('clientupdatename2', data);
        for (var i = 1; i <= 29; i++) {
            if (objects[i].player === data.id2) {
                objects[i].pcontent = data.plyr;
                console.log("Record saved: " + objects[i].pcontent + " at record: " + objects[i].player);
            }
        }
    });

    sock.on('updateresult', (data) => {
        io.emit('clientupdateresult', data);
        for (var i = 1; i <= 29; i++) {
            if (objects[i].result === data.id) {
                objects[i].rcontent = data.notInt;
                console.log("Record saved: " + objects[i].rcontent + " at record: " + objects[i].result);
            }
        }
    });

    sock.on('updatetime', (data) => {
        io.emit('clientupdatetime', data);
        for (var i = 1; i <= 29; i++) {
            if (objects[i].time === data.input) {
                objects[i].tcontent = data.keyin;
                console.log("Record saved: " + objects[i].tcontent + " at record: " + objects[i].time);
            }
        }

    });

    sock.on('updatewincon', (data) => {
        io.emit('clientupdatewincon', data);
        winCon = data;
    });

    sock.on('resetserverval', () => {
        console.log("Server reseted")
        objects = {};
        connectedUsers = [];
        for (var i = 1; i <= 28; i++) {
            objects[i] = new Record(pIdArr[i-1], "--", tIdArr[i-1], "", rIdArr[i-1], 0);
        }
    });

    sock.on('updatehighlight', (data) => {
        var eleId = data;
        highlightedBox = !highlightedBox;
        
        io.emit('highlight', {eleId, highlightedBox});
        
    });

    sock.on('updatehighlight2', (data) => {
        var eleId = data;
        highlightedBox = !highlightedBox;

        io.emit('highlight2', {eleId, highlightedBox});
        
    });

    sock.on('reupdateobjects', () => {
        io.emit("updateonconnect", {objects});
        console.log("reupdate objects runned");
    });

    sock.on('updStacker', (data) => {
        allStackers.forEach((stacker) => {
            if (stacker.id === data.stacker) {
                dProperty.forEach((property) => {
                    if (data.whichTry === property) {
                        stacker[property] = parseFloat(data.result);
                        /* console.log(stacker.try1);
                        console.log(property); */
                    }
                    if (stacker.best === 0 && property != "warm1" && property != "warm2") {
                        stacker.best = stacker[property];
                    } else {
                        if (stacker.best > stacker[property] && stacker[property] != 0 && property != "warm1" && property != "warm2") {
                            stacker.best = stacker[property];
                        } else {};
                    }

                });

                if (stacker.try1 != 0 && stacker.try2 != 0 && stacker.try3 != 0) {
                    let arr = [];
                    arr.push(stacker.try1);
                    arr.push(stacker.try2);
                    arr.push(stacker.try3);

                    arr.sort(function(a,b) {
                        return a - b;
                    });

                    stacker.best = arr[0];
                    
                }
            }
        });

        
        allStackers.sort(function(a,b) {

            if (a.best === 0) return 1;        
            if (b.best === 0) return -1; 
            return a.best - b.best;
            
        });
    });

    sock.on('manualAssign', (data) => {
        var stacker = data.student2;
        var judge = data.student;
        io.emit('findJudge', { judge, stacker});
    });



});



setInterval(function () {
    /* objUsers.forEach((obj) => {
        if (obj.inOrOut === true) {
            io.emit("transmituser", obj.id);
        }
    });

    objUsers.forEach((obj) => {
        if (obj.inOrOut === false) {
            io.emit("userdisconnect", obj.id);
        }
    });
 */

    //dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd

    /* io.emit('updateallwins', { aumWins, ninaWins, LKWins, LXRWins, JHAWins, SZFWins, JLWins, TJYWins });
    io.emit('updateallchas', { aumChas, ninaChas, LKChas, LXRChas, JHAChas, SZFChas, JLChas, TJYChas }); */

    /* objUsers.forEach((obj) => {
        io.emit("updateallresults", obj);

    }); */


    /* io.emit('updateAA', aumWins);
    io.emit('updateNN', ninaWins); */

    io.emit('postResult', allStackers);

}, 1000);


