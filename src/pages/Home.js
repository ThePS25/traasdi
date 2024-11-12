import React from 'react';
import Layout from '../components/Layout/Layout';

const Home = () => {
  return (
    <Layout>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '95vh' }}>
        <img src="/Images/homepagepic.png" alt="Homepage" style={{ maxWidth: '1400px', maxHeight: '750px', marginBottom: '60px' }} />
      </div>
    </Layout>
  );
};

export default Home;
