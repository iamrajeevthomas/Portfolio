function home() {
  let about_text = document.querySelector(".para1");
  about_text.innerHTML = `Resourceful software developer skilled in latest technologies and having expertise in building <br>applications
    to solve bussiness problems with an<br> intent to create an impactful result and produce<br> surreal user experience.`;
}
function academics() {
  let details =
    "Reva University\nBachelor of Computer Applications(BCA)\t\t2022-2025\nCGPA:9.2\n\n Lady Anusuya Singhania Educational Academy\nIntermediate in Science(from CBSE Board)\nPercentage:78%\n\nSacred Heart School\nMatriculation(from ICSE Board)\nPercentage:81%";
  aca = document.querySelector(".para1");
  aca.innerText = details;
}

function skills() {
  let my_skills =
    "Programming Languages:\n C,C++,Core Java,Python\n\nWeb Technologies:\nHTML,CSS,Java Script\n\nDeveloper Tools:\nVscode,Github";
  let skills_text = document.querySelector(".para1");
  skills_text.innerText = my_skills;
}

function projects() {
  let my_projects =
    "Rock Paper Scissors Game version-1:\nMode:Console\nLanguage used:C\n\nRock Papers Scissors Game version-2\nWeb Technologies used:HTML,CSS,Javascript\n\nMyntra Website landing Page Clone\nWeb Technologies used:HTML,CSS";
  p = document.querySelector(".para1");
  p.innerText = my_projects;
}
function hobbies() {
  let my_hobbies = "Photography\n\nBadminton\n\nChess";
  let hobbies_text = document.querySelector(".para1");
  hobbies_text.innerText = my_hobbies;
}
