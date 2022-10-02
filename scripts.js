const getDivSolucao     = document.querySelector(".solucao");
    const getSelect         = document.querySelector('#tipoOperacao');
    const h2                = document.querySelector('h2');
    const l1                = document.querySelector('#labelTop') ;   
    const l2                = document.querySelector('#labelBotton') ;
    let inputTop            = document.querySelector('.inputTop');
    let inputBotton         = document.querySelector('.inputBotton');
    let submit              = document.querySelector('.submit');
    montarHipotenusa();
    let contOperacao = 0; // utilizado para contar a chamada da funcao defineOpercao.
    
   
    function definirOperacao(){
        
        let index = getSelect.selectedIndex; // pega o indice do html select
        contOperacao++;
        if(contOperacao>1 && index !=0){limparCampos()}

        switch(index){
            case 0:
                montarHipotenusa();
                 
                break;
            case 1:
                montarCatetoA();
          
                break;
            case 2:
                montarCatetoB();
          
                break;
        }
    }

    function calcular(){
        let index = getSelect.selectedIndex;
        let a = inputTop.value;
        let b = inputBotton.value;
        let resultado=null;   

        if (validar()){
            
            switch(index){
                case 0:
                   // input a--> label a
                   // input b--> label b
                    resultado = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
                    getDivSolucao.innerText = `Hipotenusa = ${resultado}`;
                    break;

                case 1:
                    // input a--> label c
                    // input b--> label b
                    resultado = Math.sqrt(Math.pow(a,2) - Math.pow(b,2));
                    getDivSolucao.innerText = `Cateto A = ${resultado}`;
                    break;

                case 2:
                    // input a--> label c
                    // input b--> label a
                    resultado = Math.sqrt(Math.pow(a,2) - Math.pow(b,2));
                    getDivSolucao.innerText = `Cateto B = ${resultado}`;
                    break;
            }
        }
    }
   
    function limparCampos(){
        h2.innerHTML='';
        l1.innerHTML='';
        l2.innerHTML='';
    }
    
    function montarHipotenusa(){
        h2.innerHTML='c = &#8730;<span class="squareRoot"> a² + b²</span>';
        l1.innerHTML='a';
        l2.innerHTML='b';
        getDivSolucao.innerHTML='';
    }

    function montarCatetoA(){
        h2.innerHTML='a = &#8730;<span class="squareRoot"> c² - b²</span>';
        l1.innerHTML='c';
        l2.innerHTML='b';
        getDivSolucao.innerHTML='';
    }

    function montarCatetoB(){
        h2.innerHTML='b = &#8730;<span class="squareRoot"> c² - a²</span>';
        l1.innerHTML='c';
        l2.innerHTML='a';
        getDivSolucao.innerHTML='';
    }

    function validar(){
        let index = getSelect.selectedIndex;
        let resultado = true;
        let a = inputTop.value;
        let b = inputBotton.value
        if(a == ''){
            inputTop.classList.add('validacao');
            resultado = false;
        }
        if(a == '0'){
            getDivSolucao.innerHTML='Zero não pode ser calculado';
            getDivSolucao.style.color = 'tomato';
            resultado = false;
        }
        if(b == ''){
            inputBotton.classList.add('validacao');
            resultado = false;
        }
        if(b == '0'){
            getDivSolucao.innerHTML='Zero não pode ser calculado';
            getDivSolucao.style.color = 'tomato';
            resultado = false;
        }
        if(b > a && index == 1){
            // input a--> label c
            // input b--> label b
            getDivSolucao.innerHTML ='B não pode ser maior que C';
            getDivSolucao.style.color = 'tomato';
            resultado = false;
        }
        if(b > a && index == 2){
            // input a--> label c
            // input b--> label a
            getDivSolucao.innerHTML ='A não pode ser maior que C';
            getDivSolucao.style.color = 'tomato';
            resultado = false;
        }
               
        return resultado;
    }

    function limparValidacao(){
        inputTop.classList.remove('validacao');
        inputBotton.classList.remove('validacao');
        getDivSolucao.innerHTML='';
        getDivSolucao.removeAttribute('style');
    }
   
    getSelect.addEventListener("change", definirOperacao );
    submit.addEventListener("click", calcular);
    inputTop.addEventListener("click", limparValidacao);
    inputBotton.addEventListener("click", limparValidacao);
   