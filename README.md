# @kuohuanhuan/stylelint-config

My configurations for [Stylelint](https://stylelint.io), supports CSS and SCSS.

This will automatically sort the CSS rules - with zero setup.

## Installation

Install via NPM:

```sh
npm i stylelint @kuohuanhuan/stylelint-config -D
```

## Usage

Add chosen config to the [`extends` section](https://eslint.org/docs/user-guide/configuring#extending-configuration-files) of your Stylelint config file (e.g. `.stylelintrc`):

- Both CSS and SCSS (recommended)

```json
{
  "extends": ["@kuohuanhuan/stylelint-config"]
}
```

- CSS only

```json
{
  "extends": ["@kuohuanhuan/stylelint-config/css"]
}
```

- SCSS only

```json
{
  "extends": ["@kuohuanhuan/stylelint-config/scss"]
}
```

It's recommended to run Stylelint with [`--max-warnings` flag](https://stylelint.io/user-guide/usage/options#maxwarnings), because many rules has [`warning` severity](https://stylelint.io/user-guide/configure#severity):

```sh
stylelint '**/*.(css|scss)' --max-warnings 0
```

## License

Copyright (c) 2023 [kuohuanhuan](https://github.com/kuohuanhuan), licensed under [MIT](https://github.com/kuohuanhuan/x-markdown-css/blob/master/LICENSE).
