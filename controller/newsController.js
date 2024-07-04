let news = [
    { id: 1, title: 'Breaking News: Market Hits Record Highs', isRead: true },
    { id: 2, title: 'Sports Update: Local Team Wins Championship', isRead: true },
    { id: 3, title: 'Weather Alert: Heavy Rain Expected This Weekend', isRead: false }
];
// const article = [
// 	{
// 		title:'bomb blust' 
// 	}

// ];


const getnews = (req,res)=>{
	res.status(200).json({news});
};
const createnews = (req,res)=>{
	console.log("the request body is:",req.body)
	const newArticle = {
		        id: news.length + 1,
		        title: req.body.title,
		        isRead: false
		    };
		    news.push(newArticle);
		    res.status(200).json(newArticle);
	//res.status(200).json({message:"get all post "});
};
const updatenews = (req,res)=>{

	
	res.status(200).json({message:"all news update "});
};
const deletenews =(req,res)=>{
	
	res.status(200).json({message:"all news delete "});
};

module.exports = {getnews,createnews,updatenews,deletenews};


// // Get all news articles
// app.get('/news', (req, res) => {
//     res.json(news);
// });

// // Get a specific news article by ID
// app.get('/news/:id', (req, res) => {
//     const id = parseInt(req.params.id);
//     const article = news.find(n => n.id === id);
//     if (article) {
//         res.json(article);
//     } else {
//         res.status(404).send('Article not found');
//     }
// });

// // Mark a news article as read
// app.put('/news/:id/read', (req, res) => {
//     const id = parseInt(req.params.id);
//     const article = news.find(n => n.id === id);
//     if (article) {
//         article.isRead = true;
//         res.json(article);
//     } else {
//         res.status(404).send('Article not found');
//     }
// });

// // Add a new article
// app.post('/news', (req, res) => {
//     const newArticle = {
//         id: news.length + 1,
//         title: req.body.title,
//         isRead: false
//     };
//     news.push(newArticle);
//     res.status(201).json(newArticle);
// });

// // Delete an article
// app.delete('/news/:id', (req, res) => {
//     const id = parseInt(req.params.id);
//     const articleIndex = news.findIndex(n => n.id === id);
//     if (articleIndex !== -1) {
//         news.splice(articleIndex, 1);
//         res.status(204).send();
//     } else {
//         res.status(404).send('Article not found');
//     }
// });