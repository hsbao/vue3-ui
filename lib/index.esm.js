import { defineComponent, openBlock, createElementBlock, normalizeClass } from 'vue';

var script$1 = defineComponent({
  name: 'VButton'
});

const _hoisted_1 = { class: "v-button" };

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("button", _hoisted_1, "按钮"))
}

script$1.render = render$1;
script$1.__file = "packages/button/src/button.vue";

// createApp().use(Button) --> 就会调用install方法
// createApp() --> app
script$1.install = (app) => {
    app.component(script$1.name, script$1); // 把组件注册到全局
};
const _Button = script$1;

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

const components = [_Button, _Icon];
const install = (app) => {
    components.forEach((component) => {
        app.component(component.name, component);
    });
};
// 这样在使用组件库的时候，通过createApp().use(VUI)就可全局注册
var index = {
    install
};

export { index as default };
