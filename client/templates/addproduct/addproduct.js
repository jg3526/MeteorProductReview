Template.addproduct.events({
	"submit .addproduct": function(event) {
		var name = event.target.name.value;
		var category = event.target.category.value;
		var description = event.target.description.value;
		var isfeatured = event.target.isfeatured.value;

		// get the file
		var file = $('#productImage').get(0).files[0];
		if (file) {
			fsFile = new FS.File(file);
			ProductsImages.insert(fsFile, function(err, result){
				if (!err) {
					var productImage = 'cfs/files/productsImages/' + result._id;
					// insert a new record for the product	
					Products.insert({
						name: name,
						category: category,
						description: description,
						isfeatured: isfeatured,
						image: productImage,
						createdAt: new Date()
					});
				}
			});
		} else {
			var productImage = 'apple-icon-120x120.png';
			// insert a new record for the product	
			Products.insert({
				name: name,
				category: category,
				description: description,
				isfeatured: isfeatured,
				image: productImage,
				createdAt: new Date()
			});
		}
		
		// clear form
		event.target.name.value = "";
		event.target.category.value = "";
		event.target.description.value = "";
		event.target.isfeatured = "";

		// flash message
		FlashMessages.sendSuccess("Product Added.");
		Router.go('/');

		return false;
	}
});