function calcularMedia(nota1, nota2, nota3) {
	const soma = nota1 + nota2 + nota3;
	const media = soma / 3;

	console.log(`Notas: ${nota1}, ${nota2}, ${nota3}`);
    console.log(`Média: ${media}`);

	if (media >= 7) {
		console.log("Situação: Aprovado");
	} else {
		console.log("Situação: Reprovado");
	}
}

calcularMedia(9, 9, 3);