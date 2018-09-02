// 今回はtestnetを使っていきます
// PORT番号は適当です
const NETWORK_TYPE = 'testnet';
const PORT = '28332';


// bitcore
const bitcore = require('bitcore-lib');

(function () {
    const privateKey = new bitcore.PrivateKey(NETWORK_TYPE);
// 秘密鍵から公開鍵を生成
    const publicKey = privateKey.toPublicKey();
// 公開鍵からビットコインアドレスを生成
    const bitcoinAddress = publicKey.toAddress(NETWORK_TYPE);

// レスポンス用のjsonを生成
    const json = JSON.stringify({
        "privateKey": privateKey.toString(),
        "publicKey": publicKey.toString(),
        "bitcoinAddress": bitcoinAddress.toString()
    });
    console.log(json);
}());

