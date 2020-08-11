//  所有组件的入口文件
import Vue from 'vue'
const install = (vue) => {
    // 把所有的组件设成全局组件
    // Vue.component(Button.name,Button)
    // Vue.component(Icon.name,Icon)
    // Vue.component(ButtonGroup.name,ButtonGroup)
    //  优化上面的写法
    const requireComponent =require.context('.',true,/\.vue/);
    requireComponent.keys().forEach(fileName => {
        const config = requireComponent(fileName);
        Vue.component(config.default.name,config.default);
    });
}
if(typeof window.vue !=='undefined') {
    install(Vue);
}
export default {
    install
}