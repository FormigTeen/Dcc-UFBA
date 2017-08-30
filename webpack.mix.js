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

 mix.js('resources/assets/js/vendor/semantic/topbar.js', 'public/js')
    .js('resources/assets/js/vendor/words.js', 'public/js')
    .copy('semantic/dist/semantic.min.js','public/js')
    .scripts(['public/js/semantic.min.js', 'public/js/words.js','public/js/topbar.js'], 'public/js/all.js')
    .copy('semantic/dist/semantic.min.css','public/css')
    .sass('resources/assets/sass/vendor/semantic/homepage.scss', 'public/css')
    .styles(['public/css/semantic.min.css', 'public/css/homepage.css'], 'public/css/all.css');
