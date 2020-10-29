// commonJs规范
module.exports = {
    publicPath:'',
    devServer:{
        host:'127.0.0.1',
        port:8080,
        proxy:{
            // 代理，解决跨域问题
            '/mock':{
                target:'https://localhost:8080',
                // websocket
                ws:false,
                // 将主机头的原点改为目标的url地址
                changeOrigin:true
            }
        }
    }
}