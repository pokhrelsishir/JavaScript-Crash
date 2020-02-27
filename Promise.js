//Creating A Promise

var isGoodWeather = false;

// Promise

var BookDelivery = new Promise(

    function (resolve, reject) {

        if (isGoodWeather) {
            var book = {
                title: 'Animal Farm',
                authur: 'Oliver Twist'
            };

            resolve(book); // promise fulfilled
        } else {
            var reason = new Error('The weather is very bad, book not delivered');
            reject(reason); // promise rejected
        }

    }
);

// Consuming Promise

var checkBookStatus = function () {

    BookDelivery
        .then(function (fulfilled) {
            //log repotrt if book is delivered
            console.log(fulfilled);

        })
        .catch(function (error) {

            console.log(error.message);

        });
};