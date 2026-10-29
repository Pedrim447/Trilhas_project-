 Simulador de compra

**Aluno:** Pedro William Furtado Cabral  
**Trilha:** Outra trilha  
**Tipo de projeto:** atividade individual de HTML, CSS e JavaScript

## Apresentação

Simulador de compra é uma loja fictícia de periféricos e acessórios de tecnologia. A página apresenta três produtos e permite abrir uma janela de detalhes sem navegar para outra página. O botão **Simular compra** inicia uma simulação com `prompt()`, calcula os subtotais e mostra o resumo com `alert()`.

> Este é um projeto educativo. Não existe pagamento real nem integração com carrinho ou estoque.

## Produtos e preços

| Produto | Descrição curta | Preço |
|---|---|---:|
| Teclado Mecânico | Teclas responsivas e conforto para digitação, estudo e jogos. | R$ 289,90 |
| Headset Pulse | Áudio envolvente e almofadas confortáveis. | R$ 199,90 |
| Mouse Precision | Formato ergonômico e sensor preciso. | R$ 129,90 |

Os preços estão definidos no `script.js` e também aparecem no `index.html`. Se alterar um preço, atualize os dois arquivos para manter os valores consistentes.

## Tecnologias

- **HTML5:** estrutura e conteúdo da página.
- **CSS3:** layout, cores, responsividade e janelas de detalhes.
- **JavaScript:** perguntas com `prompt()`, conversão com `Number()`, cálculo dos subtotais e total, e exibição com `alert()`.

O modal é aberto e fechado com links de âncora e o seletor CSS `:target`, sem JavaScript adicional.

## Estrutura dos arquivos

```text
loja-pixel/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    └── (imagens opcionais do projeto)
```

## Como executar

1. Baixe ou clone este repositório.
2. Abra a pasta do projeto no VS Code.
3. Abra o arquivo `index.html` no navegador. Também é possível usar a extensão Live Server.
4. Clique em **Ver detalhes** em qualquer produto para abrir o modal.
5. Clique em **Simular compra** e informe a quantidade de cada produto quando solicitado.
6. Confira o resumo apresentado em uma janela de alerta.

Não é necessário instalar dependências nem executar um servidor backend.

## Captura de tela

Salve uma captura de tela da página inicial como `assets/captura-da-tela.png` e mantenha-a neste repositório. Para capturar no Windows, abra a página no navegador e pressione `Win + Shift + S`; selecione a área da página e salve a imagem na pasta `assets`.

Você também pode inserir a imagem aqui depois de salvá-la:

```markdown
![Captura de tela da Pixel Store](assets/captura-da-tela.png)
```

## Testes realizados / roteiro de testes

Marque os testes após executá-los no navegador:

- [ ] A página apresenta os três produtos com nomes, descrições e preços.
- [ ] Os links “Ver detalhes” abrem o modal correto e o botão × fecha o modal.
- [ ] Informar 1 unidade de cada produto resulta em total de R$ 619,70.
- [ ] Informar 0 para todos os produtos exibe “Nenhum produto foi selecionado”.
- [ ] Informar 2 teclados e 0 nos demais resulta em R$ 579,80.
- [ ] Informar uma quantidade negativa, decimal ou texto mostra uma mensagem de quantidade inválida.
- [ ] O layout se adapta a uma tela estreita de celular.

## Dificuldade encontrada e aprendizado

**Exemplo para adaptar à sua experiência real:** uma dificuldade foi manter os preços mostrados na página iguais aos usados nos cálculos do JavaScript. Aprendi que os valores devem ser revisados nos dois arquivos e que `Number()` converte a resposta do `prompt()` em número para que a multiplicação funcione corretamente.

Revise este parágrafo e substitua-o pela dificuldade que você realmente encontrou durante o desenvolvimento.

## Uso de inteligência artificial

A inteligência artificial foi utilizada como apoio para planejar a estrutura dos arquivos, sugerir estilos CSS e explicar a lógica da simulação de compra. O código deve ser revisado e adaptado pelo aluno. A verificação deve ser feita executando a página no navegador e testando diferentes quantidades, inclusive zero e entradas inválidas.

## Publicar no GitHub

1. Crie um repositório no GitHub, por exemplo `loja-pixel`.
2. No terminal do VS Code, dentro da pasta do projeto, execute:

```bash
git init
git add .
git commit -m "Cria projeto Pixel Store"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/loja-pixel.git
git push -u origin main
```

3. Substitua `SEU-USUARIO` pelo seu nome de usuário do GitHub e use a URL real do repositório que você criou.
4. Abra o repositório no GitHub e confira se os quatro arquivos e a pasta `assets` estão presentes.
5. Envie somente o link do repositório, conforme solicitado no enunciado.

**Prazo informado no enunciado:** 30/10/2026, até 23h59.
