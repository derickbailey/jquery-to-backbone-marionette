ImageGallery.AddEditImageView = Marionette.ItemView.extend({
  id: "add-image-form",

  events: {
    "change #name": "nameChanged",
    "change #description": "descriptionChanged",
    "change #url": "urlChanged",
    "click #save": "saveImage",
    "click #cancel": "cancel",
    "click #delete": "deleteImage"
  },

  initialize: function(options){
    this.template = options.template;
  },

  nameChanged: function(e){
    var value = $(e.currentTarget).val();
    this.model.set({name: value});
  },

  descriptionChanged: function(e){
    var value = $(e.currentTarget).val();
    this.model.set({description: value});
  },

  urlChanged: function(e){
    var value = $(e.currentTarget).val();
    this.model.set({url: value});
    this.$("#preview").attr("src", value);
  },

  deleteImage: function(e){
    e.preventDefault();
    this.trigger("image:deleted", this.model);
  },

  cancel: function(e){
    e.preventDefault();
    if (this.model.isNew()){
      this.render();
    } else {
      this.model.select();
    }
  },

  saveImage: function(e){
    e.preventDefault();
    var data = Backbone.Syphon.serialize(this);
    this.model.set(data);
    this.trigger("image:save", this.model);
  }
});

