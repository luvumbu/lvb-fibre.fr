<?php
session_start();
?>
<!DOCTYPE html>
<html lang="fr">

<head id="head">
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Bokonzi</title>
</head>
<link rel="icon" href="https://pbs.twimg.com/profile_images/1244325575659061249/YjvhVutG_400x400.jpg" type="image/gif" sizes="16x16">

<body id="body">
	<?php
	include("link/app.php");
	?>
	<style>
		.w50pc{
			width: 70%;
			margin: auto;
		}
		.w50pc h1 {
			margin-bottom: 50px;
		}
		.text-center {
			text-align: center;
		}
		.padding-top-100px{
			padding-top: 100px;
		}
		.display_flex{
			display: flex;
			justify-content: space-around;
		}
		.display_flex img {
			margin-bottom: 60px;
		}
		.position_relative {
			position: relative;
		}
		.center-h{
			position: absolute;
			width: 100%;
			margin: auto;
			text-align: center;
			font-size: 3em;
			color: white;
			padding-top: 100px;
		}

		@media screen and (max-width: 1280px) {
			.w50pc{
				width: 90%;
				margin: auto;
				text-align: justify;
			}
			.display_flex{
			display: block;
			justify-content: space-around;
			 
			text-align: center;
		}

		}
		
	</style>
 

 <script>

 
 </script>
</body>

</html>