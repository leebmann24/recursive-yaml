import * as fs from 'fs'
import yaml from 'js-yaml'

const ALLOWED_EXTENSIONS = ['yml', 'yaml']

/**
 * 
 * @param folder 
 * @returns Object
 * @throws YAMLException
 */
export default function load(folder: string) {
    const paths = fs.readdirSync(folder)
    const r = {}
    for (const p of paths) {
        const path = `${folder}/${p}`
        if (fs.lstatSync(path).isDirectory()) {
            r[p] = load(path)
        } else {
            const data = fs.readFileSync(path, 'utf-8')
            const ext = p.substr(p.lastIndexOf('.'))
            
            if (ALLOWED_EXTENSIONS.includes(ext)) {                
                const attrName = p.substr(0, p.lastIndexOf('.'))
                r[attrName] = yaml.load(data)
            }
        }
    }
    return r
}