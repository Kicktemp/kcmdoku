# Optionen

## Basis

### Public Path

- Type: `string`
- Default: `/`

The base URL the site will be deployed at. You will need to set this if you plan to deploy your site under a sub path, for example, GitHub pages. If you plan to deploy your site to `https://foo.github.io/bar/`, then you should set `Public Path` to `"/bar/"`. It should always start and end with a slash.

The Public Path is automatically prepended to all the URLs that start with / in other options, so you only need to specify it once.

### Version 

- Type: `int`
- Default: `1`

Specifies the version of your OIL configuration. It will be stored with the consent cookie to track which explicit configuration version consent was granted for.

Configuration version is a number. It will be stored with the consent cookie so we can keep track of which explicit configuration version consent was granted for. Therefore, we recommend to increment this number everytime you change your OIL configuration.

### cookie_expires_in_days 

- Type: `int`
- Default: `90`

Value in days until the domain cookie used to save the users decision in days

### advanced_settings 

- Type: `boolean`
- Default: `true`

Shows an advanced settings button, displaying the Cookie Preference Center. The CPC enables the user to choose their own level of privacy. These settings are stored in the oil cookie (both SOI and POI) as well.

### preview_mode 

- Type: `boolean`
- Default: `false`

The preview mode is useful when testing OIL in a production or live environment. As a dev you can trigger the overlay by setting a cookie named "oil_preview" with the value "true". This will show the OIL layer on your client.

### powered_by 

- Type: `boolean`
- Default: `true`

The preview mode is useful when testing OIL in a production or live environment. As a dev you can trigger the overlay by setting a cookie named "oil_preview" with the value "true". This will show the OIL layer on your client.

## Links
- Type: `repeatable`


::: tip
You can also use this option through the CLI:
:::

### Language

- Type: `string`
- Default: `*`

### Name

- Type: `string`
- Default: ``

### Joomla Link

- Type: `int`
- Default: ``

### Eigener Link (optional)

- Type: `url`
- Default: ``

### Target

- Type: `string`
- Default: `_blank`

## Design

## Übersetzungen

## Vorlagen

## PRO: KCM DEV Kit

## PRO: Content-Security-Policy (CSP) (beta)

## Berechtigungen
