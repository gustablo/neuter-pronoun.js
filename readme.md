## O que é pronome neutro
O pronome neutro é aquele isento de indicação de gênero, geralmente usado para se referir a pessoas não binárias. O seu uso depende do direito de escolha da pessoa, podendo optar pelo uso de pronomes como “elu/delu” ou mantendo aqueles com indicação de gênero. 

## Como utilizar
A biblioteca tem apenas uma funcão que é chamada de `pipe`, para a utilização dessa função basta apenas enviar uma frase e será retornado uma string com todas as palavras em pronome neutro.

```javascript
const { pipe } = require('neuter-pronoun.js');

const neuterPhrase = pipe('Ela é bonita');
// Elu é bonite
```

### Obs:
Essa lib contém diversos erros nas regras de pronome neutro e não deve ser utilizada em produção.

Se tiver sugestões enviar em `gpinheiro2001@gmail.com`
