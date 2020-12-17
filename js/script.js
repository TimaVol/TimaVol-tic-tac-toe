var box = document.querySelectorAll(".box");
var access = true;
var counter = document.querySelector(".counter");
var counterNum = Number(document.querySelector(".counter").textContent);
var playerOne = document.querySelector(".labelPlayer.one");
var playerTwo = document.querySelector(".labelPlayer.two");
var playAgain = document.querySelector(".labelPlayAgain");
var sideBar = document.querySelector(".sidebar");
var deleteEvent = Boolean;
// playSpace

box.forEach((elem) => {
  elem.addEventListener("click", () => {
    if (deleteEvent == true) {
      elem.removeEventListener("click");
    }
    switch (access) {
      case true:
        if (
          /zero/.test(elem.classList.value) ||
          /cross/.test(elem.classList.value)
        ) {
        } else {
          elem.classList.add("cross");
          access = false;
          counterNum += 1;
          counter.innerHTML = `${counterNum}`;

          // playerLabel

          playerOne.classList.add("two");
          playerOne.classList.remove("one");
          playerTwo.classList.remove("two");
          playerTwo.classList.add("one");
        }

        break;
      case false:
        if (
          /zero/.test(elem.classList.value) ||
          /cross/.test(elem.classList.value)
        ) {
        } else {
          elem.classList.add("zero");
          access = true;
          counterNum += 1;
          counter.innerHTML = `${counterNum}`;

          // playerLabel

          playerTwo.classList.add("two");
          playerTwo.classList.remove("one");
          playerOne.classList.add("one");
          playerOne.classList.remove("two");
        }

        break;
    }
    let curentElem = [];
    box.forEach((elem) => {
      curentElem.push(elem.classList.value);
    });

    let winPosition = [
      curentElem.slice(0, 3).join(" ").replace(/box /g, ""),
      curentElem.slice(3, 6).join(" ").replace(/box /g, ""),
      curentElem.slice(6, 9).join(" ").replace(/box /g, ""),
      (curentElem[0] + " " + curentElem[3] + " " + curentElem[6]).replace(
        /box /g,
        ""
      ),
      (curentElem[1] + " " + curentElem[4] + " " + curentElem[7]).replace(
        /box /g,
        ""
      ),
      (curentElem[2] + " " + curentElem[5] + " " + curentElem[8]).replace(
        /box /g,
        ""
      ),
      (curentElem[0] + " " + curentElem[4] + " " + curentElem[8]).replace(
        /box /g,
        ""
      ),
      (curentElem[2] + " " + curentElem[4] + " " + curentElem[6]).replace(
        /box /g,
        ""
      ),
    ];

    let aga = Boolean;

    winPosition.forEach((elem) => {
      if (elem == "cross cross cross") {
        sideBar.style.background = "green";
        playerOne.style.background = "#bbbaba";
        playerTwo.style.background = "#bbbaba";
        deleteEvent = true;
        switch (winPosition.indexOf(elem)) {
          case 0:
            Array.from(box)
              .slice(0, 3)
              .forEach((elem) => {
                elem.style.color = "green";
              });
            break;
          case 1:
            Array.from(box)
              .slice(3, 6)
              .forEach((elem) => {
                elem.style.color = "green";
              });
            break;
          case 2:
            Array.from(box)
              .slice(6, 9)
              .forEach((elem) => {
                elem.style.color = "green";
              });
            break;
          case 3:
            [box[0], box[3], box[6]].forEach((elem) => {
              elem.style.color = "green";
            });
            break;
          case 4:
            [box[1], box[4], box[7]].forEach((elem) => {
              elem.style.color = "green";
            });
            break;
          case 5:
            [box[2], box[5], box[8]].forEach((elem) => {
              elem.style.color = "green";
            });
            break;
          case 6:
            [box[0], box[4], box[8]].forEach((elem) => {
              elem.style.color = "green";
            });
            break;
          case 7:
            [box[2], box[4], box[6]].forEach((elem) => {
              elem.style.color = "green";
            });
            break;
        }
      } else if (counterNum == 9) {
        aga = true;
      }

      if (elem == "zero zero zero") {
        sideBar.style.background = "green";
        playerOne.style.background = "#bbbaba";
        playerTwo.style.background = "#bbbaba";
        deleteEvent = true;
        switch (winPosition.indexOf(elem)) {
          case 0:
            Array.from(box)
              .slice(0, 3)
              .forEach((elem) => {
                elem.style.color = "green";
              });
            break;
          case 1:
            Array.from(box)
              .slice(3, 6)
              .forEach((elem) => {
                elem.style.color = "green";
              });
            break;
          case 2:
            Array.from(box)
              .slice(6, 9)
              .forEach((elem) => {
                elem.style.color = "green";
              });
            break;
          case 3:
            [box[0], box[3], box[6]].forEach((elem) => {
              elem.style.color = "green";
            });
            break;
          case 4:
            [box[1], box[4], box[7]].forEach((elem) => {
              elem.style.color = "green";
            });
            break;
          case 5:
            [box[2], box[5], box[8]].forEach((elem) => {
              elem.style.color = "green";
            });
            break;
          case 6:
            [box[0], box[4], box[8]].forEach((elem) => {
              elem.style.color = "green";
            });
            break;
          case 7:
            [box[2], box[4], box[6]].forEach((elem) => {
              elem.style.color = "green";
            });
            break;
        }
      }
    });

    if (aga == true) {
      sideBar.style.background = "#d48839";
      playerOne.style.background = "#bbbaba";
      playerTwo.style.background = "#bbbaba";
    }
  });
});

playAgain.addEventListener("click", () => {
  box.forEach((elem) => {
    elem.classList.remove("zero");
    elem.classList.remove("cross");
    counterNum = 0;
    counter.innerHTML = "0";
    access = true;
    elem.style.cssText = '';
    playerOne.style.cssText = '';
    playerTwo.style.cssText = '';
    playerOne.classList.add("one");
    playerOne.classList.remove("two");
    playerTwo.classList.remove("one");
    playerTwo.classList.add("two");
    sideBar.style.background = "#707070";
    deleteEvent = false;

    elem.addEventListener("click", () => {
      if (deleteEvent == true) {
        elem.removeEventListener("click");
      }
      switch (access) {
        case true:
          if (
            /zero/.test(elem.classList.value) ||
            /cross/.test(elem.classList.value)
          ) {
          } else {
            elem.classList.add("cross");
            access = false;
            counterNum += 1;
            counter.innerHTML = `${counterNum}`;

            // playerLabel

            playerOne.classList.add("two");
            playerOne.classList.remove("one");
            playerTwo.classList.remove("two");
            playerTwo.classList.add("one");
          }

          break;
        case false:
          if (
            /zero/.test(elem.classList.value) ||
            /cross/.test(elem.classList.value)
          ) {
          } else {
            elem.classList.add("zero");
            access = true;
            counterNum += 1;
            counter.innerHTML = `${counterNum}`;

            // playerLabel

            playerTwo.classList.add("two");
            playerTwo.classList.remove("one");
            playerOne.classList.add("one");
            playerOne.classList.remove("two");
          }

          break;
      }
      let curentElem = [];
      box.forEach((elem) => {
        curentElem.push(elem.classList.value);
      });

      let winPosition = [
        curentElem.slice(0, 3).join(" ").replace(/box /g, ""),
        curentElem.slice(3, 6).join(" ").replace(/box /g, ""),
        curentElem.slice(6, 9).join(" ").replace(/box /g, ""),
        (curentElem[0] + " " + curentElem[3] + " " + curentElem[6]).replace(
          /box /g,
          ""
        ),
        (curentElem[1] + " " + curentElem[4] + " " + curentElem[7]).replace(
          /box /g,
          ""
        ),
        (curentElem[2] + " " + curentElem[5] + " " + curentElem[8]).replace(
          /box /g,
          ""
        ),
        (curentElem[0] + " " + curentElem[4] + " " + curentElem[8]).replace(
          /box /g,
          ""
        ),
        (curentElem[2] + " " + curentElem[4] + " " + curentElem[6]).replace(
          /box /g,
          ""
        ),
      ];

      let aga = Boolean;

      winPosition.forEach((elem) => {
        if (elem == "cross cross cross") {
          sideBar.style.background = "green";
          playerOne.style.background = "#bbbaba";
          playerTwo.style.background = "#bbbaba";
          deleteEvent = true;
          switch (winPosition.indexOf(elem)) {
            case 0:
              Array.from(box)
                .slice(0, 3)
                .forEach((elem) => {
                  elem.style.color = "green";
                });
              break;
            case 1:
              Array.from(box)
                .slice(3, 6)
                .forEach((elem) => {
                  elem.style.color = "green";
                });
              break;
            case 2:
              Array.from(box)
                .slice(6, 9)
                .forEach((elem) => {
                  elem.style.color = "green";
                });
              break;
            case 3:
              [box[0], box[3], box[6]].forEach((elem) => {
                elem.style.color = "green";
              });
              break;
            case 4:
              [box[1], box[4], box[7]].forEach((elem) => {
                elem.style.color = "green";
              });
              break;
            case 5:
              [box[2], box[5], box[8]].forEach((elem) => {
                elem.style.color = "green";
              });
              break;
            case 6:
              [box[0], box[4], box[8]].forEach((elem) => {
                elem.style.color = "green";
              });
              break;
            case 7:
              [box[2], box[4], box[6]].forEach((elem) => {
                elem.style.color = "green";
              });
              break;
          }
        } else if (counterNum == 9) {
          aga = true;
        }

        if (elem == "zero zero zero") {
          sideBar.style.background = "green";
          playerOne.style.background = "#bbbaba";
          playerTwo.style.background = "#bbbaba";
          deleteEvent = true;
          switch (winPosition.indexOf(elem)) {
            case 0:
              Array.from(box)
                .slice(0, 3)
                .forEach((elem) => {
                  elem.style.color = "green";
                });
              break;
            case 1:
              Array.from(box)
                .slice(3, 6)
                .forEach((elem) => {
                  elem.style.color = "green";
                });
              break;
            case 2:
              Array.from(box)
                .slice(6, 9)
                .forEach((elem) => {
                  elem.style.color = "green";
                });
              break;
            case 3:
              [box[0], box[3], box[6]].forEach((elem) => {
                elem.style.color = "green";
              });
              break;
            case 4:
              [box[1], box[4], box[7]].forEach((elem) => {
                elem.style.color = "green";
              });
              break;
            case 5:
              [box[2], box[5], box[8]].forEach((elem) => {
                elem.style.color = "green";
              });
              break;
            case 6:
              [box[0], box[4], box[8]].forEach((elem) => {
                elem.style.color = "green";
              });
              break;
            case 7:
              [box[2], box[4], box[6]].forEach((elem) => {
                elem.style.color = "green";
              });
              break;
          }
        }
      });

      if (aga == true) {
        sideBar.style.background = "#d48839";
        playerOne.style.background = "#bbbaba";
        playerTwo.style.background = "#bbbaba";
      }
    });
  });
});
