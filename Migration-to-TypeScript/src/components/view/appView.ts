import News from './news/news';
import Sources from './sources/sources';
import { Inews } from '../../types/index';
import { Isource } from '../../types/index';

export class AppView {
    news: News;
    sources: Sources;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: Inews): void {
        const values = data.articles;
        this.news.draw(values);
    }

    drawSources(data: Isource): void {
        const values = data.sources;
        this.sources.draw(values);
    }
}

export default AppView;
