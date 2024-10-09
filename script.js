document.getElementById('runCode').addEventListener('click', function() {
    var code = document.getElementById('codeEditor').value;
    var iframe = document.getElementById('outputFrame');
    iframe.src = 'data:text/html;charset=utf-8,' + encodeURIComponent(code);
  });

  function checkQuiz() {
    const form = document.getElementById('quizForm');
    const result = document.getElementById('quizResult');
    
    let score = 0;
    
    if (form.q1.value === 'b') score++;
    if (form.q2.value === 'b') score++;
    if (form.q3.value === 'b') score++;
    
    result.innerHTML = `You scored ${score}/3!`;
  }
  