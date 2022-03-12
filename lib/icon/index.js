import { defineComponent, openBlock, createElementBlock, normalizeClass } from 'vue';

var script = defineComponent({
  name: 'VIcon',
  props: {
    name: {
      type: String,
      default: ''
    }
  }
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("i", {
    class: normalizeClass(`v-ui-icons v-icon-${_ctx.name}`)
  }, null, 2 /* CLASS */))
}

script.render = render;
script.__file = "packages/icon/src/icon.vue";

// createApp().use(Button) --> 就会调用install方法
// createApp() --> app
script.install = (app) => {
    app.component(script.name, script); // 把组件注册到全局
};
const _Icon = script;

export { _Icon as default };
