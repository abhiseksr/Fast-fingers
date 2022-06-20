let paragraphs =
    `It was just a burger. Why couldn't she understand that. She knew he'd completely changed his life around her eating habits so why couldn't she give him a break this one time. She wasn't even supposed to have found out. Yes he had promised her and yes he had broken that promise but still in his mind all it had been was just a burger. \
There was little doubt that the bridge was unsafe. All one had to do was look at it to know that with certainty. Yet Bob didn't see another option. He may have been able to work one out if he had a bit of time to think things through but time was something he didn't have. A choice needed to be made and it needed to be made quickly. \
The bush began to shake. Brad couldn't see what was causing it to shake but he didn't care. he had a pretty good idea about what was going on and what was happening. He was so confident that he approached the bush carefree and with a smile on his face. That all changed the instant he realized what was actually behind the bush. \
Hopes and dreams were dashed that day. It should have been expected but it still came as a shock. The warning signs had been ignored in favor of the possibility however remote that it could actually happen. That possibility had grown from hope to an undeniable belief it must be destiny. That was until it wasn't and the hopes and dreams came crashing down. \
The robot clicked disapprovingly gurgled briefly inside its cubical interior and extruded a pony glass of brownish liquid. Sir you will undoubtedly end up in a drunkard's grave dead of hepatic cirrhosis it informed me virtuously as it returned my ID card. I glared as I pushed the glass across the table. \
The kids were loud. They were way too loud for Jerry especially since this was a four-hour flight. The parents didn't seem to be able or simply didn't want to control them. They were yelling and fighting among themselves and it was impossible for any of the passengers to concentrate or rest. He thought about politely tapping on the parents' shoulders and asking them to try and get their kids under a bit more control but before he did he came up with a better idea. Sure it was a bit sinister and he'd probably end p in a lot of trouble but he really didn't care at that point. \
There wasn't a whole lot he could do at that moment. He played the situation again and again in his head looking at what he might have done differently to make the situation better. No matter how many times he relived the situation in his head there was never really a good alternative course of action. There simply wasn't a whole lot he could have done in that particular moment. \
I inadvertently went to See's Candy last week I was in the mall looking for phone repair and as it turns out See's Candy now charges a dollar a full dollar for even the simplest of their wee confection offerings. I bought two chocolate lollipops and two chocolate-caramel-almond things. The total cost was four-something. I mean the candies were tasty and all but let's be real: A Snickers bar is fifty cents. After this dollar-per-candy revelation I may not find myself wandering dreamily back into a See's Candy any time soon. \
The alarm went off at exactly as it had every morning for the past five years. Barbara began her morning and was ready to eat breakfast by. The day appeared to be as normal as any other but that was about to change. In fact it was going to change at exactly. \
To the two friends the treehouse was much more than a treehouse. It was a sanctuary away from the other kids where they could be themselves without being teased or bullied. It was their secret fortress hidden high in the branches of a huge oak that only they knew existed. At least that is what they thought. They were more than a little annoyed when their two younger sisters decided to turn the treehouse into a princess castle by painting the inside pink and putting glitter everywhere.`;

let listWords = paragraphs.split(' ');


document.querySelector(".restart").addEventListener("click", e => {
    location.reload();
});


let startIdx = Math.floor(Math.random() * 500);

const textArea = document.getElementById('task');
textArea.innerText = "";

let taskText = [];

console.log(taskText);

let timer = 60;
let pause = 1;
let wrongWords = 0;
let pointerToListWords = startIdx, pointerToTaskText = 0;
let correctWords = 0;
let prevTime = 0;
let frameNum = 0;
let keyStrokes = 0,faltuKeyStrokes = 0;
let dictionary = [];
for (let ascii = 97; ascii < 123; ascii++) {
    dictionary.push(String.fromCharCode(ascii));
}
for (let ascii = 48; ascii < 58; ascii++) {
    dictionary.push(String.fromCharCode(ascii));
}
for (let ascii = 65; ascii < 91; ascii++) {
    dictionary.push(String.fromCharCode(ascii));
}
dictionary.push('.');
dictionary.push(',');
dictionary.push("'");
dictionary.push(" ");
dictionary.push("Backspace");
dictionary.push("-");
dictionary.push("CapsLock");

function insertWords(){
    let cnt = 0;
    pointerToTaskText = 0;
    taskText = [];
    for (let idx = pointerToListWords; 1; idx++) {
        if (listWords[idx].length+cnt>177) break;
        taskText.push(listWords[idx]);
        const word = document.createElement('span');
        word.classList.add(`word${idx}`);
        word.innerText = listWords[idx] + ' ';
        textArea.insertAdjacentElement('beforeend', word);
        cnt += listWords[idx].length+1;
    }
    const currWord = document.querySelector(`.word${pointerToListWords}`);
    currWord.classList.add("currentSpan");
}

let text = "";
insertWords();



function contains(e) {
    for (let idx = 0; idx < dictionary.length; idx++) {
        if (dictionary[idx] === e) return true;
    }
    return false;
}

document.addEventListener("keydown", e => {
    keyStrokes++;
    console.log(e.key);
    if (!contains(e.key)) faltuKeyStrokes++;
    else if (e.key === ' ') {
        const typeArea = document.querySelector(".typeHere");
        typeArea.value = "";
        const prevWord = document.querySelector(`.word${pointerToListWords}`);
        prevWord.classList.remove("currentSpan");
        if (taskText[pointerToTaskText] === text) {
            correctWords++;
        } else {
            faltuKeyStrokes += text.length;
            prevWord.classList.add("wrong");
            wrongWords++;
        }
        pointerToListWords++;
        pointerToTaskText++;
        if (pointerToTaskText>=taskText.length){
            textArea.innerText = "";
            insertWords();
        }
        text = "";
        const currWord = document.querySelector(`.word${pointerToListWords}`);
        currWord.classList.add("currentSpan");
        pause = 0;
    } 
    else if (e.key==="CapsLock");
    else if (e.key === "Backspace") {
        if (text.length > 0) text = text.slice(0, text.length - 1);
        else text = "";
        pause = 0;
        faltuKeyStrokes++;
    } else text += e.key, pause = 0;
});

function paint(currTime) {
    if (timer < 0) return;
    window.requestAnimationFrame(paint);
    if (timer < 0) return;
    frameNum++;
    main();
}

window.requestAnimationFrame(paint);

function main() {
    if (pause === 0 && frameNum % 60 === 0) {
        const timeUp = document.querySelector(".timer");
        timeUp.innerText = timer;
        timer--;
    }
    if (timer < 0) {
        const _ww = document.querySelector(".ww");
        const _cw = document.querySelector(".cw");
        const _acc = document.querySelector(".acc");
        const _ksw = document.querySelector(".ksw");
        const _ksr = document.querySelector(".ksr");
        const _kstt = document.querySelector(".kstt");
        const _score = document.querySelector(".score");

        _ww.innerText = '' + wrongWords;
        _cw.innerText = '' + correctWords;
        _ksw.innerText = '' + faltuKeyStrokes;
        _ksr.innerText = '' + keyStrokes-faltuKeyStrokes;
        _kstt.innerText = '' + keyStrokes;
        _score.innerText = '' + correctWords + ' WPM';
        _acc.innerText = '' + parseInt((keyStrokes-faltuKeyStrokes)*100/(keyStrokes));

        return;
    }
}