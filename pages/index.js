import dynamic from 'next/dynamic';
const IssuesNoSSR = dynamic(import('../components/Issues'), { ssr: false });

const Home = () => <IssuesNoSSR />;

export default Home;
