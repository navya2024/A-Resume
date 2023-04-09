module.exports = (values) => {
    const {
        // Profile-Information
        firstname,
        lastname,
        positionapp,
        aboutme,
        email,
        phone,
        address,
        github,
        pinterest,
        linkedin,
        facebook,
        instagram,

        // Education Information
        degree,
        collegename,
        collegestart,
        collegeend,
        hsc,
        school1,
        hscstart,
        hscend,
        ssc,
        school2,
        sscstart,
        sscend,


        // Experience Information
        exp1,
        place1,
        start1,
        end1,
        exp2,
        place2,
        start2,
        end2,
        exp3,
        place3,
        start3,
        end3,

        // Extra Information
        skill1,
        skill2,
        skill3,
        skill4,
        skill5,
        skill6,
        skill7,
        interest1,
        interest2,
        interest3,
        interest4,
        interest5,
        
    } = values;

    let htmlTemplate = `
    <!DOCTYPE html>
    <html>
    <head>
    <title>${firstname}'s Resume</title>
	<meta charset="UTF-8"> 
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
	<link href="https://fonts.googleapis.com/css?family=Roboto+Slab:300,400,500,600&display=swap" rel="stylesheet">
	<style>
    @import url("https://fonts.googleapis.com/css?family=Montserrat");

$darkest-blue: #1a237e;
$darker-blue: #283593;
$dark-blue: #303f9f;
$medium-blue: #3949ab;
$light-blue: #3f51b5;
$lighter-blue: #5c6bc0;
$lightest-blue: #9fa8da;
$white: #ffffff;
$black: #0e1442;
$orange: #ffb300;
$yellow: #fdd835;
$dark-pink: #ad1457;
$light-pink: #d81b60;

@charset "UTF-8";
* {
  outline: none;
}

*,
*:before,
*:after {
  -webkit-box-sizing: inherit;
  -moz-box-sizing: inherit;
  box-sizing: inherit;
}

html,
body {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  background: $white;
  cursor: default;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
}

a {
  text-decoration: none;
  color: $white;
  display: block;
  transition-duration: 0.3s;
}

ul {
  list-style-type: none;
  padding: 0;
}

h2 {
}

h3 {
  color: $orange;
  margin: 10px 0;
  text-transform: lowercase;
  font-size: 1.25em;
}

.resume {
  width: 960px;
  background: $darkest-blue;
  color: $white;
  margin: 20px auto;
  box-shadow: 10px 10px $black;
  position: relative;
  display: flex;
}
.resume .base,
.resume .func {
  box-sizing: border-box;
  float: left;
}
.resume .base > div,
.resume .func > div {
  padding-bottom: 10px;
}
.resume .base > div:last-of-type,
.resume .func > div:last-of-type {
  padding-bottom: 0;
}
.resume .base {
  width: 30%;
  padding: 30px 15px;
  background: $darker-blue;
  color: $white;
}
.resume .base .profile {
  background: $orange;
  padding: 30px 15px 40px 15px;
  margin: -30px -15px 45px -15px;
  position: relative;
  z-index: 2;
}
.resume .base .profile::after {
  content: "";
  position: absolute;
  background: $dark-blue;
  width: 100%;
  height: 30px;
  bottom: -15px;
  left: 0;
  transform: skewY(-5deg);
  z-index: -1;
}
.resume .base .profile .photo img {
  width: 100%;
  border-radius: 50%;
}
.resume .base .profile .photo {
  display: flex;
  justify-content: center;
  align-items: center;
}
.resume .base .profile .fa-rocket {
  font-size: 100px;
  text-align: center;
  margin: auto;
  color: $darker-blue;
}
.resume .base .profile .info {
  text-align: center;
  color: $white;
}
.resume .base .profile .info .name {
  margin-top: 10px;
  margin-bottom: 0;
  font-size: 1.75em;
  text-transform: lowercase;
  color: $darkest-blue;
}
.resume .base .profile .info .job {
  margin-top: 10px;
  margin-bottom: 0;
  font-size: 1.5em;
  text-transform: lowercase;
  color: $darker-blue;
}
.resume .base .contact div {
  line-height: 24px;
}
.resume .base .contact div a:hover {
  color: $yellow;
}
.resume .base .contact div a:hover span::after {
  width: 100%;
}
.resume .base .contact div:hover i {
  color: $yellow;
}
.resume .base .contact div i {
  color: $orange;
  width: 20px;
  height: 20px;
  font-size: 20px;
  text-align: center;
  margin-right: 15px;
  transition-duration: 0.3s;
}
.resume .base .contact div span {
  position: relative;
}
.resume .base .contact div span::after {
  content: "";
  position: absolute;
  background: $yellow;
  height: 1px;
  width: 0;
  bottom: 0;
  left: 0;
  transition-duration: 0.3s;
}
.resume .base .follow .box {
  text-align: center;
  vertical-align: middle;
}
.resume .base .follow .box a {
  display: inline-block;
  vertical-align: text-bottom;
}
.resume .base .follow .box a:hover i {
  background: $yellow;
  border-radius: 5px;
  transform: rotate(45deg) scale(0.8);
}
.resume .base .follow .box a:hover i::before {
  transform: rotate(-45deg) scale(1.5);
}
.resume .base .follow .box i {
  display: inline-block;
  font-size: 30px;
  background: $orange;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  line-height: 60px;
  color: $darker-blue;
  margin: 0 10px 10px 10px;
  transition-duration: 0.3s;
}
.resume .base .follow .box i::before {
  transition-duration: 0.3s;
}
.resume .base .follow .box i.fa::before {
  display: block;
}
.resume .func {
  width: 100%;
  padding: 30px;
}
.resume .func:hover > div {
  transition-duration: 0.5s;
}
.resume .func:hover > div:hover h3 i {
  transform: scale(1.25);
}
.resume .func:hover > div:not(:hover) {
  opacity: 0.5;
}
.resume .func h3 {
  transition-duration: 0.3s;
  margin-top: 0;
}
.resume .func h3 i {
  color: $darker-blue;
  background: $orange;
  width: 42px;
  height: 42px;
  font-size: 20px;
  line-height: 42px;
  border-radius: 50%;
  text-align: center;
  vertical-align: middle;
  margin-right: 8px;
  transition-duration: 0.3s;
}
.resume .func .work,
.resume .func .edu {
  float: left;
}
.resume .func .work small,
.resume .func .edu small {
  display: block;
  opacity: 0.7;
}
.resume .func .work ul li,
.resume .func .edu ul li {
  position: relative;
  margin-left: 15px;
  padding-left: 25px;
  padding-bottom: 15px;
}
.resume .func .work ul li:hover::before,
.resume .func .edu ul li:hover::before {
  animation: circle 1.2s infinite;
}
.resume .func .work ul li:hover span,
.resume .func .edu ul li:hover span {
  color: $yellow;
}
@keyframes circle {
  from {
    box-shadow: 0 0 0 0px $yellow;
  }
  to {
    box-shadow: 0 0 0 6px rgba(255, 255, 255, 0);
  }
}
.resume .func .work ul li:first-of-type::before,
.resume .func .edu ul li:first-of-type::before {
  width: 10px;
  height: 10px;
  left: 1px;
}
.resume .func .work ul li:last-of-type,
.resume .func .edu ul li:last-of-type {
  padding-bottom: 3px;
}
.resume .func .work ul li:last-of-type::after,
.resume .func .edu ul li:last-of-type::after {
  border-radius: 1.5px;
}
.resume .func .work ul li::before,
.resume .func .work ul li::after,
.resume .func .edu ul li::before,
.resume .func .edu ul li::after {
  content: "";
  display: block;
  position: absolute;
}
.resume .func .work ul li::before,
.resume .func .edu ul li::before {
  width: 7px;
  height: 7px;
  border: 3px solid $white;
  background: $orange;
  border-radius: 50%;
  left: 3px;
  z-index: 1;
}
.resume .func .work ul li::after,
.resume .func .edu ul li::after {
  width: 3px;
  height: 100%;
  background: $white;
  left: 5px;
  top: 0;
}
.resume .func .work ul li span,
.resume .func .edu ul li span {
  transition-duration: 0.3s;
}
.resume .func .work {
  width: 48%;
  background: $darker-blue;
  padding: 15px;
  margin: 0 4% 15px 0;
}
.resume .func .edu {
  width: 48%;
  background: $darker-blue;
  padding: 15px;
}
.resume .func .skills-prog {
  clear: both;
  background: $darker-blue;
  padding: 15px;
}
.resume .func .skills-prog ul {
  margin-left: 15px;
}
.resume .func .skills-prog ul li {
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  transition-duration: 0.3s;
}
.resume .func .skills-prog ul li:hover {
  color: $yellow;
}
.resume .func .skills-prog ul li:hover .skills-bar .bar {
  background: $yellow;
  box-shadow: 0 0 0 1px $yellow;
}
.resume .func .skills-prog ul li span {
  display: block;
  width: 120px;
}
.resume .func .skills-prog ul li .skills-bar {
  background: $white;
  height: 2px;
  width: calc(100% - 120px);
  position: relative;
  border-radius: 2px;
}
.resume .func .skills-prog ul li .skills-bar .bar {
  position: absolute;
  top: -1px;
  height: 4px;
  background: $orange;
  box-shadow: 0 0 0 $orange;
  border-radius: 5px;
}
.resume .func .skills-soft {
  clear: both;
  background: $darker-blue;
  padding: 15px;
  margin: 15px 0 0;
}
.resume .func .skills-soft ul {
  display: flex;
  justify-content: space-between;
  text-align: center;
}
.resume .func .skills-soft ul li {
  position: relative;
}
.resume .func .skills-soft ul li:hover svg .cbar {
  stroke: $yellow;
  stroke-width: 4px;
}
.resume .func .skills-soft ul li:hover span,
.resume .func .skills-soft ul li:hover small {
  transform: scale(1.2);
}
.resume .func .skills-soft ul li svg {
  width: 95%;
  fill: transparent;
  transform: rotate(-90deg);
}
.resume .func .skills-soft ul li svg circle {
  stroke-width: 1px;
  stroke: $white;
}
.resume .func .skills-soft ul li svg .cbar {
  stroke-width: 3px;
  stroke: $orange;
  stroke-linecap: round;
}
.resume .func .skills-soft ul li span,
.resume .func .skills-soft ul li small {
  position: absolute;
  display: block;
  width: 100%;
  top: 52%;
  transition-duration: 0.3s;
}
.resume .func .skills-soft ul li span {
  top: 40%;
}
.resume .func .interests {
  background: $darker-blue;
  margin: 15px 0 0;
  padding: 15px;
}
.resume .func .interests-items {
  box-sizing: border-box;
  padding: 0 0 15px;
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: space-between;
}
.resume .func .interests-items div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
.resume .func .interests-items div:hover i {
  transform: scale(1.2);
}
.resume .func .interests-items div:hover span {
  color: $yellow;
  transition-duration: 0.3s;
}
.resume .func .interests-items div i {
  font-size: 45px;
  width: 60px;
  height: 60px;
  line-height: 60px;
  color: $orange;
  transition-duration: 0.3s;
}
.resume .func .interests-items div span {
  display: block;
}

    </style>
    </head>
    <body>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
	<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>

      <div class="resume">
  <div class="base">
    <div class="profile">
      <div class="photo">
        <img src="" />
        
      </div>
      <div class="info">
        <h1 class="name">${firstname} ${lastname}</h1>
        <h2 class="job">${positionapp}</h2>
      </div>
    </div>
    <div class="about">
      <h3>About Me</h3>${aboutme}
    </div>
    <div class="contact">
      <h3>Contact Me</h3>`;
      if (phone != "" && phone != null)
      htmlTemplate += `<div class="call"><a href="tel:${phone}"><i class="fas fa-phone"></i><span>${phone}</span></a></div>`;
      if (address != "" && address != null)
      htmlTemplate += `<div class="address"><a href=""><i class="fas fa-map-marker"></i><span>${address}</span></a></div>`;
      if (email != "" && email != null)
      htmlTemplate += `<div class="email"><a href="mailto:${email}@gmail.com"><i class="fas fa-envelope"></i><span>${email}</span></a></div>`;
      if (github != "" && github != null)
      htmlTemplate += `<div class="website"><a href="${github}" target="_blank"> <i class="fas fa-home"></i><span>${github}</span></a></div></div>`;
      htmlTemplate += `
    <div class="follow">
      <h3>Follow Me</h3>
      <div class="box">`;
      if (facebook != "" && facebook != null)
      htmlTemplate += `<a href="${facebook}/" target="_blank"><i class="fab fa-facebook"></i></a>`;
      if (instagram != "" && instagram != null)
      htmlTemplate += `<a href="${instagram}/" target="_blank"><i class="fab fa-instagram "></i></a>`;
      if (pinterest != "" && pinterest != null)
      htmlTemplate += `<a href="${pinterest}/" target="_blank"><i class="fab fa-pinterest"></i></a>`;
      if (linkedin != "" && linkedin != null)
      htmlTemplate += `<a href="${linkedin}" target="_blank"><i class="fab fa-linkedin"></i></a>`;
      htmlTemplate += `
      </div>
    </div>
  </div>
  <div class="func">
    <div class="work">
      <h3><i class="fa fa-briefcase"></i>Experience</h3>
      <ul>`;
      if (exp1 != "" && exp1 != null)
      htmlTemplate += `
        <li><span>${exp1}</span><small>${place1}</small><small>${start1} - ${end1}</small></li>`;
        if (exp2 != "" && exp2 != null)
        htmlTemplate += `  
        <li><span>${exp2}</span><small>${place2}</small><small>${start2} - ${end2}</small></li>`;
        if (exp3 != "" && exp3 != null)
      htmlTemplate += `
        <li><span>${exp3}</span><small>${place3}</small><small>${start3} - ${end3}</small></li>`;
        htmlTemplate +=`
      </ul>
    </div>
    <div class="edu">
      <h3><i class="fa fa-graduation-cap"></i>Education</h3>
      <ul>`;
      if (degree != "" && degree != null)
      htmlTemplate += `
        <li><span>${degree}</span><small>${collegename}</small><small>${collegestart} - ${collegeend}</small></li>`;
        if (hsc != "" && hsc != null)
        htmlTemplate += `
        <li><span>${hsc}</span><small>${school1}</small><small>${hscstart} - ${hscend}</small></li>`;
        if (ssc != "" && ssc != null)
        htmlTemplate += `
        <li><span>${ssc}</span><small>${school2}</small><small>${sscstart} - ${sscend}</small></li>`;
        htmlTemplate =+ `
      </ul>
    </div>
    <div class="skills-prog">
      <h3><i class="fas fa-code"></i>Programming Skills</h3>
      <ul>`;
      if (skill1 != "" && skill1 != null)
      htmlTemplate += `
        <li data-percent="95"><span>${skill1}</span>
          <div class="skills-bar">
            <div class="bar"></div>
          </div>
        </li>`;
         if (skill2 != "" && skill2 != null)
         htmlTemplate += `
        <li data-percent="90"><span>${skill2}</span>
          <div class="skills-bar">
            <div class="bar"></div>
          </div>
        </li>`;
         if (skill3 != "" && skill3 != null)
         htmlTemplate += `
        <li data-percent="60"><span>${skill3}</span>
          <div class="skills-bar">
            <div class="bar"></div>
          </div>
        </li>`;
         if (skill4 != "" && skill4 != null)
         htmlTemplate += `
        <li data-percent="50"><span>${skill4}</span>
          <div class="skills-bar">
            <div class="bar"></div>
          </div>
        </li>`;
         if (skill5 != "" && skill5 != null)
         htmlTemplate += `
        <li data-percent="40"><span>${skill5}</span>
          <div class="skills-bar">
            <div class="bar"></div>
          </div>
        </li>`;
        if (skill6 != "" && skill6 != null)
        htmlTemplate += `
        <li data-percent="55"><span>${skill6}</span>
          <div class="skills-bar">
            <div class="bar"></div>
          </div>
        </li>`;
        if (skill7 != "" && skill7 != null)
        htmlTemplate += `
        <li data-percent="40"><span>${skill7}</span>
          <div class="skills-bar">
            <div class="bar"></div>
          </div>
        </li>
      </ul>
    </div>`;
    htmlTemplate =+ `
    <div class="interests">
      <h3><i class="fas fa-star"></i>Interests</h3>
      <div class="interests-items">`;
      if (interest1 != "" && interest1 != null)
      htmlTemplate += `
        <div class="art"><span>${interest1}</span></div>`;
        if (interest2 != "" && interest2 != null)
        htmlTemplate += `
        <div class="art"><span>${interest2}</span></div>`;
        if (interest3 != "" && interest3 != null)
        htmlTemplate += `
        <div class="movies"><span>${interest3}</span></div>`;
        if (interest4 != "" && interest4 != null)
        htmlTemplate += `
        <div class="music"><span>${interest4}</span></div>`;
        if (interest5 != "" && interest5 != null)
        htmlTemplate += `
        <div class="games"><span>${interest5}</span></div>`;
        htmlTemplate =+ `
      </div>
    </div>
  </div>
</div>
<script>
(function() {
    $(".skills-prog li")
      .find(".skills-bar")
      .each(function(i) {
        $(this)
          .find(".bar")
          .delay(i * 150)
          .animate(
            {
              width:
                $(this)
                  .parents()
                  .attr("data-percent") + "%"
            },
            1000,
            "linear",
            function() {
              return $(this).css({
                "transition-duration": ".5s"
              });
            }
          );
      });
  
    $(".skills-soft li")
      .find("svg")
      .each(function(i) {
        var c, cbar, circle, percent, r;
        circle = $(this).children(".cbar");
        r = circle.attr("r");
        c = Math.PI * (r * 2);
        percent = $(this)
          .parent()
          .data("percent");
        cbar = (100 - percent) / 100 * c;
        circle.css({
          "stroke-dashoffset": c,
          "stroke-dasharray": c
        });
        circle.delay(i * 150).animate(
          {
            strokeDashoffset: cbar
          },
          1000,
          "linear",
          function() {
            return circle.css({
              "transition-duration": ".3s"
            });
          }
        );
        $(this)
          .siblings("small")
          .prop("Counter", 0)
          .delay(i * 150)
          .animate(
            {
              Counter: percent
            },
            {
              duration: 1000,
              step: function(now) {
                return $(this).text(Math.ceil(now) + "%");
              }
            }
          );
      });
  }.call(this));
  
  
  
</script>
</body>
</html>
      `;

    return htmlTemplate;
}

