<h1 align="center">IIS Blocks</h1>
<p align="center">WordPress blocks library.</p>

## Install

```
composer require iis/blocks
```

## Usage

The package will be installed as a plugin so all you need to do is activate it. All blocks will be available in the editor under the category "Internetstiftelsen".

### Newsletter block
To use the newsletter block you need to add these to your wp-config:

```
define( 'MAILCHIMP_USERNAME', '...' );
define( 'MAILCHIMP_API_KEY', '...' );
```
