> 注释：下表中所有 mockAPI 的 url 和参数与真实 API 相同

|              真实 API               |            RESTful 路径             |                           备注                            |
| :---------------------------------: | :---------------------------------: | :-------------------------------------------------------: |
|       `/sinoapi/getcargolist`       |             `/cargoes`              |                     `orderno`参数可选                     |
|     `/sinoapi/getoutcargolist`      |            `/outcargoes`            |                     `orderno`参数可选                     |
|        `/sinoapi/getoplist`         |               `/ops`                |                     `orderno`参数可选                     |
|     `/sinoapi/getuploadresult`      |          `/uploadresults`           |                                                           |
|     `/sinoapi/updatesyncstatus`     |         `/updatesyncstatus`         |                忽略了`opsn`和`status`参数                 |
|     `/sinoapi/getoplistbytime`      |            `/opsbytime`             |                 忽略了`begin`和`end`参数                  |
| `/sinoapi/getuploadresultbyinorder` |      `/uploadresultbyinorder`       |                                                           |
|        `/sinoapi/getivtlist`        |               `/ivts`               |                                                           |
|     `/sinoapi/getcargolistivt`      |            `/cargoivts`             |                  忽略了`inventoryno`参数                  |
|    `/sinoapi/exportworkloaddev`     | `/workloaddevs-0` `/workloaddevs-1` | 按照`devtype`参数分为了两个资源，忽略了`begin`和`end`参数 |
|   `/sinoapi/exportworkloadstaff`    |          `/workloadstaffs`          |                 忽略了`begin`和`end`参数                  |
|  `/sinoapi/exportshelfutilization`  |        `/shelfutilizations`         |                 忽略了`begin`和`end`参数                  |
|   `/sinoapi/cargobrokenbyinorder`   |           `/cargobrokens`           |                                                           |
|           `sinoapi/img/*`           |                                     |                  配置了静态资源提供图片                   |
