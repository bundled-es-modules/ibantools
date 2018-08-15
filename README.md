# ibantools

This is a mirror of [ibantools](https://www.npmjs.com/package/ibantools) for bower, bundled and exposed as ES module.

## Install

```
bower install bundled-es-modules/ibantools
```

## Use

```html
<script type="module">
  // from main file
  import { isValidIBAN } from 'ibantools'; // isValidIBAN or any other function supported
  // or directly
  import { isValidIBAN } from './bower_components/ibantools/ibantools.js';
  console.log(isValidIBAN);
</script>
```
