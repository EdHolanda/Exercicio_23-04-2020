
//lista funcionários
listaFunc1 = () =>{
	html = "<br><br>"
	if(bdFuncionarios.length > 0){
		html += "Lista de Funcionários: <br>"
		html += "=============================<br>"
		for(i=0; i<bdFuncionarios.length; i++){
			html += "Matrícula: " + bdFuncionarios[i].Codigo + " _____ " + "Nome: " + bdFuncionarios[i].Nome + "<br>"
		}
		html += "=============================<br>"
	}
	else{
		html += "Não existem funcionários cadastrados"
	}
	document.getElementById("resultado").innerHTML = html;
}

//lista funcionários e salários
listaFunc2 = () =>{
	html = "<br><br>"
	if(bdFuncionarios.length > 0){
		html += "Relatório de Funcionários e Salários: <br>"
		html += "====================================<br>"
		for(i=0; i<bdFuncionarios.length; i++){
			html += "Matrícula: " + bdFuncionarios[i].Codigo + " _____ " + "Nome: " + bdFuncionarios[i].Nome + " _____ " + "Salário: " + bdFuncionarios[i].Salario + "<br>"
		}
		html += "====================================<br>"
	}
	else{
		html += "Não existem funcionários cadastrados"
	}
	document.getElementById("resultado").innerHTML = html;
}

//lista funcionários, vales e salário líquido
listaFunc3 = () =>{
	html = "<br><br>"
	if(bdFuncionarios.length > 0){
		html += "Relatório de Funcionários, Vales e Salários: <br>"
		html += "====================================================================================<br>"
		for(i=0; i<bdFuncionarios.length; i++){
			html += "Matrícula: " + bdFuncionarios[i].Codigo + " _____ " + "Nome: " + bdFuncionarios[i].Nome + " _____ " + "Vale: " + bdFuncionarios[i].Vale + " _____ " + "Salário Líquido: " + bdFuncionarios[i].Liquido + "<br>"
	}
	html += "====================================================================================<br>"
	}
	else{
		html += "Não existem funcionários cadastrados"
	}
	document.getElementById("resultado").innerHTML = html;
}

//valor total da folha a pagar
folhaMes = () =>{
	
	if(bdFuncionarios.length == 0){
		valorFolha = 0
		html = "Valor da Folha Mensal a Pagar: " + valorFolha + "<br>" + "========================================<br>"
	}
	else {
		valorFolha = 0
		for(i=0; i<bdFuncionarios.length; i++){
			valorFolha +=  parseInt(bdFuncionarios[i].Salario)
		}
		html = "Valor da Folha Mensal a Pagar: " + valorFolha + "<br>" + "========================================<br>"
		
	}
	
	document.getElementById("resultado").innerHTML = html;
}