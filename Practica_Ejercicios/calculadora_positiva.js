const sumar = (numero1, numero2) => numero1 + numero2;
const restar = (numero1, numero2) => numero1 - numero2;

const sumando = (numero1, numero2) => {
    return new Promise((resolve, reject) => {
        if (numero1 === 0 || numero2 === 0) {
        reject("Operación innecesaria");
        } else {
        let resultado = sumar(numero1, numero2);
        if (resultado < 0) {
            console.log("La calculadora sólo debe devolver valores positivos");
        } else {
            resolve(resultado);
        }
        }
    });
};

const restando = (numero1, numero2) => {
    return new Promise((resolve, reject) => {
        if (numero1 === 0 || numero2 === 0) {
        reject("Operación invalida");
        } else {
        let resultado = restar(numero1, numero2);
        if (resultado < 0) {
            console.log("La calculadora solo puede devolver valores positivos");
        } else {
            resolve(resultado);
        }
        }
    });
};

const calculadoraAsync = async () => {
    try {
        let resultadoSuma = await sumando(10, 55);
        console.log(resultadoSuma);
        // let resultadoResta = await restando(10, 20)
        // console.log(resultadoResta)
    } catch (error) {
        console.log(error);
    }
};

calculadoraAsync();
