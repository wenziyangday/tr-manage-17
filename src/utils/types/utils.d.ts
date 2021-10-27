import { AnyObjVO } from "@common/commonVO";

export type ParseStringVO = (uri: string) => AnyObjVO;
export type ParseObjVO = (obj: AnyObjVO) => string;
