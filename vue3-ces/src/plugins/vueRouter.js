import Vue from 'vue'
import Router from 'vue-router'
import IndexLayout from '@/page/IndexLayout'

// 基本组件
import Base from '@/page/Base'
import Doc from '@/page/Doc'
import Config from '@/page/Config'
import User from '@/page/User/index'
// import tree from '@/components/page/Tree/index'
// import treeTable from '@/components/page/TreeTable/index'
// import test from '@/components/page/Test/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'IndexLayout',
      component: IndexLayout,
      redirect: '/Base',
      children: [
        {
          path: '/Base',
          name: 'Base',
          component: Base,
          redirect: '/Base/user',
          children: [
            {
              path: '/Base/user',
              name: 'user',
              component: User
            }
          ]
        },{
          path: '/Doc',
          name: 'Doc',
          component: Doc
        },{
          path: '/Config',
          name: 'Config',
          component: Config
        }
      ]
    }
  ]
})
