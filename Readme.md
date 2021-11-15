
# @leebmann24/recursive-yaml-loader

loads yaml files recursively from a given folder. properties are grouped by it's filename (without extension) or foldername 
With this tool you are able to split up your configuration yamls into several files for clearity and maintainability.

<br />
<br />

### install

```shell
$ npm install @leebmann24/recursive-yaml-loader

or

$ yarn add @leebmann24/recursive-yaml-loader
```


<br />
<br />

### example

``` javascript

import loader from '@leebmann24/recursive-yaml-loader'

interface Config {
    file1: {
        property1: string
        list: string[]
    }
    
    aFolder: {
        file: string[]
    }
    
}


const config = loader.load('path/to/config/folder') as Config
```
<br />
<br />

a file can be directly rendered as array if you use yaml list syntax without property naming:
``` yaml
- "value 1"
- "value 2"
- "value 3"
```
