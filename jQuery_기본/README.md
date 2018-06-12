# jQuery 기본

## 1. 개요
jQuery는 모든 브라우저에서 동작하는 클라이언트 자바스크립트 라이브러리이다.

* 문서 객체 모델과 관련된 처리를 쉽게 구현
* 일관된 이벤트 연결을 쉽게 구현
* 시각적 효과를 쉽게 구현
* Ajax 애플리케이션을 쉽게 개발

추가적으로, jQuery를 사용한다면 모든 브라우저에서 동작하는 이벤트에 쉽게 연결할 수 있다.

## 2. 다운로드
<http://jquery.com/>

jQuery는 두 가지 방법으로 사용할 수 있다. 첫번 째 방법은 CDN (Content Delivery Network) 호스트를 사용하는 방법이 있고, 두번 째로 직접 내려받아 사용하는 방법이 있다. 

Node.JS를 이용하여 jQuery를 다운받을 수도 있다.
<https://www.npmjs.com/package/jQuery/>

<pre><code>npm install jQuery 
var $ =require('jQuery');</code></pre>

## 3. 선택자
선택자는 jQuery에서 가장 중요한 역할을 한다.

### 1. 기본 선택자

* 전체 선택자
*를 사용한 선택자이다. 
<pre><code>$('*').css('color','red');</code></pre>


*  태그 선택자
특정한 태그를 선택하는 선택자이다. 태그의 이름을 그대로 사용한다.
<pre><code>$('h1').css('color','red');</code></pre>


* 아이디 선택자
특정한 id 속성이 있는 문서 객체를 선택한다. 
<pre><code>$('#idname').css('color','red');</code></pre>

또는 h1 태그 내의 특정 id 
<pre><code>$('h1#idname').css('color','red');</code></pre>


* 클래스 선택자
특정한 class 속성이 있는 문서 객체를 선택한다.
<pre><code>$('.classname').css('color','red');</code></pre>

두 클래스 모두 갖는 문서 객체 선택 시
<pre><code>$('.classname1.classname2').css('color','red');</code></pre>



















