import { logInfo } from "@utils/utils";
import React, { FC, useEffect, useState } from "react";
import ReactDOM from "react-dom";

const PortalsModal: FC = () => {
  const [modal, setModal] = useState<any>();
  useEffect(() => {
    const container = document.getElementById("modal-dialog");
    logInfo(container);
    setModal(container);
  }, []);

  return modal && ReactDOM.createPortal(<div>asdfas</div>, modal);
};

export default PortalsModal;
