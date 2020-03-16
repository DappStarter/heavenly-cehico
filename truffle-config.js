require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half climb frown skull traffic develop remain hole half enrich swift genius'; 
let testAccounts = [
"0x09027daa49651b1dbcb983873be53f8e917ff344069da5659d68bb012df8bdf8",
"0x11b70d63bd768a9079a15a375995af112c45f3da2fcdbcff619a68ed03fa4e22",
"0x0146a23369768e3535b0daa7a5ce7d5411004b4ef761669b98b6594239557534",
"0x893834ae042c5e76d82a94919866bf993e94628c373aa5c6ed39fe3d0e775c99",
"0x92d6941fcffac651b5a3fba2828b32b3903eeaac004209d955a0152654bec0d1",
"0xe51865d144ad0b81b01f2b855b5a531bcc3652481113b78ceb43154b558402d2",
"0xf73a146808fac5b9f2326670c15c321e2f11529c5af030b0305e1182c535fc0f",
"0x8ff12f4a0b0a8e224fe2c77f405890b639ef6dd41fd0529aae94ff10e07dc84e",
"0x0d9d801d00bb2f9aab7c00d1ea34ad6bbdcaafd85769d7b904dad7c4527827b4",
"0xf1468cba9a17cc62658286bfcd5f47106378902ab980186ab1ed3ffbac8c4b0b"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                testAccounts,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
