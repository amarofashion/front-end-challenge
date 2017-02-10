const filterSale = (product) => { return product.on_sale === true };

//Função para a requisição de produtos
const products = () => {
	$.get('/front-end-challenge/objects/products.json', function (response) {
		Object.keys(response).forEach(function (key) {
			productsAll = response[key];
		});

		//console.log(getSales());

		list(productsAll);
	});
}

const getSales = () => productsAll.filter(filterSale);

const list = (products) => {
	var html = products.map(listHTML).join('');
	document.querySelector('[data-list-product]').innerHTML = html;

	$('.product').on('click', function () {
		openInfo($(this));

	});
}

//Redeniza lista 
const listHTML = (product) => {
	var html = '<div class="col-xs-12 col-sm-6 col-md-4">';
	html += '<div class="card product" data-product="' + product.code_color + '">';
	if(product.on_sale == true) html += '<div class="promotion">' + product.discount_percentage + '</div>';
	html += '<img src="' + product.image + '" alt="" class="image">';
	html += '<div class="name">' + product.name + '</div>';

	if(product.on_sale == true) html += '<div class="price --old">' + product.regular_price + '</div>';
	html += '<div class="price">' + product.actual_price + '</div>';
	html += '<div class="installments">' + product.installments + '</div>';
	html += '<a href="#" class="button --default">INFO</a>';
	html += '</div>';
	html += '</div>';

	return html;

}

//Abri as indormações
const openInfo = (element) => {
	const code = element.attr('data-product');
		const filterName = (product) => {
			return product.code_color === code;
		};

	infoHTML(productsAll.filter(filterName));
	
};


//Renderiza informações dos produtos
const infoHTML = (product) => {

	product = product[0];
	var html = '';
	html += '<a href="#" class="close">X</a>'
	html += '<div class="image-container">';
	html += '<img src="' + product.image + '" alt="" class="image">';
	html += '</div>';
	html += '<div class="info">';
	html += '<div class="name">' + product.name + '</div>';
	if(product.on_sale == true) html += 'De: <div class="price --old"> ' + product.regular_price + '</div>';
	html += 'Por: <div class="price"> ' + product.actual_price + '</div>';
	html += '<div class="installments"> Em até' + product.installments + '</div>';

	html += 'Size: <div class="sizes">';

	Object.keys(product.sizes).forEach(function(key) {
		var size = product.sizes[key].size;
		var available = '';
		if(!product.sizes[key].available) available = ' disabled ';

		html += '<input type="radio" value="' + size + '" name="size" id="' + size + '" class="input radio-size"'+ available +'>';
		html += '<label class="label" for="' + size + '">' + size + '</label>';
	});

	html += '</div>';
	console.log(getListBasket().indexOf({'code': product.code_color}));

	const verifica = (item, value) => {
		if(item.code.trim() == product.code_color.trim()) return true;
	};

	if(!getListBasket().some(verifica, false))
	html += '<a id="addItemBasket" href="#" class="button --default" data-product="' + product.code_color + '">Adicionar ao Carrinho</a>';
	else 
	html += '<a href="#" class="button --disabled">Item já adicionado no Carrinho</a>';

	html += '</div>';
	
	$('#info-product').html(html);
	$('.modal').toggleClass('hide');
	$('.close').on('click', toggleModal);
	$('#addItemBasket').on('click', addItemAction);

};

//Fecha modal
const toggleModal = () => {
	$('.modal').toggleClass('hide');
};

