import { promises as fs } from 'fs';
import path from 'path';

const CACHE = '_buildCache.json';

const buildCache = {
    set: async (data: any) => {
        return await fs.writeFile(path.join(process.cwd(), CACHE), JSON.stringify(data).replaceAll(/\&amp\;/g, '&').replaceAll("&#8211;", '-'));
    },
    get: async (id: string): Promise<any> => {
        const datasJSON = await fs.readFile(path.join(process.cwd(), CACHE));
        const datas = JSON.parse(datasJSON as unknown as string);
        const index = datas.findIndex(x => x.id === parseInt(id));
        if (index == -1) {
            return {post:null,pre:{ id: datas.at(-1).id, title: datas.at(-1).title.rendered }};
        }
        const next = index > 0 ? { id: datas[index - 1].id, title: datas[index - 1].title.rendered } : null;
        const pre = index < datas.length - 1 ? { id: datas[index + 1].id, title: datas[index + 1].title.rendered } : null;
        return { post: datas[index], pre, next };
    }
};

export default buildCache;
