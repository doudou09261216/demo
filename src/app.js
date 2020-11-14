


const Koa = require('koa')

const app = new Koa()



app.use(ctx => {
    console.log("...")
    ctx.body = '微信小程序访问了我！';
});

app.listen(3000, () => {
    console.log("Server is running at 3000")
});