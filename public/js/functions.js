function revealAnswer()
{
    const answerCard = document.getElementById('reveal-answer');
    const questionButton = document.getElementById('question-button');
    answerCard.classList.toggle('remain-hidden');
    questionButton.classList.toggle('remain-hidden');
};