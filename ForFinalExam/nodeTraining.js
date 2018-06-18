var express=require('express');
var bodyParser=require('body-parser');
// 웹서버 생성 

var app=express();


// app.all('/parameter',function(req,res){
// 	var name=req.param('name');
// 	var region=req.param('region')

// 	res.send('<h1>'+name+','+region+'</h1>')
// })

// app.all('/parameter2/:key',function(req,res){
// 	var key=req.params.key;

// 	res.send(key)
// })

// body-parser 모듈 사용

var items=[{
	name:'potato',
	price:'10000'
	},
	{
	name:'tomato',
	region:'10000000'
	}
];

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:false}))

// get
app.get('/products',function(req,res){
	res.send(items)
	console.log('get')
})

app.get('/products/:id',function(req,res){
	var id=req.params.id;
	res.send(items[id])
})

// post
app.post('/products',function(req,res){
	var name=req.body.name;
	var price=req.body.price;
	var item={
		name:name,
		price:price
	};
	items.push(item);

	res.send({
		message:"success",
		data:item
	})
})

// put (데이터 수정)
app.put('/put/:id',function(req,res){
	var id=Number(req.params.id);
	var name=req.body.name;
	var price=req.body.price;

	if(items[id]){
		if(name){items[id].name=name;}
		if(price){items[id].price=price;}

		res.send({
			message:"success",
			data: items
		})
	}else{
		res.send({
			message:"fail"
		})
	}
})

// delete (데이터 삭제)
app.delete('/delete/:id',function(req,res){
	var id=Number(req.params.id);

	if(isNaN(id)){
		res.send({message:"잘못된 아이디입니다."})
	}else if(items[id]){
		items.splice(id,1);
		res.send({
			message:"데이터를 정상적으로 삭제했습니다.",
			data:items
		})
	}else{
		res.send({
			message:"존재하지 않는 데이터 입니다."
		})
	}
})


app.listen(3000,function(){
	console.log('listening 3000 port')
})