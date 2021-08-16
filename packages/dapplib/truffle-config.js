require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture globe food ski strategy rival random unaware hard light army ghost'; 
let testAccounts = [
"0x1af53bae29a1046676e2593a2601fe7390454d7f90f2ec7b1803bfa0a671524d",
"0xe342966ace66d9d71b0d6b4e370aa1a8ab0775bea5b680f9909679144e408cff",
"0x302907de22b492b0158e1209c13cd42c40ffe67a44b83a05568602e76f24e212",
"0x3355870df3dff63559dc03a0f7423d6d4853054505df96dae0548a1eb1f3bd54",
"0x8e50833a43184fd0c696958d255b4f2347efa5d017882025bbf89bd554fbcc5f",
"0x468d4921614c87663546752747e29c56d5280548dd122283abda9e785b01ed32",
"0x48ff189bfc87597ce83e08d8be024696bdebe3d9d054d26e35a353c94f29954e",
"0x33e7c7a630727dc94171ffc9139efcfe6fafcf2f786dd3671c69c59ae51c5ab0",
"0xac8ac04dd6d000e97f091adf5f2962e98eabaf36f504da8a5bb99b773fd22302",
"0x3c5fd1263f85bf9223683c8af810cf8729f8ff6ba1d9c7d5ae178ea80890a818"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
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
            version: '^0.8.0'
        }
    }
};

