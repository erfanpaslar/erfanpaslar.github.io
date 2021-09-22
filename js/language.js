let zone = new Date().getTimezoneOffset();
var lang = zone == -270 || zone == -210 ? "fa" : "en";



let contentPer = {
  about: `<p>
	سلام من <span class="myName tapered">عرفان پاسلار</span> هستم یک
<strong class="tapered">برنامه نویس</strong> و
<strong class="tapered">طراح وب</strong>. حدود
<span id="myAge"></span>  سن دارم و در دانشگاه شیراز مشغول تحصیل هستم. به برنامه نویسی و طراحی وب علاقه دارم. 
</p>
`,
  know: `<span class="halfMark">&nbsp;چیزایی که بلدم&nbsp;</span>`,
  pythonContent: `پایتون رو حدود <span id="pythonYear"></span> پیش یاد گرفتم. و با کتابخانه هایی همچون <span style="color: #ed00df">P</span
	><span style="color: #00f0ff">y</span
	><span style="color: #c0fbbd">g</span
	><span style="color: #bfc0ff">a</span
	><span style="color: #ffbfbf">m</span
	><span style="color: #fffebf">e</span>
	<span style="color: #00ae00">Selenium</span>,
	<span style="color: #434142">R</span
	><span style="color: #a1a1a1">e</span
	><span style="color: #434142">q</span
	><span style="color: #a1a1a1">u</span
	><span style="color: #434142">e</span
	><span style="color: #a1a1a1">s</span
	><span style="color: #434142">t</span
	><span style="color: #a1a1a1">s</span>,
	<span style="color: #c5df90">T</span
	><span style="color: #a7d48a">u</span
	><span style="color: #c5df90">r</span
	><span style="color: #a7d48a">t</span
	><span style="color: #c5df90">l</span
	><span style="color: #a7d48a">e</span>,
	<span style="color: #3b81c0">N</span
	><span style="color: #3b81c0">u</span
	><span style="color: #3b81c0">m</span
	><span style="color: #e9bc30">p</span
	><span style="color: #e9bc30">y</span>,
	<span style="color: #00177e">P</span
	><span style="color: #00177e">a</span
	><span style="color: #ffcb00">n</span
	><span style="color: #e80089">d</span
	><span style="color: #00177e">a</span
	><span style="color: #00177e">s</span>,
	<span style="color: #105278">M</span
	><span style="color: #105278">a</span
	><span style="color: #ffd633">t</span
	><span style="color: #fe8332">p</span
	><span style="color: #d5fe5a">l</span
	><span style="color: #3268fe">o</span
	><span style="color: #91fe91">t</span
	><span style="color: #105278">l</span
	><span style="color: #105278">i</span
	><span style="color: #105278">b</span>,
	<span style="color: #2c6444">Django</span>,
	<span style="color: #00f703">O</span
	><span style="color: #00f703">p</span
	><span style="color: #f71c04">e</span
	><span style="color: #f71c04">n</span
	><span style="color: #022ef7">C</span
	><span style="color: #022ef7">V</span>,
	<span style="color: #3294c7">scikit</span>-<span
		style="color: #f09437"
		>learn</span
	>, <span style="color: #9932cc">Eel</span>,
	<span style="color: #3294c7">Telegram-bot</span> و... کار کردم .
	`,
  webContent: `
		اولین وبسایتم رو حدود <span id="htmlYear"></span> پیش ساختم و معلومه که چجوری بوده, فقط با html و بکگراند سفید ولی چند تا سایت دیگه ساختم اونا قابل تحمل تر هستن.
		`,
  cContent: `
		زبان C رو حدود <span id="cYear"></span> پیش یاد گرفتم و در حد ابتدایی بلدم و فعلا درحال یادگیری ++C هستم. #C رو هم در حد ماشین حساب بلدم.
	`,
  phpContent: `
		پی اچ پی رو هم <span id="phpYear"></span> پیش یاد گرفتم و یه <a class="link" href="http://letscode.erfanpaslar.ir">سایت</a> مدیریت محتوا زدم. شما هم میتونی عضو بشی و پست آموزشی بذاری. من زیاد به وردپرس علاقه ندارم ولی شاید در آینده باهاش کار کردم.
		`,
  javaContent: `
		جاوا رو یکم بلدم و تازه دارم یاد میگرم.<br />
		با اندروید استودیو هم از <span id="javaYear"></span> پیش کار کردم و چند تا اپ ساختم ولی خب چون تو ایران هسیم خیلی سخت میشه تو گوگل پلی گذاشت .
		`,
  othersContent: `چند تا زبان دیگه هم بلدم ولی زیاد باهاشون کار نکردم مثل اسمبلی و Go و وریلاگ. </br> با آردوینو هم یکم کار کردم.
		`,
  works: `<span class="halfMark">&nbsp;چند تا از کار هام&nbsp;</span>`,
  inTouch: `<span class="halfMark">&nbsp;راه های ارتباطی&nbsp;</span>`,
  or: "یا",
  msg: "مستقیم پیام بده",
  refs: `<span class="halfMark">&nbsp;طراحان&nbsp;</span>`,
};

let contentEng = {
  about: `<p>
	Hi I'm <span class="myName tapered">Erfan Paslar</span> a
	<strong class="tapered">programmer</strong> and
	<strong class="tapered">web designer</strong>. I'm about
	<span id="myAge"></span> old and study Computer Science Engineering at
	Shiraz University. I am interested in web developing and programming.
	</p>`,
  know: `<span class="halfMark">&nbsp;Things I know&nbsp;</span>`,
  pythonContent: `I've learned python about <span id="pythonYear"></span> ago. I worked
	with some libraries like <span style="color: #ed00df">P</span
	><span style="color: #00f0ff">y</span
	><span style="color: #c0fbbd">g</span
	><span style="color: #bfc0ff">a</span
	><span style="color: #ffbfbf">m</span
	><span style="color: #fffebf">e</span>,
	<span style="color: #00ae00">Selenium</span>,
	<span style="color: #434142">R</span
	><span style="color: #a1a1a1">e</span
	><span style="color: #434142">q</span
	><span style="color: #a1a1a1">u</span
	><span style="color: #434142">e</span
	><span style="color: #a1a1a1">s</span
	><span style="color: #434142">t</span
	><span style="color: #a1a1a1">s</span>,
	<span style="color: #c5df90">T</span
	><span style="color: #a7d48a">u</span
	><span style="color: #c5df90">r</span
	><span style="color: #a7d48a">t</span
	><span style="color: #c5df90">l</span
	><span style="color: #a7d48a">e</span>,
	<span style="color: #3b81c0">N</span
	><span style="color: #3b81c0">u</span
	><span style="color: #3b81c0">m</span
	><span style="color: #e9bc30">p</span
	><span style="color: #e9bc30">y</span>,
	<span style="color: #00177e">P</span
	><span style="color: #00177e">a</span
	><span style="color: #ffcb00">n</span
	><span style="color: #e80089">d</span
	><span style="color: #00177e">a</span
	><span style="color: #00177e">s</span>,
	<span style="color: #105278">M</span
	><span style="color: #105278">a</span
	><span style="color: #ffd633">t</span
	><span style="color: #fe8332">p</span
	><span style="color: #d5fe5a">l</span
	><span style="color: #3268fe">o</span
	><span style="color: #91fe91">t</span
	><span style="color: #105278">l</span
	><span style="color: #105278">i</span
	><span style="color: #105278">b</span>,
	<span style="color: #2c6444">Django</span>,
	<span style="color: #00f703">O</span
	><span style="color: #00f703">p</span
	><span style="color: #f71c04">e</span
	><span style="color: #f71c04">n</span
	><span style="color: #022ef7">C</span
	><span style="color: #022ef7">V</span>,
	<span style="color: #3294c7">scikit</span>-<span
		style="color: #f09437"
		>learn</span
	>, <span style="color: #9932cc">Eel</span>,
	<span style="color: #3294c7">Telegram-bot</span>, and ... .
	`,
  webContent: `
	I build my first website about <span id="htmlYear"></span> ago and it
	just looked like late 90's website XD. I built about 12 other websites
	too.
		`,
  cContent: `
	I've learned C, <span id="cYear"></span> ago and wrote some projects.
	Currently I'm learning C++. Also I've done some project with C# ( just
	basics, Calculator stuff :D ).
	`,
  phpContent: `
	I've learned PHP <span id="phpYear"></span> ago and wrote a complete
	Contact Management System
	<a class="link" href="http://letscode.erfanpaslar.ir">website</a>
	with pure PHP (in 2 months), you can join me there. I don't really
	like wordpress, and will learn laravel someday.
		`,
  javaContent: `
	I know java a little and currently learning.<br />
	I've started android studio <span id="javaYear"></span> ago and I
	wrote some mobile apps too but i never uploaded them on playStore.
	(not that i could)
		`,
  othersContent: `There are some other languages that I worked know but I haven't
	properly worked with them such as Assembly, Go, Verilog.<br />I also
	worked with arduino too.
		`,
  works: `<span class="halfMark">&nbsp;My works&nbsp;</span>`,
  inTouch: `<span class="halfMark">&nbsp;Get in touch&nbsp;</span>`,
  or: "Or",
  msg: "Message me directly",
  refs: `<span class="halfMark">&nbsp;Designers&nbsp;</span>`,
};

var theContent;

function makeFarsi() {
  document.getElementById("about").innerHTML = theContent.about;
  document.getElementById("know").innerHTML = theContent.know;
  document.getElementById("pythonContent").innerHTML = theContent.pythonContent;
  document.getElementById("webContent").innerHTML = theContent.webContent;
  document.getElementById("cContent").innerHTML = theContent.cContent;
  document.getElementById("phpContent").innerHTML = theContent.phpContent;
  document.getElementById("javaContent").innerHTML = theContent.javaContent;
  document.getElementById("othersContent").innerHTML = theContent.othersContent;
  document.getElementById("works").innerHTML = theContent.works;
  document.getElementById("inTouch").innerHTML = theContent.inTouch;
  document.getElementById("or").innerHTML = theContent.or;
  document.getElementById("msg").innerHTML = theContent.msg;
  document.getElementById("refs").innerHTML = theContent.refs;
  updateDates();
}

function changeLang() {
  const color = "#444444";
  const f = document.getElementById("f-letter");
  const a = document.getElementById("a-letter");
  const e = document.getElementById("e-letter");
  const n = document.getElementById("n-letter");
  if (lang == "en") {
    f.style.fill = color;
    a.style.fill = "#0000";
    e.style.fill = color;
    n.style.fill = color;
    lang = "fa";
    document.getElementsByTagName("html")[0].setAttribute("lang", "fa-IR");
    document.getElementsByTagName("html")[0].setAttribute("dir", "rtl");
    document.getElementsByTagName("title")[0].innerText = "عرفان پاسلار";
    document.getElementById("content").setAttribute("dir", "rtl");
    theContent = contentPer;
    makeFarsi();
  } else if (lang == "fa") {
    f.style.fill = color;
    a.style.fill = color;
    e.style.fill = "#0000";
    n.style.fill = "#0000";
    lang = "en";
    document.getElementsByTagName("html")[0].setAttribute("lang", "en");
    document.getElementsByTagName("html")[0].setAttribute("dir", "ltr");
    document.getElementsByTagName("title")[0].innerText = "Erfan Paslar";
    document.getElementById("content").setAttribute("dir", "ltr");
    theContent = contentEng;
    makeFarsi();
  }
}

if(lang == "fa"){
    lang="en"
    changeLang();
}
