import Layout from '../components/layout';

export default ({statusCode})=>(
    <Layout title="Error!!!">
        {statusCode ? `could not load your user data:Status Code ${statusCode}`:`couldn't ge the page, sorry!`}
    </Layout>
);