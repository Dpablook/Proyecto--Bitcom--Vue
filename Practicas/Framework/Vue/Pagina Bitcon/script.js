window.addEventListener('load', () =>{
    const vm = new Vue({
        el: `#app`,
        data: {
            mensaje: 'Bienvenidos/as',
            bitcoinData:{
                time: null,
                price: null
            }
        },
        created: function (){
            this.getBitcoinData();
            this.getEthereumData();
        },
        mounted: function(){
            setTimeout(()=>{
                this.getBitcoinData();
            },1000)
        },
        //Event Handling:

        methods:{
        getBitcoinData(){
            axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then((val) => {
                this.bitcoinData.time = val.data.time.updated
                this.bitcoinData.price = val.data.bpi.USD.rate_float.toFixed(2)
            })
            .catch((err) => {
                console.log(err);
            })
        },
        getEthereumData(){
            axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then((val) => {
                this.ethereumData.time = val.data.time.updated
                this.ethereumData.price = val.data.bpi.USD.rate_float.toFixed(2)
            })
            .catch((err) => {
                console.log(err);
            })
        }
        }
    })
})
