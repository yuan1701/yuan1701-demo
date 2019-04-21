function route(pathname,handle){
    console.log('route...')
    if(typeof handle[pathname]==='function'){
        handle[pathname]()
    }



}
exports.route=route