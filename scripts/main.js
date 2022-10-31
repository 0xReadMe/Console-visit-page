const app = document.querySelector("#app");
const ascii = document.querySelector("#asciiMain");
const welcomeText = document.querySelector(".typewriter-effect");
const delay = ms => new Promise(res => setTimeout(res, ms));
var firstStart = true;
var width = screen.width;
var height = screen.height;
var resolution1 = document.querySelector('.resolution1');
var resolution2 = document.querySelector('.resolution2');
resolution1.innerHTML = width;
resolution2.innerHTML = height;



app.addEventListener("keypress", async function(event){
  if(event.key === "Enter"){
    await delay(150);
    getInputValue();
   
    removeInput();
    await delay(150);
    new_line();
  }
});

app.addEventListener("click", function(event){
  const input = document.querySelector("input");
  input.focus();
})

async function open_terminal(){
  uptime();
  packages()
  var typed = new Typed('#typed', 
  {
    stringsElement: '#typewriter-effect',
    typeSpeed: 23,
    showCursor: false,
  });
  
// #region Ascii
  createAscii("⠀⠀⠀⠀⠀⠀⠀<span class = \"hair\">⢀⣠⣆⣐⣀⢀⣤⣤⣀⣀⠁⠘⠻⣶⢀⣼⡀</span>⠀⠀       ");
  await delay(randomInteger(150,228));
  createAscii("⠀⠀⠀⠀<span class = \"hair\">⢀⣴⣶⠿⠋⠐⠀⢄⡀⠀⠀⠀⠀⠙⠒⢂⣼⣟⠿⠃</span>⠀⠀⠀");
  await delay(randomInteger(150,228));
  createAscii("⠀⠀<span class = \"hair\">⢀⣤⢯⣏⠁⠀⠀⠀⠀⠘⠾⢷⡄⠀⠀⣄⣠⢶⣿⣄</span>⠀⠀⠀⠀⠀");
  await delay(randomInteger(150,228));
  createAscii("⠀⠀<span class = \"hair\">⣾⠁⠘⠀⠀⠀⠀⠀⠀⠀⡀⠀⠉⢦⡀⠈⠴⠋⣘⣿⣿⣅⠀</span>⠀⠀");
  await delay(randomInteger(150,228));
  createAscii("⠀<span class = \"hair\">⠈⡿⠂⠀⠐⣂⠀⠀⠈⠳⠀⠈⠁⠀⠈⠀⠀⢘⡫⣟⣧⠈⠋⠑⠄</span>⠀");
  await delay(randomInteger(150,228));
  createAscii("⠀⠀<span class = \"hair\">⡗⢠⡀⠀⠈⡩⡒⠤⣤⣱⣤⠀⠈⠛⣲⣲⣽⣮⣠⣀⡉⢶⡄</span>⠀⠀");
  await delay(randomInteger(150,228));
  createAscii("<span class = \"hair\">⠀⣼⠃⣨⡗⣀⡀</span>⠀<span class = \"eyes\">⢀⡞⠟⠉</span><span class = \"hair\">⠹⣔⢶⣊⡟⣟⣯⣿⣿⣿⠻⡕⠇</span>⠀");
  await delay(randomInteger(150,228));
  createAscii("<span class = \"hair\">⢰⣿⡾⠉</span><span class = \"skin\">⣻</span><span class = \"eyes\">⣨⣷⡄⠀⠉</span>⠀⠀<span class = \"hair\">⠀⠋⢸⡟⣹⣽⣿⣿⢟⡻⠷⠬⢆⡰</span>");
  await delay(randomInteger(150,228));
  createAscii("<span class = \"hair\">⡏⣿⣿⢀⡙</span><span class = \"skin\">⣿</span> ⠀⠀⠀<span class = \"mouse\">⢀⣤⠆</span>⠀<span class = \"hair\">⠋⠀⠏⢿⣿⣿⡾⡼⣿⣓⡩</span>⠀");
  await delay(randomInteger(150,228));
  createAscii("<span class = \"hair\">⡇⠻⣿⣶⣿⢿</span><span class = \"skin\">⢧⡄</span>⠀⠀⠀<span class = \"mouse\">⠈</span>⠀⠀⠀<span class = \"skin\">⣠⠏</span>⠀<span class = \"hair\">⠘⣿⣿⣮⡕⠈⠓⠆</span>⠀");
  await delay(randomInteger(150,228));
  createAscii("<span class = \"hair\">⠙⠂⠹⡌⠛⣿⡿⣞</span><span class = \"skin\">⠢⢄⠀⠀⣠⣾⣟</span><span class = \"hair\">⣀⣤⣤⣟⠣</span>⠀⠀⠀⠀⠀⠀");
  await delay(randomInteger(150,228));
  createAscii("<span class = \"hair\">⠀⠀⠀⠉⠂⠹⣆⠀⠀⠀</span><span class = \"skin\">  ⢿⣿⣿⣿⡿⡿⠿⣄</span>⠀⠀⠀⠀⠀⠀");
  await delay(randomInteger(150,228));
  createAscii("⠀⠀⠀⠀⠀⠀ ⠀⠀⠀ <span class = \"skin\">⢀⣼</span>⠙⠋⠈⠀⠀⣴⠟⠋<span class = \"skin\">⡑⠢⡀</span>⠀⠀⠀");
  await delay(randomInteger(150,228));
  createAscii("<span class = \"skin\">⠀⠀⠀⠀⠀⠀⠀⣤</span>⣚⣹⡟⠛⠁⢀⠖⢀⣤⠞⠁⠀⠀⠀⠀<span class = \"skin\">⠱⡄</span>⠀");
  await delay(randomInteger(150,228));
  createAscii("<span class = \"skin\">⠀⠀⠀⠀⠀⠀⢸</span>⢶⡾⠻⡌⢠⠖⠉⠙⣵⠋⠀⠀⠀⠀⠀⠀⠀<span class = \"skin\">⡧</span>⠀");
// #endregion

  await delay(700);
  createText("To view the available commands, type ./help");
  await delay(500);

  new_line();
  
}
function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
async function uptime(){
  var uptime = document.querySelector('.uptime');
  var now_year = new Date().getFullYear();
  var now_month = new Date().getMonth();
  var now_day = new Date().getDay();
  var day_1 = new Date(2022, 9, 30), day_2 = new Date(now_year, now_month+1, now_day);
  uptime.innerHTML = `${(day_2 - day_1) / (60 * 60 * 24 * 1000)}d ${randomInteger(1, 24)}h ${randomInteger(1, 60)}min`;
}

async function packages(){
  var uptime = document.querySelector('.packages');
  uptime.innerHTML = ` ${randomInteger(1, 30000)}`;
}

function new_line(){
  
  const p = document.createElement("p");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  p.setAttribute("class", "path")
  p.textContent = "readme@";
  span1.textContent = "debian:";
  span2.textContent = " ~$";
  p.appendChild(span1);
  p.appendChild(span2);
  app.appendChild(p);
  const div = document.createElement("div");
  div.setAttribute("class", "type")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const input = document.createElement("input");
  if(firstStart == true){
    input.value = "./help";
    firstStart = false;
  }
  div.appendChild(i);
  div.appendChild(input);
  app.appendChild(div);
  input.focus();
}

function removeInput(){
  const div = document.querySelector(".type");
  app.removeChild(div);
}

async function getInputValue(){
  
  const value = document.querySelector("input").value;
  if(value === "./help"){
    trueValue(value);
    createCode("./github", "Github projects.");
    createCode("./social-networks", "Some social networks.");
    createCode("./music", "Yandex.Music playlists.");
    createCode("cat readme.txt", "Some information.");
    createCode("clear", "Clean the terminal.");
    
  }
  else if(value === "./github"){
    trueValue(value);
    createText("<a href='https://github.com/0xReadMe/SchoolMosReg_Parser' target='_blank'><i class='fab fa-github white'></i> SchoolMosReg_Parser</a>")
    createText("<a href='https://github.com/0xReadMe/Parser-Courses' target='_blank'><i class='fab fa-github white'></i> Parser-Courses</a>")
    createText("<a href='https://github.com/0xReadMe/Simple-Blockhain-For-Learning' target='_blank'><i class='fab fa-github white'></i> Simple-Blockhain-For-Learning</a>")
    createText("<a href='https://github.com/0xReadMe/C-Language-Data-Types-' target='_blank'><i class='fab fa-github white'></i> C-Language-Data-Types</a>")
  }
  else if(value === "cat readme.txt"){
    trueValue(value);
    createText("Hello, %username%!")
    createText("If you are reading this file, then you are wondering what the author of this could have written about himself.txt file.")
    createText("The author is an ordinary person who has fallen in love with such an activity as programming.")
    createText("The main programming language: C# <3")
    createText("The main OS: Linux (Debian 11) <3")
    createText("Favorite game: Chess(etc.) <3")
    createText("The file can sometimes be supplemented ;-)")
  }
  else if(value === "./social-networks"){
    trueValue(value);
    createText("<a href='https://github.com/0xReadMe' target='_blank'><i class='fab fa-github white'></i> github.com/0xReadMe</a>")
    createText("<a href='https://t.me/OxReadMe' target='_blank'><i class='fa-brands fa-telegram'></i> telegram</a>")
    createText("<a href='https://music.yandex.ru/users/readmynameya/playlists' target='_blank'><i class=\"fa-solid fa-music\"></i> readme/playlists</a>")
  }
  else if(value === "./music"){
    trueValue(value);
    createCode("<a href='https://music.yandex.ru/users/readmynameya/playlists/1022' target='_blank'><i class=\"fa-solid fa-music\"></i> fckn_eternity</a>", "Melancholy with me?")
    createCode("<a href='https://music.yandex.ru/users/readmynameya/playlists/1016' target='_blank'><i class=\"fa-solid fa-music\"></i> fckn_rock</a>", "Do you have a sense of music?")
    createCode("<a href='https://music.yandex.ru/users/readmynameya/playlists/1013' target='_blank'><i class=\"fa-solid fa-music\"></i> fckn_rip</a>", "Dance with me?")
    createCode("<a href='https://music.yandex.ru/users/readmynameya/playlists/1011' target='_blank'><i class=\"fa-solid fa-music\"></i> fckn_phonk</a>", "Background music")
    createCode("<a href='https://music.yandex.ru/users/readmynameya/playlists/1021' target='_blank'><i class=\"fa-solid fa-music\"></i> fckn_young</a>", "18-")
    createCode("<a href='https://music.yandex.ru/users/readmynameya/playlists/1005' target='_blank'><i class=\"fa-solid fa-music\"></i> fckn_love</a>", "Really love?")
    createCode("<a href='https://music.yandex.ru/users/readmynameya/playlists/1007' target='_blank'><i class=\"fa-solid fa-music\"></i> fckn_classic</a>", "It is classic, lol")
    createCode("<a href='https://music.yandex.ru/users/readmynameya/playlists/1015' target='_blank'><i class=\"fa-solid fa-music\"></i> fckn_boys(EN)</a>", "Background music")
    createCode("<a href='https://music.yandex.ru/users/readmynameya/playlists/1017' target='_blank'><i class=\"fa-solid fa-music\"></i> fckn_boys(RU)</a>", "Dont listen this")
    createCode("<a href='https://music.yandex.ru/users/readmynameya/playlists/1008' target='_blank'><i class=\"fa-solid fa-music\"></i> fckn_time</a>", "Dont waste a time")
    createCode("<a href='https://music.yandex.ru/users/readmynameya/playlists/1024' target='_blank'><i class=\"fa-solid fa-music\"></i> fckn_system</a>", "Drug'N'drop?)")
    createCode("<a href='https://music.yandex.ru/users/readmynameya/playlists/1023' target='_blank'><i class=\"fa-solid fa-music\"></i> fckn_girls</a>", "Dont write me")
    createCode("<a href='https://music.yandex.ru/users/readmynameya/playlists/1019' target='_blank'><i class=\"fa-solid fa-music\"></i> !=love</a>", "Try to ask me, what is this")
  }
  else if(value === "clear"){
    let a = document.querySelectorAll("p");
    a.forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("section").forEach(e => e.parentNode.removeChild(e));
  }
  else{
    falseValue(value);
    createText(`Command not found: ${value}`)
    createText(`Please enter ./help for see all commands`)
  }
}

function trueValue(value){
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "sucess")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function falseValue(value){
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone error")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "error")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function createAscii(text){
  const p = document.createElement("span");
  p.className = "ascii"
  p.innerHTML = text;
  ascii.appendChild(p);
}

function createText(text, classname){
  const p = document.createElement("p");
  p.innerHTML = text;
  app.appendChild(p);
}

function createCode(code, text){
  const p = document.createElement("p");
  p.setAttribute("class", "code");
  p.innerHTML =
  `${code} <br/><span class='text'> ${text} </span>`;
  app.appendChild(p);
}

open_terminal();

