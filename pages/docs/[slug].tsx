// import { Counter } from 'components/counter';
import { Counter } from 'components/counter';
import Layout from 'components/Layout';
import { allDocs, Doc } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { ReactElement } from 'react';

export async function getStaticPaths() {
    const paths: string[] = allDocs.map((doc) => doc.url);
    return {
        paths,
        fallback: false,
    };
}

interface Props {
    doc: Doc;
}

export async function getStaticProps({ params }) {
    const doc: Doc = allDocs.find(
        (doc) => doc._raw.flattenedPath === params.slug
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
