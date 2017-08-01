#!/usr/bin/env node

const path = require('path')
const init = require('../command/init')

// check node version
if (process.version.slice(1) < '6.0.0') {
  console.log('您当前Node版本为：' + chalk.bold(process.version))
  console.log('运行 Yondu 需要' + chalk.bold('Node 6.x')+ ' 以上版本 ，请升级Node版本')
  process.exit(2)
}

require('yargs')
    .usage('Yondu Generator')
    .command(
        'init',
        'Initialize Yondu application',
        {},
        argv => init(argv._[1])
    )
    
    .demandCommand()
    .help()
    .alias('h', 'help')
    .epilog('Copyright 2017 By BaishanCloud')
    .argv
