import "@pages/textColumn/style/text-column.less";

import apis from "@apis/apis";
import { OptsVO } from "@common/commonVO";
import { Opts, OptsCN } from "@common/constant";
import CURD from "@components/curd/CURD";
import IconFont from "@components/iconFont/IconFont";
import RenderCollapsePanel from "@pages/textColumn/components/RenderCollapsePanel";
import {
  ITextColumnState,
  RenderItem,
  TCItemVO,
} from "@pages/textColumn/types/textColumn";
import { showConfirmModal } from "@utils/componentUtils";
import { formatTime } from "@utils/utils";
import { useRequest, useSetState } from "ahooks";
import {
  Button,
  Card,
  Collapse,
  Form,
  Input,
  List,
  message,
  Modal,
  Upload,
} from "antd";
import React, { FC, useCallback, useEffect } from "react";

/**
 * @description 文本栏目
 * */
const TextColumn: FC = () => {
  const [state, setTCState] = useSetState<Partial<ITextColumnState>>({});
  const {
    tcList = [],
    optType = Opts.add,
    modalVisible = false,
    curInfoId,
    updateList = false,
  } = state;
  /** form */
  const [modalForm] = Form.useForm();

  /** 新增栏目组件 */
  const AddMain: FC = React.memo(() => {
    return (
      <Button
        className="tc-add"
        type="dashed"
        onClick={() => {
          addModal().then();
        }}
      >
        <IconFont styleClass="iconadd1" iconClass="tc-a-icon" />
        新增栏目
      </Button>
    );
  });

  /** list render */
  const renderItem: RenderItem = (item: TCItemVO) => {
    return (
      <List.Item className="tc-l-item">
        <Collapse className="tc-l-i-item">
          <Collapse.Panel
            className="tc-l-i-panel"
            key={item._id}
            header={<span className="tc-l-i-header">{item.columnName}</span>}
            extra={
              <CURD
                showAdd={false}
                restartOrDisable={
                  item.state === 2 ? Opts.disable : Opts.restart
                }
                edit={async () => {
                  await editModal(item);
                }}
                disable={() => {
                  disableConfirm(item);
                }}
                restart={() => {
                  restartConfirm(item);
                }}
                delete={() => {
                  deleteConfirm(item);
                }}
              />
            }
          >
            <RenderCollapsePanel
              columnName={item.columnName}
              enName={item.enName}
              sortNum={item.sortNum}
              state={item.state}
              shortDesc={item.shortDesc}
              createTime={formatTime(item.createTime)}
              modifiedTime={formatTime(item.modifiedTime)}
            />
          </Collapse.Panel>
        </Collapse>
      </List.Item>
    );
  };

  /** 栏目列表网络请求 */
  const { loading, run: textColRequest } = useRequest(apis.getTextCol, {
    manual: true,
  });

  /** 网络请求更新到状态里面 */
  const handleTextColRequest = useCallback(async () => {
    const { data: _tcList } = await textColRequest();
    setTCState({
      tcList: _tcList || [],
    });
  }, []);

  /** Modal中upload处理 */
  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  /** 扔出一个delay 防止出现表单dom无法获取 */
  const modalOpenDelay = useCallback(
    ({ type, id }: Partial<{ type: OptsVO; id: string }>) => {
      return new Promise((resolve) => {
        resolve(
          setTCState({
            modalVisible: true,
            optType: type,
            curInfoId: id,
          })
        );
      });
    },
    [modalVisible, optType]
  );

  /** 取消、关闭弹窗 */
  const modalCancel = useCallback(() => {
    setTCState({
      modalVisible: false,
    });
  }, [modalVisible]);

  /** 点击弹窗确定 */
  const modalConfirm = useCallback(async () => {
    const values = await modalForm.validateFields();
    if (optType === Opts.add) {
      await createRequest({
        ...values,
        urls: [{}],
      });
    } else {
      await updateRequest({
        ...values,
        id: curInfoId,
        urls: [{}],
      });
    }
    setTimeout(() => {
      setTCState({
        modalVisible: false,
        updateList: !updateList,
      });
      message.success(`栏目${OptsCN[optType]}成功`);
    }, 500);
  }, []);

  /** 新增信息 */
  const addModal = useCallback(async (val?: TCItemVO) => {
    await modalOpenDelay({ type: Opts.add });
    const res = await textColSortNoRequest({ pId: curInfoId });

    if (val) {
      const { _id } = val;
      setTCState({ curInfoId: _id });
    }

    modalForm.resetFields();
    modalForm.setFieldsValue({ sortNum: res.data?.sortNum });
  }, []);

  /** 编辑信息 */
  const editModal = useCallback(async (val) => {
    const { _id } = val;
    await modalOpenDelay({
      type: Opts.edit,
      id: _id,
    });
    modalForm.setFieldsValue(val);
  }, []);

  /** 禁用信息 */
  const disableConfirm = useCallback(
    (val: TCItemVO) => {
      showConfirmModal(Opts.disable, async () => {
        await disableRequest({ id: val._id });
        setTCState({ updateList: 0 });
      });
    },
    [updateList]
  );

  /** 启用信息 */
  const restartConfirm = useCallback(
    (val: TCItemVO) => {
      showConfirmModal(Opts.restart, async () => {
        await restartRequest({ id: val._id });
        setTCState({ updateList: 1 });
      });
    },
    [updateList]
  );

  /** 删除信息 */
  const deleteConfirm = useCallback(
    (val: TCItemVO) => {
      showConfirmModal(Opts.delete, async () => {
        await deleteRequest({ id: val._id });
        setTCState({ updateList: 2 });
      });
    },
    [updateList]
  );

  /** 栏目序号网络请求 */
  const { run: textColSortNoRequest } = useRequest(apis.getTextColSortNo, {
    manual: true,
  });

  /** 新增栏目网络请求 */
  const { run: createRequest } = useRequest(apis.createTextCol, {
    manual: true,
  });

  /** 修改栏目网络请求 */
  const { run: updateRequest } = useRequest(apis.updateTextCol, {
    manual: true,
  });

  /** 禁用栏目网络请求 */
  const { run: disableRequest } = useRequest(apis.disableTextCol, {
    manual: true,
  });

  /** 启用栏目网络请求 */
  const { run: restartRequest } = useRequest(apis.restartTextCol, {
    manual: true,
  });

  /** 删除栏目网络请求 */
  const { run: deleteRequest } = useRequest(apis.deleteTextCol, {
    manual: true,
  });

  useEffect(() => {
    handleTextColRequest().then();
  }, [updateList]);

  return (
    <Card title="文本栏目" className="text-column">
      <AddMain />
      <List
        loading={loading}
        className="tc-list"
        dataSource={tcList}
        renderItem={renderItem}
      />
      <Modal
        className="tc-modal"
        title={`${OptsCN[optType]}文本栏目`}
        width={740}
        visible={modalVisible}
        onCancel={modalCancel}
        onOk={modalConfirm}
      >
        <Form form={modalForm} labelCol={{ span: 4 }} wrapperCol={{ span: 18 }}>
          <Form.Item label="序号" name="sortNum" rules={[{ required: true }]}>
            <Input disabled={optType === Opts.add} />
          </Form.Item>
          <Form.Item
            name="columnName"
            label="栏目名称"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="enName" label="英文名称">
            <Input />
          </Form.Item>
          <Form.Item
            label="栏目图片"
            name="urls"
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload listType="picture-card">
              <IconFont iconClass="iconupload" styleClass="tc-upload-icon" />
            </Upload>
          </Form.Item>
          <Form.Item name="shortDesc" label="栏目简介">
            <Input.TextArea rows={3} />
          </Form.Item>
        </Form>
      </Modal>
    </Card>
  );
};

export default TextColumn;
