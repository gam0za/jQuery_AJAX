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

1. 기본 선택자

<pre><code>$('h1').css('color','red');</code></pre>

1.1. 전체 선택자

*를 사용한 선택자이다. 

1.2. 태그 선택자
