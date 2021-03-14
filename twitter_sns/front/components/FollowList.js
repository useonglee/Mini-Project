import React from 'react';
import PropTypes from 'prop-types';
import { List, Button, Card } from 'antd';
import {StopOutlined} from '@ant-design/icons';

function FollowList({ header, data }) {
    return (
        <List
          style={{ marginBottom: 20 }}
          grid={{ gutter: 4, xs: 2, md: 3 }}
          size="small"
          header={<div>{header}</div>}
          // 더 보기 버튼
          loadMore={<div style={{ textAlign: 'center', margin: '10px 0' }}><Button>더 보기</Button></div>}
          // 경계선
          bordered
          dataSource={data}
          // 더미(가짜) 데이터
          renderItem={(item) => (
              <List.Item style={{ marginTop: 20 }}>
                  <Card actions={[<StopOutlined key="stop" />]}>
                      <Card.Meta description={item.nickname} />
                  </Card>
              </List.Item>
          )}
        />
    )
};

FollowList.propTypes = {
    header: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
}

export default FollowList
