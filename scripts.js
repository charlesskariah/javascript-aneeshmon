const app = document.getElementById('root');

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container);

// function jsonp(uri) {
//     return new Promise(function(resolve, reject) {
//         var id = '_' + Math.round(10000 * Math.random());
//         var callbackName = 'jsonp_callback_' + id;
//         window[callbackName] = function(data) {
//             delete window[callbackName];
//             var ele = document.getElementById(id);
//             ele.parentNode.removeChild(ele);
//             data1 = JSON.stringify(data);
//             resolve(data1);
//         }

//         var src = uri + '&callback=' + callbackName;
//         var script = document.createElement('script');
//         script.src = src;
//         script.id = id;
//         script.addEventListener('error', reject);
//         (document.getElementsByTagName('head')[0] || document.body || document.documentElement).appendChild(script)
//     });
// }

// jsonp('http://www.mocky.io/v2/5c370b3e30000080001f6162').then(function(data){
//     income_data = JSON.stringify(data);
//     tea = JSON.parse(income_data);
//     alert(tea);
// });

$(document).ready(function() {
    $(".btn").click(function() {
      $.ajax({type: "get",
              url: "http://api.forismatic.com/api/1.0/",
              data: {method: "getQuote",format: "jsonp",lang: "en"},
              dataType: "jsonp",
              jsonp: "jsonp",
              jsonpCallback: "myJsonMethod"
      }); 
    });
  });
  function myJsonMethod(response){
    console.log (response);
  }