import "@pages/textColumn/style/text-column.less";

import apis from "@apis/apis";
import CURD from "@components/curd/CURD";
import IconFont from "@components/iconFont/IconFont";
import RenderCollapsePanel from "@pages/textColumn/components/RenderCollapsePanel";
import {
  ITextColumnState,
  RenderItem,
  TCItemVO,
} from "@pages/textColumn/types/textColumn";
import { formatTime } from "@utils/utils";
import { useRequest, useSetState } from "ahooks";
import { Button, Card, Collapse, List } from "antd";
import React, { FC, useCallback, useEffect } from "react";

/**
 * @description 文本栏目
 * */
const TextColumn: FC = () => {
  const [state, setTCState] = useSetState<Partial<ITextColumnState>>({});
  const { tcList = [] } = state;
  // 新增栏目
  const AddMain: FC = React.memo(() => {
    return (
      <Button className="tc-add" type="dashed">
        <IconFont styleClass="iconadd1" iconClass="tc-a-icon" />
        新增栏目
      </Button>
    );
  });

  // list render
  const renderItem: RenderItem = (item: TCItemVO) => {
    return (
      <List.Item className="tc-l-item">
        <Collapse className="tc-l-i-item">
          <Collapse.Panel
            className="tc-l-i-panel"
            key={item._id}
            header={<span className="tc-l-i-header">{item.columnName}</span>}
            extra={<CURD showAdd={false} />}
          >
            <RenderCollapsePanel
              columnName={item.columnName}
              enName={item.enName}
              sortNum={item.sortNum}
              state={item.state}
              createTime={formatTime(item.createTime)}
              modifiedTime={formatTime(item.modifiedTime)}
            />
          </Collapse.Panel>
        </Collapse>
      </List.Item>
    );
  };

  const { loading, run: textColRequest } = useRequest(apis.getTextCol, {
    manual: true,
  });

  const handleTextColRequest = useCallback(async () => {
    const { data: _tcList } = await textColRequest();
    setTCState({
      tcList: _tcList || [],
    });
  }, []);

  useEffect(() => {
    handleTextColRequest().then();
  }, []);

  return (
    <Card title="文本栏目" className="text-column">
      <AddMain />
      <List
        loading={loading}
        className="tc-list"
        dataSource={tcList}
        renderItem={renderItem}
      />
    </Card>
  );
};

export default TextColumn;
