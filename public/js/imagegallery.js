var ImageGallery = new Backbone.Marionette.Application();

ImageGallery.addRegions({
  mainRegion: "#main",
  imageList: "#image-list"
});

ImageGallery.on("initialize:before", function(options){
  options.images = new ImageGallery.ImageCollection(options.imageData);
});

ImageGallery.addInitializer(function(options){
  options.images.bind("cleared", function(){
    ImageGallery.addImage(images);
  });

});

ImageGallery.bind("initialize:after", function(){
  Backbone.history.start();
});
