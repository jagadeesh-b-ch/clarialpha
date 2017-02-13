(function(){

    var constants = require('./clarialpha.constant');
    var bl = require('./clarialpha.bl');

    module.exports = {
        initiateServices : initiateServices
    };

    function initiateServices(){
        express.get(constants.loadArticle, function(req, res){
            
        });

        express.post(constants.saveArticle, function(req, res){

        });

        express.listen(3000, function(){
            console.log('Application listening on port 3000');
        });
    }

})();