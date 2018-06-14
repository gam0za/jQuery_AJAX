# <jQuery 이벤트>

# 1. 이벤트 연결 기본

document 객체에 ready 이벤트를 연결

<pre><code>$(document).ready(function(event){

		})</code></pre>

이벤트를 연결하는 가장 기본적인 메서드는 on()이다.

***

# 2. on() 메서드

## $(selector).on(eventName,function(event){});


<pre><code>$('h1').on('click',function(){
				$(this).html(function(index,html){
					return html+ '+';
				})
			})</code></pre>


## $(selector).on(object);

<pre><code>$('h2').on({
				mouseenter:function(){$(this).addClass('reverse')},
				mouseleave:function(){$(this).removeClass('reverse')}
			})</code></pre>

***

# 3. 간단한 이벤트 연결

* blur
* focus
* focusin
* focusout
* load
* resize
* mousemove

등 여러개의 이벤트 메소드를 간단하게 이용하여 이벤트를 연결한다.

<pre><code>$('h3').hover(function(){
				$(this).addClass('reverse');
			}, function(){
				$(this).removeClass('reverse');
			});</code></pre>


# 4. 이벤트 연결 제거

## 1. $(selector).off()

해당 문서 객체와 관련된 모든 이벤트를 제거한다.


## 2. $(selector).off(eventName)

해당 문서 객체의 특정 이벤트와 관련된 모든 이벤트를 제거한다.

## 3. $(selector).off(eventName,function)

특정 이벤트 리스너 제거한다.

# 5. one() 메서드

이벤트를 한 번만 연결

# 6. 매개변수 context

jQuery 메서드의 매개변수 내에 selector 말고도 context를 넣을 수 있다.

매개변수 context는 selector가 적용하는 범위를 한정한다.

<pre><code>$('.context').hover(function(){
	var header=$('h1',this).text();
	var content=$('h2',this).text();

	alert(header+' '+content);
	$(this).off();
})</code></pre>


cf) find() 메서드를 이용하여 사용해도 된다.


# 7. 이벤트 강제 발생 trigger()

이벤트를 강제로 발생시킨다.

## 1. $(selector).trigger(eventName)

## 2. $(selector).triger(eventName,data)


# 8. 기본 이벤트와 이벤트 전달

## preventDefault()

기본 이벤트를 제거

## stopPropagation()

이벤트 전달을 제거

## 두 가지를 같이 적용하기 위해 return false를 사용

cf) 기존 자바스크립트는 return false 를 사용하면 기본 이벤트만 제거된다!! ★헷갈리지 말기★

# 9. 이벤트 연결 범위 한정

이벤트를 연결하는 on() 메서드에 selector 매개변수로 이벤트 범위를 한정할 수 있다.

# 10. 마우스 이벤트

mouseover 이벤트와 mounseenter 이벤트의 차이

> mouseover 이벤트는 이벤트 버블링을 적용한다. 따라서 내부의 div 태그 안에 들어가도 이벤트를 발생시킨다. 반면에 mouseenter이벤트는 문서 객체의 안에 있는지 외부에 있는 지 따진다.


# 11. 입력 양식 이벤트

* change : 입력 양식의 내용을 변경할 떄
* focus : 입력 양식에 초점을 맞출 때
* focusin/focusout: 입력 양식에 초점이 맞추어지기 바로 전/입력 양식에 초점이 사라지기 바로 전
* blur : 입력 양식에 초점이 사라질 때
* select : 입력 양식을 선택 할 때
* submit : submit 버튼을 누를 때
* reset : reset 버튼을 누를 때
