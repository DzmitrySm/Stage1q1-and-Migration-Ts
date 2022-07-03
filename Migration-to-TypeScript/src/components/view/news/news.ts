import './news.css';
import { Inews } from '../../../types/index';
class News implements Inews {
    articles: [
        {
            source: { id: string; name: string };
            author: string;
            title: string;
            description: string;
            publishedAt: string;
            url: string;
            urlToImage: string;
        }
    ];
    constructor(
        articles: [
            {
                source: { id: string; name: string };
                author: string;
                title: string;
                description: string;
                publishedAt: string;
                url: string;
                urlToImage: string;
            }
        ]
    ) {
        this.articles = articles;
    }
    draw(data: [Inews['articles'][0]]): void {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;

        news.forEach((item, idx) => {
            const newsClone = newsItemTemp.content.cloneNode(true) as HTMLElement;

            if (idx % 2) (<HTMLElement>newsClone.querySelector('.news__item')).classList.add('alt');

            (<HTMLElement>newsClone.querySelector('.news__meta-photo')).style.backgroundImage = `url(${
                item.urlToImage || 'img/news_placeholder.jpg'
            })`;
            (<HTMLElement>newsClone.querySelector('.news__meta-author')).textContent = item.author || item.source.name;
            (<HTMLElement>newsClone.querySelector('.news__meta-date')).textContent = item.publishedAt
                .slice(0, 10)
                .split('-')
                .reverse()
                .join('-');

            (<HTMLElement>newsClone.querySelector('.news__description-title')).textContent = item.title;
            (<HTMLElement>newsClone.querySelector('.news__description-source')).textContent = item.source.name;
            (<HTMLElement>newsClone.querySelector('.news__description-content')).textContent = item.description;
            (<HTMLElement>newsClone.querySelector('.news__read-more a')).setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        (<HTMLElement>document.querySelector('.news')).innerHTML = '';
        (<HTMLElement>document.querySelector('.news')).appendChild(fragment);
    }
}

export default News;
