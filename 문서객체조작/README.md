# <문서 객체 선택과 탐색>

함수를 활용해 문서 객체를 선택하는 방법을 추가적으로 공부한다.

# 1. 기본 필터 메서드

## filter() 메서드

필터 메서드는 다음 두 가지 형태로 사용한다.

### 1. $(selector).filter(selector);

### 2. $(selector).filter(function(){});

함수의 매개변수로 index값을 넣어서 응용할 수 있다.

<pre><code>  <script>
  $(document).ready(function(){

    // filter()메서드의 매개변수로 함수를 넣을 경우
    $('h3').filter(function(index){
      return index%3==0;
    }).css({
      backgroundColor:'skyblue',
      color:'blue'
    })

  })
  </script></code></pre>


## [결과화면]
  ![Alt text](/문서객체조작/images/selectMyDog.PNG)


filter() 메서드를 응용

<pre><code>$('h3').css('background','hotpink').filter(':even').css('background','pink');</code></pre>

## [결과화면]
  ![Alt text](/문서객체조작/images/filter.PNG)


***

# 2. 문서 객체 탐색 종료

앞에서 filter() 메서드를 사용하면서, 메서드 체이닝을 활용하려면, end() 메서드를 이용하여 문서 객체 선택을 한 단계 뒤로 돌려놔야 한다.

<pre><code>$('li').css('background','orange').filter(':even').css('color','red').end().filter(':odd').css('color','blue');</code></pre>

## [결과화면]
  ![Alt text](/문서객체조작/images/end.PNG)



***


# 3. 특정 위치의 문서 객체 선택

### eq() : 특정 위치에 존재하는 문서 객체 선택 (음수를 입력하면 뒤쪽을 기준으로 선택)
### first() : 첫 번째에 위치
### last() : 마지막에 위치


## find() 메서드

<pre><code>var xmlDoc=$.parseXML(xml); $(xmlDoc).find('friend').each(function(index){});</code><pre>

each() 메서드 안에서 find() 메서드를 한 번 더 사용해 각각의 데이터를 추출한다.


## parent() 메서드

**이벤트 리스너에서의 this 키워드는 '이벤트를 발생시킨 객체' 이다.**

클릭한 대상의 부모

<pre><code><div><h1 id="child">parent() 메서드</h1></div></code></pre>

<pre><code>$(document).ready(function(){
    $('#child').click(function(){
      $(this).parent().css('background','purple');
    })
  })</code></pre>


# <문서 객체 조작>
