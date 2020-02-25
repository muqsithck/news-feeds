  let url = 'http://feeds.bbci.co.uk/news/technology/rss.xml';
  const textarea = document.querySelector('#feeds');
  const date = new Date();
  document.querySelector('#date').innerHTML = date.toDateString();
  
    feednami.load(url)
    .then(feed => {
      textarea.value = ''
      for(let entry of feed.entries){
          let li = document.createElement('li');
          li.innerHTML = `<p claas="title" ><a  href="${entry.link}"  target="_blank" >${entry.title}</a></p> <p>${entry.description}</p>`;
          textarea.appendChild(li);
      }
    });

    // Feednami was created as a replacement to Google Feed API. If you were using Google Feed API before it was shut down, you can easily replace it with Feednami.
    // https://toolkit.sekando.com/docs/en/feednami


    // Bbc feeds
    // http://feeds.bbci.co.uk/news/technology/rss.xml

