import Link from 'next/link';
import Layout from '../components/Layout';
const Index =()=>(
    <Layout title="home">
    <Link href="/about">
        <a>Go to about</a> 
        </Link>
   <p>Welcome to the home page</p>
   </Layout> 
);
export default Index;