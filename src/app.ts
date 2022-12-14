import { createApp } from 'vue'

import {
  Tabbar,
  TabbarItem,
  Icon,
  Popup,
  OverLay,
  Button,
  Tabs,
  TabPane,
  Calendar,
  Input
 } from "@nutui/nutui-taro";

import './app.scss'

const App = createApp({
  onShow (options) {},
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

App.use(Tabbar)
.use(TabbarItem)
.use(Icon)
.use(Popup)
.use(OverLay)
.use(Button)
.use(Tabs)
.use(TabPane)
.use(Input)
.use(Calendar);

export default App
