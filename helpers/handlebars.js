const helpers = {
    upperCase(content){
        return content.toUpperCase().trim();
    },
    formatarData(data){
        return data.split('-').reverse().join('/')
    }
}



module.exports = helpers