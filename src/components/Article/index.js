import { nanoid } from 'nanoid';
import noImgAvailable from '../../assets/img/No-Image-Available.jpg';
import './Article.css';
function Article({ articles }) {
	return (
		<div className="container">
			{articles.map((article) => {
				const { title, description, url, urlToImage } = article;
				return (
					<article key={nanoid()} className="article">
						<div className="article-img">
							<img
								src={
									!urlToImage || urlToImage.includes('aljazeera.net')
										? noImgAvailable
										: urlToImage
								}
								alt={title}
							/>
						</div>
						<div className="article-heading">
							<h2 className="article-title">{title}</h2>
							<p className="article-description">{description ?? ''}</p>
						</div>
						<a
							className="article-link"
							target="_blank"
							rel="noreferrer"
							href={url}
						>
							Read More
						</a>
					</article>
				);
			})}
		</div>
	);
}

export default Article;
