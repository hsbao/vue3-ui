import typescript from 'rollup-plugin-typescript2'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import path from 'path'
import vue from 'rollup-plugin-vue'
import { getPackagesSync } from '@lerna/project'

const inputs = getPackagesSync()
  .map((pck) => pck.name)
  .filter((name) => name.includes('@vui'))

export default {
  input: path.resolve(__dirname, '../packages/v-ui/index.ts'),
  output: {
    format: 'es',
    file: 'lib/index.esm.js'
  },
  plugins: [
    nodeResolve(),
    vue({
      target: 'browser'
    }),
    typescript({
      tsconfigOverride: {
        exclude: ['node_modules', 'examples']
      }
    })
  ],
  external(id) {
    return /^vue/.test(id)
  }
}
