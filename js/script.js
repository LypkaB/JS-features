document.addEventListener('DOMContentLoaded', () => {
    const btnReset = document.getElementById('reset'),
          btnYes = document.getElementById('yes'),
          btnNo = document.getElementById('no'),
          blockQuestion = document.querySelector('.question'),
          startText = blockQuestion.textContent;

    const handler = () => {
        let step = 0;

        const questions = [
            'The content in the block is related by meaning?',
            'Does the content in the block relate to the rest of the page?',
            'Is the content self-contained?'
        ];

        const answers = ['div', 'aside', 'section', 'article'];

        return (event) => {
            btnNo.style.display = 'inline-block';

            const theEnd = () => {
                btnYes.style.display = 'none';
                btnNo.style.display = 'none';

                blockQuestion.style.fontSize = '30px';
                blockQuestion.style.cursor = 'pointer';
                blockQuestion.textContent = `<${blockQuestion.textContent}>`;
                blockQuestion.addEventListener('click', init);
            };

            if (event.target === btnYes) {
                blockQuestion.textContent = questions[step];
                if (step === questions.length) {
                    blockQuestion.textContent = answers[step];
                    theEnd();
                }
            }

            if (event.target === btnNo) {
                blockQuestion.textContent = answers[step - 1];
                theEnd();
            }

            step += 1;
        }
    };

    let start = handler();

    const init = () => {
        blockQuestion.removeEventListener('click', init);

        btnNo.style.display = 'none';
        btnYes.style.display = 'inline-block';

        blockQuestion.textContent = startText;

        blockQuestion.style.fontSize = '';
        blockQuestion.style.cursor = '';

        btnYes.removeEventListener('click', start);
        btnNo.removeEventListener('click', start);

        start = handler();
        btnYes.addEventListener('click', start);
        btnNo.addEventListener('click', start);
    };

    btnReset.addEventListener('click', init);

    init();
});