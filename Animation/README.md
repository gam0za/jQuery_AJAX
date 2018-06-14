# <시각적 효과>

*** 

# 1. 기본 시각 효과

* show() : 문서 객체를 크게 확대하며 보여줌
* hide() : 문서 객체를 작게 축소하며 사라지게 한다.
* toggle() : show() 메서드와 hide() 메서드를 번갈아 실행
* slideDown() : 문서 객체를 슬라이드 효과와 함께 보여준다.
* slideUp() : 문서 객체를 슬라이드 효과와 함께 사라지게 한다.
* slideToggle() : slideDown() + slideUp()
* fadeIn() : 문서 객체를 선명하게 보여준다.
* fadeout() : 문서 객체를 흐리게 사라지게 한다.
* fadeToggle() : fadeIn() + fadeOut()

## $(selector).method()

## $(selector).method(speed)

## $(selector).method(speed,callback)

## $(selector).method(speed,easing,callback)

* speed : 효과를 진행할 속도 지정 / 밀리 초 단위의 숫자 또는 문자열 (slow,normal,fast)

* callback : 효과를 모두 완료하고 실행할 함수 지정

* easing : 애니메이션의 easing 형태 지정 / 별도의 플러그인을 사용하지 않으면 문자열 linear와 swing만 입력 가능


<pre>
	<code>$(document).ready(function(){
			$('h1').hover(function(){
				$('h2').fadeToggle();
			})
		})</code>
</pre>

# 2.  사용자 정의 효과 animate() 사용

## $(selector).animate(object)

## $(selector).animate(object,speed)

## $(selector).animate(object,speed,easing)

## $(selector).animate(object,speed,easing,callback)

속성

* opacity
* height
* top
* width
* left
* margin
* right
* padding
* bottom


<pre>
	<code>$('div').click(function(){
			$('#custom').animate({
				right:500
			},slow)
		})</code>
</pre>


# 3. 애니메이션 큐

애니메이션은 큐의 형태로 순서대로 동작한다. 큐의 내용을 제거하고 싶으면, **clearQue** 를 해준다.

clearQue() 메서드가 큐를 비우므로 이후에 추가하는 효과가 실행되지 않지만, 이전에 실행되던 애니메이션을 정지하는 기능은 없다!! ★★★

# 4. 애니메이션 정지

stop() 메서드를 이용하여 효과 및 애니메이션을 정지한다. 

## $(selector).stop()

## $(selector).stop(clearQueue)	//불 자료 입력, default:false

## $(selector).stop(clearQueue,goToEnd) //불 자료 입력 default:false

# 5. 애니메이션 지연

delay() 메서드를 사용하여 큐에 있는 명령을 잠시 중지하고, 매개변수에 정지하고자 하는 시간을 밀리 초 단위로 입력 


