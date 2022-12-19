<template>
  <div>
    <editor
      :api-key="ApiKey"
      :init="config"
    />
  </div>
</template>
<script setup>
// import Tinymce from 'tinymce';
// import 'tinymce/themes/silver';
// import 'tinymce/plugins/paste';
// import 'tinymce/plugins/link';
// import { onMounted } from 'vue';
// onMounted(()=>{
//   Tinymce.init({
//     selector: '#editor'
//   });
// });
import Editor from '@tinymce/tinymce-vue';
import { reactive, ref } from 'vue';
const config = reactive({
  language_url: '/tinymce/langs/zh_CN.js',// 语言包的路径
  language: 'zh_CN',//语言
  readonly: true,
  height: 800,
  width: 1200,
  skin: 'oxide-dark',
  menu: {
    file: {title: '文件', items: 'newdocument'},
    edit: {title: '编辑', items: 'undo redo | cut copy paste pastetext | selectall'},
    insert: {title: '插入', items: 'link media | template hr'},
    format: {title: '格式', items: 'bold italic underline strikethrough superscript subscript | formats | removeformat'},
    tools: {title: '病例控件', items: 'template'},
  },
  toolbar: "template preview | undo redo | fullscreen | formatselect alignleft aligncenter alignright alignjustify | link unlink | numlist bullist | image media table | fontselect fontsizeselect forecolor backcolor | bold italic underline strikethrough | indent outdent | superscript subscript | removeformat | help | print | control",
  toolbar_mode: "will",
  quickbars_selection_toolbar: "removeformat | bold italic underline strikethrough | fontsizeselect forecolor backcolor",
  plugins: "template preview link image media table lists fullscreen quickbars help control code",
  language: "zh_CN", //本地化设置
  height: 500,              
  templates: [
    {
      title: "select",
      description: "Some desc 1",
      content: '<select><option value="123">123</option><option value="313">321</option></select>',
    },
    {
      title: "Some title 2",
      description: "Some desc 2",
      content: '15111',
    },
  ],
});
const ApiKey = ref('wdz0zcafealz93eqmn33zx73ufiibam0kafxoasgewr2g8fo');
</script>
<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
