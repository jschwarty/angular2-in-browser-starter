(function (global) {
  var ngVer = '@2.0.0-rc.5';
  var routerVer = '@3.0.0-rc.1';
  var formsVer = '@0.3.0';
  var routerDeprecatedVer = '@2.0.0-rc.2';
  var map = {
    'app': 'app',
    '@angular': 'https://unpkg.com/@angular',
    '@angular/router': 'https://unpkg.com/@angular/router' + routerVer,
    '@angular/forms': 'https://unpkg.com/@angular/forms' + formsVer,
    '@angular/router-deprecated': 'https://unpkg.com/@angular/router-deprecated' + routerDeprecatedVer,
    'angular2-in-memory-web-api': 'https://unpkg.com/angular2-in-memory-web-api',
    'rxjs': 'https://unpkg.com/rxjs@5.0.0-beta.6',
    'ts': 'https://unpkg.com/plugin-typescript@4.0.10/lib/plugin.js',
    'typescript': 'https://unpkg.com/typescript@1.9.0-dev.20160409/lib/typescript.js'
  };
  var packages = {
    'app': {main: 'main.ts', defaultExtension: 'ts'},
    'rxjs': {defaultExtension: 'js'},
    'angular2-in-memory-web-api': {main: 'index.js', defaultExtension: 'js'}
  };
  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'upgrade'
  ];
  ngPackageNames.forEach(function (pkgName) {
    map['@angular/' + pkgName] = 'https://unpkg.com/@angular/' + pkgName + ngVer;
  });
  ngPackageNames.concat(['forms', 'router', 'router-deprecated']).forEach(function (pkgName) {
    packages['@angular/' + pkgName] = {main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js'};
  });
  var config = {
    transpiler: 'ts',
    typescriptOptions: {
      tsconfig: true
    },
    meta: {
      'typescript': {
        "exports": "ts"
      }
    },
    map: map,
    packages: packages
  };
  System.config(config);
})(this);
