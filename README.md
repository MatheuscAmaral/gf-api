# API do E-commerce

Bem-vindo ao repositório da **API do E-commerce**, responsável por gerenciar a lógica de negócio, persistência de dados e comunicação entre o frontend e o banco de dados. Esta API foi desenvolvida com **Node.js**, utilizando **Fastify** como framework de aplicação e **Prisma** como ORM para interagir com o banco de dados de maneira eficiente e tipada.

## Descrição

Esta API fornece endpoints para todas as operações necessárias em um e-commerce moderno, como gerenciamento de usuários, produtos, carrinho de compras e processamento de pedidos. Combinando a simplicidade do Fastify com a flexibilidade do Prisma, o objetivo é oferecer um backend altamente escalável e de fácil manutenção.

## Tecnologias Utilizadas

- **Node.js** – Ambiente de execução JavaScript que possibilita a construção de aplicações de alta performance.
- **Fastify** – Framework web minimalista e rápido, focado em eficiência e baixa sobrecarga.
- **Prisma** – ORM (Object-Relational Mapping) para interação com bancos de dados SQL e NoSQL, fornecendo migrações automáticas e type safety.
- **TypeScript** (opcional, mas recomendado) – Fornece tipagem estática, facilitando a manutenção do código.
- **Banco de Dados** – Geralmente **PostgreSQL** ou **MySQL**, mas o Prisma oferece suporte a outras opções.

## Funcionalidades Principais

- **Gerenciamento de Produtos**  
  - Criação, leitura, atualização e remoção de produtos.  
  - Integração com serviços de upload de imagens, caso necessário.

- **Autenticação e Usuários**  
  - Registro de novos usuários com segurança.  
  - Login seguro usando tokens (JWT ou outro método de autenticação).  
  - Recuperação de senha ou redefinição de credenciais.

- **Carrinho de Compras**  
  - Adicionar e remover itens do carrinho.  
  - Atualizar quantidades de produtos em tempo real.  
  - Calcular subtotal, frete e descontos.
