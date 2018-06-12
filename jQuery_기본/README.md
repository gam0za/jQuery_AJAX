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

나는 Node.JS를 이용하여 jQuery를 다운받았다. 

<pre><code>npm install jQuery 
var $ =require('jQuery');</code></pre>