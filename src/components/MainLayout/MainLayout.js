import React from 'react';
import { Layout } from 'antd';
import PropTypes from 'prop-types';
import TopMenuComponent from '../TopMenu/TopMenu';
import LeftNavComponent from '../LeftNav/LeftNav';
import PageLogo from '../PageLogo/PageLogo';
// import DataRange from '../components/DateRange/DateRange';
import { ContentTip } from '../../styled/styled-components';
import '../../styled/menu.less';

const { Header, Sider, Content } = Layout;

function MainLayout({ location, tip, content }) {
  const hasLeftNav = location.pathname === '/' ? null : (
    <Sider style={{ background: '#fff', width: 200, boxShadow: '3px 0 3px #e5e5e5' }}>
      <LeftNavComponent location={location} />
    </Sider>
  );
  const contentSwitch = location.pathname === '/' ? (
    <Content style={{ padding: 0, margin: 0, minHeight: 280 }}>
      <h1>这是主页</h1>
    </Content>
  ) : (
    <div>
      <ContentTip>{tip}</ContentTip>
      <Content style={{ padding: 0, margin: 0, minHeight: 280 }}>
        {content}
      </Content>
    </div>
  );

  return (
    <Layout>
      <Header className="header" style={{ height: 70, width: '100%', background: '#182a3a' }}>
        <PageLogo />
        <TopMenuComponent location={location} />
      </Header>
      <Layout>
        {hasLeftNav}
        <Layout style={{ background: '#f4f5f7', padding: '56px 26px 100px 26px' }}>
          {contentSwitch}
        </Layout>
      </Layout>
    </Layout>
  );
}

MainLayout.PropTypes = {
  location: PropTypes.object.isRequired,
  tip: PropTypes.string,
  content: PropTypes.string,
};

export default MainLayout;
