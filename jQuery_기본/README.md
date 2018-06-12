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


* 자손 선택자와 후손 선택자

자손 선택자와 후손 선택자는 기본 선택자의 앞에 붙여 사용한다.기본 선택자의 범위를 제한한다.
<pre><code>$('div>*').css('color','purple');//자손 선택자
$('div ul').css('color','green');//후손 선택자</code></pre>



### 2. 속성 선택자

속성 선택자는 기본 선택자 뒤에 붙여 사용한다. 속성 선택자는 **입력 양식과 관련된 태그** 를 선택할 때 많이 사용한다.


* 요소[속성=값] : 속성과 값이 같은 문서객체를 선택한다.

* 요소[속성|=값] : 속성 안의 값이 특정 값과 같은 문서 객체를 선택한다.

* 요소[속성~=값] : 속성 안의 값이 특정 값을 단어로 시작하는 문서 객체를 선택한다.

* 요소[속성^=값] : 속성 안의 값이 특정 값으로 시작하는 문서 객체를 선택한다.

* 요소[속성$=값] : 속성 안의 값이 특정 값으로 끝나는 문서 객체를 선택한다.

* 요소[속성*=값] : 속성 안의 값이 특정 값을 포함하는 문서 객체를 선택한다.

<pre><code>$('input[type="text"]').val('Hello Gamza!');</code></pre>


### 3. 필터 선택자

선택자 중에 :기호를 포함하는 선택자를 필터 선택자라고 한다. 하지만, 필터 선택자는 기본 선택자에 비해 활용도가 떨어져서 필요할 때 찾아 쓰는게 좋을듯 하다.


* 입력 양식 필터 선택자

**요소:button** : input 태그 중 type 속성이 button인 문서 객체와 button 태그를 선택한다. button 대신 다른 속성을 넣어도 된다.

**요소:checked** : 체크되어 있는 입력 양식을 선택한다.

<pre><code>var value=$('select > option:selected').val();</code></pre>


* 위치 필터 선택자

**요소:odd** : 홀수 번째에 위치한 문서 객체 선택

**요소:even** : 짝수 번째에 위치한 문서 객체 선택

**요소:first** , **요소:last**


* 함수 필터 선택자

**요소:contains(문자열)** : 특정 문자열 포함

**요소:eq(n)** : n번째에 위치

**요소:gt(n)** : n번째 초과에 위치

**요소:has(h1)** : h1태그가 있는 문서 객체

**요소:lt(n)** : n번째 미만에 위치

**요소:not(선택자)** : 선택자와 일치하지 않는 문서 객체

**요소:nth-child(3n+1)** : 3n+1번째에 위치 (1, 4, 7, ...)



## 4. 배열 관리

jQuery로 배열을 관리할 때는 **each()메서드** 를 사용한다. 두 가지 방법이 존재한다.

### 1. $.each(object,function(index,item){}})


<pre><code>  $(document).ready(function(){
    var array=[
      {name:'JinyoungKim', like:'PotatoChips'},
      {name:'Gamza', like:'Beer'},
      {name:'JYK', like:'Chicken'}
    ];
    // each 메서드 사용
    $.each(array,function(index,item){
      var output='';
      output+='<h1>'+item.name+'</h1>';
      output+='<h2>'+item.like+'</h2>';

      document.body.innerHTML += output;</code></pre>


### 2. $(selector).each(function(index,item){})

* addClass / removeClass : 문서 객체에 class 속성을 추가하는 메서드


<pre><code>    <style>
      .high-light-0{ background: red;}
      .high-light-1{ background: orange;}
      .high-light-2{ background: yellow;}
      .high-light-3{ background: green;}
    </style>

  $('h3').each(function(index,item){
          $(item).addClass('high-light-'+index);
        })</code></pre>



적은 수의 속성을 추가할 때는 문제가 없지만 많은 수의 속성을 추가하고 싶을 땐, **$.extend()** 메서드가 each()보다 더 효율적이다. extend()메서드는 두 번째 매개변수에 입력한 객체를 기존 객체에 합쳐지도록 한다.


<pre><code>    <script>
    $(document).ready(function(){
      var object={name:'Jinyoung Kim'};

      $.extend(object,{
        like:'beer!',
        part: 'computer'
      });

      var output=''
      $.each(object,function(key,item){
        output+=key+': '+item+'\n';
      });
      alert(output);
    })
    </script></code></pre>
