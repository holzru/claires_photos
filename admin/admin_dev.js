'use strict';

//FIXME nothing here seems to work. FIXME
var API = {
  "development": {
    "cloud_name": "clairephotography",
    "api_key": "439198291915981",
    "api_secret": "Mkg4z0aSdewn1XlM79gNvxz1EwY",
    "enhance_image_tag": "true",
    "static_image_support": "false"
  },
  "env_var": "CLOUDINARY_URL=cloudinary://439198291915981:Mkg4z0aSdewn1XlM79gNvxz1EwY@clairephotography",
  "admin_url": "https://439198291915981:Mkg4z0aSdewn1XlM79gNvxz1EwY@api.cloudinary.com/v1_1/clairephotography",
  "secure_delivery_url": "https://res.cloudinary.com/clairephotography/image/upload",
  "base_url":  "https://api.cloudinary.com/v1_1/clairephotography/image/upload",
  "mailgun": "key-1dccddf06bd748f09c97b26fc3770c6d"
}


function ajaxSuccess(){
  let res = JSON.parse(this.response);
  console.log(res.secure_url);
}

function postImage(img){
  let data = new FormData();
  data.append('upload_preset', 'standard');
  data.append('file', img);
  data.append('api_key', API.development.api_key);
  let xhr = new XMLHttpRequest();
  xhr.onload = ajaxSuccess;
  xhr.open("post", API.base_url, true);
  xhr.send(data);
  console.log(xhr.responseText);
}

function handleUpload(event){
  let files = event.target.files;
  for (var i = 0; i < files.length; i++) {
    postImage(files[i]);
  }
}

function testSuccess(){
  let res = JSON.parse(this.response);
  debugger;
  console.log(res.secure_url);
}

function testAPI(event){
  // let xhr = new XMLHttpRequest();
  // xhr.onload = testSuccess;
  // xhr.open("get", `${API.admin_url}/resorces/image`, true);
  // xhr.send();
  // console.log(xhr.responseText);
  $.getJSON(`${API.admin_url}/resorces/image`, (data) =>{
    console.log(data);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  let div = document.createElement('div');
  div.innerHTML = 'HELLO';
  document.body.appendChild(div);
  let upload = document.createElement('input');
  upload.setAttribute('type', 'file');
  upload.setAttribute('multiple', true);
  document.body.appendChild(upload);
  upload.addEventListener('change', handleUpload);
  //test API
  let but = document.createElement('button');
  but.innerHTML = 'TEST';
  document.body.appendChild(but);
  but.addEventListener('click', testAPI);
});
