const aboutTitle = document.querySelector("#about-title");
const aboutPara = document.querySelector("#about-paragraphs");
const firstProj = document.querySelector("#first-project");
const firstProjText = document.querySelector("#first-project-text");
const secondProj = document.querySelector("#second-project");
const secondProjText = document.querySelector("#second-project-text");
const thirdProj = document.querySelector("#third-project");
const thirdProjText = document.querySelector("#third-project-text");
const fourthProj = document.querySelector("#fourth-project");
const fourthProjText = document.querySelector("#fourth-project-text");

aboutTitle.addEventListener("click", () => {
  if (aboutPara.style.display === "none") {
    aboutPara.style.display = "block";
  } else {
    aboutPara.style.display = "none";
  }
});

firstProj.addEventListener("click", () => {
  if (firstProjText.style.display === "none") {
    firstProjText.style.display = "block";
  } else {
    firstProjText.style.display = "none";
  }
});

secondProj.addEventListener("click", () => {
  if (secondProjText.style.display === "none") {
    secondProjText.style.display = "block";
  } else {
    secondProjText.style.display = "none";
  }
});
thirdProj.addEventListener("click", () => {
  if (thirdProjText.style.display === "none") {
    thirdProjText.style.display = "block";
  } else {
    thirdProjText.style.display = "none";
  }
});
fourthProj.addEventListener("click", () => {
  if (fourthProjText.style.display === "none") {
    fourthProjText.style.display = "block";
  } else {
    fourthProjText.style.display = "none";
  }
});
