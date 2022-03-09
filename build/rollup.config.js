import typescript from 'rollup-plugin-typescript2'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import path from 'path'
import vue from 'rollup-plugin-vue'
import { getPackagesSync } from '@lerna/project'

const inputs = getPackagesSync()
  .map((pck) => pck.name)
  .filter((name) => name.includes('@vui'))

export default inputs.map((name) => {
  const pckName = name.split('@vui')[1]
  return {
    input: path.resolve(__dirname, `../packages/${pckName}/index.ts`),
    output: {
      format: 'es',
      file: `lib/${pckName}/index.js`
    },
    plugins: [
      nodeResolve(),
      vue({
        target: 'browser'
      }),
      typescript({
        tsconfigOverride: {
          compilerOptions: {
            declaration: false
          },
          exclude: ['node_modules']
        }
      })
    ],
    external(id) {
      return /^vue/.test(id) || /^@vui/.test(id)
    }
  }
})
