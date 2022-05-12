
import Counter from 'components/Counter';
import Layout from 'components/Layout';
import { allDocs, Doc } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { ParsedUrlQuery } from 'querystring';
import { ReactElement } from 'react';

export async function getStaticPaths() {
    const paths: string[] = allDocs.map((doc) => doc.url);
    return {
        paths,
        fallback: false,
    };
}

interface IParams extends ParsedUrlQuery {
    slug: string;
}

export async function getStaticProps(context: { params: IParams }) {
    const { slug } = context.params;
    const doc: Doc | undefined = allDocs.find(
        (doc) => doc._raw.flattenedPath === slug
    );

    return {
        props: {
            doc,
        },
    };
}

export default function DocLayout({ doc }: { doc: Doc }) {
    const MdxBody = useMDXComponent(doc.body.code);
    return (
        <>
            <article>
                <div className="markdown-body" style={{ margin: `2rem` }}>
                    <MdxBody components={{ Counter }} />
                </div>
            </article>
        </>
    );
}

DocLayout.getLayout = (page: ReactElement) => {
    return <Layout>{page}</Layout>;
};
