/* eslint-disable  */
const fs = require('fs');
const path = require('path');

const mainJson = JSON.parse(fs.readFileSync(path.resolve('build', 'package.json'), { encoding: 'utf8' }));

const deps = {};

const dirNames = fs.readdirSync(path.resolve('build'), { withFileTypes: true }).filter(dir => dir.isDirectory() && dir.name !== 'node_modules').map(({ name }) => name);
const packageJsons = dirNames.map(name => JSON.parse(fs.readFileSync(path.resolve('build', name, 'package.json'), { encoding: 'utf8' })));
const blacklist = packageJsons.map(({ name }) => name);

packageJsons.forEach(({ dependencies }) => {   
  if (dependencies) {
    for (dep in dependencies) {
      if (!blacklist.includes(dep)) {
        deps[dep] = dependencies[dep];
      }
    }
  }
});

mainJson.dependencies = deps;

fs.writeFileSync(path.resolve('build', 'package.json'), JSON.stringify(mainJson, null, 2));