import React from 'react'
import { Table as ATable } from 'antd';
import { Table as ElTable } from 'element-react';
import styles from './MyTable.less';

export class MyTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      antd: {
        columns: [],
        dataSource: [],
      },
      elementReact: {
        columns: [],
        data: [],
      }
    };
  }

  render() {
    return (
      <div className={styles.MyTable}>
        <ATable
          columns={this.state.antd.columns}
          dataSource={this.state.antd.dataSource}
        />
        <ElTable
          style={{width: '100%'}}
          columns={this.state.elementReact.columns}
          data={this.state.elementReact.data}
        />
      </div>
    );
  }
}
