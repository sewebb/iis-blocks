# IIS Blocks

Add repo to repositories:

```
"repositories": [
	{
		"type": "git",
		"url": "git@github.com:sewebb/iis-blocks.git"
	}
]
```

Install:

```
composer require iis/blocks
```

## Newsletter block

To use the newsletter block you need to add these to your wp-config:

```
define( 'MAILCHIMP_USERNAME', '...' );
define( 'MAILCHIMP_API_KEY', '...' );
```
