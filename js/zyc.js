//事件处理
var handlerfunc = {
	//销毁该节点
	distorynode: function(Node){
		Node.parentNode.removeChild(Node);
	},
	//dom设置css
	setstyle: function(Node,cssobj){
		if(cssobj){
			for(key in cssobj){
				Node.style[key] = cssobj[key];
			}
		}
	},
}	

//数字处理
var numberhandle = {
	//数字转换成人民币汉字
	numbertormb: function(money) {    
	  //汉字的数字
	  var cnNums = new Array('零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖');
	  //基本单位
	  var cnIntRadice = new Array('', '拾', '佰', '仟');
	  //对应整数部分扩展单位
	  var cnIntUnits = new Array('', '万', '亿', '兆');
	  //对应小数部分单位
	  var cnDecUnits = new Array('角', '分', '毫', '厘');
	  //整数金额时后面跟的字符
	  var cnInteger = '整';
	  //整型完以后的单位
	  var cnIntLast = '元';
	  //最大处理的数字
	  var maxNum = 999999999999999.9999;
	  //金额整数部分
	  var integerNum;
	  //金额小数部分
	  var decimalNum;
	  //输出的中文金额字符串
	  var chineseStr = '';
	  //分离金额后用的数组，预定义
	  var parts;
	  if (money == '') { return ''; }
	  money = parseFloat(money);
	  if (money >= maxNum) {
	    //超出最大处理数字
	    return '';
	  }
	  if (money == 0) {
	    chineseStr = cnNums[0] + cnIntLast + cnInteger;
	    return chineseStr;
	  }
	  //转换为字符串
	  money = money.toString();
	  if (money.indexOf('.') == -1) {
	    integerNum = money;
	    decimalNum = '';
	  } else {
	    parts = money.split('.');
	    integerNum = parts[0];
	    decimalNum = parts[1].substr(0, 4);
	  }
	  //获取整型部分转换
	  if (parseInt(integerNum, 10) > 0) {
	    var zeroCount = 0;
	    var IntLen = integerNum.length;
	    for (var i = 0; i < IntLen; i++) {
	      var n = integerNum.substr(i, 1);
	      var p = IntLen - i - 1;
	      var q = p / 4;
	      var m = p % 4;
	      if (n == '0') {
	        zeroCount++;
	      } else {
	        if (zeroCount > 0) {
	          chineseStr += cnNums[0];
	        }
	        //归零
	        zeroCount = 0;
	        chineseStr += cnNums[parseInt(n)] + cnIntRadice[m];
	      }
	      if (m == 0 && zeroCount < 4) {
	        chineseStr += cnIntUnits[q];
	      }
	    }
	    chineseStr += cnIntLast;
	  }
	  //小数部分
	  if (decimalNum != '') {
	    var decLen = decimalNum.length;
	    for (var i = 0; i < decLen; i++) {
	      var n = decimalNum.substr(i, 1);
	      if (n != '0') {
	        chineseStr += cnNums[Number(n)] + cnDecUnits[i];
	      }
	    }
	  }
	  if (chineseStr == '') {
	    chineseStr += cnNums[0] + cnIntLast + cnInteger;
	  } else if (decimalNum == '') {
	    chineseStr += cnInteger;
	  }
	  return chineseStr;
	}
}

//弹框
var dialog = {
	//生成loading
	loadinginit: function(cssobj,url){
		var loadingimg = document.createElement("img");
		loadingimg.src = url?url:"./image/loading.gif";
		loadingimg.id = "J_zyc_loadingimg";
		loadingstyle = loadingimg.style;
		var loadinginitcss = {
			position : "absolute",
			width : "50px",
			top : "50%",
			left : "50%",
			marginTop : "-25px",
			marginLeft : "-25px",
			zIndex: "1000"
		}
		for (value in loadinginitcss) {
			loadingstyle[value] = loadinginitcss[value];
		}
		if(cssobj){
			for (value in cssobj) {
				loadingstyle[value] = cssobj[value];
			}	
		}
		document.getElementsByTagName("body")[0].appendChild(loadingimg);
	},
	loadingdistory: function(time){
		var time = time?time:0;
		setTimeout(function(){
			var loadingimg = document.getElementById("J_zyc_loadingimg");
			if(loadingimg){
				handlerfunc.distorynode(loadingimg);
			}
		},time);
	},
	//提示信息
	msginit: function(message,time){
		var distorytime = time?time:0;
		var msgdiv = document.createElement("div");
		msgdiv.id = "J_zyc_msg";
		var msgstyle = {
			background:"rgba(0,0,0,0.7)",
			padding:"10px 20px",
			position: "absolute",
			top:"50%",
			left:"50%"
		}
		handlerfunc.setstyle(msgdiv,msgstyle);
		document.getElementsByTagName("body")[0].appendChild(msgdiv);
		setTimeout(function(){
			this.msgdistory();
		},time);
	},
	msgdistory: function(){
		handlerfunc.distorynode(document.getElementById("J_zyc_msg"));
	},
	//生成alert
	alert: function(){

	},
	confirm: function(){

	}
}