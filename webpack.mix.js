const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

 mix.js([
 	'resources/js/app.js',
 	'public/front/js/thirdparty/isotop.min.js',
 	'public/front/js/thirdparty/select2.full.min.js',
 	'public/front/js/thirdparty/bootstrap.min.js'
 	], 'public/js')
   .sass('resources/sass/app.scss', 'public/css');
