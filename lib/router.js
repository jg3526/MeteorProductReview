Router.configure({
	layoutTemplate: 'layout'
});
Router.map(function() {
	this.route('homepage', {
		path:'/',
		template: 'homepage',
		data: function(){
			templateData = {
				products: Products.find({is_featured: 1})
			};
			return templateData;
		}
	}),
	this.route('products', {
		path:'/products',
		template: 'products',
		data: function(){
			templateData = {
				products: Products.find()
			};
			return templateData;
		}
	})
});