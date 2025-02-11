const typeName = document.getElementsByName("input");

setType(locals.type);
setCategory(locals.category)

function revealAnswer()
{
    const answerCard = document.getElementById('reveal-answer');
    const questionButton = document.getElementById('question-button');
    answerCard.classList.toggle('remain-hidden');
    questionButton.classList.toggle('remain-hidden');
};

function setType(typeName)
{
    const type1 = document.getElementById('type-1');
    const type2 = document.getElementById('type-2');

    switch (typeName)
    {
        case 'single':
            type1.setAttribute('active');
            break;
        case 'twopart':
            type2.setAttribute('active');
            break;
        default:
            break;
    }
}

function setCategory(categoryName)
{
    const category1 = document.getElementById('category1');
    const category2 = document.getElementById('category2');
    const category3 = document.getElementById('category3');
    const category4 = document.getElementById('category4');
    const category5 = document.getElementById('category5');
    const category6 = document.getElementById('category6');
    const category7 = document.getElementById('category7');

    switch (categoryName)
    {
        case 'any':
            category1.setAttribute('active');
            break;
        case 'misc':
            category2.setAttribute('active');
            break;
        case 'programming':
            category3.setAttribute('active');
            break;
        case 'pun':
            category4.setAttribute('active');
            break;
        case 'spooky':
            category5.setAttribute('active');
            break;
        case 'dark':
            category6.setAttribute('active');
            break;
        case 'christmas':
            category7.setAttribute('active');
            break;
        default:
            category1.setAttribute('active');
            break;
    }

}
