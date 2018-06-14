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





























