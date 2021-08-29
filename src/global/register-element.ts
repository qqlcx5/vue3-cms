import { App } from 'vue'
import { ElButton } from 'element-plus'
import 'element-plus/lib/theme-chalk/base.css'

const components = [ElButton]

function registerElement(app: App): void {
  for (const cpn of components) {
    app.component(cpn.name, cpn)
  }
}

export default registerElement
