import '@bootstrap/css/bootstrap.css'
import Vue from '../node_modules/vue/dist/vue.common'
import Calendar from './modules/calendar'
import Hello from './components/Hello.vue'
import { ContentLoader,FacebookLoader,CodeLoader,BulletListLoader,InstagramLoader,ListLoader } from 'vue-content-loader'

// 测试对js方法进行单元测试
let calendar = new Calendar()
calendar.init('app')
// 测试对vue组件进行单元测试
var MyComponent = Vue.extend({
    template: `
        <div>
            <h3>测试组件</h3>
            <hello></hello>
            <ListLoader/>
            <ContentLoader>
                <rect x="0" y="0" rx="3" ry="3" width="250" height="10" />
                <rect x="20" y="20" rx="3" ry="3" width="220" height="10" />
                <rect x="20" y="40" rx="3" ry="3" width="170" height="10" />
                <rect x="0" y="60" rx="3" ry="3" width="250" height="10" />
                <rect x="20" y="80" rx="3" ry="3" width="200" height="10" />
                <rect x="20" y="100" rx="3" ry="3" width="80" height="10" />
            </ContentLoader>
        </div>
    `,
    components: {
        hello: Hello,
        ContentLoader,
        FacebookLoader,
        CodeLoader,
        BulletListLoader,
        InstagramLoader,
        ListLoader
    }
})
  
  // 创建并挂载到 #app (会替换 #app)
  new MyComponent().$mount('#appVue')