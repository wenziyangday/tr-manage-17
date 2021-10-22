/**
 * 缓存处理工具
 */

interface StorageVO {
  storage: any;
  ssStorage: any;
  dataStorage: any;
}

class DataStorageUtil implements StorageVO {
  storage: any;

  ssStorage: any;

  dataStorage: any;

  constructor() {
    this.initDataStorage();
  }

  initDataStorage() {
    if (!window.localStorage || !window.sessionStorage) {
      // eslint-disable-next-line no-alert
      alert("该浏览器不支持，请使用新版Chrome或者Firefox。");
    } else {
      this.storage = window.localStorage;
      this.ssStorage = window.sessionStorage;
      this.dataStorage = {};
    }
  }

  //  初始化此工具类
  get getDataStorage() {
    return this.dataStorage;
  }

  setValue(key: string, value: string) {
    this.storage.setItem(key, value);
  }

  getValue(key: string) {
    return this.storage.getItem(key);
  }

  setObject<T>(key: string, object: T) {
    if (object !== null) {
      const value = JSON.stringify(object);
      this.storage.setItem(key, value);
    }
  }

  getObject(key: string) {
    const value: string = this.storage.getItem(key);
    try {
      return value !== "" ? JSON.parse(value) : value;
    } catch (e) {
      return "";
    }
  }

  removeByKey(key: string) {
    this.storage.removeItem(key);
  }

  ssSetValue(key: string, value: string) {
    this.ssStorage.setItem(key, value);
  }

  ssGetValue(key: string) {
    return this.ssStorage.getItem(key);
  }

  ssSetObject<T>(key: string, object: T) {
    if (object !== null) {
      const value = JSON.stringify(object);
      this.ssStorage.setItem(key, value);
    }
  }

  ssGetObject(key: string) {
    const value: string = this.ssStorage.getItem(key);
    try {
      return value !== "" ? JSON.parse(value) : value;
    } catch (e) {
      return "";
    }
  }

  ssRemoveByKey(key: string) {
    this.ssStorage.removeItem(key);
  }

  //  清除缓存
  clearAll() {
    this.ssStorage.clear();
    this.storage.clear();
  }
}

export default DataStorageUtil;
