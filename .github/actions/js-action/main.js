const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec')
(()=>{
    core.notice("This is from my Custom JS Action main file");
})()