/**
 * Created by vincebloise on 6/11/16.
 */
System.config({
    transpiler: 'typescript',
    typescriptOptions: {emitDecoratorMetadata: true},
    paths: {
        // paths serve as alias
        'npm:': 'node_modules/'
    },
    map: {
        '@angular': 'node_modules/@angular',
        'rxjs'    : 'node_modules/rxjs'
    },
    paths: {
        'node_modules/@angular/*': 'node_modules/@angular/*/bundles'
    },
    meta: {
        '@angular/*': {'format': 'cjs'}
    },
    packages: {
        'app'                              : {main: 'main', defaultExtension: 'ts'},
        'rxjs'                             : {main: 'Rx'},
        '@angular/core'                    : {main: 'core.umd.min.js'},
        '@angular/common'                  : {main: 'common.umd.min.js'},
        '@angular/compiler'                : {main: 'compiler.umd.min.js'},
        '@angular/platform-browser'        : {main: 'platform-browser.umd.min.js'},
        '@angular/platform-browser-dynamic': {main: 'platform-browser-dynamic.umd.min.js'}
    }
});