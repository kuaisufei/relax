# relax
js常用功能库
numberfunc方法
    numbertormb 数字转换成大写汉字
        numberfunc.numbertormb(1022223333)  //壹拾亿贰仟贰佰贰拾贰万叁仟叁佰叁拾叁元整

dialog对象
	loadinginit 生成loading框
		参数  styleobj,url
		dialog.loadinginit({width:100px;},"./image/loading.gif");
	loadingdistory  销毁loading框
		dialog.loadingdistory();