module.exports = async(app, db) => {


    app.get('/', (req, res) => {
        res.render('index')
    });

    app.get('/Transmission', (req, res) => {
        res.render('Transmission')
    })

    app.get('/Prevention', (req, res) => {
        res.render('Prevention');
    });

    app.get('/Treatment', (req, res) => {
        res.render('Treatment');
    });


    

}