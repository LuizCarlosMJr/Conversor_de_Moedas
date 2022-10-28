const button = document.getElementById('convert-button');
const select = document.getElementById('currency-select');
const dolar = 5.2
const euro = 5.9
const bitcoin = 101529.52

const convertValue = () => {
    const input = document.getElementById('inputReal').value
    

    //Atualizando os valores
    const realValueText = document.getElementById('text-value-real')
    realValueText.innerHTML = input
    const curencyValuetext = document.getElementById('text-value-dolar')
    //Modo Antigo => curencyValuetext.innerHTML = input/dolar
    
    // Biblioteca JS Number Format
    
     //Valor em Rais
     realValueText.innerHTML = new Intl.NumberFormat ('pt-BR',
     {style: 'currency', currency: 'BRL'}).format(input)

    //Valor em Dólar
    if (select.value === 'US$ Dólar Americano') {
        curencyValuetext.innerHTML = new Intl.NumberFormat ('en-US',
        {style: 'currency', currency: 'USD'}).format(input/dolar)
    }
     //Valor em Euro
     if (select.value === '€$ Euro') {
        curencyValuetext.innerHTML = new Intl.NumberFormat ('de-De',
     {style: 'currency', currency: 'EUR'}).format(input/euro) 
     }
    
    //Valor em Bitcoin
    if (select.value === '₿$ Bitcoin') {
        curencyValuetext.innerHTML = new Intl.NumberFormat ('de-De',
        {style: 'currency', currency: 'BTC'}).format(input/bitcoin)
    }
}

changeCurrency = ()=>{ //Toda vez que detecta um evento de change(mudança)
    
    const currencyName = document.getElementById('curency-name')
    const currencyImg = document.getElementById('currency-img')
   
    if( select.value === '€$ Euro'){
        currencyName.innerHTML = "Euro"
        currencyImg.src ="./assets/imgEuro.png"
    }
    if( select.value === 'US$ Dólar Americano'){
        currencyName.innerHTML = "Dólar Americano"
        currencyImg.src ="./assets/imgEUA.png"
    }
    if( select.value === '₿$ Bitcoin'){
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src ="./assets/imgBITc.png"
    }
    convertValue()
}

button.addEventListener('click', convertValue)
select.addEventListener('change', changeCurrency)