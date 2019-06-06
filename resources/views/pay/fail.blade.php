<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>支付失败</title>
	<link rel="stylesheet" href="{{ asset('css/main.css') }}">
</head>
<body>
	<img class="fail_pay" src="http://play.zdzlw.com/img/v/vapp/rpay/fail_pay.png">
	<a href="./h5" class="fail_btn"></a>
	<p class="suc_p">注：由于充值到帐延迟，充值成功5分钟后，请注意查看用户余额。 </p>
	<script src="{{ asset('js/jquery.min.js') }}" type="text/javascript"></script>
	<script src="{{ asset('js/config.js') }}" type="text/javascript"></script>
	<script src="{{ asset('js/main.js') }}" type="text/javascript"></script>
	<script src="{{ asset('js/layer.js')}}" type="text/javascript" ></script>
</body>
</html>
