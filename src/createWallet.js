// Importando as dependências 
const bip32 = require('bip32');
const bip39 = require('bip39');
const bitcoin = require('bitcoinjs-lib');

// Definição de rede
const network = bitcoin.networks.testnet;

// Caminhos da derivação
const path = `m/49'/1'/0'/0/0`;

// Criando as palavras mnemonic para a seed (palavras de senha)
let mnemonic = bip39.generateMnemonic();
const seed = bip39.mnemonicToSeedSync(mnemonic);

// Criando a raiz da carteira HD
let root = bip32.fromSeed(seed, network);

// Criando uma conta - par de pvt - pub keys
let account = root.derivePath(path);

// Gerando o endereço de pagamento P2WPKH (Pay to Witness Public Key Hash)
let { address } = bitcoin.payments.p2wpkh({
  pubkey: account.publicKey,
  network: network,
});

console.log("Carteira gerada");
console.log("Endereço: ", address);
console.log("Chave Privada:", account.toWIF());
console.log("Seed:", mnemonic);

