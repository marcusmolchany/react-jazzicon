# react-jazzicon

[![NPM version][npm-image]][npm-url]
[![License][license-image]][license-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![Downloads][downloads-image]][downloads-url]

This is a react component for [Dan Finlay's](https://github.com/danfinlay)
[jazzicon](https://github.com/danfinlay/jazzicon).

# usage

```js
import Jazzicon from 'react-jazzicon'

export default function App(){

  …

  return (
    <Jazzicon diameter={100} seed={Math.round(Math.random() * 10000000)} />
  )
}
```

for Ethereum addresses

```js
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon'

export default function App () {

  …

  return (
    <Jazzicon diameter={100} seed={jsNumberForAddress('0x1111111111111111111111111111111111111111')} />
  )
}
```

# setup

```sh
$ git clone https://github.com/marcusmolchany/react-jazzicon
$ cd react-jazzicon
$ yarn # or npm i
```

## storybooks

the storybooks github pages are hosted from the `/docs` directory on the `gh-pages` branch.

run the storybooks locally by running the following commands:

```sh
$ yarn # or npm i
$ yarn storybooks # or npm run storybooks
```

[npm-image]: https://img.shields.io/npm/v/react-jazzicon.svg?style=for-the-badge&labelColor=161c22
[npm-url]: https://www.npmjs.com/package/react-jazzicon
[license-image]: https://img.shields.io/npm/l/react-jazzicon.svg?style=for-the-badge&labelColor=161c22
[license-url]: /LICENSE
[snyk-image]: https://snyk.io/test/github/marcusmolchany/react-jazzicon/badge.svg?targetFile=package.json
[snyk-url]: https://snyk.io/test/github/marcusmolchany/react-jazzicon?targetFile=package.json
[downloads-image]: https://img.shields.io/npm/dm/react-jazzicon.svg?style=for-the-badge&labelColor=161c22
[downloads-url]: https://www.npmjs.com/package/react-jazzicon
