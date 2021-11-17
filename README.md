
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

``` typescript

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


### parent/child combination
a file with the same name as the folder in which it's in will be merged into its "parent"

- *propXY* (folder) 
  - *propXY.yml* (will NOT be encapsulated)
    - hello: "world"
  - *anotherProp.yml* (will be encapsulated)
    - abc: "xyz"
  


```JSON
{
    "propXY": {
        "hello": "world",
        "anotherProp": {
            "abc": "xyz"
        }
    }
}
 ``` 