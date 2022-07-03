import './sources.css';
import { Isource } from '../../../types/index';
class Sources implements Isource {
    sources: [
        {
            id: string;
            name: string;
        }
    ];
    constructor(
        sources: [
            {
                id: string;
                name: string;
            }
        ]
    ) {
        this.sources = sources;
    }
    draw(data: [Isource['sources'][0]]): void {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;

            (<HTMLElement>sourceClone.querySelector('.source__item-name')).textContent = item.name;
            (<HTMLElement>sourceClone.querySelector('.source__item')).setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        (document.querySelector('.sources') as HTMLElement).append(fragment);
    }
}

export default Sources;
