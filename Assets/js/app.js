const modalContainer = document.querySelector(".modal-container");

const appendChildren = (parent, elements) => {
  elements.forEach((element) => {
    parent.appendChild(element);
  });
};

const modalWindow = document.createElement("div");
modalWindow.classList.add("modal-window");

const modalHeader = document.createElement("header");
const modalHeaderText = document.createElement("h2");

const modalHeaderBtnContainer = document.createElement("span");
const modalHeaderBtn = document.createElement("a");
modalHeaderBtn.innerHTML = "&times;";
modalHeaderBtnContainer.appendChild(modalHeaderBtn);

appendChildren(modalHeader, [modalHeaderText, modalHeaderBtnContainer]);

appendChildren(modalWindow, [modalHeader]);

modalContainer.appendChild(modalWindow);
