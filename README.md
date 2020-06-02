# ibantools

> This package is deprecated. Now that ibantools publishes ES Modules themselves, this mirror is obsolete. That's a good thing! Go use [ibantools](https://www.npmjs.com/package/ibantools) directly!

This is a mirror of [ibantools](https://www.npmjs.com/package/ibantools), bundled and exposed as ES module.

## Install

```sh
npm install @bundled-es-modules/ibantools
bower install bundled-es-modules/ibantools
```

## Use

```html
<script type="module">
  // from main file
  import { isValidIBAN } from 'ibantools'; // isValidIBAN or any other function supported
  // or directly
  import { isValidIBAN } from 'ibantools/ibantools.js';
  console.log(isValidIBAN);
</script>
```

Make sure you added `@bundled-es-modules` scope to the path if used via npm.
