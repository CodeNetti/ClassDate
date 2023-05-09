let rep;
let ListeningExibir = false;

const btnExibir = document.getElementById("Exibir");
const btnParar = document.getElementById("Parar");

let mes_ext = new Array(
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
);
let sema = new Array(
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"
);

function Repetir() {
    // iniciando a class Date sem parâmetro faz com que ela pegue a data atual da maquina
    let h = new Date();

    /* recebendo o dia do mês */
    let dia = h.getDate();

    if (dia < 10) dia = "0" + dia;

    /* recebendo o mês */
    let mes = h.getMonth(); // capturando o mês, nesse caso mes = 4(maio)

    mes = mes + 1; // no js o meses estão organizados de 0 a 11 por isso somar mais 1

    if (mes < 10) mes = "0" + mes; // formatando os meses com menos de 2 digitos

    /* recebendo o ano com 4 dígitos */
    let ano = h.getFullYear();

    /* recebendo a hora do sistema */
    let hora = h.getHours();

    if (hora < 10) hora = "0" + hora;

    /* recebendo o minuto do sistema */
    let minu = h.getMinutes();

    if (minu < 10) minu = "0" + minu;

    /* recebendo o segundo do sistema */
    let segu = h.getSeconds();

    if (segu < 10) segu = "0" + segu;

    /* recebendo o dia da semana do sistema */
    let sm = h.getDay();

    document.getElementById("txtdia").value = dia;
    document.getElementById("txtmes").value = mes;
    document.getElementById("txtano").value = ano;

    document.getElementById("txtmesext").value = mes_ext[mes - 1];

    document.getElementById("txthor").value = hora;
    document.getElementById("txtmin").value = minu;
    document.getElementById("txtseg").value = segu;

    document.getElementById("txtsema").value = sema[sm];
}

// aqui temos uma variavél Reference Type que aponta para um ponto da mémoria igual um array
btnExibir.addEventListener("click", () => {
    if (ListeningExibir == false) {
        rep = setInterval(Repetir, 1000);
        console.log("btnExibir");
        ListeningExibir = !ListeningExibir;
    }
});

// aqui usamos a referencia para limpar o setInterval
btnParar.addEventListener("click", () => {
    if (ListeningExibir) {
        clearInterval(rep);
        console.log("btnParar");
        ListeningExibir = !ListeningExibir;
    }
});
