<h1 align="center">IIS Blocks</h1>
<p align="center">WordPress blocks library.</p>

## Install

```
composer require iis/blocks
```

## Requirements

`iis-blocks` assumes that the website that runs it runs on [iis-styleguide](https://github.com/sewebb/iis-styleguide). The following js components needs to be enabled from the styleguide:

* Form

## Usage

The package will be installed as a plugin so all you need to do is activate it. All blocks will be available in the editor under the category "Internetstiftelsen".

## Testing

If you have Docker installed, you can utilize `wp-env`.

```bash
npx wp-env start # To start the environment
npx wp-env stop # To stop the environment
```

A clean wordpress install will be available at `http://localhost:8888` with the plugin activated and IIS default theme.
