import React, {Component} from 'react'
import Botao from './Botao'
import Tela from './Tela'

export default class Calculadora extends Component {
	constructor(props) {
		super (props)
		this.state ={
			resultado: "",
			t1:"",
			t2:"",
			op:null,
			test:false
		}
		this.zerarTelaTotal = this.zerarTelaTotal.bind(this);
	}

	clickBotao(botao) {
		console.log(botao);
	}

	clickNumero = (botao) => {
		if(this.state.test){
			//this.zerarTelaTotal()
			//this.setState({resultado:""})
			this.setState({test: false})
		}

		if(!this.state.op){
			this.setState({t1: this.state.t1 + botao})
		}else{
			this.setState({t2: this.state.t2 + botao})
		}
		this.setState({resultado: this.state.resultado + botao})
	}

	capturaNum = (botao) => {
		if(botao == '+' || botao == '-' || botao == '/' || botao == 'x' || botao == '%'){
			this.setState({op:botao})
			this.setState({resultado: this.state.resultado + botao})
		}
	}

	fazerConta = () => {
		if(this.state.op == "+"){
			let total = parseFloat(this.state.t1) + parseFloat(this.state.t2);
			this.setState({resultado: total})
		}

		if(this.state.op  == "%"){
			let total = (parseFloat(this.state.t1) / 100 ) * parseFloat(this.state.t2);
			this.setState({resultado: total})
		}

		if(this.state.op  == "/"){
			let total = parseFloat(this.state.t1) / parseFloat(this.state.t2);
			this.setState({resultado: total})
		}

		if(this.state.op  == "x"){
			let total = parseFloat(this.state.t1) * parseFloat(this.state.t2);
			this.setState({resultado: total})
		}

		if(this.state.op  == "-"){
			let total = parseFloat(this.state.t1) - parseFloat(this.state.t2);
			this.setState({resultado: total})
		}

		this.zerarValor()
	}

	zerarValor(){
		this.setState({t1: ""})
		this.setState({t2: ""})
		this.setState({op: null})
		this.setState({test: true})
	}

	zerarTelaTotal(){
		this.setState({t1: ""})
		this.setState({t2: ""})
		this.setState({op: null})
		this.setState({resultado: ""})
	}

	invert = () => {
		this.setState({ resultado: this.state.resultado * -1})
	}

	render(){
		return (
			<>
				
				<table id="calc">
					<tr>
						<td colSpan="4" rowSpan="2"><Tela resultado={this.state.resultado}/></td>
					</tr>
					<br></br>
					<tr>
					<td><Botao valor ="AC" click={this.zerarTelaTotal}/></td>
						<td><Botao valor ="+/-" click={this.invert}/></td>
						<td><Botao valor ="%" click={this.capturaNum}/></td>
						<td><Botao valor ="/" click={this.capturaNum}/></td>
					</tr>

					<tr>
						<td><Botao valor ="7" click={this.clickNumero}/></td>
						<td><Botao valor ="8" click={this.clickNumero}/></td>
						<td><Botao valor ="9" click={this.clickNumero}/></td>
						<td><Botao valor ="x" click={this.capturaNum}/></td>
					</tr>

					<tr>
						<td><Botao valor ="4" click={this.clickNumero}/></td>
						<td><Botao valor ="5" click={this.clickNumero}/></td>
						<td><Botao valor ="6" click={this.clickNumero}/></td>
						<td><Botao valor ="-" click={this.capturaNum}/></td>
					</tr>

					<tr>
						<td><Botao valor ="1" click={this.clickNumero}/></td>
						<td><Botao valor ="2" click={this.clickNumero}/></td>
						<td><Botao valor ="3" click={this.clickNumero}/></td>
						<td><Botao valor ="+" click={this.capturaNum}/></td>
					</tr>

					<tr>
						<td colSpan="2"><Botao valor ="0" click={this.clickNumero}/></td>
						<td><Botao valor ="." click={this.clickNumero}/></td>
						<td><Botao valor ="=" click={this.fazerConta}/></td>
					</tr>
				</table>
			</>
		)
	}
}