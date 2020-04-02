# fine-mini
改写小程序Page方法，注入一些生命周期钩子。内部集成了`EventBus`类，`CreatePage`类

## 安装
``` js
npm install fine-mini
```

## 使用
``` js
import { CreatePage } from 'fine-mini'

const _page =  new CreatePage({
  data () {
    return {
      name: 'test'
    }
  },
  onShow () {
    console.log('page show')
  },
  onHide: {
    beforeHandler () {
      console.log('before onHide')
    },
    async: false
  }
})

_page({
  _name: 'TEST_PAGE',
  data: {
    host: ''
  }
})
```
