/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var pluckFirstLineFromFileAsync = require('./promiseConstructor').pluckFirstLineFromFileAsync;
var getGitHubProfileAsync = require('./promisification').getGitHubProfileAsync;

var fs = require('fs');
var Promise = require('bluebird');



var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  // TODO
  
  return pluckFirstLineFromFileAsync(readFilePath)
    .then(function(firstLine) {
      getGitHubProfileAsync(firstLine) 
      .then(profile => {
        profile = JSON.stringify(profile);
        fs.writeFile(writeFilePath, profile, err=>{
          if(err) throw err;
          console.log('File has been saved')
        })
      })
      
  })
  
  // return getGitHubProfileAsync(username)
  //   .then(existingUser => {
  //     if (existingUser) {
  //       return 'User already exists!';
  //     } else {
        
  //       return user;
  //     }
  //   })
    // .then(fs.writeFile(writeFilePath, ))
};

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
