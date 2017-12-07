let mix = require('laravel-mix');

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

 mix.js('resources/assets/js/personal/semantic/topbar.js', 'public/js/personal')
    .js('resources/assets/js/personal/words.js', 'public/js/personal')
    .copy('semantic/dist/semantic.min.js','public/js')
    .js('resources/assets/js/personal/slick/carousel.js', 'public/js/personal')
    .copy('node_modules/slick-carousel/slick/slick.js', 'public/js')
    .scripts(['public/js/semantic.min.js', 'public/js/personal/words.js','public/js/personal/topbar.js', 'public/js/slick.js', 'public/js/personal/carousel.js'], 'public/js/all.js')
    .copy('semantic/dist/semantic.min.css','public/css')
    .sass('resources/assets/sass/personal/semantic/homepage.scss', 'public/css/personal')
    .styles(['public/css/semantic.min.css', 'public/css/personal/homepage.css', 'public/css/personal/news.css'], 'public/css/all.css');
