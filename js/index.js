$(document).ready(function(){
  

  function submit() {
  	$.ajax({
          type:"POST",
          // 后台接口地址
          url:"",
       	  data: JSON.stringify(GetJsonData()),
	      contentType: "application/json; charset=utf-8",
          datatype: "json",
          success:function(data){
          	  // 回调后的数据
              alert(data);
          },
          error: function(){
              alert("请求失败");
              console.log(GetJsonData());
          }  
                 
       });
  }

  function GetJsonData() {

      var json = {
          "title": $(".layui-input").val(),
          "text": $(".layui-textarea").val()
      };
      return json;
  }

  $(".input-btn").click( function () { 
  		console.log("submit form")
  		submit();
   });

  $(".input-check").click( function () {
  	 	$(".input-submit-body").removeClass("no-display");$(".input-submit-body").siblings().addClass("no-display");
	});
  $(".file-check").click( function () { 
  		$(".file-submit-body").removeClass("no-display");$(".file-submit-body").siblings().addClass("no-display");
  	});

  
  $(".upload-submit").click( function() {
  	console.log("upload file")
  	var myformData = new FormData();
  	myformData.append('file', $("#text-file")[0].files);
  	$.ajax({
  		// 后台接口地址
　　　　"url": "",

　　　　"type": "",

　　　　"processData": false, 

　　　　"contentType": false,    

　　　　"xhrFields": {                

　　　　　　withCredentials: true

　　　　},

　　　　"data": myformData,

　　　　success: function(data) {

　　　　　　console.log(data)

　　　　},

　　　　error: function() {
			alert("上传失败");
			console.log("upload error")
　　　　}

　　})
  })
              
});