"use strict";

let navTag = document.getElementsByTagName("nav")[0];
let divTag = document.getElementsByClassName("img-inspector")[0];

let currentRightPosition = 0;
let currentUpPosition = 0;
let defaultBackgroundSize = 100;

navTag.addEventListener("click", function(e) {
  if (
    e.target.dataset.action == "move" &&
    e.target.dataset.direction == "right"
  ) {
    divTag.setAttribute(
      "style",
      `background-position-x: ${(currentRightPosition += 10)}px; background-position-y: ${currentUpPosition}px;`
    );
  }
  if (
    e.target.dataset.action == "move" &&
    e.target.dataset.direction == "left"
  ) {
    divTag.setAttribute(
      "style",
      `background-position-x: ${(currentRightPosition -= 10)}px; background-position-y: ${currentUpPosition}px;`
    );
  }
  if (e.target.dataset.action == "move" && e.target.dataset.direction == "up") {
    divTag.setAttribute(
      "style",
      `background-position-x: ${currentRightPosition}px; background-position-y: ${(currentUpPosition -= 10)}px;`
    );
  }
  if (
    e.target.dataset.action == "move" &&
    e.target.dataset.direction == "down"
  ) {
    divTag.setAttribute(
      "style",
      `background-position-x: ${currentRightPosition}px; background-position-y: ${(currentUpPosition += 10)}px;`
    );
  }
});

navTag.addEventListener("click", function(e) {
  if (e.target.dataset.action == "zoom" && e.target.dataset.direction == "in") {
    divTag.setAttribute(
      "style",
      `background-size: ${(defaultBackgroundSize += 20)}%;`
    );
  }
  if (defaultBackgroundSize > 100) {
    if (
      e.target.dataset.action == "zoom" &&
      e.target.dataset.direction == "out"
    ) {
      divTag.setAttribute(
        "style",
        `background-size: ${(defaultBackgroundSize -= 20)}%;`
      );
    }
  }
});
