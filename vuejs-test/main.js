//Definicion de componentes
Vue.component('list-of-items', {
  props: ['list'],
  template: '<ul><li v-for="item in list">{{ item.name }}</li></ul>'
});

var data = {
  message: 'You loaded this page on ' + new Date().toLocaleString(), 
  title: 'Text with title', 
  showLine: false,
  table : [{id:1, name:'name1'},{id:2, name:'name2'},{id:3, name:'name3'}], 
  textInput : '', 
  object : {}
};

var app = new Vue({
  el: '#app',
  data: data, 
  created : function() {
    console.log('Vue created');
  }, 
  mounted : function() {
    console.log('Vue mounted');
  }, 
  updated : function() {
    console.log('Vue updated');
  }, 
  destroyed : function() {
    console.log('Vue destroyed');
  }, 
  methods: {
    printMessage : function() {
      console.log(this.message);
    }, 
    submit : function() {
      alert('Submit');
    }
  },
  computed : {
    upperMessage : function() {
      return this.message.toUpperCase();
    }
  }, 
  watch : {
    textInput : function(newValue, oldValue) {
      console.log('New value=>'+newValue);
    } 
  }
});

app.$data === data; //=> true
app.$el === document.getElementById('app'); //=> true

app.$set(app.object, 'prueba', 20);
