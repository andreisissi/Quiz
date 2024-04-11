export default [
   {
      question: "Dentro de qual elemento HTML colocamos o JavaScript?",
      answers: [
         { text: "<javascript>", correct: false },
         { text: "<js>", correct: false },
         { text: "<script>", correct: true },
         { text: "<scripting>", correct: false },
      ]
   },
   {
      question: "Onde é o lugar correto para inserir Javascript?",
      answers: [
         { text: "No <head> ou no <body>", correct: true },
         { text: "Apenas no <body>", correct: false },
         { text: "Apenas no <head>", correct: false },
         { text: "Em outro lugar", correct: false },
      ]
   },
   {
      question: 'Como chamar uma função chamada "minhaFuncao"?',
      answers: [
        { text: 'call minhaFuncao()', correct: false },
        { text: 'call function minhaFuncao()', correct: false },
        { text: 'minhaFuncao()', correct: true },
        { text: 'Nenhuma das opções', correct: false },
      ]
    },
   {
      question: 'Como escrever "Hello World" numa caixa de alerta?',
      answers: [
        { text: 'msg("Hello World");', correct: false },
        { text: 'alert("Hello World");', correct: true },
        { text: 'msgBox("Hello World");', correct: false },
        { text: 'alertBox("Hello World");', correct: false }
      ]
    },
    {
      question: 'Como podemos criar uma função no JavaScript?',
      answers: [
        { text: 'function:myFunction()', correct: false },
        { text: 'function myFunction()', correct: true },
        { text: 'function = myFunction()', correct: false },
        { text: 'Nenhuma das opções', correct: false }
      ]
    },
]
