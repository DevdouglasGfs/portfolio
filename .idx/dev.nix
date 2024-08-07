# To learn more about how to use Nix to configure your environment
# see: https://developers.google.com/idx/guides/customize-idx-env
{ pkgs, ... }: {
  channel = "stable-23.11"; # "stable-23.11" or "unstable"
  # Use https://search.nixos.org/packages to  find packages
  packages = [
    pkgs.bun
  ];
  # Sets environment variables in the workspace
  env = { };
  # search for the extension on https://open-vsx.org/ and use "publisher.id"
  idx.extensions = [
    "antfu.iconify"
    "Vue.volar"
    "bradlc.vscode-tailwindcss"
    "mhutchie.git-graph"
    "dbaeumer.vscode-eslint"
    "esbenp.prettier-vscode"
  ];
  # preview configuration, identical to monospace.json
  idx.previews = { };
}
