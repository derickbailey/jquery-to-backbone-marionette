## Section 0: jQuery

Review the current jQuery app code

## Section 1: Backbone.View

Convert the image viewer to a Backbone.View

## Section 2: View events and use

Convert the AddImageForm to a Backbone.View

show events configuration

show pulling data from this.$ instead of this.$main.find / this.$el.find

## Section 3: Backbone.Model

Define Image model in AddEdit.js

convert this.model to Image in the AddImageView initializer

Persist it w/ .save instead of ajax call

pass data to model.save

adjust success to use .toJSON of image result

## Section 4: Backbone.Collection

Move Image to ImageGallery.js/ImageGallery.Image

Add ImageCollection w/ url attr

change "this.images" to ImageCollection in ImageGallery.init

image list is still working

show how image add is broken

change the Add view to use this.collection.create instead of model.save

show that image view is broken

## Section 5: ItemView

add ImagePreview as Backbone.View to ImageList.js

Use it to show the individual images in preview list

iterate images.each instead of _.each(images

set tagName to "span" on ImagePreview

convert ImagePreview to Marionette.ItemView

move "click a.image-preview" to ImagePreview events, along with imageClicked method

use this.model instead of finding the image from the collection

call ImageView.show with image.toJSON()

convert ImageViewer to use Image model

convert AddEdit to use ImageGallery.images as a proper collection (images.add)

## Section 6: CollectionView

Create ImagePreviewList in ImageList.js

move el resizing code to ImagePreviewList as "updateSize" function

change ImageList.show to use new ImagePreviewList

