var ghpages = require('gh-pages');
var Console = require('bc-console');
var webpack = require('webpack');
var path = require('path');
var fs = require('fs');
var remoteOriginUrl = require('remote-origin-url');

const origin = remoteOriginUrl.sync();
if(!origin || origin==''){
    Console.error("No remote origin has been found on this repository");
    Console.help("Check your remote by doing: $ git remote get-url origin");
} 

var projectName = origin.split("/").slice(-1)[0].split('.').slice(0, -1).join('.');
if (!fs.existsSync(path.resolve(__dirname, 'webpack.prod.js'))) 
    return Console.error("Mising file webpack.prod.js");

const compiler = webpack(require(path.resolve(__dirname, 'webpack.prod.js')));
if (!fs.existsSync(path.resolve(__dirname, '.env.prod'))) {
    fs.writeFile(".env.prod", "BASENAME=/"+projectName, function(err) {
        if(err) return Console.error(err);
    
        Console.warning("A file .env.prod is was created with production configurations...");
        
        compiler.run((err, stats) => {
            if (err || stats.hasErrors()) {
              console.log(stats.toString({
                colors: true
              }));
              Console.error("There was an error compiling, review above");
              return;
            }
            Console.success("Your code compiled successfully, proceding to deploy...");
            ghpages.publish('public', function(err) {
                if(err) return Console.error(err);
                
                Console.success("Your website has been deployed successfully");
            });
        });
    });
}
else{
    compiler.run((err, stats) => {
        if (err || stats.hasErrors()) {
          console.log(stats.toString({
            colors: true
          }));
          Console.error("There was an error compiling, review above");
          return;
        }
        Console.success("Your code compiled successfully, proceding to deploy...");
        ghpages.publish('public', function(err) {
            if(err) return Console.error(err);
            
            Console.success("Your website has been deployed successfully");
        });
    });
}
    
 