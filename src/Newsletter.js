import React from 'react';


export class NewsLetter extends React.Component {
 
  render(){
    
    const posts = [
      {  
         refKey: 'ebbOptIn',
         logo: 'https://s3.amazonaws.com/orion-uploads/newsletter-promo/ebb-logo.png',
         content: 'Get daily alerts on free and discounted ebooks—bestselling fiction, history, biographies, mysteries, and much more—that you can read on any device!',
         containerColor:'#2e68b2',
         site: 'earlybirdbooks',
         optInText: 'Click here to subscribe to Early Bird Books!'
      },
      {
        
         refKey: 'tluOptIn',
         logo: 'https://s3.amazonaws.com/orion-uploads/newsletter-promo/tlu-logo.png',
         containerColor:'#000000',
         content: 'Your source for mystery and mayhem—creepy reads plus deals on ebooks and other treats for fans of horror, true crime, and thrillers.',
         site: 'the-line-up',
         optInText: 'Click here to subscribe to The Lineup!'
      },
      {
         refKey: 'portalistOptIn',
         logo: 'https://s3.amazonaws.com/orion-uploads/newsletter-promo/portalist-logo.png',
         containerColor: '#3c7d9a',
         content: 'Explore the best in science fiction and fantasy—and enjoy our unique take on everything from pop culture and books to science and the future of our species.',
         site: 'theportalist',
         optInText: 'Click here to subscribe to The Portalist!' 
      },
      {
         refKey: 'worthbooksOptIn',
         logo: 'https://s3.amazonaws.com/orion-uploads/newsletter-promo/worthbooks-logo.png',
         containerColor: '#7f5b78',
         content: 'So much to read and so little time? Stay informed with high-quality, in-depth summaries of fiction and nonfiction books.',
         site: 'worthbooks',
         optInText: 'Click here to subscribe to Worth Books!'
      }
    ];

    const newPages = posts.map(post => {
      return (
          <div className="col-md-6 col-sm-6 col-md-offset-1" key={post.refKey}>
              <div className="newsletter" style={{backgroundColor:post.containerColor}}>
                  <h1> <img src={post.logo} />{post.title}</h1>
                  <p>{post.content}</p>
                  <p><input 
                  type="checkbox"
                  name="site"
                   />{post.optInText}</p>
              </div>
          </div> 
        )
    });
     return <div className="row letters">{newPages}</div>;
  }
}