//função para cadastro de funcionário
cadastroFuncionario = () => {
	var func = {
			Codigo: prompt("Matrícula:"),
			Nome: prompt("Nome:"),
			Salario: prompt("Salário:"),
			Vale: "",
			Liquido: ""		
	}
	func.Vale = vale(func.Salario)
	func.Liquido = liquido(func.Salario)
	bdFuncionarios.push(func)
	//função recursiva para não precisar sair da função de cadastro
	pergunta = () =>{
		var continua = prompt("Deseja cadastrar outro: (s/n)")
		if(continua == "n"){
			return
		}
		 else if(continua == "s"){
		 	cadastroFuncionario()
		 }
		 else{
		 	alert("Opção inválida")
		 	pergunta()
		 }
	}
	pergunta()

}

//função para cálculo do vale
vale = (salario) =>{
	valorVale = salario * 0.3 
	return valorVale
}

//função para cálculo do salário liquido
liquido = (salario) =>{
	var valorLiquido = salario - (salario * 0.3)
	return valorLiquido
}









