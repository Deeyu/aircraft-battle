//获取gulp对象

var gulp=require("gulp");

//定义任务
//gulp.task("one",function(){
//	gulp.src("src/html/05_dafeiji.html")//指定要处理的文件
//		.pipe( gulp.dest("dest/html"))//处理完成后
//});
//gulp.task('dist',function(){
//  gulp.watch('src/html/05_defeiji.html',['copy'])
//  	
//});
//gulp.task("tow",function(){
//	console.log("tow");
//});
////three 任务one 任务和tow任务
//gulp.task("three",["one","tow"],function(){
//	console.log("three");
//});
////默认任务
//gulp.task("default",["one","tow"]);

//htmlmin插件的参数对象
//var obj = {
//	removeComments: true, //清除HTML注释
//	collapseWhitespace: true, //压缩HTML
//	collapseBooleanAttributes: true,//省略布尔属性的值<input checked="true"/> ==> <input checked/>
//	removeEmptyAttributes: true, //删除所有空格作属性值 <input id="" /> ==> <input />
//	removeScriptTypeAttributes: true, //删除<script>的type="text/javascript"
//	removeStyleLinkTypeAttributes: true, //删除<style>和<link>的type="text/css"
//	minifyJS: true, //压缩页面JS
//	minifyCSS: true //压缩页面CSS
//}


//获取gulp对象
var gulp =require("gulp");
////导入插件
var babel = require('gulp-babel'); //es6转es5
var uglify=require("gulp-uglify");
var minifyCss=require("gulp-minify-css");
//var htmlmin = require("gulp-htmlmin")//html压缩和优化插件
////定义任务
gulp.task("jsTask",function(){
	gulp.src("js/*")
		.pipe(babel({"presets":["es2015"]}))
		.pipe(uglify())
		.pipe( gulp.dest("dest/js"));
})
gulp.task("cssTask",function(){
	gulp.src("css/*")
		.pipe(minifyCss("css/defeiji.css"))
		.pipe( gulp.dest("dest/css"));
})
gulp.task("default",["jsTask","cssTask"]);
