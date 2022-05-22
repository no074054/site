var app = new Vue ({
	el: '#app',
	data: {
		description: 'Bananas',
		bg_header: {
			bg: true
		},
		content_color: {
			c_c: true
		},
		products: [
			{	id: 1,
				title: 'Grand Naine',
				short_text: 'Banana Standart',
				image: 'img/banana_1.png',
			},

			{	id: 2,
				title: 'Karpooravalli Banana',
				short_text: 'Banana Standart',
				image: 'img/banana_2.png',
			},

			{	id: 3,
				title: 'Nendran',
				short_text: 'Banana Standart',
				image: 'img/banana_3.png',
			},

			{	id: 4,
				title: 'Pachanadan',
				short_text: 'Banana BEEF',
				image: 'img/banana_4.png',
			},

			{	id: 5,
				title: 'Poovan',
				short_text: 'Banana Elongated',
				image: 'img/banana_5.png',
			}
		],
		product: []
	},
	methods: {
		getProduct: function() {
			if (window.location.hash) {
				var id = window.location.hash.replace('#','');
					for (i in this.products) {
						if (id == this.products[i].id) this.product = this.products[i];
					}
			}
			console.log(this.product);
		}
	},
	mounted: function() {
		this.getProduct();
	}
})