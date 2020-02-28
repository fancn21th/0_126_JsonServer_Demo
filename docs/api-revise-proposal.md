# api 修改意见

## 分页

### 库存记录

- /sinoapi/getcargolist

  - actual output

  ```javascript
  {
    "total": 31,
    "data": [
      {
        "CargoGroupID": "5e231e65b8903116b4e9d10c",
        "RFID": "191614123401",
        "InOrderNo": "INS4211136251920190830000005",
        "OwnerCode": "DPTS",
        "ShelfGroup": "11A01A",
        "CargoStatus": 4,
        "SyncStatus": 0,
        "Timestamp": 1579510907759,
        "Isbro": [],
        "Cargos": [
          {
            "InOrderItemNo": "2",
            "CargoNo": "MA2228600126",
            "CargoName": "液压油22",
            "CargoBatchNo": "33",
            "Quantity": "5",
            "QuantityReal": "2",
            "Package": "Package",
            "DagLvl": "3",
            "SpeRemark": "SpeRemark",
            "MSDS": "MSDS"
          },

      ...
  ```

- expected output

  > 将 Cargos 数组中的每个对象与父对象属性合并, 扁平化数组

  ```javascript
  {
    "total": "不是31!!!" // 注意实际的total的数量要以合并后为准
    "data": [
      {
        "CargoGroupID": "5e231e65b8903116b4e9d10c",
        "RFID": "191614123401",
        "InOrderNo": "INS4211136251920190830000005",
        "OwnerCode": "DPTS",
        "ShelfGroup": "11A01A",
        "CargoStatus": 4,
        "SyncStatus": 0,
        "Timestamp": 1579510907759,
        "Isbro": [],
        "InOrderItemNo": "2",
        "CargoNo": "MA2228600126",
        "CargoName": "液压油22",
        "CargoBatchNo": "33",
        "Quantity": "5",
        "QuantityReal": "2",
        "Package": "Package",
        "DagLvl": "3",
        "SpeRemark": "SpeRemark",
        "MSDS": "MSDS"
      },

    ...
  ```

### 出库记录

- /sinoapi/getoutcargolist

  - 同上

### 盘库详情

- /sinoapi/getcargolistivt

  - 同上

## 全文搜索

- 所有 API
  - 支持 “全文搜索”
