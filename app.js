var edge = require('edge-core-js');
var express = require('express');
var app = express();

app.get('/', async function (req, res) {
    var context = await edge.makeEdgeContext({
        apiKey: '6d9014648b881ec1adb6069978eecfde31e7af06',
        appId: 'com.godex.exchanger',
    });
    // const account = await context.createAccount(
    //     'mytestacc44',
    //     'Qweewq12345',
    //     '1234',
    // );
    // context.loginWithPassword(
    //         'mytestacc44',
    //         'Qweewq12345',
    //     {
    //     onDataChanged () {
    //         console.log(22);
    //     },
    //     onKeyListChanged () {
    //         console.log(22);
    //     },
    //     onLoggedOut () {
    //         console.log(22);
    //     },
    //     onOTPRequired () {
    //         console.log(22);
    //     },
    //     onOTPSkew () {
    //         console.log(22);
    //     },
    //     onRemotePasswordChange () {}
    // },
    //     function (error, account) {
    //         if (error) {
    //             if (error.name === 'OtpError') {
    //                 res.send('error');
    //                 console.log("otpResetToken: " + error.otpResetToken)
    //             } else {
    //                 res.send('failed');
    //                 // login failed.
    //             }
    //         } else {
    //             // Yay. logged in
    //             console.log("Account name = " + account.username);
    //             res.send('logged');
    //         }
    //     });
    // const account = await context.loginWithPIN('mytestacc44', '1234');
    // const account = context.loginWithPassword(
    //     'dowell22',
    //     'Welldodo1234',
    // );

    // this line take from edge-login-ua and not work
    // context.on('login', account => console.log(account));


    // const account = await context.loginWithPassword(
    //     'dowell22',
    //     'Welldodo1234',
    // );


    //for to get the account use loginWithPIN method and loginWithPassword which should return account object in promise
    const account = await context.loginWithPIN(
        'dowell22',
        '1234',
    );
    //but we get promise with not resolved account object
    console.log(account);
    //how can we work with fetchSwapQuote as in the example of changelly? for testing our api exchanger
    const swap = await account.fetchSwapQuote({
        fromWallet: null, // example
        toWallet: null, // example

        // What?
        fromCurrencyCode: 'BTC',
        toCurrencyCode: 'ETH',

        // How much?
        nativeAmount: '1',
        quoteFor: 'to'
    });
    console.log(swap);
    res.send(account.username);
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});