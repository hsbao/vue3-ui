import { defineComponent, openBlock, createElementBlock } from 'vue';

var script = defineComponent({
  name: 'VButton'
});

const _hoisted_1 = { class: "v-button" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("button", _hoisted_1, "按钮"))
}

script.render = render;
script.__file = "packages/button/src/button.vue";

// createApp().use(Button) --> 就会调用install方法
// createApp() --> app
script.install = (app) => {
    app.component(script.name, script); // 把组件注册到全局
};
const _Button = script;

export { _Button as default };
