## Deployment

Site is deployed to `www.win-key.co` via GitHub Pages. After merging a PR, run:

```bash
gh poi
git pull
nix-shell -p nodejs yarn --run "yarn build"
nix-shell -p nodejs yarn --run "yarn gh-pages"
```