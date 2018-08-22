var ghpages = require('gh-pages');
var Console = require('bc-console');
var webpack = require('webpack');
var path = require('path');
const compiler = webpack(path.resolve(__dirname, 'webpack.prod.js'));

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
 