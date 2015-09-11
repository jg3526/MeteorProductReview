// Categories
Categories = new Mongo.Collection("categories");
Products = new Mongo.Collection("products");
ProductsImages = new Mongo.Collection("productsImages", {
	stores:[new FS.Store.GridFS("productsImages")]
});