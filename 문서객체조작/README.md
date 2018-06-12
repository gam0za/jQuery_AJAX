# <문서 객체 선택과 탐색>

함수를 활용해 문서 객체를 선택하는 방법을 추가적으로 공부한다. jQuery가 제공하는 함수를 활용한다.

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

<pre><code>var xmlDoc=$.parseXML(xml);
$(xmlDoc).find('friend').each(function(index){});</code></pre>

each() 메서드 안에서 find() 메서드를 한 번 더 사용해 각각의 데이터를 추출한다.


## parent() 메서드

**이벤트 리스너에서의 this 키워드는 '이벤트를 발생시킨 객체' 이다.**

클릭한 대상의 부모

<div><h1 id="child">parent() 메서드</h1></div>

<pre><code>$(document).ready(function(){
    $('#child').click(function(){
      $(this).parent().css('background','purple');
    })
  })</code></pre>


  ## [결과화면]
 ![Alt text](/문서객체조작/images/parent.PNG)

***


# <문서 객체 조작>

# 1. 문서 객체의 클래스 속성 추가

## addClass()

문서 객체의 클래스 속성을 추가한다.

<pre><code>$(document).ready(function(){
      $('h1').addClass(function(index){
        return 'class'+index;
      })
    })</code></pre>

***

# 2. 문서 객체의 클래스 속성 제거

## removeClass()

이 메서드의 매개변수에 아무것도 입력하지 않으면, 문서 객체의 모든 클래스를 제거한다.

***

# 3. 문서 객체의 속성 검사 (Getter)

## attr()

***

# 4. 문서 객체의 속성 추가 (Setter)


## 1. $(selector).attr(name,value);

<pre><code>$('div').attr('width','100');</code></pre>

## 2. $(selector).attr(name,function(index,attr){});

<pre><code>$('div').attr('width',function(index){
    return (index+1)*100;
  });</code></pre>


## 3. $(selector).attr(object);

<pre><code>$('div').attr({
  width:function(index){
    return (index+1)*100;
  },
  height: 100
});</code></pre>


***

# 5. 문서 객체의 속성 제거

## removeAttr(name)


***

# 6. 문서 객체의 스타일 검사

## css()

***

# 7. 문서 객체의 스타일 추가

## 1. $(selector).css(name,value);

<pre><code>$('h3').css('color','red');</code></pre>

## 2. $(selector).css(name,function(index,style){});

<pre><code>var color=['red','blue','green'];
$('h3').css('color',function(index){
  return color[index];
});</code></pre>

## 3. $(selector).css(object);

<pre><code>$('h3').css({
  color:function(index){
    return color[index];
  },
  backgroundColor:'hotpink'
});</code></pre>

***

# 8. 문서 객체의 내부 검사

아래의 두 메서드의 차이는 html() 메서드는 HTML 태그를 인식하고, text() 메서드는 HTML 태그를 인식하지 않는다.

또한, text() 메서드는 html() 메서드와 다르게 첫 번째 문서 객체의 글자만 가져오는 것이 아니라, 선택자로 선택한 모든 문서 객체의 글자를 이어서 출력한다.



## html()

문서 객체 내부의 글자와 관련된 모든 기능 수행 (HTML 태그 인식)

## text()

문서 객체 내부의 글자와 관련된 모든 기능 수행


***


# 9. 문서 객체의 내부 추가

## 1. $(selector).html(value); 와 $(selector).text(value);

## 2. $(selector).html(function(index,html){}); 와 $(selector).text(function(index,text){});


***


# 10. 문서 객체 제거

## remove()

문서 객체를 제거한다.


## empty()

문서 객체 내부를 비운다.


# 11. 문서 객체 생성

## 1. [$('<h1>Hello World</h1>').appendTo('body');]

## 2. [$('<h1></h1>').attr('width',100).appendTo('body');]

## 3. [$('<h1></h1>',{width:100,  height:50}).appendTo('body');]
