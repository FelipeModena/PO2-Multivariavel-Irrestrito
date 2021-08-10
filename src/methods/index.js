import { abs,max,derivative } from "mathjs";

import DavidonFletcherPowell from "./DavidonFletcherPowell";
import FletcherAndReeves from "./FletcherAndReeves";
import Gradiente from './Gradiente';
import GradienteConjugado from "./GradienteConjugadoGeneralizado";
import HookeAndJeeves from "./HookeAndJeeves";
import NewtonIrrestrito from "./NewtonIrrestrito";

const metodos = {
  DavidonFletcherPowell,
  FletcherAndReeves,
  Gradiente,
  GradienteConjugado,
  HookeAndJeeves,
  NewtonIrrestrito
}; 

const variaveis = (x)=>{
  //separa os identificadores
  let objetos = x.map( (valor, indice) => {
    let identificador = 'x'+(indice+1);
    return {[identificador]: valor};
  });

  //junta os identificadores em um único objeto, para termos o escopo
  let escopo = {};
  for(var i in objetos){
    Object.assign(escopo, objetos[i]);
  }
  return escopo;
}

const newton = (fstring, a) => {
  const e = 0.000001;
  let flinha = derivative(fstring, "x");
  let f2linha = derivative(flinha, "x");
  let x = a; //x0 = a
  let fxlinha = flinha.evaluate({ x: x });
  let fx2linha;
  let i = 0;
  let z, fzlinha;
  do {
    if(i === 10000) return undefined;
    fx2linha = f2linha.evaluate({ x: x });
    if (abs(fx2linha) < 0.00000000001)
      break;
    z = x - fxlinha / fx2linha;
    fzlinha = flinha.evaluate({ x: z });
    if (abs(fzlinha) <= e) break;
    if (abs(z - x) / max(abs(z), 1) <= e) break;
    x = z;  
    fxlinha = fzlinha;
    i++;
  } while (1);
  if (typeof z !== "undefined") return(z);
  else return undefined;
}


export default (metodo, { xinicial, ...args }) => metodos[metodo]({xinicial: xinicial.replace(/[()]/g,'').split(' ').map(Number),newton,variaveis, ...args });

