const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

// Milestone 1 Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell'icona e l'icona stessa.
// Milestone 2 Ciascuna icona ha una proprietà "color": utilizzare questa proprietà per visualizzare le icone del colore corrispondente.
// Milestone 3 Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone (animal, vegetable, user). Quando l'utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.
// BONUS 1- modificare la struttura dati fornita e valorizzare la proprietà "color" in modo dinamico: generare in modo casuale un codice colore, sapendo che la notazione esadecimale è formata dal simbolo "#" seguito da 6 caratteri alfanumerici compresi tra 0 e 9 e A e F. 2- popolare le options della select della milestone 3 dinamicamente.
// Consigli del giorno Come sempre, iniziamo prima di tutto dall'analisi e comprensione della consegna. Scomponiamo il problema in micro-passaggi logici che solamente in un secondo momento trasformeremo in codice.
// Le icone presenti nella struttura dati fanno riferimento alla nota libreria Font Awesome, perciò come prima cosa assicuriamoci di aver inserito il link alla cdn nell'head della pagina. Dopodiché, basandoci sul codice di riferimento nel sito di Font Awesome, analizziamo come è formato il tag <i> di un'icona qualsiasi, in particolare focalizziamoci sulle classi. Come possiamo usare i dati presenti nella nostra struttura dati per creare l'elemento html nel modo corretto e visualizzare l'icona in pagina?
// Inizialmente può essere sufficiente stampare dei semplici div, senza alcuno stile, con all'interno l'icona e uno span con il nome. Solamente quando la parte logica è completa, ci dedichiamo al css.
// N.B. :collisione: Il layout dovete farlo voi, ma potete personalizzarlo

const topMain = document.querySelector('.top-main');
topMain.innerHTML = `
	<span>Filtra per tipo</span>
	<select name="" id="seleziona">
		<option value="1">All</option>
		<option value="2">animal</option>
		<option value="3">vegetable</option>
		<option value="4">user</option>
	</select>
`;


const contenitoreBox = document.querySelector('.main-container');

const animals = icons.filter(icona => icona.type == 'animal');
console.log(animals);

const vegetables = icons.filter(icona => icona.type == 'vegetable');
console.log(vegetables);

const users = icons.filter(icona => icona.type == 'user');
console.log(users);


document.getElementById('seleziona').addEventListener('click', function(){
	//quando clicco sulla selezione mi devono comparire tali icone;
	show();
});

function show(){
	contenitoreBox.innerHTML = '';

	const valoreSelect = document.getElementById('seleziona').value;


	switch(valoreSelect){
		case '1':
			generaIcone();
			break;
		case '2':
			generaAnimali();
			break;
		case '3':
			generaVegetali();
			break;
		case '4':
			generaUser();
	}
	
	function generaIcone(){
	
		for(let i=0; i<icons.length; i++){
			contenitoreBox.innerHTML += `
				<div class="box"><i class="fas fa-${icons[i].name} ${icons[i].color} my-icon"></i>${icons[i].name}</div>
			`;
		}
	}
	
	function generaAnimali(){
		
		for(let i=0; i<animals.length; i++){
			contenitoreBox.innerHTML += `
				<div class="box"><i class="fas fa-${animals[i].name} ${animals[i].color} my-icon"></i>${animals[i].name}</div>
			`;
		}
	}
	
	function generaVegetali(){
		
		for(let i=0; i<vegetables.length; i++){
			contenitoreBox.innerHTML += `
				<div class="box"><i class="fas fa-${vegetables[i].name} ${vegetables[i].color} my-icon"></i>${vegetables[i].name}</div>
			`;
		}
	}
	
	function generaUser(){
		
		for(let i=0; i<users.length; i++){
			contenitoreBox.innerHTML += `
				<div class="box"><i class="fas fa-${users[i].name} ${users[i].color} my-icon"></i>${users[i].name}</div>
			`;
		}
	}

}
