
function simularCompra() {
    let camiseta = Number(prompt("Quantidade de camisetas:"));
    let calca = Number(prompt("Quantidade de calças:"));
    let tenis = Number(prompt("Quantidade de tênis:"));

    if (
        !Number.isInteger(camiseta) || camiseta < 0 ||
        !Number.isInteger(calca) || calca < 0 ||
        !Number.isInteger(tenis) || tenis < 0
    ) {
        alert("Digite quantidades inteiras maiores ou iguais a zero.");
        return;
    }

    if (camiseta === 0 && calca === 0 && tenis === 0) {
        alert("Nenhum produto foi selecionado.");
        return;
    }

    let valorCamiseta = camiseta * 50;
    let valorCalca = calca * 100;
    let valorTenis = tenis * 200;

    let total = valorCamiseta + valorCalca + valorTenis;

    alert(
        "CAMISETA\n" +
        "Quantidade: " + camiseta +
        "\nValor: R$ " + valorCamiseta.toFixed(2) +

        "\n\nCALÇA\n" +
        "Quantidade: " + calca +
        "\nValor: R$ " + valorCalca.toFixed(2) +

        "\n\nTÊNIS\n" +
        "Quantidade: " + tenis +
        "\nValor: R$ " + valorTenis.toFixed(2) +

        "\n\nTOTAL DA COMPRA: R$ " + total.toFixed(2)
    );
}

function simularCompraUnica(produto) {
    let quantidade = Number(prompt("Quantidade:")); 

    if (!Number.isInteger(quantidade) || quantidade < 0) {
        alert("Digite uma quantidade inteira maior ou igual a zero.");
        return;
    }

    let valorTotal = 0;
    switch (produto) {
        case "camiseta":
            valorTotal = quantidade * 50;
            break;
        case "calca":
            valorTotal = quantidade * 100;
            break;
        case "tenis":
            valorTotal = quantidade * 200;
            break;
        default:
            alert("Produto inválido.");
            return;
    }

    alert(
        "PRODUTO: " + produto.charAt(0).toUpperCase() + produto.slice(1) +
        "\nQuantidade: " + quantidade +
        "\nValor Total: R$ " + valorTotal.toFixed(2)
    );
}