Перед началом работы сделать символьную ссылку:

  `# ln -s "$(pwd)/shared" "$(pwd)/lib"`

Для удобного обращения к часто используемым директориям:

  `# mkdir shared/node_modules`

  `# ln -s "$(pwd)/shared/components" "$(pwd)/shared/node_modules/components"`

