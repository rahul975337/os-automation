var robot = require("robotjs");
var fs = require("fs");

setTimeout(handleNotepad, 100);

function handleNotepad() {
  robot.moveMouseSmooth(59, 704);
  robot.mouseClick();
  robot.typeString("notepad");
  robot.keyTap("enter");

  setTimeout(() => {
    robot.typeString("hello there");
  }, 1000);
  setTimeout(handleTelegram, 5000);
}

function handleTelegram() {
  robot.moveMouseSmooth(59, 704);

  robot.mouseClick();
  robot.typeString("telegram");
  robot.keyTap("enter");

  robot.typeString("blu");
  setTimeout(() => {
    robot.keyTap("enter");
  }, 1000);
  setTimeout(() => {
    robot.typeString("hey there");
    robot.keyTap("enter");
    setTimeout(openChrome, 2000);
  }, 1000);
}

function openChrome() {
  robot.moveMouseSmooth(59, 704);
  setTimeout(() => {
    robot.mouseClick();
    robot.typeString("chrome");
    robot.keyTap("enter");
    setTimeout(openTabs, 1000);
  }, 2000);
}

function openTabs() {
  var rawData = fs.readFileSync("./chrome.json");
  var tabsData = JSON.parse(rawData);

  for (var i = 0; i < tabsData.length; i++) {
    for (var j = 0; j < tabsData[i].length; j++) {
      robot.typeString(tabsData[i][j]);
      robot.keyTap("enter");

      if (j < tabsData[i].length - 1) {
        robot.keyToggle("control", "down");
        robot.keyTap("t");
        robot.keyToggle("control", "up");
      } else if (i < tabsData.length - 1) {
        robot.keyToggle("control", "down");
        robot.keyTap("n");
        robot.keyToggle("control", "up");
      }
    }
  }
}
