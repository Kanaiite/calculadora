import React from 'react'

function Botao(props){
	if(props.valor == "AC" || props.valor == "+/-" || props.valor == "%"){
		return(
			<button class="esp" onClick={ () => props.click(props.valor)}>
				{props.valor}
			</button>
		);
	}
	
	if(props.valor == "/" || props.valor == "+" || props.valor == "-" || props.valor == "x" || props.valor == "="){
		return(
			<button class="op" onClick={ () => props.click(props.valor)}>
				{props.valor}
			</button>
		);
	}
	
	if(props.valor == "0"){
		return(
			<button class="zero" onClick={ () => props.click(props.valor)}>
				{props.valor}
			</button>
		);
	}

	return(
		<button class="num" onClick={ () => props.click(props.valor)}>
			{props.valor}
		</button>
	);
}

export default Botao;