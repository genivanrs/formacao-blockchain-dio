***Geração de Carteiras na Testnet do Bitcoin***
Este é um guia passo a passo para gerar endereços de carteiras na Testnet do Bitcoin usando Node.js e bibliotecas específicas, direcionados pelo instrutor 
*Cassiano Peres* pelo bootcamp da **Digital Inovation One**

**Pré-requisitos**
Node.js instalado no seu sistema
Gerenciador de pacotes npm (geralmente instalado junto com o Node.js)
Instalação das Dependências
Certifique-se de ter instalado as seguintes bibliotecas:

npm install bip32 bip39 bitcoinjs-lib
Executando o Script
Para gerar um endereço de carteira na Testnet do Bitcoin, siga estas etapas:

**Clone este repositório:**

git clone https://github.com/genivanrs/formacao-blockchain-dio.git
cd formacao-blockchain-dio.git
Execute o script createWallet.js:

node createWallet.js
Isso executará o script que gera um endereço de carteira, chave privada e semente (mnemonic).

**Detalhes do Script**
O script createWallet.js utiliza as seguintes bibliotecas e funcionalidades:

bip39: Gera palavras mnemonic para a semente da carteira.
bip32: Deriva uma árvore de chaves hierárquicas (HD) a partir da semente.
bitcoinjs-lib: Gera endereços de carteira e chaves privadas usando a biblioteca BitcoinJS.
O endereço gerado será exibido no console junto com a chave privada e a mnemonic. Certifique-se de não compartilhar sua chave privada em ambientes não seguros.

**Exemplo de Saída**
Após executar o script, você verá uma saída semelhante a esta:
Carteira gerada
Endereço: tb1qfgrzv6au3kc40vsj7waxxaljt0r4s7dt9v2c5p
Chave Privada: cMraF6P5w8KExA5eT2WwE8Dx7FqJtL26WRA2XV7LZ59G9HccBLW1
Seed: describe promote follow double door bitter kingdom patient crush recycle oyster domain
