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


  ![Alt text](/문서객체조작/images/selectMyDog.PNG)


***


















# <문서 객체 조작>
