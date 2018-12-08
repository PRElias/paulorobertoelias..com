# paulorobertoelias.com
Personal Website

This is my personal website available on [www.paulorobertoelias.com](http://www.paulorobertoelias.com)

## Template

If you want to use this project as a template, feel free. It installs gulp by default and its recommended that you use it to generate the files.

## Workflow

Execute the commands bellow inside dev-tools folder

```
npm install
```

```
npx gulp
```

**npx** is used instead of regular **npm** to force use local gulp avoiding global installation

## Blog (WIP)

Anexo ao site está sendo desenvolvido a migração de meu blog pessoal para uma tecnologia de geração de blog estático (hexo). Usando essa abordagem é possível melhorar consideravelmente a performance do meu blog, além de praticamente eliminar custos de hospedagem.

Para utilizar, use os comando abaixo na pasta hexo

```
npm install

npx hexo generate

npx hexo new "Novo post"
```

Após gerar ou editar um post, é necessário sempre executar o comando de geração para a criação dos arquivos, que vão para a pasta docs/blog