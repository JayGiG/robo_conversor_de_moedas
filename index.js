const puppeteer = require('puppeteer');
const readlineSync = require('readline-sync');

console.log("Bem vindo ao Bot conversor 🤖💰 ");

//Abrindo o navegador
//Criando uma aba nova 
//Preeenchendo o endereço
//Tirando um print
//Fechando o navegador

async function robo() {
    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();

    const moedaBase = readlineSync.question('Informe uma moeda base: ') || 'dolar';    
    const moedaFinal = readlineSync.question('Informe uma moeda desejada: ') || 'real';
    const qualquerUrl = `https://www.google.com/search?q=${moedaBase}+em+${moedaFinal}&oq=${moedaBase}+&aqs=chrome.2.69i57j0l4j0i10i433j0j0i10i433.3537j1j7&sourceid=chrome&ie=UTF-8`;
   
    //Preenchendo o endereço no navegador e tirando um print
    await page.goto(qualquerUrl);
    // await page.screenshot({path: 'example.png'});
  
    //Pegando o valor do Input do navegador
    const resultado = await page.evaluate(() => {
        return document.querySelector('.a61j6.vk_gy.vk_sh.Hg3mWc').value;
    });

    console.log(`O valor de 1 ${moedaBase} em ${moedaFinal} é ${resultado}`)

    //Fechando navegador
    await browser.close();
}

robo();