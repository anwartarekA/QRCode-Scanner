<h1> QRCode-Scanner </h1>.
 <p>QRCode Scanner is and application that enable users to access websites quickly and efficient</p>
 <strong>Hinit</strong> i designed this application with javascript language this application is suitable for all screens(responsive).
<h2>What is the QRCode ?</h2>
<p> QRCode is an application that enable users to access websites quickly and efficient .</p>
<p>I have put some constraints in my app like what?</p>
<ol >
 <li>you should enter your url for your website you want to get its QRCode.</li>
 <li>you should select the suitable size for your QRCode that you need.</li>
 <li> you should click on Generate QRCode that you need .</li>
</ol>
 <h2>after this constraints i see it is very easy for envery body to do it.</h2>
 <p>after all this you will see spinner for loading your QRCode after only one miniute the spinner will be hidden and your QRCode will be appered you can see this try.</p>
<p> whitch steps i should do to make this QRCode ? i will make some picture for making QRCode for the start to the end look at this...</p>

<pre>
  <code>var qrcode = new QRCode("test", {
    text: "http://jindo.dev.naver.com/collie",
    width: 128,
    height: 128,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
});</code>
</pre>
``` diff
+ steps:-
```
<ol>
  <li><img src="Screenshot (80).png" width=800 height=400 align="center"></li>
  <li><img src="Screenshot (81).png" width=800 height=400  align="center"></li>
  <li><img src="Screenshot (82).png" width=800 height=400  align="center"></li>
  <li><img src="Screenshot (83).png" width=800 height=400  align="center"></li>
  <li><img src="Screenshot (84).png" width=800 height=400 align="center"></li>
  <li><img src="Screenshot (85).png" width=800 height=400 align="center"></li>
  <li><img src="Screenshot_2024-02-08-00-50-14-56_680d03679600f7af0b4c700c6b270fe7.jpg" width=800 height=400  align="center"></li>  
</ol>
<br>
<pre>try it...<code><a href="https://anwartareka.github.io/QRCode-Scanner/">click</a></code></pre>
 

