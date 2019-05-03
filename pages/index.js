import React from 'react';
import Link from 'next/link';
import { List, Card, Divider } from 'antd';
import { Layout } from '../ry/components';

const productList = [
  {
    title: '',
    image: '',
    id: ''
  }
];
export default () => (
  <Layout
    pageTitle="Reactyv | Home"
  >
    <Divider dashed><h2>Products super-powered with reactyv-ities!</h2></Divider>
    <List
      grid={{ gutter: 16, column: 4 }}
      dataSource={productList}
      renderItem={item => (
        <List.Item>
          <Link href={`/product/${item.id}`}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src={item.image} />}
            >
              <Card.Meta
                title={item.title}
                description=""
              />
            </Card>
          </Link>
        </List.Item>
      )}
    />
  </Layout>
);
