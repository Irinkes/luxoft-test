$.getJSON('news.json', function(data) {
       			for(var i=0; i<data.length; i++) {
       				$('.new-section-wrapper').append("<section class='news-block'><span class='news-name'>"+ data[i].newsName+ "</span><span class='news-date'>"+ data[i].date+ "</span><div class='col-content news-content more'>"+ data[i].contentText+"</div></section>");
       			}
       		})