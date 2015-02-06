var express = require('express');
var router = express.Router();
var gallery = require('../data/galleryData');
/* Renders Recipe view */
router.get('/:id', function (req, res) {
    var kind = req.params.id;
    
    res.render('gallery', {
        gallery: {
            list: gallery[kind],
            kind: gallery.galleryTypeName[kind]
        }
    });
});

module.exports = router;