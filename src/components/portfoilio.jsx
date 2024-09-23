import React, { useEffect } from 'react';
import './portoflio.css';
import { inView, animate } from "motion";

export const Portfolio =() =>{
	useEffect(() => {
		inView("#container", ({ target }) => {
			const specificBannerElement = target.querySelector(".header"); 
    		const headerElement = target.querySelector(".banner");
			const gallery = target.querySelector(".gallery");
			const personalprof = target.querySelector(".personal-profile");
			const elements = [specificBannerElement,headerElement,
				  gallery, personalprof];
				  elements.forEach(element => {
					inView(element, () => {
					  animate(
						element,
						{ opacity: 1, transform: "none" },
						{ duration: 1.5, easing: [0.17, 0.55, 0.55, 1] }
					  );
					});
				  });
				});
				inView("#testimonial", ({ target }) => {
					const background = target.querySelector(".bg"); 
					const photo = target.querySelector(".photo");
					const text = target.querySelector(".text");
					const elements = [background,photo,text];
						  elements.forEach(element => {
							inView(element, () => {
							  animate(
								element,
								{ opacity: 1, transform: "none" },
								{ duration: 1.5, easing: [0.17, 0.55, 0.55, 1] }
							  );
							});
						  });
						});
						inView(".blog", ({ target }) => {
							const text = target.querySelector(".text"); 
							const articles = target.querySelector(".articles");
							const elements = [text,articles];
								  elements.forEach(element => {
									inView(element, () => {
									  animate(
										element,
										{ opacity: 1, transform: "none" },
										{ duration: 1.5, easing: [0.17, 0.55, 0.55, 1] }
									  );
									});
								  });
								});
			  }, []);
	
    return(
        <>
        <div id='container'>
	<div class="header">
			<div class="left">
				<div class = "profile">
					<img src="../image/avatar photo.jpg"/>
				</div>
			<div class="name">
				<h1>Torres<br/>Charles Denver Ean</h1>
				<p>UI & UX Designer</p>
			</div>
		</div>
			<div class="nav">
				<a href="#">WORK</a>
				<a href="#">ABOUT ME</a>
				<a href="#">BLOG</a>
				<a href="#">CONTACT</a>
				<button><a href="#">HIRE ME</a></button>
			</div>
	</div>
	<div class="banner">
		<div class="left">
			<div class="introd">
			<h3>
				Hello, I`m
			</h3>
			<h1>
				Charles Denver Ean Torres
			</h1>
			<p>
				UI & UX Designer
			</p>
		</div>
		<div class="socials">
			<div class="socnav">
			<nav>
			<a href="#"><img src="../image/Behance-logo.jpg"/></a>
			<a href="#"><img src="../image/dribble-logo.jpg"/></a>
			<a href="#"><img src="../image/in-logo.jpg"/></a>
			<a href="#"><img src="../image/facebook-logo.jpg"/></a>
			<a href="#"><img src="../image/instagram-logo.jpg"/></a>
			<a href="#"><img src="../image/twitter-logo.jpg"/></a>
		</nav>
		</div>
		<div class="butnav">
			<nav>
				<button>
					<a href="#">
					HIRE ME
				</a>
			</button>
				<button>
					<a href="#">
					SEE MY RESUME
				</a>
			</button>
			</nav>
		</div>
		</div>
		</div>
		<div class="right">
			<img src="../image/photo.png"/>
		</div>
	</div>
	<div class="gallery">
		<div class="top">
			<nav>
				<a href="#">
					All
				</a>
				<a href="#">
					App
				</a>
				<a href="#">
					Website
				</a>
				<a href="#">
					Interaction
				</a>
			</nav>
		</div>
		<div class="projects">
			<div class="proj">
				<img src="../image/project img.jpg"/>
				<p>
					CATEGORY
				</p>
				<h2>
				PROJECT TITLE 2019
				</h2>
			</div>
			<div class="proj">
				<img src="../image/project img.jpg"/>
				<p>
					CATEGORY
				</p>
				<h2>
				PROJECT TITLE 2019
				</h2>
			</div>
			<div class="proj">
				<img src="../image/project img.jpg"/>
				<p>
					CATEGORY
				</p>
				<h2>
				PROJECT TITLE 2019
				</h2>
			</div>
			<div class="proj">
				<img src="../image/project img.jpg"/>
				<p>
					CATEGORY
				</p>
				<h2>
				PROJECT TITLE 2019
				</h2>
			</div>
			<div class="proj">
				<img src="../image/project img.jpg"/>
				<p>
					CATEGORY
				</p>
				<h2>
				PROJECT TITLE 2019
				</h2>
			</div>
			<div class="proj">
				<img src="../image/project img.jpg"/>
				<p>
					CATEGORY
				</p>
				<h2>
				PROJECT TITLE 2019
				</h2>
			</div>
			<div class="proj">
				<img src="../image/project img.jpg"/>
				<p>
					CATEGORY
				</p>
				<h2>
				PROJECT TITLE 2019
				</h2>
			</div>
			<div class="proj">
				<img src="../image/project img.jpg"/>
				<p>
					CATEGORY
				</p>
				<h2>
				PROJECT TITLE 2019
				</h2>
			</div>
			<div class="proj">
				<img src="../image/project img.jpg"/>
				<p>
					CATEGORY
				</p>
				<h2>
				PROJECT TITLE 2019
				</h2>
			</div>
		</div>
		<div class="button">
			<nav>
			<button>
				<a href="#">
				LOAD MORE WORK
				</a>
			</button>
		</nav>
		</div>
	</div>
	<div class="personal-profile">
		<div class="left">
			<img src="../image/photo1.png"/>
		</div>
		<div class="right">
			<div class="text">
			<h3>
				ABOUT ME
			</h3>
			<h1>
				WHO AM I
			</h1>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Maecenas pellentesque eu enim eget luctus. 
                Sed augue felis, facilisis et elementum vitae, aliquam sit amet ante. 
                Sed iaculis eros sem, elementum consequat est consequat eu. 
                Quisque aliquet a ipsum nec tincidunt. Nulla vitae rhoncus leo. 
                Praesent dui sapien, bibendum quis tempus dictum, auctor ac dui. 
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; 
                Donec at mauris porta, ullamcorper sem quis, lobortis sem. 
                Donec sit amet aliquet dui, at varius est. Phasellus porttitor finibus neque vel vehicula. 
                Duis in nulla egestas, dignissim elit at, imperdiet eros. 
                Integer tristique posuere purus. Suspendisse placerat, quam vitae ullamcorper sollicitudin, 
                dui ligula molestie massa, sit amet laoreet nibh ex vitae dui.
                 Aenean laoreet pellentesque lacus, eget varius massa mattis quis. 
                 Nunc ultrices urna eu nunc lobortis pulvinar. 
                 Duis viverra, quam non imperdiet scelerisque, urna nunc consequat velit, 
                 in mollis erat nibh in libero.
			</p>
		</div>
			<div class="butnav">
			<nav>
				<button><a href="#">
					HIRE ME
				</a></button>
				<button><a href="#">
					SEE MY RESUME
				</a></button>
			</nav>
		</div>
		</div>
	</div>
</div>
<div id="testimonial">
	<div class="bg">
		<img src="../image/testimonal background.jpg"/>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Maecenas pellentesque eu enim eget luctus. 
            Sed augue felis, facilisis et elementum vitae, aliquam sit amet ante. 
            Sed iaculis eros sem, elementum consequat est consequat eu. 
            Quisque aliquet a ipsum nec tincidunt. Nulla vitae rhoncus leo. 
            Praesent dui sapien, bibendum quis tempus dictum.
		</p>
	</div>
	<div class="photo">
		<img src="../image/testimonial avatar photo.jpg"/>
	</div>
	<div class="text">
		<h1>
			Mina Sharon Myoui
		</h1>
		<h3>
			Marketing House
		</h3>
		<img src="../image/testimonial star icon.jpg"/>
	</div>
</div>
	<div class="blog">
		<div class="text">
			<h1>
				READ ME
			</h1>
			<p>
				Sometimes I write something smart
			</p>
		</div>
		<div class="articles">
		<div class="artcl1">
			<img src="../image/blog photo.jpg"/>
			<div class="date">
			<img src="../image/blog data date.jpg"/>
			<p>07<br/>march</p>
		</div>
			<h1>
				TEN THE BEST APP IN 2017
			</h1>
			<h2>
				CATEGORY
			</h2>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Maecenas pellentesque eu enim eget luctus. Sed augue felis, 
                facilisis et elementum vitae, aliquam sit amet ante.
                 Sed iaculis eros sem, elementum consequat.
			</p>	
		</div>
		<div class="artcl2">
			<img src="../image/blog photo.jpg"/>
			<div class="date">
			<img src="../image/blog data date.jpg"/>
			<p>14<br/>march</p>
		</div>
			<h1>
				WEBSITE INSPIRATION
			</h1>
			<h2>
				CATEGORY
			</h2>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Maecenas pellentesque eu enim eget luctus. Sed augue felis, 
                facilisis et elementum vitae, aliquam sit amet ante. 
                Sed iaculis eros sem, elementum consequat.
			</p>
		</div>
		<div class="artcl3">
			<img src="../image/blog photo.jpg"/>
			<div class="date">
			<img src="../image/blog data date.jpg"/>
			<p>24<br/>march</p>
		</div>
			<h1>
				CHANGES IN SOCIAL MEDIA
			</h1>
			<h2>
				CATEGORY
			</h2>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Maecenas pellentesque eu enim eget luctus. Sed augue felis, 
                facilisis et elementum vitae, aliquam sit amet ante. 
                Sed iaculis eros sem, elementum consequat.
			</p>	
		</div>
		<div class="buttons">
			<div class="but1">
				<button>
					<a href="#">
						READ MORE
					</a>
				</button>
			</div>
				<div class="but2">
				<button>
					<a href="#">
						READ MORE
					</a>
				</button>
			</div>
				<div class="but3">
				<button>
					<a href="#">
						READ MORE
					</a>
				</button>
			</div>
	</div>
	<div class="more">
		<a href="#">See more posts</a>
		
	</div>
</div>
</div>
<div class="footer">
	<div class="cont">
		<div class="left">
			<p>
			© 2018 UI43 - Free Templates|
			
		<a href="#">
			<img src="../image/footer behance.jpg"/>
			
		</a>
		<a href="#">
			<img src="../image/footer dribble logo.jpg"/>
		</a>
		<a>
			<img src="../image/footer in logo.jpg"/>
			
		</a>
		<a href="#">
			<img src="../image/footer facebook logo.jpg"/>
			
		</a>
		<a href="#">
			<img src="../image/footer instagram logo.jpg"/>
		
		</a>
		<a href="#">
			<img src="../image/footer twitter logo.jpg"/>
			
		</a>
		</p>
		</div>
		<div class="right">
			<nav>
				<a href="#">
				Work
			</a>
				<a href="#">About me
				</a>
				<a href="#">
				Blog
			</a>
				<a href="#">Contact
				</a>
				<button><a href="#">HIRE ME</a></button>
			</nav>
		</div>
	</div>
</div>
        </>
    )
}