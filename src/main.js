import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import  firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
Vue.config.productionTip = false


var firebaseConfig = {
  apiKey: "AIzaSyCf0y-RPj2bQHfuaJqz-GlM21lBtDxBCqQ",
  authDomain: "screenshare-7c329.firebaseapp.com",
  databaseURL: "https://screenshare-7c329.firebaseio.com",
  projectId: "screenshare-7c329",
  storageBucket: "screenshare-7c329.appspot.com",
  messagingSenderId: "541646911847",
  appId: "1:541646911847:web:be727474fbc2d361fcd7c2",
  measurementId: "G-4WWHYMT4TN"
};

firebase.initializeApp(firebaseConfig);

var storage = firebase.storage();

storage.refFromURL("gs://screenshare-7c329.appspot.com/ysRbqjIBhppkKuo1JUK6/images").listAll().then(list => {
 console.info(list)
  
 })


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
