# Currículo profissional

Este repositório contém uma página estática em React e Vite para apresentar uma trajetória profissional em gestão pública, finanças locais e cidades sustentáveis.

## Publicação no GitHub Pages

O fluxo em `.github/workflows/deploy.yml` compila e publica o site automaticamente a cada envio para a branch `main`.

Após enviar o repositório ao GitHub, acesse **Settings → Pages** e selecione **GitHub Actions** como fonte de publicação. O primeiro envio para `main` iniciará o fluxo; o endereço público aparecerá no resumo da execução concluída.

## Ajustes recomendados antes da publicação

O documento de origem não trouxe nome, e-mail, telefone ou links públicos. Antes de divulgar a página, atualize o título e inclua os canais de contato desejados em `client/src/pages/Home.tsx`.

## Desenvolvimento local

```bash
pnpm install
pnpm dev
```

Para gerar a versão estática:

```bash
pnpm build
```

