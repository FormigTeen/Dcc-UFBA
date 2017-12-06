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

 mix.js('resources/assets/js/personal/semantic/topbar.js', 'public/js/vendor')
    .js('resources/assets/js/personal/words.js', 'public/js/personal')
    .copy('semantic/dist/semantic.min.js','public/js')
    .scripts(['public/js/semantic.min.js', 'public/js/vendor/words.js','public/js/vendor/topbar.js'], 'public/js/compiled/home-page.js')
    .copy('semantic/dist/semantic.min.css','public/css')
    .sass('resources/assets/sass/personal/semantic/homepage.scss', 'public/css/vendor')
    .sass('resources/assets/sass/personal/news.scss', 'public/css/personal')
    .styles(['public/css/semantic.min.css', 'public/css/vendor/homepage.css', 'public/css/personal/news.css'], 'public/css/compiled/home-page.css');
