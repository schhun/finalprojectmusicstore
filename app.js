
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
77
78
79
80
81
82
83
84
85
86
87
88
89
90
91
92
93
94
95
96
97
98
99
100
101
102
103
104
105
106
107
108
109
110
111
112
113
114
115
116
117
118
119
120
121
122
123
124
125
126
127
128
129
130
131
132
133
134
135
136
137
138
139
140
141
142
143
144
145
146
147
148
149
150
151
152
153
154
155
156
157
158
159
160
161
162
163
164
165
166
167
168
169
170
171
172
173
174
175
176
177
178
179
180
181
182
183
184
185
186
187
188
189
190
191
192
193
194
195
196
197
198
199
200
201
202
203
204
205
206
207
208
209
210
211
212
213
214
215
216
217
218
219
220
221
222
223
224
225
226
227
228
229
230
231
232
233
234
235
236
237
238
239
240
241
242
243
244
245
246
247
248
249
250
251
252
253
254
255
256
257
258
259
260
261
262
263
264
265
266
267
268
269
270
271
272
273
274
275
276
277
278
279
280
281
282
283
284
285
286
287
288
289
290
291
292
293
294
295
296
297
298
299
300
301
302
303
304
305
306
307
308
309
310
311
312
313
314
315
316
317
318
319
320
321
322
323
324
325
326
327
328
329
330
331
332
333
334
335
336
337
338
339
340
341
342
343
344
345
346
347
348
349
350
351
352
353
354
355
356
357
358
359
360
361
362
363
364
365
366
367
368
369
370
371
372
373
374
375
376
377
378
379
380
381
382
383
384
385
386
387
388
389
390
391
392
393
394
395
396
// const app = new Vue({
//   el: "#app",
//   data:{
//     test:"text",
//     list:[
//       {
//         name: "Bob",
//         age: 69
//       },
//       {
//         name: "Alice",
//         age: 42
//       }
//     ]
//   },
//   methods:{
//     changeText: function(txt) {
//       this.text=txt
//     },
//     addItem:function(){
//       this.list.push({name:"Jerry", age: 35})
//     }
//   }
// });

// var app = new Vue({
//     el: "#app",
//     data: {
//         test:"test"
//     },
//     methods:{
//       changeText

//     }
// });




var cartItems = 0;
var newItem = 0;

$(document).ready(function(){


// $('#print').click(function() {
//   $('pre').text(JSON.stringify(list) + '\n\n');

//   console.log(JSON.stringify(products));
//   $('pre').append(document.createTextNode(JSON.stringify(counter)));
// })

    // myCart Button, add items to cart.
    $(".topnav").on('click', '#myCart',function() {
        cartItems = 0;
        document.getElementById("cartItems").innerHTML = cartItems;
        console.log("Removing all items from cart.")
        $(".cart").children().detach().prependTo('.inventory');
    });

    // Add the Cart button to the upper right corner.
    $('.topnav').append($("<button type=\"button\" id=\"myCart\">Cart:<a id=\"cartItems\">0</a></button>"));

    // Generates new product
    $('#add_div').on('click', function(){
        newItem++;
        $('#container').append($("<div id='"+newItem+"' class='item'>"+'<img width="100" height="100" onerror=\'this.src="noimage.png"\' src=\'testimage-wrong.png\'/>'+'<button id="add_to_cart">Add to Cart</button>'));
    });

    // Remove item and move to cart
    $("#container").on("click", "#add_to_cart", function() {
        console.log("Removing"+$(this).parent().attr('id'));
        $(this).parent().remove();
    });

    // Checks if image src is valid
    // $(document).ready(function(){
    //   $("img").bind("error",function(){
    //    // Replacing image source
    //    $(this).attr("src","noimage.png");
    //   });
    //  });

    $("img").bind("error",function(){
        // Replacing image source
        $(this).attr("src","noimage.png");
    });

    var products = [
        {
            id:0,
            name:"Jazzmaster",
            instrument_type: "Guitar",
            brand: "Fender",
            price:"100.00",
            image:"https://www.fmicassets.com/Damroot/ZoomJpg/10001/0149753305_gtr_frt_001_rr.jpg",
            color:"red"

        },
        {
            id:1,
            name:"GB1K",
            instrument_type: "piano",
            brand: "Yamaha",
            price:"200.00",
            image:"https://usa.yamaha.com/files/GB1K-1-Polished_Ebony_735x735_f47b5f5720673bf28f3d6fdaa097211f.jpg",
            color:"green"
        },
        {
            id:2,
            name:"S60 ",
            instrument_type: "guitar",
            brand: "Maton",
            price:"300.00",
            image: "https://maton.com.au/images/made/assets/uploads/products/S60_Front_900_422_s.png",
            color:"blue"
        },
        {
            id:3,
            name:"Mustang",
            instrument_type: "guitar",
            brand: "Fender",
            price:"400.00",
            image:"https://www.fmicassets.com/Damroot/ThumbnailJpg/10001/0149783300_gtr_frt_001_rr.jpg",
            color:"red"
        },
        {
            id:4,
            name:"Genos",
            instrument_type: "piano",
            brand: "Yamaha",
            price:"500.00",
            image:"https://www.yamaha.com/yamahavgn/PIM/Images/8A3C6B12968B494FBCC42149AA259E0D_12075_735x735_e2522531b00e783a7be1ddf610486a3c.jpg",
            color:"green"
        },
        {
            id:5,
            name:"SRS808",
            instrument_type: "guitar",
            brand: "Maton",
            price:"600.00",
            image: "https://maton.com.au/assets/uploads/products/SRS808.png",
            color:"blue"
        }
    ];


    // Vue.component("tags",{
    //   template:`
    //     <div>
    //       {{tags}}
    //     </div>
    //   `,
    //   data(){
    //     return {
    //       tags: [],
    //     }
    //   },
    //   created() {
    //     const vm = this;
    //     console.log('created', vm.tags)
    //     console.log(list)
    //     products.forEach( function (item) {
    //       vm.tags.push(item)
    //       console.log('created, products.forEach', vm.tags)
    //     });
    //   }
    // })


    // const app = new Vue({
    //   el: "#app",
    //   data:{
    //     // test:"text",
    //     list:[
    //       {
    //         name: "Bob",
    //         price: 69
    //       },
    //       {
    //         name: "Alice",
    //         price: 42
    //       }
    //     ],
    //     form:{
    //       name:"",
    //       price:""
    //     }
    //   },
    //   methods:{
    //     // changeText: function(txt) {
    //     //   this.text=txt
    //     // },
    //     addItem:function(){
    //       this.list.push({name: this.form.name, price: this.form.price})
    //       // this.products.push({name: this.form.name})
    //       //this.products.push({name: this.form.name, age: this.form.age})
    //     }
    //   }
    // });





    // $('body').append('<form><p>Enter New Item</p><input type="text" id="name" name="name"><br><input type="text" id="price" name="price"><br><input type="text" id="color" name="value"><br><button type="button" onclick="sendData();">Create New</button><br><input type="submit"  value="Submit" id="g"></form>');



    // GOOD WORKING BUTTON
    //$('body').append('<form><p>enter new item</p><label for="name">Name:</label><input type="text" id="name" name="name"><br><label for="price">Price:</label><input type="text" id="price" name="price"><br><label for="color">Color:</label><input type="text" id="color" name="color"><br><label for="brand">Brand:</label><input type="text" id="brand" name="brand"><br><label for="instrument_type">Instrument Type:</label><input type="text" id="instrument_type" name="instrument_type"><br><input type="submit" value="Submit" id="g"></form>');


    // $( "form" ).submit(function( event ) {
    //   console.log( $( this ).serializeArray() );
    //   $( this ).serializeArray();
    //   event.preventDefault();
    // });


    $( "form" ).submit(function( event ) {
        console.log( $( this ).serializeArray() );
        var newItem = $( this ).serializeArray();
        event.preventDefault();
        products.push({newItem});
        console.log(products);
    });




    // When item image is clicked make details pop up
    function popUp(idx) {
        var that = this;

        this.ele = document.createElement("div");
        this.ele.classList.add("popUp");
        this.imgEle = document.createElement("img");
        this.imgEle.setAttribute("src", products[idx].image);
        this.nameEle = document.createElement("p");
        this.nameEle.innerHTML ="Name: " + products[idx].name;
        this.priceEle = document.createElement("p");
        this.priceEle.innerHTML ="Price: $" + products[idx].price;

        this.instEle = document.createElement("p");
        this.instEle.innerHTML = "Instrument Type:" + products[idx].instrument_type;
        this.brandEle = document.createElement("p");
        this.brandEle.innerHTML = "Brand:" + products[idx].brand;

        this.ele.appendChild(this.imgEle);
        this.ele.appendChild(this.nameEle);
        this.ele.appendChild(this.priceEle);
        this.ele.appendChild(this.instEle);
        this.ele.appendChild(this.brandEle);

        // Click off to Exit popUp
        this.ele.addEventListener("click", function() {
            that.ele.style.display = "none";
        });
        document.body.appendChild(this.ele);
    }

    function items() {
        var that = this;
        this.products = [];
        this.ele = document.createElement("div");
        this.ele.classList.add("inventory");

        for (let i = 0; i < products.length; i++) {
            this.products.push(new fruit(i));
            //popUp only when image is clicked on
            this.products[i].imgEle.addEventListener("click", function(){
                var pop = new popUp(i);
            });
            this.ele.appendChild(this.products[i].ele);
        }
        document.body.appendChild(this.ele);
    }

    function addToCart(idx) {
        cartItems++;
        console.log(cartItems);
        document.getElementById("cartItems").innerHTML = cartItems;

        $(".item").on("click", ".add_to_cart", function() {
            console.log("Removing"+$(this).parent().attr('class'));
            $(this).parent().detach().appendTo('.cart');
            // add element to cart array...???

            if ($('.container').is(':empty')) {
                // let ele = document.getElementById('container');
                // ele.innerHTML += 'Store Is Empty!';
                $(this).parent().detach().appendTo('.cart');
            }

        });
    }

    function fruit(idx) {
        var that = this;

        this.ele = document.createElement("div");
        this.ele.classList.add("item");
        this.imgEle = document.createElement("img");
        this.imgEle.setAttribute("src", products[idx].image);
        this.nameEle = document.createElement("p");
        this.nameEle.innerHTML = "Name:" + products[idx].name;
        this.priceEle = document.createElement("p");
        this.priceEle.innerHTML = "Price:" + products[idx].price;
        // this.
        this.instEle = document.createElement("p");
        this.instEle.innerHTML = "Instrument Type:" + products[idx].instrument_type;
        this.brandEle = document.createElement("p");
        this.brandEle.innerHTML = "Brand:" + products[idx].brand;


        this.btnEle = document.createElement("button");
        this.btnEle.classList.add("add_to_cart");
        this.btnEle.innerHTML = "Add to Cart";
        this.btnEle.addEventListener("click", addToCart);

        // Change Background color on mouse hover
        this.ele.addEventListener("mouseover", function() {
            that.ele.style.backgroundColor = products[idx].color;
        });
        this.ele.addEventListener("mouseout", function(){
            that.ele.style.backgroundColor = "white";
        });
        this.ele.appendChild(this.imgEle);
        this.ele.appendChild(this.nameEle);
        this.ele.appendChild(this.priceEle);
        this.ele.appendChild(this.instEle);
        this.ele.appendChild(this.brandEle);
        this.ele.appendChild(this.btnEle);
        document.body.appendChild(this.ele);
    }

    var restockStore = new items();

    //  Handles adding a new product
    function addNew() {
        $( ".inventory" ).remove();
        var that = this;
        this.products = [];
        this.ele = document.createElement("div");
        this.ele.classList.add("inventory");

        for (let i = 0; i < products.length; i++) {
            this.products.push(new fruit(i));
            //popUp only when image is clicked on
            this.products[i].imgEle.addEventListener("click", function(){
                var pop = new popUp(i);
            });
            this.ele.appendChild(this.products[i].ele);
        }
        document.body.appendChild(this.ele);
    }


    var list = [],
        $ins = $('#id, #name, #brand, #price, #instrument_type, #image, #color'),
        counter = {
            id: {},
            name: {},
            brand: {},
            price: {},
            instrument_type: {},
            image: {},
            color: {}
        };
    $('#add').click(function() {
        var obj = {},
            valid = true;
        $ins.each(function() {
            var val = this.value.trim();
            if (val) {
                obj[this.id] = val;
                console.log("val = " + val);
                //products.push(val);
            }
        });
        if (valid) {
            list.push(obj);
            //$ins.val('');
            products.push(obj)
            //products.observe();
            $ins.val('');
            addNew();
            //items(); // calls all insturments again
            //location.reload();
        }

    });

    // var restockStore = new items();
});
