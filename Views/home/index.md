<html>
<head>
<title>Home page</title>
</head>
<script src="javascript/jquery.min.js"></script>
<script src="javascript/jquery.tmpl.js"></script>
</head>
<body>
<div>
<script>
$(document).ready(function(){
products= [
    { name: "myriskmonitor", id: 1 },
    { name: "profit tax tracker", id: 2 },
    { name: "sharepoint", id: 3 }
];

$("#productTmpl").tmpl(products).appendTo( "body" );

});
</script>
<script id="productTmpl" type="text/html">
	<li> <a href="product/show/${id}">${name}</a></li>
</script>
	you are requesting home page
</div>
</body>
</html>
