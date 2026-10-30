function calcularMedia(nota1, nota2, nota3) {
	const soma = nota1 + nota2 + nota3;
	const media = soma / 3;

	if (media >= 7) {
		return "Aprovado";
	}

	return "Reprovado";
}

console.log(calcularMedia(9, 9, 3));