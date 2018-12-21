'use strict';

/* 
 * Defining current question number and score values 
 * in attribute values of .data-no and data-right stored in <div>
 * 4 functions below will get or set of these values.
 */
function getCurrentNum () {
  return parseInt($('.js-content').attr('data-no'), 10);
}

function setCurrentNum (num) {
  $('.js-content').attr('data-no', num);
}

function getRightCnt() {
  return parseInt($('.js-content').attr('data-right'), 10);
}

function setRightCnt (num) {
  $('.js-content').attr('data-right', num);
}

/* Get Html to show current question number and score */
function getStatusHtml() {  
  return `<div class='status_bar'>
            <span>Question ${getCurrentNum() + 1} / ${DATA_SOURCE.length}</span>
            <span>Score ${getRightCnt()}</span>
          </div>`;
}

/* Get the list of multiple answers in html in Radio type */
function getAnswerHtml (arrAns) {

  let ansHtml = arrAns.map( function (item, ind) {
    return `
      <div class='qna_text answer'>
        <label class='custom_radio' for='${ind}'>
          <input type='radio' id='${ind}' name='answer' value='${ind}' required>  
          ${item.text}
        </label>
      </div>`;
  });

  return `
      <form class='js-submit'>
        <fieldset name='AnswerOption'>
          ${ansHtml.join("")}
        </fieldset>
      </form>`;
  
}
/* Adding a button to submit the answer - this is not needed in review page */
function addSubmitButton() {
  $('.js-submit').append(`
          <div style='margin-left: 40px; margin-bottom: 30px;'>
          <button type='submit'>Submit</button>
        </div>`);
}

function getImgHtml(objQ) {
  return `
      <img class='frame' src='${objQ.src}' alt='${objQ.alt}'>`;
  
}
function getQuestionHtml(strQ) {
  return `      
    <div class='question'>
      <span class='qna_text'>${strQ}</span>
    </div>`;
}

function renderQuestionPage() {
  //console.log(q + imgSrc + imgAlt + ansHtml);
  const index = getCurrentNum();    
  const objQ = DATA_SOURCE[index];

  $('div.js-content').html(`
    <div class='col-6 content'>
      ${getImgHtml(objQ)}
    </div>
    <div class='col-6 content'>
      ${getStatusHtml()}
      ${getQuestionHtml(objQ.question)}         
      ${getAnswerHtml(objQ.ans)}
    </div>`);

    /* Add Submit Button in <form> */
    addSubmitButton();
    $('span.qna_text').before(`Q${index + 1}. `);  /* Add a question number in front of question */
    $(window).scrollTop(0);

}

function handleStart() {
  shuffleQueston();  /* Shuffle Questions and AnswerSets */
 $('.js-start').click(renderQuestionPage);
}

/* Return the index of key answer (e.g., 0 - 3) */
function getKey(qIndex) {
    const objKey = (DATA_SOURCE[qIndex].ans.find(a => a.chk === true));
    return DATA_SOURCE[getCurrentNum()].ans.indexOf(objKey);
}

function getCorrectHtml() {
  return `
    <div class='correct'>
      Correct! ${['Great Job!', 'Nicely Done', 'Wow'][Math.floor(Math.random() * 3)]}
    </div>`;
}

function getWrongHtml() {
  return `
    <div class='wrong'>
      Incorrect! ${['Sorry!', 'Uh-oh', 'Oops'][Math.floor(Math.random() * 3)]}
    </div>`;
}

/* Showing submitted answer and correct answer */
function renderCheckPage(myAns) {
  const index = getCurrentNum();
  const key = getKey(index);
  let resultHtml;  // Result HTML
  
  if (myAns === key) {
    setRightCnt(getRightCnt() + 1);
    resultHtml = getCorrectHtml();
  } else {
    resultHtml = getWrongHtml();
  }

  $('.js-content').html(`
      <div class='col-12'>
        <div class='ans_box'>
          ${resultHtml}
          ${getStatusHtml()}
          <hr>
          ${getQuestionHtml(DATA_SOURCE[index].question, index)}         
          ${getAnswerHtml(DATA_SOURCE[index].ans)}
          <div class='al_right'>
            <button class='js-next'>Next</button>
            <div class='key_press'>Or press any key</div>
          </div>
        </div>
      </div>`);         
      
  $('span.qna_text').before(`Q${index + 1}. `);
  $('label').removeClass('custom_radio').addClass('chk_ans');  /* Adding default bullet instead of radio button */
  $(`input[type='radio']`).remove();  /* Remove all radio button - in check page */
  
  $(`label[for='${myAns}']`).addClass('wrong_ans'); /* Insert red bullet to show incorrect answer */ 
  $(`label[for='${key}']`).removeClass('wrong_ans').addClass('correct_ans');  /* Show correct answer with green bullet */

  $('.js-next').focus();    /* Focus on Next button; then key press can be detected */
  $(window).scrollTop(0);   /* Scroll up to the top */
  


}

/* Upon submitting answer */
function handleSubmit() {
  $('.js-content').on('submit', 'form', function (event) {
    event.preventDefault();
    const myAns = parseInt($(this).find('input:checked').val());
    renderCheckPage(myAns);
  });
}

function getFinalReportHtml() {  
  const rightCnt = getRightCnt();
  const totalCnt = DATA_SOURCE.length;
  const score = rightCnt / totalCnt;

  return `
      <div>You<br>Got a Score of
        <div class='correct'>${rightCnt / totalCnt * 100} / 100</div>
      </div>`;
}

/* Final page to review the score */
function renderFinalPage() {
  console.log("final page");
  $('.js-content').html(`
      <div class='col-12'>
        <div class='ans_box al_center qna_text'>
          ${getFinalReportHtml()}
          <div class='content'>
          <button class='js-restart'>Play Again</button>
          </div>
        </div>
        <div class='al_center content'>
          <img class='logo' src='http://cfile25.uf.tistory.com/original/197D2E244B84D8564AB57C'>
        </div>
      </div>`);         
}

function renderNextPage() {
  const index = getCurrentNum();
      /* 
      * Check if the user reach the last question.
      * Go to the next question or final page for score
      */
  if (index < DATA_SOURCE.length - 1) {
    setCurrentNum(index + 1);
    renderQuestionPage();
  } else {
    renderFinalPage();
  }
}

function handleNextQuestion() {
  /* detects 2 different events 1) user clicks "Next" button or 2) press any key */
  $('.js-content').on('click', 'button.js-next', renderNextPage);
  $('.js-content').on('keypress', '.js-next', renderNextPage);

}

/* Shuffle Questions and AnswerSets in global array */
function shuffleQueston() {
  DATA_SOURCE.sort(_=>Math.random() - 0.5);
  for (let i = 0; i < DATA_SOURCE.length; i++) {
    DATA_SOURCE[i].ans.sort(_=> Math.random() - 0.5);
  }
}

function handleRestart() {
  $('.js-content').on('click', 'button.js-restart', _=> {
   shuffleQueston();  /* Shuffle the order of questions and answers */
   setCurrentNum(0);  /* Start from the first question */
   setRightCnt(0);    /* Reset Score count */
   renderQuestionPage(); 
  });
}

/*  Hanle 4 events   */
function handleQuizEvent(){
  handleStart();        // Upon clicking "Start" button
  handleSubmit();       // Upon submitting answer
  handleNextQuestion(); // Upon clicking to the next question
  handleRestart();      // Upon clicking "Play Again" button
}

$(handleQuizEvent);
