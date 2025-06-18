# Controle de Combustível

Um aplicativo web responsivo para controle de abastecimentos de combustível, desenvolvido com React, HTML, CSS e JavaScript.

## 🚀 Funcionalidades

- **Registro de Abastecimentos**: Adicione novos abastecimentos com data, tipo de combustível, quantidade, preço e informações do veículo
- **Histórico Completo**: Visualize todos os abastecimentos registrados
- **Estatísticas em Tempo Real**: Acompanhe total gasto, litros consumidos e preço médio
- **Edição e Exclusão**: Modifique ou remova registros existentes
- **Design Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Persistência de Dados**: Os dados são salvos no localStorage do navegador
- **Interface Moderna**: Design limpo e intuitivo com animações suaves

## 📱 Compatibilidade

O aplicativo é totalmente responsivo e funciona em:
- **Desktop**: Monitores de todos os tamanhos
- **Tablet**: iPads, Android tablets
- **Mobile**: Smartphones Android e iPhone
- **Navegadores**: Chrome, Firefox, Safari, Edge

## 🛠️ Tecnologias Utilizadas

- **React 18**: Framework JavaScript para interface
- **CSS3**: Estilos responsivos com Grid e Flexbox
- **HTML5**: Estrutura semântica
- **JavaScript ES6+**: Lógica da aplicação
- **React Icons**: Ícones modernos
- **LocalStorage**: Persistência de dados

## 📦 Instalação

1. **Clone o repositório**:
   ```bash
   git clone [url-do-repositorio]
   cd controle-combustivel
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Execute o aplicativo**:
   ```bash
   npm start
   ```

4. **Acesse no navegador**:
   Abra [http://localhost:3000](http://localhost:3000)

## 🎯 Como Usar

### Adicionando um Abastecimento

1. Clique no botão "Adicionar Abastecimento"
2. Preencha os campos obrigatórios:
   - **Data**: Data do abastecimento
   - **Tipo de Combustível**: Gasolina, Etanol, Diesel ou Flex
   - **Quantidade**: Litros abastecidos
   - **Preço por Litro**: Valor pago por litro
3. Preencha os campos opcionais:
   - **Odômetro**: Quilometragem do veículo
   - **Placa**: Placa do veículo
   - **Observações**: Notas adicionais
4. Clique em "Salvar"

### Editando um Registro

1. Localize o abastecimento na lista
2. Clique no botão de editar (ícone de lápis)
3. Modifique os campos desejados
4. Clique em "Atualizar"

### Excluindo um Registro

1. Localize o abastecimento na lista
2. Clique no botão de excluir (ícone de lixeira)
3. Confirme a exclusão

## 📊 Estatísticas

O aplicativo calcula automaticamente:
- **Total Gasto**: Soma de todos os abastecimentos
- **Total de Litros**: Quantidade total de combustível
- **Preço Médio**: Média ponderada dos preços por litro

## 🎨 Design Responsivo

### Breakpoints
- **Desktop**: > 768px
- **Tablet**: 768px - 480px
- **Mobile**: < 480px

### Características
- Layout adaptativo com CSS Grid e Flexbox
- Tipografia responsiva
- Espaçamentos otimizados para cada dispositivo
- Touch-friendly em dispositivos móveis

## 💾 Armazenamento

Os dados são salvos no localStorage do navegador, garantindo:
- Persistência entre sessões
- Funcionamento offline
- Privacidade dos dados (não são enviados para servidores)

## 🔧 Estrutura do Projeto

```
controle-combustivel/
├── public/
│   └── index.html
├── src/
│   ├── App.js          # Componente principal
│   ├── App.css         # Estilos responsivos
│   ├── index.js        # Ponto de entrada
│   └── index.css       # Estilos globais
├── package.json        # Dependências
└── README.md          # Documentação
```

## 🚀 Deploy

Para fazer o build de produção:

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `build/`.

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 🆘 Suporte

Se você encontrar algum problema ou tiver sugestões, por favor abra uma issue no repositório.

---

Desenvolvido com ❤️ para facilitar o controle de combustível! 