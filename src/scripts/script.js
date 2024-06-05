
document.addEventListener('DOMContentLoaded', function () {
    const dataInput = document.getElementById('data');
    const today = new Date();
    const maxDate = new Date();
    maxDate.setDate(today.getDate() + 7);

    const formatDate = (date) => {
        const d = new Date(date);
        let month = '' + (d.getMonth() + 1);
        let day = '' + d.getDate();
        const year = d.getFullYear();

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        return [year, month, day].join('-');
    };

    dataInput.setAttribute('min', formatDate(today));
    dataInput.setAttribute('max', formatDate(maxDate));

    // Previne a entrada manual no campo
    dataInput.addEventListener('keydown', function (e) {
        e.preventDefault();
    });

    // Abre o calendário ao clicar em qualquer parte do input
    dataInput.addEventListener('focus', function (e) {
        dataInput.showPicker();
    });

    // Previne a seleção de domingos
    dataInput.addEventListener('input', function () {
        const inputDate = new Date(dataInput.value);
        if (inputDate.getDay() === 6) {
            alert("Seleção de domingos não é permitida.");
            dataInput.value = '';
        }
    });
});

//Função para mostrar as horas disponíveis 
function abrirHorarios(){
    let horas = document.getElementById("horarios")
    horas.style.display="grid"
    document.querySelector(".form p").style.display="none"
}

//Função para fechar as horas disponiveís
function fechaHorarios(){
    let horas = document.getElementById("horarios")
    horas.style.display='none'
    document.querySelector(".form p").style.display="block"
}

/*Função para adicionar cor de fundo ao selecionar a hora desejada */
function hora(event) {
    let opcao = event.currentTarget.parentNode; // Captura o elemento pai do input (ou seja, o label)
  
    // Verifica se o elemento clicado já possui a classe 'background-add'
    if (opcao.classList.contains('background-add')) {
      opcao.classList.remove('background-add'); // Remove a classe se já estiver presente
      
    } else {
      
      let labels = document.querySelectorAll('#horarios label');
    
      // Remove a classe 'background-add' de todos os labels
      labels.forEach(label => {
        if (label.classList.contains('background-add')) {
        
          label.classList.remove('background-add');
        }
      });
  
      // Adiciona a classe 'background-add' ao elemento clicado
      opcao.classList.add('background-add');
    
    }

  }

  /*Função para adicionar borda ao selecionar o tipo de serviço */
function borda(event) {
    let opcao = event.currentTarget.parentNode; // Captura o elemento pai do input (ou seja, o label)

    // Verifica se o elemento clicado já possui a classe 'borda-adicionada'
    if (opcao.classList.contains('borda-adicionada')) {
        opcao.classList.remove('borda-adicionada'); // Remove a classe se já estiver presente
    } else {
        let labels = document.querySelectorAll('#service-option label');

        // Remove a classe 'borda-adicionada' de todos os labels
        labels.forEach(label => {
            if (label.classList.contains('borda-adicionada')) {
                label.classList.remove('borda-adicionada');
            }
        });

        // Adiciona a classe 'borda-adicionada' ao elemento clicado
        opcao.classList.add('borda-adicionada');
    }
}

  


