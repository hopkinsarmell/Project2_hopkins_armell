<!DOCTYPE html>
<html lang="en">

	<head>

		<meta charset="utf-8">

		<title>Catdopolis | Contact </title>

		<!-- Link to css style sheet -->
		<link type="text/css" rel="stylesheet" href="css/styles.css" />

		<meta name="viewport" content="width=device-width, initial-scale=1">

		<!-- FAVIcon -->
		<link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon">

		<!-- Link to Adobe fonts -->
		<link rel="stylesheet" href="https://use.typekit.net/abi1wrt.css">



		<!--[if lt IE 9]>
			<script src="js/html5shiv-printshiv.min.js"></script>
		<![endif]-->
	  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
	</head>

	<body>

		<header>

			<button class="hamburger">&#9776;</button>
  		<button class="cross">&#735;</button>

			<nav class="menu">
				<ul>
					<li><a href="index.html">Home</a></li>
	        <li><a href="about.html">About Catdopolis</a></li>
	        <li><a href="adopt.html">Adopt Now</a></li>
	        <li><a href="contact.html">Contact</a></li>
				</ul>
			</nav>

			<div class="center">
				<a href="index.html"><img src="images/catdopolis-logo.png" class="logo" alt="Catdopolis Logo"></a>
				<nav class="desktop-menu">
					<ul>
						<li><a href="index.html">Home</a></li>
						<li><a href="about.html">About</a></li>
						<li><a href="adopt.html">Adopt Now</a></li>
						<li><a href="contact.html">Contact</a></li>
					</ul>
				</nav>
			</div>
			<div class="cat-container">
			</div>

		</header>

		<main class="form-main">

			<h1 class="note-heading">Something went wrong.</h1>
			<p class="note-sub">Please, try again.</p>

			<p class="note-sub">Please hit <a href="#" onClick="history.go(-1)">back</a> and complete the following required fields.</p>

			<ul>
			<?php
				for($i=0; $i<count($this->missing_required_fields); $i++){
					echo "<li>" . $this->missing_required_fields[$i]['title'] . "</li>\n";
				}
			?>
			</ul>

			<p class="note-sub"><strong><a href="#" onClick="history.go(-1)">Back to form</a></strong></p>

			</main>


		<footer class="about-footer">
			<h4 class="purple-copyright2">Copyright 2021</h4>
		</footer>

	<script src="js/hamburger.js"></script>
	</body>

</html>
