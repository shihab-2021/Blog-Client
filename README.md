# Blog Post Css

@import url("https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&family=Sen:wght@400..800&display=swap");

- {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Sen", sans-serif;
  }

body {
background-color: #fff;
}

p {
text-align: justify;
}

.hero {
/_ background-color: yellowgreen; _/
width: 1700px;
margin: 0 auto;
}

.author-info {
/_ background-color: yellow; _/
width: 816px;
height: 282px;
margin: 6rem auto 3rem;
}

.author-info h2 {
font-weight: 700;
font-size: 28px;
line-height: 40px;
letter-spacing: -1px;
color: #592ea9;
}

.author-info h5 {
font-weight: 400;
font-size: 16px;
line-height: 28px;
color: #6d6e76;
}

.author-info h1 {
/_ background-color: violet; _/
font-weight: 700;
font-size: 48px;
line-height: 64px;
letter-spacing: -2px;
color: #232536;
margin: 1rem 0;
text-align: left;
}

.hero-image {
width: 1700px;
margin: 3rem 0;
}

.content {
/_ background-color: wheat; _/
width: 1200px;
margin: 0 auto 5rem;
}

.content h2 {
font-weight: 700;
font-size: 36px;
line-height: 48px;
letter-spacing: -2px;
margin: 2rem auto 1rem;
color: #232536;
}

.content p {
font-weight: 400;
font-size: 16px;
line-height: 28px;
letter-spacing: 0px;
color: #6d6e76;
}

.content ul {
font-weight: 700;
font-size: 24px;
line-height: 32px;
color: #161722;
padding: 0.5rem;
}
.content ul li {
padding: 5px;
list-style: georgian;
position: relative;
left: 24px;
}

.next {
text-align: center;
margin-bottom: 30px;
color: #000000;
font-weight: 700;
font-size: 36px;
line-height: 48px;
background-color: #f4f0f8;
letter-spacing: -2px;
padding: 2rem;
width: 1700px;
margin: 0 auto;
}
.card-container {
display: flex;
justify-content: space-between;
gap: 20px;
max-width: 1700px;
margin: 3rem auto;
padding: 3rem;
border-bottom: 3px solid #592ea9;
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.card {
border-radius: 10px;
padding: 1rem;
width: 32%;
overflow: hidden;
transition: transform 0.3s ease, background-color 0.3s ease; /_ Added background-color transition _/
background-color: #fff; /_ Initial background color _/
}

.card:hover {
transform: translateY(-5px); /_ Same lift effect _/
background-color: #f4f0f8; /_ Same background color change _/
}

.card img {
width: 100%;
height: 320px;
object-fit: cover;
}

.card-content {
margin-top: 1rem;
}

.author {
font-size: 14px;
color: #4c4c4c;
margin-bottom: 10px;
}

.author span {
color: #592ea9;
font-family: Inter;
font-weight: 500;
font-size: 16px;
line-height: 20px;
}

.title {
font-weight: 700;
font-size: 28px;
line-height: 40px;
letter-spacing: -1px;
color: #232536;
}

.title span {
color: #592ea9;
}

.description {
font-weight: 400;
font-size: 16px;
line-height: 28px;
color: #232536;
margin-top: 10px;
}

# Author Page Css1

@import url("https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&family=Sen:wght@400..800&display=swap");

- {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Sen", sans-serif;
  }

body {
background-color: #fff;
}

p {
text-align: justify;
}

.hero-section {
background-color: #f4f0f8;
flex: 1;
height: 550px;
position: relative;
display: flex;
align-items: center;
}

.content {
/_ background-color: yellowgreen; _/
display: flex;
width: 1400px;
height: 550px;
margin: 0 auto;
justify-content: left;
align-items: center;
gap: 5rem;
position: relative;
}

.content .left-hero {
width: 300px;
height: 350px;
}

.content .right-hero {
/_ background-color: violet; _/
width: 900px;
height: 350px;
padding: 3rem;
/_ border: 10px solid #ffd050;
border-radius: 24px;
transition: transform 0.3s ease; _/
}

/_ .content .right-hero:hover {
transform: translateY(-5px);
} _/

.content .right-hero .author-h1 {
/_ background-color: #fff; _/
flex: 1;
height: 128px;
font-weight: 700;
font-size: 48px;
line-height: 64px;
letter-spacing: -2px;
color: #232536;
display: flex;
align-items: center;
}

.content .right-hero .author-p {
flex: 1;
height: 128px;
font-weight: 400;
font-size: 16px;
line-height: 28px;
display: flex;
align-items: center;
color: #6d6e76;
}

.icons {
/_ background-color: tomato; _/
display: flex;
flex-direction: column;
gap: 2rem;
}

.icons img {
width: 30px;
height: 30px;
cursor: pointer;
/_ transition: opacity 0.3s ease;
border: 5px solid #ffd050;
padding: 0.3rem;
border-radius: 50%; _/
}

.icons img:hover {
opacity: 0.7;
}

.line {
position: absolute;
width: 1400px;
height: 24px;
left: 0px;
bottom: 0px;
background-color: #ffd050;
}

/_ .purple-line {
position: absolute;
width: 500px;
height: 24px;
left: 1300px;
bottom: 0;
background-color: #592ea9;
} _/

# Author Page Css2

@import url("https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&family=Sen:wght@400..800&display=swap");

- {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Sen", sans-serif;
  }

body {
background-color: #fff;
}

p {
text-align: justify;
}

.posts {
/_ background-color: yellow; _/
max-width: 1400px;
margin: 5rem auto;
}

.posts h2 {
font-size: 36px;
color: #232536;
margin-bottom: 20px;
}

.post-list {
display: flex;
flex-direction: column;
gap: 40px;
}

.post {
display: flex;
gap: 90px;
align-items: center;
}

.post-image {
width: 412px;
height: 320px;
object-fit: cover;
}

.post-content {
padding: 0;
flex: 1;
}

.category {
display: inline-block;
color: #592ea9;
font-size: 1.2rem;
font-weight: 600;
margin-bottom: 10px;
}

.post-content h3 {
font-size: 36px;
color: #0d0c22;
margin: 10px 0;
line-height: 48px;
letter-spacing: -2px;
width: 600px;
}

.post-content p {
color: #6d6e76;
width: 600px;
font-weight: 400;
font-size: 16px;
line-height: 28px;
}

# Contact Page Css

@import url("https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&family=Sen:wght@400..800&display=swap");

- {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Sen", sans-serif;
  }

body {
background-color: #fff;
}

p {
text-align: justify;
}

.container {
/_ background-color: yellowgreen; _/
margin: 6rem auto;
max-width: 800px;
width: 100%;
padding: 40px;
text-align: center;
}

.contact-us {
font-weight: 900;
font-size: 16px;
line-height: 20px;
letter-spacing: 3px;
text-align: center;
color: #232536;
}

h1 {
font-weight: 700;
font-size: 48px;
line-height: 64px;
letter-spacing: -2px;
text-align: center;
color: #232536;
margin: 1rem 0;
}

.description {
font-weight: 400;
font-size: 16px;
line-height: 28px;
text-align: center;
color: #6d6e76;
}

.contact-info {
background-color: #592ea9;
color: white;
padding: 2rem;
display: flex;
justify-content: space-between;
gap: 20px;
margin: 2rem 0;
}

.working-hours,
.contact-details {
flex: 1;
text-align: left;
font-weight: 400;
font-size: 14px;
}

.contact-info p {
margin: 5px 0;
}

.label {
font-size: 14px;
opacity: 0.8;
line-height: 40px;
color: #ffffff;
}

.hours {
font-weight: 700;
font-size: 20px;
line-height: 32px;
}

.support {
opacity: 0.8;
font-weight: 400;
font-size: 16px;
line-height: 28px;
}

.details {
font-size: 16px;
margin-top: 10px;
font-weight: 700;
font-size: 20px;
line-height: 32px;
}

.email {
opacity: 0.8;
font-weight: 400;
font-size: 16px;
line-height: 28px;
color: #ffffff;
}

form {
display: flex;
flex-direction: column;
gap: 15px;
}

input,
select,
textarea {
width: 100%;
padding: 15px;
border: 1px solid #592ea9;
border-radius: 5px;
font-size: 16px;
color: #232536;
box-sizing: border-box;
}

textarea {
height: 100px;
resize: none;
}

button {
background-color: #ffd050;
color: #232536;
padding: 15px;
border: none;
cursor: pointer;
font-weight: 700;
font-size: 24px;
line-height: 32px;
transition: background-color 0.3s ease;
}

button:hover {
background-color: #fac431;
}

# Privacy

@import url("https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&family=Sen:wght@400..800&display=swap");

- {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Sen", sans-serif;
  }

body {
background-color: #fff;
}

p {
text-align: justify;
}

.container {
/_ background-color: violet; _/
width: 1400px;
margin: 0 auto;
padding: 40px 20px;
text-align: center;
}

.title {
text-align: center;
flex: 1;
height: 256px;
background-color: #f4f0f8;
color: #232536;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
}

.title h1 {
font-weight: 700;
font-size: 48px;
line-height: 64px;
letter-spacing: -2px;
text-align: center;
}

.section {
text-align: left;
margin-bottom: 40px;
}

.section-title {
font-size: 1.8em;
font-weight: bold;
margin-bottom: 20px;
color: #1a1a1a;
}

.content {
font-size: 1em;
line-height: 1.6;
color: #4a4a4a;
}

# About Us Page Css1

@import url("https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&family=Sen:wght@400..800&display=swap");

- {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Sen", sans-serif;
  }

body {
background-color: #fff;
}

p {
text-align: justify;
}

/_ About Header _/

.header {
/_ background-color: tomato; _/
color: black;
width: 1700px;
height: 500px;
position: relative;
margin: 0 auto;
padding: 4rem;
display: flex;
justify-content: space-evenly;
align-items: center;
}

.left-header {
background-color: #fff;
width: 800px;
height: 450px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 2rem;
z-index: 2;
}

.about-us-text1 {
/_ background-color: wheat; _/
font-size: 1.5rem;
font-weight: 500;
letter-spacing: 3px;
color: #232536;
width: 224px;
height: 50px;
position: relative;
right: 205px;
}

.about-us-text2 {
/_ background-color: aqua; _/
font-size: 4rem;
font-weight: 700;
letter-spacing: -2px;
color: #232536;
width: 700px;
height: 350px;
padding: 2rem;
}

.right-header {
/_ background-color: aquamarine; _/
display: flex;
justify-content: center;
align-items: center;
padding: 1rem;
width: 600px;
height: 312px;
}

.about-us-text3 {
font-size: 1.5rem;
font-weight: 400;
line-height: 28px;
color: #4c4c4c;
text-align: justify;
margin-bottom: 5rem;
}

/_ About Hero _/

.hero-section {
background-image: url("/Resources/aboutUs/About-Hero.png");
background-size: cover;
background-position: center;
background-repeat: no-repeat;
max-width: 1700px;
margin: 0 auto;
min-height: 400px;
width: 1700px;
height: 544px;
position: relative;
top: -120px;
}

.line-img {
position: absolute;
z-index: 2;
width: 960px;
height: 33px;
bottom: 0px;
left: 190px;
}

.box {
position: absolute;
z-index: 2;
width: 630px;
height: 156px;
bottom: 33px;
left: 189px;
background-color: #ffd050;
display: flex;
justify-content: space-evenly;
align-items: center;
}

.sqr {
/_ background-color: blue; _/
padding: 1rem;
text-align: center;
}

.sqr h2 {
font-size: 56px;
font-weight: 700;
line-height: 64px;
letter-spacing: -2px;
color: black;
}

.sqr p {
font-size: 16px;
font-weight: 400;
line-height: 28px;
color: black;
}

/_ Mlission-Vision _/

.mission {
background-color: #f4f0f8;
display: flex;
width: 1700px;
height: 441px;
top: 697px;
left: 280px;
margin: 0 auto;
margin-top: -120px;
justify-content: space-evenly;
align-items: center;
padding: 6rem;
}

.left-mission,
.right-vision {
/_ background-color: #ffd050; _/
color: black;
width: 616px;
height: 300px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: start;
/_ gap: 20px; _/
}

.left-mission h3,
.right-vision h3 {
width: 224px;
height: 50px;
font-size: 1.5rem;
font-weight: 500;
line-height: 20px;
letter-spacing: 3px;
color: #232536;
}

.left-mission h1,
.right-vision h1 {
/_ background-color: yellow; _/
width: 481px;
height: 100px;
font-size: 2rem;
font-weight: 700;
line-height: 40px;
letter-spacing: -1px;
color: #232536;
}
.left-mission p,
.right-vision p {
/_ background-color: yellow; _/
width: 616px;
height: 109px;
font-size: 1.2rem;
font-weight: 400;
line-height: 28px;
color: #6d6e76;
}

/_ Team Section _/

.team,
.blog {
background-color: white;
display: flex;
justify-content: space-between;
align-items: center;
width: 1700px;
height: 700px;
margin: 7rem auto;
gap: 8rem;
}

.left-team,
.right-blog {
/_ background-color: yellow; _/
width: 750px;
height: 316px;
}

.left-team h3,
.right-blog h3 {
width: 224px;
font-size: 1.5rem;
font-weight: 500;
letter-spacing: 3px;
color: #232536;
}

.left-team h1,
.right-blog h1 {
/_ background-color: yellowgreen; _/
flex: 1;
height: 100px;
font-size: 2rem;
font-weight: 700;
line-height: 40px;
letter-spacing: -1px;
color: #232536;
margin: 1.2rem auto;
}

.left-team p,
.right-blog p {
/_ background-color: #ffd050; _/
flex: 1;
height: 150px;
font-size: 1.2rem;
font-weight: 400;
line-height: 28px;
color: #6d6e76;
position: relative;
bottom: 1rem;
}

.right-team,
.left-blog {
flex: 1;
}

# About Us Page Css2

#

#

#
