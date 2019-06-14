module.exports = {
    devServer: {
        // 设置主机地址
        host: 'weixin.ksmvc.com',
        // 设置默认端口
        port: 80,
        // 设置代理
        proxy: {
            /**
             * changeOrigin:true
             * /api/test
             * http://localhost:5000/test
             * changeOrigin:false
             * /api/test
             * http://localhost:5000/api/test
             */
            '/api':{
                // 设置目标API地址
                target: 'http://localhost:8086',
                // 如果要代理 websockets
                ws: false,
                // 将主机标头的原点改为目标URL
                changeOrigin: false
            }
        }
    },

    css: {
      loaderOptions: {
        stylus: {
          'resolve url': true,
          'import': []
        }
      }
    },

    pluginOptions: {
      'cube-ui': {
        postCompile: false,
        theme: false
      }
    }
}
