const modalContainer = document.querySelector(".modal-container");

const appendChildren = (parent, elements) => {
  elements.forEach((element) => {
    parent.appendChild(element);
  });
};

const modalWindow = document.createElement("div");
modalWindow.classList.add("modal-window");

const modalHeader = document.createElement("header");
modalHeader.classList.add("modal-header");
const modalHeaderText = document.createElement("h2");
modalHeaderText.textContent = "Welcome";

const modalHeaderBtnContainer = document.createElement("span");
modalHeaderBtnContainer.classList.add("x-btn-container");
const modalHeaderBtn = document.createElement("a");
modalHeaderBtn.innerHTML = "&times;";
modalHeaderBtnContainer.appendChild(modalHeaderBtn);

appendChildren(modalHeader, [modalHeaderText, modalHeaderBtnContainer]);

const modalBody = document.createElement("article");
modalBody.classList.add("modal-body");

const modalBodyHeader = document.createElement("header");
modalBodyHeader.classList.add("body-header");
const modalBodyHeaderHgroup = document.createElement("hgroup");

const modalBodyHeaderTextOne = document.createElement("h3");
modalBodyHeaderTextOne.textContent = "You have reached my website!";

const modalBodyHeaderTextTwo = document.createElement("h4");
modalBodyHeaderTextTwo.textContent =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit.";

appendChildren(modalBodyHeaderHgroup, [
  modalBodyHeaderTextOne,
  modalBodyHeaderTextTwo,
]);

modalBodyHeader.appendChild(modalBodyHeaderHgroup);

const modalFooter = document.createElement("footer");
modalFooter.classList.add("modal-footer");

const modalYesBtn = document.createElement("button");
modalYesBtn.classList.add("modal-btn");
modalYesBtn.textContent = "Yes";

const modalNoBtn = document.createElement("button");
modalNoBtn.classList.add("modal-btn");
modalNoBtn.textContent = "No";

const modalHelpBtn = document.createElement("button");
modalHelpBtn.classList.add("modal-btn");
modalHelpBtn.textContent = "Help";

appendChildren(modalFooter, [modalYesBtn, modalNoBtn, modalHelpBtn]);

appendChildren(modalBody, [modalBodyHeader, modalFooter]);

appendChildren(modalWindow, [modalHeader, modalBody]);

modalContainer.appendChild(modalWindow);
