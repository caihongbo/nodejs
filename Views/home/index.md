<html>
<head>
<title>Home page</title>
</head>
<script src="/resources/javascript/jquery.min.js"></script>
<script src="/resources/javascript/jquery.tmpl.js"></script>
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
<div id="timeline-embed"></div>
    <script type="text/javascript">
        var timeline_config = {
            width:          "100%",
            height:         "100%",
            source:         '/data/example_kitchensink.json',
            start_at_end:   true,                          //OPTIONAL
            hash_bookmark:  true,                           //OPTIONAL
            font:           'Bevan-PotanoSans',             //OPTIONAL
            maptype:        'watercolor',                   //OPTIONAL
            css:            '/resources/css/timeline.css',     //OPTIONAL
            js:             '/resources/javascript/timeline-min.js'    
        }
    </script>
    <script type="text/javascript" src="/resources/javascript/timeline-embed.js"></script>
</body>
</html>
