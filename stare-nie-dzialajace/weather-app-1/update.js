const { exec } = require('child_process');

// Check for updates to the npm dependencies
exec('npm outdated', (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }

  console.log(`Outdated dependencies:\n${stdout}`);
});

// TODO: Add code to check for user feedback and bugs
