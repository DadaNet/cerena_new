import 'zoomove/dist/zoomove.js';
import 'zoomove/dist/zoomove.min.css';

jQuery.fn.load = function(callback){ $(window).on("load", callback) };

$('.zoo-item').ZooMove();