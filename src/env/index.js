const evnList = {
    dev: {
        baseUrl:'',
    },
    test: {
        baseUrl:'',
    },
    product: {
        domain:'',
        baseUrl:'',
    },
}
let parmas = {
    'dev-m.ksmvc.com': 'dev',
    'test-m.ksmvc.com': 'test',
    'm.ksmvc.com': 'product',
}

let currentEnv = parmas[location.hostname]

export default evnList[currentEnv];